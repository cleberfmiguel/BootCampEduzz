const myNumber = 12.4032;

//transforma numero para string
const numberAsString = myNumber.toString();
console.log('Numero transfomado em string: ', typeof numberAsString);

//Retorna número com um numero de casas decimais
const fixedTwoDecimals = myNumber.toFixed(2);
console.log('\nNumero com duas casas decimais:', fixedTwoDecimals);

//transforma uma string em float
console.log('\nString parseada para float:', parseFloat('13.22'));

//Transforma uma string em int
console.log('\nString parseada para int:', parseInt('13.20'));