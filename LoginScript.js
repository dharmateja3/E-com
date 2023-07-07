const login=(event)=>{
    event.preventDefault()
    const email = document.getElementById(`myemail`).value
    const password = document.getElementById(`mypwd`).value
    console.log(email,password)
   
if(email===`dharmatejadussa@gmail.com` && password===`teja@123`){
    alert(`Login Successfull!!`)
    localStorage.setItem(`auth`,true)
    window.location.href="index.html"
}
else{
    alert(`Email or Password is incorrect!`)
}
}
const verify=()=>{
    if(localStorage.auth){
        window.location.href="/"
    }
}
verify()