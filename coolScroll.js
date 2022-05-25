let navbar = document.querySelector('.header__nav');
    links = navbar.querySelectorAll('a')
/*получили все ссылки из меню, ОБРАТИ ВНИМАНИЕ, что для получения по тегу менюшному, мы не берет All*/

links.forEach((link) => {
    link.addEventListener('click', (event) => {
        event.preventDefault() //отменяем стандартное поведение браузера, по ссылкам не уходит
        console.log(link.getAttribute('href')) //получим #work
        console.log(document.querySelector('#work')) //получаем секцию (ту часть сайта) по ссылке #work
        let section = document.querySelector(link.getAttribute('href')) //объединили и получили секцию по клику
        if (section) {
            section.scrollIntoView({ //настраиваем прокрутку
                block: 'start',
                behavior: 'smooth'
            })
        }
    })
})


/*


let goToCalagog = document.querySelector('.goToCatalog');
    

goToCalagog.addEventListener('click', (event) => {
    event.preventDefault();
    let section = document.querySelector('#catalog')
    if (section) {
        section.scrollIntoView({ //настраиваем прокрутку
            block: 'start',
            behavior: 'smooth'
        })
    }
})


*/
