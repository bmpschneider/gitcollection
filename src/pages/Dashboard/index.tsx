import React from 'react';
import { FiChevronRight } from 'react-icons/fi'

import { Title, Form, Repos } from './styles';
import logo from '../../assets/logo.svg'

export const Dashboard: React.FC = () => {
  return (
      <>
      <img src={logo} alt="GitCollection" />
      <Title>Gibhub Repository Catalog</Title>

      <Form>
          <input placeholder="username/repository_name" />
          <button type="submit">Search</button>
      </Form>

      <Repos>
          <a href="/repositories">
              <img src="https://avatars.githubusercontent.com/u/17718751?v=4" alt="repository" />
              <div>
                  <strong>brunodeveloper/gitcollection</strong>
                  <p>Repositório do GitHub GitCollection</p>
              </div>
              <FiChevronRight size={20}></FiChevronRight>
          </a>
      </Repos>
      </>
  );
};