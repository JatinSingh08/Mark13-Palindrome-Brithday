function reverseStr(str) {
  return str.split('').reverse().join('');
}

function isPalindrome(str) {
  if(str === reverseStr(str)) return true;
  else return false;
}

function convertDateToStr(date) {
   var dateStr = {day: '', month: '', year: ''};
   
   if(date.day<10) {
      dateStr.day = '0' + date.day;
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
   dateStr.year = date.year.toString();

   return dateStr;
}

function getAllDateFormats(date) {
  var dateStr = convertDateToStr(date);

  var ddmmyyyy = dateStr.day + dateStr.month + dateStr.year;
  var mmddyyyy = dateStr.month + dateStr.day + dateStr.year;
  var yyyymmdd = dateStr.year + dateStr.month + dateStr.day;
  var ddmmyy = dateStr.day + dateStr.month + dateStr.year.slice(-2); 
  var mmddyy = dateStr.month + dateStr.day + dateStr.year.slice(-2);
  var yymmdd = dateStr.year.slice(-2) + dateStr.month + dateStr.day;

  return [ddmmyyyy, mmddyyyy, yyyymmdd, ddmmyy, mmddyy, yymmdd];
}


function checkPalindromeForAllFormats(date) {
  var allFormats = getAllDateFormats(date);
  var palindrome = false; 
  for(var i=0;i<allFormats.length;i++){
    if(isPalindrome(allFormats[i])){
      palindrome = true;
    }
  }
  return palindrome;
}

function isLeapYear(year) {
  if(year % 4 === 0 ) {
    return true;
  }
  if(year % 100 === 0 ) {
    return false;
  }
  if(year % 4 === 0) {
    return true;
  }
  return false;
}
function getNextDate(date) {
  var day = date.day + 1;
  var month = date.month;
  var year = date.year;

  var daysInMonth = [31,28,31,30,31,30,31,31,30,31,30,31];

  if(month === 2){
    if(isLeapYear(year)){
      if(day > 29 ) {
        day = 1;
        month++;
      }
    } else {
      if(day > 28 ){
        day = 1;
        month++;
      }
    } 
  } else {
    if(day > daysInMonth[month - 1]){
      day = 1;
      month++;
    }
  }

  if(month > 12 ) {
    month = 1;
    year++;
  }

  return {
    day: day,
    month: month,
    year: year
  }
  
}

function getPrevDate(date) {
  var day = date.day - 1;
  var month = date.month;
  var year = date.year;


}

function getNextPalindromeDate(date) {

  var count = 0;
  var nextDate = getNextDate(date);

  while(1) {
    count++;
    var isPalindrome = checkPalindromeForAllFormats(nextDate);
    if(isPalindrome){
      break;
    }
    nextDate = getNextDate(nextDate);
  }
  return [count, nextDate];

}
var date = {
  day: 11,
  month: 09,
  year: 2022
}

console.log(getNextPalindromeDate(date));

var dateInput = document.querySelector('#bday-input');
var showBtn = document.querySelector('#show-btn');
var result = document.querySelector('#result')

showBtn.addEventListener('click',(e) => {
  console.log(dateInput.value);
})

function clickHandler(e) {
  var bdayStr = dateInput.value;

  if(bdayStr !== '') {
    var strDate = bdayStr.split('-');
    var date = {
      day: Number(strDate[2]),
      month: Number(strDate[1]),
      year: Number(strDate[0])
    }

    var isPalindrome = checkPalindromeForAllFormats(date);
    // console.log(isPalindrome)
    if(isPalindrome) {
      result.innerText = 'Yay! your birthday is a palindrome! ✨🥳'
    }
    else {
      var [count, nextDate] = getNextPalindromeDate(date);
      result.innerText = `oops! You just missed by ${count} days, 
      the next palindrome date is ${nextDate.day}-${nextDate.month}-${nextDate.year} 🥲☹️`
    }
  }
 
}

showBtn.addEventListener('click',clickHandler);