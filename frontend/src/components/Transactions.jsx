import React from 'react'

const Transactions = () => {
  return (
    <div className="flex flex-col md:flex-row w-4/5 justify-between items-center mx-auto py-2 text-left border-b-2">
      <div className=" ">
        <h4 className="text-white text-3xl font-bold uppercase text">
          Latest Transactions
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 md:gap-4 lg:gap-2 py-2.5">
          {Array(6)
            .fill()
            .map((nft, i) => (
              <Transaction key={i} tx={i + 1} />
            ))}
        </div>

        {/* //Todo: More Transaction button */}
        <div className="text-center my-2">
          <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              View More
            </span>
          </button>
        </div>
        {/* //Todo: More Transaction button ends*/}
      </div>
    </div>
  )
}

const Transaction = ({ tx }) => (
  <div className="flex justify-between items-center border border-white text-gray-400 w-full shadow-xl shadow-black rounded-md overflow-hidden bg-gray-800 my-2 p-3 ">
    <div className="rounded-md shadow-sm shadow-gray-700 p-2">🪙</div>
    <div>
      <h4 className="text-sm">#{tx} Fund Transferred</h4>
      <small className='flex justify-start items-center'>
        <span className='mr-1'>Received By: </span>
        <a href="#" trarget="_blank" className=''>
          0x123.........321
        </a>
        ↗️
      </small>
    </div>
  </div>
)
export default Transactions
