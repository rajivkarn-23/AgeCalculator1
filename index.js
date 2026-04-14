  function getgen(year)
  {
     if(year<=1980 && year>=1965) return 'Gen-X';
     if(year<=1996 && year>=1981) return 'Millenial';
     if(year<=2012 && year>=1997) return 'Gen-Z';
     if(year>=2013)  return 'Gen-Alpha';
       return 'Angrezo ke zamana';

  }
function getMotivation(age) {
    if (milestones[age]) {
        return milestones[age];
    }

   
    return "Great people achieve success at different ages — your journey is unique 🚀";
}

const motivationData = [
{ age: 10, name: "Vaibhav Sooryavanshi" },
{ age: 18, name: "Virat Kohli" },
{age:15 ,name:"Kylian Mbappe"},
{ age: 21, name: "Mark Zuckerburg" },
{ age: 23, name: "Bill Gates" },
{ age: 25, name: "Steve Jobs" },
{ age: 29, name: "Sundar Pichai" },
{ age: 32, name: "Elon Musk" },
{ age: 35, name: "satya Nadella" },
{ age: 40, name: "Warren Buffet" },
{ age: 50, name: "Barack Obama" },
{ age: 60, name: "Ratan Tata" }
];
   function calculateAge()
   {
    const dobInput = document.getElementById("dob").value;
    const tobinput =  document.getElementById("tob").value;

    if(!dobInput || !tobinput){
        document.getElementById("p1").innerText = "Please select your date of birth & time of birth both";
        return ;
    }
    const dob  = new Date(`${dobInput}T${tobinput}`);
    const today = new Date();

    // today.setHours(today.getHours()+5);
    // today.setMinutes(today.getMinutes()+30);
    let gen  = getgen(dob.getFullYear());
    let age = today.getFullYear()-dob.getFullYear();
    let monthDiff = today.getMonth()-dob.getMonth();
    let days = today.getDate()-dob.getDate();
    if(days<0)
        {monthDiff--;
         const prevMonth = new Date(today.getFullYear(),today.getMonth(),0);
         days+=prevMonth.getDate();
        }



    if(monthDiff<0) {
        age--;
        monthDiff+=12;
    }

   // time based diffs

  let diffMs = today - dob;
  let n_M = diffMs/1_000_000_000;
  let diffSeconds = Math.floor(diffMs / 1000);
  
  let diffMinutes = Math.floor(diffSeconds / 60);
  let diffHours   = Math.floor(diffMinutes / 60);

  
  let hours = diffHours % 24;
  let minutes = diffMinutes%60;
  let seconds = diffSeconds % 60;
  let milliseconds = diffMs % 1000;


let closest = motivationData.reduce((prev, curr) =>
    Math.abs(curr.age - age) < Math.abs(prev.age - age) ? curr : prev
);

let message = `\n\n💡 At the age ${closest.age}, ${closest.name} was prooving the world wrong......
                                Get up Bruhh Don't waste your Potential...🚀`;
  

document.getElementById("p1").innerHTML = `Your age is: ${age} yrs, ${monthDiff} months, ${days} days <br>
⏱ ${hours} hrs ${minutes} min ${seconds} sec <br><br>

🧠 You have lived ~${n_M.toFixed(1)} billion seconds <br>
🌍 Generation: ${gen} <br>

${message}
`;
}                                          
setInterval(calculateAge,1000);