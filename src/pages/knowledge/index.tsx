import { Pagination } from 'antd';
import { Image } from 'antd';
import { Input, Space, Row, Col, Menu, Button, Table } from 'antd';
import { Divider, Typography } from 'antd';
import React, { useState } from 'react';
import type { RadioChangeEvent } from 'antd';
import { Radio, Tabs } from 'antd';
import type { TabsProps } from 'antd';
import { Card } from 'antd';
import { history } from 'umi';


const { Meta } = Card;
const { Search } = Input;
const { Title, Paragraph, Text, Link } = Typography;

const onSearch = (value: string) => console.log(value);

const knowledge: React.FC = () => {
  return (
    <>
      <Title style={{ textAlign: 'center' }}>昆虫科普</Title>
      <Row>
        <Col span={8}></Col>
        <Col span={8}>
          <Search
            placeholder="input search text"
            onSearch={onSearch}
            enterButton
          />
        </Col>
        <Col span={8}></Col>
      </Row>
      <br />
      <Row>
      <Col span={2}></Col>
        <Col span={6}>
          <Row>
            <Card
              hoverable
              onClick={() => { history.push("/knowledge/lepidoptera") }}
            //   style={{ width: 240 }}
              cover={<img alt="example" src="/resources/images/ppt17-1.png" />}
            >
              <Meta title="鳞翅目（Lepidoptera）" />
            </Card>
          </Row>
          <br />
          <Row>
            <Card
              hoverable
              onClick={() => { history.push("/knowledge/isoptera") }}
            //   style={{ width: 240 }}
              cover={<img alt="example" src="/resources/images/ppt17-3.png" />}
            >
              <Meta title="等翅目（Isoptera）" />
            </Card>
          </Row>
        </Col>
        <Col span={8}>
            <br/>
          <Paragraph style={{ fontSize: 'large' ,textIndent: '2em'}}>
          昆虫是地球上数量最多的动物群体，尽管有很多人会“谈虫色变”，但它们是生态系统不可或缺的一环，在维持生态平衡、生物多样性保护中具有重要地位。
          </Paragraph>
          <Paragraph style={{ fontSize: 'large' ,textIndent: '2em'}}>如果你细心观察，就会发现它们的踪迹几乎遍布世界的每一个角落，
            那么你对身边的昆虫们了解多少？</Paragraph>
          <Paragraph  style={{ fontSize: 'large', textIndent: '2em' }}>昆虫的存在又有什么意义呢？</Paragraph>
          <Paragraph style={{ fontSize: 'large', textIndent: '2em' }}>下面让我们走近昆虫的世界，揭开这层神秘面纱 一起探索大自然的奥秘。</Paragraph>

        </Col>
      <Col span={1}></Col>
        <Col span={7}>
        <Row>
            <Card
              hoverable
              onClick={() => { history.push("/knowledge/coleoptera") }}
            //   style={{ width: 240 }}
              cover={<img alt="example" src="/resources/images/ppt17-2.png" />}
            >
              <Meta title="鞘翅目（Coleoptera）" />
            </Card>
          </Row>
          <br />
          <Row>
            <Card
              hoverable
              onClick={() => { history.push("/knowledge/other") }}
            //   style={{ width: 240 }}
              cover={<img alt="example" src="/resources/images/ppt17-4.png" />}
            >
              <Meta title="其他昆虫（Other insects）" />
            </Card>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default knowledge;
