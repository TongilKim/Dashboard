import { useAppDispatch } from "../stores/hooks";
import { setSnackBarMsg } from "../stores/slice/SnackbarSlice";

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

//TODO: PUT, PATCH, POST, DELETE
const Request = async (url: string) => {
  let data: EventCountData | null = null;

  try {
    await fetch(url, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((res) => {
        data = res;
      });
  } catch (error) {
    console.error(error);
  }
  return data;
};

export const getUserEventInfoApi = async () => {
  let data: EventCountData | null = null;
  data = await Request(
    `https://static.adbrix.io/front/coding-test/event_1.json`
  );

  return data;
};

export const getTopReferralForPieChartApi = async () => {
  let data: EventCountData | null = null;
  data = await Request(
    `https://static.adbrix.io/front/coding-test/event_3.json`
  );

  return data;
};

export const getTopReferralForTableApi = async () => {
  let data: EventCountData | null = null;
  data = await Request(
    `https://static.adbrix.io/front/coding-test/event_4.json`
  );

  return data;
};
