async function signup(e){
  try{
     e.preventDefault();
     const signupDetails = {
        name: e.target.name.value,
        email: e.target.email.value,
        password: e.target.password.value
     }

     await axios.post('http://54.144.20.123:8080/user/signup', signupDetails)
     .then(res => {
      document.body.innerHTML += `<div style="color:blue">signup successful</div>
       <a href="../login/login.html">Login now</a>`; 
     })
     .catch(err => {
        document.body.innerHTML += `<div style="color:red">User already exists,
        Login or try with different emailId</div>`;
     })
  } catch(err){
      console.log(err); 
  }
}