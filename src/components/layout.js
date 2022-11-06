import { Link } from 'gatsby'
import * as React from 'react'
import { container, heading, navLinks, navLinkItem, navLinkText } from './layout.module.css'
console.log('container: ', container)

const Layout = ({pageTile, pageheading, children}) => {
    return (
        <div className={container}>
            <title>{pageheading}</title>
            <nav>
                <ul className={navLinks}>
                    <li className={navLinkItem}><Link to="/" className={navLinkText}>Home</Link></li>
                    <li className={navLinkItem}><Link to="/about" className={navLinkText}>About Me</Link></li>
                    <li className={navLinkItem}><Link to="/gallery" className={navLinkText}>Gallery</Link></li>
                </ul>
            </nav>
            <main>
                <h1 className={heading}>{pageTile}</h1>
                {children}
            </main>
        </div>
    )
}
export default Layout