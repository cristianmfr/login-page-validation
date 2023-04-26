const btn = document.querySelector("#send");

btn.addEventListener("click", function(e){

    e.preventDefault();

    const user = document.querySelector("#username");
    const pass = document.querySelector("#password");

    const valueUser = username.value;
    const valuePassword = password.value

    if(valueUser == "admin" && valuePassword == "admin"){
        alert("Sucess validation!")
    }else(
        alert("Credencials not found!")
    );

})

function forgetPass(){
    alert("Only admins can access.")
}

function facebookPage(){
    window.open("/popup's page/facebook.html", "chromeWindow", "popup")
}

function linkedinPage(){
    window.open("/popup's page/linkedin.html", "chromeWindow", "popup")
}

function githubPage(){
    window.open("/popup's page/github.html", "chromeWindow", "popup")
}