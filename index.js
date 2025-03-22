function runProgram(input) {
  // Write code here
  const lines = input.trim().split("\n");

  const t = parseInt(lines[0]);
  let index = 1;

  for (let i = 0; i < t; i++) {
    const length = lines[index].trim();
    const string = lines[index + 1].trim();

    index += 2;

    /*sum*/
    let sum = parseInt(string[0]);

    for (let j = 1; j < length; j++) {
      if (string[j - 1] === "1" && string[j] === "1") {
        sum -= parseInt(string[j]);
      } else {
        sum += parseInt(string[j]);
      }
    }

    console.log(Math.abs(sum));
  }
}

let input = `2
  4
  1101
  7
  0110111`;
runProgram(input);
