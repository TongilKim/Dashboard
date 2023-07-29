import React, { Fragment } from "react";
import SummaryCard from "../../components/Dashboard/SummaryCard";
import { Responsive, WidthProvider } from "react-grid-layout";
import style from "./index.module.css";

const ResponsiveGridLayout = WidthProvider(Responsive);

const index = () => {
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
      maxW: 9,
    },
    {
      i: "enteredCount",
      x: 7,
      y: 0,
      w: 5,
      h: 1.3,
      minH: 1.3,
      minW: 2,
      maxH: 2,
      maxW: 9,
    },
  ];

  const onLayoutChange = (newLayout: any) => {
    // Callback function when the layout changes
    console.log("New Layout:", newLayout);
  };

  return (
    <ResponsiveGridLayout
      className="layout"
      isResizable
      isDraggable
      layouts={{ lg: layout, md: layout }} // Default layout for large screens (lg)
      breakpoints={{ lg: 1280, md: 992, sm: 767, xs: 480, xxs: 0 }}
      cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
      onLayoutChange={onLayoutChange}
    >
      <div key="userCount">
        <SummaryCard
          title="접속유저"
          sumTitle="Unique Event Count"
          totalNumber={18204}
          increaseNumber="-931"
        />
      </div>
      <div key="enteredCount">
        <SummaryCard
          key="enteredCount"
          title="접속횟수"
          sumTitle="Total Event Count"
          totalNumber={796543}
          increaseNumber="1234"
        />
      </div>
    </ResponsiveGridLayout>
  );
};

export default index;
