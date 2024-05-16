function loadHeaderAndFooter() {
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header').innerHTML = data;
        });

    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer').innerHTML = data;
        });
}

document.addEventListener('DOMContentLoaded', loadHeaderAndFooter);

document.querySelector('.hidden-element').addEventListener('click', function() {
        document.querySelector('.theory-nav-bar').classList.toggle('show');
    });

document.querySelector('.theory-nav-bar').addEventListener('click', function() {
        this.classList.remove('show');
    });