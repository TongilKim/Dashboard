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

/**
 * API로 부터 전달받은 데이터를 재가공 한다.
 * 1. data, uniqView, pageView 키들과 함께 신규 object array 생성
 * 2. 같은 날짜가 존재하면, uniqView, pageView 값들을 합산 해서 해당 날짜에 assign. (중복 날짜 방지)
 * 3. 날짜 정렬
 */
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
    return dateA.getTime() - dateB.getTime();
  });

  return aggregatedData;
};

const getTopFiveData = (data: string[][]) => {
  data.sort((a, b) => parseInt(b[1]) - parseInt(a[1]));

  // Initialize the result array to store the output
  const resultArray = [];

  // Calculate the sum of the rest of the second values (from index 4 onwards)
  let sumOfRest = 0;
  for (let i = 4; i < data.length; i++) {
    sumOfRest += parseInt(data[i][1]);
  }

  // Assign ranks and corresponding values to the result array
  for (let i = 0; i < Math.min(4, data.length); i++) {
    resultArray.push({
      name: data[i][0],
      value: parseInt(data[i][1]),
    });
  }

  // Add the "etc" object to the result array to store the sum of the rest of the second values
  resultArray.push({
    name: "etc",
    value: sumOfRest,
  });

  return resultArray;
};

type InitialState = {
  totalEventCount: number;
  uniqueEventCount: number;
  dauChartData: Array<{
    date: string;
    uniqView: string;
    pageView: string;
  }>;
  topFiveReferralData: Array<{
    name: string;
    value: number;
  }>;
};

const initialState: InitialState = {
  totalEventCount: 0,
  uniqueEventCount: 0,
  dauChartData: [],
  topFiveReferralData: [],
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
    setTopReferralDataForPieChart(state, action: PayloadAction<any>) {
      const result = action.payload;
      const { data } = result;
      state.topFiveReferralData = getTopFiveData(data.rows);
    },
  },
});

export const { setUserEventInfo, setTopReferralDataForPieChart } =
  userEventInfoSlice.actions;

export default userEventInfoSlice.reducer;
