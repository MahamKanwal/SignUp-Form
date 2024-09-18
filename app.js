
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


document.getElementById("register").addEventListener("click",function(){
    var name = document.getElementById("name")
    var email = document.getElementById("email")
    var password = document.getElementById("password")

    console.log(name.value,password.value,email.value);


    var users=[];
    var userObj = {
    name: name.value,
    email:email.value,
    password:password.value
    }


    users.push(userObj)
    console.log(userObj);
    

    name.value =''
    email.value =''
    password.value =''
    localStorage.clear()
    localStorage.setItem("userData",JSON.stringify(users))
    
})