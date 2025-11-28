import { reactive } from "vue";

const state = reactive({
  Флв: 5,
  Чн: 1000,
});

export const useFormOneState = () => {
  return { state };
};
