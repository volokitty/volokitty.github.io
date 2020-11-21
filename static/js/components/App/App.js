import Input from '../Input/Input.js';
import CardsContainer from '../CardsContainer/CardsContainer.js';

const App = (props, employeesNumber) => {
    const data = props;

    return (
        `
            <div class="app">
                <h1 class="app__header">Employees Database</h1>
                <div class="app__buttons">
                    <div class="app__theme-changer">Change theme</div>
                    <a target="_blank" href="https://instagram.com/volokitty">
                        <img src="static/img/instagram.svg">
                    </a>
                    <a target="_blank" href="https://vk.com/volokitty">
                        <img src="static/img/vk.svg">
                    </a>
                </div>
                ${Input(employeesNumber)}
                <div class="app_"></div>
                ${CardsContainer(data)}
            </div>
        `
    );
}

export default App;