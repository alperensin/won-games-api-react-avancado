import React, { useState, useEffect, memo } from 'react';
import axios from 'axios';
import { Header } from '@buffetjs/custom';
import { Table } from '@buffetjs/core';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 18px 30px;

  p {
    margin-top: 1rem;
  }
`;

const TableData = styled(Table)`

  td {
    max-width: 100px;
  }

`;

const HomePage = () => {

  const [rows, setRows] = useState([]);

  const headers = [
    {
      name: "Name",
      value: "name"
    },
    {
      name: "Description",
      value: "description"
    },
    {
      name: "Url",
      value: "html_url" 
    }
  ];

  useEffect(() => {
    axios.get('https://api.github.com/users/alperensin/repos').then(res => setRows(res.data)).catch(e => strapi.notification.error('Ops... GitHub API error.'));
  }, []);

  return (
    <Wrapper>
      <Header
        title={{ label: "Alperensin Repositories"}}
        content="A list of our repositories in alperensin's github."
      />
      <TableData headers={headers} rows={rows} />
    </Wrapper>
  );
};

export default memo(HomePage);
