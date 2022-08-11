import React from 'react';
import styled from 'styled-components/macro';
import {
  AttackTypeIcon,
  DurabilityIcon,
  WeightIcon,
} from '../../../../../assets/images/icons/stats';
import InfoBullet from './InfoBullet';

const GeneralInfo = ({ category }: any) => {
  return (
    <>
      <InfoSection>
        <SecondTitle>Information</SecondTitle>
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

const SecondTitle = styled.h3`
  margin: 0;
  text-align: center;
`;
