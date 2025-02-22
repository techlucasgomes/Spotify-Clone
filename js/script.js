// script.js
document.querySelector('.login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = this.querySelector('input[type="text"]').value;
    const password = this.querySelector('input[type="password"]').value;

    if (email && password) {
        alert('Login realizado com sucesso!');
        // Aqui você pode redirecionar para a página inicial
        window.location.href = 'index.html';
    } else {
        alert('Por favor, preencha todos os campos.');
    }
});