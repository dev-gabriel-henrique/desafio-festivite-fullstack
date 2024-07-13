const toggleSwitch = document.getElementById('toggle-switch');
const darkLabel = document.querySelector('.dark'); // Corrected class name
const lightLabel = document.querySelector('.light');

toggleSwitch.addEventListener('change', function() {
  if (toggleSwitch.checked) {
    darkLabel.classList.add('hidden');
    lightLabel.classList.remove('hidden');
  } else {
    darkLabel.classList.remove('hidden');
    lightLabel.classList.add('hidden');
  }
});

document.querySelector('#cover-photo').addEventListener('change', function () {
  document.querySelector('.text').textContent = this.files[0].name;
})