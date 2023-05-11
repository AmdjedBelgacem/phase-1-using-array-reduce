const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
const summer = (acc, val) => {
    return acc + val;
  };
const totalBatteries = batteryBatches.reduce(summer, 0);
console.log(totalBatteries);