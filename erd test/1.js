function asteric(numb) {
  let temp = []
  for (let i = 1; i <= numb; i++){
    let temp2 = []
    for (let j = 1; j <= numb + 3; j++){
      // console.log(j);
      temp2.push(j)
    }
    // console.log(i); 
    temp.push(temp2)
  }
  return temp
}

console.log(asteric(4));