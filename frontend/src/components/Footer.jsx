import tokendao from '../assets/tokendao.png'
import React from 'react'

const Footer = () => {
  return (
    <div className="w-full flex md:justify-center justify-between items-center flex-col  gradient-bg-footer">
      <div className="w-full flex sm:flex-row flex-col justify-between items-center my-4">
        <div className="flex flex-[0.25] justify-center items-center">
          <img src={tokendao} alt="logo" className="w-16" />
        </div>

        {/* <div className="flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full">
          <p className="text-white text-base text-center mx-2 cursor-pointer">
            Market
          </p>
          <p className="text-white text-base text-center mx-2 cursor-pointer">
            Artist
          </p>
          <p className="text-white text-base text-center mx-2 cursor-pointer">
            Features
          </p>
          <p className="text-white text-base text-center mx-2 cursor-pointer">
            Community
          </p>
        </div> */}
        <div className="md:flex-[0.5] text-white md:flex justify-between items-center flex-initial text-xs">
          <p className="">Made With Passion By Sourin </p>

          <a href="https://linkedin.com/in/heysourin" target="_blank" className='space-x-2.5'>Linkedin</a>
          <a href="https://twitte.com/heysourin" target="_blank">Twitter</a>
          <a href="https://github.com/heysourin/Fullstack-NFT-Marketplace" target="_blank">Source Code</a>
        </div>

        <div className="flex flex-[0.25] justify-center items-center">
          <p className="text-white text-right text-xs">
            &copy;2022 All rights reserved
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer
