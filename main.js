let raceNumber = Math.floor(Math.random() * 1000);
let earlyRegistrant = false;
let runnerAge = 25;

if (runnerAge >= 18 && earlyRegistrant === true) {
	raceNumber += 1000;
}

if (runnerAge >= 18 && earlyRegistrant === true) {
	console.log(`Race number ${raceNumber}, you will be racing at 9:30 am!`);
} else if (runnerAge >= 18 && earlyRegistrant === false) {
	console.log(`Race number ${raceNumber}, you will be racing at 11:00 am!`);
} else if (runnerAge < 18) {
	console.log(`Race number ${raceNumber}, you will be racing at 12:30 pm!`);
}
