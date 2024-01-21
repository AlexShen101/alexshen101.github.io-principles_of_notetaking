import SectionHeader from '../components/SectionHeader'
import ColumnContent from '../components/ColumnContent'

const FifthPage = () => {
  return (
    <>
      <SectionHeader text="Notes should be atomic." />
      <ColumnContent
        text="Notes should capture one thing only so they can link to other
        notes with minimal context required."
        img="assets/isometric_tile-galaxy_tile.png"
        imageOnLeft={false}
      />
    </>
  );
};

export default FifthPage;
