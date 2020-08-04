import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import './styles.css';

function TeacherItem(){
    return (
        <article className="teacher-item">
        <header>
            <img src="https://vignette.wikia.nocookie.net/infinitas-guerras/images/d/d8/68519967-guts-wallpapers.jpg/revision/latest?cb=20161106144319&path-prefix=pt-br" alt=""/>
            <div>
                <strong>Guts</strong>
                <span>Quimica</span>
            </div>
        </header>

        <p>
            Entusiasta das melhores tecnologias de quimica avançada.
            <br />
            <br />
            Apaixonado  por explodir coisas em laboratorio e por mudar a vida das pessoas atraves de experiencias. Mais de 20.000 pessoas passaram por suas mãos
        </p>
        <footer>
            <p>
                Preço/Hora
                <strong>R$ 80,00</strong>
            </p>
            <button type="button">
                <img src={whatsappIcon} alt="whatsapp"/>
                Entrar em contato
            </button>
        </footer>
    </article>
    );
}

export default TeacherItem;