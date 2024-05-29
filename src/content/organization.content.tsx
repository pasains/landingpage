let organizationData = [
  {
    title: "Imam Suyanto",
    description: "Pembina",
    picture: require("../image/gunung.jpg"),
  },
  {
    title: "Bacem",
    description: "Ketua Umum",
    picture: require("../image/gunung.jpg"),
  },
  {
    title: "Tapir",
    description: "Operasional",
    picture: require("../image/gunung.jpg"),
  },
  {
    title: "Kutir",
    description: "Sekertaris",
    picture: require("../image/gunung.jpg"),
  },
  {
    title: "Bulik",
    description: "Bendahara",
    picture: require("../image/gunung.jpg"),
  },
  {
    title: "Cagak",
    description: "Kepala Divisi Gunung Hutan",
    picture: require("../image/gunung.jpg"),
  },
  {
    title: "Ricat",
    description: "Kepala Divisi Caving",
    picture: require("../image/gunung.jpg"),
  },
  {
    title: "Maikel",
    description: "Kepala Divisi Climbing",
    picture: require("../image/gunung.jpg"),
  },
  {
    title: "Pelem",
    description: "Kepala Divisi Lingkungan Hidup",
    picture: require("../image/gunung.jpg"),
  },
];

export function OrganizationContent() {
  return (
      <div className="font-nunito container mt-[60px] mx-auto items-center text-center">
    <div className="text-bold-orange text-xl tracking-wide font-bold">
      Pengurus Harian PASAINS Periode 2024
      </div>
    <div className="mt-[100px] space-y-4xl snap-y snap-mandatory text-black">
        <div className="container snap-always snap-end">
          <img src={require("../image/gunung.jpg")} alt="ikanhiu" className="w-[700px] h-[500px] object-cover mx-auto rounded-xl shadow-xl transition hover:scale-90" />
          <h1 className="mt-[30px] text-lg font-light tracking-wide">{organizationData[0].title}</h1>
          <h2 className="font-bold">{organizationData[0].description}</h2>
        </div>
        <div className="container snap-always snap-end">
          <img src={require("../image/gunung.jpg")} alt="ikanhiu" className="w-[700px] h-[500px] object-cover mx-auto rounded-xl shadow-xl transition hover:scale-90" />
          <h1 className="mt-[30px] text-lg font-light tracking-wide">{organizationData[1].title}</h1>
          <h2 className="font-bold">{organizationData[1].description}</h2>
        </div>
        <div className="container snap-always snap-end">
          <img src={require("../image/gunung.jpg")} alt="ikanhiu" className="w-[700px] h-[500px] object-cover mx-auto rounded-xl shadow-xl transition hover:scale-90" />
          <h1 className="mt-[30px] text-lg font-light tracking-wide">{organizationData[2].title}</h1>
          <h2 className="font-bold">{organizationData[2].description}</h2>
        </div>
        <div className="container snap-always snap-end">
          <img src={require("../image/gunung.jpg")} alt="ikanhiu" className="w-[700px] h-[500px] object-cover mx-auto rounded-xl shadow-xl transition hover:scale-90" />
          <h1 className="mt-[30px] text-lg font-light tracking-wide">{organizationData[3].title}</h1>
          <h2 className="font-bold">{organizationData[3].description}</h2>
        </div>
        <div className="container snap-always snap-end">
          <img src={require("../image/gunung.jpg")} alt="ikanhiu" className="w-[700px] h-[500px] object-cover mx-auto rounded-xl shadow-xl transition hover:scale-90" />
          <h1 className="mt-[30px] text-lg font-light tracking-wide">{organizationData[4].title}</h1>
          <h2 className="font-bold">{organizationData[4].description}</h2>
        </div>
        <div className="container snap-always snap-end">
          <img src={require("../image/gunung.jpg")} alt="ikanhiu" className="w-[700px] h-[500px] object-cover mx-auto rounded-xl shadow-xl transition hover:scale-90" />
          <h1 className="mt-[30px] text-lg font-light tracking-wide">{organizationData[5].title}</h1>
          <h2 className="font-bold">{organizationData[5].description}</h2>
        </div>
        <div className="container snap-always snap-end">
          <img src={require("../image/gunung.jpg")} alt="ikanhiu" className="w-[700px] h-[500px] object-cover mx-auto rounded-xl shadow-xl transition hover:scale-90" />
          <h1 className=" mt-[30px] text-lg font-light tracking-wide">{organizationData[6].title}</h1>
          <h2 className="font-bold">{organizationData[6].description}</h2>
        </div>
    </div>
    </div>
  );
}
