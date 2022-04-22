const input = function() {
  let arguments = process.argv.slice(2);//gets the commandline args
  return arguments;
}

const timer = function() {
  let inputs = input();//gets times by iterating through the args from the input function

  for (let times of inputs) {

    // when the user puts in an input that's not a number, less than or equal to 0, or is null then it should exit.
    if (isNaN(inputs) || inputs <= 0 || inputs === null){
      //console.log("Not a number or less than 0!");
      return;
    }

    setTimeout(() => {
      process.stdout.write('\007');
    }, times * 1000);//coverts the time to seconds
    
  }
}

timer();