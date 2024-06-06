import { createAction } from '@reduxjs/toolkit'
import { AmazonProduct } from '../../types/AmazonProduct'

export const setContents = createAction<AmazonProduct[]>('data/setContents')
