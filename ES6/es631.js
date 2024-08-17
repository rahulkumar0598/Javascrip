for (var i = 0; i < 10; i++) {
  setTimeout(() => {
    console.warn(i);
  }, 1000);
}
for (let i = 0; i < 10; i++) {
  setTimeout(() => {
    console.warn(i);
  }, 1000);
}
