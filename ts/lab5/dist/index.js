const data = [];
const record = (param) => {
    data.push(param);
    console.log("Record: \"" + param + "\" added!");
    console.log(data);
    setTimeout(() => {
        data.pop();
        console.log("Record: \"" + param + "\" removed!");
        console.log(data);
    }, 10000);
};
record("some");
const sayHello = () => {
    let count = 0;
    return function (name) {
        ++count;
        console.log(`Hello №${count}, ${name}!`);
    };
};
let helloEnv = sayHello();
helloEnv("Alex");
helloEnv("Samuel");
helloEnv("Maga");
let helloEnv2 = sayHello();
helloEnv("Sanya");
helloEnv("Andrey");
helloEnv("VI KA");
const say = () => {
    let counter = 0;
    console.log(++counter);
};
