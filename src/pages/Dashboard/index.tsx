import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg'

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
    return (
        <>
            <img src={logoImg} alt="GitHub Explorer" />
            <Title>Explore repositórios no Github</Title>

            <Form>
                <input placeholder="Digite o nome do repositório" />
                <button type="submit">Pesquisar</button>
            </Form>

            <Repositories>
                <a href="teste">
                    <img
                        src="https://avatars3.githubusercontent.com/u/13985639?s=460&u=72abfecb7269a45f3c1fb0e74e235eda92dc7191&v=4"
                        alt="Pablo Marcondes"
                    />

                    <div>
                        <strong>gitExplore</strong>
                        <p>This project was bootstrapped with Create React App.</p>
                    </div>

                    <FiChevronRight size={20} />
                </a>

                <a href="teste">
                    <img
                        src="https://avatars3.githubusercontent.com/u/13985639?s=460&u=72abfecb7269a45f3c1fb0e74e235eda92dc7191&v=4"
                        alt="Pablo Marcondes"
                    />

                    <div>
                        <strong>gitExplore</strong>
                        <p>This project was bootstrapped with Create React App.</p>
                    </div>

                    <FiChevronRight size={20} />
                </a>

                <a href="teste">
                    <img
                        src="https://avatars3.githubusercontent.com/u/13985639?s=460&u=72abfecb7269a45f3c1fb0e74e235eda92dc7191&v=4"
                        alt="Pablo Marcondes"
                    />

                    <div>
                        <strong>gitExplore</strong>
                        <p>This project was bootstrapped with Create React App.</p>
                    </div>

                    <FiChevronRight size={20} />
                </a>
            </Repositories>
        </>
    );
};

export default Dashboard;
