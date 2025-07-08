import { FeaturesSection, Hero, Navbar } from "./components"

export const App = () => {
  return (
    <div>
         <Navbar></Navbar>
         <div className="max-w-7xl mx-auto pt-20 px-6">
          <Hero></Hero>
         </div>
         <FeaturesSection></FeaturesSection>
    </div>
  )
}
