const data = [
    {
      id: 1,
      img: "../img/jaqueta.svg",
      nameItem: "Lightweight Jacket",
      description:
        "Adicione um pouco de energia ao seu guarda-roupa de inverno com esta jaqueta vibrante...",
      value: 100.00,
      add: "AddCart",
      tag: ["Agasalhos"],
    },
    {
      id: 2,
      img: "../img/gorro.svg",
      nameItem: "Black Hat",
      description:
        "O gorro Next.js chegou! Esta beldade bordada tem um ajuste confortável que garante que...",
      value: 100.00,
      add: "AddCart",
      tag: ["Acessórios"],
    },
    {
      id: 3,
      img: "../img/mascara.svg",
      nameItem: "Mask",
      description:
        "Esta máscara facial durável é feita de duas camadas de tecido tratado e possui presilhas...",
      value: 40.00,
      add: "AddCart",
      tag: ["Acessórios"],
    },
    {
      id: 4,
      img: "../img/camiseta_preta.svg",
      nameItem: "T-Shirt",
      description:
        "Esta t-shirt é imprescindível no seu guarda-roupa, combinando o caimento intemporal de...",
      value: 100.00,
      add: "AddCart",
      tag: ["Camisetas"],
    },
    {
      id: 5,
      img: "../img/camiseta_branca.svg",
      nameItem: "Short-Sleeve T-Shirt",
      description:
        "Agora você encontrou a camiseta básica do seu guarda-roupa. É feito de um mais grosso...",
      value: 100.00,
      add: "AddCart",
      tag: ["Camisetas"],
    },
    {
      id: 6,
      img: "../img/moletom.svg",
      nameItem: "Champion Packable Jacket",
      description:
        "Proteja-se dos elementos com esta jaqueta embalável Champion. Esta jaqueta de poliést...",
      value: 100.00,
      add: "AddCart",
      tag: ["Agasalhos"],
    },
  ];

function adicionarCards (array) {
    document.querySelector(".contDosProdutos").insertAdjacentHTML("afterbegin", 

    `<div class="card" id="${array[0].id}">
        <figure class="imagem-product">
            <img src=${array[0].img} alt=${array[0].nameItem} class="foto-product">
        </figure>
        <span class="category"><small>${array[0].tag[0]}</small></span>
        <h3 class="nomeProd">${array[0].nameItem}</h3>
        <p class="descript">${array[0].description}</p>
        <p class="price">R$ ${array[0].value},00</p>
        <button class="addCart" id="${array[0].id}">Adicionar ao carrinho</button>
    </div>

    <div class="card" id="${array[1].id}">
        <figure class="imagem-product">
            <img src=${array[1].img} alt=${array[1].nameItem} class="foto-product">
        </figure>
        <span class="category"><small>${array[1].tag[0]}</small></span>
        <h3 class="nomeProd">${array[1].nameItem}</h3>
        <p class="descript">${array[1].description}</p>
        <p class="price">R$ ${array[1].value},00</p>
        <button class="addCart" id="${array[1].id}">Adicionar ao carrinho</button>
    </div>

    <div class="card" id="${array[2].id}">
        <figure class="imagem-product">
            <img src=${array[2].img} alt=${array[2].nameItem} class="foto-product">
        </figure>
        <span class="category"><small>${array[2].tag[0]}</small></span>
        <h3 class="nomeProd">${array[2].nameItem}</h3>
        <p class="descript">${array[2].description}</p>
        <p class="price">R$ ${array[2].value},00</p>
        <button class="addCart" id="${array[2].id}">Adicionar ao carrinho</button>
    </div>

    <div class="card" id="${array[3].id}">
        <figure class="imagem-product">
            <img src=${array[3].img} alt=${array[3].nameItem} class="foto-product">
        </figure>
        <span class="category"><small>${array[3].tag[0]}</small></span>
        <h3 class="nomeProd">${array[3].nameItem}</h3>
        <p class="descript">${array[3].description}</p>
        <p class="price">R$ ${array[3].value},00</p>
        <button class="addCart" id="${array[3].id}">Adicionar ao carrinho</button>
    </div>

    <div class="card" id="${array[4].id}">
        <figure class="imagem-product">
            <img src=${array[4].img} alt=${array[4].nameItem} class="foto-product">
        </figure>
        <span class="category"><small>${array[4].tag[0]}</small></span>
        <h3 class="nomeProd">${array[4].nameItem}</h3>
        <p class="descript">${array[4].description}</p>
        <p class="price">R$ ${array[4].value},00</p>
        <button class="addCart" id ="${array[4].id}">Adicionar ao carrinho</button>
    </div>

    <div class="card" id="${array[5].id}">
        <figure class="imagem-product">
            <img src=${array[5].img} alt=${array[5].nameItem} class="foto-product">
        </figure>
        <span class="category"><small>${array[5].tag[0]}</small></span>
        <h3 class="nomeProd">${array[5].nameItem}</h3>
        <p class="descript">${array[5].description}</p>
        <p class="price">R$ ${array[5].value},00</p>
        <button class="addCart" id="${array[5].id}" >Adicionar ao carrinho</button>
    </div>`
)   
}
adicionarCards(data)

