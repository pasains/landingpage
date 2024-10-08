import { GiMountainClimbing } from "react-icons/gi";
import { GiMountaintop } from "react-icons/gi";
import { GiCaveEntrance } from "react-icons/gi";
import { GiPineTree } from "react-icons/gi";

export function HomeContent() {
  return (
    <div>
      <section className="bg-mount bg-cover bg-center bg-no-repeat h-screen relative bg-fixed ios-bg-fix">
        <div className="bg-black bg-opacity-60 mx-auto h-screen w-screen space-y-10 md:space-y-12">
          <h1 className="pt-36 md:pt-44 text-center md:text-left lg:text-5xl md:text-4xl sm:text-3xl text-3xl text-white mx-auto px-4 md:px-6 font-bold tracking-widest">
            NEVER <br /> ENDING <br />
            <span> BROTHERHOOD</span>
          </h1>
          <div className="con1aier border font-normal p-2 md:p-4 m-6 md:m-8 w-80 md:w-96 text-white text-md text-justify mx-auto tracking-wide">
            Halo, sahabat PASAINS! <br />
            <span>
              Selamat datang di halaman resmi PASAINS, organisasi pencinta alam
              Fakultas Matematika dan Ilmu Pengetahuan Alam, Universitas Gadjah
              Mada. Kami adalah unit kegiatan mahasiswa yang terdiri dari
              mahasiswa-mahasiswa yang memiliki kepedulian dan kecintaan
              terhadap kelestarian alam serta semangat petualangan.
            </span>
          </div>
        </div>
        <svg
          className="absolute -bottom-1 w-full h-auto"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#ffffff"
            fill-opacity="1"
            d="M0,320L60,288C120,256,240,192,360,181.3C480,171,600,213,720,218.7C840,224,960,192,1080,165.3C1200,139,1320,117,1380,106.7L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
        <svg
          className="absolute -bottom-1 w-full h-auto"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#ffffff"
            fill-opacity="0.7"
            d="M0,290L40,268C100,236,220,172,340,171.3C490,171,600,213,920,188.7C440,254,860,192,960,165.3C1000,158,1120,129,1300,86.7L1640,25L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
        <svg
          className="absolute -bottom-1 w-full h-auto"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#ffffff"
            fill-opacity="0.5"
            d="M0,260L20,248C80,216,200,152,330,151.3C540,141,650,213,1020,208.7C840,244,960,192,1080,165.3C1200,139,1320,117,1380,106.7L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </section>
      <section className="w-full:flex-wrap p-[50px] mx-auto justify-center items-center">
        <div className="text-lg text-center md:text-2xl mt-10 tracking-wider font-extrabold text-light-orange ">
          DIVISI
        </div>
        <p className=" text-md md:text-lg font-normal opacity-65 my-3 w-full md:w-1/2 md:my-5 mx-auto text-center">
          PASAINS memiliki empat divisi utama yang berfokus pada kegiatan
          pecinta alam, mulai dari pendakian gunung, susur gua
          <a className="italic"> (caving)</a>, panjat tebing
          <a className="italic"> (climbing)</a> serta lingkungan hidup untuk
          mengembangkan keterampilan dan kepedulian anggota terhadap alam."
        </p>
        <div className="border border-light-orange w-32 mx-auto place-content-center"></div>
        <div className="container flex flex-cols-1 md:flex-cols-2 lg:flex-cols-4 flex-wrap gap-4 md:gap-6 mx-auto my-10 md:my-20">
          <div className="bg-mount2 h-[460px] md:h-[520px] md:w-[360px] bg-center bg-cover opacity-75 text-left mb-10 md:hover:scale-110">
            <div className="bg-black bg-opacity-60 py-32 md:py-40 text-white h-[460px] md:h-[520px] space-y-5 shadow-xl">
              <GiMountaintop className="size-8 mx-10" />
              <h1 className="font-extrabold text-lg mx-10">GUNUNG & HUTAN</h1>
              <p className="tracking-wider w-60 text-sm md:text-md font-normal mx-10">
                Fokus pada kegiatan pendakian gunung dan eksplorasi hutan
                Mengadakan ekspedisi, pelatihan navigasi, dan survival di alam
                bebas.
              </p>
            </div>
          </div>
          <div className="bg-caving4 h-[460px] md:h-[520px] md:w-[360px] bg-cover opacity-75 text-left bg-center mb-10 md:hover:scale-110">
            <div className="bg-black bg-opacity-60 py-32 md:py-40 text-white h-[460px] md:h-[520px] space-y-5 shadow-xl">
              <GiCaveEntrance className="size-8 mx-10" />
              <h1 className="font-extrabold text-lg mx-10">SUSUR GUA</h1>
              <p className="w-60 text-sm md:text-md font-normal tracking-wider mx-10">
                Mengadakan eksplorasi dan penelitian di gua-gua. Melatih
                teknik-teknik susur gua dan penanganan keadaan darurat di dalam
                gua.
              </p>
            </div>
          </div>
          <div className="bg-climbing h-[460px] md:h-[520px] md:w-[360px] bg-cover opacity-75 bg-center text-left mb-10 md:hover:scale-110">
            <div className="bg-black bg-opacity-60 py-32 md:py-40 text-white h-[460px] md:h-[520px] space-y-5 shadow-xl">
              <GiMountainClimbing className="size-8 mx-10" />
              <h1 className="font-extrabold text-lg mx-10">PANJAT TEBING</h1>
              <p className="w-60 text-sm  md:text-md font-normal mx-10 tracking-wider">
                Mengembangkan keterampilan dalam olahraga panjat tebing.
                Melakukan pelatihan dan latihan rutin di dinding panjat tebing,
                baik alamiah maupun buatan.
              </p>
            </div>
          </div>
          <div className="bg-nature h-[460px] md:h-[520px] md:w-[360px] bg-cover bg-center opacity-75 text-left mb-10 md:hover:scale-110">
            <div className="bg-black bg-opacity-60 py-32 md:py-40 text-white h-[460px] md:h-[520px] space-y-5 shadow-xl">
              <GiPineTree className="size-8 mx-10" />
              <h1 className="font-extrabold text-lg mx-10">LINGKUNGAN HIDUP</h1>
              <p className="tracking-wider w-60 text-sm md:text-md font-normal mx-10">
                Mengadakan kegiatan yang berkaitan dengan pelestarian
                lingkungan. Melakukan kampanye lingkungan, penanaman pohon, dan
                kegiatan konservasi lainnya.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-full relative">
        <div className="bg-caving2 bg-cover bg-center bg-no-repeat h-screen relative bg-fixed ios-bg-fix">
          <div className="bg-black bg-opacity-60 mx-auto text-center h-screen">
            <div className="pt-96 md:pt-[480px] font-normal mx-auto tracking-wider mb-4 p-4 text-lg text-white">
              "A journey of a thousand miles begins with a single step."
            </div>
            <p className="text-lg tracking-wider font-bold text-light-orange text-center mb-6">
              - Lao Tzu -
            </p>
          </div>
        </div>
        <svg
          className="absolute -top-1 w-full h-auto rotate-180"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#ffffff"
            fill-opacity="1"
            d="M0,320L60,288C120,256,240,192,360,181.3C480,171,600,213,720,218.7C840,224,960,192,1080,165.3C1200,139,1320,117,1380,106.7L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
        <svg
          className="absolute -top-1 w-full h-auto rotate-180"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#ffffff"
            fill-opacity="0.7"
            d="M0,290L40,268C100,236,220,172,340,171.3C490,171,600,213,920,188.7C440,254,860,192,960,165.3C1000,158,1120,129,1300,86.7L1640,25L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
        <svg
          className="absolute  -top-1 w-full h-auto rotate-180"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#ffffff"
            fill-opacity="0.5"
            d="M0,260L20,248C80,216,200,152,330,151.3C540,141,650,213,1020,208.7C840,244,960,192,1080,165.3C1200,139,1320,117,1380,106.7L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </section>
    </div>
  );
}
