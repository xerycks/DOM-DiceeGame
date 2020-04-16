function diceeGame() {

    var dice1 = Math.floor(Math.random() * 6) + 1;

    var dice2 = Math.floor(Math.random() * 6) + 1;

    var image1 = "/images/dice" + dice1 + ".png";

    var image2 = "/images/dice" + dice2 + ".png";


    document.getElementsByClassName("player2")[0].querySelector("img").setAttribute("src", image2);

    document.getElementsByClassName("player1")[0].querySelector("img").setAttribute("src", image1);

    if (dice1 === dice2) {
        document.getElementsByTagName("h1")[0].textContent = "That's a draw";
    } else if (dice1 < dice2) {
        document.getElementsByTagName("h1")[0].textContent = "Player 2 Wins";
    } else if (dice1 > dice2) {
        document.getElementsByTagName("h1")[0].textContent = "Player 1 Wins";
    }
}