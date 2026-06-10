const display = document.getElementById('sub');
const btn = document.getElementById('btn');

btn.addEventListener('click', fetchJoke);

function fetchJoke() {
  display.textContent = 'Loading...';

  fetch('https://official-joke-api.appspot.com/random_joke')
    .then(response => response.json())
    .then(data => {
      display.textContent = data.setup + ' — ' + data.punchline;
    })
    .catch(() => {
      display.textContent = 'Too bad... Could not load a joke. Try again!';
    });
}