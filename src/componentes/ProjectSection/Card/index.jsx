import { projects } from '../../../data/projects'
import style from './style.module.css'
import imagem from '../../../assets/github-icon.png'

const CardProjectSection = () => {
     return (
          <>
               <article className={style.cardArea}>
                    {projects.map(item => (
                         <div className={style.card} key={item.name}>
                              <div className={style.cardText}>
                                   <h2>{item.name}</h2>
                                   <h3>{item.description}</h3>
                                   <h5>Saiba Mais</h5>
                              </div>
                              <div className={style.cardImg}>
                                   
                                   <a href="https://www.globo.com/" target="_blank"> <img src={imagem} alt="imagem" />   </a>
                              </div>
                         </div>
                    ))}
               </article >
          </>
     )
}

export default CardProjectSection;