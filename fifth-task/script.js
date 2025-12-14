for (let i = 1; i <= 100; i++){
    if (i % 3 == 0 && i % 5 == 0){
        console.log("FizzBuzz")
    }
    else if (i % 3 == 0){
        console.log("Fizz")
    }
    else if (i % 5 == 0){
        console.log("Buzz")
    }
    else if (i % 2 == 0){
        console.log(`Even number: ${i}`)
    }
    else {
        console.log(`Odd number: ${i}`)
    }
}