
import { createSlice } from '@reduxjs/toolkit';
import { addDays } from 'date-fns';

const initialState = {
  data: [], // Your initial data array
  filteredData: [], // Filtered data based on user selection
  dateObject :[   {
    startDate: `${new Date()}`,
    endDate: `${addDays(new Date(), 7)}`,
    key: 'selection'
  }],
  statusFilter:[],
  machineFilterData:[]
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setData(state, action) {
      state.data = action.payload;
    },
    setDate(state, action) {
      const { startDate, endDate, key } = action.payload;
      
      // Check if startDate is a Date object
      const startDateISO = startDate instanceof Date ? startDate.toISOString() : null;
      // Check if endDate is a Date object
      const endDateISO = endDate instanceof Date ? endDate.toISOString() : null;
  
      state.dateObject = [{
          startDate: startDateISO, // Convert Date object to ISO string if it's a Date
          endDate: endDateISO, // Convert Date object to ISO string if it's a Date
          key: key
      }]; 
  },
  
    setMachineFilterData(state, action){
        const payload = action.payload;
        const index = state.statusFilter.indexOf(payload);
    
        if (index === -1) {
            // If the item doesn't exist, add it to the array
            state.statusFilter.push(payload);
        } else {
            // If the item already exists, remove it from the array
            state.statusFilter.splice(index, 1);
        }
    },
    setStatusFilter(state, action) {
        const payload = action.payload;
        const index = state.statusFilter.indexOf(payload);
    
        if (index === -1) {
            // If the item doesn't exist, add it to the array
            state.statusFilter.push(payload);
        } else {
            // If the item already exists, remove it from the array
            state.statusFilter.splice(index, 1);
        }
    },
    filterData(state, action) {
      const { status } = action.payload;
      state.filteredData = state.data.filter(item => item.status === status);
    },
    resetState(state) {
        // Reset all state properties to their initial values
        Object.assign(state, initialState);
      }
    
  },
});

export const { setData,setDate, filterData, setStatusFilter, resetState, setMachineFilterData } = dataSlice.actions;

export default dataSlice.reducer;