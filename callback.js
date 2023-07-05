let a=[1,2,3,4];

function show(callback)
{
    setTimeout(()=>{console.log(a);},3000)
    set();
    
}
function set(){
        a.push(5)
    
}

show(set)