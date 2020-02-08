import Styled from 'styled-components';

const SliderBox = Styled.div`
  height: 100%;
  flex: 0 0 250px;
  scroll-snap-type: x;
  margin-right: 20px;
  padding-right: 30px;
  cursor: pointer;
  scroll-snap-align: start;
`;

SliderBox.displayName = 'SliderBox';

export default SliderBox;
