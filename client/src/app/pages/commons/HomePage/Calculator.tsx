import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components/macro';

import { useSearchAllWeaponsMutation } from '../../../../store/api/weaponEndpoints';
import { setWeapons } from '../../../../store/slices/filteredWeaponsSlice';
import {
  selectStrength,
  selectDexterity,
  selectFaith,
  selectIntelligence,
  setRequirements,
} from '../../../../store/slices/requirementsSlice';

import errorHandler from '../../../utils/errorHandler';
import {
  DexterityIcon,
  FaithIcon,
  IntelligenceIcon,
  StrengthIcon,
} from '../../../../assets/images/icons/requirements';
import CalculatorField from './CalculatorField';
import FilteredCategories from './FilteredCategories';
import ErrorBox from '../../../components/ErrorMsg/ErrorBox';

const Calculator = () => {
  const [strength, setStrength] = useState(useSelector(selectStrength));
  const [dexterity, setDexterity] = useState(useSelector(selectDexterity));
  const [faith, setFaith] = useState(useSelector(selectFaith));
  const [intelligence, setIntelligence] = useState(
    useSelector(selectIntelligence)
  );
  const dispatch = useDispatch();

  const [searchAllWeapons, { isLoading, isSuccess, isError, error }] =
    useSearchAllWeaponsMutation();

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const data = await searchAllWeapons({
        strength,
        dexterity,
        faith,
        intelligence,
      }).unwrap();
      dispatch(setWeapons(data));
      dispatch(setRequirements({ strength, dexterity, faith, intelligence }));
    } catch (err) {
      console.log(errorHandler(err));
    }
  };

  const handleStrengthInput = (e: any) => setStrength(Number(e.target.value));
  const handleDexterityInput = (e: any) => setDexterity(Number(e.target.value));
  const handleIntelligenceInput = (e: any) =>
    setIntelligence(Number(e.target.value));
  const handleFaithInput = (e: any) => setFaith(Number(e.target.value));

  let content = <></>;
  if (isLoading) {
    content = <></>;
  } else if (isSuccess) {
    content = <FilteredCategories />;
  } else if (isError) {
    content = <></>;
    content = <ErrorBox error={error} />;
  }

  return (
    <>
      <CalculatorWrapper>
        <CalculatorArticle>
          <CalculatorTitle>Calculator:</CalculatorTitle>
          <CalculatorParagraph>
            Add your build and the calculator will filter all the weapons you
            can wield.
          </CalculatorParagraph>
        </CalculatorArticle>
        <FormWrapper onSubmit={handleSubmit}>
          <ButtonElement type='submit'>Filter</ButtonElement>
          <CalculatorField
            name='Strength'
            value={strength}
            onInputChange={handleStrengthInput}
            Icon={StrengthIcon}
          />
          <CalculatorField
            name='Dexterity'
            value={dexterity}
            onInputChange={handleDexterityInput}
            Icon={DexterityIcon}
          />
          <CalculatorField
            name='Intelligence'
            value={intelligence}
            onInputChange={handleIntelligenceInput}
            Icon={IntelligenceIcon}
          />
          <CalculatorField
            name='Faith'
            value={faith}
            onInputChange={handleFaithInput}
            Icon={FaithIcon}
          />
        </FormWrapper>
      </CalculatorWrapper>
      {content}
    </>
  );
};

export default Calculator;

const CalculatorWrapper = styled.main`
  width: min-content;
  align-items: center;
  height: 100vh;
  font-family: 'Optimus Princeps SemiBold';
  display: flex;
  flex-direction: column;
  background-color: ${(p) => p.theme.primary};
  opacity: 90%;
  padding-top: 2rem;
  padding: 0 0.8rem;

  @media only screen and (max-width: 1600px) {
    width: min-content;
  }

  @media only screen and (max-width: 1000px) {
    padding: 0;
    width: 100%;
    height: min-content;
  }
`;

const CalculatorArticle = styled.article`
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 1000px) {
    width: 100%;
    justify-content: center;
    align-items: center;
  }
`;

const CalculatorTitle = styled.h1`
  font-size: 2rem;
  margin: 1rem 0.5rem;
  margin-bottom: 0;
`;

const CalculatorParagraph = styled.p`
  margin: 0;
  margin: 0 0.5rem 0.5rem 0.5rem;
  @media only screen and (max-width: 1000px) {
    width: 50%;
  }
`;

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(p) => p.theme.secondary};
  border-radius: 1rem;
  padding: 1rem 0rem 1rem 0;
  height: max-content;

  @media only screen and (max-width: 1600px) {
    width: max-content;
    overflow: auto;

    ::-webkit-scrollbar {
      width: 2rem;
      border: solid ${(p) => p.theme.primary};
      border-width: 0.3rem 0.2rem 0.2rem 0.2rem;
      border-radius: 1rem;
    }
    ::-webkit-scrollbar-thumb {
      height: 5rem;
      background-color: ${(p) => p.theme.primary};
      border: 0.2rem solid ${(p) => p.theme.secondary};
      border-radius: 1rem;
    }
  }

  @media only screen and (max-width: 1000px) {
    display: grid;
    justify-content: center;
    align-items: center;
    grid-template-areas: 'button button';
    border-radius: 0.5rem 0.5rem 0 0;
    width: 100%;
  }

  @media only screen and (max-width: 600px) {
    display: flex;
    justify-content: normal;
  }
`;

const ButtonElement = styled.button`
  font-family: 'Optimus Princeps SemiBold';
  margin-bottom: 0.8rem;
  padding: 0.3rem 1.2rem;
  border-radius: 0.8rem;
  background-color: ${(p) => p.theme.primary};
  text-decoration: none;
  color: black;
  font-size: 1.8rem;
  font-weight: bold;
  border: 0.3rem solid ${(p) => p.theme.primary};

  &:hover {
    cursor: pointer;
    background-color: ${(p) => p.theme.secondary};
    color: ${(p) => p.theme.primary};
    border: 0.3rem solid ${(p) => p.theme.primary};
  }

  @media only screen and (max-width: 1000px) {
    width: 100%;
    grid-area: button;
  }

  @media only screen and (max-width: 600px) {
    width: auto;
    grid-area: none;
  }
`;
