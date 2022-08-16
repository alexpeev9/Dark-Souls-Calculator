import styled from 'styled-components';
import { useSelector } from 'react-redux';

import TableRow from './WeaponDetails';
import { selectCurrent, selectSortedType } from '../../../../state/searchSlice';
import WeaponTableHeader from './WeaponTableHeader';

const WeaponSection = () => {
  const currentType = useSelector(selectCurrent);
  const sortedType = useSelector(selectSortedType);

  return (
    <>
      {currentType && sortedType ? (
        <WeaponSectionWrapper>
          <NavigationSection>
            <NavigationTitle>{currentType.name}:</NavigationTitle>
            <NavigationWrapper>
              <WeaponTableHeader
                requirement={'name'}
                shortName={'Weapon'}
                sortedType={sortedType}
              />
              <WeaponTableHeader
                requirement={'strength'}
                shortName={'STR'}
                sortedType={sortedType}
              />
              <WeaponTableHeader
                requirement={'dexterity'}
                shortName={'DEX'}
                sortedType={sortedType}
              />
              <WeaponTableHeader
                requirement={'intelligence'}
                shortName={'INT'}
                sortedType={sortedType}
              />
              <WeaponTableHeader
                requirement={'faith'}
                shortName={'FAITH'}
                sortedType={sortedType}
              />
            </NavigationWrapper>
          </NavigationSection>
          <WeaponSectionElement>
            {currentType.weapons.map((weapon, i) => (
              <TableRow key={i} weapon={weapon} typeid={currentType.id} />
            ))}
          </WeaponSectionElement>
        </WeaponSectionWrapper>
      ) : (
        <></>
      )}
    </>
  );
};

export default WeaponSection;

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

  @media only screen and (max-width: 1500px) {
    height: 58vh;
  }

  @media only screen and (max-width: 900px) {
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
const NavigationTitle = styled.h3`
  padding: 1rem 0 1rem;
  margin: 0;
  text-align: center;

  @media only screen and (max-width: 900px) {
    display: none;
  }
`;
const NavigationWrapper = styled.section`
  background-color: 414855;
  margin: 0 2.5rem 0 2.5rem;
  padding: 0.7rem 0;
  border-radius: 1.5rem 1.5rem 0 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  @media only screen and (max-width: 900px) {
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

  @media only screen and (max-width: 900px) {
    border-width: 0.5rem 0.5rem 0.5rem 0.5rem;
    border-radius: 0 1rem 1rem 0;
    margin: 0;
    height: 22rem;
  }
`;
