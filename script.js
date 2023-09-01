let newNum = "";
let oldNum = "";
const buttons=document.querySelectorAll(".buttonNumber")
const display=document.querySelector("#result")
const equal=document.querySelector("#equal")
const reset=document.querySelector("#C")
const plus=document.querySelector("#plus")
const arrayitems=["/","*","+","-","%","."]
const calculus=document.querySelector("#calculus")
const result2=document.querySelector("#result2")
const equations=document.querySelectorAll(".buttonEqua")
let result=""
let noVisible=""

buttons.forEach(button=> {
    button.addEventListener("pointerdown",e=>{
            newNum+=e.target.id
            noVisible+=e.target.id
            result2.innerHTML=newNum

    });
});
equal.addEventListener("pointerdown",e=>{
    console.log(typeof result)
});

reset.addEventListener("pointerdown", e=>{
    result="0";
    result2.innerHTML=result
    calculus.innerHTML=""
    noVisible=""
    oldNum=""
    newNum=""
    result="";
})
equations.forEach(equation=>
    equation.addEventListener("pointerdown", e=>{
        if (e.target.value == "+"){
            result=Number(newNum) + Number(oldNum) 
        } else if (e.target.value == "-"){
            result=Number(oldNum) - Number(newNum)
        } else if (e.target.value == "*"){
            if(oldNum!=""){
                result=Number(newNum) * Number(oldNum)
            }
        } else if (e.target.value == "/"){
            result=Number(newNum) / Number(oldNum)
        }
        noVisible+=`${e.target.value}`
        result2.innerHTML=result
        calculus.innerHTML=noVisible
        oldNum=result
        newNum=""
    })
)

