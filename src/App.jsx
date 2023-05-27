import { useState } from 'react'

import { Post } from './components/Post';
import { Header } from './components/Header';
import { SideBar } from './components/SideBar';
import { ModalLixeira } from './components/Modal'

import styles from './App.module.css';
import './global.css';

import Jane from './assets/jane.png';
import Devon from './assets/devon.png';
import Bessie from './assets/bessie.png';
import Leslie from './assets/leslie.png';
import Jenny from './assets/jenny.png';

export function App() {
  const [showModal, setShowModal] = useState(false);
  var postsUsers = [
    {
      nome: 'Jane Cooper',
      profissao: 'Dev Front-End',
      foto: Jane,
      tempo: 'Públicado há 1h',
      texto: 'Fala galeraa 👋 \n\nAcabei de realizar o minicurso de React no evento SertaoComp. Vocês gostaram? 🚀 \n\n',
      link:[''],
      chaves: ['#typescript', ' #React', ' #sertaocomp'],
      place: 'Nossa, adorei amigo! Parabéns!',
      resposta: false,
    },
    {
      nome: 'Devon Lane',
      profissao: 'Dev Front-End',
      foto: Devon,
      tempo: 'Públicado há 2h',
      texto: `Fala pessoal 👋 \n\n\nFinalmente finalizei minha palestra sobre Clean Architecture. Foi um baita desafio repassar todo meu \nconhecimento para vocês💪🏻 \n\nDeixe seu feedback 👉`,
      link:['devonlane.design'],
      chaves: ['#padrões', ' #CleanArchitecture'],
      place: 'Escreva um comentário...',
      resposta: true,
    },
  ];
  var postsResponses = [
    {
      nome: 'Devon Lane',
      codiNome: '(você)',
      foto: Leslie,
      tempo: 'Cerca de 2h',
      texto: 'Muito bom Devon, parabéns!! 👏👏',
      aplaudir: '03',
      aplaudirOn: false,
      lixeira: true,
    },
    {
      nome: 'Jenny Wilson',
      codiNome: '',
      foto: Jenny ,
      tempo: 'Cerca de 3h',
      texto: 'Adorei sua palestra!',
      aplaudir: '33',
      aplaudirOn: true,
      lixeira: false,
    },
    {
      nome: 'Bessie Cooper',
      codiNome: '',
      foto: Bessie ,
      tempo: 'Cerca de 6h',
      texto: '💜💜',
      aplaudir: '03',
      aplaudirOn: false,
      lixeira: false,
    },
  ];

  return (
    <div style={{position: 'relative'}}>
      <Header />
      <div className={styles.wrapper}>
        <SideBar />
        <main>
          <Post
            postsUsers={postsUsers}
            postsResponses={postsResponses}
            setShowModal={setShowModal}
            //foto={foto}
          />
        </main>
      </div>
        {
          showModal ? 
          <div className={styles.modal}>
            <ModalLixeira setShowModal={setShowModal} /> 
          </div>
          : <></>
        }
    </div>
  )
}
