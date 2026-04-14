  function getgen(year)
  {
     if(year<=1980 && year>=1965) return 'Gen-X';
     if(year<=1996 && year>=1981) return 'Millenial';
     if(year<=2012 && year>=1997) return 'Gen-Z';
     if(year>=2013)  return 'Gen-Alpha';
       return 'Angrezo ke zamana';

  }


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



    document.getElementById("p1").innerText = `Your age is :${age} yrs & ${ monthDiff } months & ${ days } days & ${ hours } hrs & ${ minutes } min & ${ seconds } secs & ${ milliseconds} millisecs

                                            You almost live more than ${n_M.toFixed(1)} million Seconds
                                            
                                           You are from Generation ${gen}` ;
}                                          

setInterval(calculateAge,1000);