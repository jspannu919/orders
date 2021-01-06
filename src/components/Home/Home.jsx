import { Tabs } from "antd";

import Orders from "../Orders";
import Header from "../Header";
import Analytics from "../Analytics";

const { TabPane } = Tabs;

const Home = (props) => {
  console.log(props);
  return (
    <div className="home">
      <Header />
      <Tabs defaultActiveKey="1" centered>
        <TabPane tab="Orders" key="1">
          <Orders
            data={props.data.orders}
            addOrder={props.homeActions.addOrder}
            deleteOrder={props.homeActions.deleteOrder}
          />
        </TabPane>
        <TabPane tab="Analytics" key="2">
          <Analytics data={props.data.orders} />
        </TabPane>
      </Tabs>
    </div>
  );
};

export default Home;
