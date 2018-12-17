const STATE = "TUTERIA_CUSTOMER_SUCCESS_STATE";
export const loadState = () => {
  try {
    const serializedState = localStorage.getItem(STATE);
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

export const saveState = state => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(STATE, serializedState);
  } catch (err) {
    console.log(err);
  }
};

export const clearState = () => {
  try {
    localStorage.removeItem(STATE);
  } catch (err) {
    console.log(err);
  }
};

export const getFragment = (key, defaultParam = {}) => {
  let state = loadState() || {};
  return state[key] || defaultParams;
};
export const saveFragment = obj => {
  let state = loadState() || {};
  saveState({ ...state, ...obj });
};