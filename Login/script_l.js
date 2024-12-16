document.addEventListener('DOMContentLoaded', () => {
    const togglePasswordBtn = document.getElementById('toggle-password');
    const passwordField = document.getElementById('password');
    const eyeOpen = document.getElementById('eye-open');
    const eyeClosed = document.getElementById('eye-closed');

    // Показ/скрытие пароля
    togglePasswordBtn.addEventListener('click', function () {
        const isPassword = passwordField.type === 'password';
        passwordField.type = isPassword ? 'text' : 'password';
        
        // Переключение видимости SVG иконок
        eyeClosed.style.display = isPassword ? 'none' : 'block';
        eyeOpen.style.display = isPassword ? 'block' : 'none';
    });
});
