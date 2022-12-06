function timeConversion(s) {
  let time = s.split(":");
  let hour = time[0];
  let min = time[1];
  let sec = time[2].slice(0, 2);
  let ampm = time[2].slice(2, 4);
  if (ampm === "PM") {
    if (hour === "12") {
      hour = "12";
    } else {
      hour = parseInt(hour) + 12;
    }
  } else {
    if (hour === "12") {
      hour = "00";
    } else {
      hour = hour;
    }
  }
  return `${hour}:${min}:${sec}`;
}

console.log(timeConversion("07:05:45AM"));
