//Uma promise, é um objeto que pode receber uma função (fetch, caso receba dados de uma api por exemplos), e se manter em diferentes estados ao longo do código:
//Estado: Pending, Fulfilled, Rejected
//Não é preciso REQUISITAR a promise continuamente, pode-se utilizar:
//THEN() e CATCH()

//THEN(suaFuncao) é uma função que recebe uma função para ser executada quando a promise for executada!

//catch(suaFuncao) é uma função que recebe uma função para ser executada quando a promise for rejeitada!

//Fetch(URL) é uma função que você dá uma URL e ela traz as 'coisas' da URL em uma promise.

//Boa parte dos códigos não se verá a declaração do objeto promise, mas um encadeamento de funções (Chaining) por exemplo:

//fetch(API).then(suaFuncao).catch(suaFuncao)

/* DESTRINCHADA */

function setup() {
    noCanvas();

    let promise = fetch(wordnikAPI)
    promise.then(gotData)
    promise.catch(gotErr)

    function gotData(data) {
        console.log(data)
    }

    function gotErr {
        console.log(err)
    }
}

/* 1º LIMPEZA: ENCADEAMENTO */

function setup() {
    noCanvas();

    promise = fetch(wordnikAPI).then(gotData).catch(gotErr)

    function gotData(data) {
        console.log(data)
    }

    function gotErr(err) {
        console.log(err)
    }
}

/* 2º LIMPEZA: FUNÇÕES ANÔNIMAS */

function setup() {
    noCanavas();

    fetch(wordnikAPI)
    .then(function(data){
        console.log(data)
    }).catch(function(err) {
        console.log(err)
    })
}

/* 3º LIMPEZA: ARROW FUNCTION */

function setup() {
    noCanvas()

    fetch(wordnikAPI)
    .then(data => console.log(data))
    .catch(err => console.log(err))
}

/* 4º PASSO: CHAMAR EM FORMATO JSON E CONVERTER PARA UM OBJETO, ELE VEM TAMBÉM COMO UMA PROMISE. FETCH E JSON RETORNA UMA PROMISE */

function setup() {
    noCanvas()

    fetch(wordnikAPI)
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(err => console.log(err))
}

function setup () {
    fetch(wordnikAPI)
    .then(response => response.json())
    .then(json => {
        createImageBitmap(json.word)
        return fetch(giphyAPI + json.word)
    })
    .then(response => response.json())
    .then(json.data[0].images[''])
}