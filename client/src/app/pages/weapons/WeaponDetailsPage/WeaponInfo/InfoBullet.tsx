import styled from 'styled-components/macro';

const InfoBullet = ({ name, value, icon }: any) => {
  return (
    <InfoBox>
      <ImageIcon src={icon} alt={name} />
      <TextParagraphLong>
        {name}: {value || '-'}
      </TextParagraphLong>
    </InfoBox>
  );
};

export default InfoBullet;

const InfoBox = styled.section`
  display: flex;
`;

const ImageIcon = styled.img`
  width: 35px;
  height: 35px;
  padding: 0.2rem 0.5rem;
`;

const TextParagraphLong = styled.p`
  width: 10rem;
  margin: 0;
  padding: 0;

  @media only screen and (max-width: 1200px) {
    width: auto;
  }
`;
