let str = "#";
    while (str.length<=7){

    console.log(str + "\n");
    str+="#";

}

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('FizzBuzz');
    } else if (i % 3 === 0) {
      console.log('Fizz');
    } else if (i % 5 === 0) {
      console.log('Buzz');
    } else {
      console.log(i);
    }
  }

let result = "\n";

for (let i = 1; i <= 8; i++) {

  for ( b = 1; b <= 8; b++) {
    result += (i % 2 == b % 2) ? "#" : " "; 
  }
  result += "\n";
}
console.log(result);



