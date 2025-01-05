let btns=document.querySelectorAll("button");
let res=document.querySelector("input");
res.value="";

btns.forEach(button=>{
    button.addEventListener("click",()=>{
        let buttontext=button.innerText;
            if(buttontext==="="){
                try{
                    res.value=eval(res.value);
                }
                catch(e){
                    res.value="Error";
                }
            }
        else if(buttontext==="AC"){
            res.value="";
        }
        else if(buttontext==="%"){
            if(res.value){
                res.value = parseFloat(res.value) / 100;
            }  
        }
        else if(buttontext==="+/-"){
            if (res.value !== "") {
                let currentValue = parseFloat(res.value);
                if (!isNaN(currentValue)) {
                    res.value = (currentValue * -1).toString();
                }
            }
        }
        else if (buttontext === ".") {
            if (!res.value.includes(".")) {
                res.value += buttontext;
            }
        }
        else{
            res.value+=buttontext;
        }
    })
})