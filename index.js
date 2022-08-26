// Code your solutions in this file
const openPalm = ["Guadalupe", "Ollie", "Aki"];

function writeCards(openPalm , string) {
   
       const newopenPalm = [];
    for (let i = 0; i < openPalm.length; i++)
{newopenPalm.push(`Thank you, ${openPalm[i]}, for the wonderful ${string} gift!`)}
 return newopenPalm;
}

console.log(writeCards(openPalm,'surprise'));
function countDown(number) {
    while (number >=0){
        console.log(number--);
    }
}