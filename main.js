
let id = document.getElementById('id')
let name = document.getElementById('name')
let email = document.getElementById('email')
let phone = document.getElementById('phone')
let salary = document.getElementById('salary')
let tbody = document.getElementById('tbody')

let updateButton = document.querySelector('[type=button]')
let submitButton = document.querySelector('[type=submit]')

let errorMSG = document.getElementById('error');

// console.log(id,name,email,phone,salary)

let dataArray = [];

function handleRead(){
    console.log(dataArray)

    tbody.innerHTML = dataArray.map(item => `<tr>
        <td>${item.id}</td>
        <td>${item.name}</td> 
        <td>${item.email}</td>
        <td>${item.phone}</td>
        <td>${item.salary}</td>
        <td><button onclick=handleDelete(${item.id})>Delete</button> <button onclick=handleUpdate(${item.id})>Update</button></td>
        </tr>` ).join('')

}
function handleSubmit(event){
    event.preventDefault()

    let data = {
        id: id.value,
        name: name.value,
        email: email.value,
        phone: phone.value,
        salary: salary.value,
    }

    

    if( data.id.length > 0 && data.name.length > 0 && data.email.length > 0 && data.phone.length > 0 && data.salary.length > 0  ){
        if(dataArray.some(item => item.id == data.id)){
            errorMSG.innerText = 'you need to change id'
        }else{
        errorMSG.innerText = '';

        dataArray.push(data);

        handleRead()

        id.value = '';
        name.value = '';
        email.value = '';
        phone.value = '';
        salary.value = '';
        }
    }else{
        errorMSG.innerText = 'you must fill all fields'
    }

}
function handleDelete(itemId){
    dataArray = dataArray.filter(item => item.id != itemId )
    handleRead()
}
function handleUpdate(itemId){
    id.disabled = true;
    let snippedItem = dataArray.find(item => item.id == itemId)

    id.value = snippedItem.id;
    name.value = snippedItem.name;
    email.value = snippedItem.email;
    phone.value = snippedItem.phone;
    salary.value = snippedItem.salary;

    updateButton.style.display = 'block';
    submitButton.style = 'display:none!important';

    console.log('works' , snippedItem )
}
function handleUpdateData(){
    let itemId = id.value;

    let data = {
        id: id.value,
        name: name.value,
        email: email.value,
        phone: phone.value,
        salary: salary.value,
    }


    dataArray = dataArray.map(item => item.id == itemId ? item = data : item )
    
    
    handleRead()
    id.disabled =false;
    updateButton.style.display = 'none';
    submitButton.style = 'display:block!important';
}