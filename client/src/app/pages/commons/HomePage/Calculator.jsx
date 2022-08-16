import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

import { useSearchWeaponsMutation } from '../../../../api/weaponApi';
import { setWeapons } from '../../../../state/searchSlice';
import {
  selectStrength,
  selectDexterity,
  selectFaith,
  selectIntelligence,
  setRequirements,
} from '../../../../state/requirementsSlice';
import RequirementField from './RequirementField';
import FilteredWeapons from './FilteredWeapons';
import WeaponSection from './WeaponSection';

const Calculator = () => {
  const [strength, setStrength] = useState(useSelector(selectStrength));
  const [dexterity, setDexterity] = useState(useSelector(selectDexterity));
  const [faith, setFaith] = useState(useSelector(selectFaith));
  const [intelligence, setIntelligence] = useState(
    useSelector(selectIntelligence)
  );

  const dispatch = useDispatch();

  const [searchWeapons] = useSearchWeaponsMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = await searchWeapons({
        strength,
        dexterity,
        faith,
        intelligence,
      }).unwrap();
      dispatch(setWeapons(data));
      dispatch(setRequirements({ strength, dexterity, faith, intelligence }));
    } catch (err) {
      console.log(err.message);
    }
  };

  const handleStrengthInput = (e) => setStrength(Number(e.target.value));
  const handleDexterityInput = (e) => setDexterity(Number(e.target.value));
  const handleIntelligenceInput = (e) =>
    setIntelligence(Number(e.target.value));
  const handleFaithInput = (e) => setFaith(Number(e.target.value));

  return (
    <>
      <CalculatorWrapper>
        <CalculatorArticle>
          <CalculatorTitle>Calculator:</CalculatorTitle>
          <CalculatorParagraph>
            Add your build and the calculator will filter all the weapons you
            can wield.
            {/* Welcome to the Dark Souls Calculator. Here, you can put your current
          or future build, and the calculator will filter all the weapons you
          can carry. */}
          </CalculatorParagraph>
        </CalculatorArticle>
        <FormWrapper onSubmit={handleSubmit}>
          <ButtonElement type='submit'>Filter</ButtonElement>
          <RequirementField
            name='Strength'
            requirement={strength}
            onRequirementChange={handleStrengthInput}
          />

          <RequirementField
            name='Dexterity'
            requirement={dexterity}
            onRequirementChange={handleDexterityInput}
          />

          <RequirementField
            name='Intelligence'
            requirement={intelligence}
            onRequirementChange={handleIntelligenceInput}
          />

          <RequirementField
            name='Faith'
            requirement={faith}
            onRequirementChange={handleFaithInput}
          />
        </FormWrapper>
      </CalculatorWrapper>
      <ResultWrapper>
        <FilteredWeapons />
        <WeaponSection />
      </ResultWrapper>
    </>
  );
};

export default Calculator;

const CalculatorWrapper = styled.article`
  width: 29rem;
  align-items: center;
  height: 100vh;
  font-family: 'Optimus Princeps SemiBold';
  display: flex;
  flex-direction: column;
  background-color: #f2b524;
  opacity: 90%;
  padding-top: 2rem;
  padding: 0 0.8rem;

  @media only screen and (max-width: 1500px) {
    width: min-content;
  }

  @media only screen and (max-width: 900px) {
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
  @media only screen and (max-width: 900px) {
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
  @media only screen and (max-width: 900px) {
    width: 50%;
  }
`;

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #414855;
  border-radius: 1rem;
  padding: 1rem 0rem 1rem 0;
  height: max-content;

  @media only screen and (max-width: 1500px) {
    width: max-content;
    overflow: auto;

    ::-webkit-scrollbar {
      width: 2rem;
      border: solid #f2b524;
      border-width: 0.3rem 0.2rem 0.2rem 0.2rem;
      border-radius: 1rem;
    }
    ::-webkit-scrollbar-thumb {
      height: 5rem;
      background-color: #f2b524;
      border: 0.2rem solid #414855;
      border-radius: 1rem;
    }
  }

  @media only screen and (max-width: 900px) {
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
  background-color: #f2b524;
  text-decoration: none;
  color: black;
  font-size: 1.8rem;
  font-weight: bold;
  border: 0.3rem solid #f2b524;

  &:hover {
    cursor: pointer;
    background-color: #414855;
    color: #f2b524;
    border: 0.3rem solid #f2b524;
  }

  @media only screen and (max-width: 900px) {
    width: 100%;
    grid-area: button;
  }

  @media only screen and (max-width: 600px) {
    width: auto;
    grid-area: none;
  }
`;

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
