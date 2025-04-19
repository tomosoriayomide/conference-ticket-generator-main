let pageTwo = document.getElementById("cont2");
let pageOne = document.getElementById("cont1");
function generate() {
  pageTwo.style.display = "block";
  pageOne.style.display = "none";
  pageTwo.style.animation = "forwards";
  // setTimeout(400);
  Name();
  email();
  Name2();
  githubName();
  changeImage();
  pics();
}
let userName = document.getElementById("name");
let userName3 = document.getElementById("githubName");
let userNameBottom = document.getElementById("name2");
let userInput = document.getElementById("fullName");
let userName1 = document.getElementById("email");
let userInput2 = document.getElementById("emailName");
let userGithub = document.getElementById("githubAccount");
let stateError1 = document.getElementById("error1");
let stateError2 = document.getElementById("error2");
let stateError3 = document.getElementById("error3");
let man = document.getElementById("userPic");
function Name() {
  userName.innerHTML = userInput.value;

  if (userInput.value === "") {
    stateError1.style.display = "flex";
    pageOne.style.display = "block";
    pageTwo.style.display = "none";
    userInput.style.border = "1px solid  hsl(7, 88%, 67%)";
  }
  // prompt.name.indexOf[0];
}
// function focus() {
//   userName.style.border = "5px solid red";
//   userName.style.display = "none";
//   userGithub.style.border = "5px solid white";
//   userName3.style.border = "5px solid white";
// }
function Name2() {
  userNameBottom.innerHTML = userInput.value;
  // prompt.name.indexOf[0];
}
function githubName() {
  userGithub.innerHTML = userName3.value;
  if (userName3.value === "") {
    stateError3.style.display = "flex";
    pageOne.style.display = "block";
    pageTwo.style.display = "none";
    userName3.style.border = "1px solid  hsl(7, 88%, 67%)";
  }
  // prompt.name.indexOf[0];
}
function email() {
  userName1.innerHTML = userInput2.value;
  if (userInput2.value === "") {
    stateError2.style.display = "flex";
    pageOne.style.display = "block";
    pageTwo.style.display = "none";
    userInput2.style.border = "1px solid  hsl(7, 88%, 67%)";
  }
}
let number = document.getElementById("userId");
let n = Math.floor(Math.random() * 2001);
console.log("random number", n);

n = n < 1000 ? "0" + n : n;
n = n < 100 ? "0" + n : n;
n = n < 10 ? "0" + n : n;

function random() {
  number.innerHTML = `<p>#${n}</p>`;

  // number.style.color = "red";
  // if(i)
}
let user = document.getElementById("userPic");
function changeImage() {
  const picupload = document.getElementById("pic");
  const input = document.getElementById("file");

  // function input{
  picupload.addEventListener("click", () => {
    input.click;
    // input.innerHTML=user
    user.innerHTML = input;
  });
  input.addEventListener("change", (Event) => {
    const file = Event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        picupload.src = e.target.result;
      };
      reader.readAsDataURL(file);
      changeImage.apply = user;

      // user.innerHTML = reader;
    }
  });

  document.getElementById("pic").addEventListener("click", function () {
    document.getElementById("file").click();
  });
  // picupload.innerHTML = FileReader;
  // picupload = input.value;
  // picupload.style.padding = 10;
}
// user.innerHTML = changeImage();
// console.log("function",
function pics() {
  //   // changeImage();
  //   // user.innerHTML = picupload;
}
// input.apply.click
// }
window.addEventListener("load", () => {
  let loader = document.getElementById("preloader");
  let page = document.getElementById("cont1");
  setTimeout(() => {
    loader.style.display = "none";
    page.style.display = "block";
  }, 10000);
});
