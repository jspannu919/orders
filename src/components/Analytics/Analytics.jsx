import { Statistic, Row, Col, Card } from "antd";

const Analytics = ({ data }) => {
  let total = data.length;

  return (
    <Row gutter={16} justify="space-around" align="middle">
      <Col className="gutter-row" span={6}>
        <Card title="Overall Count">
          <Statistic
            title="Total Orders"
            value={total}
            style={{ textAlign: "center" }}
          />
        </Card>
      </Col>
      <Col className="gutter-row" span={6}>
        <Card title="Top Products">s</Card>
      </Col>
    </Row>
  );
};

export default Analytics;
