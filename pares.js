var numeroMax = 10;
var suma = 0;

for(let i = 1; i<= numeroMax; i++)
{
    if(i%2 == 0)
    suma = suma + i;
}

console.log('La suma de los números pares es: ' + suma);
//