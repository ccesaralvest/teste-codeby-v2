const miniCartItems = document.getElementById('miniCartData');
let miniCartTotal = document.getElementById('miniCartTotal');

async function getData(){

    const cartCheap = 'https://raw.githubusercontent.com/ccesaralvest/teste-codeby/main/data/abaixo-10-reais.json'

    //variavel guarda essa string pra mim
    const dataUrl = 'https://raw.githubusercontent.com/ccesaralvest/teste-codeby/main/data/acima-10-reais.json';

    //variavel guarda pra mim "quando chegar" os dados da URL
    const dataResult = await fetch(dataUrl).then((resp) => resp.json());
    const items = dataResult.items;
    let miniCartCount = 0;
  
    let miniCartItemsHTML = items.map( el =>  {
        miniCartCount = el.listPrice += miniCartCount;  

        return `
            <li class="miniCartItem">
                <section class="miniCartItemImageContainer">
                    <img id="miniCartItemImage" src="${el.imageUrl}"/>
                </section>

                <section class="miniCartItemData">
                    <p id="miniCartItemName" >${el.name}</p>
                    <p id="miniCartItemListPrice" >${el.listPrice}</p>
                    <p id="miniCartItemPrice" >${el.price}</p>
                </section>
            </li>
        `;
    });
    
    if (miniCartCount <= 1000){
        miniCartTotal.innerHTML = `<p>${miniCartCount}</p>`
    } else {
        miniCartTotal.innerHTML = `<p>${miniCartCount}</p> <p>Frete Gratis</p>`;
    }
    
    miniCartItems.innerHTML = miniCartItemsHTML.join('');
}
getData();