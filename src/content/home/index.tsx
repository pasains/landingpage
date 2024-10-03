import { GiMountainClimbing } from "react-icons/gi";
import { GiMountaintop } from "react-icons/gi";
import { GiCaveEntrance } from "react-icons/gi";
import { GiPineTree } from "react-icons/gi";

export function HomeContent() {
  return (
    <div>
      <section className="mx-auto max-w-full relative">
        <div className="bg-mount mx-auto bg-center bg-no-repeat bg-cover bg-fixed">
          <div className="bg-black bg-opacity-40 h-screen place-content-center text-center md:text-left">
            <h1 className="lg:text-5xl text-3xl text-white mx-auto p-4 md:p-6 font-bold leading-tight tracking-widest">
              NEVER <br /> ENDING <br />
              <span> BROTHERHOOD</span>
            </h1>
            <div className="contaier border font-normal w-80 p-2 md:p-4 m-4 h-fit md:m-6 md:w-96 text-white text-md text-justify mx-auto tracking-wide">
              Halo, Sahabat PASAINS! <br />{" "}
              <span>
                Selamat datang di halaman resmi PASAINS, organisasi pencinta
                alam Fakultas Matematika dan Ilmu Pengetahuan Alam, Universitas
                Gadjah Mada. Kami adalah unit kegiatan mahasiswa yang terdiri
                dari mahasiswa-mahasiswa yang memiliki kepedulian dan kecintaan
                terhadap kelestarian alam serta semangat petualangan.
              </span>
            </div>
          </div>
        </div>
        <svg
          className="absolute bottom-0  w-full h-auto"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 318"
        >
          <path
            fill="#ffffff"
            fill-opacity="1"
            d="M0,320L60,288C120,256,240,192,360,181.3C480,171,600,213,720,218.7C840,224,960,192,1080,165.3C1200,139,1320,117,1380,106.7L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
        <svg
          className="absolute bottom-0 w-full h-auto"
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
          className="absolute bottom-0 w-full h-auto"
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
      <section className="w-screen:flex-wrap p-[50px] mx-auto place-content-center">
        <div className="text-lg md:text-2xl mt-10 tracking-wider font-extrabold text-light-orange ">
          DIVISI
        </div>
        <p className=" text-md md:text-lg font-normal opacity-65 my-3 w-full md:w-1/2 md:my-5 mx-auto text-center">
          PASAINS memiliki tiga divisi utama yang berfokus pada kegiatan pecinta
          alam, mulai dari pendakian gunung, susur gua (caving), panjat tebing
          (climbing) hingga pelestarian lingkungan, untuk mengembangkan
          keterampilan dan kepedulian anggota terhadap alam."
        </p>
        <div className="border border-light-orange w-32 mx-auto place-content-center"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-auto place-items-center my-10 md:my-20">
          <div className="bg-mount2 h-[460px] md:h-[520px] md:w-[360px] bg-center bg-cover opacity-75 text-left mb-10">
            <div className="bg-black bg-opacity-60 text-white h-[460px] md:h-[520px] place-content-center space-y-5">
              <GiMountaintop className="size-8 mx-10" />
              <h1 className="font-extrabold text-lg mx-10">GUNUNG & HUTAN</h1>
              <p className="tracking-wider w-60 text-sm font-normal mx-10">
                Fokus pada kegiatan pendakian gunung dan eksplorasi hutan
                Mengadakan ekspedisi, pelatihan navigasi, dan survival di alam
                bebas.
              </p>
            </div>
          </div>
          <div className="bg-caving4 h-[460px] md:h-[520px] md:w-[360px] bg-cover opacity-75 text-left bg-center mb-10">
            <div className="bg-black bg-opacity-60 text-white h-[460px] md:h-[520px] place-content-center space-y-5">
              <GiCaveEntrance className="size-8 mx-10" />
              <h1 className="font-extrabold text-lg mx-10">SUSUR GUA</h1>
              <p className="w-60 text-sm font-normal tracking-wider mx-10">
                Mengadakan eksplorasi dan penelitian di gua-gua. Melatih
                teknik-teknik susur gua dan penanganan keadaan darurat di dalam
                gua.
              </p>
            </div>
          </div>
          <div className="bg-climbing h-[460px] md:h-[520px] md:w-[360px] bg-cover opacity-75 bg-center text-left mb-10">
            <div className="bg-black bg-opacity-60 text-white h-[460px] md:h-[520px] place-content-center space-y-5">
              <GiMountainClimbing className="size-8 mx-10" />
              <h1 className="font-extrabold text-lg mx-10">PANJAT TEBING</h1>
              <p className="w-60 text-sm font-normal mx-10 tracking-wider">
                Mengembangkan keterampilan dalam olahraga panjat tebing.
                Melakukan pelatihan dan latihan rutin di dinding panjat tebing,
                baik alamiah maupun buatan.
              </p>
            </div>
          </div>
          <div className="bg-nature h-[460px] md:h-[520px] md:w-[360px] bg-cover bg-center opacity-75 text-left mb-10">
            <div className="bg-black bg-opacity-60 text-white h-[460px] md:h-[520px] place-content-center space-y-5">
              <GiPineTree className="size-8 mx-10" />
              <h1 className="font-extrabold text-lg mx-10">LINGKUNGAN HIDUP</h1>
              <p className="tracking-wider w-60 text-sm font-normal mx-10">
                Mengadakan kegiatan yang berkaitan dengan pelestarian
                lingkungan. Melakukan kampanye lingkungan, penanaman pohon, dan
                kegiatankonservasi lainnya.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-full relative">
        <div className="bg-caving2 mx-auto bg-right bg-cover bg-no-repeat bg-fixed">
          <div className="bg-black bg-opacity-60 h-screen place-content-center text-center md:text-left">
            <div className="font-normal  tracking-wider mb-4 text-lg text-white text-center">
              "A journey of a thousand miles begins with a single step."
            </div>
            <p className="text-lg tracking-wider font-bold text-light-orange text-center mb-6">
              - Lao Tzu -
            </p>
          </div>
        </div>
        <svg
          className="absolute top-0  w-full h-auto rotate-180"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 318"
        >
          <path
            fill="#ffffff"
            fill-opacity="1"
            d="M0,320L60,288C120,256,240,192,360,181.3C480,171,600,213,720,218.7C840,224,960,192,1080,165.3C1200,139,1320,117,1380,106.7L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
        <svg
          className="absolute top-0 w-full h-auto rotate-180"
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
          className="absolute top-0 w-full h-auto rotate-180"
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
