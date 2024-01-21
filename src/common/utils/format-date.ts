export const formateDate = (date: Date): string => {
  const month = date.getMonth() + 1;
  return `${date.getFullYear()}-${month < 10 ? '0' + month : month }-${date.getDate()}`;
}