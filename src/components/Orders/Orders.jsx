import { Table, Input, InputNumber, Select, Space, Button } from "antd";
import { useState } from "react";

import Search from "../Search";
import columns from "./tableConfig";

const { Column } = Table;

const Orders = ({ data, addOrder, deleteOrder }) => {
  //for new order addition
  const [newOrderRowVisible, setNewOrderRowVisible] = useState(false);
  const [customerName, setCustomerName] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [product, setProduct] = useState("Product 1");
  const [quantity, setQuantity] = useState(1);
  const [editedOrderId, setEditedOrderId] = useState(null);

  //for searching
  const [searchText, setSearchText] = useState("");
  const [searchColumn, setSearchColumn] = useState("");

  //for local persistence
  localStorage.setItem("ordersData", JSON.stringify(data));

  //Filter table data as per search
  let filteredData = null;
  if (searchText.length) {
    filteredData = data.filter(
      (order) => order[searchColumn].search(searchText) !== -1
    );
  } else {
    filteredData = data;
  }

  //add new order
  function addOrderHandler() {
    if (customerName.length && customerEmail.length) {
      addOrder({
        key: Math.random().toString(36).substr(2, 11),
        customer_name: customerName,
        customer_email: customerEmail,
        product,
        quantity,
      });

      //delete previous record if record is edited
      if (editedOrderId) {
        deleteOrder(editedOrderId);
      }
      hideNewOrderRow();
    } else {
      window.alert("Please Fill all Values");
    }
  }

  //edit order
  function editOrder(orderId) {
    let order = null;
    setEditedOrderId(orderId);
    order = filteredData.filter((order) => order.key === orderId)[0];
    setCustomerName(order.customer_name);
    setCustomerEmail(order.customer_email);
    setProduct(order.product);
    setQuantity(order.quantity);
    setNewOrderRowVisible(true);
  }

  //hide new Order Row and reset values
  function hideNewOrderRow() {
    setNewOrderRowVisible(false);
    setCustomerName("");
    setCustomerEmail("");
    setProduct("Product 1");
    setQuantity(1);
    setEditedOrderId(null);
  }

  //To change searchText and Column in state
  function handleSearch(column, text) {
    setSearchColumn(column);
    setSearchText(text);
  }

  //custom key is provided to prevent re-renders
  let newOrderRow = {
    key: "4566",
    customer_name: (
      <Input
        placeholder="Customer Name"
        value={customerName}
        onChange={(e) => setCustomerName(e.target.value)}
      />
    ),
    customer_email: (
      <Input
        placeholder="Customer Email"
        value={customerEmail}
        onChange={(e) => setCustomerEmail(e.target.value)}
      />
    ),
    product: (
      <Select
        defaultValue="Product 1"
        style={{ width: 110 }}
        value={product}
        onChange={setProduct}
      >
        <Select.Option value="Product 1">Product 1</Select.Option>
        <Select.Option value="Product 2">Product 2</Select.Option>
        <Select.Option value="Product 3">Product 3</Select.Option>
      </Select>
    ),
    quantity: <InputNumber min={1} value={quantity} onChange={setQuantity} />,
  };

  return (
    <>
      <Button
        type="primary"
        onClick={() => setNewOrderRowVisible(true)}
        style={{ transform: "translate(-50%, 0)", left: "50%" }}
      >
        New Order
      </Button>
      <Search columns={columns} onSearchHandler={handleSearch} />

      <Table
        dataSource={
          newOrderRowVisible ? [newOrderRow, ...filteredData] : filteredData
        }
      >
        {columns.map((column) => (
          <Column {...column} />
        ))}
        <Column
          title="Action"
          key="action"
          render={(order) =>
            order.key === "4566" ? (
              <Space size="middle">
                <a href="!#" onClick={addOrderHandler}>
                  Add
                </a>
                <a href="!#" onClick={hideNewOrderRow}>
                  Cancel
                </a>
              </Space>
            ) : (
              <Space size="middle">
                <a href="!#" onClick={() => editOrder(order.key)}>
                  Edit
                </a>
                <a href="!#" onClick={() => deleteOrder(order.key)}>
                  Delete
                </a>
              </Space>
            )
          }
        />
      </Table>
    </>
  );
};

export default Orders;
