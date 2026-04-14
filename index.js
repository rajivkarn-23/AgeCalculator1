    function calculateAge()
{
    const dobInput = document.getElementById("dob").value;

    if(!dobInput){
        document.getElementById("p1").innerText = "Please select your date of birth";
        return ;
    }
    const dob  = new Date(dobInput);
    const today = new Date();

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
        monthDiff+=12
    }
   

   // time based diffs

  let diffMs = today - dob;
  let diffSeconds = Math.floor(diffMs / 1000);
  let diffMinutes = Math.floor(diffSeconds / 60);
  let diffHours   = Math.floor(diffMinutes / 60);

  
  let hours = diffHours % 24;
  let minutes = diffMinutes%60;
  let seconds = diffSeconds % 60;
  let milliseconds = diffMs % 1000;



    document.getElementById("p1").innerText = `Your age is :${age} yrs & ${ monthDiff } months & ${ days } days & ${ hours } hrs & ${ minutes } min & ${ seconds } secs & ${ milliseconds} millisecs`;
}