import style from './Post.module.css';
import { Avatar } from "../Avatar";
import { ResponsePost } from '../ResponsePost';

export function Post(props) {

  return (
    <>
      {props.postsUsers.map((item, index) => {
        return (
          <div key={index} className={style.container}>
            <Avatar
              nome={item.nome}
              profissao={item.profissao}
              foto={item.foto}
              tempo={item.tempo}
            />
            <div className={style.textoPubli}>
              <pre>{item.texto} <a href="">{item.link}</a></pre>
              <div className={style.chaves}>
                {
                  item.chaves.map((chave, index) =>{
                    return <a href="" key={index}>{chave}</a>
                  })
                }
              </div>
            </div>
            <hr />
            <form className={style.feedback}>
              <span>Deixe seu feedback</span>
              <textarea className={style.areaContainer} placeholder={item.place} />
              <button className={style.bttPublicar} type="submit">Publicar</button>
            </form>

            {
              item.resposta 
              ? <ResponsePost 
                  postsResponses={props.postsResponses} 
                  setShowModal={props.setShowModal}
                  />
              : <></>
            }
          </div>
        );
      })}
    </>
  );
}
