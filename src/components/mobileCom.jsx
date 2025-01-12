import MiniNav from "./miniNav";
import Wrapper from "./boxWrappers";
const mobileCom = (props) => {
  return (
    <Wrapper>
      <MiniNav
        MN={props.miniNavs}
        onClickNav={props.onClickMNav}
        id={props.id}
      />
      <div className="flex flex-wrap flex-col items-center">
        <img
          className="w-[625px] mt-5 h-[300px]"
          src={props.mobile[1]}
          alt=""
        />
        <h1 className="font- text-3xl p-16 pb-2">{props.mobile[0]}</h1>
        <div>
          <button className="w-36 bg-black hover:bg-gray-700 text-white p-2 rounded-2xl mb-11">
            Learn More
          </button>
        </div>
      </div>
    </Wrapper>
  );
};

export default mobileCom;
