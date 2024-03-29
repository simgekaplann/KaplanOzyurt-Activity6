let level = 1;
let click_button = 0;
let timer;

// random position
function setRandomPosition(element) {
    element.style.marginTop = Math.random() * 300 + "px";
    element.style.marginLeft = Math.random() * 300 + "px";
}

document.getElementById("game_button").addEventListener("mouseover", function() {
    timer = setTimeout(() => {
        setRandomPosition(this);
    }, 500 - (level - 1) * 100); // set timer
});

document.getElementById("game_button").addEventListener("mouseout", function() {
    clearTimeout(timer); // clear timer
});

document.getElementById("game_button").addEventListener("click", function() {
    clearTimeout(timer); // Butona tıklandığında zamanlayıcıyı temizle
    timer = setTimeout(() => {
        setRandomPosition(this);
    }, 500 - (level - 1) * 100); // Sonraki tura geçmek için zamanlayıcıyı sıfırla

    click_button++;
    if (click_button === 3) {
     if(Number(level+1) != 6){
      alert("You are the winner! You can go next level " + Number(level+1));
     }
        level++;
        click_button = 0;
        if (level === 6) {
            this.style.pointerEvents = 'none';
            alert("You are the winner!");
        } else {
            setTimeout(() => {
                this.style.pointerEvents = 'auto';
            }, 500 - (level - 1) * 100);
        }
    }

    setRandomPosition(this); // define random position
});
