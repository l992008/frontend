document.addEventListener('DOMContentLoaded', function() {
    const mainImage = document.getElementById('mainImage');
    const photoContainer = document.getElementById('photoContainer');

    // Массив изображений для замены
    const images = [
        "public/IMG_START.jpg",
        "public/IMG_FINISH.jpg"
    ];

    let currentIndex = 0;

    // Увеличение изображения при наведении
    mainImage.addEventListener('mouseover', function() {
        this.style.transform = 'scale(1.1)';
        this.style.transition = 'transform 0.3s ease';
    });

    // Возврат к исходному размеру при уходе курсора
    mainImage.addEventListener('mouseout', function() {
        this.style.transform = 'scale(1)';
    });

    // Обработчик клика для вращения и замены изображения
    mainImage.addEventListener('click', function() {
        // Вращение изображения
        mainImage.style.transition = 'transform 0.5s ease'; // Плавный переход для вращения
        mainImage.style.transform = 'rotate(360deg)';

        // Задержка перед заменой изображения
        setTimeout(() => {
            currentIndex = (currentIndex + 1) % images.length; // Переход к следующему изображению
            mainImage.src = images[currentIndex]; // Замена изображения

            // Сброс трансформации после замены изображения
            mainImage.style.transform = 'rotate(0deg)';
        }, 500); // Время задержки должно совпадать с временем анимации вращения
    });

    // Обработчик двойного клика для отображения сообщения
    mainImage.addEventListener('dblclick', function() {
        alert("Не налегай, у меня не так много любимых преподавателей");
    });
});