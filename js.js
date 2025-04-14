function  sortear(){
    const numeros = []

    while(numeros.length < 6){
        const num = Math.floor(Math.random() * 60 + 1)

        if(!numeros.includes(num)){
            numeros.push(num)
        }
    }
    return numeros.sort((a, b)  => a - b)
    console.log(numeros);
    
}



function compara(){
    const comparar = document.getElementById("numeros").value.split(', ').map(num => parseInt(num.trim()))
  

    if(comparar.length !== 6){
        return alert("Você não escreveu 6 numeros")
    }


    const chamar = sortear()
    const acertos = comparar.filter(num => chamar.includes(num)).length


    console.log(`Os quantidades de ascertos são: ${acertos}`)
    console.log(`Os numeros que você escreveu foram: ${comparar}`);
    console.log(` OS numeros sorteados são: ${chamar}`);
    
    alert(`Os quantidades de ascertos são: ${acertos}`,)
    alert(`Os numeros que você escreveu foram: ${comparar}`)
    alert(` OS numeros sorteados são: ${chamar}`)

    
    
    

}
