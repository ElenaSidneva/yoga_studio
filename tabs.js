const buttons=document.querySelectorAll(".button")
const contents=document.querySelectorAll(".content")

buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        contents.forEach((content)=>{
            content.classList.remove("active")
        })

        buttons.forEach((removebtn)=>{
            removebtn.classList.remove("active")
            contents[index].classList.add("active")
        })
        button.classList.add("active")

        contents.forEach((content)=>{

        })
    })
})

const abonements=document.querySelectorAll(".group_abonement")

abonements.forEach((group_abonement)=> {
    group_abonement.addEventListener("click", () => {
        group_abonement.classList.toggle("active")
    })
})

/*const descrip=document.querySelectorAll(".abonement_text")
const strelka=document.querySelectorAll(".strelka")*/
/*abonements.forEach((group_abonement, index) => {
    group_abonement.addEventListener('click', () => { 
        descrip.forEach((abonement_text)=>{
            abonement_text.classList.remove("active")
        })

        abonements.forEach((removebtn)=>{
            removebtn.classList.remove("active")
            descrip[index].classList.add("active")
        })

        strelka.forEach((removebtn)=>{                   
            removebtn.classList.remove("active")
            strelka[index].classList.add("active")
        })  

        group_abonement.classList.add("active")  

        descrip.forEach((abonement_text)=>{

        })
        
    })
    
})*/


