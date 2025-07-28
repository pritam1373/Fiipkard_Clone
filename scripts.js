a=document.getElementById("login")
b=document.getElementById("container")
r=document.getElementById("remove")
s=document.getElementById("search")
s1=document.getElementById("searchicon")


a.addEventListener("click",()=>{
    b.style.transform="translateY(80vh)"
})
r.addEventListener("click",()=>{
    b.style.transform="translateY(-215vh)"
})

s.addEventListener("mouseleave",()=>{
    s1.style.opacity="0"
})


l=document.getElementById("login2")
m=document.getElementById("signup")
l.addEventListener("click",()=>{
    l.style.backgroundColor="blue"
    l.style.color="white"
    m.style.backgroundColor="white"
    m.style.color="blue"
})

m.addEventListener("click",()=>{
    m.style.backgroundColor="blue"
    m.style.color="white"
    l.style.backgroundColor="white"
    l.style.color="blue"
})

