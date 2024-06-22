const organizationData = [
  {
    title: "Bacem",
    description: "Ketua Umum",
    picture: require("../../image/cem.png"),
  },
  {
    title: "Tapir",
    description: "Operasional",
    picture: require("../../image/pir.png"),
  },
  {
    title: "Kutir",
    description: "Sekertaris",
    picture: require("../../image/tir.png"),
  },
  {
    title: "Bulik",
    description: "Bendahara",
    picture: require("../../image/lik.png"),
  },
  {
    title: "Dopak",
    description: "Koordinator Logistik",
    picture: require("../../image/pak.png"),
  },
  {
    title: "Daniel",
    description: "Logistik",
    picture: require("../../image/nil.png"),
  },
  {
    title: "Mamik",
    description: "Kepala Divisi Humas & Media",
    picture: require("../../image/mik.png"),
  },
  {
    title: "Soblok",
    description: "Divisi Humas & Media",
    picture: require("../../image/blok.png"),
  },
  {
    title: "Cagak",
    description: "Kepala Divisi Gunung Hutan",
    picture: require("../../image/gak.png"),
  },
  {
    title: "Sate",
    description: "Dvisi Gunung Hutan",
    picture: require("../../image/te.png"),
  },
  {
    title: "Ricat",
    description: "Kepala Divisi Caving",
    picture: require("../../image/cat.png"),
  },
  {
    title: "Mondel",
    description: "Divisi Caving",
    picture: require("../../image/ndel.png"),
  },
  {
    title: "Maikel",
    description: "Kepala Divisi Climbing",
    picture: require("../../image/kel.png"),
  },
  {
    title: "Pelem",
    description: "Kepala Divisi Lingkungan Hidup",
    picture: require("../../image/plem.png"),
  },
  {
    title: "Subra",
    description: "Koordinator Kepelatihan dan Pengembangan",
    picture: require("../../image/sub.png"),
  },
  {
    title: "Cephie",
    description: "Koordinator Divisi Kepelatihan",
    picture: require("../../image/cep.png"),
  },
  {
    title: "Turais",
    description: "Kepelatihan",
    picture: require("../../image/tur.png"),
  },
  {
    title: "Dabih",
    description: "Kepelatihan",
    picture: require("../../image/bleh.png"),
  },
  {
    title: "Spica",
    description: "Kepelatihan",
    picture: require("../../image/spi.png"),
  },
  {
    title: "Sirius",
    description: "Kepelatihan",
    picture: require("../../image/sir.png"),
  },
  {
    title: "Kuma",
    description: "Kepelatihan",
    picture: require("../../image/kum.png"),
  },
  {
    title: "Rastaban",
    description: "Koordinator Pengembangan",
    picture: require("../../image/fay.png"),
  },
  {
    title: "Ruchba",
    description: "Pengembangan",
    picture: require("../../image/da.png"),
  },
  {
    title: "Mantri",
    description: "Pengembangan",
    picture: require("../../image/dam.png"),
  },
  {
    title: "Chara",
    description: "Pengembangan",
    picture: require("../../image/ti.png"),
  },
];

export function OrganizationContent() {
  return (
    <div className="font-nunito mt-[90px] mx-auto">
      <div className="flex text-bold-orange p-4 md:p-8 my-10 md:my-20 text-left text-lg md:text-4xl w-full tracking-wider font-extrabold">
        <div className="relative flex-none w-12 md:w-16">
          <div className="absolute bg-bold-orange w-12 h-12 md:w-16 md:h-16 z-20"></div>
          <div className="absolute bg-light-orange left-5 md:left-10 top-5 md:top-10 w-12 h-12 md:w-16 md:h-16 z-30"></div>
        </div>
        <div className="text-center grow">
        MEET OUR TEAM<br /> PASAINS 2024
        </div>
        <div className="relative flex-none w-12 md:w-16">
          <div className="absolute bg-bold-orange right-0 w-12 h-12 md:w-16 md:h-16 z-20"></div>
          <div className="absolute bg-light-orange right-5 md:right-10  top-5 md:top-10 w-12 h-12 md:w-16 md:h-16 z-30"></div>
        </div>
      </div>
      <div className="flex flex-wrap justify-center p-6 gap-6">
        {organizationData.map((data) => {
          return (
            <div className="relative h-[420px] w-[340px] hover:scale-110">
              <div>
                <img
                  className="absolute w-[420px] h-[280px] object-contain bottom-20 z-20"
                  src={data.picture}
                  alt="Member"
                />
                <div className="absolute container flex bottom-20 top-32 bg-light-orange z-10"></div>
                <div className="absolute w-full bg-opacity-50 z-30 top-4">
                  <h2 className="text-[18px] font-bold text-black">
                    {data.title}
                  </h2>
                  <p className="text-black text-[13px] mb-[5px]">
                    {data.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
