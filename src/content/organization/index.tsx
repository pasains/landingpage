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
    description:"Dvisi Gunung Hutan",
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
    <div className="font-nunito container mt-[90px] mx-auto rounded-2xl py-[50px]">
      <div className="text-bold-orange text-center text-2xl tracking-widest font-bold">
        MEET OUR TEAM
        <br />
        <span>PASAINS 2024</span>
      </div>
      <div className="flex my-[60px] gap-[20px] flex-wrap justify-center">
        {organizationData.map((data) => {
          return (
            <div className="relative h-[420px] w-[340px]">
              <div className="hover:bg-black bg-light-orange duration-300">
                <img
                  className="w-full h-[420px] object-cover hover:scale-110"
                  src={data.picture}
                  alt="Member"
                />
                <div className="absolute inset-0 flex items-end justify-center hover:bg-opacity-0">
                  <div className="text-center w-full bg-opacity-50">
                    <h2 className="text-[18px] font-bold text-white">
                      {data.title}
                    </h2>
                    <p className="text-white text-[13px] mb-[5px]">{data.description}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
