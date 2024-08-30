/// var, let, const

let nome = 'Ana'

//Arrays []
                //0       1           2
let listaNomes = ['Ana', 'Gabriel', 'Marcos', 'Giovanna', 'Ryan', 'Luis']

console.log(listaNomes[4])//acessando uma posição específica


listaNomes[0]='Jéssica'//Substituindo valores

listaNomes.push('Lukas')//inserindo como último elemento

listaNomes.splice(4, 0, 'Nicolas')//(posicaoparainserir, 0, novoelmento) inserir em um local específico

listaNomes.splice(1,1)//removendo da lista em posição específica


console.log(listaNomes.length)//mostra o tamanho do array
console.log(listaNomes.sort())//organizar em ordem crescente
console.log(listaNomes)//acessando todo o array

for(let posicao=0;posicao<listaNomes.length;posicao++){
    console.log(`Na posição ${posicao} está ${listaNomes[posicao]}`)
}//percorrer a lista

for(let posi in listaNomes){
    console.log(`Na posição ${posi} está ${listaNomes[posi]}`)
}