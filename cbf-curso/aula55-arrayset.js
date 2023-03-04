// A função .set é um método da classe Map em JavaScript que é usada para adicionar um novo par de chave-valor ao Map. *A chave é usada para identificar o valor associado a ela, de modo que cada chave pode ter APENAS um valor*. Se uma chave já existir no Map, a função .set SUBSTITUIRÁ o valor existente pelo novo valor. É importante lembrar que o Map é uma estrutura de dados que permite armazenar pares de chave-valor, em que as chaves podem ser de qualquer tipo, e os valores também podem ser de qualquer tipo.

const caixa = document.querySelector("#caixa");

let musicas = new Set(["musica1", "musica2", "musica3"]);

musicas.add("musica4");
musicas.delete("musica2") //Aqui tem de ser antes das interações do for, pois se não ele imprime o que já tem, e somente as proximas interações receberam novo array. 

musicas.add("musica1");
musicas.add("musica1");
musicas.add("musica1");

console.log(musicas);


// Leia: Para cada elemento de 'musicas', adicione o elemento + espaço no HTML de caixa.

musicas.forEach((el) => {
  caixa.innerHTML += el + "<br>";
});

// Leia: Para, cada elemento 'm' de 'musicas', adicione o elemento + espaço no HTML de caixa.

for (let m of musicas) {
  caixa.innerHTML += m + "<br>"; // Aqui é interessante lembrar que se usa o += por que apenas o =, vai retornar o ULTIMO elemento realizado no LOOP do FOR. Com o += a cada iteração do loop o elemento 'm' vai ser adicionado ao conteudo de caisa.
}

musicas.clear() //Limpa toda coleção após a interação. 

musicas.add("musica45");
musicas.add("musica46");
musicas.add("musica47");


musicas.forEach((el) => {
    caixa.innerHTML += el + "<br>";
  });
  
//Como se pode ver, o array ele é dinâmico como o map, mas ele não permite a repetição de novas informações, bem util seu uso em formulário que não se pode considerar elementos repetidos, seja para leitura de dados ou formulários que recebem input em aplicações de gerenciamento. Ele pode ser reutilizado de diferentes formas.
