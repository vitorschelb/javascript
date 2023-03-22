const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./images/item-1.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "./images/item-2.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "./images/item-3.jpeg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "./images/item-4.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "./images/item-5.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "./images/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "./images/item-7.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "./images/item-8.jpeg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "./images/item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: "steak dinner",
    category: "dinner",
    price: 39.99,
    img: "./images/item-10.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];
const sectionCenter = document.querySelector(".section-center"); //Variável com a seção do menu.
const btnContainer = document.querySelector(".btn-container");

// **** LOAD ****
window.addEventListener("DOMContentLoaded", () => {
  displayMenuItems(menu); //Chama a função após a tela ser carregada, usando como argumento o array 'menu'.
  displayMenuButtons();
});

//**** DISPLAY ITEMS ****
const displayMenuItems = (menuItems) => {
  //Cria uma função para abrigar a funcionalidade de popular com o parametro 'menuItems'
  let displayMenu = menuItems.map((item) => {
    //Cria variável com map, permitindo iterar cada item do menu. OBS: Ele recebe pela chamada da função o argumento do array 'menu' para o parametro 'menuItems'
    return `<article class="menu-item"> 
        <img src=${item.img} class="photo" alt=${item.title} />
        <div class="item-info">
          <header>
            <h4>${item.title}</h4>
            <h4 class="price">$${item.price}</h4>
          </header>
          <p class="item-text">${item.desc}</p>
        </div>
      </article>`;
  }); //Retorna para a variável o array com os itens iterados.
  displayMenu = displayMenu.join(""); //Junta todos os itens do array em uma string, sem separador ('').
  sectionCenter.innerHTML = displayMenu; //Insere os itens do array modificado na sectionCenter.
};

//**** REDUZIR AS CATEGORIAS EM VALORES UNICOS ****
const displayMenuButtons = () => {
  const categories = menu.reduce( //Variável categories, abriga a função reduce.
    (values, item) => { // 'values' é o acumulador, que me dá os valores unicos de menu. 'item' é o item atual do array
      if (!values.includes(item.category)) { //Condição, se os valores unicos não incluir o item de uma categoria ja existente...
        values.push(item.category); //Adicione a categoria do item.
      }
      return values; //Me retorne os valores unicos.
    },
    ["all"] //Valor inicial do acumulador contendo todas categorias. 
  );

  //**** DISPLAY BTN ****
  const categoryBtns = categories.map((category) => { //Variável que mapeia todos itens dentro de categories para poder mapear.
      return `<button class="filter-btn" type="button" data-id=${category}>${category}</button>`; //html iterado
    })
    .join(""); //Junta tudo em uma string, retirando o separado ','
  btnContainer.innerHTML = categoryBtns; //Adiciona no html
  const filterBtns = btnContainer.querySelectorAll(".filter-btn"); //Como os botões são criados dinamicamente, a variavel que os abriga pela classe deve ser inserida após sua criação. Dessa forma ele consegue acessar eles e ser chamada na função abaixo.

  //**** FILTERS ****/
  filterBtns.forEach((btn) => {
    //Interajo individualmente com cada botão.
    btn.addEventListener("click", (e) => {
      //Adiciono o evento para cada botão.
      const category = e.currentTarget.dataset.id; //Adiciono a propriedade dataset no HTML de cada botão e crio a variável que abriga cada um em especifico
      const menuCategory = menu.filter((menuItem) => {
        // Crio uma variável com o parametro menuItem para filtrando o menu a partir da condicional
        if (menuItem.category === category) {
          //Se a categoria de menu item for igual a categoria do dataset, me retorne o menuItem
          return menuItem;
        }
      });
      if (category === "all") {
        //Se a categoria for igual a "all" rode a função de iteração com todo o menu.
        displayMenuItems(menu);
      } else {
        displayMenuItems(menuCategory); //Se não rode a função de iteração com o menu filtrado.
      }
    });
  });
};
