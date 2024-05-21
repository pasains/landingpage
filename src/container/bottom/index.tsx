import { FaInstagram, FaFacebook } from "react-icons/fa";
import { PiTiktokLogo } from "react-icons/pi";
import { FiYoutube } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";

export function Bottom() {
  return (
    <div className="flex flex-row max-w-full w-full mt-[60px] bg-black static bottom-0 place-content-center">
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
      <div className="mt-12 space-y-md text-md text-white font-light tracking-wide ml-96">
        <a
          href="https://www.instagram.com/pasains96/"
          className="flex flex-row items-center"
        >
          <FaInstagram className="mr-3" />
          INSTAGRAM
        </a>
        <a
          href="https://www.facebook.com/pasains.fmipa/"
          className="flex flex-row items-center"
        >
          <FaFacebook className="mr-3" />
          FACEBOOK
        </a>
        <a
          href="https://twitter.com/pasains96"
          className="flex flex-row items-center"
        >
          <FaXTwitter className="mr-3" />
          X/TWITTER
        </a>
        <a
          href="https://www.youtube.com/@PasainsUGM"
          className="flex flex-row items-center"
        >
          <FiYoutube className="mr-3" />
          YOUTUBE
        </a>
        <a
          href="https://www.tiktok.com/@pasains"
          className="flex flex-row items-center"
        >
          <PiTiktokLogo className="mr-3" />
          TIKTOK
        </a>
      </div>
    </div>
  );
}
