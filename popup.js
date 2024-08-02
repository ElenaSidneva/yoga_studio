const clientOrder = document.querySelector(".client_order_popup")
const grey = document.querySelector("#grey")
const order = document.querySelectorAll(".sign_up")
const closeBtns = document.querySelectorAll(".close_button")

        //function show(state){
        //    clientOrder.style.display = state;
        //    grey.style.display = state;
        //}
        
order.forEach((order, index) => {
   order.addEventListener('click', () => {
        console.log("кнопочка работает")
        clientOrder.style.display = 'block';
        grey.style.display = 'block';
    }) 
})


grey.addEventListener('click', function() {
    clientOrder.style.display = 'none';
    grey.style.display = 'none';
    thankCard.style.display = 'none';
})
        
closeBtns.forEach((closeBtn, index)=> {
    closeBtn.addEventListener('click', () => {     
        closeBtn.classList.add("active")
        clientOrder.style.display = 'none';
        grey.style.display = 'none';
        thankCard.style.display = 'none';
    })
})

const sendForm = document.querySelector(".send_form")
const thankCard = document.querySelector(".thank_for_order")

sendForm.addEventListener('click',() => {
    clientOrder.style.display = 'none';
    thankCard.style.display = 'block';
})