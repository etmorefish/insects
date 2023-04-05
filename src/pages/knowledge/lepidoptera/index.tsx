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
      <Row>
        <Col span={2}></Col>

        <Col span={20}>
          <Title style={{ textAlign: 'left' }}>鳞翅目（Lepidoptera）</Title>
          <Paragraph style={{ textIndent: '2em' }}>
            鳞翅目，Lepidoptera，属有翅亚纲下的一目。全世界已知约20万种，中国已知约8000余种。该目为昆虫纲中仅次于鞘翅目的第2个大目。分布范围极广，以热带种类最为丰富。绝大多数种类的幼虫危害各类栽培植物，体形较大者常食尽叶片或钻蛀枝干。体形较小者往往卷叶、缀叶、结鞘、吐丝结网或钻入植物组织取食，成虫多以花蜜等作为补充营养，或口器退化不再取食，一般不造成直接危害。
          </Paragraph>
          <Row>
            <Col span={2}></Col>
            <Col span={4}>
              <Image width={200} src="/resources/images/lepidoptera-1.png" />
            </Col>
            <Col span={15}>
              <Paragraph aria-level={3} style={{ textIndent: '2em' }}>
                拟稻眉眼蝶Mycalesis francisca前后翅反面底色为深棕或黑棕色，其淡色中带内侧边非常清晰而外侧边呈晕状向外扩散，后翅眼斑列没有共同的外环。虫都喜爱阴暗的地方，飞翔能力有强有弱，飞翔形式波浪形，多在林荫、竹林中早晚活动。多分布在高山区，有少数种类在开阔地区活动。南方种类有的颜色较鲜艳，少数无眼状斑，拟似粉蝶或斑蝶
              </Paragraph>
            </Col>
          </Row>
          <Row>
            <Col span={2}></Col>
            <Col span={4}>
              <Image width={200} src="/resources/images/lepidoptera-2.png" />
            </Col>
            <Col span={15}>
              <Paragraph aria-level={3} style={{ textIndent: '2em' }}>
              灯蛾，中药名。为灯蛾科动物灯蛾Arctia caja Linnaeus的成虫。分布于全国大部分地区。具有解毒敛疮之功效。常用于痔瘘。灯蛾：又名豹灯蛾。体肥大，茶褐色，长约3cm，展翅宽约8cm。头小，两侧有复眼1对；口吻发达，下唇须长。触角1对，羽状。胸节连合，有红色部。翅2对，膜质，被有鳞片；茶褐色，前翅具黄白色网状纹，后翅有黑纹数条。足3对。腹部肥大，橙黄色。幼虫长圆形，黑色，有灰黄或赤褐色毛。
              </Paragraph>
            </Col>
          </Row>
          <Row>
            <Col span={2}></Col>
            <Col span={4}>
              <Image width={200} src="/resources/images/lepidoptera-3.png" />
            </Col>
            <Col span={15}>
              <Paragraph aria-level={3} style={{ textIndent: '2em' }}>
              统帅青凤蝶（学名：Graphium agamemnon，英文：Tailed jay），是凤蝶科青凤蝶属的一种中型蝴蝶，多出现于林区。寄主为多种木兰科和番荔枝科的植物；成虫访花，飞行快速，春夏秋季出现。雌蝶在食草产卵时会较易观察；统帅青凤蝶展翅宽70-80mm，翅膀上布满细碎的绿色斑纹，有翅尾。雄蝶翅尾较短，后翅内绿反卷，内有白色长毛。该物种数量较多，所以不受保护。1年发生多代，以蛹越冬。
              </Paragraph>
            </Col>
          </Row>
          <Row>
            <Col span={2}></Col>
            <Col span={4}>
              <Image width={200} src="/resources/images/lepidoptera-4.png" />
            </Col>
            <Col span={15}>
              <Paragraph aria-level={3} style={{ textIndent: '2em' }}>
              蓝蝶，Everes argiades (Pallas），是昆虫纲、鳞翅目、灰蝶科的小型蝴蝶，灰蝶，飞行迅速，翅有金属光泽，是平地最常见的小型蝴蝶。成虫以及各虫期整年都可见到，成虫常于草地、树林边以及路旁低飞，也常出现在各种草本植物旁。雌雄异型，雄蝶翅面蓝紫色，外缘黑色，前翅中室端部有以明显黑斑，后翅有小尾突；雌蝶翅面黑褐色，中室无黑斑。成虫喜访花，易捕捉。
              </Paragraph>
            </Col>
          </Row>
          <Row>
            <Col span={2}></Col>
            <Col span={4}>
              <Image width={200} src="/resources/images/lepidoptera-5.png" />
            </Col>
            <Col span={15}>
              <Paragraph aria-level={3} style={{ textIndent: '2em' }}>
              天蚕蛾成虫口器退化，多不取食。雄蛾的羽状触角可用以探测远方雌蛾的气味。幼虫大型，通常绿色，多有鲜艳颜色的瘤和刺，主要吃树叶。有的织茧，有的在地下化蛹。可供纺丝的种类有多音天蚕蛾(Antheraea polyphemus)、中国的柞蚕(A. pernyi,产山东丝)、印度的透纱蚕(A. paphia,产柞蚕丝)、A. assama(产印度野蚕丝)和翅展超过25公分(10吋)的凤蛾(Attacus atlas, 即乌桩蚕、大桩天蚕)等。
              </Paragraph>
            </Col>
          </Row>
        </Col>
        <Col span={2}></Col>
      </Row>
      <br />
    </>
  );
};

export default knowledge;
