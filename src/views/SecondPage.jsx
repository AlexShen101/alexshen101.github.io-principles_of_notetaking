import SectionHeader from '../components/SectionHeader'
import ColumnContent from '../components/ColumnContent'

const SecondPage = () => {
  return (
    <>
      <SectionHeader text="Notes should be personalized." />
      <ColumnContent text="Since notes serve a purpose for you, they should be tailored to be most useful for yourself." img="assets/isometric_tile-pearl.png" imageOnLeft={true} />
    </>
  );
};

export default SecondPage;
