function checkPassword() {
    const password = document.getElementById('password').value;
    const correctPassword = 'Kushi';
    const message = document.getElementById('message');

    if (password === correctPassword) {
        window.location.href = 'page1.html';
    } else {
        message.textContent = 'Try again';
        message.style.color = 'red';
    }
}
