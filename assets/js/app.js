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

const outcomesTotal = []

const handleAdd = outcomesTotal => {
    // Tarea 3 Esta funcion genera una operación basada en datos dados por el cliente se imprimen en el lateral
    let added = 0;
    for (let i = 0; i < outcomesTotal.length; i++) {
        const element = outcomesTotal[i];
        added += parseInt(element)
    }
    let add = document.getElementById('add')
    add.textContent = added;
}

const handleOutcomes = entry => {
    // Tarea 2 Esta funcion ordena las entradas de forma acsendente

    outcomesTotal.push(entry);
    outcomesTotal.sort()

    console.log('Array de gastos ordenados', outcomesTotal)
    handleAdd(outcomesTotal)
}

const handleNewEntry = value => {
    // Tarea 1 Incorporar array a mi proyecto
    const date = new Date()
    const entry = new Entry(value, date);

    valuesList.food.push(entry)

    entry.report()
}

const onSubmit = e => {

    const userInputValue = selector.value
    if (userInputValue === "") {
        e.stopPropagation();
    } else {
        e.preventDefault();

        const newLiItem = document.createElement("li");
        newLiItem.setAttribute('class','day_list-item');
        document.getElementById('ulToday').appendChild(newLiItem);
        newLiItem.innerHTML = `<div class='day_list-item-category'><p class='day_list-item-category-icon'>🥙</p></div><span class='day_list-item-amount value'>${userInputValue}</span>`
        handleNewEntry(userInputValue)
        handleOutcomes(userInputValue)
        document.getElementById('mainForm').reset();
    }
}