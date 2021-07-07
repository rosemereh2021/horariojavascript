function load() {
    var d = new Date()
    var min = d.getMinutes()
    var hora = d.getHours()

    document.getElementById("timeText").innerHTML = `Agora são ${hora}:${min}`

    if(hora >= 01 && hora <= 12) {
    document.getElementById("image").src = "img/pexels-todd-trapani-1420440.jpg"
    document.body.style.backgroundImage = "linear-gradient(to right, #F5C515, #C59C03"

    } else if (hora > 12 && hora < 18) {
    document.getElementById("image").src = "img/pexels-hristo-sahatchiev-821357.jpg"
    document.body.style.backgroundImage = "linear-gradient(to right, #A9D0F0, #A1B4C4"

    } else {
        document.getElementById("image").src = "img/pexels-pixabay-355465.jpg"
        document.body.style.backgroundImage = "linear-gradient(to right, #065393, #01203A"
    }
}

// muito top...
//maravilhoso jascript!!!
// curso em video...

