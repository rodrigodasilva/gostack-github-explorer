import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Header, RepositoryInfo, Issues } from './styles';

interface RepositoryParams {
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();

  return (
    <>
      <Header>
        <img src={logoImg} alt="Github explorer" />

        <Link to="/">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>

      <RepositoryInfo>
        <header>
          <img src="" alt="Avatar" />

          <div>
            <strong>rocketseat/unform</strong>
            <p>Descrição do repository</p>
          </div>
        </header>

        <ul>
          <li>
            <strong>1880</strong>
            <span>Stars</span>
          </li>
          <li>
            <strong>1880</strong>
            <span>Stars</span>
          </li>
          <li>
            <strong>1880</strong>
            <span>Stars</span>
          </li>
        </ul>
      </RepositoryInfo>

      <Issues>
        <Link to="#">
          <div>
            <strong>repository.full_name</strong>
            <p>repository.description</p>
          </div>

          <FiChevronRight size={30} color="#a8a8b3" />
        </Link>
      </Issues>
    </>
  );
};

export default Repository;
