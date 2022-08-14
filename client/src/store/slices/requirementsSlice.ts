import { createSlice } from '@reduxjs/toolkit';

const requirementsSlice = createSlice({
  name: 'requirements',
  initialState: {
    strength: 15,
    dexterity: 18,
    faith: 12,
    intelligence: 10,
  },
  reducers: {
    setRequirements: (state: any, action: any) => {
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

export const selectStrength = (state: any) => state.requirements.strength;
export const selectDexterity = (state: any) => state.requirements.dexterity;
export const selectFaith = (state: any) => state.requirements.faith;
export const selectIntelligence = (state: any) =>
  state.requirements.intelligence;
