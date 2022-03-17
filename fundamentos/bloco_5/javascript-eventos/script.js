function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.

  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function createDays() {

  const dezDays = document.querySelector('#days')

  for (let i = 0; i < dezDaysList.length ; i += 1) {
    let day = dezDaysList[i];
    let dezDaysListItem = document.createElement('li');
    dezDaysListItem.innerHTML = day;
    if (day === 25) {
      dezDaysListItem.className = 'day friday holiday'
    } else if (day === 24 || day === 31) {
      dezDaysListItem.className = 'day holiday'
    } else if (day === 4 || day === 11 || day === 28) {
      dezDaysListItem.className = 'day friday'
    } else {
      dezDaysListItem.className = 'day'
    }
    dezDays.appendChild(dezDaysListItem);

  }
}

createDays()

function feriados(str) {
  let divBtn = document.querySelector('.buttons-container');
  let createBtn = document.createElement('button');
  createBtn.id = 'btn-holiday'
  createBtn.innerHTML = str
  divBtn.appendChild(createBtn);
}

feriados('Feriados')

function clickBtnHolidays() {
  let holidayBtn = document.querySelector('#btn-holiday');
  let holidayDays = document.querySelectorAll('.holiday')
  holidayBtn.addEventListener('click', function(){
    for (let i = 0; i < holidayDays.length; i += 1) {
      if (holidayDays[i].style.backgroundColor === 'white') {
        holidayDays[i].style.backgroundColor = 'rgb(238,238,238)'
      } else {
        holidayDays[i].style.backgroundColor = 'white'
      }
    }
  })
}

clickBtnHolidays();

function friday(str) {
  let createBtn = document.createElement('button')
  let divBtn = document.querySelector('.buttons-container')
  createBtn.id = 'btn-friday'
  createBtn.innerHTML = str
  divBtn.appendChild(createBtn);
}

friday ('Sexta-feira')

function clickBtnFridays(arr) {
  let btn = document.querySelector('#btn-friday')
  let fridayDays = document.querySelectorAll('.friday')
  btn.addEventListener('click', function(){
    for (let i = 0; i < fridayDays.length; i += 1) {
      if (fridayDays[i].innerHTML !== 'Sextou!!!') {
        fridayDays[i].innerHTML = 'Sextou!!!'
      } else {
        fridayDays[i].innerHTML = arr[i]
      }
    }
  })
}

let dezArr = [4, 11, 18, 25]
clickBtnFridays(dezArr)

function zoomIn() {
  let dayOfMonth = document.querySelector('#days')
  dayOfMonth.addEventListener('mouseover', function(event){
    event.target.style.fontSize = '30px';
    event.target.style.fontSize = '600';
  })
}

zoomIn()

function zoomOut() {
  let dayOfMonth = document.querySelector('#days')
  dayOfMonth.addEventListener('mouseout', function(event){
    event.target.style.fontSize = '20px';
    event.target.style.fontSize = '200';
  })
}

zoomOut();

function newTaskSpan(task) {

  let tasksContainer = document.querySelector('.my-tasks');
  let taskName = document.createElement('span');

  taskName.innerHTML = task;
  tasksContainer.appendChild(taskName);
};

newTaskSpan('Projeto:');

function newTaskDiv(color) {

  let tasksContainer = document.querySelector('.my-tasks');
  let newTask = document.createElement('div');

  newTask.className = 'task';
  newTask.style.backgroundColor = color;
  tasksContainer.appendChild(newTask);
};

newTaskDiv('green');

function setTaskClass() {
  let selectedTask = document.getElementsByClassName('task selected');
  let myTasks = document.querySelector('.task');

  myTasks.addEventListener('click', function(event) {
    if (selectedTask.length === 0) {
      event.target.className = 'task selected';
    } else {
      event.target.className = 'task';
    }
  });
};

setTaskClass();

function setDayColor() {
  let selectedTask = document.getElementsByClassName('task selected');
  let days = document.querySelector('#days');
  let taskDiv = document.querySelector('.task');
  let taskColor = taskDiv.style.backgroundColor;
  
  days.addEventListener('click', function(event){
    let eventTargetColor = event.target.style.color;
    if (selectedTask.length > 0 && eventTargetColor !== taskColor) {
      let color = selectedTask[0].style.backgroundColor;
      event.target.style.color = color;
    } else if (eventTargetColor === taskColor && selectedTask.length !== 0) {
      event.target.style.color = 'rgb(119,119,119)';
    }
  });
};

setDayColor();