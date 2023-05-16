let arraySpinner = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   '];
let initTimer = 100;

for (let i = 0; i < arraySpinner.length; i++) {
  setTimeout(() => {
    process.stdout.write(arraySpinner[i]);
  }, initTimer);

  initTimer = initTimer + 200;
}