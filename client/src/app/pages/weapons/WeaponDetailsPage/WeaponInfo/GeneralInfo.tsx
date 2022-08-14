import styled from 'styled-components/macro';
import {
  AttackTypeIcon,
  DurabilityIcon,
  WeightIcon,
} from '../../../../../assets/images/icons/stats';
import H3 from '../../../../components/elements/H3';
import InfoBullet from './InfoBullet';

const GeneralInfo = ({ category }: any) => {
  return (
    <>
      <InfoSection>
        <H3>Information</H3>
        <InfoBullet
          name='Attack Type'
          value={category.attack_type}
          icon={AttackTypeIcon}
        />
        <InfoBullet name='Weight' value={category.weight} icon={WeightIcon} />
        <InfoBullet
          name='Durability'
          value={category.durability}
          icon={DurabilityIcon}
        />
      </InfoSection>
    </>
  );
};

export default GeneralInfo;

const InfoSection = styled.section`
  display: grid;

  @media only screen and (max-width: 1600px) {
    display: flex;
    flex-direction: column;
  }
`;
