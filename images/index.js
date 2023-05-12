
console.log("from index.js")
let popup = document.getElementById("popup");
console.log(popup)
function openPopup(){
    popup.classList.add("openpopup1");
    console.log("hello")
}

function openPopup(){
    popup.classList.remove("openpopup1");

}

// for opening  the form
let open = document.getElementById("open");
function openform(){
    open.classList.add("open-form")
    console.log("clicked")
}
console.log(open)