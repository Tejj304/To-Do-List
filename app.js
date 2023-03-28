let input = document.querySelector('.entered-list');
let addBtn = document.querySelector('.add-list');
let task = document.querySelector('.task');


//add btn disabled

input.addEventListener('keyup' , ()=> {

    if(input.value.trim() != 0)
    {
        addBtn.classList.add('active')
    }
    else{
        addBtn.classList.remove('active')
    }
})

//add new task

addBtn.addEventListener('click' , ()=> {

    if(input.value.trim() != 0)
    {
        let newItem = document.createElement('div');
        newItem.classList.add('item');
        newItem.innerHTML = 

        `
        <p> ${input.value} </p>
        <div class="item-btn">
            <i class="fa-solid fa-pen-to-square"></i>
            <i class="fa-solid fa-xmark"></i>
        </div>

        `

        task.appendChild(newItem);
        input.value = '';
    }

    else{
        alert('Please Enter a Task')
    }
})


//delet items from list

task.addEventListener('click' , (e)=> {
    
    if(e.target.classList.contains('fa-xmark'))
    {
        e.target.parentElement.parentElement.remove()
    }

})

//mark item as completed

task.addEventListener('click' , (e)=> {

    if(e.target.classList.contains('fa-pen-to-square'))
    {
        e.target.parentElement.parentElement.classList.
        toggle('completed')
    }

})