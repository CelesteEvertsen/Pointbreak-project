'use client'
import { useState } from 'react'
import Link from 'next/link'
import style from './Navigation.module.css'
import Hamburger from 'hamburger-react'
export default  function Navigation() {
  const [openMenu, setOpenMenu] = useState<boolean>(false)

  return (
    <nav>
      <div className={style.ToggleMenuIcon} onClick={() => setOpenMenu(!openMenu)}>
        <Hamburger toggled={openMenu} toggle={setOpenMenu} />
      </div>
      <div className={`${style.NavigationMenu} ${openMenu ? style.MenuIsOpen : ''}`}>
        <ul onClick={() => setOpenMenu(false)}>
          <Link href="/">
            <li>Hjem</li>
          </Link>
          <Link  href="/course">
            <li>Kurs</li>
          </Link>
          <Link  href="/blogg">
            <li>Blogg</li>{' '}
          </Link>
         
        </ul>
      </div>
    </nav>
  )
}