// console.log(123456);

// получаем элементы
let press_btn = document.querySelector('#press-btn');// кнопка
let user_image = document.querySelector('#user-image');// картинка

console.log(press_btn, user_image);

// при нажатии на кнопку
press_btn.addEventListener('click', function(){
    // press_btn.style.display = 'none';
    // press_btn.textContent = 'Привет, админ';

    // console.log(press_btn, user_image);
    
    user_image.classList.toggle('hidden');// добавляем класс картинке
});



