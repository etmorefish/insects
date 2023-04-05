import React from 'react';
import { BackTop, Layout } from 'antd';
import classNames from 'classnames';
import styles from './style.module.less';
import Footer from '@/components/LayoutComponents/Footer';

// @withRouter
const MainLayout: React.FC = props => {
  const { children } = props;
  return (
    <Layout
      className={classNames({
        settings__borderLess: '',
      })}
    >

      {/* <Settings /> */}

      <Layout >

        {/* <Layout.Sider width={225}>

          <Menu />

        </Layout.Sider> */}

        <Layout>

          <Layout.Content style={{ height: '100%', position: 'relative' }}>

            <div className={styles.utils__content}>{children}</div>

          </Layout.Content>

          <Layout.Footer style={{ paddingRight: '20px', paddingLeft: '20px' }}>
            <Footer />
          </Layout.Footer>
        </Layout>

      </Layout>

    </Layout>

  );

};




export default MainLayout;