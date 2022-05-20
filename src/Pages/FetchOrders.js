import { createAsyncThunk } from '@reduxjs/toolkit'

export const getPurchaseOrdersApiEndPoint =
'https://inshortsapi.vercel.app/news?category=sports';



export const FetchOrders = createAsyncThunk(
  'fetchOrders',
  async () => {
    const response = await fetch(getPurchaseOrdersApiEndPoint)
    const res2 = await response.json()
    return res2
  })






