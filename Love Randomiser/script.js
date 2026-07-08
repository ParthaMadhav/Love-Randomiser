var loveScore = Math.floor(Math.random() * 100) + 1;

var name1 = prompt("Enter your name:");
var name2 = prompt("Enter your partner's name:");
if(loveScore < 30) {
    alert(name1 + " and " + name2 + " are not compatible. Love Score: " + loveScore + "%");
} else if (loveScore >= 30 && loveScore < 70){
    alert(name1 + " and " + name2 + " have a decent compatibility to love each other. Love Score: " + loveScore + "%");
} else {
    alert(name1 + " and " + name2 + " are highly compatible! Love Score: " + loveScore + "%");
}

alert(name1 + " ❤️ " + name2 + "\n\nLove Score: " + loveScore + "%");

console.log(name1 + " ❤️ " + name2 + " Love Score: " + loveScore + "%");