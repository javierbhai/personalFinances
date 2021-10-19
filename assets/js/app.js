//1. selector Jquery
const selector = document.getElementById("mainInput");

class Entry {
    constructor(value, date) {
        this.value = value;
        this.date   = date;
    }
    report(){
        console.log(`Fui creada el ${this.date} con un valor de $${this.value}`);
    }

}
const valuesList = {
    food: [],
    rent: [],
    fun: []
}

let getOutcomeStorage = JSON.parse(localStorage.getItem('outcomes')) || [];
const outcomesTotal = [...getOutcomeStorage]

const handleAdd = outcomesTotal => {
    let added = 0;
    for (let i = 0; i < outcomesTotal.length; i++) {
        const element = outcomesTotal[i];
        added += parseInt(element)
    }
    let add = document.getElementById('add')
    add.textContent = added;
}

const persistInfo = info => {
    localStorage.setItem('outcomes', JSON.stringify(info))
}

const handleOutcomes = entry => {
    outcomesTotal.push(entry);
    handleAdd(outcomesTotal)
    persistInfo(outcomesTotal)
}

const handleNewEntry = value => {
    const date = new Date()
    const entry = new Entry(value, date);
    valuesList.food.push(entry)
    persistInfo(valuesList.food)
    entry.report()
}

const printer = arrToPrint => {
    arrToPrint.map((el)=>{
        const newLiItem = document.createElement("li");
        newLiItem.setAttribute('class','day_list-item');
        //2. selector - uso de Jquery
        $('#ulToday').append(newLiItem);
        newLiItem.innerHTML = `<div class='day_list-item-category'><p class='day_list-item-category-icon'>🥙</p></div><span class='day_list-item-amount value'>${el}</span>`
    })
    console.log(arrToPrint)
}

printer(outcomesTotal)

const onSubmit = e => {

    const userInputValue = selector.value
    if (userInputValue === "") {
        e.stopPropagation();
    } else {
        e.preventDefault();
        handleNewEntry(userInputValue)
        handleOutcomes(userInputValue)
        printer(outcomesTotal)
        //3. Selector y Reset del Jquery
        $('#mainForm').get(0).reset();
    }
}