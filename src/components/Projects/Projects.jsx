import React from 'react'
import ProjectsItem from './ProjectsItem'
import skyImg from '../../assets/sky.jpg'
import ExpImg from '../../assets/Exp.jpg'

function Projects() {
  return (
    <>
        <div id='projects' className='max--w-[1040px] m-auto md:pl-20 p-4 py-15'>

            <h1 className='text-4xl font-bold text-center text-[#001b5e]'>
                Projects
            </h1>

            <p className='text-center py-8'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque exer
                citationem consequatur illum a deserunt, neque nobis voluptatem ad ex
                plicabo rerum.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo, illo.
            </p>

            <div className='grid sm:grid-cols-3 gap-12'>

                <ProjectsItem img={ExpImg} title='Expense Tracker' tech={'MongoDB Express reactJs Nodejs'} />
                <ProjectsItem img={skyImg} title='Project 2' tech={'tech stack'}/>
                <ProjectsItem img={skyImg} title='Project 3' tech={'tech stack'}/>
                <ProjectsItem img={skyImg} title='Project 4' tech={'tech stack'}/>
                <ProjectsItem img={skyImg} title='Project 5' tech={'tech stack'}/>
                <ProjectsItem img={skyImg} title='Project 6' tech={'tech stack'}/>

            </div>

        </div>
    </>
  )
}

export default Projects