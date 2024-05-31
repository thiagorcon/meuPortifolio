import { technologies } from '../../../data/technologies';

import style from './style.module.css';

const CardTechSection = () => {
     return (
          <>
               <nav className={style.card}>
                    {technologies.map(item => (
                         <div className={style.cardArea} key={item.name}>
                              <img src={item.img} alt="imagem da tecnologia" />
                              <h3>{item.name}</h3>
                         </div>

                    ))}

               </nav >
          </>
     )
}

export default CardTechSection;