import bchain from '../assets/bchain.png'

const Artworks = () => {
  return (
    <div className="flex flex-col md:flex-row w-4/5 justify-between items-center mx-auto py-2 text-left border-b-2">
      <div className=" py-10 mx-auto">
        <h4 className="text-white text-3xl font-bold uppercase">
          Latest Artworks
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-4 lg:gap-3 py-2.5">
          {Array(8)
            .fill()
            .map((nft, i) => (
              <Card key={i} nft={i + 1} />
            ))}
        </div>
        {/* //Todo: View More Artworks Button Div */}
        <div className="text-center my-5">
          <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              View More Artworks
            </span>
          </button>
        </div>
        {/* //Todo: View More Artworks Button Div ends*/}
      </div>
    </div>
  )
}

const Card = ({ nft }) => (
  <div className="w-full shadow-xl shadow-gray-600 rounded-md overflow-hidden bg-gray-800 my-2 p-3">
    <img src={bchain} alt="" />
    <h4 className="text-white font-semibold">NFT #{nft}</h4>
    <p className="text-gray-400 text-sm my-1">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, doloremque
    </p>
    <div className="flex justify-between items-center mt-3 text-white ">
      <div className="flex flex-col">
        <small className="text-xs">Current Price</small>
        <p className="text-sm font-semibold">0.34 ETH</p>
      </div>
      {/* //TODO: View Details Button */}
      <button
        type="button"
        className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
      >
        Details
      </button>
    </div>
  </div>
)

export default Artworks
