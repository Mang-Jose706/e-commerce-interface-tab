const players = [
  { name: "Joban", score: 10 },
  { name: "Kent", score: 5 },
  { name: "Droods", score: 12 },
  { name: "Jols", score: 7 },
  { name: "Jose", score: 9 },
  { name: "Jeanne", score: 4 },
  { name: "Shem", score: 11 },
  { name: "Mark", score: 8 },
  { name: "Arce", score: 15 },
  { name: "Ambasing", score: 6 }
];

function getTopScorers(playerList) {
  return playerList
    .filter(player => player.score > 8)
    .map(player => player.name)
    .join(", ");
}