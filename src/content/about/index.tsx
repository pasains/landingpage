export function AboutContent() {
  return (
    <div className="font-nunito w-full md:w-1/2 container mx-auto p-4 md:p-6">
      <section className="flex items-center space-x-sm md:space-x-md mb-8 md:mb-16">
        <button className="border h-16 md:h-24 w-0 border-light-orange"></button>
        <h1 className="text-3xl md:text-5xl text-left font-extrabold tracking-tighter">
          GET TO KNOW US <br />
          <span className="text-bold-orange">PASAINS</span>
        </h1>
      </section>
      <div className="place-content-center space-y-lg md:space-y-2xl">
        <section className="grid grid-cols md:grid-cols-2 gap-10 md:gap-8">
          <div className="">
            <p className="text-justify text-pretty font-light md:tracking-wide">
              <a className="text-5xl text-light-orange font-bold">P</a>ASAINS
              adalah sebuah Unit Kegiatan Mahasiswa (UKM) yang bergerak di
              bidang ilmu kepecintaalaman yang ada di lingkungan Fakultas
              Matematika dan Ilmu Pengetahuan Alam (FMIPA) Universitas Gadjah
              Mada (UGM) yang berpedoman pada kode etik Pecinta Alam dan Tri
              Dharma Perguruan Tinggi serta berasaskan Pancasila dan berdasarkan
              UUD 1945. Pembentukan UKM PASAINS diinisiasi oleh mahasiswa FMIPA
              UGM angkatan 1994 – 1995. Awalnya, PASAINS bernama MAMI PAPA yang
              didirikan pada tahun 1995. Tujuan dibentuknya yakni untuk mewadahi
              kegiatan bersama mahasiswa lintas jurusan atau prodi FMIPA melalui
              kegiatan kepecintaalaman. Kegiatan UKM MAMI PAPA tersebut awalnya
              berpusat di basecamp yang bernama “Rumah Hantu” yaitu sekretariat
              bersama dengan Himpunan Mahasiswa Geofisika UGM (HMGF) dan{" "}
              <a className="italic">Science Music Community</a> (SMC) UGM.
            </p>
          </div>
          <div className="relative w-fit h-fit place-items-center my-auto mx-auto items-end">
            <img
              src={require("../../image/lambang.jpg")}
              alt="logo"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="relative w-fit h-[360px] place-items-center my-auto mx-auto items-end">
            <img
              src={require("../../image/jadul2.jpg")}
              alt="logo"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <p className="text-justify text-pretty font-light md:tracking-wide ">
            Pada tahun 1996, tepatnya tanggal 11 Oktober 1996 dilakukan
            pendakian massal di Gunung Lawu yang kemudian menjadi pembentukan
            dan pengesahan PASAINS FMIPA UGM. Hal tersebut mengawali perjalanan
            panjang PASAINS yang menjunjung tinggi persaudaraan menuju
            <a className="italic"> “Never Ending Brotherhood”</a>.
            Kegiatan-kegiatan yang dilakukan pada saat itu yakni{" "}
            <a className="italic">mountaineering</a>, ilmu survival, panjat
            tebing, susur gua, pengadaan alat, peningkatan skill, dan
            pengumpulan materi kepecintaalaman dalam bentuk “Kitab Suci
            PASAINS”. Hingga kini, PASAINS terus mengembangkan kemampuan dan
            merekrut anggota baru tiap tahunnya namun tetap mempertahankan
            slogan <a className="italic"> “Never Ending Brotherhood”</a> dan
            “Paseduluran Saklawase” serta menjaga tali persaudaraan hingga tak
            terbatas hari esok.
          </p>
          <div className="relative w-fit h-fit place-items-center my-auto">
            <p className="text-justify text-pretty font-light md:tracking-wide ">
              Saat ini, PASAINS tetap fokus dalam pengembangan empat divisi
              utamanya: Gunung Hutan, Susur Gua, Panjat Tebing, dan Lingkungan
              Hidup, dengan tujuan untuk melatih dan mempersiapkan calon anggota
              muda agar dapat menjadi anggota penuh dan mendapatkan Nomor Pokok
              Anggota (NPA) sesuai dengan ketentuan yang tercantum dalam
              Anggaran Dasar dan Rumah Tangga (AD ART). Selain itu, PASAINS juga
              aktif dalam berbagai kegiatan sosial, pengabdian masyarakat, dan
              pemberdayaan komunitas, menunjukkan komitmen kami tidak hanya
              mempelajari alam, tetapi juga berkontribusi positif bagi
              masyarakat secara luas.
            </p>
          </div>
          <div className="text-light-orange text-5xl md:text-6xl font-bold tracking-widest space-y-4 text-right">
            <h1>Our</h1>
            <h2>Journey</h2>
            <h3>Since</h3>
            <h4>1996</h4>
            <button className="border w-40 md:w-80 border-bold-orange "></button>
          </div>
        </section>
        <div>
          <div className="grid grid-cols md:grid-cols-2 w-full place-items-center gap-2">
            <img
              src={require("../../image/jadul3.jpeg")}
              alt=""
              className="w-full h-96 object-cover place-content-center rounded-md"
            />
            <img
              src={require("../../image/jadul1.jpeg")}
              alt=""
              className="w-full h-96 object-cover place-content-center rounded-md"
            />
            <img
              src={require("../../image/jadul6.jpeg")}
              alt=""
              className="w-full h-96 object-cover place-content-center rounded-md"
            />
            <img
              src={require("../../image/jadul4.jpeg")}
              alt=""
              className="w-full h-96 object-cover place-content-center rounded-md"
            />
          </div>
          <div className="mx-auto items-center mt-5 text-md tracking-wide text-center">
            Kumpulan foto-foto sejarah awal berdirinya organisasi menggambarkan
            perjalanan dan awal mula perjuangan serta visi yang menjadi landasan
            PASAINS hingga saat ini.
          </div>
        </div>
        <section className="space-y-lg container bg-black bg-opacity-50 p-4 md:p-8">
          <div className="flex flex-col-reverse md:flex-row items-center">
            <p className="md:text-justify text-center font-bold border  border-light-orange p-4 md:p-6 w-full md:w-2/3">
              Mewujudkan organisasi kepecintaalaman yang menjunjung tinggi
              tanggung jawab, solidaritas, dan rasa kekeluargaan dengan tetap
              mengutamakan etika serta menjadi wadah pengembangan keterampilan.
            </p>
            <div className="text-white text-6xl font-bold tracking-widest space-y-4 text-center place-items-end w-full md:w-1/3 mx-auto mb-4 md:mb-0">
              Visi
            </div>
          </div>
          <div className="flex flex-col-reverse md:flex-row items-center">
            <div className="border p-6 w-full md:w-2/3 border-light-orange">
              <ol className="list-decimal md:text-justify tracking-wide space-y-2 text-pretty font-bold">
                <li>
                  Menjadikan PASAINS sebagai tempat untuk menyalurkan minat,
                  bakat, dan potensi anggota melalui kegiatan-kegiatannya.
                </li>
                <li>
                  Membangun internal pengurus harian yang bertanggung jawab,
                  solid, dan profesional.
                </li>
                <li>
                  Menjalin dan mempererat rasa kekeluargaan yang harmonis tanpa
                  mengesampingkan etika komunikasi antar anggota.
                </li>
                <li>
                  Mengembangkan program pelatihan dan pembelajaran yang berfokus
                  pada peningkatan keterampilan.
                </li>
                <li>
                  Membangun hubungan baik yang saling menguntungkan dengan pihak
                  lain sebagai sarana branding dan peningkatan kualitas
                  organisasi.
                </li>
                <li>
                  Meningkatkan kualitas administrasi dan manajerial internal
                  yang terstruktur. Mewujudkan organisasi kepecintaalaman yang
                  menjunjung tinggi tanggung jawab, solidaritas, dan rasa
                  kekeluargaan dengan tetap mengutamakan etika serta menjadi
                  wadah pengembangan keterampilan.
                </li>
              </ol>
            </div>
            <div className="text-white text-6xl font-bold tracking-widest space-y-xl w-full md:w-1/3 mx-auto place-items-end text-center mb-4 md:m-0">
              Misi
            </div>
          </div>
        </section>
        <section className="">
          <div className="mx-auto place-content-center text-center items-center space-y-xl md:space-y-2xl my-8">
            <h1 className="text-3xl md:text-5xl text-light-orange text-center tracking-widest font-bold">
              STRUKTUR KEPENGURUSAN
            </h1>
            <img
              src={require("../../image/chartpasains.png")}
              alt="chart"
              className="items-center mx-auto"
            />
          </div>
        </section>
      </div>
    </div>
  );
}
