// import Space from "./spaceCom";
import MiniNav from "./miniNav";
import Wrapper from "./boxWrappers";
const homeAppCom = (props) => {
  return (
    <Wrapper>
      <div className="flex flex-col text-black h-screen">
      <img
          src={props.home[1]}
          className="w-5/6 h-[95%] absolute -z-10"
          alt=""
        />
        <MiniNav
          MN={props.miniNavs}
          id={props.id}
          onClickNav={props.onClickMNav}
        />
        <div className="flex flex-wrap flex-col justify-end h-screen items-center">
          <p className="font-bold text-5xl pb-5">
            Efficient Clean, <br />
            Intelligent Wash
          </p>
          <div className="space-x-2">
            <button className="w-auto hover:underline font-semibold text-m text-black p-2 mb-11">
              Learn More
            </button>
            <button className="w-auto bg-black hover:bg-gray-700 text-white p-2 rounded-2xl mb-11">
              See all Washing Machines
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default homeAppCom;
