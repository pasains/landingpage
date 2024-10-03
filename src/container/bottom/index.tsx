import { FaInstagram, FaFacebook } from "react-icons/fa";
import { PiTiktokLogo } from "react-icons/pi";
import { FiYoutube } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";

const media_socials = [
  {
    icon: <FaInstagram size={15} />,
    link: "https://www.instagram.com/pasains96/",
  },
  {
    icon: <FaFacebook size={15} />,
    link: "https://www.facebook.com/pasains.fmipa/",
  },
  {
    icon: <FaXTwitter size={15} />,
    link: "https://twitter.com/pasains96",
  },
  {
    icon: <FiYoutube size={15} />,
    link: "https://www.youtube.com/@PasainsUGM",
  },
  {
    icon: <PiTiktokLogo size={15} />,
    link: "https://www.tiktok.com/@pasains",
  },
];

export function Bottom() {
  return (
    <div className="bg-black py-3 md:px-6 px-4 max-w-full absoulte left-0 right-0 bottom-0 container mx-auto font-nunito font-light">
      <div className="flex space-x-xsm justify-between max-[600px]:flex-wrap">
        <div className="flex flex-row items-center space-x-sm">
          <img
            src={require("../../image/logomoodern.png")}
            alt="logopasains"
            className="size-16 object-contain items-center"
          />
          <div className="text-white text-sm">
            <p>
              Jalan Sains, Sekip Utara PO BOX 21
              <br />
              Bulaksumur, Mlati, Sleman, Daerah Istimewa Yogyakarta, 55281
              <br />
              <a
                href="mailto:pasains.mipa@mail.ugm.ac.id"
                className="font-normal"
                target="__blank"
              >
                pasains.mipa@mail.ugm.ac.id
              </a>
              <p className="font-light">+62 123-4567-7890</p>
            </p>
          </div>
        </div>
        <div className="text-white space-md">
          <p className="text-sm">Follow Us</p>
          <div className="flex flex-row space-x-sm my-3">
            {media_socials.map((media) => {
              return (
                <div
                  key={media.link}
                  className="rounded-full border p-1 hover:border-black hover:scale-150"
                >
                  <a href={media.link} target="__blank">
                    {media.icon}
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
