// variable
let input = document.getElementById("text");
let btn = document.getElementById("btn");
let tasks = document.getElementById("task");
let time = document.getElementById("time");
let date = document.getElementById("date");
let popup = document.getElementById("pop-up");
let closeBtn = document.getElementById("close");
let txt = document.getElementById("txt");

// date & time
setInterval(() => {
  let now = moment().format(" HH : mm : ss ");
  let d = moment().format("ll");
  time.innerHTML = now;
  let nowA = moment().format(" a");
  txt.innerHTML = nowA;
  date.innerHTML=d;
}, 1000);


// to-do app

btn.addEventListener("click", () => {
  if (input.value === "") {
    popup.classList.add("pop-up");
    document.getElementById("close").addEventListener("click", () => {
      popup.classList.remove("pop-up");
    });
  } else {
    let text = input.value;
    let task = createTask(text);
    task.innerHTML += `<span id="icon" class="material-symbols-outlined">
        delete_forever
        </span>`;
    tasks.appendChild(task);
    input.value = "";
  }
});

tasks.addEventListener("click", (e) => {
  if (e.target.nodeName === "SPAN") {
    e.target.parentElement.style = "display :none";
  }

  if (e.target.nodeName === "LI") {
    e.target.classList.toggle("done");
  }
});

function createTask(text) {
  let li = document.createElement("li");
  li.textContent = text;
  return li;
}
// function addTask(){
//     tasks.firstChild.createElement(element);
// }
