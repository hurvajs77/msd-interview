import { FC, ReactElement, useEffect, useRef } from 'react';
import { Avatar, Button, Card } from 'antd';
import { CommentOutlined, UserOutlined } from '@ant-design/icons';
import { ChartWrapperProps } from '@/components/ChartWrapper/types';
import { Chart } from '@antv/g2';

const ChartWrapper: FC<ChartWrapperProps> = ({ variant = 'bar', data, title, commentCount }): ReactElement => {
  const chartRef = useRef(null);
  const initiated = useRef(false);

  useEffect(() => {
    if (chartRef.current && !initiated.current) {
      const chart = new Chart({
        container: chartRef.current,
        autoFit: true,
        height: 500,
      });

      chart.data(data);

      if (variant === 'bar') {
        chart
          .interval()
          .position('date*value')
          .color('date', ['#051720', '#03273c', '#003554', '#004d74', '#006494', '#006da4']);
      } else {
        chart
          .interval()
          .adjust('stack')
          .position('value')
          .color('date', ['#ef476f', '#f78c6b', '#ffd166', '#06d6a0', '#118ab2', '#073b4c']);
        chart.coordinate('theta', { radius: 0.95, innerRadius: 0.6 });
      }
      chart.render();

      initiated.current = true;
    }
  }, [data, variant]);

  return (
    <Card
      title={title}
      actions={[
        <Button key="avatar-btn" type="text">
          <Avatar icon={<UserOutlined />} size="small" />
        </Button>,
        <Button type="text" key="comments-btn">
          {commentCount}&nbsp;
          <CommentOutlined />
        </Button>,
      ]}
    >
      <div ref={chartRef} />
    </Card>
  );
};

export default ChartWrapper;
