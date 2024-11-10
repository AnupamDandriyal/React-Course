import { assets } from "../assets/assets"


const AppDownload = () => {
  return (
    <div className="mx-auto my-auto flex flex-col items-center mt-[100px] font-semibold text-[max(3vw,20px)] leading-tight align-middle">
      <p className="">For Better Experience Download </p>
      <p className="mb-5">Tomato App</p>
      <div className="platforms flex gap-4">
        <img className="cursor-pointer hover:shadow-2xl hover:scale-105 " src={assets.play_store} alt="platform" />
        <img className="cursor-pointer hover:shadow-2xl hover:scale-105" src={assets.app_store} alt="platform" />
      </div>
    </div>
  )
}

export default AppDownload