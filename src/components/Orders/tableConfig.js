const columns = [
    {
        title: 'Customer Name',
        dataIndex: 'customer_name',
        key: 'customer_name',
        sorter: (order1, order2) => order1.customer_name.localeCompare(order2.customer_name)
    },
    {
        title: 'Customer Email',
        dataIndex: 'customer_email',
        key: 'customer_email'
    }
    ,
    {
        title: 'Product',
        dataIndex: 'product',
        key: 'product',
        filters:[
            {
                text: 'Product 1',
                value: 'Product 1'
            },
            {
                text: 'Product 2',
                value: 'Product 2'
            },
            {
                text: 'Product 3',
                value: 'Product 3'
            }
        ],
        onFilter: (value, record) => record.product === value,
    }
    ,
    {
        title: 'Quantity',
        dataIndex: 'quantity',
        key: 'quantity',
        sorter: (order1, order2) => order1.quantity - order2.quantity
    },
   
];

export default columns;