let boxes = document.querySelectorAll('.box');
let resetBtn = document.querySelector('.reset-btn');
let winnerMsg = document.querySelector('.msg');
let turnO= true;
let winingPattern =[
    [0, 1, 2],[0,4,8],[0,3,6],[3,4,5],[6,7,8],[1,4,7],[2,5,8],[2,4,6]
];
boxes.forEach((box)=>{
    box.addEventListener('click',()=>{
       
if(turnO){
    box.innerText = 'O';
    turnO = false;

}else{
    box.innerText = "X";
    turnO = true
}
    box.disabled = true;
    checkWiner() 
    })
});
let winnerCng=(winner)=>{
    winnerMsg.innerText = `Congratulations Player "${winner}" Is Winner`
}
let checkWiner = ()=>{
    for(let pattern of winingPattern){
        
        let posVal1 = boxes[pattern[0]].innerText;
        let posVal2 = boxes[pattern[1]].innerText;
        let posVal3 = boxes[pattern[2]].innerText;
        if(posVal1 !=''&& posVal2 !='' && posVal3 !=""){
            if(posVal1==posVal2 && posVal2==posVal3){
                winnerCng(posVal1);
            }
        }
    }

}