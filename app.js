let slides = document.querySelectorAll('.slides div')

slides.forEach(function (item) {
    item.addEventListener('click', () => {
        slides.forEach(function (item) {
            item.classList.remove('active')
        })
        item.classList.add('active')
    })
})