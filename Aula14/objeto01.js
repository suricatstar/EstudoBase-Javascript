//var: é global e pode funcionar fora de um escopo de bloco / ela é global e local (hoisting: elevação | puxa a var)

//const(valor constante, não muda depois de atribuida,considerar escopos diferentes) e let são locais e só funcionam no escopo onde forma criadas

//Diferentemente de var, const e let são variáveis com escopo local, ou seja, só são visíveis no escopo onde foram criadas e em escopos interiores ao de criação. Em uma variável let, porém, pode-se alterar o valor em um escopo e o valor irá persistir no escopo de criação.

let amigo = {nome:'josé',sexo:'M',peso:85.4,engordar(p=0){
  console.log('engordou')
    this.peso += p
}}
amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso}kg`)