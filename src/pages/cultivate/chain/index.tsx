import React from 'react';
import { Pagination } from 'antd';
import { Image } from 'antd';
import { Input, Space, Row, Col, Menu, Button, Table } from 'antd';


const chain: React.FC = () => {
    return (
      <>
      <Row>
        <Col span={2}>
            <h1 style={{textAlign: 'center', fontSize: '40px', background: '#4472c4'}}>供应</h1>
        </Col>
      </Row>
      <Row>
        <Col span={2}></Col>
        <Col span={22}>
      <Image.PreviewGroup
    preview={{
      onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
    }}
  >
    土元售价：35元/一斤
    <Row>
      <Col span={6}><Image style={{width: '140%', paddingLeft: '20%'}} src="/resources/images/gy01.png" /></Col>
      <Col span={6}><Image style={{width: '140%', paddingLeft: '20%'}} src="/resources/images/gy02.png" /></Col>
      <Col span={6}><Image style={{width: '140%', paddingLeft: '20%'}} src="/resources/images/gy03.png" /></Col>
      <Col span={6}><Image style={{width: '140%', paddingLeft: '20%'}} src="/resources/images/gy04.png" /></Col>
      
    </Row>
    白僵蚕：45元/一斤
    <Row>
    
      <Col span={6}><Image style={{width: '140%', paddingLeft: '20%'}} src="/resources/images/gy05.png" /></Col>
      <Col span={6}><Image style={{width: '140%', paddingLeft: '20%'}} src="/resources/images/gy06.png" /></Col>
      <Col span={6}><Image style={{width: '140%', paddingLeft: '20%'}} src="/resources/images/gy07.png" /></Col>
      <Col span={6}><Image style={{width: '140%', paddingLeft: '20%'}} src="/resources/images/gy08.png" /></Col>
    </Row>
    九香虫：50元/一斤
     <Row>
     
      <Col span={6}><Image style={{width: '140%', }} src="/resources/images/gy09.png" /></Col>
      <Col span={6}><Image style={{width: '140%', }} src="/resources/images/gy10.png" /></Col>
      <Col span={6}><Image style={{width: '140%', }} src="/resources/images/gy11.png" /></Col>
      <Col span={6}><Image style={{width: '140%', }} src="/resources/images/gy12.png" /></Col>
    </Row>
    <Row>
      <Col><Image style={{width: '100%', }} src="/resources/images/ppt7.png" /> </Col>
    </Row>
    <Row>
      <Col><Image style={{width: '100%', }} src="/resources/images/ppt8.png" /> </Col>
    </Row>    <Row>
      <Col><Image style={{width: '100%', }} src="/resources/images/ppt9.png" /> </Col>
    </Row>


  </Image.PreviewGroup>
  </Col>
  </Row>
        <Pagination defaultCurrent={1} total={5} />
      </>
    )
  }
  export default chain;