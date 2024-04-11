const inputBox = document.getElementById("input-box"); 
const listContainer = document.getElementById("list-container");

function addTask() {
    if (inputBox.value === '') {
        alert("Write down your task!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "&#128465;";
         li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

document.querySelector("button").addEventListener("click", addTask); 

listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
});

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();
function toggleMode() {
    const body = document.body;
    const themeStyle = document.getElementById('theme-style');

    
    body.classList.toggle('dark-mode');

    
    if (themeStyle.getAttribute('href') === 'style.css') {
        themeStyle.setAttribute('href', 'dark-mode.css');
    } else {
        themeStyle.setAttribute('href', 'style.css'); 
    }
}
