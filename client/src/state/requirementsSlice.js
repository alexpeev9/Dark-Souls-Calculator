import { createSlice } from '@reduxjs/toolkit';

const requirementsSlice = createSlice({
  name: 'requirements',
  initialState: {
    strength: 12,
    dexterity: 11,
    faith: 12,
    intelligence: 13,
  },
  reducers: {
    setRequirements: (state, action) => {
      const { strength, dexterity, faith, intelligence } = action.payload;

      state.strength = strength;
      state.dexterity = dexterity;
      state.faith = faith;
      state.intelligence = intelligence;
    },
  },
});

export const { setRequirements } = requirementsSlice.actions;

export default requirementsSlice.reducer;

export const selectStrength = (state) => state.requirements.strength;
export const selectDexterity = (state) => state.requirements.dexterity;
export const selectIntelligence = (state) => state.requirements.faith;
export const selectFaith = (state) => state.requirements.intelligence;
