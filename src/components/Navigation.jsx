import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Navigation = ({ name, hasBack }) => {
  const navigate = useNavigate();
  return (
    <div>
      <NavigationStyled>
        {hasBack && <BackButton onClick={() => navigate(-1)}>{`<`}</BackButton>}
        <div onClick={() => navigate("/")}> {name}</div>
      </NavigationStyled>
    </div>
  );
};

const NavigationStyled = styled.div`
  padding: 20px;
  font-weight: 700;
  font-size: 18px;
  line-height: 26px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: solid 1px #eeeeee; ;
`;

const BackButton = styled.div`
  position: absolute;
  left: 0px;
  cursor: pointer;
`;

export default Navigation;
