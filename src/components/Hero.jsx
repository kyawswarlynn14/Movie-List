import React, { useEffect, useState } from 'react'
import editIcon from './images/icons8-edit.svg'
import deleteIcon from './images/icons8-delete.svg'

const Hero = () => {
    const [data, setData] = useState({data: []})

    useEffect(() => {
      fetch('http://localhost:1337/api/movies?populate=*')
        .then(res => res.json())
        .then(res => setData(res))
    }, [])

  return (
    <div className='w-[70%] mx-auto p-4'>
        <table className='w-[100%]'>

            <thead className='text-xl'>
                <tr className='border border-neutral-200 font-bold font-serif tracking-widest'>
                    <td className='p-4'>Movie Name</td>
                    <td>Category</td>
                    <td>Account</td>
                </tr>
            </thead>

            <tbody className='text-lg'>
                {
                    data?.data?.map(item => (
                        <tr key={item.id} className='border border-neutral-200'>

                            <td className='flex place-items-center p-4 gap-4'>
                                <img 
                                className='w-12 h-12 rounded-[50%]'
                                src={`http://localhost:1337${item?.attributes?.cover?.data?.attributes?.url}`} 

                                alt={item?.attributes?.title} />

                                <p>{item?.attributes?.title}</p>
                            </td>

                            <td>
                                {item?.attributes?.categories?.data[0]?.attributes?.name}
                            </td>

                            <td className='flex gap-4'>
                                <img
                                className='w-8' 
                                src={editIcon} 
                                alt="Edit Icon" />

                                <img
                                className='w-8' 
                                src={deleteIcon} 
                                alt="Delete Icon" />
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
  )
}

export default Hero;