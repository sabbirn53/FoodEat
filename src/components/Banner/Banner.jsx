import React from 'react'
import banImg from '../../assets/2.png'

const Banner = () => {
  return (
    <div>
        <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* image Sections */}
                <div className='flex justify-center items-center'>
                    <img src={banImg} alt="" />
                </div>
                <div className='flex flex-col justify-center'>
                    <h1 className='text-3xl font-bold'>Good Food,Good Health</h1>
                    <p className='py-4 font-normal'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis molestiae quaerat facere nihil enim iste ipsa recusandae quia. Quas voluptates quisquam dicta labore maxime, ea veritatis iusto aliquam ut. Minus vel ad voluptatum id! Eligendi quis beatae dignissimos eveniet sed. Tempora cupiditate, veritatis quis blanditiis perferendis natus est rerum! Itaque!</p>
                </div>
                

            </div>
        </div>
    </div>
  )
}

export default Banner