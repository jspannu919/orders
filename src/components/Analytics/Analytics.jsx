import { Statistic, Row, Col, Card } from "antd";
const ReactHighcharts = require("react-highcharts");

const Analytics = ({ data }) => {
  let total = data.length;

  //calculate each product's total orders
  function getChartData() {
    let countProduct1 = 0,
      countProduct2 = 0,
      countProduct3 = 0;
    data.forEach((order) => {
      switch (order.product) {
        case "Product 1":
          countProduct1++;
          break;
        case "Product 2":
          countProduct2++;
          break;
        case "Product 3":
          countProduct3++;
          break;
        default: {
        }
      }
    });
    return [
      {
        name: "Product 1",
        y: countProduct1,
      },
      {
        name: "Product 2",
        y: countProduct2,
      },
      {
        name: "Product 3",
        y: countProduct3,
      },
    ];
  }

  function getChartConfig() {
    return {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: "pie",
      },
      title: {
        text: "",
      },
      credits: {
        enabled: false,
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: "pointer",
          dataLabels: {
            enabled: true,
            format: "<b>{point.name}</b>: {point.percentage:.1f} %",
          },
        },
      },
      series: [
        {
          name: "Products",
          colorByPoint: true,
          data: getChartData(),
        },
      ],
    };
  }

  return (
    <Row gutter={16} justify="space-around" align="middle">
      <Col className="gutter-row" span={5}>
        <Card title="Overall Count">
          <Statistic
            title="Total Orders"
            value={total}
            style={{ textAlign: "center" }}
          />
        </Card>
      </Col>
      <Col className="gutter-row" span={10}>
        <Card title="Top Products">
          <ReactHighcharts config={getChartConfig()} />
        </Card>
      </Col>
    </Row>
  );
};

export default Analytics;
