let user = document.querySelector(".user")
let company = document.querySelector(".company")
let namecompany = document.querySelector(".name_company")
let formuser = document.querySelector(".formuser")
let formcompany = document.querySelector(".formcompany")
let btn_login = document.querySelector(".btn_login")
let input1_user = document.querySelector(".input_user")



company.addEventListener("click",()=>{
  company.classList.add("bord")
  user.classList.remove("bord")
  
  formuser.style.display="none"
  formcompany.style.display="block"
})
user.addEventListener("click",()=>{
  user.classList.add("bord")
  company.classList.remove("bord")
  formuser.style.display="block"
  formcompany.style.display="none"
})

