const Card = (props) => {
    const { picture, name, email, age, gender, nat } = props;

    return (
        `
            <div class="card">
                <img src=${picture} class="card__img"/>
                <div class="card__description">
                    <span class="card__name">${name}</span>
                    <span class="card__email">${email}</span>
                    <div class="card__side-info-block">
                        <div class="card__side-info">
                            <div class="card__field">
                                <span class="card__header">Age</span>
                                <span class="card__value">${age}</span>
                            </div>
                            <div class="card__field">
                                <span class="card__header">Gender</span>
                                <span class="card__value">${gender}</span>
                            </div>
                            <div class="card__field">
                                <span class="card__header">Nat</span>
                                <span class="card__value">${nat}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `
    );
}

export default Card;