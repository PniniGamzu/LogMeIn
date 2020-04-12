import styled from "styled-components";
import React from "react";
import PropTypes from "prop-types";
import { color } from "../../constants/styled-theme";
import trash from "../../asserts/imgs/trash.svg";
import pencil from "../../asserts/imgs/pencil.png";

const HeroContainer = styled.div`
  margin: 10px;
  padding: 10px;
  border: solid 1px ${color("gray50")};
  background-color: ${color("blue5")};
  word-break: break-all;
  flex-direction: column;
  display: flex;
  width: 550px;
  &:hover {
    background-color: ${color("gray50")};
  }
`;
const HeroHeader = styled.div`
  height: 250px;
  margin-bottom: 5px;
`;
const Title = styled.div`
  font-size: 16px;
  font-weight: 700;
  text-align: center;
  margin: 10px 0px;
`;
const HeroHeaderText = styled.p`
  font-size: 16px;
  line-height: 35px;
  white-space: pre-line;
  text-overflow: ellipsis;
  overflow: hidden;
  height: 200px;
  margin-bottom: 5px;
`;
const HeroBody = styled.div`
  display: flex;
  flex-direction: row;
  height: 250px;
`;
const HeroBodyText = styled.p`
  font-size: 16px;
  width: 300px;
  text-overflow: ellipsis;
  overflow: hidden;
  height: 250px;
`;
const LabelText = styled.span`
  font-size: 16px;
  text-decoration: underline;
  margin-right: 5px;
`;
const Img = styled.img`
  width: 190px;
  height: 250px;
  margin-left: 25px;
`;
const ImgButton = styled.img`
  cursor: pointer;
  width: 15px;
  margin: 0px 5px;
`;

export const Hero = ({ hero }) => {
  const {
    name,
    realName,
    team,
    firstAppearance,
    createdBy,
    publisher,
    gender,
    imageUrl,
    abilities,
    bio,
    isDiaplay,
  } =  hero;
  if (!isDiaplay) return null;
  return (
    <HeroContainer>
      <HeroHeader className="heroHeader">
        <Title>
          {name} | {realName}
          <ImgButton src={pencil} alt="pencil" />
          <ImgButton src={trash} alt="trash" />
        </Title>
        <HeroHeaderText>
          <LabelText>Team:</LabelText> {team} {"\n"}
          <LabelText>First Appearance:</LabelText> {firstAppearance} {"\n"}
          <LabelText> Created By:</LabelText> {createdBy} {"\n"}
          <LabelText>Publisher:</LabelText> {publisher} {"\n"}
          <LabelText>Gender:</LabelText> {gender} {"\n"}
          <LabelText>Abilities:</LabelText> {abilities} {"\n"}
        </HeroHeaderText>
      </HeroHeader>
      <HeroBody>
        <div>
          <HeroBodyText>
            <LabelText>Biography:</LabelText> {bio}
          </HeroBodyText>
        </div>
        <Img src={imageUrl} />
      </HeroBody>
    </HeroContainer>
  );
};

Hero.propTypes = {
  hero: PropTypes.object
};
