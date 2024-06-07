import style from './style.module.css';
import imagemWhatsapp from '../../assets/whatsapp-icon.png';
import imagemLinkedin from '../../assets/linkedin-icon.png';
import imagemGitHub from '../../assets/github-icon.png';


const Footer = () => {
     return (
          <footer id='contato' className={style.area}>
               <div className={style.areaText}>
                    <div>
                         <h1> Contato</h1>
                         </div>
                    <nav className={style.areaImg}>
                         <img src={imagemWhatsapp} alt='imagem icone whatsapp' />
                         <img src={imagemLinkedin} alt='imagem icone linkedin' />
                         <img src={imagemGitHub} alt='imagem icone github' />
                    </nav>
               </div>
               <aside className={style.areaText}>
                    <p>Todos os direitos reservados - Thiago Rosa </p>
               </aside>
          </footer>
     );
};

export default Footer;