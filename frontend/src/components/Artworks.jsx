const Artworks = () => {
  return (
    <div className="">
      <div className="w-4/5 py-10 mx-auto">
        <h4 className="text-white text-3xl font-bold uppercase">
          Latest Artworks
        </h4>
        <div className="grid grid-cols-1 ms:grid-cols-3 lg:grid-cols-4 gaps-6 md:gaps-6 lg:gaps-3 py-2.5">
          {Array(4)
            .fill()
            .map((nft, i) => (
              <p key={i} className="text-white">
                Card Component
              </p>
            ))}
        </div>
      </div>
    </div>
  )
}

export default Artworks
