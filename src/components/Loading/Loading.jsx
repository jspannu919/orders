import React from "react";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

import styles from "./_loading.css";

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

const Loading = (props) => {
  if (props && props.error) console.log(props.error);
  return (
    <div className={styles.loading}>
      <Spin indicator={antIcon} size="large" />
    </div>
  );
};

export default Loading;
