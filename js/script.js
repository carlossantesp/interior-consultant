const btnMenu = document.getElementById('menu');

if(btnMenu)
  btnMenu.addEventListener('click', (e) =>{
    e.preventDefault();
    document.getElementById('open').classList.toggle('hidden')
    document.getElementById('close').classList.toggle('hidden')
    document.getElementById("nav-menu").classList.toggle('active')
  })