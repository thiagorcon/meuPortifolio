import { projects } from '../../../data/projects';
import style from './style.module.css';
import imagem from '../../../assets/github-icon.png';

const CardProjectSection = () => {
     return (
          <>
               <nav className={style.cardArea}>
                    {projects.map(item => (
                         <section className={style.card} key={item.name}>
                              <div className={style.cardText}>
                                   <h2>{item.name}</h2>
                                   <h3>{item.description}</h3>
                                   <h5>Saiba Mais</h5>
                              </div>
                              <image className={style.cardImg}>
                                   
                                   <a href="https://www.globo.com/" target="_blank"> <img src={imagem} alt="imagem" />   </a>
                              </image>
                         </section>
                    ))}
               </nav >
          </>
     )
}

export default CardProjectSection;