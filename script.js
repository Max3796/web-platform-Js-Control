// Challenge 1: Create a for loop to print all the even numbers till 100 in the console.
for (let i = 2; i <= 100; i += 2) {
  console.log(i);
}

// Challenge 2: Create a while loop to print all the odd numbers till 100 in the console.
let n = 1;
while (n <= 100) {
    console.log(n);
    n += 2;
}

// Challenge 3: Create a do while loop to print all the multiples of 3 till 100 in the console.
let u = 3;
do {
    console.log(u);
    u += 3;
} while (u <= 100);

// Challenge 4: Create a for loop to print all the prime numbers till 100 in the console.
for(i=2;i<=100;i++){
  let prime = true;
  for(let div= 2;div<i;div++){
    if (i%div==0){
      prime= false;
      break;
    }

  }
  if (prime){
    console.log(i)
  }
}


