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

