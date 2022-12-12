// //Storing the html values  in these variables
// let id = (id) => document.getElementById(id);

// let classes = (classes) => document.getElementsByClassName(classes);
//   form = id("form"),

// let Numbers = id("Numbers"),
// form = id("form"),
// errorMsg = classes("error"),
// successIcon = classes("success-icon"),
// failureIcon = classes("failure-icon")

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
// });

// let js = (id, serial, message) => {

//     if (id.value.trim() === "") {
//         errorMsg[serial].innerHTML = message;
//       id.style.border = "2px solid red";
      
//       // icons
//       failureIcon[serial].style.opacity = "1";
//       successIcon[serial].style.opacity = "0";
//     } 
    
//     else {
//         errorMsg[serial].innerHTML = "";
//         id.style.border = "2px solid green";
        
//         // icons
//         failureIcon[serial].style.opacity = "0";
//         successIcon[serial].style.opacity = "1";
//     }
//   }
//   form.addEventListener("submit", (e) => {
//     e.preventDefault();
  
//     js(Numbers, 0, "Enter only numbers")
//   });


//Storing the html values  in these variables
let id = (id) => document.getElementById(id);

let classes = (classes) => document.getElementsByClassName(classes);
let Numbers = id("Numbers"),

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
    } 
    
    else {
        errorMsg[serial].innerHTML = "";
        id.style.border = "2px solid green";
        
        // icons
        failureIcon[serial].style.opacity = "0";
        successIcon[serial].style.opacity = "1";
    }
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
  
    js(tel, 0, "Please enter only numbers");
  });