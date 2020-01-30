import Styled from 'styled-components'

const CustomSelect = Styled.div`
  postion: relative;
  height: 40px;
  width 300px;
  border: 2px solid black;
`

const HiddenSelect = Styled.select`
  width: 300px;
  height:40px;
  border: 2px solid black;
  background: white;
  color: black;
  padding: 1rem;
  font-size: 1rem;
  border:none;
  margin-left: 0px;
  text-align: left;

`
HiddenSelect.displayName = HiddenSelect;

export {
  CustomSelect,
  HiddenSelect,
}