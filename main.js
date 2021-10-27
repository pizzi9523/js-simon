let numbers = []

let i = 0;
while (numbers.length < 5) {
    const randomNumber = Math.floor(Math.random() * 20)
    if (!numbers.includes(randomNumber)) {
        numbers.push(randomNumber)
    }
}

//console.log(numbers);
alert(numbers)

let right_numbers = []
let counter = 0;
setTimeout(function () {
    for (let i = 0; i < 5; i++) {
        const user_choice = parseInt(prompt("Inserisci un numero"))
        if (numbers.includes(user_choice) && !right_numbers.includes(user_choice)) {
            right_numbers.push(user_choice)
            counter++
        }
    }
    // console.log(right_numbers);
    /* right_numbers.forEach(number => {
        console.log(number);
    }) */
    //console.log(counter);
    console.log(`Hai indovintato ${counter} numeri e sono ${right_numbers}`);
    document.querySelector(".container").innerHTML = `Hai indovintato ${counter} numeri`;
    if (counter > 0) {
        document.querySelector(".container").insertAdjacentHTML("beforeend", `e sono: `)
        right_numbers.forEach(number => {
            document.querySelector(".container").insertAdjacentHTML("beforeend", ` ${number} `)
        })
    }
}, 30000)