import React from 'react'
import ProjectsItem from './ProjectsItem'
import skyImg from '../../assets/sky.jpg'

function Projects() {
  return (
    <>
        <div id='projects' className='max--w-[1040px] m-auto md:pl-20 p-4 py-16'>

            <h1 className='text-4xl font-bold text-center text-[#001b5e]'>
                Projects
            </h1>

            <p className='text-center py-8'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque exer
                citationem consequatur illum a deserunt, neque nobis voluptatem ad ex
                plicabo rerum.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo, illo.
            </p>

            <div className='grid sm:grid-cols-2 gap-12'>

                <ProjectsItem img={skyImg} title='Chinmay Project' />
                <ProjectsItem img={skyImg} title='Chinmay2 Project' />
                <ProjectsItem img={skyImg} title='Kakashi Project' />
                <ProjectsItem img={skyImg} title='Sky Project' />

            </div>

        </div>
    </>
  )
}

export default Projects