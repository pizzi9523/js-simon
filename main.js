let numbers = []
const containerElement = document.querySelector(".container")

randomNumber(numbers);
showNumber()
//console.log(numbers);

document.getElementById("start").addEventListener("click", startFunction);
document.getElementById("restart").addEventListener("click", restartFunction);


function restartFunction() {
    containerElement.innerHTML = ""
    numbers = []
    randomNumber(numbers)
    showNumber()
    document.getElementById("start").style.display = "block"
    document.getElementById("restart").style.display = "none"
}

function startFunction() {
    console.log(numbers);
    console.log("cliccato");
    this.style.display = "none"
    containerElement.innerHTML = ""
    timer();
    myfunction();
}


function timer() {
    let seconds = 0;
    let clock = setInterval(() => {
        seconds++
        containerElement.innerHTML = seconds
        if (seconds == 30) {
            clearInterval(clock)
        }
    }, 1000);
}

function randomNumber(numbers) {
    while (numbers.length < 5) {
        const randomNumber = Math.floor(Math.random() * 20)
        if (!numbers.includes(randomNumber)) {
            numbers.push(randomNumber)
        }
    }
}

function showNumber() {
    numbers.forEach(number => {
        containerElement.insertAdjacentHTML("beforeend", ` ${number} `)
    })
}

function myfunction() {
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
        //console.log(`Hai indovintato ${counter} numeri e sono ${right_numbers}`);
        containerElement.innerHTML = `Hai indovinato ${counter}`;
        if (counter > 1) {
            containerElement.insertAdjacentHTML("beforeend", ` numeri e sono: `)
            right_numbers.forEach(number => {
                containerElement.insertAdjacentHTML("beforeend", ` ${number} `)
            })
        } else if (counter == 1) {
            containerElement.insertAdjacentHTML("beforeend", ` numero ed è: `)

            containerElement.insertAdjacentHTML("beforeend", ` ${right_numbers} `)
        } else {
            containerElement.insertAdjacentHTML("beforeend", ` numeri`)
        }
        document.getElementById("start").style.display = "none"
        document.getElementById("restart").style.display = "block"
    }, 31000)
}