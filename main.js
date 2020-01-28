const errorBox = document.querySelector('.msg')
errorBox.style.color = 'red'
const myForm = document.getElementById('myform')
const pattern = /^([a-z 0-9\.-]+)@([a-z 0-9-]+).([a-z]{2,8})(.[a-z]{2,8})?$/

myForm.addEventListener('submit', (e) =>{
    e.preventDefault();
    const name = document.getElementById('name').value
    const mail = document.getElementById('mail').value
    const subject = document.getElementById('subject').value
    const message = document.getElementById('message').value.trim()
    
    if(!name || !mail || !subject || !message){
        errorBox.textContent = 'Please Fill the Empty Fields'
        setTimeout(()=> errorBox.textContent = '', 3000 );
    }else if(!pattern.test(mail)){
        errorBox.textContent = 'Please Provide a Valid Mail'
        setTimeout(()=> errorBox.textContent = '', 3000 );
    }else{
        errorBox.style.color = 'green'
        errorBox.innerText = 'Your Mail has been sent Successfully'
        alert('Your Mail has been sent Successfully')
    }
    
    
})

