export const compareDates = (
  date: Date,
  startDate: Date,
  endDate: Date
): boolean => {
  const gtStartDate =
    Date.parse(date.toDateString()) >= Date.parse(startDate.toDateString());

  const ltEndDate =
    Date.parse(date.toDateString()) <= Date.parse(endDate.toDateString());

  return gtStartDate && ltEndDate;
};
