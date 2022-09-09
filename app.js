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

   return dateStr
}

function getAllDateFormats(date) {
  var dateStr = convertDateToStr(date);

  var ddmmyyyy = dateStr.day + dateStr.month + dateStr.year;
  var mmddyyyy = dateStr.month + dateStr.day + dateStr.year;
  var yyyymmdd = dateStr.year + dateStr.month + dateStr.day;
  var ddmmyy = dateStr.day + dateStr.month + dateStr.year.slice(-2); 
  var mmddyy = dateStr.month + dateStr.day + dateStr.year.slice(-2);
  var yymmdd = dateStr.year.slice(-2) + dateStr.month + dateStr.day.slice(-2);

  return [ddmmyyyy, mmddyyyy, yyyymmdd, ddmmyy, mmddyy, yymmdd];
}

var date = {
  day: 2,
  month: 9,
  year: 2022
}
console.log(getAllDateFormats(date));