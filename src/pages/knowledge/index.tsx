import { Pagination } from 'antd';
import { Image } from 'antd';
import { Input, Space, Row, Col, Menu, Button, Table } from 'antd';
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
    label: <Title >水晶滴胶</Title>,
    children:        <Typography>
    <Title style={{textAlign: 'center'}}>水晶滴胶：定格人间美好 - 保存大自然的馈赠</Title>
    <Paragraph>
    <Title level={4}>
    滴胶手工是一充满想象力的手工，我们可以将经过自己精心设计各种事物封存在各种形状的滴胶中模型中，等经过一定的时间转化后，就能得到一件具有一定硬度且耐水耐油耐一般腐蚀的梦幻装饰。我们把蝴蝶的美定格，保存着大自然的馈赠
    </Title>
    </Paragraph>
    <Image.PreviewGroup
    preview={{
      onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
    }}
  >
    <Image src="/resources/images/ppt13-1.png" />
    <Image src="/resources/images/ppt13-2.png" />
  <Row>
    <Col span={10}>
    水晶滴胶手工制作活动的主要材料是环氧树脂水晶胶，这是一种无毒无害、安全可靠的手工产品。将水晶胶按照一定比例混合，再加入亮粉等装饰材料，最后倒入模具，等候大约24小时便可以脱模取出，可以选自自己喜欢的模板进行选择。
    </Col>
    <Col span={14}>
    <Image src="/resources/images/ppt13-3.png" />
    </Col>
  </Row>
  </Image.PreviewGroup>


  </Typography>,
  },

  {
    key: '2',
    label: <Title>纪念图册</Title>,
    children:           <Typography>
    <Title style={{textAlign: 'center'}}>纪念图册：留存多彩的昆虫世界</Title>
    <Row>
        <Col span={16}>
        <Paragraph>
        昆虫标本往往需要我们耐心制作，以便保留住昆虫本真的色彩和精巧的结构。它们不仅是确定昆虫种类的重要依据，也是留给后人的宝贵研究材料。
        </Paragraph>
        <Row>

        <Paragraph>
        蝴蝶由于其美丽的花纹，对称的图案，眩目的色彩而著称于世。品种达一万三千多种，象翠风蝶,虎斑蝶…..等数不胜数，可真正人们亲眼能见到的,也仅仅是制做好的标本和在国家植物园里的观赏蝶，而让这些美丽的精灵真实地存在于我们的身边，触手可及，简直就是一个浪漫的传说。
        </Paragraph>
        <Image src="/resources/images/ppt14-2.png" />
    </Row>
        </Col>
        <Col span={8}>
        <Image src="/resources/images/ppt14-1.png" />
        </Col>
    </Row>

  </Typography>,
  },
  {
    key: '3',
    label: <Title>昆虫标本</Title>,
    children:           <Typography>
    <Title style={{textAlign: 'center'}}>昆虫标本：凝固生命的瞬间</Title>
    <Paragraph>
    昆虫标本往往需要我们耐心制作，以便保留住昆虫本真的色彩和精巧的结构。它们不仅是确定昆虫种类的重要依据，也是留给后人的宝贵研究材料。
    </Paragraph>
    <Image src="/resources/images/ppt15-1.png" />

    <Title level={2} style={{textAlign: 'center'}}>昆虫标本：凝固生命的瞬间</Title>
    <Paragraph>
    采集昆虫标本前应提前了解昆虫的栖息地点、活动时段、活动季节等，并且做好自身防护工作。采集时主要用到的工具有捕虫网和采集袋。
    </Paragraph>
<Image src="/resources/images/ppt15-2.png" />

    <Title level={2} style={{textAlign: 'center'}}>昆虫标本的制作</Title>
    <Paragraph>
    昆虫标本制作时，一般会用到昆虫针、展翅板、整姿台和三级台等。
    </Paragraph>
    <Image src="/resources/images/ppt15-3.png" />

    <Title level={2} style={{textAlign: 'center'}}>昆虫标本的保存</Title>
    <Paragraph>
    昆虫制好的标本一般会放入特制的标本盒中，四周放置樟脑粉、石炭酸等驱虫、防霉剂。再将标本盒放入标本柜中收藏，保持干燥通风处，避免阳光直射。
    </Paragraph>
    <Image src="/resources/images/ppt15-4.png" />





  </Typography>,
  },
];
const onChange = (key: string) => {
  console.log(key);
};

const knowledge: React.FC = () => {
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
            灵魂手工艺品
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
      <Tabs defaultActiveKey="1" tabPosition='left' items={items} onChange={onChange} />
      </Col>
      <Col span={3}>
        </Col>
      </Row>
    </>
  );
};

export default knowledge;
