import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import { color } from "../../constants/styled-theme";

export const Field = styled.div`
  height: 75px;
  display: flex;
  flex-direction: column;
  text-align: left;
  font-size: 13px;
  margin: 5px;
`;
export const Title = styled.div`
  margin-bottom: 2px;
  color: ${color("gray90")};
`;
export const Input = styled.input`
  padding: 8px;
  font-size: 13px;
  border: solid 1px ${color("gray50")};
  border-radius: 2px;
  width: 100%;
  padding-left: ${p => p.isDollar && "25px"};
`;

export const TextInput = ({ title, name, reg, ...props }) => {
  return (
    <Field>
      {title && (
        <Title>
          {title}
        </Title>
      )}
      <div>
        <Input {...{ ...props, name, ref: reg, type: "text" }} />
      </div>
    </Field>
  );
};

TextInput.propTypes = {
  title: PropTypes.string,
  props: PropTypes.object,
  name: PropTypes.string,
  required: PropTypes.bool,
  reg: PropTypes.func
};
