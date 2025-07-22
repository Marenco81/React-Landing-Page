import { communityLinks, platformLinks, resourcesLinks } from "../constants"

export const Footer = () => {
  return (
    <footer className="mt-20 border-t py-10 border-neutral-700">
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mx-8">
        <div >
            <h3 className="text-md font-semibold mb-4">Resources</h3>
            <ul>
                {resourcesLinks.map((resource, index) => (
                    <li key={index} className="text-neutral-600 my-2 hover:text-neutral-200 transition duration-200">
                        <a href={resource.href}> {resource.text} </a>
                    </li>
                ))} 

            </ul>
        </div>
        <div>
            <h3 className="text-md font-semibold mb-4">Platform</h3>
            <ul>
                {platformLinks.map((item, index) => (
                    <li key={index} className="text-neutral-600 my-2 hover:text-neutral-200 transition duration-200">
                        <a href={item.href}> {item.text} </a>
                    </li>
                ))}
            </ul>
        </div>
        <div>
            <h3 className="text-md font-semibold mb-4">Community</h3>
            <ul>
                {communityLinks.map((link, index) => (
                    <li key={index} className="text-neutral-600 my-2 hover:text-neutral-200 transition duration-200">
                        <a href={link.href}> {link.text} </a>
                    </li>
                ))}
            </ul>
        </div>
      </div>  
    </footer>
  )
}
