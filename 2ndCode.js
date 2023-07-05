const call=(time)=>{
    setTimeout(()=>{
        console.log(`Printing hello in = ${time} millisecond`)
    },time)
}
call(5000);
call(2000);
call(2400);
call(4300);
call(2800);

console.log("Calling setTimeout function...")