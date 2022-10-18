var dateofbirth=document.querySelector("#Date-of-birth");
var luckynumber=document.querySelector("#Luck-number");
var checkbutton=document.querySelector("#check");
var outputresult=document.querySelector("#output")
    var  date=dateofbirth.value;
    var luckynum=luckynumber.value; 
    function sumDOB(){
        var dob = date.replaceAll("-","")
        var sum=0;
        for(var i=0;i<dob.length;i++){
            sum = sum + Number(dob[i])
        }
        return sum
    }
    
    function isLuckyDob(sum){
    
        outputresult.style.display= "block";
        if(sum % luckynum ===0){
            outputresult.innerText = "Yay! Your birthday is lucky 🙂"
        }else{
            outputresult.innerText = "Alas! Your birthday is not lucky 😌"
        }
    }
    
    function checkNumberEventHandler(){
        if(date == ""|| luckynum == "")
        {
         outputresult.innerText = "Enter the input"
        
           
        }
           else
        {
            const sum = sumDOB()
            isLuckyDob(sum)
        }
        outputresult.style.display= "none";
    }
    
    checkbutton.addEventListener("click",checkNumberEventHandler);

