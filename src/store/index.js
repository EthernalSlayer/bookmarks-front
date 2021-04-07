import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/rootSaga';
import { videoReducer } from './reducers/videosReducer';
import { picturesReducer } from './reducers/picturesReducer';
import { tagsReducer } from './reducers/tagsReducer';

const initialiseSagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
	videos: videoReducer,
	pictures: picturesReducer,
	tags: tagsReducer,
});

const store = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(initialiseSagaMiddleware))
);

initialiseSagaMiddleware.run(rootSaga);

export default store;
