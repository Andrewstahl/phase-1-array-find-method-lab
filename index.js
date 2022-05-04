// code your solution here
const record = [
  { year: "2015", result: "L"},
  { year: "2014", result: "N/A"},
  { year: "2013", result: "L"}
  //...
]

function superbowlWin(array) {
  const result = array.find(element => element.result === "W");
  return result === undefined ? undefined : result.year; 
}
