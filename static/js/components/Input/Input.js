const Input = (employeesNumber) => {
    return (
        `
            <input
                class="app__input"
                type="range"
                value="${employeesNumber}"
                min="0"
                max="${employeesNumber}"
                step="1"
            >
        `
    );
}

export default Input;