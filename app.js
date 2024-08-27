let box = document.querySelectorAll(".box");
let reset = document.querySelector("#reset-btn");
let newbtn = document.querySelector("#new-btn");
let msgcontainer = document.querySelector(".msg_container");
let msg = document.querySelector("#msg");
function Gameplay()
{
    let toggle = true;
    let isMarked = false;
    box.forEach((B)=>{
          B.addEventListener("click",() =>{
          if(toggle === true)
          {
              B.innerHTML = "X";
              toggle = false;
             
          }
          else
          {
            B.innerHTML = "O";
            toggle = true;
          }
          B.disabled = true;

          CheckWinner();
       })
       
    })
}
 Gameplay();

const CheckWinner = ()=>{

    for(pattern of winningpattern)
        {


            let pos1 = box[pattern[0]].innerText;
            let pos2 = box[pattern[1]].innerText;
            let pos3 = box[pattern[2]].innerText;
            if(pos1 != ""&& pos2 != "" && pos3 != "")
               {
                  if(pos1 == pos2 && pos2 == pos3)
                   
                    ShowWinner(pos1);
               }
           
        }
}

let winningpattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetGame =()=>{
    toggle = true;
    enableBoxes();
    msgcontainer.classList.add("hide");

}
const DisableBoxes =()=>{
    for(let b of box)
    {
       b.disabled = true;
    }
}
const enableBoxes =()=>{
    for(let b of box)
    {
       b.disabled = false;
       b.innerText = "";
    }
}

const ShowWinner = (winner)=>{
     msg.innerText = `Congratutation , Winner is${winner}`;
     msgcontainer.classList.remove("hide");
     DisableBoxes();
     
}
newbtn.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);



