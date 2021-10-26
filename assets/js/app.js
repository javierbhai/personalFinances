// Selectors
const input = document.getElementById("mainInput");
const select = document.getElementById("mainSelect");

// Getting Persistence
let getOutcomeStorage = JSON.parse(localStorage.getItem('outcomes')) || [];
let valuesList = [...getOutcomeStorage]

// Info Abstraction
class Entry {
    constructor(value, category) {
        this.value = value;
        this.category = category;
    }
    report(){
        console.log(`Fui creada el ${this.category} con un valor de $${this.value}`);
    }
};

// Handle submit info
const handleSubmit = e => {
    const userInputValue = input.value
    const userSelectValue = select.value
    if (userInputValue === "") {
        e.stopPropagation();
    } else {
        e.preventDefault();
        handleInfo(userInputValue, userSelectValue)
        $('#mainForm').get(0).reset();
    }
}

// Store info function
const persistInfo = info => {
    localStorage.setItem('outcomes', JSON.stringify(info))
}

const handleInfo = (value, category) => {  
    const newElement = new Entry(value, category)
    valuesList.push(newElement)
    persistInfo(valuesList)
    printer(valuesList)
}

const printer = arrToPrint => {
    arrToPrint.map((el)=>{
        console.log(el)
        const newLiItem = document.createElement("li");
        newLiItem.setAttribute('class','day_list-item');
        $('#ulToday').append(newLiItem);
        newLiItem.innerHTML = `<div class='day_list-item-category'><p class='day_list-item-category-icon'>${el.category}</p></div><span class='day_list-item-amount value'>${el.value}</span>`
    })
}

printer(valuesList)
