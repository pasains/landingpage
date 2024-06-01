const organizationData = [
  {
    title: "Bacem",
    description: "Ketua Umum",
    picture: require("../../image/cem.png"),
  },
  {
    title: "Tapir",
    description: "Kepala Divisi Operasional",
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
    title: "Cagak",
    description: "Kepala Divisi Gunung Hutan",
    picture: require("../../image/gak.png"),
  },
  {
    title: "Ricat",
    description: "Kepala Divisi Caving",
    picture: require("../../image/cat.png"),
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
    title: "Mondel",
    description: "Staf Divisi Caving",
    picture: require("../../image/ndel.png"),
  },
  {
    title: "Subra",
    description: "Kepala Latbang",
    picture: require("../../image/sub.png"),
  },
  {
    title: "Aida",
    description: "Latbang",
    picture: require("../../image/da.png"),
  },
  {
    title: "Faiza",
    description: "Latbang",
    picture: require("../../image/fay.png"),
  },
];

export function OrganizationContent() {
  return (
    <div className="font-nunito container my-[60px] mx-auto rounded-2xl py-[50px]">
      <div className="text-bold-orange text-center text-2xl tracking-widest font-bold">
        MEET OUR TEAM
        <br />
        <span>PASAINS 2024</span>
      </div>

      <div className="flex mt-[70px] gap-[20px] flex-wrap justify-center">
        {organizationData.map((data) => {
          return (
            <div className="relative h-[420px] w-[340px]">
              <div className="hover:bg-black bg-light-orange  duration-300">
                <img
                  className="w-full h-[420px] object-cover hover:scale-110"
                  src={data.picture}
                  alt="Member"
                />
                <div className="absolute inset-0 flex items-end justify-center hover:bg-opacity-0">
                  <div className="text-center w-full bg-opacity-50 p ">
                    <h2 className="text-[18px] font-bold text-white">
                      {data.title}
                    </h2>
                    <p className="text-white text-sm">{data.description}</p>
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
