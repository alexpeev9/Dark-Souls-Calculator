import styled from 'styled-components';

const Spinner = ({ height, width, color, error }) => {
  return (
    <SpinnerWrapper>
      <svg
        width={width}
        height={height}
        version='1.1'
        id='L9'
        xmlns='http://www.w3.org/2000/svg'
        xmlnsXlink='http://www.w3.org/1999/xlink'
        viewBox='0 0 100 100'
        enableBackground='new 0 0 0 0'
        xmlSpace='preserve'
      >
        <path
          fill={color}
          d='M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50'
        >
          <animateTransform
            attributeName='transform'
            attributeType='XML'
            type='rotate'
            dur='1s'
            from='0 50 50'
            to='360 50 50'
            repeatCount='indefinite'
          />
        </path>
      </svg>
      {error ? <ErrorParagraph theme={width}>{error}</ErrorParagraph> : <></>}
    </SpinnerWrapper>
  );
};

export default Spinner;

const SpinnerWrapper = styled.span`
  justify-content: center;
  align-items: center;
  display: block;

  @media only screen and (max-width: 900px) {
    text-align: center;
  }
`;

const ErrorParagraph = styled.p`
  margin: 0;
  padding: 0;
  width: ${(props) => props.theme};
  text-align: center;
`;
