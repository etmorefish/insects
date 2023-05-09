import { Pagination } from 'antd';
import { Image } from 'antd';
import { Input, Space, Row, Col, Card, Menu, Button, Table } from 'antd';
import { Divider, Typography } from 'antd';
import React, { useState } from 'react';
import type { RadioChangeEvent } from 'antd';
import { Radio, Tabs } from 'antd';
import type { TabsProps } from 'antd';

const { Title, Paragraph, Text, Link } = Typography;
type TabPosition = 'left' | 'right' | 'top' | 'bottom';

const items: TabsProps['items'] = [
  {
    key: '1',
    label: <Title>大别山农家乐</Title>,
    children: (
      <Typography>
        <Title style={{ textAlign: 'center' }}>Agritainment</Title>
        <Paragraph>
          <Title level={4} style={{ textIndent: '2em' }}>
            农家乐是新兴的旅游休闲形式，一种回归自然从而获得身心放松、愉悦精神的休闲旅游方式。一般来说，农家乐的业主利用当地的农产品进行加工，满足客人的需要，成本较低，因此消费就不高。而且农家乐周围一般都是美丽的自然或田园风光，空气清新，环境放松，可以舒缓现代人的精神压力。
          </Title>
        </Paragraph>
        <Image.PreviewGroup
          preview={{
            onChange: (current, prev) =>
              console.log(`current index: ${current}, prev index: ${prev}`),
          }}
        ></Image.PreviewGroup>
        <Row>
          <Col span={8}>
            <Image src="/resources/images/ppt26-1.jpg" />
          </Col>
          <Col span={8}>
            <Image src="/resources/images/ppt26-2.jpg" />
          </Col>
          <Col span={8}>
            <Image src="/resources/images/ppt26-3.jpg" />
          </Col>
        </Row>
        <Divider orientation="right" plain>
          农家乐
        </Divider>
        <Row>
          <Col span={6}>
            <Card title="大别山农庄" bordered={false} style={{ width: 300 }}>
              <p>黄冈市英山县沪武高速红山镇中心小学东南例约170米</p>
            </Card>
          </Col>
          <Col span={6}>
            <Card
              title="府城市顺河镇丁外博农家乐"
              bordered={false}
              style={{ width: 300 }}
            >
              <p>黄冈市麻城市S408与山红色旅游公路</p>
              <p>电话：18772429150</p>
            </Card>
          </Col>
          <Col span={6}>
            <Card
              title="日罗田海刀峰鹤原农家乐"
              bordered={false}
              style={{ width: 300 }}
            >
              <p>湖北省黄冈市罗田县建刀峰风景区内大别</p>
              <p>山度假酒店直下2000米即到</p>
              <p>电话：13409850763</p>
            </Card>
          </Col>
          <Col span={6}>
            <Card
              title="小康人家农家乐"
              bordered={false}
              style={{ width: 300 }}
            >
              <p>湖北省黄冈市英山县吴家山林场大别山主</p>
              <p>峰风景区</p>
              <p>电话: 15997368408</p>
            </Card>
          </Col>
        </Row>
        <Divider></Divider>
        <Row>
          <Col span={6}>
            <Card title="峰风景区" bordered={false} style={{ width: 300 }}>
              <p>大别山小院子(大别山国景风景区店)</p>
              <p>湖北省黄风市英山县团冲村一组(大别山丽景风景区)</p>
              <p>电话: 15997368408</p>
            </Card>
          </Col>
          <Col span={6}>
            <Card title="大别山宾馆" bordered={false} style={{ width: 300 }}>
              <p>4.6/5分|高档型</p>
              <p>湖北省黄冈市罗田县民建街28号￥136起预订</p>
            </Card>
          </Col>
          <Col span={6}>
            <Card
              title="黄冈藏龙大别山度假酒店 订"
              bordered={false}
              style={{ width: 300 }}
            >
              <p>4.4/5分|高档型</p>
              <p>
                湖北省黄冈市罗田县大别山国家森林公园天堂景区老寺庙￥433起预订
              </p>
              <p>电话: 15997368408</p>
            </Card>
          </Col>
          <Col span={6}>
            <Card title="大别山居" bordered={false} style={{ width: 300 }}>
              <p>15分|酒店</p>
              <p>湖北省黄冈市罗田县九资河镇栗子关村</p>
              <p>大别山茶叶广场</p>
              <p>湖北省黄冈市英山县温泉镇梦丝家大道怡源宾馆附近</p>
              <p>电话:0713-7026708/15171351581</p>
            </Card>
          </Col>
        </Row>

        <Col span={14}></Col>
      </Typography>
    ),
  },

  {
    key: '2',
    label: <Title>交通路线</Title>,
    children: (
      <Typography>
        <Title style={{ textAlign: 'center' }}>交通</Title>
        <Paragraph>
          <ul>
            <Title level={3}>
              <li>黄冈火车站:黄冈东</li>
            </Title>

            <Title level={3}>
              <li>黄冈汽车站:黄冈汽车客运站、东华客运站大别山交通</li>
            </Title>
            <Title level={3}>
              <li>
                自驾线路:自武英高速、浠水、蕲春等方向进入英山沿途有指示到达景区专用旅游交通标示。
              </li>
            </Title>
            <Title level={3}>
              <li>公共路线:可坐大巴车直达景区</li>
            </Title>
          </ul>
        </Paragraph>

      </Typography>
    ),
  },
];
const onChange = (key: string) => {
  console.log(key);
};

const travel: React.FC = () => {
  const [mode, setMode] = useState<TabPosition>('top');

  const handleModeChange = (e: RadioChangeEvent) => {
    setMode(e.target.value);
  };

  return (
    <>
      <Row>
        <Col span={4}>
          <h1
            style={{
              textAlign: 'center',
              fontSize: '40px',
              background: '#4472c4',
            }}
          >
            旅游
          </h1>
        </Col>

        <Col span={19}>
          {/* <Tabs
        defaultActiveKey="1"
        tabPosition="left"
        style={{ height: 220 }}
  
        
          return {
            babel: `Tab-`,
            children: `Content of tab `,
          };
        
      /> */}
        </Col>
      </Row>
      <Row>
        <Col span={21}>
          <Tabs
            defaultActiveKey="1"
            tabPosition="left"
            items={items}
            onChange={onChange}
          />
        </Col>
        <Col span={3}></Col>
      </Row>
    </>
  );
};

export default travel;
