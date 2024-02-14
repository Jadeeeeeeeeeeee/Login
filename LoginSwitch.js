let Login = document.getElementById("LoginSwitch");
let SignUp = document.getElementById("SignUp");
let UserName = document.getElementById("UserName");
let Email = document.getElementById("Email");
let password = document.getElementById("password");
let LoginFinish = document.getElementById("logginFinish");
let FinishSignUp = document.getElementById("SignUpFinish");

Login.onclick = function Change() {
                  UserName.style.visibility = "hidden";
                  Email.style.top = "30%";
                  password.style.top = "50%";
                  LoginFinish.style.visibility = "visible";
                  FinishSignUp.style.visibility = "hidden";
}

SignUp.onclick = function Change2() {
                  UserName.style.visibility = "visible";
                  Email.style.top = "40%";
                  password.style.top = "55%";
                  LoginFinish.style.visibility = "hidden";
                  FinishSignUp.style.visibility = "visible";       
}