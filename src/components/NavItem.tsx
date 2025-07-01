import { navItems } from "../constants"

export const NavItem = () => {
  return (
    <ul className='hidden lg:flex ml-14 space-x-12'>
        {navItems.map((item, index) => (
            <li key={index}>
                <a href={item.href}>{item.label}</a>
            </li>
        ))}
    </ul>
  )
}
