const ColumnContent = (props) => {
  const textContent = (
    <p className="text-slate-400 text-2xl leading-7 my-auto max-md:max-w-full max-md:mt-10">
      {" "}
      {props.text}{" "}
    </p>
  );
  const imageContent = (
    <img
      loading="lazy"
      srcSet={props.img}
      className="aspect-[0.78] object-contain object-center w-full overflow-hidden grow max-md:mt-10"
    />
  );

  const leftContent = props.imageOnLeft ? imageContent : textContent;
  const rightContent = props.imageOnLeft ? textContent : imageContent;

  return (
    <div className="self-stretch mt-0 px-0.5 max-md:max-w-full">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
        <div className="flex flex-col items-stretch w-[54%] max-md:w-full max-md:ml-0">
          {leftContent}
        </div>
        <div className="flex flex-col items-stretch w-[46%] ml-5 max-md:w-full max-md:ml-0">
          {rightContent}
        </div>
      </div>
    </div>
  );
};

export default ColumnContent