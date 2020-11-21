class Data {
    constructor(employeesNumber) {
        this.employeesNumber = employeesNumber;
        this.employees = null;
    }

    normalizeEmployees() {
        const data = this.employees;
        this.employees = [];

        for (let i = 0; i < this.employeesNumber; i++) {
            let r = data[i]; 
        
            this.employees.push(
                {
                    picture: r.picture.large,
                    name: `${r.name.first} ${r.name.last}`,
                    email: r.email,
                    age: r.dob.age,
                    gender: r.gender[0].toUpperCase(),
                    nat: r.nat,
                    display: 'inline-flex'
                }
            );
        }
    }

    fetchData = async () => {
        try {
            const response = await fetch(`https://randomuser.me/api/?results=${this.employeesNumber}`);
            const data = await response.json();
            this.employees = data.results;
        } catch {
            document.querySelector('#root').innerHTML = 
                '<h1>Failed to get data. Please, reload the page.</h1>';
        }
    }
}

export default Data;