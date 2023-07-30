export type EventCountData = {
  data: Data;
  result: boolean;
  message: string;
  version: string;
  last_compile_time: string;
};
type Data = {
  headers: Header[];
  rows: string[][];
};
type Header = {
  idx: number;
  key: string;
  label: string;
  description: string;
  property_type: string;
  value_type: string;
};

export const getUserEventInfoApi = async () => {
  let data: EventCountData | null = null;

  try {
    // baseURL is configured in webpack
    await fetch(`https://static.adbrix.io/front/coding-test/event_1.json`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((res) => {
        data = res;
      });
  } catch (error) {
    // should be implemented with some error cases or something
    data = null;
  }
  return data;
};

export const getTopReferralForPieChartApi = async () => {
  let data: EventCountData | null = null;

  try {
    // baseURL is configured in webpack
    await fetch(`https://static.adbrix.io/front/coding-test/event_3.json`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((res) => {
        data = res;
      });
  } catch (error) {
    // should be implemented with some error cases or something
    data = null;
  }
  return data;
};
