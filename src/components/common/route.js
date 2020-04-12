import React from "react";
import { Router as ReactRoute, useHistory } from 'react-router-dom';
import styled from "styled-components";
import PropTypes from "prop-types";

const PageContent = styled.div`
  top: 20px;
  position: relative;
`;

export const Route = ({ path, ...props }) => {
  const history = useHistory();
  return (
    <PageContent>
      <ReactRoute {...{ history, path, ...props }} />
    </PageContent>
  );
};

Route.propTypes = {
  props: PropTypes.object,
  path: PropTypes.string
};
