import { FeaturesSection, Hero, Navbar, Pricing, Testimonials, Workflow } from "./components"
import { Footer } from "./components/Footer"

export const App = () => {
  return (
    <div>
         <Navbar></Navbar>
         <div className="max-w-7xl mx-auto pt-20 px-6">
          <Hero></Hero>
          <FeaturesSection></FeaturesSection>
          <Workflow></Workflow>
          <Pricing></Pricing>
          <Testimonials></Testimonials>
          <Footer></Footer>
         </div>
    </div>
  )
}
