
//Storing the html values  in these variables
let id = (id) => document.getElementById(id);

let classes = (classes) => document.getElementsByClassName(classes);
let username = id("username"),
  email = id("email"),
  password = id("password"),
  form = id("form"),
  
  errorMsg = classes("error"),
  successIcon = classes("success-icon"),
  failureIcon = classes("failure-icon")

  form.addEventListener("submit", (e) => {
    e.preventDefault();
  });


//formulae for if nothing is right
//if(fname&&, lname&&, country&&)when all are not privided
  let js = (id, serial, message) => {

    if (id.value.trim() === "") {
        errorMsg[serial].innerHTML = message;
      id.style.border = "2px solid red";
      
      // icons
      failureIcon[serial].style.opacity = "1";
      successIcon[serial].style.opacity = "0";
    
     
      errorMsg[serial].innerHTML = message;
    id.style.border = "2px solid red";
    
    }else {
        errorMsg[serial].innerHTML = ""
        id.style.border = "2px solid green";
        
        // icons
        failureIcon[serial].style.opacity = "0";
        successIcon[serial].style.opacity = "1";
    }
  }


  form.addEventListener("submit", (e) => {
    e.preventDefault();
  
    js(username, 0, "Please enter your name");
    //  js(!username,/(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})/ ,"only letters")
    js(email, 1, "Please fill in the correct email");
    js(password, 2, "please enter your password");
  });
 
  