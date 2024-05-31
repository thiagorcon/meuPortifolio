import React from 'react';
import style from './style.module.css';
 import CardProjectSection from './Card';

const ProjectSection = () => {

    return (

        <section className={style.areaProjects} >
            <div className='areaTit'>
                <h1 className='areaTit'>Projetos</h1>
            </div>
            <div className={style.areaCard}>                
                 <CardProjectSection /> 
            </div>
            
        </section>
    );
}

export default ProjectSection;