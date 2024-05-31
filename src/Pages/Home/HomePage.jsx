import "./Home.css";
import FirstBox from "../../Components/firstBox/firstBox";
import ChartBox from "../../Components/ChartBox/ChartBox";
import {
  barChartBoxRevenue,
  barChartBoxVisit,
  chartBoxConversion,
  chartBoxProduct,
  chartBoxRevenue,
  chartBoxUser,
} from "../../../data";
import BarChartBox from "../../Components/BarChartBox/BarChartBox";
import PieChartBox from "../../Components/PieChartBox/PieChartBox";
import StackedAreaChart from "../../Components/StackedAreaChart/StackedAreaChart";
const HomePage = () => {
  return (
    <div className="main--home--container">
      <div className="grid-container wrap--box--1">
        <FirstBox />
      </div>
      <div className=" grid-container wrap--box--2">
        <ChartBox
          // icon={chartBoxUser.icon}
          // title={chartBoxUser.title}
          // number={chartBoxUser.number}
          // chartData={chartBoxUser.chartData}
          // dataKey={chartBoxUser.dataKey}
          // color={chartBoxUser.color}
          // percentage={chartBoxUser.percentage}
          {...chartBoxUser}
        />
      </div>
      <div className="grid-container wrap--box--3">
        <ChartBox {...chartBoxProduct} />
      </div>
      <div className="grid-container wrap--box--4">
        <PieChartBox />
      </div>
      <div className="grid-container wrap--box--5">
        <ChartBox {...chartBoxRevenue} />
      </div>
      <div className="grid-container wrap--box--6">
        <ChartBox {...chartBoxConversion} />
      </div>
      <div className="grid-container wrap--box--7">
        <StackedAreaChart />
      </div>
      <div className="grid-container wrap--box--8">
        {" "}
        <BarChartBox {...barChartBoxRevenue} />
      </div>
      <div className="grid-container wrap--box--9">
        <BarChartBox {...barChartBoxVisit} />
      </div>
    </div>
  );
};
export default HomePage;
