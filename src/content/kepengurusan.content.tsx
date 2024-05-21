import MiniCard from "../container/minicard";

let kepengurusanData = [
  {
    title: "Imam Suyanto",
    description: "Pembina",
    picture: require("../image/ikanhiu.jpg"),
  },
  {
    title: "Bacem",
    description: "Ketua Umum",
    picture: require("../image/ikanhiu.jpg"),
  },
  {
    title: "Tapir",
    description: "Operasional",
    picture: require("../image/ikanhiu.jpg"),
  },
  {
    title: "Kutir",
    description: "Sekertaris",
    picture: require("../image/ikanhiu.jpg"),
  },
  {
    title: "Bulik",
    description: "Bendahara",
    picture: require("../image/ikanhiu.jpg"),
  },
  {
    title: "Cagak",
    description: "Kepala Divisi Gunung Hutan",
    picture: require("../image/ikanhiu.jpg"),
  },
  {
    title: "Ricat",
    description: "Kepala Divisi Caving",
    picture: require("../image/ikanhiu.jpg"),
  },
  {
    title: "Maikel",
    description: "Kepala Divisi Climbing",
    picture: require("../image/ikanhiu.jpg"),
  },
  {
    title: "Pelem",
    description: "Kepala Divisi Lingkungan Hidup",
    picture: require("../image/ikanhiu.jpg"),
  },
];

export function KepengurusanContent() {
  return (
    <div className="container p-3 mt-6 mx-auto items-center rounded-xl text-lg font-bold text-center">
      Bagan Kepengurusan PASAINS Periode 2024
      <div className="mt-12 space-y-4xl">
        <div>
          <h1>{kepengurusanData[0].title}</h1>
          <h2>{kepengurusanData[0].description}</h2>
          <img src={require("../image/ikanhiu.jpg")} />
        </div>
        <MiniCard
          title={kepengurusanData[1].title}
          description={kepengurusanData[1].description}
          picture={kepengurusanData[1].picture}
        />
      </div>
      <div className="grid grid-cols-3 mt-16 mx-72">
        <MiniCard
          title={kepengurusanData[4].title}
          description={kepengurusanData[4].description}
          picture={kepengurusanData[4].picture}
        />
        <MiniCard
          title={kepengurusanData[2].title}
          description={kepengurusanData[2].description}
          picture={kepengurusanData[2].picture}
        />
        <MiniCard
          title={kepengurusanData[3].title}
          description={kepengurusanData[3].description}
          picture={kepengurusanData[3].picture}
        />
      </div>
      <div className="grid grid-cols-3 mt-16 mx-72">
        <MiniCard
          title={kepengurusanData[5].title}
          description={kepengurusanData[5].description}
          picture={kepengurusanData[5].picture}
        />
        <MiniCard
          title={kepengurusanData[6].title}
          description={kepengurusanData[6].description}
          picture={kepengurusanData[6].picture}
        />
        <MiniCard
          title={kepengurusanData[7].title}
          description={kepengurusanData[7].description}
          picture={kepengurusanData[7].picture}
        />
      </div>
    </div>
  );
}
