import React, { useEffect, useState } from 'react'
import editIcon from './images/icons8-edit.svg'
import deleteIcon from './images/icons8-delete.svg'

const Main = () => {
    const [data, setData] = useState({data: []})

    useEffect(() => {
      fetch('http://localhost:1337/api/movies?populate=*')
        .then(res => res.json())
        .then(res => setData(res))
    }, [])

  return (
    <div className='w-[70%] mx-auto p-4'>
        <div className='w-[100%] flex justify-between pb-2 mb-6 font-bold text-lg tracking-wider text-center border-b'>
          <p className='w-[40%]'>Movie Name</p>
          <p className='w-[30%]'>Category</p>
          <p className='w-[30%]'>Account</p>
        </div>

        {
          data.data.map(item => (
            <div className='w-[100%] flex justify-between mb-4 py-2 border-b border-neutral-200 place-items-center'>
              <div className='flex w-[40%] gap-4 place-items-center'>
                <img 
                className='w-12 h-12 rounded-[50%]'
                src={`http://localhost:1337${item?.attributes?.cover?.data?.attributes?.url}`} alt={item?.attributes?.title} />

                <p>
                  {item?.attributes?.title}
                </p>

              </div>

              <p className='w-[30%] text-center'>
                {item?.attributes?.categories?.data[0].attributes?.name}
              </p>

              <div className='w-[30%] flex gap-4 justify-center -mt-2'>
                <img
                  className='w-6' 
                  src={editIcon} alt="Edit Icon" 
                />

                <img
                  className='w-8' 
                  src={deleteIcon} alt="Delete Icon" 
                />
              </div>
            </div>
          ))
        }        
    </div>
  )
}

export default Main