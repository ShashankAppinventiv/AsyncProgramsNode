const call=(time)=>{
    return new Promise((reslove,reject)=>{
        setTimeout(()=>{
            let error=false;
            if(!error)
            {
                reslove(`Printing hello in = ${time} millisecond`)
            }
            else{
                reject("Error in processing")
            }
        },time)
    })
}
function base()
{
    let promise1=call(3000)
    let promise2=call(2000)
    let promise3=call(1500)
    Promise.all([promise1,promise2,promise3]).then(([promise1,promise2,promise3])=>{
        console.log(promise1),
        console.log(promise2)
        console.log(promise3)
    }).catch((error)=>console.log("conflect occur"))
}
base();
console.log("Calling setTimeout function...")