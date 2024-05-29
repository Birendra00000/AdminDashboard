import "./Home.css";
import FirstBox from "../../Components/firstBox/firstBox";
import ChartBox from "../../Components/ChartBox/ChartBox";
import { chartBoxProduct, chartBoxUser } from "../../../data";
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
      <div className="grid-container wrap--box--4">Box4</div>
      <div className="grid-container wrap--box--5">Box</div>
      <div className="grid-container wrap--box--6">Box</div>
      <div className="grid-container wrap--box--7">Box7</div>
      <div className="grid-container wrap--box--8">Box</div>
      <div className="grid-container wrap--box--9">Box</div>
    </div>
  );
};
export default HomePage;
