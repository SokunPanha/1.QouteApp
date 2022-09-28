const btn=document.querySelector("button")
const qoute=document.querySelector("q")
const authors=document.querySelector('.author')
const qoutes=[{
  q:"Life is what happens when you're busy making other plans.",
  author:"Stephen King"
},
{
  q:"Get busy living or get busy dying.",
  author: "Stephen King"
},
{
  q:"You only live once, but if you do it right, once is enough.",
  author: " Mae West"
}]
let a=null;
btn.addEventListener('click',qoutechange);

function qoutechange(){

  let range=Math.floor(Math.random()*qoutes.length)
   console.log(a)
   console.log(range)
  if(a==range  ){
     if(range==qoute.length){
         --range
     }
     else if(a==0){
      ++range
     }
     else{
      ++range;
     }
  }
  console.log(range)
  authors.innerHTML=qoutes[range].author;
  qoute.innerHTML=qoutes[range].q;
  a=range;
}