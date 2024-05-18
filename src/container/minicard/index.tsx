import { Title } from "../../components/title";
import { Picture } from "../../components/picture";
import { Description } from "../../components/description";

function MiniCard(props: any) {
  return (
    <div className="container w-60 text-center p-3 rounded-xl max-w-full mx-auto text-md shadow-xl space-y-sm bg-light-orange transition duration-300 hover:scale-110">
      <Picture picture={props.picture} />
      <Title title={props.title} />
      <Description description={props.description} />
    </div>
  );
}

export default MiniCard;
