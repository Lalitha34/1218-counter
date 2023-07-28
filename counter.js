let u=document.getElementById("updatevalue")
function onincrement()
{
    let a=u.textContent;
    let counterlval = parseInt(a)+1
    if(counterlval>0)
    {
        u.style.color="green"
    }
    else if(counterlval<0)
    {
        u.style.color="red"
    }
    else 
    {
        u.style.color="black"
    }
    u.textContent=counterlval
}
function ondecrement()
{
    let a=u.textContent;
    let counterlval = parseInt(a)-1
    if(counterlval>0)
    {
        u.style.color="green"
    }
    else if(counterlval<0)
    {
        u.style.color="red"
    }
    else 
    {
        u.style.color="black"
    }
    u.textContent=counterlval
}
function onreset1()
{
    u.textContent = 0;
    u.style.color="black"
}