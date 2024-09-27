
// // console.log(obj.name);

// localStorage.setItem("studentName","Tayyaba")

// // var colors = ["pink","yellow","blue"]

// var obj = {
//     name:"Tayyaba",
//     class:"web",
//     name:"jaweria"
// }


// sessionStorage.setItem("myObj",JSON.stringify(obj))


// var bringObj = JSON.parse(localStorage.getItem("myObj"))


// bringObj.age = 23;


// sessionStorage.setItem("myObj",JSON.stringify(bringObj))

// sessionStorage.setItem("number","90")
// sessionStorage.getItem((+"number"))


// // localStorage.removeItem("number")
// // localStorage.clear()



// Taking data 

var usersData = []

var registerBtn = document.getElementById("register");
registerBtn && registerBtn.addEventListener("click", function () {

    var rName = document.getElementById("registerName")
    var rEmail = document.getElementById("registerEmail")
    var rPassword = document.getElementById("registerPass")



    var userObj = {
        name: rName.value,
        email: rEmail.value,
        password: rPassword.value
    }
    usersData.push(userObj)


    rName.value = ""
    rEmail.value = ""
    rPassword.value = ""

    console.log(usersData);
    localStorage.setItem("users", JSON.stringify(usersData))
    var fetchingData = JSON.parse(localStorage.getItem("users"));
    fetchingData.push(userObj)


   window.location.href = "login.html"


})


var loginBtn = document.getElementById("login")


loginBtn && loginBtn.addEventListener("click", function (event) {


    var loginEmail = document.getElementById("loginEmail")
    var loginPass = document.getElementById("loginPassword")


    var users = JSON.parse(localStorage.getItem("users"));


    for (var user of users) {
        if (user.email == loginEmail.value) {

            if (user.password == loginPass.value) {
                // console.log("login successfully");

                Swal.fire({
                    title: "Login!",
                    text: "You Are Login Successfully",
                    imageUrl: "https://unsplash.it/400/200",
                    imageWidth: 400,
                    imageHeight: 200,
                    imageAlt: "Custom image"
                  });

            }

            else{
                // console.log("email is ok but password is wrong");
            
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Email Is Ok But Password Is Wrong!",
                  });

            }
        }
    
    else{

if(loginPass.value == user.password){
    // console.log("password is ok but email is wrong");

    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Password Is Ok But Email Is Wrong!",
      });


}

    }
    
    }
}
)



// var id = setInterval(function(){

//     console.log("hello")

// },1000)

// console.log(id);

// setTimeout(function(){
//     clearInterval(id)
// },5000)