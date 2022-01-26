import { format } from 'date-fns';
// Date must be between Jun 16, 1995 and Jan 24, 2022.

export const genRandomDate = (start, end) => {
  let date = new Date(+start + Math.random() * (end - start));
  return format(date, 'yyyy-MM-dd');
};
