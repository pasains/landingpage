import { Description } from "../../components/description/index";

export function AboutContent() {
  return (
    <div className="flex font-nunito bg-white container place-content-center mx-auto">
      <div className="my-[60px] place-content-center w-[820px]">
        <h1 className="text-lg text-center text-bold-orange mb-[20px]">
          Apa itu PASAINS?
        </h1>
        <Description description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)." />
        <div>
          <h2 className="text-lg text-center text-bold-orange mb-[20px]">
            VISI
          </h2>
          <Description description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." />
        </div>
        <div>
          <h3 className="text-lg text-center text-bold-orange mb-[20px]">
            MISI
          </h3>
          <Description description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." />
        </div>
        <div className="space-y-[20px]">
          <h1 className="text-lg text-center text-bold-orange">SEJARAH</h1>
          <Description description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." />
          <div className=" flex items-stretch mt-[20px]">
            <Description description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." />
            <img
              src={require("../../image/sumbing.jpg")}
              alt=""
              className="w-[340px] object-cover pl-[20px]"
            />
          </div>
          <Description description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." />
        </div>
        <div className="mx-auto place-content-center text-center mt-[40px] items-center space-y-[40px]">
        <h1 className="text-lg text-center text-bold-orange mb-[20px]">STRUKTUR KEPENGURUSAN</h1>
        <img src={require("../../image/chartpasains.png")} alt="chart" className="items-center mx-auto"/>
        </div>
      </div>
    </div>
  );
}
