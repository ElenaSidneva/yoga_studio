import path from 'path';
import process from 'process';
import cors from 'cors';
import Enqueue from 'express-enqueue';
import compression from 'compression';
import * as dotenv from 'dotenv';
import express from 'express';

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
    console.log(req.body)
    res.send({status:true});
});

app.use(queue.getErrorMiddleware());

app.listen(port, () => {
    console.log('pid: ', process.pid);
    console.log('listening on http://localhost:' + port);
});

