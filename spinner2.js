// Define chars to loop through.
const spinnerCharArray = ["|", "/", "-", "\\", "|", "/", "-", "\\", "|", "\n"];
let interval = 100;
// print each char then increment the interval
for (const char of spinnerCharArray) {
  setTimeout(() => {
    process.stdout.write(`\r${char}   `);
  }, interval);
  interval += 200;
}
