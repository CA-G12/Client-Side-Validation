const email=document.querySelector('#email')
const password=document.querySelector('#password')
const confirmPassword=document.querySelector('#confirmPassword')
const submit=document.querySelector('#submit')

const emailValid= document.querySelector('.email-valid')
const passwordValid= document.querySelector('.passowrd-valid')
const confirmPasswordValid= document.querySelector('.confirmPassword-valid')
function createUser(e) {
  e.preventDefault()
  let trues={
    email:true,
    password:true,
    confirmPassword:true
  }
  if(!email.value.includes('@')|| email.value.length<4){
    emailValid.style.display='block'
  }else{
    emailValid.style.display='none'
    trues.email=false


  }
  if(!'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').find(e=>password.value.includes(e)) || password.value.length<7 ){
    passwordValid.style.display='block'

  }else{
    passwordValid.style.display='none'
    trues.password=false

  }
  
  if(confirmPassword.value !==password.value){
    confirmPasswordValid.style.display='block'

  }else{
    confirmPasswordValid.style.display='none'
    trues.confirmPassword=false

  }
 if(!trues.confirmPassword&&!trues.password &&!trues.email){
  email.value=''
  confirmPassword.value=''
  password.value=''
 }

}

email.addEventListener('keyup',()=>{
  isTrue((!email.value.includes('@')|| email.value.length<4),email)
})
confirmPassword.addEventListener('keyup',()=>{
  isTrue((confirmPassword.value !==password.value),confirmPassword)
})
password.addEventListener('keyup',()=>{
  isTrue((!'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').find(e=>password.value.includes(e)) || password.value.length<7),password)
})

function isTrue(isvalid,input) {
if(!isvalid){
input.style.border='1px solid green'
}else{
  input.style.border='1px solid red'

}
  
}

submit.addEventListener('click',createUser)