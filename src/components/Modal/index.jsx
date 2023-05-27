import style from './ModalLixeira.module.css'

export function ModalLixeira(props) {
  return (
    <div className={style.container}>
      <h2>Excluir comentário</h2>
      <p >Você tem certeza que gostaria de excluir este comentário?</p>
      <div>
        <button className={style.botaoL} onClick={() => props.setShowModal(false)}>
          Cancelar
        </button>
        <button className={style.botaoR} onClick={() => props.setShowModal(false)}>
          Sim, excluir
        </button>
      </div>
    </div>
  )
}