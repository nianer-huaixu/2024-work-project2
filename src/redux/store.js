// 1. 导入官方实现redux状态管理工具包
import { configureStore,combineReducers } from '@reduxjs/toolkit'
// 2. 导入持久化所需要的插件
import { persistStore, persistReducer } from 'redux-persist'
// 3. 导入本地存储插件，可选storage cookie session
import storage from 'redux-persist/lib/storage'
// 4. 导入功能子模块reducers
import common from './common'
// 4. 导入子模块end

// 创建reducer(合并拆分的reducer)
const rootReducer = combineReducers({
    common
});

// 持久化配置
const persistConfig = {
    key: 'root',
    storage,
    // whitelist: [], // 需要持久化保存的模块，默认保存所有模块（语义：白名单）
    blacklist: [common], // 不需要持久化保存的模块，默认不保存任何模块（语义：黑名单）
};

// 5. 创建持久化后的reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// 6. 创建store
const store = configureStore({
    reducer: persistedReducer,
    devTools: true, // 是否开启开发者工具，默认true
    // 配置中间件：如果使用redux-persist，则需要设置为false，否则控制台报错（非序列化数据）
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    })
});

//  7. 创建持久化后的store
const persistor = persistStore(store);

// 8. 导出store和持久化后的store
export {store,persistor}
