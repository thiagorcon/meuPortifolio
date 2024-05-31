
 import style from '../TechSection/style.module.css';

 import CardTechSection from './Card';

const TechSection = () => {

    return (

        <aside className={style.areaTech}>
            <div className='areaTit'>
                <h1>Tecnologias</h1>
            </div>
            <div className={style.areaCard} >
                
                 <CardTechSection /> 
            </div>
            
        </aside>
    );
}

export default TechSection;