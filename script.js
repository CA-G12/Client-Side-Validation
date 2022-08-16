const username=document.getElementById("username")
const pass1=document.getElementById("password")
const pass2=document.getElementById("confirmpassword")
const form=document.getElementById("form")
form .addEventListener("submit",(e)=>{
    e.preventDefault();
validate ()

})
function giverror(element,message){
 const control=element.parentElement
 const em=control.querySelector(".error")
 em.innerText=message
}
function done(element){
    const control=element.parentElement
    const em=control.querySelector(".error")
    em.innerText=""
   }
function validate (){
const namevalue=username.value.trim()
const pass1value=pass1.value.trim()
const pass2value=pass2.value.trim()
if(namevalue==="")
giverror(username,"name cant be empty")
else
done(username)
if(pass1value==="")
giverror(pass1,"password cant be empty")
else if(pass1value.length<10)
giverror(pass1," password  length must be 10")
else
done(pass1)
if(pass2value==="")
giverror(pass2," cant be empty")
else if(pass1value!==pass2value)
giverror(pass2,"  two passwords must be match")
else
done(pass2)

}