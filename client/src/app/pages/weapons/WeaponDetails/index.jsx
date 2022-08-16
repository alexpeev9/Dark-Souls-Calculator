import { useParams } from 'react-router-dom';
import { useGetWeaponDetailsQuery } from '../../../../api/weaponApi';
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
  FaithIcon,
  IntelligenceIcon,
} from '../../../../assets/images/icons/requirements';

import {
  DetailsWrapper,
  SecondTitle,
  InfoWrapper,
  InfoBox,
  ImageIcon,
  TextParagraph,
  TextParagraphLong,
  RequirementsWrapper,
  VerticalInfoBox,
  RequirementTitle,
} from './style';
import styled from 'styled-components';
const WeaponDetails = () => {
  const { typename, weaponname } = useParams();
  const { data, isLoading, isSuccess, isError, error } =
    useGetWeaponDetailsQuery({
      typename,
      weaponname,
    });
  let content;
  if (isLoading) {
    content = <p>"Loading..."</p>;
  } else if (isSuccess) {
    let image;
    try {
      image = require(`../../../../assets/images/weapons/${data?.url}`);
    } catch (err) {
      image = require(`../../../../assets/images/weapons/not_found.png`);
    }
    content = (
      <DetailsWrapper>
        <DetailsInfo>
          <InformationWrapper>
            <ImageSection>
              <ImageElement
                src={image}
                alt={data?.name}
                onError={(event) => (event.target.style.display = 'none')}
              />
              <WeaponTitle>{data?.name}</WeaponTitle>
            </ImageSection>
            <InfoTwoWrapper>
              <InfoSection>
                <SecondTitle>Information</SecondTitle>
                <InfoBox>
                  <ImageIcon src={AttackTypeIcon} alt='Attack Type Icon' />
                  <TextParagraphLong>
                    Attack Type: {data?.attack_type || 'none'}
                  </TextParagraphLong>
                </InfoBox>
                <InfoBox>
                  <ImageIcon src={WeightIcon} alt='Weight Icon' />
                  <TextParagraph>Weight: {data?.weight || '-'}</TextParagraph>
                </InfoBox>
                <InfoBox>
                  <ImageIcon src={DurabilityIcon} alt='Durability Icon' />
                  <TextParagraph>
                    Durability: {data?.durability || '-'}
                  </TextParagraph>
                </InfoBox>
              </InfoSection>
              <InfoSection>
                <SecondTitle>Attack Damage</SecondTitle>
                <InfoBox>
                  <ImageIcon src={PhysicalIcon} alt='Physical Icon' />
                  <TextParagraph>
                    Physical Damage: {data?.damage.physical || '–'}
                  </TextParagraph>
                </InfoBox>
                <InfoBox>
                  <ImageIcon src={MagicIcon} alt='Magic Icon' />
                  <TextParagraph>
                    Magic Damage: {data?.damage.magic || '–'}
                  </TextParagraph>
                </InfoBox>
                <InfoBox>
                  <ImageIcon src={FireIcon} alt='Fire Icon' />
                  <TextParagraph>
                    Fire Damage: {data?.damage.fire || '–'}
                  </TextParagraph>
                </InfoBox>
                <InfoBox>
                  <ImageIcon src={LightningIcon} alt='Lightning Icon' />
                  <TextParagraph>
                    Lightning Damage: {data?.damage.lightning || '–'}
                  </TextParagraph>
                </InfoBox>
              </InfoSection>
            </InfoTwoWrapper>
          </InformationWrapper>
          <InfoWrapper>
            <SecondTitle>Requirements & Bonus</SecondTitle>
            <RequirementsWrapper>
              <VerticalInfoBox>
                <RequirementTitle>Strength</RequirementTitle>
                <ImageIcon src={StrengthIcon} alt='Strength Icon' />
                <TextParagraph>
                  {data?.requirements.strength || '–'}
                </TextParagraph>
                <TextParagraph>{data?.bonus.strength || '–'}</TextParagraph>
              </VerticalInfoBox>
              <VerticalInfoBox>
                <RequirementTitle>Dexterity</RequirementTitle>
                <ImageIcon src={DexterityIcon} alt='Dexterity Icon' />
                <TextParagraph>
                  {data?.requirements.dexterity || '–'}
                </TextParagraph>
                <TextParagraph>{data?.bonus.dexterity || '–'}</TextParagraph>
              </VerticalInfoBox>
              <VerticalInfoBox>
                <RequirementTitle>Intelligence</RequirementTitle>
                <ImageIcon src={IntelligenceIcon} alt='Intelligence Icon' />
                <TextParagraph>
                  {data?.requirements.intelligence || '–'}
                </TextParagraph>
                <TextParagraph>{data?.bonus.intelligence || '–'}</TextParagraph>
              </VerticalInfoBox>
              <VerticalInfoBox>
                <RequirementTitle>Faith</RequirementTitle>
                <ImageIcon src={FaithIcon} alt='Faith Icon' />
                <TextParagraph>{data?.requirements.faith || '–'}</TextParagraph>
                <TextParagraph>{data?.bonus.faith || '–'}</TextParagraph>
              </VerticalInfoBox>
            </RequirementsWrapper>
          </InfoWrapper>
        </DetailsInfo>
      </DetailsWrapper>
    );
  } else if (isError) {
    console.log(error);
  }
  return content;
};

export default WeaponDetails;

const DetailsInfo = styled.section`
  @media only screen and (max-width: 1500px) {
    height: 95%;
    margin: 1rem 2rem 0.5rem 2.5rem;
    background-color: #f2b524;
    border-radius: 1rem;
  }
  @media only screen and (max-height: 1000px) and (min-width: 900px) {
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

const InfoSection = styled.section`
  display: grid;

  @media only screen and (max-width: 1500px) {
    display: flex;
    flex-direction: column;
  }
`;

const InformationWrapper = styled.section`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  margin: 1rem;
  background-color: #f2b524;
  border-radius: 1rem;
  @media only screen and (max-width: 1500px) {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }
  @media only screen and (max-width: 700px) {
    flex-direction: column;
  }
`;

const ImageSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 2rem;
  @media only screen and (max-width: 700px) {
    padding-bottom: 1.5rem;
  }
`;

const InfoTwoWrapper = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;

  @media only screen and (max-width: 900px) {
    flex-direction: column;
  }
`;
const ImageElement = styled.img`
  width: 10rem;
  height: 10rem;
  background-color: #414855;
  border: 0.3rem solid #f2b524;

  border-radius: 1rem;

  &:hover {
    background-color: #f2b524;
    border: 0.3rem solid #414855;
  }
`;

const WeaponTitle = styled.h1`
  padding: 0;
  margin: 0;
  text-align: center;
  font-size: 3rem;

  @media only screen and (max-width: 1500px) {
    font-size: 2rem;
  }
`;
