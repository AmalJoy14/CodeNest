import Hero from './hero.jsx'
import Features from './features.jsx'
import CommunityStats from './communitystats.jsx'
import Footer from '../footer.jsx'
import Header from '../header.jsx'

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Features />
      <CommunityStats />
      <Footer />
    </div>
  )
};

export default Home;