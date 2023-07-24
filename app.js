const  api = 'https://jsonplaceholder.typicode.com/todos'
let data = []

const request = new XMLHttpRequest()


request.addEventListener('readystatechange', ()=>{
    if(request.readyState == 4 && request.status == 200){
        const data = JSON.parse(request.responseText)
        radioFunc(data)
        // upDateUi(data) bun funksiyani x
    }
})


request.open('get', api)
request.send()

const ul = document.querySelector('ul')
let value
function radioFunc(data) {
    let result = [];
    switch (value) {
      case "true":
        result = data.filter((item) => item.completed);
        break;
      case "false":
        result = data.filter((item) => !item.completed);
        break;
      default:
        result = data;
        break;
    }
    result.forEach((todo, index) => {
      ul.innerHTML += `<li class = "card"><h3>ID:${todo.id}</h3><h4>${
        todo.completed ? "true" : "false"
      }</h4><p>${todo.title}<p></li>`;
    });
  }
  const getValue = function (radio) {
    ul.innerHTML = "";
    value = radio.value;
    radioFunc(data);
  };