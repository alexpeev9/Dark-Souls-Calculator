import { createSlice } from '@reduxjs/toolkit';

const filteredWeaponsSlice = createSlice({
  name: 'filteredWeapons',
  initialState: {
    sortedCategory: { requirementValue: 'name', isAscValue: true },
  },
  reducers: {
    setWeapons: (state: any, action: any) => {
      state.categories = action.payload;
      state.current = null;
    },
    setCurrent: (state: any, action: any) => {
      let currentWeapon = { ...action.payload };

      const { requirementValue, isAscValue }: any = {
        ...state.sortedCategory,
      };

      if (requirementValue !== 'name' || !isAscValue) {
        if (requirementValue === 'name') {
          if (isAscValue) {
            // set to desc
            currentWeapon.weapons = currentWeapon.weapons
              .slice()
              .sort((a: any, b: any) => b.name.localeCompare(a.name));
          } else {
            // set to asc
            currentWeapon.weapons = currentWeapon.weapons
              .slice()
              .sort((a: any, b: any) => a.name.localeCompare(b.name));
          }
        } else {
          if (isAscValue) {
            // set to desc
            currentWeapon.weapons = currentWeapon.weapons
              .slice()
              .sort(
                (a: any, b: any) =>
                  b.requirements[requirementValue] -
                  a.requirements[requirementValue]
              );
          } else {
            // set to asc
            currentWeapon.weapons = currentWeapon.weapons
              .slice()
              .sort(
                (a: any, b: any) =>
                  a.requirements[requirementValue] -
                  b.requirements[requirementValue]
              );
          }
        }
      }
      state.current = currentWeapon;
    },
    sortWeapons: (state: any, action: any) => {
      const requirement = action.payload;
      if (state.sortedCategory.requirementValue !== requirement) {
        state.sortedCategory.isAscValue = false;
      }

      if (requirement === 'name') {
        if (state.sortedCategory.isAscValue) {
          // set to desc
          state.current.weapons = state.current.weapons.sort((a: any, b: any) =>
            b[requirement].localeCompare(a[requirement])
          );
          state.sortedCategory = {
            requirementValue: requirement,
            isAscValue: false,
          };
        } else {
          // set to asc
          state.current.weapons = state.current.weapons.sort((a: any, b: any) =>
            a[requirement].localeCompare(b[requirement])
          );
          state.sortedCategory = {
            requirementValue: requirement,
            isAscValue: true,
          };
        }
      } else {
        if (state.sortedCategory.isAscValue) {
          // set to asc
          state.current.weapons = state.current.weapons.sort(
            (a: any, b: any) =>
              a.requirements[requirement] - b.requirements[requirement]
          );
          state.sortedCategory = {
            requirementValue: requirement,
            isAscValue: false,
          };
        } else {
          // set to desc
          state.current.weapons = state.current.weapons.sort(
            (a: any, b: any) =>
              b.requirements[requirement] - a.requirements[requirement]
          );
          state.sortedCategory = {
            requirementValue: requirement,
            isAscValue: true,
          };
        }
      }
    },
  },
});

export const { setWeapons, setCurrent, sortWeapons } =
  filteredWeaponsSlice.actions;

export default filteredWeaponsSlice.reducer;

export const selectFilteredCategories = (state: any) =>
  state.filteredWeapons.categories;
export const selectCurrent = (state: any) => state.filteredWeapons.current;
export const selectSortedCategory = (state: any) =>
  state.filteredWeapons.sortedCategory;
