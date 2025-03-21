import { createSlice } from '@reduxjs/toolkit'
export const commonSlice = createSlice({
	name:'common',
	initialState:{
		remoteURL:'https://www.yangdong.co:8443/zhongku/',
		imgURL:'https://www.yangdong.co:8443/zhongku/',
		prompt:['6061铝板', '6061铝棒', '7075铝板','7075铝棒','2A12铝棒','2A12铝管'],
		disable:['1070','1100','3004','5182','6060','6A02','2A14','2A50','2A70','6005','6060','6101','7003','7020','2A11','LD5'],
		cate:0
	},
	reducers:{
		changeCategory:(state,action)=>{
			state.cate = action.payload
		}
	}
})
export const {changeCategory} = commonSlice.actions

// export default commonSlice.reducer
export default commonSlice.getInitialState