import React from "react";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { searchHeroesAction } from "./actions";
import { heroFilters } from "./reducer";
import { TextInput } from "../common/text-field";
import { Button } from "../common/button";
import search from "../../asserts/imgs/search.svg";

const SearchHeroWrapper = styled.div`
  height: 100%;
  @media (max-width: ${(p) => p.theme.mobile}) {
    align-items: center;
  }
`;
const FormBody = styled.form`
  margin: 20px;
  display: flex;
  flex-direction: row;
`;
const Img = styled.img`
  width: 15px;
  margin-right: 10px;
`;
const ButtonWrapper = styled(Button)`
  height: 50%;
  align-self: center;
  margin-bottom: 11px;
`;

export const SearchHeroes = () => {
  const [searchFilter, setSearchFilter] = useState({ ...heroFilters });
  const { handleSubmit, register } = useForm();
  const dispatch = useDispatch();
  useEffect(() => {}, [searchFilter]);
  const onSubmit = (data) => {
    setSearchFilter({ ...data });
    dispatch(searchHeroesAction({ ...data }));
  };
  return (
    <SearchHeroWrapper>
      <FormBody onSubmit={handleSubmit(onSubmit)}>
        <TextInput
          title="Hero Name"
          placeholder={"Hero Name"}
          name="heroName"
          defaultValue={searchFilter.heroName}
          reg={register}
        />
        <TextInput
          title="Actor Name"
          placeholder={"Actor Name"}
          name="actorName"
          defaultValue={searchFilter.actorName}
          reg={register}
        />
        <ButtonWrapper type="submit">
          <Img src={search} alt="search" />
        </ButtonWrapper>
      </FormBody>
    </SearchHeroWrapper>
  );
};
