const small_cups = document.querySelectorAll(".small_cup");
const main_cup = document.querySelector(".main_cup");
const percentage = document.getElementById("percentage");
const remained = document.getElementById("remained");
const liters = document.getElementById("liters");

update_main_cup();

small_cups.forEach((cup, index) => {

    cup.addEventListener("click", () => fill_cups(index))

});

function fill_cups(index) {

    if (index == 7 && small_cups[index].classList.contains("full")) index--;
    else if (small_cups[index].classList.contains("full") && !small_cups[index].nextElementSibling.classList.contains("full")) index--;


    small_cups.forEach((cup, index2) => {

        if (index2 <= index) {
            cup.classList.add("full");
        }
        else {
            cup.classList.remove("full");
        }

    });

    update_main_cup();
}

function update_main_cup() {

    const full_cups = document.querySelectorAll(".small_cup.full").length;
    const total_cups = small_cups.length;


    if (full_cups === 0) {
        percentage.style.visibility = "hidden";
        percentage.style.height = 0;
    }

    else {
        percentage.style.visibility = "visible";
        percentage.style.height = `${full_cups / total_cups * 350}px`;
        percentage.innerText = `${full_cups / total_cups * 100}%`
    }

    if (full_cups === total_cups) {

        remained.style.visibility = "hidden";
        remained.style.height = 0;

    }

    else {
        remained.style.visibility = "visible";
        liters.innerHTML = `${2 - (250 * full_cups / 1000)}L`;
        // console.log(liters.i);
    }

}
