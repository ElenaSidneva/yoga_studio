import path from 'path';
import process from 'process';
import cors from 'cors';
import Enqueue from 'express-enqueue';
import compression from 'compression';
import * as dotenv from 'dotenv';
import express from 'express';
import TelegramBot from 'node-telegram-bot-api';

// const token = 'вставить айпи тоукена';
const bot = new TelegramBot(token, {polling: true});
console.log("good", bot)

// Matches "/echo [whatever]"
bot.onText(/\/echo (.+)/, (msg, match) => {
    // 'msg' is the received Message from Telegram
    // 'match' is the result of executing the regexp above on the text content
    // of the message
  
    const chatId = msg.chat.id;
    const resp = match[1]; // the captured "whatever"
  
    // send back the matched "whatever" to the chat
    bot.sendMessage(chatId, resp);
  });
  
  // Listen for any kind of message. There are different kinds of
  // messages.
  bot.on('message', (msg) => {
    console.log("message msg", msg.chat.id);
    const chatId = msg.chat.id;
  
    // send a message to the chat acknowledging receipt of their message
    bot.sendMessage(chatId, 'Received your message');
  });

console.log("telegrambot", TelegramBot)

let __dirname = process.cwd();

dotenv.config();

let app = express();

const port =  process.env.PORT || 3001;

app.use((req, res, next) => {
    console.log(`request: ${req.method}: ${req.path}`);
    next();
});

app.use(express.json());

const queue = new Enqueue({
    concurrentWorkers: 4,
    maxSize: 200,
    timeout: 30000
});

console.log('__dirname', __dirname);

app.use(await cors({credentials: true}));
app.use(queue.getMiddleware());

app.use((req, res, next) => {
    res.set('Cross-Origin-Embedder-Policy', 'require-corp');
    res.set('Cross-Origin-Opener-Policy', 'same-origin');
    next();
});

app.use(compression());

app.use(express.static(__dirname));
app.get(`/*`, async (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '/index.html'));
});

app.post(`/telegram`, async (req, res) => {
    const chatId = 989677814;
    console.log(req.body)
    bot.sendMessage(chatId, JSON.stringify(req.body));
    res.send({status:true});
});

app.use(queue.getErrorMiddleware());

app.listen(port, () => {
    console.log('pid: ', process.pid);
    console.log('listening on http://localhost:' + port);
});

