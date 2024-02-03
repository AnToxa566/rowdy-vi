export const formateDate = (date: Date): string => {
  const month = date.getMonth() + 1;
  const day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();

  return `${date.getFullYear()}-${month < 10 ? "0" + month : month}-${day}`;
};
