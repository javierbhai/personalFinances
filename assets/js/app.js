const selector = document.getElementById("mainInput");

// Clase Modeladora de Valores entrados por el usuario
class Entry {
    constructor(value, date) {
        this.value = value;
        this.date   = date;
    }
    report(){
        console.log(`Fui creada el ${this.date} con un valor de $${this.value}`);
    }

}

// Inicializo este objeto (valuesList) con arrays de multiples categorias (Por ahora solo Food)
const valuesList = {
    food: [],
    rent: [],
    fun: []
}

const onSubmit = e => {
    const date = new Date()
    if (selector.value === "") {
        e.stopPropagation();
    } else {
        e.preventDefault();

        const newLiItem = document.createElement("li");
        newLiItem.setAttribute('class','day_list-item');
        document.getElementById('ulToday').appendChild(newLiItem);
        newLiItem.innerHTML = `<div class='day_list-item-category'><p class='day_list-item-category-icon'>🥙</p></div><span class='day_list-item-amount value'>${selector.value}</span>`;
        
        // Creo una nueva entrada
        const entry1 = new Entry( selector.value, date);

        // agrego cada entrada de usuario al array de su categoria (Por ahora solo Food)
        valuesList.food.push(entry1)

        // En la consola se pueden ver en la categoria de entradas Food y el reporte de creacion atraves método report()
        console.log('Entradas a la categoría de Food', valuesList.food)
        entry1.report()
        
        document.getElementById('mainForm').reset();
    }
}