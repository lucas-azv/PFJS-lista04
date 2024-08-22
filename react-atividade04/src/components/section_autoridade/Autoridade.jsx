import React from 'react';
import './Autoridade.css';
import IconItem from './IconItem';
import Carrossel from '../carrossel/Carrossel';

import iconVisao from './img/icon-visao.png';
import iconMissao from './img/icon-missao.png';
import iconValores from './img/icon-valores.png'

const items = [
    { id: 1, imgSrc: iconVisao, text: 'Compromisso com Excelência' },
    { id: 2, imgSrc: iconMissao, text: 'Colaboração' },
    { id: 3, imgSrc: iconValores, text: 'Foco no Cliente' },
];

function Autoridade() {
    return (
        <section>
            <div className='box-titulo'>
                <h2>Conheça a Peleja</h2>
                <hr/>
                <h3>Saiba um pouco sobre a nossa história</h3>
            </div>

            <div className='box-info'>
                <p className='texto'>
                    A PELEJA é uma empresa de representação comercial situada em Uberlândia, dedicada a fornecer soluções inovadoras e personalizadas para o crescimento e sucesso de seus clientes. Com uma abordagem multifacetada, oferecemos atendimentos através de canais digitais, telemarketing, WhatsApp e presencial, garantindo que nossas estratégias de vendas e marketing estejam sempre alinhadas com as necessidades específicas de cada cliente.
                </p>
                <div className='container-carrossel'>
                    <Carrossel/>
                </div>
            </div>

            <div className='box-icons'>
                {items.map(item => (
                    <IconItem key={item.id} imgSrc={item.imgSrc} text={item.text} />
                ))}
            </div>
        </section>
    );
}

export default Autoridade;
