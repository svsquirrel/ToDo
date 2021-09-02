const timeElapsed = Date.now();
const today = new Date(timeElapsed).toDateString();
let myToDo = [];

const form = document.querySelector('#popupForm');
const cancelform = document.querySelector('.closeicon');
      cancelform.addEventListener('click', () => form.style.display='none');
      
const submit = document.querySelector('.doneicon');
      submit.addEventListener('click',  addTaskData);

form.onkeydown = function(e){
        if(e.keyCode == 13){
         addTaskData();
        }
     };
 
 const CreateTask = (tdate,ttitle, tstar,tmyday,tdue,tnote) => {
    return { tdate,
             ttitle,
             tstar,
             tmyday,
             tdue,
             tnote,
           };
}

function addTaskData(){
    
    const newdate = today;
    const newtask = document.querySelector('.task').value;
    const newstar = 'false';
    const newmyday = document.querySelector('.checkAddDay').checked;
    const newdue =  document.querySelector('#duedate').value;
    const newnote = document.querySelector('.textarea').value;
    
    if (newtask === '' || newtask === null) return;

    
    const newentry = CreateTask(newdate, newtask, newstar, newmyday, newdue, newnote);
    myToDo.push(newentry);
    setToDo();
    clearForm();
    form.style.display = 'none';
 }

 function setToDo() {
    localStorage.setItem('myToDo', JSON.stringify(myToDo));
}

function getToDo() {
    if  (!localStorage.myToDo){
         return;
   }else {
       var storage = localStorage.getItem('myToDo');
           storage = JSON.parse(storage);
           myToDo  = storage;
      // displayToDo();
   };
};
// function displayToDo(){
//     //resetGrid();
//     const displaynode = document.querySelector('.display');
//         const unit = document.createElement('div');
//               unit.classList.add('unit');
//         const dot = document.createElement('i');
//               dot.classList.add('material-icons', 'circle');
//         const tasksnippet = document.createElement('p');
//               tasksnippet.classList.add('tasksnippet');
//         const duesnippet = document.createElement('p');
//               duesnippet.classList.add('duesnippet');
//         const specialicon = document.createElement('i');
//               specialicon.classList.add('material-icons', 'star');
    
//         dot.innerHTML = 'circle';
//         tasksnippet.textContent =myToDo.ttitle;
//         duesnippet.textContent = myToDo.tdue;
//         specialicon.innerHTML = 'grade';
//         console.log(tasksnippet);

//         unit.appendChild(dot);
//         unit.appendChild(tasksnippet);
//         unit.appendChild(duesnippet);
//         unit.appendChild(specialicon);
   
//         displaynode.appendChild(unit);
    
// };

function clearForm(){
    document.querySelector('.task').value = '';
    document.querySelector('.checkAddDay').checked = false;
    document.querySelector('#duedate').value = '';
    document.querySelector('.textarea').value = '';
}

export { getToDo }
