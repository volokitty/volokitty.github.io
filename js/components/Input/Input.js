const Input = (employeesNumber) => {
    return (
        `   
            <div app__input-container>
                <div>Cards number</div>
                <input
                    class="app__input"
                    type="range"
                    value="${employeesNumber}"
                    min="0"
                    max="${employeesNumber}"
                    step="1"
                >
            </div>
        `
    );
}

export default Input;