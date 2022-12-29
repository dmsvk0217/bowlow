export default function getTimeString() {
  const today = new Date();
  let time = {
    year: today.getFullYear(), //현재 년도
    month: today.getMonth() + 1, // 현재 월
    date: today.getDate(), // 현제 날짜
  };
  const timestring = `${time.year}/${time.month}/${time.date}`;
  return timestring;
}
