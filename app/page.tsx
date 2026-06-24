import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Architecture from '@/components/Architecture'
import Products from '@/components/Products'
import Roadmap from '@/components/Roadmap'
import Pricing from '@/components/Pricing'
import Waitlist from '@/components/Waitlist'
import Footer from '@/components/Footer'
import SectionTracker from '@/components/SectionTracker'

export default function Home() {
  return (
    <main className="min-h-screen bg-if-dark">
      <SectionTracker />
      <Navbar />
      <Hero />
      <Architecture />
      <Products />
      <Roadmap />
      <Pricing />
      <Waitlist />
      <Footer />
    </main>
  )
}
