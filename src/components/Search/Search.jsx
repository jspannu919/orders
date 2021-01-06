import { Input, Select} from 'antd';
import {useState} from 'react';

import './search.css';

const Search = ({columns, onSearchHandler}) => {

    const [searchColumn, setSearchColumn] = useState('Customer Name');

    return ( 
        <div className="search">
            <span className="searchLabel">Search: </span>
            <Input.Group compact className="searchInputGroup">
                <Select className="searchFieldSelector" value={searchColumn} onChange={setSearchColumn}>
                    {
                        columns.filter(
                            (column) => column.dataIndex !== 'quantity')
                                .map((column) => <Select.Option key={column.dataIndex} value={column.dataIndex}>{column.title}</Select.Option>)
                    }
                </Select>
                <Input.Search
                    allowClear
                    onSearch={(text) => onSearchHandler(searchColumn, text)}
                    className="searchField"
                />
            </Input.Group>
        </div>
     );
}
 
export default Search;