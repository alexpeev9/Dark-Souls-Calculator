import { useParams } from 'react-router-dom';
import { useGetWeaponDetailsQuery } from '../../../../store/api/weaponEndpoints';
import {
  FireIcon,
  LightningIcon,
  MagicIcon,
  PhysicalIcon,
} from '../../../../assets/images/icons/damage';
import {
  AttackTypeIcon,
  DurabilityIcon,
  WeightIcon,
} from '../../../../assets/images/icons/stats';
import {
  StrengthIcon,
  DexterityIcon,
  IntelligenceIcon,
} from '../../../../assets/images/icons/requirements';

import styled from 'styled-components/macro';
import ErrorMsg from '../../../components/ErrorMsg';
import errorHandler from '../../../utils/errorHandler';
import { Helmet } from 'react-helmet-async';
import WeaponImage from './WeaponImage';
import GeneralInfo from './WeaponInfo/GeneralInfo';
import DamageInfo from './WeaponInfo/DamageInfo';
import RequirementInfo from './RequirementInfo';

const WeaponDetailsPage = () => {
  const { categoryName, weaponName } = useParams();
  const {
    data: category,
    isLoading,
    isSuccess,
    isError,
    error,
  }: any = useGetWeaponDetailsQuery({
    categoryName,
    weaponName,
  });
  let content = <></>;
  if (isLoading) {
    content = <p>"Loading..."</p>;
  } else if (isSuccess) {
    content = (
      <>
        <Helmet>
          <title>{category.name}</title>
          <meta
            name='description'
            content='See all the details about the weapon!'
          />
        </Helmet>
        <DetailsWrapper>
          <DetailsInfo>
            <InformationWrapper>
              <WeaponImage category={category} />
              <InfoTwoWrapper>
                <GeneralInfo category={category} />
                <DamageInfo damage={category.damage} />
              </InfoTwoWrapper>
            </InformationWrapper>
            <RequirementInfo
              requirements={category.requirements}
              bonus={category.bonus}
            />
          </DetailsInfo>
        </DetailsWrapper>
      </>
    );
  } else if (isError) {
    content = <ErrorMsg>{errorHandler(error)}</ErrorMsg>;
  }
  return content;
};

export default WeaponDetailsPage;

const DetailsInfo = styled.section`
  @media only screen and (max-width: 1600px) {
    height: 95%;
    margin: 1rem 2rem 0.5rem 2.5rem;
    background-color: #f2b524;
    border-radius: 1rem;
  }
  @media only screen and (max-height: 1000px) and (min-width: 1000px) {
    overflow: auto;

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
  }
`;

const InformationWrapper = styled.section`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  margin: 1rem;
  background-color: #f2b524;
  border-radius: 1rem;
`;

const InfoTwoWrapper = styled.section`
  display: flex;
  justify-content: space-evenly;

  @media only screen and (max-width: 1000px) {
    flex-direction: column;
  }
`;

const DetailsWrapper = styled.section`
  width: 50%;
  background-color: #414855;
  font-family: 'Optimus Princeps';
  padding: 5rem 1.5rem 0rem 1.5rem;

  @media only screen and (max-width: 1600px) {
    width: 100%;
    height: 58vh;
    padding: 0;
  }
  @media only screen and (max-width: 1000px) {
    width: auto;
    height: auto;
  }
`;
