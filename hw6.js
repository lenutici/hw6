
function drawTriangle(sign, height){
    if (height<=3){
      for(let i=1; i<=3; i++){
        console.log(sign.repeat(i));
      }
    } else {
       for(let i=1; i<=height; i++){
        console.log(sign.repeat(i));
      }
    }
  }
  drawTriangle('$', 6);
  // drawTriangle('!', 10);
  // drawTriangle('&', 20);


function capitalizeFirstLetter (string) {
  let result = '';
  for ( let i = 0; i < string.length; i++) {
    if ( i === 0 || string[ i - 1 ] === " " ) {
      result = result + string[i].toUpperCase();
    } else {
      result = result + string[i];
    }
  }
  return result;
}

console.log(capitalizeFirstLetter('lorem ipsum stan'));





