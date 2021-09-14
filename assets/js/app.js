const selector = document.getElementById("mainInput");

const onSubmit = e => {

    if (selector.value === "") {
        e.preDefault();
        e.stopPropagation();
    } else {
        e.preventDefault();

        const newLiItem = document.createElement("li");
        newLiItem.setAttribute('class','day_list-item');
        document.getElementById('ulToday').appendChild(newLiItem);
        newLiItem.innerHTML = `<div class='day_list-item-category'><p class='day_list-item-category-icon'>🥙</p></div><span class='day_list-item-amount value'>${selector.value}</span>`;
   
        document.getElementById('mainForm').reset();
    }
}