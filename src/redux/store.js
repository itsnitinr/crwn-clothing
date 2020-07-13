import { createStore, applyMiddleware, compose } from "redux";
import { persistStore } from "redux-persist";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";
import rootReducer from "./root-reducer";

import { fetchCollectionsStart } from "./shop/shop.sagas";

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middlewares))
);

sagaMiddleware.run(fetchCollectionsStart);

export const persistor = persistStore(store);

export default { store, persistor };
