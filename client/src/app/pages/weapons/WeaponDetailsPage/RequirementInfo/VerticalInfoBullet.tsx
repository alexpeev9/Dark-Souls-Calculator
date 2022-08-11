import styled from 'styled-components/macro';

const VerticalInfoBullet = ({ name, requirement, bonus, icon }: any) => {
  return (
    <VerticalInfoBox>
      <RequirementTitle>{name}</RequirementTitle>
      <ImageIcon src={icon} alt={name} />
      <TextParagraph>{requirement || '–'}</TextParagraph>
      <TextParagraph>{bonus || '–'}</TextParagraph>
    </VerticalInfoBox>
  );
};

export default VerticalInfoBullet;

const VerticalInfoBox = styled.section`
  padding: 0.5rem;
  color: ${(p) => p.theme.primary};
  background-color: ${(p) => p.theme.secondary};
  display: flex;
  flex-direction: column;
  align-items: center;

  border: 3px solid ${(p) => p.theme.primary};
  border-inline-style: solid;
  border-radius: 20px;
`;

const RequirementTitle = styled.h5`
  margin: 0.3rem 0;
`;

const TextParagraph = styled.p`
  margin: 0.3rem 0;
`;

export const ImageIcon = styled.img`
  width: 35px;
  height: 35px;
  padding: 0.2rem 0.5rem;
`;
