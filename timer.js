//Timer that beeps depending on the command time args the user gives. Numbers only!

const input = function() {
  //gets the commandline args the user inputs
  let userInput = process.argv.slice(2);
  return userInput;
};

const timer = function() {

  //gets times by iterating through the args from the input function
  let inputs = input();

  for (let times of inputs) {

    // when the user puts in an input that's not a number, less than or equal to 0, or is null then it should exit.
    if (!isNaN(inputs) || inputs > 0 || inputs !== null) {

      setTimeout(() => {
        process.stdout.write('\007');
      }, times * 1000);
      //coverts the time to seconds
    }
  }
  return;
};

timer();