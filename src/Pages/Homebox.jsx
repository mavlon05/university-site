import Gallery from '../Components/Gallery';
import HeroSection from '../Components/HeroSection';
import Inputpage from '../Components/Inputpage';
import News from '../Components/News';
import Partners from '../Components/Partners';
import Statistics from '../Components/Statistics';
import Students from '../Components/Students';

const Homebox = () => {
  return (
    <div>
      <HeroSection />
      <Statistics/>
      <Gallery/>
      <Partners/>
      <News/>
      <Inputpage/>
      <Students/>
    </div>
  );
};

export default Homebox;
