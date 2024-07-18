import React from 'react';
import { useSelector } from 'react-redux';
import { Table, Skeleton } from 'antd';

const PredictionResult = () => {
  const predictionResult = useSelector(state => state.predictor.result);
  const loadingResult = useSelector(state => state.predictor.loadingResult);

  const columns = [
    { title: 'Institute Name', dataIndex: 'InstituteName', key: 'InstituteName' },
    { title: 'Branch', dataIndex: 'Branch', key: 'Branch' },
    { title: 'Class', dataIndex: 'Class', key: 'Class' },
    { title: 'Category', dataIndex: 'Category', key: 'Category' },
    { title: 'Gender', dataIndex: 'Gender', key: 'Gender' },
    { title: 'MP Domicile', dataIndex: 'MPDomicile', key: 'MPDomicile' },
    { title: 'Opening Rank', dataIndex: 'OpeningRank', key: 'OpeningRank' },
    { title: 'Closing Rank', dataIndex: 'ClosingRank', key: 'ClosingRank' },
  ];

  return (
    <div>
      <Skeleton active loading={loadingResult}>
        <p className='note'><span>*</span> It is based on First Round data provided by MP DTE</p>
        <Table
          dataSource={predictionResult}
          columns={columns} rowKey={(record) => record.id}
          scroll={{ x: 'max-content' }}
        />
      </Skeleton>
    </div>
  );
};

export default PredictionResult;