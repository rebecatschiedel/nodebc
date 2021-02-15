const player = {
    name: null,
    energy: 100,
    lives: 3,
    loseEnergy: function (damage) {
        if (this.energy > damage) {
            this.energy -= damage;
        } else {
            this.loseLife();
            this.energy = 1;
        };
    },
    recoverEnergy: function (energyUp) {
        if (this.energy + energyUp <= 100) {
            this.energy += energyUp;
        } else {
            this.energy = 100;
        }
    },
    loseLife: function () {
        this.lives--;
    },
    recoverLife: function () {
        if (this.lives < 99) {
            this.lives++;
        }
    }
};

player.name = 'Peach';
console.log(player.lives);
player.loseLife();
console.log(player.lives);
player.loseEnergy(10);
player.loseEnergy(5);
player.loseEnergy(15);
player.loseEnergy(20);
player.recoverEnergy(10)
player.loseEnergy(30);
player.loseEnergy(40);
player.loseLife();
player.recoverLife();
console.log(player.lives);
player.recoverLife();

console.log(player);

const {name, energy, lives} = player;

console.log(`the ${name} has ${energy} energy and ${lives} lives`);