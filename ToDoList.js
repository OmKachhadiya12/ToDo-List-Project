const input = document.getElementById('input');
const listContainer = document.querySelector('.list-container');


document.getElementById('button').addEventListener('click',(e)=>{
    if(input.value == ''){
        alert('Enter your Task.');
    }
    else{
        let li = document.createElement('li');
        li.innerHTML = input.value;
        listContainer.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = '\u00d7';
        li.appendChild(span);
    }
    input.value = '';
    saveData();
})

listContainer.addEventListener('click',(e)=>{
    if(e.target.tagName == 'LI'){
        e.target.classList.toggle('checked');
        saveData();
    }
    else if(e.target.tagName == 'SPAN'){
        e.target.parentElement.remove();
        saveData();
    }
})

function saveData(){
    localStorage.setItem("Data",listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML= localStorage.getItem("Data");
}

showTask();
