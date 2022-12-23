function dark() {
  var element = document.body;
  element.classList.toggle("light-mode");

  //set data to local storage
  let key = "theme";
  let data;
  if (element.classList.contains("light-mode")) {
    data = "dark";
    console.log("dark");
  } else {
    console.log("light");
    data = "light";
  }

  localStorage.setItem(key, data);
}
//get data from local storage
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.toggle("light-mode");
}

const img = document.getElementById("sun");
let toggle = true;
img.addEventListener("click", function () {
  toggle = !toggle;
  if (toggle) {
    img.src = "img/sun.png";
  } else {
    img.src = "img/moon.png";
  }
});
