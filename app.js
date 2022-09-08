function reverseStr(str) {
  return str.split('').reverse.join('');
}

function isPalindrom(str) {
  if(str === reverseStr(str)) return true;
  else return false;
}

function convertDateToStr(date) {
   var dateStr = {day: '', month: '', year: ''};
   
   if(date.day<10) {
      dateStr.day = '0' + dateStr;
   }
   else {
      dateStr.day = date.day.toString();
   }

   if(date.month <10) {
    dateStr.month = '0' + date.month;
   }
   else {
    dateStr.month = date.month.toString();
   }
   dateStr.year = date.year;
}