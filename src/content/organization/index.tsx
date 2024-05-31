let organizationData = [
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
    <div className="font-nunito container my-[60px] mx-auto bg-white rounded-2xl py-[50px]">
      <div className="text-bold-orange text-center text-2xl tracking-widest font-bold hover:opacity-75">
        MEET OUR TEAM<br /><span>PASAINS 2024</span>
      </div>

      <div className="grid grid-cols-3 mx-auto place-items-center gap-[100px] mt-[90px]">
      <div className="relative h-[420px] w-[340px] bg-light-orange overflow-hidden transition-transform transform scale-100 hover:scale-90">
      <div className="h-[100px] bg-white">
      <img className="w-full h-[420px] object-cover" src={organizationData[0].picture} alt="Member Image" />
      <div className="absolute inset-0 flex items-end justify-center">
      <div className="text-center font-bold">
      <h2 className="text-lg text-white">{organizationData[0].title}</h2>
      <p className="text-white mb-[10px]">{organizationData[0].description}</p>
      </div>
      </div>
      </div>
      </div>
      <div className="relative h-[420px] w-[340px] bg-light-orange overflow-hidden transition-transform transform scale-100 hover:scale-90">
      <div className="h-[100px] bg-white">
      <img className="w-full h-[420px] object-cover" src={organizationData[1].picture} alt="Member Image" />
      <div className="absolute inset-0 flex items-end justify-center">
      <div className="text-center font-bold">
      <h2 className="text-lg text-white">{organizationData[1].title}</h2>
      <p className="text-white mb-[10px]">{organizationData[1].description}</p>
      </div>
      </div>
      </div>
      </div>
      <div className="relative h-[420px] w-[340px] bg-light-orange overflow-hidden transition-transform transform scale-100 hover:scale-90">
      <div className="h-[100px] bg-white">
      <img className="w-full h-[420px] object-cover" src={organizationData[2].picture} alt="Member Image" />
      <div className="absolute inset-0 flex items-end justify-center">
      <div className="text-center font-bold">
      <h2 className="text-lg text-white">{organizationData[2].title}</h2>
      <p className="text-white mb-[10px]">{organizationData[2].description}</p>
      </div>
      </div>
      </div>
      </div>
      <div className="relative h-[420px] w-[340px] bg-light-orange overflow-hidden transition-transform transform scale-100 hover:scale-90">
      <div className="h-[100px] bg-white">
      <img className="w-full h-[420px] object-cover" src={organizationData[3].picture} alt="Member Image" />
      <div className="absolute inset-0 flex items-end justify-center">
      <div className="text-center font-bold">
      <h2 className="text-lg text-white">{organizationData[3].title}</h2>
      <p className="text-white mb-[10px]">{organizationData[3].description}</p>
      </div>
      </div>
      </div>
      </div>
      <div className="relative h-[420px] w-[340px] bg-light-orange overflow-hidden transition-transform transform scale-100 hover:scale-90">
      <div className="h-[100px] bg-white">
      <img className="w-full h-[420px] object-cover" src={organizationData[4].picture} alt="Member Image" />
      <div className="absolute inset-0 flex items-end justify-center">
      <div className="text-center font-bold">
      <h2 className="text-lg text-white">{organizationData[4].title}</h2>
      <p className="text-white mb-[10px]">{organizationData[4].description}</p>
      </div>
      </div>
      </div>
      </div>
      <div className="relative h-[420px] w-[340px] bg-light-orange overflow-hidden transition-transform transform scale-100 hover:scale-90">
      <div className="h-[100px] bg-white">
      <img className="w-full h-[420px] object-cover" src={organizationData[5].picture} alt="Member Image" />
      <div className="absolute inset-0 flex items-end justify-center">
      <div className="text-center font-bold">
      <h2 className="text-lg text-white">{organizationData[5].title}</h2>
      <p className="text-white mb-[10px]">{organizationData[5].description}</p>
      </div>
      </div>
      </div>
      </div>
      <div className="relative h-[420px] w-[340px] bg-light-orange overflow-hidden transition-transform transform scale-100 hover:scale-90">
      <div className="h-[100px] bg-white">
      <img className="w-full h-[420px] object-cover" src={organizationData[6].picture} alt="Member Image" />
      <div className="absolute inset-0 flex items-end justify-center">
      <div className="text-center font-bold">
      <h2 className="text-lg text-white">{organizationData[6].title}</h2>
      <p className="text-white mb-[10px]">{organizationData[6].description}</p>
      </div>
      </div>
      </div>
      </div>
      <div className="relative h-[420px] w-[340px] bg-light-orange overflow-hidden transition-transform transform scale-100 hover:scale-90">
      <div className="h-[100px] bg-white">
      <img className="w-full h-[420px] object-cover" src={organizationData[7].picture} alt="Member Image" />
      <div className="absolute inset-0 flex items-end justify-center">
      <div className="text-center font-bold">
      <h2 className="text-lg text-white">{organizationData[7].title}</h2>
      <p className="text-white mb-[10px]">{organizationData[7].description}</p>
      </div>
      </div>
      </div>
      </div>
      <div className="relative h-[420px] w-[340px] bg-light-orange overflow-hidden transition-transform transform scale-100 hover:scale-90">
      <div className="h-[100px] bg-white">
      <img className="w-full h-[420px] object-cover" src={organizationData[8].picture} alt="Member Image" />
      <div className="absolute inset-0 flex items-end justify-center">
      <div className="text-center font-bold">
      <h2 className="text-lg text-white">{organizationData[8].title}</h2>
      <p className="text-white mb-[10px]">{organizationData[8].description}</p>
      </div>
      </div>
      </div>
      </div>
      <div className="relative h-[420px] w-[340px] bg-light-orange overflow-hidden transition-transform transform scale-100 hover:scale-90">
      <div className="h-[100px] bg-white">
      <img className="w-full h-[420px] object-cover" src={organizationData[9].picture} alt="Member Image" />
      <div className="absolute inset-0 flex items-end justify-center">
      <div className="text-center font-bold">
      <h2 className="text-lg text-white">{organizationData[9].title}</h2>
      <p className="text-white mb-[10px]">{organizationData[9].description}</p>
      </div>
      </div>
      </div>
      </div>
      <div className="relative h-[420px] w-[340px] bg-light-orange overflow-hidden transition-transform transform scale-100 hover:scale-90">
      <div className="h-[100px] bg-white">
      <img className="w-full h-[420px] object-cover" src={organizationData[10].picture} alt="Member Image" />
      <div className="absolute inset-0 flex items-end justify-center">
      <div className="text-center font-bold">
      <h2 className="text-lg text-white">{organizationData[10].title}</h2>
      <p className="text-white mb-[10px]">{organizationData[10].description}</p>
      </div>
      </div>
      </div>
      </div>
      <div className="relative h-[420px] w-[340px] bg-light-orange overflow-hidden transition-transform transform scale-100 hover:scale-90">
      <div className="h-[100px] bg-white">
      <img className="w-full h-[420px] object-cover" src={organizationData[11].picture} alt="Member Image" />
      <div className="absolute inset-0 flex items-end justify-center">
      <div className="text-center font-bold">
      <h2 className="text-lg text-white">{organizationData[11].title}</h2>
      <p className="text-white mb-[10px]">{organizationData[11].description}</p>
      </div>
      </div>
      </div>
      </div>

    </div>
    </div>
  );
}
