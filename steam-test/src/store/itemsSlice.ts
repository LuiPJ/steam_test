import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Item {
  id: string;
  color: string;
}

const itemsSlice = createSlice({
  name: 'items',
  initialState: [] as Item[],
  reducers: {
    addItem: (state, action: PayloadAction<Item>) => {
      return [action.payload, ...state];
    },
    removeItem: state => {
      return [...state.slice(0, -1)];
    },
  },
});

export const { addItem, removeItem } = itemsSlice.actions;
export default itemsSlice.reducer;
