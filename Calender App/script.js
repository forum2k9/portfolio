function startTime() {
  let today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);

  // For Time....
  document.querySelector('.day-time').innerHTML =
  h + ":" + m + ":" + s;
  let t = setTimeout(startTime, 500);


  // For Alphabetical Day....
  let weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  document.querySelector('.day-word').innerHTML = weekday[today.getDay()];

  // For Numeric Day.....
  document.querySelector('.day-number').innerHTML = today.getDate();


  // For Month.....
  let month_name = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  let month = today.getMonth();
  document.querySelector('.day-month').innerHTML = month_name[month];



}


function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}


console.log('SCript.JSSSSSSS')
