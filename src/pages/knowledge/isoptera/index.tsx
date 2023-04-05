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
          <Title style={{ textAlign: 'left' }}>等翅目（Isoptera）</Title>
          <Paragraph style={{ textIndent: '2em' }}>
          等翅目，Isoptera，是昆虫纲下的一目。昆虫通称白蚁，古书上简称“螱”，为社会性昆虫，生活于隐藏的巢穴中，有完善的群体组织，由有翅和无翅的生殖个体（雌蚁和雄蚁）与多数无翅的非生殖个体（工蚁和兵蚁）组成。
          </Paragraph>
          <Row>
            <Col span={2}></Col>
            <Col span={4}>
              <Image width={200} src="/resources/images/isoptera-1.png" />
            </Col>
            <Col span={15}>
              <Paragraph aria-level={3} style={{ textIndent: '2em' }}>
              黑翅土白蚁（学名：Odontotermes formosanus）是白蚁科、土白蚁属动物，兵蚁体长6毫米左右，乳白色上颚镰刀形，左上颚中点前方有一明显的齿，齿尖斜向前；右上颚内缘的对应部位有一不明显的微齿。翅长大，前翅鳞大于后翅鳞。工蚁头黄色，胸腹部灰白色。卵乳白色，椭圆形。
              </Paragraph>
            </Col>
          </Row>
          <Row>
            <Col span={2}></Col>
            <Col span={4}>
              <Image width={200} src="/resources/images/isoptera-2.png" />
            </Col>
            <Col span={15}>
              <Paragraph aria-level={3} style={{ textIndent: '2em' }}>
              山林原白蚁，Hodotermopsis sjostedti (Holmgren, 1911)，属原白蚁科（Termopsidae）原白蚁属的一种白蚁。建巢于树木内，危害活树和伐倒木。危害的树种，主要有槠、栎、松、楠、桤及中华五加、紫荆、狭叶泡花树、杨桐、乌饭树、冬青、金叶白兰、长苞铁杉。
              </Paragraph>
            </Col>
          </Row>
          <Row>
            <Col span={2}></Col>
            <Col span={4}>
              <Image width={200} src="/resources/images/isoptera-3.png" />
            </Col>
            <Col span={15}>
              <Paragraph aria-level={3} style={{ textIndent: '2em' }}>
              黄翅大白蚁（学名：Macrotermes barneyi）是白蚁科、大白蚁属的一种昆虫。大兵蚁：体长10.50-11毫米，头深黄色，上颚黑色。头及胸背有少数直立的毛，腹部背面毛少，腹部腹面毛较多。头大，背面观长方形，略短于体长的1/2。头棕黄色，胸腹部浅棕黄色。头圆形，颜面与体纵轴近似垂直。腹部膨大如橄榄形。
              </Paragraph>
            </Col>
          </Row>
          <Row>
            <Col span={2}></Col>
            <Col span={4}>
              <Image width={200} src="/resources/images/isoptera-4.png" />
            </Col>
            <Col span={15}>
              <Paragraph aria-level={3} style={{ textIndent: '2em' }}>
              工蚁又称职蚁。无翅，一般为群体中最小的个体，但数量最多。复眼小，单眼极微小或无。上颚、触角和三对胸足都很发达，善于步行奔走。工蚁是没有生殖能力的雌性。工蚁的主要职责是建造和扩大保卫巢穴、采集食物、伺喂幼蚁及蚁后等
              </Paragraph>
            </Col>
          </Row>
          <Row>
            <Col span={2}></Col>
            <Col span={4}>
              <Image width={200} src="/resources/images/isoptera-5.png" />
            </Col>
            <Col span={15}>
              <Paragraph aria-level={3} style={{ textIndent: '2em' }}>
              黑胸散白蚁Reticulitermes chinensis Snyder是鼻白蚁科散白蚁属的一种白蚁。头部近长方形，两侧仅后部略宽，上颚粗状“S”形，上唇近三角形，顶端钝。群体小而分散，危害部位多为门框、窗框和楼板等。危害建筑物。分布在河北、北京、山东、河南、江苏、上海、浙江、福建、安徽等。
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
