//image import
import tokendao from '../assets/tokendao.png'
const Header = () => {
  return (
    <div className="w-4/5 flex justify-between md:justify-center items-center py-4 mx-auto border-b-2">
      <div className="md:flex-[0.5] flex-initial justify-center items-center">
        <img src={tokendao} alt="Logo" className="w-24 cursor-pointer" />
      </div>
      <ul className="md:flex-[0.5] text-white md:flex hidden list-none justify-between items-center flex-initial font-bold">
        <li className="mx-4 cursor-pointer">Market</li>
        <li className="mx-4 cursor-pointer">Artists</li>
        <li className="mx-4 cursor-pointer">Features</li>
        <li className="mx-4 cursor-pointer">Commmunity</li>
      </ul>
      <button className="bg-gradient-to-r from-rose-100 to-teal-100 shadow-xl shadow-fuchsia-300 hover:bg-red-600 md:text-xs py-4 px-8 rounded-full font-bold ml-12 text-2xl">
        Connect Wallet
      </button>
    </div>
  )
}

export default Header
