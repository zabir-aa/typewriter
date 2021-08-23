
const sentence = "hello there from lighthouse labs";
const textAnimator = function(text) {
  for (let i = 0; i < text.length; i++) {
    if (i === text.length - 1) {
      setTimeout(() => process.stdout.write(text[i] + "\n"), 50 * i)
    } else {
      setTimeout(() => process.stdout.write(text[i]), 50 * i);
    }
  }
};
textAnimator(sentence);