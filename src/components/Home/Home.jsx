import { Table } from 'antd';

import data from '../../data/data.json';
import columns from './tableConfig';
import './home.css'
import Header from '../Header';



const Home = () => {

    return (
        <div className="home">
            <Header/>
            <Table
            dataSource={data}
            columns={columns}
            />
        </div>
    );
}
 
export default Home;