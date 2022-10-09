var dateofbirth=document.querySelector("#Date-of-birth");
var luckynumber=document.querySelector("#Luck-number");
var checkbutton=document.querySelector("#check");
var outputresult=document.querySelector("#output")
    const date=dateofbirth.value;
    const luckynum=luckynumber.value; 
checkbutton.addEventListener("click",function calculate(){
    hypenremovedatesumtotal(date)
});
function hypenremovedatesumtotal(dob)
{
    
dob=dob.replaceAll("-","")
var  sum=0;
for(let i=0;i<dob.length;i++)
{
sum=sum + Number(dob[i]);
}
finaloutput(sum)

}
function finaloutput(db)
{
    
    if(db%Number(luckynum)==0)
    { 
    outputresult.innerText="Yay! Your birthday is lucky 🙂";
    }
    
    else{
       
        outputresult.innerText="Alas! Your birthday is not lucky 😌";
       } 
}