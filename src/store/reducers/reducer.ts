import { createReducer } from '@reduxjs/toolkit'
import { setContents } from '../actions/data'
import { AmazonProduct } from '../../types/AmazonProduct'

interface DataReducer {
    data: AmazonProduct[],
    isLoading: false,
    isError: false
}

const initialState: DataReducer = {
    data: [],
    isLoading: false,
    isError: false
};

const dataReducer = createReducer<DataReducer>(initialState, (builder) => {
    builder.addCase(setContents, (state, action) => {
        state.data = action.payload
    })
})

export default dataReducer
