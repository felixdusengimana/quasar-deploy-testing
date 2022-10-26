const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const getFormattedDate = (dt) => {
  let date = new Date(dt);
  const month = months[date.getMonth()];
  let day = date.getDate().toString().split("");
  if(day[-1]==1){
    day = day.join('')+"st"
  }else if(day[-1]==2){
    day = day.join('')+"nd"
  }else if(day[-1]==3){
    day = day.join('')+"rd"
  }else{
    day = day.join('')+"th"
  }
  const year = date.getFullYear();

  // return the formatted date
  return `${day} ${month} ${year}`;
}
