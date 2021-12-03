const { nextISSTimesForMyLocation } = require('./iss_promised');

const printTime = function(passes) {
  for (const pass of passes) {
    console.log(`Next pass at ${new Date(pass.risetime)} for ${pass.duration} seconds!`);
  }
};

nextISSTimesForMyLocation()
  .then(passTimes => {
    printTime(passTimes);
  })
  .catch(error => {
    console.log("It didnt work broski: ", error.message);
  });