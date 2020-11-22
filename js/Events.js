const inputOnInputBind = (cards, cardsState, employeesNumber, ) => {
    document.querySelector('input').addEventListener('input', (e) => {
        cards.forEach(el => el.style.display = 'inline-flex');

        for (let i = e.target.value; i < cards.length; i++) {
            cards[i].style.display = 'none';
        }
    });
}

const themeOnChangeBind = () => {
    document.querySelector('.app__theme-changer')
        .addEventListener('click', () => {
            document.querySelector('body').classList.toggle('dark');
            document.querySelector('.app__header').classList.toggle('dark');
        });
}

export { inputOnInputBind, themeOnChangeBind };