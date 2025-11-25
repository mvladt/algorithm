import { reactive } from "vue";

const state = reactive({
  Флв: undefined,
  Чн: undefined,
});

export const useFormOneState = () => {
  return { state };
};
