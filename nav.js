const menu = document.querySelector('.mobile-menu img')
const navbar = document.querySelector('.navbar')
const body = document.querySelector('body')
menu.addEventListener('click',(e)=>{
    navbar.classList.toggle('display')
    if(e.target !== menu) navbar.className = "";
})

window.onclick = function(e){    
   // navbar.style.display = "none"
    //if(navbar.className = "display"){
      //  navbar.className = ""
      if(e.target !== menu) navbar.className = "";
    }
//}

const html = document.querySelector('.html .capacity .level')
const css = document.querySelector('.css .capacity .level')
const javascript = document.querySelector('.javascript .capacity .level')
const php = document.querySelector('.php .capacity .level')
const python = document.querySelector('.python .capacity .level')
const sql = document.querySelector('.sql .capacity .level')
const mysql = document.querySelector('.mysql .capacity .level')


html.style.width = '85%'
css.style.width = '80%'
javascript.style.width = '75%'
php.style.width = '40%'
python.style.width = '50%'
sql.style.width = '20%'
mysql.style.width = '30%'