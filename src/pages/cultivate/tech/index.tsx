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
    label: `毛斌`,
    children:           <Typography>
    <Title>毛斌</Title>

    <blockquote>
      <Title level={3}>讲师 黄冈师范学院</Title>
    </blockquote>
    <Paragraph style={{textIndent: '2em'}}>
      毛斌，男，博士，讲师，中共党员，主要从事昆虫繁殖发育、动物多样性及化学生态研究；以第一作者和共同作者发表论文10篇，其中SCI论文9篇，中科院一区SCI论文一篇；参与国家自然科学基金3项；主要讲授动物学和分子生物学等相关课程。
    </Paragraph>
    <Divider />

    <Title level={2}>科研项目：</Title>
    <Paragraph>
      <ul>
        <li>
          <Paragraph>
            国家自然科学基金委员会，面上项目，32170511，沃尔巴克氏体感染对果蝇学习记忆的影响及机制研究，2022-01-01至2025-12-31，58万元，参与。
          </Paragraph>
        </li>
        <li>
          <Paragraph>
            国家自然科学基金委员会，面上项目，31872288，ocnus调控果蝇雄性生殖细胞发生的机制研究，2019-01-01至2022-12-31，58万元，参与。
          </Paragraph>
        </li>
        <li>
          <Paragraph>
            国家自然科学基金委员会，面上项目，31772543，花腹盖蛛性信息素生物合成的分子机理，2018-01-01至2021-12-31，61万元，参与。
          </Paragraph>
        </li>
      </ul>
    </Paragraph>
    <Divider />

    <Title level={2}>近两年发表文章：</Title>
    <Paragraph>
      <ul>
        <li>
          <Paragraph>
            <Text strong>Mao Bin</Text>, Zhang Wei, Zheng Ya, Li Dong,
            Chen Meng-Yan, Wang Yu-Feng*. (2022). Comparative
            phosphoproteomics reveal new candidates in the regulation of
            spermatogenesis of Drosophila melanogaster. Insect Science.
            29(6):1703-1720.
          </Paragraph>
        </li>
        <li>
          <Paragraph>
            Qiong Zong, <Text strong>Bin Mao#（共同一作）</Text>,
            Hua-Bao Zhang, Bing Wang, Wen-Juan Yu, Zhi-Wei Wang and
            Yu-Feng Wang*. Comparative Ubiquitome Analysis Reveals
            Deubiquitinating Effects Induced by Wolbachia Infection in
            Drosophila melanogaster. International Journal of Molecular
            Sciences. 2022, 23, 9459.
          </Paragraph>
        </li>
      </ul>
    </Paragraph>
  </Typography>,
  },

  {
    key: '2',
    label: `傅悦`,
    children:           <Typography>
    <Title>傅悦</Title>
    <Image
    width={200}
    src="/resources/images/fuyue.png"
  />
    <blockquote>
      <Title level={3}>教授 黄冈师范学院硕士生导师</Title>
    </blockquote>
    <Paragraph style={{textIndent: '2em'}}>
    傅悦，女，博士，教授，中共党员。湖北省第四批博士服务团成员、湖北省“三区”人才科技特派员。主要讲授动物学、生态学、动物生理学等课程。从事动物分类学、分子系统学等基础研究。近年来，主持国家自然科学基金项目3项，主持省部级项目（湖北省自然科学基金）1项，主持并完成湖北省教育厅项目1项、主持校级基金项目3项，以第一作者或通讯作者公开发表期刊论文30余篇；出版专著2部。
    </Paragraph>
    <Divider />

    <Title level={2}>科研项目：</Title>
    <Paragraph>
      <ul>
        <li>
          <Paragraph>
          国家自然科学基金资助，面上项目，31101624，世界棒脉摇蚊属群系统分类及DNA数据库的构建，2012-01-01至2014-12-31，主持。
          </Paragraph>
        </li>
        <li>
          <Paragraph>
          国家自然科学基金资助，面上项目，31460572，武陵山地区摇蚊科生物多样性与生物地理学研究，2015-01-01至2018-12-31，50万，主持。
          </Paragraph>
        </li>
        <li>
          <Paragraph>
          湖北省教育厅资助，Q20111904，湖北省棒脉摇蚊属群系统分类及DNA条形码的研究，2011-01-01至2012-12-31，主持。
          </Paragraph>
        </li>
      </ul>
    </Paragraph>
    <Divider />

    <Title level={2}>发表专著：</Title>
    <Paragraph>
      <ul>
        <li>
          <Paragraph>
          Fu, Y. & Sæther, OA 2012 《Corynoneura Winnertz and Thienemanniella Kieffer from the Nearctic Region (Diptera: Chironomidae: Orthocladiinae)》Magnolia Press，Auckland, New Zealand.61pp.ISBN：978-1-77557-040-0. (SCI收录)
          </Paragraph>
        </li>
        <li>
          <Paragraph>
          Fu, Y., Fang, XL & Wang, XH 2017. Taxonomy of Corynoneura Winnertz(Diptera: Chironomidae)，科学出版社, ISBN：978-7-03-053139-1.
          </Paragraph>
        </li>
        <li>
          <Paragraph>
          Fu, Y., Fang, XL & Wang, XH 2019. Taxonomy of Corynoneura Winnertz(Diptera: Chironomidae)，Science Press & Academic Press（Elsevier），ISBN：9780128152638, 343pp.
          </Paragraph>
        </li>
        <li>
          <Paragraph>
          Fu, Y., Fang,X.L., Wang, X. H., Shen,M.,Xiao, Y.L. Corynoneura Winnertz species from Hunan Province, Oriental China, delineated with morphological and 16S rDNA data (Diptera, Chironomidae). ZooKeys. (2022).1082: 87–102.
          </Paragraph>
        </li>
      </ul>
    </Paragraph>
  </Typography>,
  },
];
const onChange = (key: string) => {
  console.log(key);
};

const tech: React.FC = () => {
  const [mode, setMode] = useState<TabPosition>('top');

  const handleModeChange = (e: RadioChangeEvent) => {
    setMode(e.target.value);
  };

  return (
    <>
      <Row>
        <Col span={3}>
          <h1
            style={{
              textAlign: 'center',
              fontSize: '40px',
              background: '#4472c4',
            }}
          >
            农技学堂
          </h1>

          {/* <Radio.Group onChange={handleModeChange} value={mode} style={{ marginBottom: 8 }}>
              <Radio.Button value="top">Horizontal</Radio.Button>
              <Radio.Button value="left">Vertical</Radio.Button>
            </Radio.Group> */}
        </Col>

        <Col span={19}>
          <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
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
    </>
  );
};

export default tech;
