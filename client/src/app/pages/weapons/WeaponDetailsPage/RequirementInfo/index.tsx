import styled from 'styled-components/macro';
import {
  DexterityIcon,
  StrengthIcon,
  IntelligenceIcon,
  FaithIcon,
} from '../../../../../assets/images/icons/requirements';
import VerticalInfoBullet from './VerticalInfoBullet';

const RequirementInfo = ({ requirements, bonus }: any) => {
  return (
    <InfoWrapper>
      <SecondTitle>Requirements & Bonus</SecondTitle>
      <RequirementsWrapper>
        <VerticalInfoBullet
          name='Strength'
          requirement={requirements.strength}
          bonus={bonus.strength}
          icon={StrengthIcon}
        />
        <VerticalInfoBullet
          name='Dexterity'
          requirement={requirements.dexterity}
          bonus={bonus.dexterity}
          icon={DexterityIcon}
        />
        <VerticalInfoBullet
          name='Intelligence'
          requirement={requirements.intelligence}
          bonus={bonus.intelligence}
          icon={IntelligenceIcon}
        />
        <VerticalInfoBullet
          name='Faith'
          requirement={requirements.faith}
          bonus={bonus.faith}
          icon={FaithIcon}
        />
      </RequirementsWrapper>
    </InfoWrapper>
  );
};

export default RequirementInfo;

const SecondTitle = styled.h3`
  margin: 0;
  text-align: center;
`;

const InfoWrapper = styled.section`
  background-color: #f2b524;
  margin: 1rem;
  padding: 1rem;
  padding: 0.5rem;
  border-radius: 1rem;
`;

const RequirementsWrapper = styled.section`
  display: grid;
  grid-auto-flow: column;
  @media only screen and (max-width: 700px) {
    grid-auto-flow: row;
    grid-template-columns: 1fr 1fr;
  }
  @media only screen and (max-width: 350px) {
    grid-template-columns: 1fr;
  }
`;
