import { reactive } from "vue";

const state = reactive({
  АбсЧВ_за_ГП: undefined,
  АбсЧВ_СКУ: undefined,
  АбсЧВ_УТМ: undefined,
  АбсЧВ_ЦН: undefined,
  АбсЧВ_ВП: undefined,
  АбсЧВ_ПТМ: undefined,
  ЧислНас: undefined,
});

export const useFormTwotate = () => {
  return { state };
};
