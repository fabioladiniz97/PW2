import styles from './Avatar.module.css'

export function Avatar (props){
  return(
    <aside className={styles.container}>
      <div className={styles.avatarDetalhes}>
        <img className={styles.avatarImg} src={props.foto}/>
        <div className={styles.avatarInfo}>
          <strong>{props.nome}</strong>
          <span>{props.profissao}</span>
        </div>
      </div>
      <p>{props.tempo}</p>
    </aside>
  )
}