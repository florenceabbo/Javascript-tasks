let fname = document.getElementById("name1");
let lname = document.getElementById("name2");
let Email1 = document.getElementById("Email4");
let Password = document.getElementById("Password5");
document.getElementById("v3").onclick = function(){
let firstname = fname.value;
let lastname = lname.value;
let Email12 = Email1.value;
let Password2 = Password.value;
document.getElementById("Name1").innerHTML= firstname;
document.getElementById("Name2").innerHTML= lastname;
document.getElementById("Emailaddress").innerHTML= Email12;
document.getElementById("password1").innerHTML= Password2;
return false;
}
