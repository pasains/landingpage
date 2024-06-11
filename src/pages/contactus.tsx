import { Layout } from "../layout";
import { MdPlace } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { MdPhone } from "react-icons/md";
import RefreshTop from "../components/refreshtop";

export function ContactUs() {
  return (
    <Layout>
      <RefreshTop />
      <section className="bg-gradient-to-tr from-bold-orange to-light-orange w-full pt-[90px] font-nunito h-[600px] scroll-14ooth focus:scroll-auto">
        <h1 className="text-2xl text-white text-center mt-[60px] tracking-tight font-bold">
          GET IN TOUCH
        </h1>
        <div className="flex flex-cols mt-[50px] text-center">
          <div className="mx-auto">
            <MdPlace className="rounded-full p-4 bg-white opacity-75 transition duration-300 hover:bg-bold-orange size-14 place-content-center mx-auto" />
            <h1 className="my-[10px] text-lg tracking-tight text-white font-bold">
              ADDRESS
            </h1>
            <p className="font-bold text-md">
              Secretariat
              <br />
              <span className="font-normal text-md">
                Gedung SIC, FMIPA, UGM
              </span>
            </p>
          </div>
          <div className="mx-auto">
            <MdPhone className="rounded-full p-4 bg-white opacity-75 transition duration-300 hover:bg-bold-orange size-14 place-content-center mx-auto" />
            <h1 className="my-[10px] text-lg tracking-tight text-white font-bold">
              PHONE
            </h1>
            <p className="font-bold text-md">
              Logistic <br />
              <span className="font-normal text-md">+62 123 4356 456</span>
            </p>
            <p className="font-bold text-md">
              Public Relations <br />
              <span className="font-normal text-md">+62 123 2345 435</span>
            </p>
          </div>
          <div className="mx-auto">
            <MdEmail className="rounded-full p-4 bg-white opacity-75 transition duration-300 hover:bg-bold-orange size-14 place-content-center mx-auto" />
            <h1 className="my-[10px] text-lg tracking-tight text-white font-bold">
              EMAIL
            </h1>
            <p className="font-bold text-md">
              Business Inquire
              <br />
              <span className="font-normal text-md">
                pasains.mipa@mail.ugm.ac.id
              </span>
            </p>
          </div>
        </div>
      </section>
      <section className="flex flex-cols my-[50px] font-nunito space-x-xl place-content-center">
        <div>
          <h1 className="text-xl tracking-tighter font-bold text-bold-orange mb-[30px]">
            MESSAGE US
          </h1>
          <p className="text-justify w-[540px] text-gray opacity-75 text-md tracking-wide">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.Lorem Ipsum has been the industry's standard dummy text
            ever since the when an unknown printer took a galley of type and
            scrambled it to make a type specimen Ih has survived not only five
            centuries, but also the leap into electronic
          </p>
        </div>
        <div className="text-md font-semibold opacity-75 space-y-lg">
          <div className="space-y-14">
            <h1>Name</h1>
            <button className="container border-2 w-[250px] h-[32px]"></button>
          </div>
          <div className="space-y-14">
            <h2>Organization Name</h2>
            <button className="container border-2 w-[250px] h-[32px]"></button>
          </div>
          <div className="space-y-14">
            <h3>Email</h3>
            <button className="container border-2 w-[250px] h-[32px]"></button>
          </div>
          <div className="space-y-14">
            <h4>Comments</h4>
            <button className="container border-2 w-[500px] h-[150px]"></button>
          </div>
          <button className="flex box bg-light-orange w-[100px] h-[40px] place-content-center items-center font-bold text-white hover:bg-bold-orange duration-300">
            SUBMIT
          </button>
        </div>
      </section>
      <section>
        <h1 className="text-xl font-bold tracking-tighter text-bold-orange text-center py-[30px]">
          PASAINS SECRETARIAT LOCATIONS
        </h1>
        <iframe
          className="w-full h-[540px]"
          title="maps"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.2075950551744!2d110.37432787596912!3d-7.767797377050637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a585eaaaaaaab%3A0x5fcbc633778f41a0!2sSIC%20FMIPA%20UGM%20(Student%20Internet%20Center)!5e0!3m2!1sen!2sid!4v1717151264582!5m2!1sen!2sid"
        ></iframe>
      </section>
    </Layout>
  );
}
