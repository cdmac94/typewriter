const sentence = "Some days I have it some days I don't";

let delay = 50 
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char)
  }, delay);
  delay += 50;
}
