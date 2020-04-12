import React from "react";
import styled from "styled-components";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { color } from "../constants/styled-theme";
import { fetchHeroesAction } from "../components/heroes/actions";
import { SearchHeroes } from "../components/heroes/search";
import { Heroes } from "../components/heroes/index";

const Header = styled.div`
  background-color: ${color("blue25")};
  height: 50px;
  text-align: center;
  font-size: 15px;
  padding-top: 15px;
`;
const HeroesPage = () => {
  const dispatch = useDispatch();
  const { heroes } = useSelector((state) => state.heroesReducer);
  useEffect(() => {
    var data = require("../asserts/files/SuperHeroes.json");
    dispatch(fetchHeroesAction(data));
  }, []);
  return (
    <div>
      <Header>LogMeIn Task</Header>
      <SearchHeroes />
      <Heroes heroes={heroes} />
    </div>
  );
};
export default HeroesPage;
