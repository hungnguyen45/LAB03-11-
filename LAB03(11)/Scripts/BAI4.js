var taskInput = document.getElementById("taskInput");
var btnAdd = document.getElementById("btnAdd");
var taskList = document.getElementById("taskList");


function themTask() {

    var taskText = taskInput.value.trim();

    if (taskText === "") {
        return;
    }

    var task = document.createElement("div");

    task.className = "task";


    var checkbox = document.createElement("input");

    checkbox.type = "checkbox";


    var span = document.createElement("span");

    span.innerText = taskText;


    var deleteButton = document.createElement("span");

    deleteButton.className = "delete";

    deleteButton.innerText = "×";


    task.appendChild(checkbox);
    task.appendChild(span);
    task.appendChild(deleteButton);

    taskList.appendChild(task);


    taskInput.value = "";

    taskInput.focus();


    checkbox.addEventListener("change", function () {

        if (checkbox.checked) {

            task.classList.add("completed");

        }
        else {

            task.classList.remove("completed");

        }

    });


    deleteButton.addEventListener("click", function () {

        task.remove();

    });

}


btnAdd.addEventListener("click", function () {

    themTask();

});


taskInput.addEventListener("keydown", function (event) {

    if (event.key === "Enter") {

        themTask();

    }

});


var checkboxes = document.querySelectorAll(
    ".task input[type='checkbox']"
);


checkboxes.forEach(function (checkbox) {

    checkbox.addEventListener("change", function () {

        var task = checkbox.parentElement;

        if (checkbox.checked) {

            task.classList.add("completed");

        }
        else {

            task.classList.remove("completed");

        }

    });

});


var deleteButtons = document.querySelectorAll(".delete");


deleteButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        button.parentElement.remove();

    });

});