const { nextISSTimesForMyLocation } = require('./iss');

const printTime = function(passes) {
  for (const pass of passes) {
    console.log(`Next pass at ${new Date(pass.risetime)} for ${pass.duration} seconds!`);
  }
};

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  printTime(passTimes);
});
