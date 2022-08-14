import styled from 'styled-components';
import { useSelector } from 'react-redux';

import {
  selectCurrent,
  selectSortedCategory,
} from '../../../../../store/slices/filteredWeaponsSlice';
import TableHeader from './TableHeader';
import WeaponDetails from './WeaponDetails';
import H2 from '../../../../components/elements/H2';
import {
  DexterityIcon,
  FaithIcon,
  IntelligenceIcon,
  StrengthIcon,
} from '../../../../../assets/images/icons/requirements';

const FilteredWeapons = () => {
  const currentCategory: any = useSelector(selectCurrent);
  const sortedCategory: any = useSelector(selectSortedCategory);

  return (
    <>
      {currentCategory && sortedCategory ? (
        <WeaponSectionWrapper>
          <NavigationSection>
            <H2>{currentCategory.name}:</H2>
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
                icon={StrengthIcon}
              />
              <TableHeader
                requirement={'dexterity'}
                shortName={'DEX'}
                sortedCategory={sortedCategory}
                icon={DexterityIcon}
              />
              <TableHeader
                requirement={'intelligence'}
                shortName={'INT'}
                sortedCategory={sortedCategory}
                icon={IntelligenceIcon}
              />
              <TableHeader
                requirement={'faith'}
                shortName={'FAITH'}
                sortedCategory={sortedCategory}
                icon={FaithIcon}
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
  background-color: ${(p) => p.theme.primary};
  padding: 0;

  @media only screen and (max-width: 1600px) {
    height: 58vh;
  }
`;

const NavigationSection = styled.section`
  padding: 0;
  margin: 0;
`;

const ButtonWrapper = styled.span`
  background-color: ${(p) => p.theme.secondary};
  margin: 0 2.5rem 0 2.5rem;
  padding: 0.7rem 0;
  border-radius: 1.5rem 1.5rem 0 0;
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;

  @media only screen and (max-width: 1000px) {
    width: 100%;
    padding: 1rem 0;
    margin: 0;
    display: flex;
    justify-content: center;
  }
`;
const WeaponSectionElement = styled.section`
  overflow: auto;
  margin: 0 2.5rem 1.5rem 2.5rem;
  border: solid ${(p) => p.theme.secondary};
  border-width: 0 0.5rem 0.5rem 0.5rem;
  border-radius: 0 0 1rem 1rem;

  ::-webkit-scrollbar {
    background-color: ${(p) => p.theme.primary};
    width: 2rem;
    border: solid ${(p) => p.theme.secondary};
    border-radius: 1rem;
    border-width: 0.3rem 0.2rem 0.2rem 0.2rem;
  }
  ::-webkit-scrollbar-thumb {
    height: 5rem;
    background-color: ${(p) => p.theme.secondary};
    border-radius: 1rem;
    border: solid ${(p) => p.theme.primary};
  }
  @media only screen and (max-width: 1000px) {
    width: 100%;
    padding: 0;
    margin: 0;
    border-radius: 0;
    border-width: 0;
  }
`;
