import SectionHeader from '../components/SectionHeader'
import ColumnContent from '../components/ColumnContent'

const FirstPage = () => {
  return (
    <>
      <SectionHeader text="Notes should serve a purpose." />
      <ColumnContent text="When you take notes, it is not the notes you care about. You either care about using the information contained to help with a project or to help with thinking and mental work." img="assets/isometric_tile-cave.png" imageOnLeft={false} />
    </>
  );
};

export default FirstPage;
