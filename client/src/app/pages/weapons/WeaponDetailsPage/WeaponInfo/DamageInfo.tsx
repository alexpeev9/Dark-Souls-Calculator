import styled from 'styled-components/macro';
import {
  FireIcon,
  LightningIcon,
  MagicIcon,
  PhysicalIcon,
} from '../../../../../assets/images/icons/damage';
import H3 from '../../../../components/elements/H3';
import InfoBullet from './InfoBullet';

const DamageInfo = ({ damage }: any) => {
  return (
    <InfoSection>
      <H3>Attack Damage</H3>
      <InfoBullet
        name='Physical Damage'
        value={damage.physical}
        icon={PhysicalIcon}
      />
      <InfoBullet name='Magic Damage' value={damage.magic} icon={MagicIcon} />
      <InfoBullet name='Fire Damage' value={damage.fire} icon={FireIcon} />
      <InfoBullet
        name='Lightning Damage'
        value={damage.lightning}
        icon={LightningIcon}
      />
    </InfoSection>
  );
};

export default DamageInfo;

const InfoSection = styled.section`
  display: grid;

  @media only screen and (max-width: 1600px) {
    display: flex;
    flex-direction: column;
  }
`;
