let tasksContent = ""
let taskContainer = document.getElementById("list");
var new_task = document.getElementById("input");
let popup = document.getElementById('newData');
popup.style.bottom ="10px";
popup.style.opacity = "0";
var currentEditIndex = 0;
const taskArr = [
    {
        id:1,
        title:"cook",
        status:"uncompleted",
    },
    {
        id:2,
        title:"sleep",
        status:"completed",
    }
]
function createTask (title, taskId){
    this.id = taskId;
    this.status = "uncompleted";
    this.title = title;
}
showForm.addEventListener('click', popupfunction);
function popupfunction (){
    if(popup.style.opacity === "0"){
    // if(popup.style.bottom=== '255px'){
        popup.style.opacity = "1";
        popup.style.bottom ="45px ";
        popup.style.opacity = "1";
    }
    else{
        // popup.style.display = "none";
        popup.style.opacity = "0";
        popup.style.opacity = "0";
        popup.style.bottom ="10px";
        // popup.style.display = 'block';
    }
    
}
function updateDom(){
    tasksContent = ""
    for(let i = 0; i < taskArr.length; i++){
        console.log(taskArr);
        tasksContent += `
        <li class="items">
        <i id=""check" onClick = completed(${i}) class="fa fa-check" aria-hidden="true"></i>
        ${taskArr[i].title}
        <i  onClick = updatePost1(${i}) class="fa fa-pencil" aria-hidden="true"></i>
        <i  onClick = delete_task(${i}) class="fa fa-trash" aria-hidden="true"></i></li>`
        
    }
    taskContainer.innerHTML = tasksContent
}
updateDom()
let delete_task = function (e){
    taskArr.splice(e,1)
    updateDom()
}
let updatePost1 = function (e){
    popupfunction()
   edit.value = taskArr[e].title;
    currentEditIndex = e;
}

let updatePost2 = function () {
    taskArr[currentEditIndex].title = edit.value ;
    console.log(taskArr)
    updateDom()
    edit.value = "";
    popupfunction()
}

function add_task(){
    // taskArr.push(new_task.value)
    let addedTask = new createTask(new_task.value, taskArr.length + 1);
    // console.log(addedTask)
    taskArr.push(addedTask)
    console.log(taskArr)
    updateDom()
    new_task.value = "";
}
function search(e){
    let search_result = taskArr.filter(e => {return(e.toLowerCase().indexOf(searchItem.value.toLowerCase())!== (-1))});
    console.log(searchItem.value);
    console.log(search_result)
    // console.log(tasks.filter());
    tasksContent = "";
      for(let i = 0; i < search_result.length; i++){
          // console.log(search_result[i]);
          tasksContent += `
          <li class="items">${search_result[i]}
          <i  onClick = updatePost1(${i}) class="fa fa-check" aria-hidden="true"></i>
          <i  onClick = updatePost1(${i}) class="fa fa-pencil" aria-hidden="true"></i>
          <i  onClick = deletePost(${i}) class="fa fa-trash" aria-hidden="true"></i></li>`
          
      }
      taskContainer.innerHTML = tasksContent
  }
  function show_all(){
    updateDom()
    console.log("all ran")
  }
  function completed(e){
    let completedTask = taskArr[e]
    completedTask.status = "completed"
    console.log(completedTask)
  }
  function filter_completed(){
    tasksContent = "";
    let complete_Ar = [];
    complete_Ar = taskArr.filter(c=>(c.status == "completed"))
    for(let i = 0; i < complete_Ar.length; i++){
        tasksContent +=`
        <li class= "items"
        <i id=""check" onClick = completed(${i}) class="fa fa-check" aria-hidden="true"></i>
        ${complete_Ar[i].title}
        <i  onClick = updatePost1(${i}) class="fa fa-pencil" aria-hidden="true"></i>
        <i  onClick = delete_task(${i}) class="fa fa-trash" aria-hidden="true"></i></li>`
    }
    taskContainer.innerHTML = tasksContent;
  }
  function uncompleted(){
    let uncomplete = taskArr.filter(e=>(e.status == "uncompleted"));
    tasksContent = "";
    for (let i = 0; i < uncomplete.length; i++){
        tasksContent +=`
        <li class= "items"
        <i id=""check" onClick = completed(${i}) class="fa fa-check" aria-hidden="true"></i>
        ${uncomplete[i].title}
        <i  onClick = updatePost1(${i}) class="fa fa-pencil" aria-hidden="true"></i>
        <i  onClick = delete_task(${i}) class="fa fa-trash" aria-hidden="true"></i></li>`;
    }
    taskContainer.innerHTML = tasksContent;
  }
  