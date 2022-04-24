const miniCartItems = document.getElementById('miniCartData');
let miniCartTotal = document.getElementById('miniCartTotal');

async function buildCart(){
    // change fetch to dataUrl variable to see freeshipping bar
    const cartCheap = 'https://raw.githubusercontent.com/ccesaralvest/teste-codeby/main/data/abaixo-10-reais.json';
    const dataUrl = 'https://raw.githubusercontent.com/ccesaralvest/teste-codeby/main/data/acima-10-reais.json';
    const dataResult = await fetch(cartCheap).then((resp) => resp.json());
    const items = dataResult.items;

    let miniCartCount = 0;
    
    //create a html with data - product infos
    let miniCartItemsHTML = items.map( el =>  {
        miniCartCount = el.listPrice += miniCartCount;  

        return`
            <li class="miniCartItem">
                <section class="miniCartItemImageContainer">
                    <img id="miniCartItemImage" src="${el.imageUrl}"/>
                </section>

                <section class="miniCartItemData">
                    <p id="miniCartItemName">${el.name}</p>
                    <p id="miniCartItemListPrice">R$ ${(el.listPrice/100).toFixed( 2 ).replace(".", ",")}</p>
                    <p id="miniCartItemPrice">R$ ${(el.price/100).toFixed( 2 ).replace(".", ",")}</p>
                </section>
            </li>
        `;
    });

    if (miniCartCount <= 1000){
        miniCartTotal.innerHTML = `<section class="totalizer">
                                        <p>Total</p>
                                        <p>R$ ${(miniCartCount/100).toFixed( 2 ).replace(".", ",")}</p>
                                    </section>`
    } 
    else {
        miniCartTotal.innerHTML = `<section class="totalizerWithShipping">
                                        <p>Total</p>
                                        <p>R$ ${(miniCartCount/100).toFixed( 2 ).replace(".", ",")}</p>
                                    </section>
                                    <section class="miniCartFreeShipping">
                                        <p>Parabéns, sua compra tem frete grátis!</p>
                                    </section>
                                    `;
    }

    miniCartItems.innerHTML = miniCartItemsHTML.join('');
}

document.addEventListener("DOMContentLoaded", function(e) {
    buildCart();
});
