import { Layout } from "../layout";
import { IoPersonCircle } from "react-icons/io5";
import { RiDoubleQuotesR } from "react-icons/ri";
import RefreshTop from "../components/refreshtop";

export interface PostProps {
  id: number;
  slug: string;
  title: string;
  location: string;
  content: string;
  description: string;
  picture: string;
}

export function PostContent(props: PostProps) {
  return (
    <Layout>
      <RefreshTop />
      <div className="pt-[96px]">
        <div className="flex flex-col place-content-center mx-auto container items-center w-full md:w-1/2">
          <div className="relative">
            <img
              src={require("../image/jepitu4.jpeg")}
              alt="sumbing"
              className="w-full h-[520px] items-center object-cover place-content-center mx-auto"
            />
            <div className="p-6 md:p-12 space-y-1">
              <h1 className="text-lg md:text-2xl font-bold opacity-80 text-left text-wrap">
                Obati Keresahan Warga: Mahasiswa FMIPA UGM Ciptakan Alat
                Pengusir Hama Monyet Ekor Panjang
              </h1>
              <h2 className="font-light text-md md:text-lg text-bold-orange tracking-wide text-left ">
                Jepitu, 16 September 2023
              </h2>
              <h3 className="flex gap-2 text-sm items-center">
                <IoPersonCircle className="size-4 items-center" />
                <p className="items-center">Cephie dan Rastaban PASAINS 23</p>
              </h3>
              <div>
                <p className="indent-8 text-justify text-md tracking-wide text-pretty leading-loose mt-4 md:mt-8">
                  Kehadiran koloni monyet ekor panjang
                  <a className="italic"> (long tailed macaque)</a> di bagian
                  selatan Daerah Istimewa Yogyakarta sudah kerap kali meresahkan
                  warga. Spesies yang naik tingkat menjadi satwa yang dilindungi
                  ini menjadikannya sulit untuk diatasi. Selain itu, mereka
                  bergerak secara berkelompok dan tidak takut akan kehadiran
                  manusia. Dengan latar belakang hal tersebut, perlu adanya
                  tindakan preventif untuk mencegah invasi monyet ekor panjang
                  tersebut di ladang hingga pemukiman warga. Invasi monyet di
                  ladang dan pemukiman tentunya sangat merugikan bagi masyarakat
                  seperti terjadinya kegagalan panen. Dalam mengupayakan hal
                  tersebut, Unit Kegiatan Mahasiswa PASAINS FMIPA UGM berinovasi
                  dalam pembuatan alat pengusir hama monyet ekor panjang dalam
                  kegiatan Program Penguatan Kapasitas Organisasi Kemahasiswaan
                  (PPK Ormawa).
                </p>
                <p className="indent-8 text-justify text-md tracking-wide text-pretty leading-loose mt-4 md:mt-8">
                  Dalam kegiatan PPK Ormawa tersebut, tema yang diangkat oleh
                  UKM PASAINS FMIPA UGM yakni Kampung Iklim dengan sasaran Desa
                  Jepitu, Kecamatan Girisubo, Gunungkidul. Salah satu programnya
                  yakni pencegahan invasi monyet ekor panjang dengan pembuatan
                  alat pengusir hama monyet ekor panjang dan pembuatan hutan
                  buatan untuk program jangka panjang. Alat ini dibuat berdasar
                  pada perilaku monyet yang berkoloni dan memiliki pemimpin yang
                  dominan (alpha) dengan sasaran pemimpin koloni monyet yang
                  cenderung melakukan hal baru terlebih dahulu seperti menemukan
                  sumber makanan.
                </p>
                <p className="indent-8 text-justify text-md tracking-wide text-pretty leading-loose mt-4 md:mt-8">
                  Alat ini menerapkan konsep fluida dinamis yang dapat
                  menyemprotkan pewarna untuk menandai monyet alpha yang
                  berakibat pada hilangnya sosok pemimpin dalam koloni tersebut
                  sehingga mencegah koloni monyet tidak menginvasi ladang dan
                  perumahan warga serta mencari pemimpin baru. Sumber energi
                  alat ini berasal dari aki dan energi matahari dengan
                  menggunakan panel surya. Prinsip utamanya berupa pemasangan
                  jebakan <a className="italic"> (trap)</a> agar monyet dapat
                  menariknya dan alat tersebut dapat menyemprotkan pewarna.
                  Pergerakan dan perilaku monyet juga diamati menggunakan kamera
                  jebakan <a className="italic"> (trap)</a>. Dengan begitu,
                  dapat mencegah invasi monyet ekor panjang tanpa melukai
                  primata yang dilindungi tersebut dan keresahan masyarakat
                  dapat berkurang.
                </p>
                <p className="indent-8 text-justify text-md tracking-wide text-pretty leading-loose mt-4 md:mt-8">
                  Alat pengusir monyet ekor panjang ini telah dilakukan demo
                  kepada warga di Dusun Pendowo, Jepitu, Girisubo, Gunungkidul
                  pada 16 September 2023 lalu. Para warga antusias dalam
                  mempelajari konsep dan penggunaan alat pengusir monyet
                  tersebut. Selain itu, para warga juga memberi masukan-masukan
                  berdasarkan pengalamannya berhadapan dengan monyet ekor
                  panjang. Dengan demikian, alat ini disempurnakan berdasar pada
                  kondisi sebenarnya. Kegiatan ini dilakukan secara
                  berkelanjutan baik dalam penyempurnaan alat maupun pengawasan
                  dan evaluasi serta menambah kuantitas alat. Dari upaya-upaya
                  tersebut, harapannya keresahan warga akibat keberadaan monyet
                  ekor panjang dapat teratasi tanpa melukai hewan yang
                  dilindungi tersebut.
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols md:grid-cols-2 p-4 gap-4 md:p-6 md:gap-6">
            <img
              src={require("../image/jepitu1.jpeg")}
              alt=""
              className="w-full h-[540px] object-cover place-content-center"
            />
            <img
              src={require("../image/jepitu2.jpeg")}
              alt=""
              className="w-full h-[540px] object-cover place-content-center"
            />
            <img
              src={require("../image/jepitu3.jpeg")}
              alt=""
              className="w-full h-[540px] object-cover place-content-center"
            />
            <img
              src={require("../image/jepitu5.jpeg")}
              alt=""
              className="w-full h-[540px] object-cover place-content-center"
            />
          </div>
          <div className="p-4">
            <p className="text-justify text-md tracking-wide text-pretty leading-loose">
              Kumpulan foto-foto kegiatan pemasangan alat pengusir hama monyet ekor
              panjang.
            </p>
          </div>
          <div className="flex gap-4 md:gap-6 items-center p-6 md:p-12 mb-4 font-light text-md md:text-lg md:tracking-wider">
            <RiDoubleQuotesR className="size-14 md:size-16 fill-light-orange" />
            <div className="border border-light-orange h-20"></div>
            <p>
            "kukukuk kukuk kukkkk"
              <br /> <span> — Monyet 2024 </span>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
