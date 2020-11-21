import Data from './Data.js';
import App from './components/App/App.js';
import { inputOnInputBind, themeOnChangeBind } from './Events.js';

const EMPLOYEES_MAX_NUMBER = 10;
const data = new Data(EMPLOYEES_MAX_NUMBER);

const root = document.querySelector('#root');

data.fetchData()
    .then(() => data.normalizeEmployees())
    .then(() => {
        root.innerHTML = App(data.employees, data.employeesNumber);
        inputOnInputBind(document.querySelectorAll('.card'), data.employeesNumber);
        themeOnChangeBind();
    });