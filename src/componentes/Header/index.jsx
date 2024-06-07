import '../Header/styles.css';
import '../../styles/typografy.css';

const Header = () => {
     return (
          <header className="cabecalho centro">
               <section className='container-header'>
                    <h1>Portifólio</h1>
                    <nav className='container-nav'>
                         <a>Sobre</a>
                         <a>Stack</a>
                         <a>Projetos</a>
                    </nav>
                    <a href='#contato'>
                         <button className='btnGlobal' >Contato</button>
                    </a>
               </section>
          </header>
     );
};

export default Header;