// code your solution here
function superbowlWin(record) {
  // Find the first record where the result is "W"
  const winRecord = record.find(game => game.result === "W");
  
  // If a winning record is found, return the year; otherwise, return undefined
  return winRecord ? winRecord.year : undefined;
}