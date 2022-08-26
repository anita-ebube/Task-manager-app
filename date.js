function showdate(){
    var date = new Date();
    var t = date.getDate();
    var y = date.getFullYear();
let m;
switch (date.getMonth() + 1) {
  case 1:
    m = "January";
    break;
  case 2:
    mt = "Febuary";
    break;
  case 3:
    m = "March";
    break;
  case 4:
    m = "April";
    break;
  case 5:
    m = "May";
    break;
  case 6:
    m = "June";
    break;
  case  7:
    m = "July";
  case 8:
    m = "August";
    break;
  case 9:
    m = "Setmper";
    break;
  case 10:
    m = "October";
    break;
  case 11:
    m = "November";
    break;
  case 12:
    m = "December";

}
let d;
switch (date.getDay()) {
  case 0:
    d = "Sunday";
    break;
  case 1:
    d= "Monday";
    break;
  case 2:
    d= "Tuesday";
    break;
  case 3:
    d= "Wednesday";
    break;
  case 4:
    d= "Thursday";
    break;
  case 5:
    d= "Friday";
    break;
  case  6:
    d= "Saturday";
}

    document.getElementById("year").innerHTML = y;
    document.getElementById("da").innerHTML = t;
    document.getElementById("mi").innerHTML = m;
    document.getElementById("day").innerHTML = d;
}
showdate()
setInterval(showdate, 86400);