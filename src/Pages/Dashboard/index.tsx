import DauChart from "../../components/Dashboard/DauChart";
import SummaryCard from "../../components/Dashboard/SummaryCard";
import { Responsive, WidthProvider } from "react-grid-layout";

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
    y: 1,
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
    y: 1.3,
    w: 10,
    h: 2,
    minH: 2,
    minW: 5,
    maxH: 4,
    maxW: 10,
  },
];

const index = () => {
  const onLayoutChange = (newLayout: any) => {
    // Callback function when the layout changes
    console.log("New Layout:", newLayout);
  };

  return (
    <ResponsiveGridLayout
      className="layout"
      isResizable
      isDraggable
      layouts={{ lg: layout }}
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
      <div key="DAU">
        <DauChart />
      </div>
    </ResponsiveGridLayout>
  );
};

export default index;
