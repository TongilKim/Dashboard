/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect } from "react";
import { Responsive, WidthProvider } from "react-grid-layout";

import DauChart from "../../components/Dashboard/DauChart";
import SummaryCard from "../../components/Dashboard/SummaryCard";
import TopReferralInPieChart from "../../components/Dashboard/TopReferralInPieChart";
import {
  getTopReferralForPieChartApi,
  getTopReferralForTableApi,
  getUserEventInfoApi,
} from "../../apis";
import { useAppDispatch, useAppSelector } from "../../stores/hooks";
import {
  setTopReferralDataForPieChart,
  setUserEventInfo,
  setTopReferralTableData,
} from "../../stores/slice/UserEventInfoSlice";
import TopReferralInTable from "../../components/Dashboard/TopReferralInTable";
import { setSnackBarMsg } from "../../stores/slice/SnackbarSlice";

const ResponsiveGridLayout = WidthProvider(Responsive);

const defaultLayout = [
  {
    i: "userCount",
    x: 0,
    y: 0,
    w: 5,
    h: 1.3,
    minH: 1.3,
    minW: 2,
    maxH: 2,
    maxW: 10,
  },
  {
    i: "enteredCount",
    x: 5,
    y: 0,
    w: 5,
    h: 1.3,
    minH: 1.3,
    minW: 2,
    maxH: 2,
    maxW: 10,
  },
  {
    i: "DAU",
    x: 0,
    y: 1,
    w: 10,
    h: 2.6,
    minH: 2.6,
    minW: 5,
    maxH: 4,
    maxW: 10,
  },
  {
    i: "topReferralInPieChart",
    x: 0,
    y: 2,
    w: 5,
    h: 2.6,
    minH: 2,
    minW: 4,
    maxH: 4,
    maxW: 10,
  },
  {
    i: "topReferralInTable",
    x: 5,
    y: 2,
    w: 5,
    h: 2.6,
    minH: 2,
    minW: 4,
    maxH: 4,
    maxW: 10,
  },
];
const storedLayout = sessionStorage.getItem("layoutInfo");
const layout = storedLayout ? JSON.parse(storedLayout) : defaultLayout;

const Index = () => {
  // STORE STATE
  const dispatch = useAppDispatch();
  const { totalEventCount, uniqueEventCount } = useAppSelector(
    (state) => state.userEventInfo
  );

  const onLayoutChange = (newLayout: any) => {
    sessionStorage.setItem("layoutInfo", JSON.stringify(newLayout));
  };

  const fetchData = async () => {
    await getUserEventInfoApi().then((res) => {
      if (res) {
        dispatch(setUserEventInfo(res));
      } else {
        dispatch(
          setSnackBarMsg(
            "API 요청으로 부터 문제가 발생 했습니다. (getUserEventInfoApi)"
          )
        );
      }
    });
    await getTopReferralForPieChartApi().then((res) => {
      if (res) {
        dispatch(setTopReferralDataForPieChart(res));
      } else {
        dispatch(
          setSnackBarMsg(
            "API 요청으로 부터 문제가 발생 했습니다. (getTopReferralForPieChartApi)"
          )
        );
      }
    });
    await getTopReferralForTableApi().then((res) => {
      if (res) {
        dispatch(setTopReferralTableData(res));
      } else {
        dispatch(
          setSnackBarMsg(
            "API 요청으로 부터 문제가 발생 했습니다. (getTopReferralForTableApi)"
          )
        );
      }
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <ResponsiveGridLayout
      className={`layout`}
      layouts={{ lg: layout }} // TODO: md, sm, xs, xxs
      breakpoints={{ lg: 1280, md: 992, sm: 767, xs: 480, xxs: 0 }}
      cols={{ lg: 10, md: 10, sm: 6, xs: 4, xxs: 2 }}
      onLayoutChange={onLayoutChange}
    >
      <div key="userCount">
        <SummaryCard
          title="접속유저"
          sumTitle="Unique Event Count"
          totalNumber={uniqueEventCount}
          increaseNumber="-931"
        />
      </div>
      <div key="enteredCount">
        <SummaryCard
          title="접속횟수"
          sumTitle="Total Event Count"
          totalNumber={totalEventCount}
          increaseNumber="1234"
        />
      </div>
      <div key="DAU">
        <DauChart />
      </div>
      <div key="topReferralInPieChart">
        <TopReferralInPieChart />
      </div>

      <div key="topReferralInTable">
        <TopReferralInTable />
      </div>
    </ResponsiveGridLayout>
  );
};

export default Index;
