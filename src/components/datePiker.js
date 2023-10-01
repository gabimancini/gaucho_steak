import { useState } from "react";

const DatePiker = () => {
    let date = new Date();
    // Nombre del mes actual
    let years ='';
    let months='';
    let daysInMonth = new Date( years, months + 1, 0).getDate();
     // numero del mes actual
    const [month, setMonth] = useState(date.getMonth());
    const [year, setYear] = useState(date.getFullYear());
   
   
    const MONTH_NAMES = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const handlePrevMonth=()=>{  
    if(month == 0){
        setYear(year-1)
        setMonth(11);
     }else{
        setMonth(month-1);
     }
   
  }
  const handleNextMonth=()=>{  
    if(month == 11){
        setYear(year+1)
        setMonth(0);
     }else{
        setMonth(month+1);
     }
  }
    return (
        <div>
            <div>
                <button
                    onClick={ handlePrevMonth }
                    type="button"
                    className="leading-none rounded-lg transition ease-in-out duration-100 inline-flex cursor-pointer hover:bg-gray-200 p-1 items-center">
                    <svg className="h-6 w-6 text-gray-500 inline-flex leading-none" fill="none"
                        viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M15 19l-7-7 7-7" />
                    </svg>
                </button> 
                <button
                    onClick={  handleNextMonth }
                    type="button"
                    className="leading-none rounded-lg transition ease-in-out duration-100 inline-flex cursor-pointer hover:bg-gray-200 p-1 items-center">
                    <svg className="h-6 w-6 text-gray-500 inline-flex leading-none" fill="none"
                        viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M9 5l7 7-7 7" />
                    </svg>
                </button> 
                <div><span className="mr-2">{MONTH_NAMES[month]}</span>{year}</div>
                <div className="flex flex-wrap border-t border-l"> 
                {DAYS.map((day,index)=>{
                    return(
                        <div key={index} className="text-center border-r border-b px-4 pt-2 w-[14%]">{day}</div>
                    )
                })}
				{daysInMonth}
            </div>
           </div>
        </div>
    );
};
export default DatePiker;