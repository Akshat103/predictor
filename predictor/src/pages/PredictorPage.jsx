import React, { useEffect, useState, lazy, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOptions } from '../redux/actions/optionsActions';
import Spinner from '../components/Spinner';

const Filter = lazy(() => import('../components/Filter'));
const PredictionResult = lazy(() => import('../components/PredictionResult'));

const PredictorPage = () => {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.options.loading);
  const [pageLoading, setPageLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      await dispatch(fetchOptions());
      setPageLoading(false);
    };
    loadData();
  }, [dispatch]);

  if (pageLoading) {
    return <Spinner />;
  }

  return (
    <div className='predictor-page'>
      <section className='filter-section'>
        <p>Predict Colleges</p>
        <Suspense fallback={<Spinner />}>
          <Filter loading={loading} />
        </Suspense>
      </section>
      <Suspense fallback={<Spinner />}>
        <PredictionResult />
      </Suspense>
    </div>
  );
};

export default PredictorPage;