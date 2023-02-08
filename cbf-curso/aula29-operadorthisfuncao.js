//O This indica que a variavel indica para um parametro especifico dentro da função. Faz referência ao elemento DENTRO DA FUNÇÃO;

function aluno(nome,nota){
    this.nome=nome
    this.nota=nota

    console.log(nome)
    console.log(nota)
}

aluno("Bruno", 100)

