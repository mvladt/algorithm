import { reactive } from "vue";

const state = reactive({
  АбсЧВ_за_ГП: 5,
  АбсЧВ_СКУ: 1,
  АбсЧВ_УТМ: 1,
  АбсЧВ_ЦН: 1,
  АбсЧВ_ВП: 1,
  АбсЧВ_ПТМ: 5,
  ЧислНас: 1000,
});

export const useFormTwotate = () => {
  return { state };
};
