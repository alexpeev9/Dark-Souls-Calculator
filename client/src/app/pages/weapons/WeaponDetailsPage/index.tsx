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

import styled from 'styled-components/macro';
import ErrorMsg from '../../../components/ErrorMsg';
import errorHandler from '../../../utils/errorHandler';

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
    let image;
    try {
      image = require(`../../../../assets/images/weapons/${category?.url}`);
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
                alt={category?.name}
                onError={(event: any) => (event.target.style.display = 'none')}
              />
              <WeaponTitle>{category?.name}</WeaponTitle>
            </ImageSection>
            <InfoTwoWrapper>
              <InfoSection>
                <SecondTitle>Information</SecondTitle>
                <InfoBox>
                  <ImageIcon src={AttackTypeIcon} alt='Attack Type Icon' />
                  <TextParagraphLong>
                    Attack Type: {category?.attack_type || 'none'}
                  </TextParagraphLong>
                </InfoBox>
                <InfoBox>
                  <ImageIcon src={WeightIcon} alt='Weight Icon' />
                  <TextParagraph>
                    Weight: {category?.weight || '-'}
                  </TextParagraph>
                </InfoBox>
                <InfoBox>
                  <ImageIcon src={DurabilityIcon} alt='Durability Icon' />
                  <TextParagraph>
                    Durability: {category?.durability || '-'}
                  </TextParagraph>
                </InfoBox>
              </InfoSection>
              <InfoSection>
                <SecondTitle>Attack Damage</SecondTitle>
                <InfoBox>
                  <ImageIcon src={PhysicalIcon} alt='Physical Icon' />
                  <TextParagraph>
                    Physical Damage: {category?.damage.physical || '–'}
                  </TextParagraph>
                </InfoBox>
                <InfoBox>
                  <ImageIcon src={MagicIcon} alt='Magic Icon' />
                  <TextParagraph>
                    Magic Damage: {category?.damage.magic || '–'}
                  </TextParagraph>
                </InfoBox>
                <InfoBox>
                  <ImageIcon src={FireIcon} alt='Fire Icon' />
                  <TextParagraph>
                    Fire Damage: {category?.damage.fire || '–'}
                  </TextParagraph>
                </InfoBox>
                <InfoBox>
                  <ImageIcon src={LightningIcon} alt='Lightning Icon' />
                  <TextParagraph>
                    Lightning Damage: {category?.damage.lightning || '–'}
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
                  {category?.requirements.strength || '–'}
                </TextParagraph>
                <TextParagraph>{category?.bonus.strength || '–'}</TextParagraph>
              </VerticalInfoBox>
              <VerticalInfoBox>
                <RequirementTitle>Dexterity</RequirementTitle>
                <ImageIcon src={DexterityIcon} alt='Dexterity Icon' />
                <TextParagraph>
                  {category?.requirements.dexterity || '–'}
                </TextParagraph>
                <TextParagraph>
                  {category?.bonus.dexterity || '–'}
                </TextParagraph>
              </VerticalInfoBox>
              <VerticalInfoBox>
                <RequirementTitle>Intelligence</RequirementTitle>
                <ImageIcon src={IntelligenceIcon} alt='Intelligence Icon' />
                <TextParagraph>
                  {category?.requirements.intelligence || '–'}
                </TextParagraph>
                <TextParagraph>
                  {category?.bonus.intelligence || '–'}
                </TextParagraph>
              </VerticalInfoBox>
              <VerticalInfoBox>
                <RequirementTitle>Faith</RequirementTitle>
                <ImageIcon src={FaithIcon} alt='Faith Icon' />
                <TextParagraph>
                  {category?.requirements.faith || '–'}
                </TextParagraph>
                <TextParagraph>{category?.bonus.faith || '–'}</TextParagraph>
              </VerticalInfoBox>
            </RequirementsWrapper>
          </InfoWrapper>
        </DetailsInfo>
      </DetailsWrapper>
    );
  } else if (isError) {
    content = <ErrorMsg>{errorHandler(error)}</ErrorMsg>;
  }
  return content;
};

export default WeaponDetailsPage;

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
