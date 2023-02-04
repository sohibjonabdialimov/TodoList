const addItem = document.getElementById("add-item")
const form1 = document.querySelector("#form")
const mainList = document.querySelector("#main-list")
const ionIcon = document.querySelectorAll("#trash-icon")
const check = document.querySelectorAll("#check")


let firstArr = [
  {
    name: "Learn java",
    complete: false
  },
  {
    name: "Learn javascript",
    complete: false
  },
  {
    name: "Learn CSS",
    complete: false
  },
  {
    name: "Learn HTML",
    complete: false
  }
]

if(firstArr.length) showTodo();

function showTodo(){
  mainList.innerHTML = ''
  firstArr.forEach((item, i) => {
    mainList.innerHTML += `
      <li>
        <div class="left ${item.complete == true ? "completed" : "" }">${item.name}</div>
          <div class="right">
            <input onclick="setCompleted(${i})" type="checkbox" class="check ${item.complete == true ? "trueBg" : "falseBg" }" value="$">
            <ion-icon onclick="deleteTodo(${i})" name="trash-outline" id="trash-icon"></ion-icon>
        </div>
      </li>
    `;
  })
}

form1.addEventListener("submit", (e) => {
  e.preventDefault();
  if(addItem.value.length){
    firstArr.push({
      name: addItem.value,
      complete: false
    });
  }
  form1.reset()
  showTodo();
});

function deleteTodo(id){
  let deletedTodo = firstArr.filter((item,i) => {
    return i != id ;
  })
  firstArr = deletedTodo;
  showTodo();
}

function setCompleted(id){
  const completedTodos = firstArr.map((item, i) => {
    if(id == i){
      return {...item, complete: item.complete == true ? false : true }
    }else{
      return {...item}
    }
  })
  firstArr = completedTodos;
  showTodo();
}

