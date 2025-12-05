export const numberToString = (value: any) => {
  return Number(value).toLocaleString("ru-RU", { maximumFractionDigits: 6 });
};

export const рассчитатьКРЗ = (
  АбсЧВ_за_ГП: number,
  АбсЧВ_СКУ: number,
  АбсЧВ_УТМ: number,
  АбсЧВ_ЦН: number,
  АбсЧВ_ВП: number,
  АбсЧВ_ПТМ: number
) => {
  return АбсЧВ_за_ГП - АбсЧВ_СКУ - АбсЧВ_УТМ + АбсЧВ_ЦН + АбсЧВ_ВП + АбсЧВ_ПТМ;
};

export const рассчитатьКРЗна10тыщ = (КРЗ: number, ЧислНас: number) => {
  return (КРЗ / ЧислНас) * 10000;
};
