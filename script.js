const list = document.querySelector("ul")
const showAllButton = document.querySelector(".show-all")
const showDiscountButton = document.querySelector(".add-discount")
const showTotalValueButton = document.querySelector(".total-value")
const showProductsFilteringButton = document.querySelector(".filter-products")

function formatCurrency(value) {

    return convertedCurrency = value.toLocaleString('pt-br', {
        style: 'currency',
        currency: 'BRL'
    
    });
}

function showAll(productsArray) {

    let myLi = ``

    productsArray.forEach((product) => {

        myLi += `
        
        <li>
    
            <img src="${product.src}" alt="x-bacon-egg">
            <p>${product.name}</p>
            <p class="item-price">${formatCurrency(product.price)}</p>
    
        </li> 
    
    `
});

    list.innerHTML = myLi
}

function showDiscount() {

    const listDiscount = menuOptions.map((product) => ({


        ...product,
        price: product.price * 0.9

}))

    showAll(listDiscount)

}


function showTotalValue() {

    const totalValue = menuOptions.reduce((acc, curr) => acc + curr.price, 0)
    const totalValueWithDiscount = menuOptions.reduce((acc, curr) => acc + curr.price * 0.9, 0)

    list.innerHTML = `
    
            <li>

                <p> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                O Valor Total
                <br> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                Dos Produtos é 
                <br> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                ${formatCurrency(totalValue)}</p>

            </li> 

            <li>

                <p> &nbsp; &nbsp; &nbsp;
                O Valor Total Com 
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
                Desconto é 
                <br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
                ${formatCurrency(totalValueWithDiscount)}</p>

            </li> 
        
        `
}


function showProductsFiltering() {

    const filterJustVegan = menuOptions.filter((product) => product.vegan)

    showAll(filterJustVegan)

}

showDiscountButton.addEventListener("click", showDiscount)
showAllButton.addEventListener("click", () => showAll(menuOptions))
showTotalValueButton.addEventListener("click", showTotalValue)
showProductsFilteringButton.addEventListener("click", showProductsFiltering)


