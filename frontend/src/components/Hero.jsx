import React from 'react'

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row w-4/5 justify-between items-center mx-auto py-10 text-left">
      <div className="md:w-3/6 w-full ">
        <div>
          <h1 className="text-white text-5xl font-bold ">
            Buy & Sell <br /> Advanced{' '}
            <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              NFTs
            </span>{' '}
            <br />
            With Us
          </h1>
          <p
            className="text-gray-500 font-semibold text-sm mt-3
          "
          >
            Mint and collect hottest NFTs out there available in the market
          </p>
        </div>
        <div className="flex mt-5">
          <button
            type="button"
            class="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-xl px-5 py-2.5 text-center mr-2 mb-2"
          >
            Create Your NFT{' '}
          </button>
        </div>
        <div className="w-3/4 flex justify-between items-center mt-5">
          <div  className='text-white'>
            <p className='font-bold'>123k</p>
            <small className='text-gray-300'>Users</small>
          </div>
          <div  className='text-white'>
            <p className='font-bold'>200k</p>
            <small className='text-gray-300'>Art Works</small>
          </div>
          <div  className='text-white'>
            <p className='font-bold'>14321k</p>
            <small className='text-gray-300'>Artists</small>
          </div>
        </div>
      </div>
      <div>
        <img src="" alt="" />
      </div>
    </div>
  )
}

export default Hero
