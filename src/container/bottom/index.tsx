import { FaInstagram, FaFacebook } from "react-icons/fa";
import { PiTiktokLogo } from "react-icons/pi";
import { FiYoutube } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";

export function Bottom() {
  return (
    <div className="flex flex-row max-w-full w-full bg-black static bottom-0 place-content-center">
      <div className="flex flex-col">
        <div>
          <img
            src={require("../../image/lambang.jpg")}
            alt="logopasains"
            className="size-xsm mt-12 mb-6 mr-96 items-center"
          />
        </div>
        <div className="flex flex-row">
          <div className="text-md font-extralight tracking-wide text-white mr-96 mb-12 space-y-xsm">
            <h1>
              {"Jalan Sains, Sekip Utara PO BOX 21"}
              <br />
              <span>
                {"Bulaksumur, Mlati, Sleman, Daerah Istimewa Yogyakarta, 55281"}
              </span>
            </h1>
            <h1>pasains.mipa@mail.ugm.ac.id </h1>
            <h2>+62 123-4567-7890</h2>
          </div>
        </div>
      </div>
      <div className="mt-12 space-y-xl text-md text-white font-light tracking-wide ml-96">
        <div className="flex flex-row items-center">
          <FaInstagram className="mr-3" />
          INSTAGRAM
        </div>
        <div className="flex flex-row items-center">
          <FaFacebook className="mr-3" />
          FACEBOOK
        </div>
        <div className="flex flex-row items-center">
          <FaXTwitter className="mr-3" />
          X/TWITTER
        </div>
        <div className="flex flex-row items-center">
          <FiYoutube className="mr-3" />
          YOUTUBE
        </div>
        <div className="flex flex-row items-center">
          <PiTiktokLogo className="mr-3" />
          TIKTOK
        </div>
      </div>
    </div>
  );
}
