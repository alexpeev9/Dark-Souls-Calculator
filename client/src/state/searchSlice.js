import { createSlice } from '@reduxjs/toolkit';

const searchSlice = createSlice({
  name: 'filteredTypes',
  initialState: {
    sortedType: { requirementValue: 'name', isAscValue: true },
  },
  reducers: {
    setWeapons: (state, action) => {
      state.types = action.payload;
      state.current = null;
    },
    setCurrent: (state, action) => {
      let currentWeapon = { ...action.payload };

      const { requirementValue, isAscValue } = { ...state.sortedType };

      if (requirementValue !== 'name' || !isAscValue) {
        if (requirementValue === 'name') {
          if (isAscValue) {
            // set to desc
            currentWeapon.weapons = currentWeapon.weapons
              .slice()
              .sort((a, b) => b.name.localeCompare(a.name));
          } else {
            // set to asc
            currentWeapon.weapons = currentWeapon.weapons
              .slice()
              .sort((a, b) => a.name.localeCompare(b.name));
          }
        } else {
          if (isAscValue) {
            // set to desc
            currentWeapon.weapons = currentWeapon.weapons
              .slice()
              .sort(
                (a, b) =>
                  b.requirements[requirementValue] -
                  a.requirements[requirementValue]
              );
          } else {
            // set to asc
            currentWeapon.weapons = currentWeapon.weapons
              .slice()
              .sort(
                (a, b) =>
                  a.requirements[requirementValue] -
                  b.requirements[requirementValue]
              );
          }
        }
      }
      state.current = currentWeapon;
    },
    sortWeapons: (state, action) => {
      const requirement = action.payload;
      if (state.sortedType.requirementValue !== requirement) {
        state.sortedType.isAscValue = false;
      }

      if (requirement === 'name') {
        if (state.sortedType.isAscValue) {
          // set to desc
          state.current.weapons = state.current.weapons.sort((a, b) =>
            b[requirement].localeCompare(a[requirement])
          );
          state.sortedType = {
            requirementValue: requirement,
            isAscValue: false,
          };
        } else {
          // set to asc
          state.current.weapons = state.current.weapons.sort((a, b) =>
            a[requirement].localeCompare(b[requirement])
          );
          state.sortedType = {
            requirementValue: requirement,
            isAscValue: true,
          };
        }
      } else {
        if (state.sortedType.isAscValue) {
          // set to asc
          state.current.weapons = state.current.weapons.sort(
            (a, b) => a.requirements[requirement] - b.requirements[requirement]
          );
          state.sortedType = {
            requirementValue: requirement,
            isAscValue: false,
          };
        } else {
          // set to desc
          state.current.weapons = state.current.weapons.sort(
            (a, b) => b.requirements[requirement] - a.requirements[requirement]
          );
          state.sortedType = {
            requirementValue: requirement,
            isAscValue: true,
          };
        }
      }
    },
  },
});

export const { setWeapons, setCurrent, sortWeapons } = searchSlice.actions;

export default searchSlice.reducer;

export const selectFilteredTypes = (state) => state.filteredTypes.types;
export const selectCurrent = (state) => state.filteredTypes.current;
export const selectSortedType = (state) => state.filteredTypes.sortedType;
