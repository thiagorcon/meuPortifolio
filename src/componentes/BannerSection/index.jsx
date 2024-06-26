import '../BannerSection/styles.css';
import { username } from '../../data/user';
import imgBanner from '../../assets/banner-img.png';

const BannerSection = () => {
     return (
          <>
               <section className='container-section'>
                    <article className='alinhar'>
                         <div className='alinharInside'>
                              <h4 className='nome'>{username}</h4>
                         </div>
                         <div className='letter gr alinharInside'>
                              <h1>Bem-vindo ao meu portifólio</h1>
                         </div>
                         <div className='alinharInside'>
                              <p>Sempre em aprendinzagem e em desenvolvimento pessoal e profissional.</p>
                         </div>
                         <div className='alinhar last alinharInside'>
                              <button className='btnGlobal '>Saiba mais</button>
                         </div>
                    </article>
                    <figure>
                         <img className='alinhar img' src={imgBanner} alt='imagem computador' />
                    </figure>
               </section>               
          </>
     );

};

export default BannerSection;