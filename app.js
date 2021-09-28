const splash = document.getElementById('id');

function load() {
    setTimeout(() => {
        splash.classList.add('display-none');
    }, 2000);
}

window.onload = load();


