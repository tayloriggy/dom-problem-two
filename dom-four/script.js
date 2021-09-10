function getHero() {
    let select = document.getElementById('superhero');
    let optionValues = [];
    for (let i = 0; i <select.options.length; i++) {
        optionValues.push(select.options[i].value);
    }

    alert(optionValues.join(", "));
    alert("There are three options to choose from.");
}







