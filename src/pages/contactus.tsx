import { Layout } from "../layout";
import { MdPlace } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { MdPhone } from "react-icons/md";
import RefreshTop from "../components/refreshtop";

export function ContactUs() {
  return (
    <Layout>
      <RefreshTop />
      <div>
        <section className="bg-forest bg-fixed bg-cover bg-center bg-no-repeat relative h-full md:h-screen font-nunito focus:scroll-auto ios-bg-fix">
          <div className="bg-black bg-opacity-50 h-full md:h-screen w-screen">
            <h1 className="pt-24 text-2xl md:text-3xl lg:text-4xl text-white text-center tracking-wider font-extrabold mb-6 md:mb-8">
              CONTACT US
            </h1>
            <p className="text-md md:text-lg border border-white md:border-0 text-white text-wrap text-center w-3/4 p-2 md:p-0 mx-auto items-center font-light tracking-wider">
              Halo, sahabat PASAINS! Punya pertanyaan, tips, atau cerita seru
              tentang petualangan terbaru kamu? Yuk, hubungi kami! Kami sangat
              ingin mendengar kisah-kisah kamu dan berbagi semangat menjelajah
              alam bersama. Jangan ragu yaa!
            </p>
            <div className="flex flex-cols lg:flex-cols-2 flex-wrap mt-10 place-items-center w-full lg:w-3/4 mx-auto space-y-10 md:space-y-0">
              <div className=" mx-auto text-left space-y-5 lg:space-y-10">
                <div className="flex flex-cols place-items-center gap-4">
                  <MdPlace className="rounded-full p-4 bg-white opacity-75 transition duration-300 hover:bg-light-orange size-14" />
                  <div>
                    <h1 className="my-[10px] text-lg text-light-orange font-bold">
                      ADDRESS
                    </h1>
                    <p className="font-bold text-md text-white">
                      Secretariat
                      <br />
                      <span className="font-normal text-md">
                        Gedung SIC, FMIPA, UGM
                      </span>
                    </p>
                  </div>
                </div>
                <div className="flex flex-cols place-items-center gap-4">
                  <MdPhone className="rounded-full p-4 bg-white opacity-75 transition duration-300 hover:bg-light-orange size-14" />
                  <div>
                    <h1 className="my-[10px] text-lg text-light-orange font-bold">
                      PHONE
                    </h1>
                    <p className="font-bold text-md text-white">
                      Logistic <br />
                      <span className="font-normal text-md">
                        +62 123 4356 456
                      </span>
                    </p>
                    <p className="font-bold text-md text-white">
                      Public Relations <br />
                      <span className="font-normal text-md">
                        +62 123 2345 435
                      </span>
                    </p>
                  </div>
                </div>
                <div className="flex flex-cols place-items-center gap-4">
                  <MdEmail className="justify-center rounded-full p-4 bg-white opacity-75 transition duration-300 hover:bg-light-orange size-14" />
                  <div>
                    <h1 className="my-[10px] text-lg text-light-orange font-bold">
                      EMAIL
                    </h1>
                    <p className="font-bold text-md text-white">
                      Business Inquire
                      <br />
                      <span className="font-normal text-md">
                        pasains.mipa@mail.ugm.ac.id
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="font-nunito items-center mx-auto h-fit w-full md:w-fit bg-white p-4 lg:p-6">
                <h1 className="text-xl tracking-tighter font-bold text-bold-orange mb-2">
                  MESSAGE US
                </h1>
                <div className="mb-2 space-y-2">
                  <h1>Name</h1>
                  <button className="container border-2 w-64 h-8"></button>
                </div>
                <div className="mb-2 space-y-2">
                  <h2>Organization Name</h2>
                  <button className="container border-2 w-64 h-8"></button>
                </div>
                <div className="mb-2 space-y-2">
                  <h3>Email</h3>
                  <button className="container border-2 w-64 h-8"></button>
                </div>
                <div className="mb-2 space-y-2">
                  <h4>Comments</h4>
                  <button className="container border-2 lg:w-96 w-80 h-44"></button>
                </div>
                <button className="flex box bg-light-orange w-[100px] h-[40px] place-content-center items-center font-bold text-white hover:bg-light-orange duration-300">
                  SUBMIT
                </button>
              </div>
            </div>
          </div>
        </section>
        <section>
          <iframe
            className="w-full h-[720px]"
            title="maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.2075950551744!2d110.37432787596912!3d-7.767797377050637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a585eaaaaaaab%3A0x5fcbc633778f41a0!2sSIC%20FMIPA%20UGM%20(Student%20Internet%20Center)!5e0!3m2!1sen!2sid!4v1717151264582!5m2!1sen!2sid"
          ></iframe>
        </section>
      </div>
    </Layout>
  );
}
