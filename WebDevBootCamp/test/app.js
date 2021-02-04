// Leave the next line, the form must be assigned to a variable named 'form' in order for the exercise test to pass
const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    const nameInput = form.elements.product;
    const quantityInput = form.elements.qty;

    addNewItem(nameInput.value, quantityInput.value);

    nameInput.value = ''
    quantityInput.value = ''
})

const addNewItem = (name, quantity) => {
    // nameInput.value = "ahahahahaha"
    const itemContainer = document.querySelector('#list');
    const item = document.createElement('li');
    item.append(`${quantity} ${name}`);
    itemContainer.append(item);
}