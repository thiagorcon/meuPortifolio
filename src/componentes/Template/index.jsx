import Header from "../Header";
import Footer from "../Footer";

export const TemplateDefault = ({ children }) => {

     return (
          <>
               <Header />
               {children}
               <Footer />
          </>
     )
}

export default TemplateDefault;