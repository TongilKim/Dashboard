/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect } from "react";
import DauChart from "../../components/Dashboard/DauChart";
import SummaryCard from "../../components/Dashboard/SummaryCard";
import { Responsive, WidthProvider } from "react-grid-layout";
import TopReferralInPieChart from "../../components/Dashboard/TopReferralInPieChart";
import style from "./index.module.css";
import { getUserEventInfoApi } from "../../apis";
import { useAppDispatch, useAppSelector } from "../../stores/hooks";
import { setUserEventInfo } from "../../stores/slice/UserEventInfoSlice";
import { setSnackBarMsg } from "../../stores/slice/SnackbarSlice";

const ResponsiveGridLayout = WidthProvider(Responsive);

const layout = [
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
];

const Index = () => {
  // STORE STATE
  const dispatch = useAppDispatch();
  const { totalEventCount, uniqueEventCount } = useAppSelector(
    (state) => state.userEventInfo
  );

  const onLayoutChange = (newLayout: any) => {
    // Callback function when the layout changes
    console.log("New Layout:", newLayout);
  };

  const fetchData = async () => {
    const userEventResult = await getUserEventInfoApi();
    if (userEventResult) {
      dispatch(setUserEventInfo(userEventResult));
    } else {
      // api error occur
      dispatch(setSnackBarMsg("API 요청으로 부터 문제가 발생 했습니다."));
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <ResponsiveGridLayout
      className={`layout ${style.wrapper}`}
      layouts={{ lg: layout }}
      // resizeHandle={
      //   <span className="react-resizable-handle" style={{}}>
      //     hi
      //   </span>
      // }
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
    </ResponsiveGridLayout>
  );
};

export default Index;