const cartZerado = document.querySelector(".dentro-cart")
const listaVitrine = document.querySelector(".contDosProdutos")
const listaCarrinho = document.querySelector(".carrinho")
const cartCorpo = document.querySelector(".divCarrinho")
const cartNovo = cartCorpo.insertAdjacentHTML("beforeend", `<ul class='listaCart'> </ul>`)
const listaCart = document.querySelector(".listaCart")
let qtdCart = 0
let totalVendas = 0
listaCart.insertAdjacentHTML("afterend",`<div class="totalCart invisivel" > </div>`)
const pegarDivTotal = document.querySelector(".totalCart")
pegarDivTotal.insertAdjacentHTML("beforeend", ` <p class="qtdDivCart"></p><p class="totalDivCart"></p>`)
const divCartParagrafo = document.querySelector(".qtdDivCart")
const divCartTotal = document.querySelector(".totalDivCart")
const pegaLi = document.querySelector(".newPdt")
const pegaNomeCart = document.querySelector(".nomeCart")
const pegaPriceCart = document.querySelector(".priceCart")
const produtosCarrinho = []

listaVitrine.addEventListener("click", identificaItem) 
listaCarrinho.addEventListener("click", identificaItem)

function identificaItem (event) {

    const itemClick = event.target
    if (itemClick.tagName === "BUTTON") {
      adicionarCarrinho (itemClick)
    }

    if (itemClick.classList == "removeCart") {
      removeCarrinho(itemClick)
    }
}

function adicionarCarrinho (button){ 
  const numButton = button.id - 1
  cartZerado.classList.add("dentroCartClick")
  pegarDivTotal.classList.remove("invisivel")
    listaCart.insertAdjacentHTML("beforeend", 
      `<li class= "newPdt" id="${data[numButton].id}">
         <img src= "${data[numButton].img}" class="imgCart">
          <h3 class="nomeCart"> ${data[numButton].nameItem} </h3>
          <br>
          <p class="priceCart"> R$ ${data[numButton].value},00 </p>
          <p class="removeCart" id="${data[numButton].id}"> Remover item </p>
        </li>`)
   qtdCart += 1
    totalVendas += data[numButton].value

  produtosCarrinho.push(data[numButton])
  console.log(produtosCarrinho)

  divCartParagrafo.innerHTML = `Quantidade: ${qtdCart}`
  divCartTotal.innerHTML = `Total: R$ ${totalVendas},00 `
}

function removeCarrinho (button) {
  listaCart.innerHTML = ""
  const procurar = produtosCarrinho.find((item) => button.id == item.id)
  const indiceCarrinho = produtosCarrinho.indexOf(procurar)
  totalVendas -= produtosCarrinho[indiceCarrinho].value
  produtosCarrinho.splice(indiceCarrinho, 1)
  for(let i = 0; i < produtosCarrinho.length; i++){
    listaCart.insertAdjacentHTML("beforeend", 
      `<li class= "newPdt" id="${produtosCarrinho[i].id}">
         <img src= "${produtosCarrinho[i].img}" class="imgCart">
          <h3 class="nomeCart"> ${produtosCarrinho[i].nameItem} </h3>
          <br>
          <p class="priceCart"> R$ ${produtosCarrinho[i].value},00 </p>
          <p class="removeCart" id="${produtosCarrinho[i].id}"> Remover item </p>
        </li>`)
  }
  qtdCart -= 1
  divCartParagrafo.innerHTML = `Quantidade: ${qtdCart}`
  divCartTotal.innerHTML = `Total: R$ ${totalVendas},00 `

}  
