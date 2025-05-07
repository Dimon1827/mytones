import PromoBanner from './promo-banner/PromoBanner';
import TopArtists from './top-artists/TopArtists';
import Collections from './collections/Collections';
import TopGenre from './genre/Genre';
const Home = () => {
  return (
    <>
      <PromoBanner />
      <TopArtists />
      <div style={{display: 'flex', justifyContent: 'space-between', width: '724px'}}>
        <Collections />
        <TopGenre/>
      </div>
    </>
  );
};

export default Home;
