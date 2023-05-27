import style from './ResponsePost.module.css'

import like from '../../assets/like.svg'
import likeOn from '../../assets/likeOn.svg'
import lixeira from '../../assets/lixeira.svg'


export function ResponsePost(props) {
 
  return (
    <>
      {
        props.postsResponses.map((item, index) => {
          return (
            <div className={style.container} key={index}>
                  <img
                    className={style.perfil}
                    src={item.foto}
                  />
              <div className={style.allComent}>
                <div className={style.comentContainer}>
                  <div className={style.comentTop}>
                    <div className={style.detalhes}>
                      <div className={style.perfilTexto}>
                        <p>{item.nome}</p>
                        <span>{item.codiNome}</span>
                      </div>
                      <p>{item.tempo}</p>
                    </div>
                    {
                        item.lixeira
                        ? <img src={lixeira} onClick={() => props.setShowModal(true)} />
                        : <></>
                    }
                  </div>
                  <p> {item.texto}</p>
                </div>
                {
                  item.aplaudirOn
                    ?
                    <footer className={style.aplaudirOn}>
                      <img src={likeOn} />
                      <p> Aplaudir - {item.aplaudir}</p>
                    </footer>
                    :
                    <footer>
                      <img src={like} />
                      <p> Aplaudir - {item.aplaudir}</p>
                    </footer>
                }
              </div>
            </div>
          )
        })
      }
    </>
  )
}