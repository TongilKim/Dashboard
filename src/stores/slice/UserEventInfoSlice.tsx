/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { EventCountData } from "../../apis";

const getTotalEventCount = (data: string[][]) => {
  let sum = 0;

  data.forEach((arr: string[]) => {
    const value = parseInt(arr[2]);
    sum += value;
  });

  return sum;
};

const getUniqueEventCount = (data: string[][]) => {
  let sum = 0;

  data.forEach((arr: string[]) => {
    const value = parseInt(arr[1]);
    sum += value;
  });

  return sum;
};

const convertData = (data: string[][]) => {
  const convertedData = data.map((array) => {
    return {
      date: array[0],
      uniqView: array[1],
      pageView: array[2],
    };
  });

  const aggregatedData = convertedData.reduce(
    (accumulator: any, currentValue) => {
      const date = currentValue.date;
      const uniqView = parseInt(currentValue.uniqView);
      const pageView = parseInt(currentValue.pageView);

      const existingItem: any = accumulator.find(
        (item: { date: string }) => item.date === date
      );

      if (existingItem) {
        existingItem.uniqView += uniqView;
        existingItem.pageView += pageView;
      } else {
        accumulator.push({ date, uniqView, pageView });
      }

      return accumulator;
    },
    []
  );

  aggregatedData.sort((a: { date: string }, b: { date: string }) => {
    // Convert dates to Date objects for comparison
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);

    // Compare dates and return the sorting order
    return dateA - dateB;
  });

  return aggregatedData;
};

type InitialState = {
  totalEventCount: number;
  uniqueEventCount: number;
  dauChartData: Array<{
    date: string;
    uniqView: string;
    pageView: string;
  }>;
};

const initialState: InitialState = {
  totalEventCount: 0,
  uniqueEventCount: 0,
  dauChartData: [],
};

const userEventInfoSlice = createSlice({
  name: "userEventInfo",
  initialState,
  reducers: {
    setUserEventInfo(state, action: PayloadAction<EventCountData>) {
      const result = action.payload;
      const { data } = result;
      state.totalEventCount = getTotalEventCount(data.rows);
      state.uniqueEventCount = getUniqueEventCount(data.rows);
      state.dauChartData = convertData(data.rows);
    },
  },
});

export const { setUserEventInfo } = userEventInfoSlice.actions;

export default userEventInfoSlice.reducer;
