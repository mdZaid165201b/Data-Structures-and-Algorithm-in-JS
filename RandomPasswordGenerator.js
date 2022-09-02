//  Random Password Generator using JavaScript


passwordGenerator  = (passwordLength) => {
    let keys = "ABCDEFGHIJKLMNOPQRSTUVWXYZbcdefghijklmnopqrstuvwxyz@!#$%^&*()_+/~':><|";
    let password = "";
    for(let i = 0;i<=passwordLength;i++){
        let randomKey = keys.charAt(Math.ceil(Math.random() * keys.length));
        password+=randomKey;
    }
    console.log(password);
}

passwordGenerator(10);