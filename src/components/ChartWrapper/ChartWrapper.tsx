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
        chart.interval().position('date*value');
      } else {
        chart.interval().adjust('stack').position('value').color('date', ['#063d8a', '#1770d6', '#47abfc', '#38c060']);
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
        <Button key='avatar-btn'><Avatar  icon={<UserOutlined/>}/></Button>,
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
