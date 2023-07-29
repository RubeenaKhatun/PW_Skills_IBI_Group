function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
delay(1000)
  .then(() => {
    console.log("first promise");
    return delay(2000);
  })
  .then(() => {
    console.log("second promise");
    return delay(3000);
  })
  .then(() => {
    console.log("third promise");
  })
  .catch((error) => {
    console.error("error : ", error);
  });
