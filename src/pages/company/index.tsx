import styles from './index.less';
import type { MenuProps } from 'antd';
import { MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Input, Space, Row, Col, Menu, Card } from 'antd';
import { useState } from 'react';


const { Search } = Input;
const onSearch = (value: string) => console.log(value);

export default function CompanyPage() {


    return (
        <>
            <div className={styles.header}>
                <Row gutter={16}>
                    <Col span={16}>
                        <span style={{ display: 'inline-block', paddingLeft: '20px' }}>
                            <img alt="logo" style={{ width: '80px' }} src="/resources/images/logo.png" />
                        </span>
                        <span style={{ display: 'inline-block', paddingLeft: '10px' }}>
                            <h1 style={{ fontSize: '50px', margin: 0 }}>大别山康达有限公司</h1>
                        </span>

                    </Col>
                </Row>
                <Row>
                    <Col span={6}></Col>
                    <Col span={10}>
                        <span style={{ marginTop: '100px', marginBottom: '20px', fontSize: '30px' }}>
                            ——药用昆虫养殖手工科普一体化产业链
                        </span>
                    </Col>
                </Row>
            </div>
            <span style={{fontSize: '30px'}}>不断超越，快速发展。打造有抱负、责任感、受尊重国家战略团队，把公司建设成为国际一流昆虫集团。</span><br />

            <Row>

                <Col span={6}>
                    <Card title="公司简介"  className={styles.title}>
                        <p className={styles.p}>大别山康达有限公司专门从事药用昆虫养殖、加工和销售等。公司旨在开发出更多更好的药用昆虫价值，服务于广大消费者。同时公司也将整合源远流长的昆虫文化，让消费者在享用药用昆虫价值的同时，感受到欢乐与新奇。公司技术领先、功能卓越。</p>
                    </Card>
                </Col>
                <Col span={6}>
                    <Card title="公司理念"   className={styles.title}>
                        <p className={styles.p}>公司团队敬业创新，与时俱进，相信技术赢得市场，诚信打造共赢。公司始终坚持“诚信、责任、创新、共赢”的企业文化核心，秉承永不满于现状、服务至上的原则，为消费者利益共同创造最大价值的经营理念，不断超越，快速发展，朝着国际一流公司出发。</p>
                    </Card>
                </Col>
                <Col span={6}>
                    <Card title="公司的经营范围"  className={styles.title}>
                        <p className={styles.p}>药用昆虫养殖、手工艺品加工以及线上线下相结合销售等。（法律、行规经营的项目除外；法律、行规经营的项目取得许可证后方可经营）。</p>
                    </Card>
                </Col>
                <Col span={6}>
                    <Card title="公司主营业务"   className={styles.title}>
                        <p className={styles.p}>公司的主营业务为药用昆虫的养殖、手工艺品和销售。作为药用昆虫研究领域中的一员，公司具备从药用昆虫的养殖、手工艺品的加工到销售有自己独特完整的产品体系，能够满足市场的需求，为广大客户提供昆虫价值领域的全产业链服务。</p>
                    </Card>
                </Col>
            </Row>

        </>
    );
}
