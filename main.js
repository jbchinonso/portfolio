const errorBox = document.querySelector('.msg')
errorBox.style.color = 'red'
const myForm = document.getElementById('myform')
const pattern = /[A-Z0-9.+%$]+@[A-Z0-9.]+.[A-Z0-9]{2,4}/igm

myForm.addEventListener('submit', (e) =>{
    e.preventDefault();
    const name = document.getElementById('name').value
    const mail = document.getElementById('mail').value
    const subject = document.getElementById('subject').value
    const message = document.getElementById('message').value
    
    if(!name || !mail || !subject || !message){
        errorBox.textContent = 'Please Fill the Empty Fields'
        setTimeout(()=> errorBox.textContent = '', 3000 );
    }else if(!pattern.test(mail)){
        errorBox.textContent = 'Please Provide a Valid Mail'
        setTimeout(()=> errorBox.textContent = '', 3000 );
    }else{
        errorBox.style.color = 'green'
        errorBox.innerText = 'Your Mail has been sent Successfully'
    }
    
    
})
