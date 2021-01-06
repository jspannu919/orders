import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

import "./_loading.css";

const antIcon = <LoadingOutlined style={{ fontSize: 34 }} spin />;

const Loading = (props) => {
  if (props && props.error) console.log(props.error);
  return (
    <div className="loading">
      <Spin indicator={antIcon} size="large" />
    </div>
  );
};

export default Loading;
