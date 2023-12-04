let isDOBOpen = false;
let dateOfBirth;
const settingCogEl = document.getElementById("settingIcon");
const settingContentEl = document.getElementById("settingContent");
const initialTextEl = document.getElementById("initialText");
const afterDOBBtnTxtEl = document.getElementById("afterDOBBtnTxt");
const dobButtonEl = document.getElementById("dobButton");
const dobInputEl = document.getElementById("dobInput");


const yearEl = document.getElementById("year");
const monthEl = document.getElementById("month");
const dayEl = document.getElementById("day");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondEl = document.getElementById("second");

const toggleDateOfBirthSelector = () => {
    if (isDOBOpen) {
        settingContentEl.classList.add('hide');
    } else {
        settingContentEl.classList.remove('hide');
    }
    isDOBOpen = !isDOBOpen;
    console.log("Toggle", isDOBOpen);
};

const setDOBHandler = () => {
    dateOfBirth = dobInputEl.value;
    if (dateOfBirth) {
        initialTextEl.classList.add("hide");
        afterDOBBtnTxtEl.classList.remove("hide");
    } else {
        afterDOBBtnTxtEl.classList.add("hide");
        initialTextEl.classList.remove("hide");
    }
};

setDOBHandler();

const updateAge = () => {
    const currentDate = new Date();
}




settingCogEl.addEventListener("click", toggleDateOfBirthSelector);

dobButtonEl.addEventListener("click", setDOBHandler);