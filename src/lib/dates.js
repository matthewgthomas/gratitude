const date = new Date();  
const monthName = date.toLocaleString('en-US', { month: 'long' });  
const day = date.getDate();  

function getOrdinalSuffix(day) {  
    if (day > 3 && day < 21) return 'th';  
    switch (day % 10) {  
        case 1: return 'st';  
        case 2: return 'nd';  
        case 3: return 'rd';  
        default: return 'th';  
    }  
}

export const today_year = date.getFullYear();
export const today_day_month = `${day}${getOrdinalSuffix(day)} ${monthName}`;
export const today_next_year = `${day}${getOrdinalSuffix(day)} ${monthName} ${today_year + 1}`;