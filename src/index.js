import React from 'react';
import { render } from 'react-dom'; // I added this line
import thunk from 'redux-thunk';
import { combineReducers, createStore, applyMiddleware, bindActionCreators } from 'redux';
import { Provider, connect } from 'react-redux';
import * as actionCreators from './actionCreators';
import selector from './selector';
import todoApp from './reducers'; // I added this line
import App from './components/App'; // I added this line

import jsonApiReducer from './json-api-reducer';

// The next two functions came from:
//  https://github.com/reactjs/redux/blob/master/examples/todos/index.js
let store = createStore(todoApp)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)


// Original code downloaded is below

// reduxStore.dispatch({
//   type: 'DATA_LOAD',
//   data: [{
//     id: 'user-3903443433',
//     type: 'user',
//     attributes: {
//       email: 'carlosrr@gmail.com'
//     },
//     relationships: {
//       'favorite-movies': {
//         self: '/users/user-3903443433/movies/favorites',
//         related: '/users/user-3903443433/movies/favorites',
//       },
//       'people': {
//         self: '/users/user-3903443433/people',
//         related: '/users/user-3903443433/people',
//       }
//     }
//   }]
// });

// const App = React.createClass({
//   mixins: [React.addons.PureRenderMixin],
//   login(e) {
//     e.preventDefault();
//     this.props.login();
//   },

//   randomUser(e) {
//     e.preventDefault();
//     this.props.loadRandomUser();
//   },

//   renderTop(store) {
//     const currentUserId = store.getIn(['session', 'current-session', 'attributes', 'userId']);

//     const user = selector(store, ['user', currentUserId]);
//     const currentUserEmail = user.attr('email');
//     return <div className="text-right">
//       Last updated {(new Date()).getTime()}
//       <span> | </span>
//       {currentUserEmail ? currentUserEmail : <em>No session</em>}
//       <span> | </span>
//       <a className="btn btn-info" onClick={this.randomUser}>Random user</a>
//       <span> | </span>
//       <a className="btn btn-info" onClick={this.login}>Log in</a>
//     </div>;
//   },

//   renderRelationship(relationshipName) {
//     const {store} = this.props;
//     const currentUserId = store.getIn(['session', 'current-session', 'attributes', 'userId']);
//     const getProperties = (base, properties) => {
//       return properties.reduce((obj, propName) => {
//         obj[propName] = store.getIn(base.concat([propName]));
//         return obj;
//       }, {});
//     };

//     const loadRelationship = (e) => {
//       e.preventDefault();
//       this.props.loadRelationship("user", currentUserId, relationshipName);
//     };

//     const r = ['relationships', 'user', currentUserId, relationshipName];
//     const {isLoadingPage, nextPageHref, data} = getProperties(r, ['data', 'nextPageHref', 'isLoadingPage']);
//     let loadMoreLink = 'Nothing to load';
//     if (isLoadingPage) {
//       loadMoreLink = 'loading...';
//     } else if (nextPageHref) {
//       loadMoreLink = <a href="#" onClick={loadRelationship}>load more...</a>;
//     }

//     return [
//       <h2>/user/{relationshipName} {loadMoreLink}</h2>,
//       <pre>{data &&  JSON.stringify(data.toJS(), null, '\t')}</pre>
//     ];
//   },

//   render() {
//     const {store} = this.props;
//     return <div>
//       {this.renderTop(store)}
//       <div className="row">
//         <div className="col-sm-5 col-sm-offset-1">
//           <h2>Store</h2>
//           <pre>{JSON.stringify(store.toJS(), null, ' ')}</pre>
//         </div>
//         <div className="col-sm-3">
//           {this.renderRelationship("favorite-movies", "movie")}
//         </div>
//         <div className="col-sm-3">
//           {this.renderRelationship("people", "artist")}
//         </div>
//       </div>
//     </div>;
//   }
// });

// const SmartApp = connect((state) => {
//   return { store: state.api };
// }, (dispatch) => bindActionCreators(actionCreators, dispatch)
// )(App, { store: reduxStore });

// window.onload = () => {
//   React.render(<Provider store={reduxStore}>
//     {() => <SmartApp />}
//   </Provider>, document.querySelector('#container'));
// };
