let myImage = document.querySelector("img")

myImage.onclick = function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/my-image.png") {
    myImage.setAttribute("src", "images/my-image-2.png");
  } else {
    myImage.setAttribute("src", "images/my-image.png");
  }
}
  

let myButton = document.querySelector("button")
let myHeading = document.querySelector("h1")

function setUserName() {
    let myName = prompt("请输入你的名字。")
    if (!myName) {
        setUserName()
    } else {
        localStorage.setItem("name", myName)
        myHeading.textContent = myName + "，向前";
    }
}

if (!localStorage.getItem("name")) {
    setUserName()
} else {
    let storedName = localStorage.getItem("name")
    myHeading.textContent = storedName + "，向前！"
}

myButton.onclick = function () {
    setUserName()
}

