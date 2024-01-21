import SectionHeader from "../components/SectionHeader";
import ColumnContent from "../components/ColumnContent";

const ThirdPage = () => {
  const makeColumn = (text, label) => {
    return (
      <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
        <div className="flex flex-col items-start max-md:mt-10">
          {makeImage()}
          <div
            className="text-slate-400 text-opacity-80 text-2xl leading-7 self-stretch mt-5"
            aria-label={label}
          >
            {text}
          </div>
        </div>
      </div>
    );
  };

  const makeImage = () => {
    return (
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/13ef2ecc06b2810a9d172279b0402576bbb4b58d159f7a2402fa88293086128f?apiKey=1298b6b3bf494296b42d95b6c5476473&"
        className="aspect-square object-contain object-center w-9 overflow-hidden max-w-full"
        alt="Thought Icon"
      />
    );
  };

  return (
    <>
      <SectionHeader text="Notetaking should be frictionless." />

      <div className="text-slate-400 text-2xl leading-7 self-stretch mt-7 max-md:max-w-full">
        Choose your tools wisely - there should be as few obstructions as
        possible to get your thoughts onto the paper.
      </div>

      <div className="self-stretch mt-20 mb-20 max-md:max-w-full max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          {makeColumn(
            "The tool should require minimal thought to operate.",
            "Minimal Thought Requirement"
          )}
          {makeColumn(
            "There should be minimal delays between your mind and the paper.",
            "Minimal Delay Requirement"
          )}
          {makeColumn(
            "There should be minimal decisions between having the thought and writing.",
            "Minimal Decision Requirement"
          )}
        </div>
      </div>
    </>
  );
};

export default ThirdPage;
