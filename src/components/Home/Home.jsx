import { Tabs } from "antd";
import { Suspense, lazy } from "react";

import Header from "../Header";
import Loading from "../Loading";

const Orders = lazy(() => import("../Orders"));
const Analytics = lazy(() => import("../Analytics"));

const { TabPane } = Tabs;

const Home = (props) => {
  return (
    <div className="home">
      <Header />
      <Tabs defaultActiveKey="1" centered>
        <TabPane tab="Orders" key="1">
          <Suspense fallback={Loading}>
            <Orders
              data={props.data.orders}
              addOrder={props.homeActions.addOrder}
              deleteOrder={props.homeActions.deleteOrder}
            />
          </Suspense>
        </TabPane>
        <TabPane tab="Analytics" key="2">
          <Suspense fallback={Loading}>
            <Analytics data={props.data.orders} />
          </Suspense>
        </TabPane>
      </Tabs>
    </div>
  );
};

export default Home;
