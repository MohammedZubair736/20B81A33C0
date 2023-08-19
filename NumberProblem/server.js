

async function primes(set) {
    var response = await fetch("http://20.244.56.144/numbers/primes");
    var data=await response.json()
    //console.log(data.numbers);
    var arr=data.numbers;
    await arr.forEach((item)=>{
        set.add(item);
    })
    
}
 async function fibo(set){
    var response = await fetch("http://20.244.56.144/numbers/fibo");
    var data=await response.json()
    var arr=data.numbers;
    await arr.forEach((item)=>{
        set.add(item);
    })
    var arr=data;
   // console.log(set);
}

async function odd(set){

    var response = await fetch("http://20.244.56.144/numbers/odd");
    var data=await response.json()
    var arr=data.numbers;
    await arr.forEach((item)=>{
        set.add(item);
    })
   // console.log(set);
}
async function even(set){
    var response = await fetch("http://20.244.56.144/numbers/rand");
    var data=await response.json()
    var arr=data.numbers;
    await arr.forEach((item)=>{
        set.add(item);
    })
    //console.log(set);
  } 
  async function func(){
  let set=new Set();
  await primes(set);
  await fibo(set);
  await odd(set);
  await even(set);

   
  console.log(set);
  
  }
  func();

