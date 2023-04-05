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
          <Title style={{ textAlign: 'left' }}>其他昆虫（Other insects）</Title>
          <Paragraph style={{ textIndent: '2em' }}>
           
          </Paragraph>
          <Row>
            <Col span={2}></Col>
            <Col span={4}>
              <Image width={200} src="/resources/images/other-1.png" />
            </Col>
            <Col span={15}>
              <Paragraph aria-level={3} style={{ textIndent: '2em' }}>
              半翅目飞虱科的通称，全世界近2000种。中国约200种。全部植食性，很多种生活于禾本科植物，是农业的重要害虫，如褐飞虱、灰飞虱、白背飞虱等。有一些种还传布植物病毒病，如稻黑条矮缩病、小麦丛矮病、玉米粗缩病等。飞虱体型小，长多在5毫米以下。大多以卵或若虫越冬。1年发生3～4代以至10代以上。越冬卵产在寄主组织里。若虫则蛰伏于冬季寄主或杂草中，天气转暖便孵化或活动取食。已知有些种（如褐飞虱、白背飞虱等）只能在南方越冬，每年至植物生长季节，由南方向北方飞迁，侵入农田为害。成虫和若虫都刺吸植物液汁。取食禾本科植物的种类多在植株茎杆上刺吸，影响植物的生长，严重时可使叶片发黄，甚至整株干枯和倒伏。成虫和若虫都善走能跳。成虫还可以飞迁，大多有趋光性。
              </Paragraph>
            </Col>
          </Row>
          <Row>
            <Col span={2}></Col>
            <Col span={4}>
              <Image width={200} src="/resources/images/other-2.png" />
            </Col>
            <Col span={15}>
              <Paragraph aria-level={3} style={{ textIndent: '2em' }}>
              蚜虫，又称腻虫、蜜虫，是一类植食性昆虫，包括蚜总科（又称蚜虫总科，学名：Aphidoidea）下的所有成员。已经发现的蚜虫总共有10个科约4400种，其中多数属于蚜科。
蚜虫也是地球上最具破坏性的害虫之一。 其中大约有250种是对于农林业和园艺业危害严重的害虫。蚜虫的大小不一，身长从一到十毫米不等。
蚜虫的天敌有瓢虫、食蚜蝇、寄生蜂、食蚜瘿蚊（aphid midge larvae）、蟹蛛、草蛉以及昆虫病原真菌（entomopathogenic fungi，含绿僵菌）。
              </Paragraph>
            </Col>
          </Row>
          <Row>
            <Col span={2}></Col>
            <Col span={4}>
              <Image width={200} src="/resources/images/other-3.png" />
            </Col>
            <Col span={15}>
              <Paragraph aria-level={3} style={{ textIndent: '2em' }}>
              叶蝉科Cicadellidae 昆虫，隶属于半翅目（Hemiptera）头喙亚目 （Auchenorrhyncha）体长3-15毫米。单眼2个，少数种类无单眼。后足胫节有棱脊，棱脊上有3-4列刺状毛。后足胫节刺毛列是叶蝉科的最显著的识别特征。全世界共有1万多种，我国已记载约1000种。该科昆虫不仅危害农作物，而且还传播植物病毒病。
              </Paragraph>
            </Col>
          </Row>
          <Row>
            <Col span={2}></Col>
            <Col span={4}>
              <Image width={200} src="/resources/images/other-4.png" />
            </Col>
            <Col span={15}>
              <Paragraph aria-level={3} style={{ textIndent: '2em' }}>
              蚧[jiè]虫scale insect，又名“介壳虫”。同翅目蚧总科昆虫的统称。雌雄异体。
蚧壳虫是园林植物主要害虫种类之一，在我国危害园林植物的蚧壳虫约600余种， 危害长春市园林树木较为严重的有6种， 主要有白蜡蚧、朝鲜毛球蚧、圆盾蚧、水木坚蚧、考氏白盾蚧、桑白盾蚧。蚧壳虫在我市主要为害女贞、山杏、京桃、糖槭等树种， 造成枝叶发黄、畸形、叶片脱落, 严重者导致整株死亡, 严重影响树木的正常生长及园林绿化效果。
              </Paragraph>
            </Col>
          </Row>
          <Row>
            <Col span={2}></Col>
            <Col span={4}>
              <Image width={200} src="/resources/images/other-5.png" />
            </Col>
            <Col span={15}>
              <Paragraph aria-level={3} style={{ textIndent: '2em' }}>
              蝉有两对膜翅，形状基本相同，头部宽而短，具有明显突出的额唇基；视力相当良好，复眼不大，位于头部两侧且分得很开，有3个单眼。触角短，呈刚毛状。幼虫生活在土中，末龄幼虫多为棕色，与成虫相似。螽蝉科有两个种类，俗称为毛蝉。仅分布于澳大利亚南部，包括塔斯马尼亚岛。蝉也有不同的，它们的形状相似而颜色各异。 [3] 
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
