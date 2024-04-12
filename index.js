// project

document.addEventListener('DOMContentLoaded', function() {
    const inputBox = document.getElementById("input-box");
    const listContainer = document.getElementById("list-container");
    const addButton = document.getElementById("input-button");

    function addTask(callback) {
        if (inputBox.value === '') {
            alert("Write down your task!");
        } else {
            let li = document.createElement("li");
            li.textContent = inputBox.value;
            listContainer.appendChild(li);
            let span = document.createElement("span");
            span.innerHTML = "&#128465;";
            li.appendChild(span);
        }
        inputBox.value = "";
        saveData(callback);
    }

    addButton.addEventListener("click", function() {
        addTask(function() {
            console.log("Task added successfully!");
        });
    });

    listContainer.addEventListener("click", function(e) {
        if (e.target.tagName === "LI") {
            e.target.classList.toggle("checked");
            saveData();
        } else if (e.target.tagName === "SPAN") {
            e.target.parentElement.remove();
            saveData();
        }
    });

    window.addEventListener("beforeunload", function() {
        saveData();
    });

    function saveData(callback) {
        localStorage.setItem("data", listContainer.innerHTML);
        if (typeof callback === 'function') {
            callback();
        }
    }

    function showTask() {
        listContainer.innerHTML = localStorage.getItem("data");
    }

    showTask();

    

    // this is to show daily routine
    fetch('db.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        
        data.tasks.forEach(task => {
          let li = document.createElement("li");
          li.textContent = task.title;
          listContainer.appendChild(li);
          let span = document.createElement("span");
          span.innerHTML = "&#128465;";
          li.appendChild(span);
        });
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
});
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
