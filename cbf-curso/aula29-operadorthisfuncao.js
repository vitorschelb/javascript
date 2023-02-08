//O This indica que a variavel indica para um parametro especifico dentro da função. Faz referência ao elemento DENTRO DA FUNÇÃO;

function aluno(nome,nota){
    this.nome=nome
    this.nota=nota

    console.log(nome)
    console.log(nota)

    this.dados_anonimos=function(){
        setTimeout(function(){
            console.log(this.nome)
            console.log(this.nota) //Faz referencia a INSTANCIA criada em SETTIMEOUT
        },5000) //Gera um atraso na execução desses dados. A variavel, indica a função para imprimir dados.

    }

    this.dados_arrow=function(){
        setTimeout(()=>{
            console.log(this.nome)
            console.log(this.nota)
        },2000)
    }
}
const aluno1 = new aluno("Bruno", 100)
aluno1.dados_anonimos()
aluno1.dados_arrow()
