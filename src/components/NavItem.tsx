import { navItems } from "../constants"

interface NavItemsProps {
  classname: string
}

export const NavItem = ({classname}:NavItemsProps) => {
  return (
    <ul className={`hidden lg:flex ml-14 space-x-12 ${classname}`}>
        {navItems.map((item, index) => (
            <li key={index}>
                <a href={item.href}>{item.label}</a>
            </li>
        ))}
    </ul>
  )
}
