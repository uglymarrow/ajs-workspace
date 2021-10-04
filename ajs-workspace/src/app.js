const characters = [
  { name: 'мечник', health: 10 },
  { name: 'маг', health: 100 },
  { name: 'маг', health: 0 },
  { name: 'лучник', health: 0 },
];

function moreThenZero(item) {
  return item.health > 0;
}

const alive = characters.filter(moreThenZero);
console.log(alive);
