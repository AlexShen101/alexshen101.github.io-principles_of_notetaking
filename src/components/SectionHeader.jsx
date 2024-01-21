const SectionHeader = (props) => {
  return (
    <div className="text-6xl text-neutral-200 font-bold leading-[63.84px] bg-clip-text z-[1] mt-3 max-md:max-w-full max-md:text-4xl max-sm:mt-2.5">
        { props.text }
      </div>
  )
}

export default SectionHeader