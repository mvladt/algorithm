export const numberToString = (value: any) => {
  return Number(value).toLocaleString("ru-RU", { maximumFractionDigits: 6 });
};
