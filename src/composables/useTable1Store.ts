import { reactive, computed } from "vue";

export type Row<T> = {
  year: number;
  values: T[];
};

export type AgeKey =
  | "under36"
  | "age36_45"
  | "age46_50"
  | "age51_55"
  | "age56_60"
  | "over61";

export type Value1 = {
  age: number;
  value: number;
};

export type Value2 = {
  key: AgeKey;
  value: number;
};

const AGE_START = 22;
const AGE_END = 65;

const size = AGE_END - AGE_START;

const formState = reactive({
  baseYear: 2023,
  under36: 1021,
  age36_45: 529,
  age46_50: 311,
  age51_55: 368,
  age56_60: 342,
  over61: 1096,
});

const baseRowTotal = computed(() => {
  return (
    Number(formState.under36) +
    Number(formState.age36_45) +
    Number(formState.age46_50) +
    Number(formState.age51_55) +
    Number(formState.age56_60) +
    Number(formState.over61)
  );
});

const ageGroups = [
  { key: "under36", ageFrom: AGE_START, ageTo: 35 },
  { key: "age36_45", ageFrom: 36, ageTo: 45 },
  { key: "age46_50", ageFrom: 46, ageTo: 50 },
  { key: "age51_55", ageFrom: 51, ageTo: 55 },
  { key: "age56_60", ageFrom: 56, ageTo: 60 },
  { key: "over61", ageFrom: 61, ageTo: AGE_END },
] as const;

const baseRow = computed<Row<Value1>>(() => {
  const result: Row<Value1> = { year: formState.baseYear, values: [] };

  for (const ageGroup of ageGroups) {
    const count = ageGroup.ageTo - ageGroup.ageFrom + 1;
    const value = Math.round(formState[ageGroup.key] / count);

    for (let age = ageGroup.ageFrom; age <= ageGroup.ageTo; age += 1) {
      result.values.push({ age, value });
    }
  }

  return result;
});

const computedRows = computed<Row<Value1>[]>(() => {
  const result: Row<Value1>[] = [baseRow.value];

  // Тут 'size - 1', т.к. 'result[0] -- это baseRow'.
  for (let i = 0; i <= size - 1; i += 1) {
    const year = result[i]!.year + 1;

    const values = [
      { age: AGE_START, value: 0 },
      ...result[i]!.values.map((i) => ({
        age: i.age + 1,
        value: i.value,
      })).slice(0, -1),
    ];

    const newRow = { year, values };

    result.push(newRow);
  }

  return result;
});

const computedRows2 = computed<Row<Value2>[]>(() => {
  const result: Row<Value2>[] = computedRows.value.slice(1).map((row) => {
    return { year: row.year, values: values1ToValues2(row.values) };
  });

  return result;
});

const computedRows2Totals = computed<number[]>(() => {
  return computedRows2.value
    .map((row) => row.values)
    .map((values) => values.reduce<number>((acc, i) => acc + i.value, 0));
});

// - - -

const values1ToValues2 = (values: Value1[]): Value2[] => {
  const result: Value2[] = [];

  for (const ageGroup of ageGroups) {
    const value: Value2 = { key: ageGroup.key, value: 0 };

    for (let age = ageGroup.ageFrom; age <= ageGroup.ageTo; age += 1) {
      const ageValue = values.find((v) => v.age === age);
      if (ageValue) value.value += ageValue.value;
    }

    result.push(value);
  }

  return result;
};

export const useTable1Store = () => {
  return {
    formState,
    computedRows2,
    computedRows2Totals,
    size,
    baseRowTotal,
  };
};
