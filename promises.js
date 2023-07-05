let a=[1,2,3,4];

function show()
{
    setTimeout(()=>{console.log(a);},1000)
    
}
function set(){
    return new Promise((resolve,reject)=>{
        let error=false;
        setTimeout(()=>{
            a.push(5)
            if(!error)
        {
            resolve();
        }else{
            reject("Error")
        }
        },3000)
        
    })
}

set().then(show).catch((error)=>{
    console.log("error");
})