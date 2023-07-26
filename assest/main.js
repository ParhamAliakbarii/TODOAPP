const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');
const themeSwitcherBtn = document.querySelector('.theme_switcher');
const bodyTag = document.querySelector('body');

function addTask() {
    if (inputBox.value === "") {
        alert('You most write something!');
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
};


listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);


function saveData() {
    localStorage.setItem("data", listContainer.innerHTML)
};

function showTasks() {
    listContainer.innerHTML = localStorage.getItem("data");
};
showTasks();



// ------------- THEME SWITCHER ------------------------------------------------------------

themeSwitcherBtn.addEventListener("click", () => {
    bodyTag.classList.toggle('darkmode');

    const themeSwitcherBtnImg = themeSwitcherBtn.children[0];
    themeSwitcherBtnImg.setAttribute('src',
        themeSwitcherBtnImg.getAttribute('src') === "/assest/pic/moon.png" 
        ? "/assest/pic/sun.png" 
        : "/assest/pic/moon.png"

    );
});