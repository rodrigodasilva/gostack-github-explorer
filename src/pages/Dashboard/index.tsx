import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/28466370?s=460&u=f0fe77aa0acfe857ce6a10c0e41da92088590071&v=4"
            alt="Avatar"
          />

          <div>
            <strong>rodrigo/ribeiro</strong>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta,
              rem quos dicta sint sit quisquam doloribus natus ea illum
            </p>
          </div>

          <FiChevronRight size={30} color="#a8a8b3" />
        </a>

        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/28466370?s=460&u=f0fe77aa0acfe857ce6a10c0e41da92088590071&v=4"
            alt="Avatar"
          />

          <div>
            <strong>rodrigo/ribeiro</strong>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta,
              rem quos dicta sint sit quisquam doloribus natus ea illum
            </p>
          </div>

          <FiChevronRight size={30} color="#a8a8b3" />
        </a>

        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/28466370?s=460&u=f0fe77aa0acfe857ce6a10c0e41da92088590071&v=4"
            alt="Avatar"
          />

          <div>
            <strong>rodrigo/ribeiro</strong>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta,
              rem quos dicta sint sit quisquam doloribus natus ea illum
            </p>
          </div>

          <FiChevronRight size={30} color="#a8a8b3" />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
