let UL = document.getElementById("listContainer"); 

let MyDiv = document.createElement("div");
MyDiv.classList.add("TaskContainer");

document.getElementById('inputText').addEventListener('keyup', function(event) {
    if (event.keyCode === 13) {
      document.getElementById('addButton').click();
    }
  });

function NewTask() {
    let unchecked=document.createElement('i');
    unchecked.classList.add("fa-solid", "fa-square", "fa-2xl");
 
    unchecked.addEventListener('click',handle);

    let checked=document.createElement('i');
    checked.classList.add("fa-solid","fa-square-check","fa-2xl");
   let X=document.createElement('i');
   X.classList.add("fa-solid","fa-square-xmark","fa-2xl");
   X.addEventListener('click',deletes);
    let MyDiv = document.createElement("div");
    MyDiv.classList.add("TaskContainer");
    let input = document.getElementById('inputText');

    if (input.value === "") {
        alert("first enter the tasks");
    } else {
        let textSpan = document.createElement("span");
        textSpan.classList.add("hello");
        textSpan.textContent = input.value;


        MyDiv.appendChild(unchecked);  
        MyDiv.appendChild(textSpan);
        MyDiv.appendChild(X);
        UL.appendChild(MyDiv);
        input.value = "";        
        saveData();
    }
}

function handle(){
    this.classList.toggle("fa-square");
    this.classList.toggle("fa-square-check");
    console.log("the icon function is executing")
    saveData();


}
var element=document.getElementsByClassName("fa-solid fa-square fa-2xl");
for(var i=0;i<element.length;i++){
    element[i].addEventListener('click',handle);
}

function deletes(){
        this.parentElement.remove();
        saveData();

}

function saveData(){
    localStorage.setItem("data",UL.innerHTML);
}
function showTask(){  
    UL.innerHTML=localStorage.getItem("data") || "";
    var element=document.getElementsByClassName("fa-solid fa-square fa-2xl");
    for(var i=0;i<element.length;i++){
        element[i].addEventListener('click',handle);
    }

    var deleteIcon=document.getElementsByClassName("fa-solid fa-square-xmark fa-2xl");
    for(var j=0;j<deleteIcon.length;j++){
        deleteIcon[j].addEventListener('click',deletes);
    }
    document.getElementById('inputText').focus();

}

showTask();
