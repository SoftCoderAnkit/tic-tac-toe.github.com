let boxes=document.querySelectorAll(".box");
let btn=document.querySelector(".btn");
let msg=document.querySelector(".msg");
let newbtn=document.querySelector(".newbtn");

let turnO=true;
const winpattern =[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [1,4,7],
    [0,3,6],
    [2,5,8],
    [0,4,8],
    [6,4,2]
];
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO){
            box.innerText="O";
            turnO=false;
            
        }
        else{
            box.innerText="X"
            turnO=true;
           
        }
        box.disabled=true;
        checkwinner();
    });
});

const disablebox=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};
const enablebox=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};
    const showWinner=(winner)=>{
      
        msg.innerText=`congrats! winner is  ${winner}`;
        msg.classList.remove("hide");
        disablebox();
      
    };
    
    
const checkwinner=()=>{
    for (let pattern of winpattern){
      let pos1value=boxes[pattern[0]].innerText;
      let pos2value=boxes[pattern[1]].innerText;
      let pos3value=boxes[pattern[2]].innerText;

      if (pos1value!=""&&pos2value!=""&&pos3value!="")
      {
        if(pos1value==pos2value&&pos2value==pos3value){
            console.log("winner",pos1value)
            showWinner(pos1value);
        }
      }
    }
};

const reset=()=>{
    turnO=true;
enablebox();
msg.classList.add("hide");
};

btn.addEventListener("click", reset);
newbtn.addEventListener("click", reset);

