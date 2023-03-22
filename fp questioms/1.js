console.log('a')
async function a(){
console.log('b');
}
 async function d(){
  console.log(await a());
   console.log('e')
    return 'g'
}
console.log(await d())
console.log('c')
