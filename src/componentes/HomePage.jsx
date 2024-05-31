import '../styles/index.css';
import BannerSection from './BannerSection';
import AboutMeSection from './AbouMeSection';
import TechSection from './TechSection';
import ProjectSection from './ProjectSection';
import { TemplateDefault } from './Template';

const HomePage = () => {

     return (
          <>
               <TemplateDefault>
                    <BannerSection />
                    <AboutMeSection />
                    <TechSection />
                    <ProjectSection />
               </TemplateDefault>
          </>
     )
}

export default HomePage;