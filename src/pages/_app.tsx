import { CSSProperties } from 'react';
import type { AppProps } from 'next/app';
import { Layout, Space, Typography } from 'antd';

const layoutWrapperStyle: CSSProperties = {
  width: '100%',
  minHeight: '100vh',
};

const headerStyle: CSSProperties = {
  backgroundColor: '#fff',
  height: 64,
  paddingInline: 50,
  lineHeight: '64px',
  boxShadow: '10px',
  display: 'flex',
  alignItems: 'center',
};

const contentStyle: CSSProperties = {
  background: '#eee',
  padding: '24px',
};

const appTitle: CSSProperties = {
  margin: 0,
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Space direction="vertical" style={layoutWrapperStyle} size={[48, 24]}>
      <Layout.Header style={headerStyle}>
        <Typography.Title level={1} style={appTitle}>
          App Title
        </Typography.Title>
      </Layout.Header>
      <Layout.Content style={contentStyle}>
        <Component {...pageProps} />
      </Layout.Content>
    </Space>
  );
}
