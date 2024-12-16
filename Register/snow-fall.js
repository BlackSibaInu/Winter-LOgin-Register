document.addEventListener('DOMContentLoaded', () => {
    startSnowfall();

    function createSnowflake() {
        const snowContainer = document.getElementById('snow-container');
        const snowflake = document.createElement('div');
        
        snowflake.classList.add('snowflake');
        
        // Рандомные размеры снежков
        const size = Math.random() * 5 + 2;
        snowflake.style.width = `${size}px`;
        snowflake.style.height = `${size}px`;
        
        // Стартовая позиция
        snowflake.style.left = `${Math.random() * 100}%`;
        snowflake.style.top = '-10px';
        
        // Рандомная скорость падения
        snowflake.style.animationDuration = `${Math.random() * 10 + 5}s`;
        snowflake.style.animationDelay = `${Math.random() * 5}s`;
        
        snowContainer.appendChild(snowflake);
        
        // Удаление снежков после падения
        setTimeout(() => {
            snowflake.remove();
        }, 15000);
    }

    // Создание снегопада
    function startSnowfall() {
        // Снежки с интервалом
        setInterval(createSnowflake, 200);
    }
});
