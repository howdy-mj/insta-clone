import styled from 'styled-components';

export const BorderGray = styled.div`
  border: ${(props) => props.theme.grayBorder};
  border-radius: 3px;
  background-color: #fff;
`;

export const FlexSpaceBetween = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CircleProfileImg = styled.img<{ hasBorder?: boolean }>`
  border-radius: 50%;
  border: ${(props) => (props.hasBorder ? '1px solid #dfdfdf' : 'none')};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;
