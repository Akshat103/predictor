import React from 'react';
import { Spin } from 'antd';

const Spinner = () => {
  const [percent, setPercent] = React.useState(-50);
  const timerRef = React.useRef();

  React.useEffect(() => {
    timerRef.current = setTimeout(() => {
      setPercent((v) => {
        const nextPercent = v + 5;
        return nextPercent > 150 ? -50 : nextPercent;
      });
    }, 100);
    return () => clearTimeout(timerRef.current);
  }, [percent]);


  return (
    <div className="spinner-container">

      <Spin percent={percent} size="large" tip="Loading..." style={{ marginTop: '20px' }} />
    </div>
  );
};

export default Spinner;

