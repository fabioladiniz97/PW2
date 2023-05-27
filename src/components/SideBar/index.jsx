import { PencilLine } from 'phosphor-react';
import styles from './SideBar.module.css';

import Leslie from '../../assets/leslie.png';
import photo from '../../assets/photo.svg';

export function SideBar() {
  return (
    <aside className={styles.sidebar}>
      <img
          className={styles.cover}
          src={photo}
      />
      
      <div className={styles.profile}>
        <img src={Leslie}/>

        <strong>Leslie Alexander</strong>

        <span>UI Designer</span>
      </div>

      <footer className={styles.footer}>
        <a href='#'>
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}