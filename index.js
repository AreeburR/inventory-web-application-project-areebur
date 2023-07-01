const stockButtons = document.querySelectorAll("#inStock");

let inStock = true;

for (let button of stockButtons) {
    button.addEventListener("click", (e) => {
        e.preventDefault();
        inStock = !inStock;
        if (inStock === true) {
            button.textContent = "In Stock"
            button.style.background = "green"
            button.style.textcolor = "black"
        } else {
            button.textContent = "Out of Stock"
            button.style.background = "red"
            button.style.textcolor = "white"
        }
    });
}

const removeButtons = document.querySelectorAll("#remove");

for (let button of removeButtons) {
    button.addEventListener("click", (e) => {
        e.preventDefault();
        e.target.parentElement.remove();
        e.reset();
    });
}

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    let name = e.target.name.value;
    let image = e.target.image.value;
    let quantity = e.target.quantity.value;
    let price = e.target.price.value;
    let stock = e.target.stock.value;

    createSnack(name, image, quantity, price, stock);
    form.reset();
});

function snackTemplate(name, image, quantity, price, stock) {
    let li = document.createElement("li");
    let h2 = document.createElement("h2");
    h2.textContent = name;
    li.append(h2, document.createElement("hr"));
    let img = document.createElement("img");
    img.src = image;
    let quantityP = document.createElement("p");
    quantityP.textContent = `Minimum Quantity: ${quantity}`;
    let priceP = document.createElement("p");
    priceP.textContent = `Price: $${price}`;
    li.append(img, quantityP, priceP);


    let inStockButton = document.createElement("button");
    inStockButton.setAttribute("id", "inStock");
    inStockButton.textContent = "In Stock";

    let removeButton = document.createElement("button");
    removeButton.setAttribute("id", "remove");
    removeButton.textContent = "Remove";
    li.append(inStockButton, document.createElement("br"), removeButton);

    let inStock = true;
    inStockButton.addEventListener("click", (e) => {
        e.preventDefault();
        inStock = !inStock;
        if (inStock === true) {
            inStockButton.textContent = "In Stock"
            inStockButton.style.background = "green"
            inStockButton.style.textcolor = "black"
        } else {
            inStockButton.textContent = "Out of Stock"
            inStockButton.style.background = "red"
            inStockButton.style.textcolor = "white"
        }
    });

    removeButton.addEventListener("click", (e) => {
        li.remove();
    });

    return li;
}

function createSnack(name, image, quantity, price, stock){
    const ul = document.querySelector("ul");
    const li = snackTemplate(name, image, quantity, price, stock);

    ul.prepend(li);
}