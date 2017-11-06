// This should drop the ammo count till it hits zero
let ammoCount = 30;
for (i = 30; ammoCount > 0 && ammoCount < 31; i--) {
  console.log(ammoCount)
}

// These next 3 functions will be used for a reload button for 5.56 round
function resetCount556 {
  let ammoCount = 30;
  let round = '5.56';
}

function resetMiniMag556 {
  let ammoCount = 10;
  let round = '5.56';
}

function resetBigBoy556 {
  let ammoCount = 100;
  let round = '5.56';
}

// These next 3 functions should be almost the same as the last few but for 7.62 rounds
function resetCount762 {
  let ammoCount = 30;
  let round = '7.62';
}

function resetMiniMag762 {
  let ammoCount = 10;
  let round = '7.62';
}

function resetBigBoy762 {
  let ammoCount = 100;
  let round = '7.62';
}
