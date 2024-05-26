let kepengurusanData = [
  {
    title: "Imam Suyanto",
    description: "Pembina",
    picture: require("../image/gunung1.jpg"),
  },
  {
    title: "Bacem",
    description: "Ketua Umum",
    picture: require("../image/gunung1.jpg"),
  },
  {
    title: "Tapir",
    description: "Operasional",
    picture: require("../image/gunung1.jpg"),
  },
  {
    title: "Kutir",
    description: "Sekertaris",
    picture: require("../image/gunung1.jpg"),
  },
  {
    title: "Bulik",
    description: "Bendahara",
    picture: require("../image/gunung1.jpg"),
  },
  {
    title: "Cagak",
    description: "Kepala Divisi Gunung Hutan",
    picture: require("../image/gunung1.jpg"),
  },
  {
    title: "Ricat",
    description: "Kepala Divisi Caving",
    picture: require("../image/gunung1.jpg"),
  },
  {
    title: "Maikel",
    description: "Kepala Divisi Climbing",
    picture: require("../image/gunung1.jpg"),
  },
  {
    title: "Pelem",
    description: "Kepala Divisi Lingkungan Hidup",
    picture: require("../image/gunung1.jpg"),
  },
];

export function KepengurusanContent() {
  return (
      <div className="container mt-[60px] mx-auto items-center text-center">
    <div className="text-bold-orange text-xl tracking-wide font-bold">
      Pengurus Harian PASAINS Periode 2024
      </div>
    <div className="mt-[100px] space-y-4xl snap-y snap-mandatory text-black">
        <div className="container snap-always snap-end">
          <img src={require("../image/gunung1.jpg")} alt="ikanhiu" className="w-[700px] h-[500px] object-cover mx-auto rounded-xl shadow-xl transition hover:scale-90" />
          <h1 className="mt-[30px] text-lg font-light tracking-wide">{kepengurusanData[0].title}</h1>
          <h2 className="font-bold">{kepengurusanData[0].description}</h2>
        </div>
        <div className="container snap-always snap-end">
          <img src={require("../image/gunung1.jpg")} alt="ikanhiu" className="w-[700px] h-[500px] object-cover mx-auto rounded-xl shadow-xl transition hover:scale-90" />
          <h1 className="mt-[30px] text-lg font-light tracking-wide">{kepengurusanData[1].title}</h1>
          <h2 className="font-bold">{kepengurusanData[1].description}</h2>
        </div>
        <div className="container snap-always snap-end">
          <img src={require("../image/gunung1.jpg")} alt="ikanhiu" className="w-[700px] h-[500px] object-cover mx-auto rounded-xl shadow-xl transition hover:scale-90" />
          <h1 className="mt-[30px] text-lg font-light tracking-wide">{kepengurusanData[2].title}</h1>
          <h2 className="font-bold">{kepengurusanData[2].description}</h2>
        </div>
        <div className="container snap-always snap-end">
          <img src={require("../image/gunung1.jpg")} alt="ikanhiu" className="w-[700px] h-[500px] object-cover mx-auto rounded-xl shadow-xl transition hover:scale-90" />
          <h1 className="mt-[30px] text-lg font-light tracking-wide">{kepengurusanData[3].title}</h1>
          <h2 className="font-bold">{kepengurusanData[3].description}</h2>
        </div>
        <div className="container snap-always snap-end">
          <img src={require("../image/gunung1.jpg")} alt="ikanhiu" className="w-[700px] h-[500px] object-cover mx-auto rounded-xl shadow-xl transition hover:scale-90" />
          <h1 className="mt-[30px] text-lg font-light tracking-wide">{kepengurusanData[4].title}</h1>
          <h2 className="font-bold">{kepengurusanData[4].description}</h2>
        </div>
        <div className="container snap-always snap-end">
          <img src={require("../image/gunung1.jpg")} alt="ikanhiu" className="w-[700px] h-[500px] object-cover mx-auto rounded-xl shadow-xl transition hover:scale-90" />
          <h1 className="mt-[30px] text-lg font-light tracking-wide">{kepengurusanData[5].title}</h1>
          <h2 className="font-bold">{kepengurusanData[5].description}</h2>
        </div>
        <div className="container snap-always snap-end">
          <img src={require("../image/gunung1.jpg")} alt="ikanhiu" className="w-[700px] h-[500px] object-cover mx-auto rounded-xl shadow-xl transition hover:scale-90" />
          <h1 className=" mt-[30px] text-lg font-light tracking-wide">{kepengurusanData[6].title}</h1>
          <h2 className="font-bold">{kepengurusanData[6].description}</h2>
        </div>
    </div>
    </div>
  );
}
