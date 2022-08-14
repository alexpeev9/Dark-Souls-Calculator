import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

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
import H2 from '../../../components/elements/H2';
import Form from '../../../components/elements/Form';
import Button from '../../../components/elements/Button';
import Article from '../../../components/elements/Article';
import P from '../../../components/elements/P';

const Calculator = () => {
  const dispatch = useDispatch();
  const [searchAllWeapons, { isLoading, isSuccess, isError, error }] =
    useSearchAllWeaponsMutation();

  const [strength, setStrength] = useState(useSelector(selectStrength));
  const [dexterity, setDexterity] = useState(useSelector(selectDexterity));
  const [faith, setFaith] = useState(useSelector(selectFaith));
  const [intelligence, setIntelligence] = useState(
    useSelector(selectIntelligence)
  );

  const handleStrengthInput = (e: any) => setStrength(Number(e.target.value));
  const handleDexterityInput = (e: any) => setDexterity(Number(e.target.value));
  const handleIntelligenceInput = (e: any) =>
    setIntelligence(Number(e.target.value));
  const handleFaithInput = (e: any) => setFaith(Number(e.target.value));

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
        <Article>
          <H2>Calculator:</H2>
          <P>
            Enter your build stats and you will see all the weapons you can
            wield.
          </P>
        </Article>
        <Form onSubmit={handleSubmit}>
          <Button type='submit'>Filter</Button>
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
        </Form>
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

  ${Button} {
    font-family: 'Optimus Princeps SemiBold';
    margin-bottom: 0.8rem;
    padding: 0.3rem 1.2rem;

    @media only screen and (max-width: 1000px) {
      width: 100%;
      grid-area: button;
    }

    @media only screen and (max-width: 600px) {
      width: auto;
      grid-area: none;
    }
  }
`;
