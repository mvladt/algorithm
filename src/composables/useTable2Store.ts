import { computed, reactive } from "vue";
import { useTable1Store } from "./useTable1Store";

const formState = reactive({
  АбсЧВ_УТМ: 100,
  АбсЧВ_ЦН: 20,
  АбсЧВ_ВП: 90,
  АбсЧВ_ПТМ: 25,
});

const population = computed(() => [
  1325510, 1321821, 1312338, 1302780, 1293423, 1284300, 1275562, 1267236,
  1259316, 1251813, 1244749, 1238145, 1238145, 1232034, 1217091, 1209396,
  1201702, 1194008, 1186314, 1178619, 1170925, 1163231, 1155536, 1147842,
  1140148, 1132453, 1124759, 1117065, 1109371, 1101676, 1093982, 1086288,
  1078593, 1070899, 1063205, 1055510, 1047816, 1040122,
]);

export const useTable2Store = () => {
  const t1 = useTable1Store();

  const computedColumn = computed<number[]>(() => {
    return t1.computedRows2Totals.value
      .slice(0, -1)
      .map((value, i) => value - t1.computedRows2Totals.value[i + 1]!);
  });

  return { formState, population, computedColumn };
};
