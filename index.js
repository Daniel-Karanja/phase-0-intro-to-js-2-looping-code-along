// Code your solutions in this file

const countDown = (n) => {
  while (n > -1) {
    console.log(n);
    n--;
  }
};

const writeCards = (docs, name) =>
  docs.map((doc) => {
    return `Thank you, ${doc}, for the wonderful ${name} gift!`;
  });
