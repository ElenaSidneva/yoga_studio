const faqs=document.querySelectorAll(".faq")

faqs.forEach((faq)=>{
    faq.addEventListener("click", () => {
        faq.classList.toggle("active")
    })
})


const days=document.querySelectorAll(".days")

days.forEach((day)=>{
    day.addEventListener("click", () => {
        console.log("усть контакт")
        day.classList.toggle("active")
    })
})

/*const teachers=document.querySelectorAll(".teacher")

teachers.forEach((teacher)=> {
    teacher.addEventListener("click", () => {
        teacher.classList.toggle("active")
    })
})*/

const teachers=document.querySelectorAll(".teacher")
const teacherInfo=document.querySelectorAll(".teacher_info")


teachers.forEach((teacher, index) => {
    teacher.addEventListener('click', () => {   
        
        teacherInfo.forEach((teacher_info)=>{
            teacher_info.classList.remove("active")
        })

        teachers.forEach((removebtn)=>{
            removebtn.classList.remove("active")
            teacherInfo[index].classList.add("active")
        })
        
        teacher.classList.add("active") 

        teacherInfo.forEach((teacher_info)=>{

        })
        
    })
})


