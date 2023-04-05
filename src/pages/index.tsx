import styles from './index.less';
import type { MenuProps } from 'antd';
import { MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Input, Space, Row, Col, Menu } from 'antd';
import { useState } from 'react';

const { Search } = Input;
const onSearch = (value: string) => console.log(value);

export default function IndexPage() {

  const items: MenuProps['items'] = [
    {

      label: (
        <a href="/company" target="_blank" rel="noopener noreferrer">公司背景</a>
      ),
      key: 'company',

    },
    {

      label: (
        <a href="/cultivate" target="_blank" rel="noopener noreferrer">昆虫养殖</a>
      ),
      key: 'link1',
    },
    {
      label: (
        <a href="/craft" target="_blank" rel="noopener noreferrer">
          灵魂手工艺品
        </a>
      ),
      key: 'link2',
    },
    {
      label: (
        <a href="/knowledge" target="_blank" rel="noopener noreferrer">
          昆虫科普
        </a>
      ),
      key: 'link3',
    },
    {
      label: (
        <a href="/travel" target="_blank" rel="noopener noreferrer">
          旅游发展
        </a>
      ),
      key: 'link4',
    },
    {
      label: (
        <a href="/medicine" target="_blank" rel="noopener noreferrer">
          昆虫入药
        </a>
      ),
      key: 'link5',
    },
  ];

  const [current, setCurrent] = useState('');

  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
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
            <span style={{ marginTop: '100px', marginBottom: '20px' ,fontSize: '30px'}}>
              ——药用昆虫养殖手工科普一体化产业链
            </span>
          </Col>
        </Row>
      </div>
      <Row>
        <Menu
          style={{ width: '100%', paddingLeft: '340px', fontSize: 'x-large' }}
          onClick={onClick}
          selectedKeys={[current]}
          mode="horizontal"
          items={items}
        />
      </Row>
      <Row>
        <Col span={12}>
          <img style={{ width: '100%' }} src="/resources/images/pic01.png" alt="index left" />
        </Col>
        <Col span={12}>
          <h1 style={{ textAlign: 'center', background: '#99abd9', fontSize: 'x-large' }}>公司产品</h1>
          <span style={{ fontSize: 'x-large' }} >最新推荐</span><br />
          <Row>
            <Col span={8}>
              <img style={{ width: '90%', marginLeft: '10px' }} src="/resources/images/ppt1-1.png" alt="" />
            </Col>
            <Col span={8}>
              <img style={{ width: '90%' }} src="/resources/images/ppt1-2.png" alt="" />
            </Col>
            <Col span={8}>
              <img style={{ width: '90%', height: '100%' }} src="/resources/images/ppt1-3.png" alt="" />
            </Col>
          </Row>
          <span style={{ fontSize: 'x-large' }}>销量最高</span><br />
          <Row>
            <Col span={8}>
              <img style={{ width: '90%', marginLeft: '10px' }} src="/resources/images/ppt1-4.png" alt="" />
            </Col>
            <Col span={8}>
              <img style={{ width: '90%' }} src="/resources/images/ppt1-5.png" alt="" />
            </Col>
            <Col span={8}>
              <img style={{ width: '90%' }} src="/resources/images/ppt1-6.png" alt="" />
            </Col>
          </Row>
          <span style={{ fontSize: 'x-large' }}>友情链接</span><br />
          <span style={{ fontSize: 'x-large' }}>
            <a href="#" target="_blank" rel="noopener noreferrer">中国生物志库 </a> 
              <a href="#" target="_blank" rel="noopener noreferrer"> 昆虫网 </a>
              <a href="#" target="_blank" rel="noopener noreferrer"> 昆虫博物馆 </a>  
              <a href="#" target="_blank" rel="noopener noreferrer"> 求是网 </a>        
          </span>

        </Col>
      </Row>
    </>
  );
}
