import styles from './index.less';
import type { MenuProps } from 'antd';
import { MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Input, Space, Row, Col, Menu, Button, Table } from 'antd';
import { useState } from 'react';
import { event } from '@/.umi/plugin-locale/locale';
import { history } from 'umi';
import type { ColumnsType, TableProps } from 'antd/es/table';

const { Search } = Input;
const onSearch = (value: string) => console.log(value);

interface DataType {
    key: React.Key;
    date: string;
    name: string;
    age: number;
    address: string;
    price: number | GLfloat;
    updown: string;
    trend: string;
}

export default function CultivatePage() {

    const columns: ColumnsType<DataType> = [
        {
            title: 'date',
            dataIndex: 'date',
        },
        {
            title: '产品/品种',
            dataIndex: 'name',
            sorter: (a, b) => a.name.length - b.name.length,
            sortDirections: ['descend', 'ascend'],
        },

        {
            title: '所在产地',
            dataIndex: 'address',
            // sorter: (a, b) => a.address.length - b.address.length,
            // sortDirections: ['descend'],
        },
        {
            title: '价格（元/斤）',
            dataIndex: 'price',
            sorter: (a, b) => a.price - b.price,
            sortDirections: ['descend', 'ascend'],
        },       {
            title: '升/降',
            dataIndex: 'updown',
        },
        {
            title: '走势图',
            dataIndex: 'trend',
        },
    ];

    const data = [{ key: 1, date: '2023-03-26', name: '土元', address: '安徽亳州市谯城区', price: 56.16 }, { key: 2, date: '2023-03-26', name: '土元', address: '山东菏泽市鄄城', price: 42.5 }, { key: 3, date: '2023-03-26', name: '土元', address: '河南南阳市南召县', price: 35.0 }, { key: 4, date: '2023-03-26', name: '冀土元', address: '河北保定市安国市', price: 64.11 }, { key: 5, date: '2023-03-26', name: '中华土元', address: '河北保定市安国市', price: 65.46 }, { key: 6, date: '2023-03-26', name: '中华士元', address: '安徽亳州市谯城区', price: 56.86 }, { key: 7, date: '2023-03-26', name: '中华士元', address: '安徽池州市青阳县', price: 48.75 }, { key: 8, date: '2023-03-26', name: '中华土元', address: '山东菏泽市郓城县', price: 80.0 }, { key: 9, date: '2023-03-26', name: '中华土元', address: '山东菏泽市鄄城县', price: 42.5 }, { key: 10, date: '2023-03-26', name: '中华土元', address: '河南开封市杞县', price: 52.33 }, { key: 11, date: '2023-03-26', name: '中华士元', address: '河南鹤壁市山城区', price: 60.0 }, { key: 12, date: '2023-03-26', name: '中华士元', address: '广西玉林市玉州区', price: 70.0 }, { key: 13, date: '2023-03-26', name: '金边土元', address: '安徽亳州市谯城区', price: 57.78 }, { key: 14, date: '2023-03-26', name: '金边土元', address: '河南许昌市长葛市', price: 40.0 }, { key: 15, date: '2023-03-26', name: '九香虫', address: '河北保定市安国市', price: 647.18 }, { key: 16, date: '2023-03-26', name: '九香虫', address: '河北保定市定州市', price: 710.0 }, { key: 17, date: '2023-03-26', name: '九香虫', address: '安徽亳州市谯城区', price: 373.82 }, { key: 18, date: '2023-03-26', name: '九香虫', address: '福建三明市三元区', price: 600.0 }, { key: 19, date: '2023-03-26', name: '九香虫', address: '山东滨州市沾化区', price: 110.0 }, { key: 20, date: '2023-03-26', name: '九香虫', address: '山东菏泽市鄄城县', price: 80.0 }, { key: 21, date: '2023-03-26', name: '九香虫', address: '河南鹤壁市山城区', price: 65.0 }, { key: 22, date: '2023-03-26', name: '九香虫', address: '河南许昌市长葛市', price: 71.5 }, { key: 23, date: '2023-03-26', name: '九香虫', address: '湖南长沙市芙蓉区', price: 418.68 }, { key: 24, date: '2023-03-26', name: '九香虫', address: '湖南邵阳市绥宁县', price: 800.0 }, { key: 25, date: '2023-03-26', name: '九香虫', address: '湖南湘西土家族苗族自治州凤凰县', price: 600.0 }, { key: 26, date: '2023-03-26', name: '九香虫', address: '湖南湘西士家族苗族自治州永顺县', price: 240.0 }, { key: 27, date: '2023-03-26', name: '九香虫', address: '广东揭阳市普宁市', price: 133.33 }, { key: 28, date: '2023-03-26', name: '九香虫', address: '广南宁市上林县', price: 550.0 }, { key: 29, date: '2023-03-26', name: '九香虫', address: '广西南宁市武鸣区', price: 107.5 }];

    const onChange: TableProps<DataType>['onChange'] = (pagination, filters, sorter, extra) => {
        console.log('params', pagination, filters, sorter, extra);
    };


    return (
        <>
            <div className={styles.title}>
                <Row gutter={16}>
                    <Col span={16}>
                        <span style={{ display: 'inline-block', paddingLeft: '20px' }}>
                            <img alt="logo" style={{ width: '80px' }} src="/resources/images/logo.png" />
                        </span>
                        <span style={{ display: 'inline-block', paddingLeft: '10px' }}>
                            <h1 style={{ fontSize: '50px', margin: 0 }}>大别山康达有限公司</h1>
                        </span>

                    </Col>
                    <Col span={8}>
                        <Search
                            style={{ marginTop: '30px', width: '300px' }}
                            placeholder="input search text"
                            allowClear
                            enterButton="Search"
                            size="large"
                            onSearch={onSearch}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col span={6}></Col>
                    <Col span={8}>
                        <span style={{ marginTop: '100px', marginBottom: '20px', fontSize: '30px' }}>
                            ——药用昆虫养殖手工科普一体化产业链
                        </span>
                    </Col>
                </Row>
            </div>
            <Row>
                <Col span={8} style={{ paddingLeft: '80px' }}>
                    <Button type="primary" onClick={() => { history.push("/cultivate") }} block>
                        行情
                    </Button>
                </Col>
                <Col span={8} style={{ paddingLeft: '80px', paddingRight: '80px' }}>
                    <Button type="primary" onClick={() =>{history.push("/cultivate/chain")}} block>
                        供应
                    </Button>
                </Col>
                <Col span={8} style={{ paddingRight: '80px' }}>
                    <Button type="primary" onClick={() => {history.push("/cultivate/tech")}} block>
                        农业学堂
                    </Button>
                </Col>
            </Row>
            <h1 style={{ textAlign: 'center', fontSize: 'xx-large' }}>互联网农产品电商市场运行大数据</h1>

            <Row>
            <Col span={3}></Col>

                <Col>
                    <div style={{alignContent: 'center'}}></div>
                    <Table style={{}} columns={columns} dataSource={data} onChange={onChange} />;
                </Col>
                <Col span={3}></Col>

            </Row>
        </>
    );
}
