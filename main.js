let numbers = []

let i = 0;
while (numbers.length < 5) {
    const randomNumber = Math.floor(Math.random() * 20)
    if (!numbers.includes(randomNumber)) {
        numbers.push(randomNumber)
    }
}

//console.log(numbers);
const containerElement = document.querySelector(".container")


numbers.forEach(number => {
    containerElement.insertAdjacentHTML("beforeend", ` ${number} `)
})





document.getElementById("restart").addEventListener("click", restartFunction);

function restartFunction() {
    console.log("cliccato");
    this.style.display = "none"
    containerElement.innerHTML = ""
    timer();

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
        document.querySelector(".container").innerHTML = `Hai indovintato ${counter}`;
        if (counter > 1) {
            document.querySelector(".container").insertAdjacentHTML("beforeend", ` numeri e sono: `)
            right_numbers.forEach(number => {
                document.querySelector(".container").insertAdjacentHTML("beforeend", ` ${number} `)
            })
        } else if (counter == 1) {
            document.querySelector(".container").insertAdjacentHTML("beforeend", ` numero ed è: `)

            document.querySelector(".container").insertAdjacentHTML("beforeend", ` ${right_numbers} `)

        }
        document.getElementById("restart").style.display = "block"
        document.getElementById("restart").innerHTML = "Restart"


    }, 31000)

}

function timer() {
    let seconds = 0;
    let clock = setInterval(() => {
        seconds++
        document.querySelector(".container").innerHTML = seconds
        if (seconds == 30) {
            clearInterval(clock)
        }
    }, 1000);
}