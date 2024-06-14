const icons=document.getElementById("icon");
const cont=document.getElementById("contnt");
const intialText= document.getElementById("intialText");
const afterDob= document.getElementById("afterDobEnter");
const Dobbtn= document.getElementById("dobbutton");
const DobinputEl= document.getElementById("dobinput");

const yearEl= document.getElementById("year");
const monthEl = document.getElementById("month"); // Add declaration
const dayEl = document.getElementById("day"); // Add declaration
const hourEl = document.getElementById("hour"); // Add declaration
const minuteEl = document.getElementById("minutes"); // Add declaration
const secondEl = document.getElementById("second"); // Add declaration


let isDOBOpen= false;

const  toggleDate= () =>{

    if(isDOBOpen){
        cont.classList.add("hide");
    }
    else{
        cont.classList.remove("hide")
    }

    isDOBOpen = !isDOBOpen;
    console.log("toggleDate", isDOBOpen);
};

const updateAge = () =>{
    const currentDate = new Date();

    const datediff= currentDate - dateofBirth;
    const year= Math.floor(datediff/(1000*60*60*24*365));
    const month= Math.floor(datediff/(1000*60*60*24*365) % 12);
    const day= Math.floor(datediff/(1000*60*60*24))%30;
    const hour= Math.floor(datediff/(1000*60*60))%24;
    const minute= Math.floor(datediff/(1000*60))%60;
    const second= Math.floor(datediff/1000)%60;
    yearEl.innerHTML= year;
    monthEl.innerHTML=month;
    dayEl.innerHTML= day;
    hourEl.innerHTML= hour;
    minuteEl.innerHTML= minute;
    secondEl.innerHTML= second;
      
};

const setDob= () =>{
          const dateString = DobinputEl.value;
          dateofBirth  = new Date(dateString);
        if(dateofBirth){
            intialText.classList.add("hide");
            afterDob.classList.remove("hide");
            updateAge();
            setInterval(()=>updateAge(),1000);
        }
        else{
            afterDob.classList.add("hide");
            intialText.classList.remove("hide");
        }
};


icons.addEventListener("click",toggleDate);
Dobbtn.addEventListener("click", setDob);
