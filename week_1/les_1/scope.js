const message = "Hey daar!";

sayHello();
// say(); // Werkt niet!

function sayHello() {
  const message = "Bye!";

  function say() {
    const newMessage = "YOLO";
    console.log(message);
  }

  console.log(newMessage);
  say();
}

sayHello();
