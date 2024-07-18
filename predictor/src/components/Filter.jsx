import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Select, Button, Skeleton } from 'antd';
import { setFilter, setRank, predict } from '../redux/actions/predictorActions';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const { Option } = Select;

// Constants for valid options
const validCategories = ["UR", "EWS", "OBC", "SC", "ST"];
const validGenders = ["OP", "F", "M"];
const validMPDomiciles = ["AI", "Y", "N"];
const validClasses = ["X", "S", "FF", "NCC", "H"];

const Filter = ({ loading }) => {
  const dispatch = useDispatch();
  const options = useSelector(state => state.options.data);
  const selectedFilters = useSelector(state => state.predictor.filters);
  const rank = useSelector(state => state.predictor.rank);

  const handleFilterChange = (type, value) => {
    dispatch(setFilter(type, value));
  };

  const handleRankChange = (e) => {
    dispatch(setRank(e.target.value));
  };

  const handlePredict = async () => {
    try {
      await dispatch(predict(rank, selectedFilters));
    } catch (error) {
      console.error('handlePredict error:', error);
    }
  };

  return (
    <Skeleton active loading={loading}>
      <div className="parameter-grid" style={{ marginBottom: '1.25rem' }}>
        <div className="parameter">
          <label style={{ marginRight: '0.625rem' }}>Institute Type</label>
          <Select
            style={{ width: 200, marginRight: '0.625rem' }}
            placeholder="Select Institute Type"
            allowClear
            onChange={(value) => handleFilterChange('InstituteType', value)}
            value={selectedFilters.InstituteType}
          >
            {options.instituteTypes.map(type => (
              <Option key={type} value={type}>{type}</Option>
            ))}
          </Select>
        </div>
        <div className="parameter">
          <label style={{ marginRight: '0.625rem' }}>Institute Name</label>
          <Select
            style={{ width: 200, marginRight: '0.625rem' }}
            placeholder="Select Institute Name"
            allowClear
            onChange={(value) => handleFilterChange('InstituteName', value)}
            value={selectedFilters.InstituteName}
          >
            {options.instituteNames.map(name => (
              <Option key={name} value={name}>{name}</Option>
            ))}
          </Select>
        </div>
        <div className="parameter">
          <label style={{ marginRight: '0.625rem' }}>Branch</label>
          <Select
            style={{ width: 200, marginRight: '0.625rem' }}
            placeholder="Select Branch"
            allowClear
            onChange={(value) => handleFilterChange('Branch', value)}
            value={selectedFilters.Branch}
          >
            {options.branches.map(branch => (
              <Option key={branch} value={branch}>{branch}</Option>
            ))}
          </Select>
        </div>
        <div className="parameter">
          <label style={{ marginRight: '0.625rem' }}>Class</label>
          <Select
            style={{ width: 200, marginRight: '0.625rem' }}
            placeholder="Select Class"
            allowClear
            onChange={(value) => handleFilterChange('Class', value)}
            value={selectedFilters.Class}
          >
            {validClasses.map(cls => (
              <Option key={cls} value={cls}>{cls}</Option>
            ))}
          </Select>
        </div>
        <div className="parameter">
          <label style={{ marginRight: '0.625rem' }}>Gender</label>
          <Select
            style={{ width: 200, marginRight: '0.625rem' }}
            placeholder="Select Gender"
            allowClear
            onChange={(value) => handleFilterChange('Gender', value)}
            value={selectedFilters.Gender}
          >
            {validGenders.map(gender => (
              <Option key={gender} value={gender}>{gender}</Option>
            ))}
          </Select>
        </div>
        <div className="parameter">
          <label style={{ marginRight: '0.625rem' }}>MP Domicile</label>
          <Select
            style={{ width: 200, marginRight: '0.625rem' }}
            placeholder="Select MP Domicile"
            allowClear
            onChange={(value) => handleFilterChange('MPDomicile', value)}
            value={selectedFilters.MPDomicile}
          >
            {validMPDomiciles.map(domicile => (
              <Option key={domicile} value={domicile}>{domicile}</Option>
            ))}
          </Select>
        </div>
        <div className="parameter">
          <label style={{ marginRight: '0.625rem' }}>Category<span style={{ color: 'red' }}>*</span></label>
          <Select
            style={{ width: 200, marginRight: '0.625rem' }}
            placeholder="Select Category"
            onChange={(value) => handleFilterChange('Category', value)}
            value={selectedFilters.Category}
            required
          >
            {validCategories.map(category => (
              <Option key={category} value={category}>{category}</Option>
            ))}
          </Select>
        </div>
        <div className="parameter">
          <label style={{ marginRight: '0.625rem' }}>General JEE Rank<span style={{ color: 'red' }}>*</span></label>
          <input
            type="text"
            placeholder="Enter Rank"
            value={rank}
            onChange={handleRankChange}
            style={{ width: 200, marginRight: '0.625rem', padding: '5px', borderRadius: '5px' }}
          />
        </div>
      </div>
      <div style={{ marginBottom: '0.625rem' }}>
        <Button type="primary" onClick={handlePredict} disabled={loading}>Predict</Button>
      </div>
      <ToastContainer />
    </Skeleton>
  );
};

export default Filter;