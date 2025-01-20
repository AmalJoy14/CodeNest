import Hero from './Home/hero.jsx'
import Features from './Home/features.jsx'
import CommunityStats from './Home/communitystats.jsx'
import Footer from './footer.jsx'
import Header from './header.jsx'

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