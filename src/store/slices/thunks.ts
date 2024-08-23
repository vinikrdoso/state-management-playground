import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../lib/axios";

export const loadCourse = createAsyncThunk(
  'player/load',
  async () => {
    const response = await api.get('/courses/1')

    return response.data
  }
)