import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import styled from 'styled-components/macro';

import {
  selectCurrent,
  selectFilteredCategories,
  setCurrent,
} from '../../../../store/slices/filteredWeaponsSlice';
import FilteredWeapons from './FilteredWeapons';

const FilteredCategories = () => {
  const categories = useSelector(selectFilteredCategories);

  const currentCategory = useSelector(selectCurrent);

  const dispatch = useDispatch();

  const getClassActive = (category: any) => {
    return currentCategory === category ? 'active' : undefined;
  };

  const onButtonClick = (event: any, category: any) => {
    event.preventDefault();
    dispatch(setCurrent(category));
  };

  const loadImage = (url: any) => {
    try {
      return require(`../../../../assets/images/weapons/${url}`);
    } catch (err) {
      return require(`../../../../assets/images/weapons/not_found.png`);
    }
  };

  return categories ? (
    <ResultWrapper>
      <FilterWrapper>
        <FilteredTitle>Filtered Weapons:</FilteredTitle>
        <ButtonSection>
          {categories.map((category: any, i: any) => (
            <ButtonElement
              key={i}
              onClick={(event) => onButtonClick(event, category)}
              className={getClassActive(category)}
            >
              <ImageElement
                src={loadImage(category.imageUrl)}
                alt={category.name}
              />
              <ElementTitle>
                {category.name} ({category.weapons.length})
              </ElementTitle>
            </ButtonElement>
          ))}
        </ButtonSection>
      </FilterWrapper>
      <FilteredWeapons />
    </ResultWrapper>
  ) : (
    <></>
  );
};

export default FilteredCategories;

const ResultWrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: row;

  @media only screen and (max-width: 1500px) {
    flex-direction: column;
    /* flex-grow: 100; */
    width: 100%;
  }
`;

const FilterWrapper = styled.article`
  align-items: center;
  height: 100vh;
  width: 18rem;
  display: flex;
  flex-direction: column;
  background-color: #414855;
  font-family: 'Optimus Princeps';
  opacity: 90%;
  padding: 0 1.5rem 0 1.5rem;

  @media only screen and (max-width: 1500px) {
    height: 42vh;
    width: 100%;
    padding: 0;
  }
  @media only screen and (max-width: 900px) {
    padding: 0;
    width: auto;
  }
`;

const FilteredTitle = styled.h1`
  font-size: 2rem;
  margin: 1rem 0 1rem 0;
  color: #f2b524;
  @media only screen and (max-width: 900px) {
    background-color: #f2b524;
    color: black;
    border-radius: 1rem 1rem 0 0;
    width: 100%;
    text-align: center;
    padding: 1rem 0;
    margin: 0;
  }
`;

const ButtonSection = styled.section`
  overflow: auto;
  margin: 0.7rem 0.7rem 0.7rem 0.7rem;
  padding: 0.3rem;
  border-radius: 1rem;
  background-color: #f2b524;

  ::-webkit-scrollbar {
    width: 2rem;
    border: solid #414855;
    border-width: 0.3rem 0.2rem 0.2rem 0.2rem;
    border-radius: 1rem;
  }
  ::-webkit-scrollbar-thumb {
    height: 5rem;
    background-color: #414855;
    border: 0.2rem solid #f2b524;
    border-radius: 1rem;
  }

  @media only screen and (max-width: 1500px) {
    padding: 0;
    margin: 0 0 1rem 0;
    width: 90%;
  }

  @media only screen and (max-width: 900px) {
    border-radius: 0;
    margin: 0rem;
    padding: 1rem 0rem;
    width: 100%;
  }
`;

const ButtonElement = styled.button`
  min-width: 15.5rem;
  display: flex;
  align-items: center;
  justify-content: left;
  font-family: 'Optimus Princeps';
  background-color: transparent;
  text-decoration: none;
  color: black;
  font-size: 1.5rem;
  font-weight: bold;
  padding: 0.8rem 0;
  border: 0.3rem solid #f2b524;

  &:hover {
    cursor: pointer;
    background-color: #414855;
    color: #f2b524;
    border-radius: 1rem;
  }

  &.active {
    cursor: pointer;
    background-color: #414855;
    color: #f2b524;
    border-radius: 1rem;
  }

  @media only screen and (max-width: 1500px) {
    width: 100%;
    padding: 0.2rem 0;
  }
`;

const ImageElement = styled.img``;

const ElementTitle = styled.p`
  padding: 0;
  margin: 0;
  text-align: left;
`;