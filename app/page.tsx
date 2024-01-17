import Experience from '@/components/experience'
import Footer from '@/components/footer'
import Header from '@/components/header'
import Hero from '@/components/hero'
import Hiring from '@/components/hiring'
import Services from '@/components/services'
import Vip from '@/components/vip'

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Services />
      <Experience />
      <Vip />
      <Hiring />
      <Footer />
    </main>
  )
}
