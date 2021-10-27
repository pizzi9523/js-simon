let numbers = []

let i = 0;
while (numbers.length < 5) {
    const randomNumber = Math.floor(Math.random() * 20)
    if (!numbers.includes(randomNumber)) {
        numbers.push(randomNumber)
    }
}

alert(numbers)


