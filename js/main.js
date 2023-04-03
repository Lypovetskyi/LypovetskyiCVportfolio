const btnDarkMode = document.querySelector(".dark-mode-btn");

if (localStorage.getItem('darkMode') === 'dark') {
    btnDarkMode.classList.add("dark-mode-btn-active");
    document.body.classList.add("dark");
} else if (localStorage.getItem("darkMode") === "light") {
    btnDarkMode.classList.remove("dark-mode-btn-active"); // удаляем класс, если режим светлый
    document.body.classList.remove("dark"); // удаляем класс, если режим светлый
}

// Проверка темной темы на уровне системных настроек
if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    btnDarkMode.classList.add("dark-mode-btn-active");
    document.body.classList.add("dark");    
} 

// Если меняются системные настройки меняем тему
window.matchMedia("(prefers-color-scheme: dark)").addEventListener('change', (event) => {
    const newColorScheme = event.matches ? "dark" : 'light';
    if (newColorScheme === 'dark') {
        btnDarkMode.classList.add("dark-mode-btn-active");
        document.body.classList.add("dark");
    } else {
        btnDarkMode.classList.remove("dark-mode-btn-active");
        document.body.classList.remove("dark");
    }
});

// Включение ночного режима по кнопке
btnDarkMode.onclick = function () {

    btnDarkMode.classList.toggle("dark-mode-btn-active");
    const isDark =  document.body.classList.toggle("dark");

    if (isDark) {
        localStorage.setItem('darkMode', 'dark')
    } else {
         localStorage.setItem('darkMode', 'light')
    }
}
