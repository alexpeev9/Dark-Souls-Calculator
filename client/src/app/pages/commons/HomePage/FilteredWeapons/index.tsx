import styled from 'styled-components/macro';
import { useSelector } from 'react-redux';

import {
  selectCurrent,
  selectSortedCategory,
} from '../../../../../store/slices/filteredWeaponsSlice';
import TableHeader from './TableHeader';
import WeaponDetails from './WeaponDetails';

const FilteredWeapons = () => {
  const currentCategory: any = useSelector(selectCurrent);
  const sortedCategory: any = useSelector(selectSortedCategory);

  return (
    <>
      {currentCategory && sortedCategory ? (
        <WeaponSectionWrapper>
          <NavigationSection>
            <NavigationTitle>{currentCategory.name}:</NavigationTitle>
            <ButtonWrapper>
              <TableHeader
                requirement={'name'}
                shortName={'Weapon'}
                sortedCategory={sortedCategory}
              />
              <TableHeader
                requirement={'strength'}
                shortName={'STR'}
                sortedCategory={sortedCategory}
              />
              <TableHeader
                requirement={'dexterity'}
                shortName={'DEX'}
                sortedCategory={sortedCategory}
              />
              <TableHeader
                requirement={'intelligence'}
                shortName={'INT'}
                sortedCategory={sortedCategory}
              />
              <TableHeader
                requirement={'faith'}
                shortName={'FAITH'}
                sortedCategory={sortedCategory}
              />
            </ButtonWrapper>
          </NavigationSection>
          <WeaponSectionElement>
            {currentCategory.weapons.map((weapon: any, i: any) => (
              <WeaponDetails
                key={i}
                weapon={weapon}
                categoryId={currentCategory.customId}
              />
            ))}
          </WeaponSectionElement>
        </WeaponSectionWrapper>
      ) : (
        <></>
      )}
    </>
  );
};

export default FilteredWeapons;

const WeaponSectionWrapper = styled.section`
  align-items: left;
  display: flex;
  height: 100vh;
  width: 100%;
  flex-direction: column;
  justify-content: top;
  opacity: 90%;
  background-color: #f2b524;
  padding: 0;

  @media only screen and (max-width: 1600px) {
    height: 58vh;
  }

  @media only screen and (max-width: 1000px) {
    padding-top: 2rem;
    justify-content: center;
    display: flex;
    flex-direction: row;
  }
`;

const NavigationSection = styled.section`
  padding: 0;
  margin: 0;
`;
const NavigationTitle = styled.h2`
  font-size: 2rem;
  padding: 1rem 0 1rem;
  margin: 0;
  text-align: center;

  @media only screen and (max-width: 1000px) {
    display: none;
  }
`;
const ButtonWrapper = styled.span`
  background-color: #414855;
  margin: 0 2.5rem 0 2.5rem;
  padding: 0.7rem 0;
  border-radius: 1.5rem 1.5rem 0 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  @media only screen and (max-width: 1000px) {
    padding-top: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0;
    border-radius: 1.5rem 0 0 1.5rem;
    height: 22.3rem;
  }
`;
const WeaponSectionElement = styled.section`
  overflow: auto;
  margin: 0 2.5rem 1.5rem 2.5rem;
  border: solid #414855;
  border-width: 0 0.5rem 0.5rem 0.5rem;
  border-radius: 0 0 1rem 1rem;

  ::-webkit-scrollbar {
    background-color: #f2b524;
    width: 2rem;
    border: solid #414855;
    border-radius: 1rem;
    border-width: 0.3rem 0.2rem 0.2rem 0.2rem;
  }
  ::-webkit-scrollbar-thumb {
    height: 5rem;
    background-color: #414855;
    border-radius: 1rem;
    border: solid #f2b524;
  }

  @media only screen and (max-width: 1000px) {
    border-width: 0.5rem 0.5rem 0.5rem 0.5rem;
    border-radius: 0 1rem 1rem 0;
    margin: 0;
    height: 22rem;
  }
`;
