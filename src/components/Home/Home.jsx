import { Table, Input, InputNumber, Select, Space } from 'antd';
import {useState} from 'react';

import Search from '../Search';
import columns from './tableConfig';
import './home.css'
import Header from '../Header';
const { Column } = Table;


const Home = (props) => {

    //for new order addition
    const [newOrderRowVisible, setNewOrderRowVisible] = useState(false);
    const [customerName, setCustomerName] = useState('');
    const [customerEmail, setCustomerEmail] = useState('');
    const [product, setProduct] = useState('Product 1');
    const [quantity, setQuantity] = useState(1);
    
    //for searching
    const [searchText, setSearchText] = useState('');
    const [searchColumn, setSearchColumn] = useState('');


    // to persist changes locally
    localStorage.setItem('ordersData', JSON.stringify(props.data.orders));

    //Filter table data as per search
    let filteredData = null;
    if(searchText.length){
        filteredData = props.data.orders.filter((order) => 
            order[searchColumn].search(searchText) !== -1
        )
    }
    else{
        filteredData = props.data.orders;
    }

    //add new order
    function addOrder(){
        if(customerName.length && customerEmail.length) {
            props.homeActions.addOrder({
                key: Math.random().toString(36).substr(2, 11),
                customer_name: customerName,
                customer_email: customerEmail,
                product,
                quantity
            });
            hideNewOrderRow();
        }
        else{
            window.alert('Please Fill all Values');
        }
    }

    //hide new Order Row and reset values
    function hideNewOrderRow(){
        setNewOrderRowVisible(false);
        setCustomerName('');
        setCustomerEmail('');
        setProduct('Product 1');
        setQuantity(1);
    }

    //To change searchText and Column in state
    function handleSearch(column ,text){
       setSearchColumn(column);
       setSearchText(text);
    }

    //custom key is provided to prevent re-renders
    let newOrderRow={
        key: '4566',
        customer_name: <Input placeholder="Customer Name" value={customerName} onChange={(e) => setCustomerName(e.target.value)}/>,
        customer_email: <Input placeholder="Customer Email" value={customerEmail} onChange={(e) => setCustomerEmail(e.target.value)}/>,
        product: <Select defaultValue="Product 1" style={{width: 110}} value={product} onChange={setProduct}>
                    <Select.Option value="Product 1">Product 1</Select.Option>
                    <Select.Option value="Product 2">Product 2</Select.Option>
                    <Select.Option value="Product 3">Product 3</Select.Option>
                </Select>,
        quantity: <InputNumber min={1} value={quantity} onChange={setQuantity}/>
    }

    return (
        <div className="home">
            <Header onNewOrderBtnClick={() => setNewOrderRowVisible(true)}/>

            <Search columns={columns} onSearchHandler={handleSearch}/>

            <Table dataSource={newOrderRowVisible ? [newOrderRow, ...filteredData] : filteredData}>
                {
                    columns.map((column)=> <Column {...column} />)
                }
                <Column
                title="Action"
                key="action"
                render={(order) => (
                    order.key === "4566" ?
                    <Space size="middle">
                        <a onClick={addOrder}>Add</a>
                        <a onClick={hideNewOrderRow}>Cancel</a>
                    </Space>
                    :
                    <a onClick={() => props.homeActions.deleteOrder(order.key)}>Delete</a>
                  )}
                />
            </Table>
        </div>
    );
}
 
export default Home;