function getHero() {
    alert("The items in this list are Thor, Iron Man, and Captain America. The number of items: 3");
    let superheroes = ["Thor", "Iron Man", "Captain America"];
    let newSuperheroes = superheroes.map(displayHeroes);
    document.getElementById("superhero").innerHTML = newSuperheroes.join(" ");
}

function displayHeroes(hero) {
    let hero = document.getElementById("superhero");
    document.getElementById("superhero").innerHTML = hero;
}