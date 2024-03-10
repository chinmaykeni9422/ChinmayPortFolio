import React from 'react'
import WorkItem from './WorkItem'

const data = [
    {
        year: 2020,
        title: "lorem lorem",
        duration: " X years",
        details : 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem'
    },
    {
        year: 2017,
        title: "lorem lorem",
        duration: " X years",
        details : 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem'
    },
    {
        year: 2015,
        title: "lorem lorem",
        duration: " X years",
        details : 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem'
    },
    {
        year: 2012,
        title: "lorem lorem",
        duration: " X years",
        details : 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem'
    }
]

function Work() {
  return (
    <>
        <div id='work' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>

            <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Work</h1>

            {
                data.map((item, index) => (
                    <WorkItem
                        key={index} 
                        year={item.year} 
                        title={item.title}
                        duration={item.duration}
                        details={item.details}
                    />
                ))
            }

        </div>
    </>
  )
}

export default Work