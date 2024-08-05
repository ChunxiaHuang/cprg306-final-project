
import Footer from './components/footer'
import Header from './components/header'
import Search from './components/search'

export default function Home() {

  return (
    <div className='flex flex-col min-h-screen bg-amber-50 bg-[url("/images/hero.jpg")] bg-cover bg-center'>
      <Header />
      <Search />
      <div className='flex-grow'></div>
      <Footer />
    </div>
  )
}

