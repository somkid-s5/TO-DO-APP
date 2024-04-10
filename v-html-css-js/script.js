const input_todo = document.getElementById('input_todo');
const list_container = document.getElementById('list_container');

function addTodo() {
    if (input_todo.value === '') {
        alert("You must write something!");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = input_todo.value;
        list_container.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "⩐";
        li.appendChild(span);
    }
    input_todo.value = "";
    saveData();
}

// Add event listener to input field for "Enter" key press
input_todo.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      addTodo();
    }
  });



list_container.addEventListener("click", (e)  => {
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);


function saveData(){
    localStorage.setItem("data",list_container.innerHTML);

}

function showTask(){
    list_container.innerHTML = localStorage.getItem("data");
}

showTask()