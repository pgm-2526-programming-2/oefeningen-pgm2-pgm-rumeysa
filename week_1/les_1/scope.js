const message = "Hey daar!";

function sayHello() {
  const message = "Bye!";

  const say = function () {
    const newMessage = "YOLO";
    console.log(message);
  };
  console.log(newMessage);
  say();
}

sayHello();
console.log(message);
