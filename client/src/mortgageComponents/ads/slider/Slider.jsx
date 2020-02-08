import Styled from 'styled-components';

const Slider = Styled.div`
  display: flex;
  overflow-x: scroll;
  scroll-snap-type: x;
  padding-right: 10rem;
  margin-top: 10px;
  &::-webkit-scrollbar {
    display: none;
  }


`;

Slider.displayName = 'Slider';

export default Slider;
