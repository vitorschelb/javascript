//O spread transforma no caso, o array em parametros rest. Ele copia e espalha os valores do array na função 

function soma(...valores) {
    let res=0
    for(let v of valores){
    res+=v
    }
    return res
}
console.log(soma(10,5,2,8,25))