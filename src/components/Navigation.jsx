import styled from "styled-components";

const Navigation = ({ NavigationName }) => {
  return (
    <div>
      <NavigationStyled>{NavigationName}</NavigationStyled>
    </div>
  );
};

const NavigationStyled = styled.div`
position: absolute;
width: 187px;
height: 26px;
left: 152px;
top: 20px;

font-weight: 700;
font-size: 18px;
line-height: 26px;
display: flex;
align-items: center;
text-align: center;
color: #000000;

`;

export default Navigation;

