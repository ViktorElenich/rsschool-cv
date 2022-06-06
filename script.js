const toggle = document.querySelector('.toggle');
const topbar = document.querySelector('.topbar');
const navigation = document.querySelector('.navigation');
const main = document.querySelector('.main');
const menuItems = document.querySelectorAll('.navigation ul li');
const themeSwitch = document.querySelector('.theme__switch');
const body = document.querySelector('body');

toggle.onclick = function(){
  toggle.classList.toggle('active');
  topbar.classList.toggle('active');
  navigation.classList.toggle('active');
  main.classList.toggle('active');
}

const toggleMenu = () => {
  navigation.classList.remove('active');
  main.classList.remove('active');
}

menuItems.forEach(item => item.addEventListener('click', toggleMenu))

themeSwitch.onclick = function(){
  body.classList.toggle('dark')
}