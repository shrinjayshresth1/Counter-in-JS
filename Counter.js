var sec = 10;

function counter() {
  console.log("The count is ", sec);
  sec--;

  if (sec === 1) {
    clearInterval(id);
  }
}

var id = setInterval(counter, 1000); // Call every 1000 milliseconds (1 second)
