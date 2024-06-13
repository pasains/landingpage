export function AboutContent() {
  return (
    <div className="font-nunito w-full md:w-1/2 container mx-auto p-6 md:p-8">
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
              <a className="text-5xl text-light-orange font-bold">M</a>ahasiswa,
              sebagai bagian dari masyarakat dan lingkungan alam, merasa
              bertanggung jawab atas kelestarian serta dinamika lingkungan alam
              dan sosial. Tanggung jawab ini diwujudkan dalam sikap dan
              pemikiran yang berwawasan kepecintaalaman. PASAINS mewadahi
              mahasiswa Fakultas Matematika dan Ilmu Pengetahuan Alam
              Universitas Gadjah Mada yang peduli lingkungan dan berminat pada
              kepecintaalaman. PASAINS adalah sarana untuk mewujudkan sikap dan
              pemikiran mahasiswa FMIPA UGM tentang lingkungan alam dan sosial
              berdasarkan Pancasila, UUD 1945, dan Tri Dharma Perguruan Tinggi.
              PASAINS merupakan unit kegiatan mahasiswa FMIPA UGM dengan
              kegiatan kepecintaalaman, baik keterampilan maupun ilmiah, sesuai
              dengan landasan dan kode etik pecinta alam.
            </p>
          </div>
          <div className="relative w-fit h-fit place-items-center my-auto mx-auto items-end">
            <img
              src={require("../../image/lambang.jpg")}
              alt="logo"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="relative w-fit h-fit place-items-center my-auto text-left">
            <div className="text-light-orange text-5xl md:text-6xl font-bold tracking-widest space-y-4">
              <h1>Our</h1>
              <h2>Journey</h2>
              <h3>Since</h3>
              <h4>1996</h4>
              <button className="border w-40 md:w-80 border-bold-orange "></button>
            </div>
          </div>
            <p className="text-justify text-pretty font-light md:tracking-wide ">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn't anything embarrassing
              hidden in the middle of text. All the Lorem Ipsum generators on
              the Internet tend to repeat predefined chunks as necessary, making
              this the first true generator on the Internet. It uses a
              dictionary of over 200 Latin words, combined with a handful of
              model sentence structures, to generate Lorem Ipsum which looks
              reasonable. The generated Lorem Ipsum is therefore always free
              from repetition, injected humour, or non-characteristic words etc.
              Ipsum is therefore always free from repetition, injected humour,
              or non-characteristic words etc.
            </p>
        </section>
        <section className="space-y-lg container bg-black bg-opacity-50 p-8">
          <div className="flex flex-col-reverse md:flex-row items-center">
            <p className="text-justify text-pretty font-bold border  border-light-orange p-4 md:p-6 w-full md:w-2/3">
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
              <ol className="list-decimal text-justify text-pretty font-bold">
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
                  yang terstruktur.Mewujudkan organisasi kepecintaalaman yang
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
            <h1 className="text-2xl md:text-3xl text-light-orange text-center tracking-widest font-bold">
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
