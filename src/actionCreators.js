import axios from 'axios';

function runLoadRelationship(dispatch, href, type, id, name) {
  const relationship = { type, id, name };
  dispatch({
    type: 'RELATIONSHIP_LOAD_START',
    relationship
  });

  axios.get(`http://patient-tree-3875.getsandbox.com${href}`).then((response) => {
    dispatch(Object.assign({
      type: 'RELATIONSHIP_LOAD',
      relationship
    }, response.data));
  });
}

export function loadRelationship(model, id, relationshipName) {
  return (dispatch, getState) => {
    const state = getState();
    const href = state.api.getIn(['relationships', model, id, relationshipName, 'nextPageHref']);
    runLoadRelationship(dispatch, href, model, id, relationshipName);
  };
}

export function login() {
  return {
    type: 'DATA_LOAD',
    data: {
      id: 'current-session',
      type: 'session',
      attributes: {
        'userId': 'user-3903443433'
      }
    }
  };
}
