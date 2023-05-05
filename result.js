

function validateform() {
  var mail = document.myform.mail.value;
  var name = document.myform.name.value;
    var password=document.myform.password.value;

  if (mail == null || mail == "") {
    alert("Mail can't be blank");
    return false;
  }
  else if (name == null || name == "") {
    alert("Fill the name");
    return false;
  }
  else if (password.length < 6) {
    alert("Password must be at least 6 characters long.");
    return false;
  }

   else {
    alert("Filled the form.");
  }
}

const wrapper = document.querySelector(".wrapper");
const loginlink = document.querySelector(".login-link");
const reglink = document.querySelector(".reg-link");
const btnpopup = document.querySelector(".btnlogin");
const iconclose = document.querySelector(".icon-close");

reglink.addEventListener("click", () => {
  wrapper.classList.add("active");
});

loginlink.addEventListener("click", () => {
  wrapper.classList.remove("active");
});

btnpopup.addEventListener("click", () => {
  wrapper.classList.add("active-popup");
});

iconclose.addEventListener("click", () => {
  wrapper.classList.remove("active-popup");
});


