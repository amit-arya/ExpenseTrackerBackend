async function forgotpassword(e){
    e.preventDefault();

    const email = {email: e.target.email.value};

    try{
        const result = await axios.post("http://54.144.20.123:8080/password/forgotpassword", email);
    } 
    catch(err){
        console.log(err);
    }
}