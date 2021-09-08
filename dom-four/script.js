var heroes = ["Thor", "Iron Man", "Captain America"];
var newHeroes = heroes.map(getHero);
newHeroes.join("Thor, Iron Man, Captain America");


function getHero() {
    let select = document.getElementById("superhero");
    let text = select.options[select.selectedIndex].text;
    console.log(text);
    alert("Thor, Iron Man, Captain America");
}

getHero();


