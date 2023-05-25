import React from 'react'

import MenuIcon from '@mui/icons-material/Menu';

const styles = {
  navList: `mx-10 cursor-pointer hover:text-zinc-800 transition`,
  loginBtn: `mr-10 text-zinc-500 transition hover:text-slate-800`,
  signupBtn: `ml-10 text-zinc-900 border-2 px-6 py-3 rounded-3xl bg-teal-400 transition hover:bg-teal-300`,
}


const Navbar = () => {
  return (
    <>
      <nav className='nav flex items-center justify-between py-8 px-12'>

        <div className='nav_left'>
          <ul className='flex flex-row items-center justify-between text-xl text-zinc-500 font-semibold'>
            <li className='mr-10 text-4xl font-bold text-zinc-700'>Shortly.</li>
            <li className={styles.navList}>features</li>
            <li className={styles.navList}>pricing </li>
            <li className={styles.navList}>resources</li>
          </ul>
        </div>

        <div className='nav_right text-xl font-semibold'>
          <button className={styles.loginBtn}>Login</button>

          <button className={styles.signupBtn}>Sign Up</button>

          <div className='hidden'>
            <MenuIcon />
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar