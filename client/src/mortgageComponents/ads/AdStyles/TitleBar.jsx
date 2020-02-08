import Styled from 'styled-components';

const TitleBar = Styled.div`
  display: flex;
  direction: row;
  justify-content: space-between;
  font-family: "Libre Franklin", sans-serif;
  font-size: 1.25rem;
  align-items: flex-start;
  vertical-align: top;
  margin-bottom: 25px;
  min-width: 600px;
  width: 728px;
  maxwidth: 728px;
`;

TitleBar.displayName = 'TitleBar';

export default TitleBar;
