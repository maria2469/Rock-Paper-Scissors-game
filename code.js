let compscore=0;
let userscore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector(".msg");
const userpara=document.querySelector("#userscore");
const compara=document.querySelector("#compscore");
const gencompchoice=()=>{
    const options=["rock","paper","scissors"];
    const randidx=Math.floor(Math.random()*3);
    return options[randidx];
}
const showwinner=(userwin,userchoice,compchoice)=>{
    if(userwin){
        userscore++;
        userpara.innerText=userscore;
        msg.innerText=`YOU WIN! your ${userchoice} beat ${compchoice}`;
        msg.style.backgroundColor="green";
    }
    else{console.log("YOU LOSE")
        compscore++;
        compara.innerText=compscore;
        msg.innerText=`YOU lose! ${compchoice} beat your ${userchoice}`;
        msg.style.backgroundColor="red";
    }
}
const drawgame=()=>{
 
    msg.innerText="The Game is Draw!";
    msg.style.backgroundColor="black";
}
const playgame=(userchoice)=>{
 
    const compchoice=gencompchoice();
  
    if(userchoice===compchoice){
        drawgame();
    }
    else{
        let userwin=true;
        if(userchoice==="rock"){
            userwin=compchoice==="paper"? false:true;
    }
    else if(  userchoice==="paper"){
        userwin=compchoice==="scissors"?false:true;
    }
    else(userchoice==="scissors")
    {
        userwin=compchoice==="rock"?false:true;
    }

   showwinner(userwin,userchoice,compchoice);
      
    
}}



choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        playgame(userchoice);
     })
})