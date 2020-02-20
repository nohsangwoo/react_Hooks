import React, { useState, useEffect } from 'react';
import defaultAxios from 'axios';
//npm install axios 설치후 사용가능

const useAxios = (opts, axiosInstance = defaultAxios) => {
  const [state, setState] = useState({
    loading: true,
    error: null,
    data: null
  });
  const [trigger, setTrigger] = useState(0);
  const refetch = () => {
    setState({
      ...state,
      loading: true
    });
    setTrigger(Date.now());
  };
  useEffect(() => {
    axiosInstance(opts)
      .then(data => {
        setState({
          ...state,
          loading: false,
          data
        });
      })
      .catch(error => {
        //에러가 있다면 처리
        setState({ ...state, loading: false, error });
      });
  }, [axiosInstance, opts, state, trigger]);
  if (!opts.url) {
    return;
  }

  return { ...state, refetch };
};

export default useAxios;
