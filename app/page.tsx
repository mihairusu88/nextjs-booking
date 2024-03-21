import HomeServicesCategories from './components/home/HomeServicesCategories';
import HomePopularServices from './components/home/HomePopularServices';
import HomeCarousel from './components/home/HomeCarousel';

export const metadata = {
  title: 'HomeServices - Home',
  description: 'HomeServices home description',
  keywords: 'next, next.js, react, app, booking',
};
const Home = () => {
  return (
    <div className="home w-full">
      <HomeCarousel />
      <div className="container mx-auto">
        <HomeServicesCategories title="Categories" />
        <HomePopularServices title="Popular Services" />
      </div>
    </div>
  );
};

export default Home;
