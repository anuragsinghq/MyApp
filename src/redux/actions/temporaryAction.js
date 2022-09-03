import { ACTION_CONSTANT } from "./constants";

const setLocalData = (data) => ({
  type:ACTION_CONSTANT.SET_LOCAL_DATA,
  data
});

const getApiData = () => ({
  type:ACTION_CONSTANT.GET_API_DATA,
});

const setApiData = (data) => ({
  type:ACTION_CONSTANT.SET_API_DATA,
  data
});

const setLoadingData = (data) => ({
  type:ACTION_CONSTANT.LOADING_DATA,
  data
})

export {
  setLocalData,
  getApiData,
  setApiData,
  setLoadingData
};
