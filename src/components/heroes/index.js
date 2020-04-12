import styled from "styled-components";
import PropTypes from "prop-types";
import React from "react";
import { Hero } from "./hero";

const HeroesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 10px;
`;

export const Heroes = ({ heroes }) => {
  return (
    <HeroesContainer>
      {heroes.map((hero, index) => {
          return <Hero hero={hero} key={index} />;
        })}
    </HeroesContainer>
  );
};

Heroes.propTypes = {
  repositories: PropTypes.array,
};
