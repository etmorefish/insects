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
          <Title style={{ textAlign: 'left' }}>鞘翅目（Coleoptera）</Title>
          <Paragraph style={{ textIndent: '2em' }}>
          鞘翅目（学名：Coleoptera）是昆虫纲中乃至动物界种类最多、分布最广的第1大目。种类繁多，系统复杂。这个类群的前翅角质化、坚硬、无翅脉，称为“鞘翅” ，因此而得名。共4亚目（原鞘亚目、菌食亚目、肉食亚目、多食亚目），178科，33万种，属有翅亚纲、全变态类。鞘翅目体型大小差异甚大，体壁坚硬；口器咀嚼式；触角形状多样，10-11节；前胸发达，中胸小盾片外露；前翅为角质硬化的鞘翅，后翅膜质；幼虫为寡足型，少数为无足型。常见昆虫（俗称）：天牛、瓢虫、萤火虫、屎壳郎、斑蝥、独角仙、吉丁虫、芫菁、金龟子、锹形虫、叩头虫、龙虱、米象。
          </Paragraph>
          <Row>
            <Col span={2}></Col>
            <Col span={4}>
              <Image width={200} src="/resources/images/coleoptera-1.png" />
            </Col>
            <Col span={15}>
              <Paragraph aria-level={3} style={{ textIndent: '2em' }}>
              金龟子是鞘翅目金龟总科(Scarabaeoidea)的通称。其幼虫(蛴螬)是主要地下害虫之一，危害严重，常将植物的幼苗咬断，导致枯黄死亡。多种成虫又是农作物、林木、果树的大害虫，因此，正确鉴定种类学名，研究和掌握其分类特征及生物学特性，对控制金龟子的危害，确保农、林业增产是至关重要的。
              </Paragraph>
            </Col>
          </Row>
          <Row>
            <Col span={2}></Col>
            <Col span={4}>
              <Image width={200} src="/resources/images/coleoptera-2.png" />
            </Col>
            <Col span={15}>
              <Paragraph aria-level={3} style={{ textIndent: '2em' }}>
              瓢虫为鞘翅目瓢虫科（学名：Coccinellidae）圆形突起的甲虫的通称，是体色鲜艳的小型昆虫，常具红、黑或黄色斑点。别称为胖小、红娘、花大姐（指二十八星瓢虫，这是一种害虫）、金龟，甚至因为某些种其分泌物带有臭味而俗称为臭龟子（但这也是混称）。
              </Paragraph>
            </Col>
          </Row>
          <Row>
            <Col span={2}></Col>
            <Col span={4}>
              <Image width={200} src="/resources/images/coleoptera-3.png" />
            </Col>
            <Col span={15}>
              <Paragraph aria-level={3} style={{ textIndent: '2em' }}>
              天牛是多食亚目天牛科昆虫的总称，咀嚼式口器，有很长的触角，常常超过身体的长度，全世界约有超过20,000种。有一些种类属于害虫，其幼虫生活于木材中，可能对树或建筑物造成危害。是植食性昆虫，会危害木本植物，大部分松、柏、柳、榆、核桃、柑橘、苹果、桃和茶等，一部分棉、麦、玉米、高粱、甘蔗和麻等，少数木材、建筑、房屋和家具等，是林业生产、作物栽培和建筑木材上的主要害虫。
              </Paragraph>
            </Col>
          </Row>
          <Row>
            <Col span={2}></Col>
            <Col span={4}>
              <Image width={200} src="/resources/images/coleoptera-4.png" />
            </Col>
            <Col span={15}>
              <Paragraph aria-level={3} style={{ textIndent: '2em' }}>
              萤火虫俗称火金姑、亮火虫，是昆虫纲鞘翅目萤科中能够发光的昆虫的俗称，已知共有2000多种，分属于8个亚科92属和亚属，分布于温带、亚热带和热带地区。 依照成虫的活动规律可分为昼行性，昼夜两行性和夜行性。依照幼虫生活的环境，分为陆栖、水栖和半水栖三类。萤火虫是美丽的发光昆虫，能够发出黄色、橙色、红色、黄绿色及绿色等多种颜色的荧光。  除一些昼行性的种类外，萤火虫的卵、幼虫、蛹、成虫均能发光。萤火虫幼虫的发光被认为具有警戒、恫吓天敌的作用，而成虫被认为利用闪光进行种的辨认、求偶及诱捕。
              </Paragraph>
            </Col>
          </Row>
          <Row>
            <Col span={2}></Col>
            <Col span={4}>
              <Image width={200} src="/resources/images/coleoptera-5.png" />
            </Col>
            <Col span={15}>
              <Paragraph aria-level={3} style={{ textIndent: '2em' }}>
              隐翅虫（rove beetle）又被称为“影子虫”、“青腰虫”，是鞘翅目隐翅虫科甲虫的通称，属昆虫纲，鞘翅目，隐翅虫科。是鞘翅目中物种最丰富的一科，已知全世界有 58500 多种，世界各地均有分布。隐翅虫的生境复杂，在农田、林间、雨林、山地、河畔及海边均有分布，在某些哺乳动物的体表也有发现。隐翅虫为杂食性昆虫，大部分以肉食为主，靠捕食农林害虫为生；一部分为腐食性、粪食性的昆虫，可以促进自然界物质的循环；另外一些以菌菇、植物的果实以及花粉等为食物。少数的种类可引起皮肤炎症，隐翅虫与人类的关系十分密切，是自然资源的重要组成部分。
(Antheraea polyphemus)、中国的柞蚕(A. pernyi,产山东丝)、印度的透纱蚕(A. paphia,产柞蚕丝)、A. assama(产印度野蚕丝)和翅展超过25公分(10吋)的凤蛾(Attacus atlas, 即乌桩蚕、大桩天蚕)等。
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
