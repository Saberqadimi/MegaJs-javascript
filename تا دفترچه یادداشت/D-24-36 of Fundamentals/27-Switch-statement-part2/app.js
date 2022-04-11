// switch statement

let average = 17;

if (average >= 18 && average <= 20) {
    console.log("Excelent!");
  } else if (average >= 15 && average < 18) {
    console.log("Great");
  } else if (average >= 12 && average < 15) {
    console.log("good");
  } else if (average >= 0 && average < 12) {
    console.log("bad");
  } else {
    console.log("Invalid Average");
  }

switch (true) {
    case (average <= 20 && average > 18):
        console.log('Excelent!')
        break;
    case (average <18):
        console.log('Great')
        break;

    default: console.log('Invalid Average')
        break;
}
