import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { AppDispatch } from '../reducers/store'
import { setContents } from './data'
import { AmazonProduct } from '../../types/AmazonProduct'

export const getData = createAsyncThunk<void, string, { dispatch: AppDispatch }>('groupedActions/getData', async (string, { dispatch }) => {
    try {
        const data: AmazonProduct[] = await axios.get(`/data.json`).then((response) => response.data)
        dispatch(setContents(data))
    } catch (e) {
        console.error(e)
        throw e
    }
})
