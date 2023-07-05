// let a=[1,2,3,4];

// function show()
// {
//     setTimeout(()=>{console.log(a);},1000)
    
// }
// function set(){
//     setTimeout(()=>{a.push(5)},3000)
//     return "OK"
// }
// async function worker(){
//     await set();
//     show();
// }

// worker();

let a=[1,2,3,4];

function show()
{
    setTimeout(()=>{console.log(a);},1000)
    
}
function set(){
    return new Promise((resolve, reject) => {
    setTimeout(()=>{
        a.push(5)
        let error=false;
        if(!error)
        {
            resolve();
        }
        else
        {
            reject("Error");
        }
    },3000)
    })
}
async function worker(){
    
    await set().then().catch((error)=>{
        console.log(error);
    })
    show();
}

worker();