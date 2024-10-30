const input=document.getElementById("user-input");
const checkBtn=document.getElementById("check-btn");
const clearBtn=document.getElementById("clear-btn");
const result=document.getElementById("results-div");

checkBtn.addEventListener("click",()=>{
  if(input.value===""){
    alert("Please provide a phone number");
  }
  else{
    checkNumber(input.value);
  }
})//check button event listener

const checkNumber=(n)=>{

    const tel=new RegExp(`^(1\\s?)?((\\([0-9]{3}\\))|([0-9]{3}))[\\s\\-]?[0-9]{3}[\\s\\-]?[0-9]{4}$`)//country code optional, area code, 3 digits,prefix 3 digits and subscriber 3 digits.
    
  if(tel.test(n)===true){
  const res=document.createTextNode("Valid US number: "+n);
  result.appendChild(res);
  }
  else{
  const res=document.createTextNode("Invalid US number: "+n);
  result.appendChild(res);
  }

  result.appendChild(document.createElement("br"));
}

clearBtn.addEventListener("click",()=>{
   result.innerText="";
   input.value="";
})