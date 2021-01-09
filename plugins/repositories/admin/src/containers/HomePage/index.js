
import React, { memo, useState, useEffect } from 'react';
import { Header } from '@buffetjs/custom';
import { Table } from '@buffetjs/core';

import styled from 'styled-components';
import axios from 'axios';

const Wrapper = styled.div `
  padding: 18px 30px;
`;

const HomePage = () => {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    axios.get('https://api.github.com/users/React-avancado/repos')
    .then((response) => setRows(response.data))
    .catch((e) => createStrapi.notification.error('Ops...github API limit exeeded.', e))
  }, [])

  const headers = [
    {
      name: "Name",
      value: "name",
    },
    {
      name: "Description",
      value: "description",
    },
    {
      name: "Url",
      value: "html_url",
    },
  ];
  
  return (
    <Wrapper>
      <Header 
        title={{ label: "React Avançado Repositories" }}
        content="A list of hour repositories in React Avançado course."
      />
      <Table headers={headers} rows={rows} />

    </Wrapper>
  );
};

export default memo(HomePage);
