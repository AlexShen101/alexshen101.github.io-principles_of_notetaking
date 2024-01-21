import SectionHeader from "../components/SectionHeader";
import ColumnContent from "../components/ColumnContent";

const FourthPage = () => {
  return (
    <>
      <SectionHeader text="Notes should be linked." />
      <ColumnContent
        text="By linking notes, we think about how ideas relate to each other. When we form new connections, we understand each idea more, and come up with new ideas or points."
        img="assets/isometric_tile-flaming_sword.png"
        imageOnLeft={true}
      />
    </>
  );
};

export default FourthPage;
