let user = document.querySelector(".user")
let company = document.querySelector(".company")
let namecompany = document.querySelector(".name_company")
company.addEventListener("click",()=>{
  company.classList.add("bord")
  user.classList.remove("bord")
  namecompany.style.display="block"
})
user.addEventListener("click",()=>{
  user.classList.add("bord")
  company.classList.remove("bord")
  namecompany.style.display="none"
})
