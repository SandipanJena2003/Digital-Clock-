
const clockEl = document.getElementById('clock');
const ampmEl = document.getElementById('ampm');
const toggleFormatBtn = document.getElementById('toggleFormat');
const toggleThemeBtn = document.getElementById('toggleTheme');
const icon = document.getElementsByTagName('i');    
let is24Hour = false;


function updateClock() {
  const now = new Date();

  let hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  let ampm = '';

  if (!is24Hour) {
    ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12; 
  }

  const h = String(hours).padStart(2, '0');
  const m = String(minutes).padStart(2, '0');
  const s = String(seconds).padStart(2, '0');

  clockEl.textContent = `${h}:${m}:${s}`;
  ampmEl.textContent = is24Hour ? '' : ampm;
}

toggleFormatBtn.addEventListener('click', () => {
  is24Hour = !is24Hour;
  toggleFormatBtn.textContent = is24Hour ? 'Switch to 12-hour' : 'Switch to 24-hour';
  updateClock();
});


toggleThemeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  document.body.classList.contains('dark') ? icon[0].classList.replace('fa-moon', 'fa-sun') : icon[0].classList.replace('fa-sun', 'fa-moon');
  if(document.body.classList.contains('dark')){
    toggleThemeBtn.innerHTML = `<i class="fa-regular fa-sun"></i> Light Mode`;
  }
  else{
    toggleThemeBtn.innerHTML = `<i class="fa-regular fa-moon"></i> Dark Mode`;
  }
});


updateClock();
setInterval(updateClock, 1000);
