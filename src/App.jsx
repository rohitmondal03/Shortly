import React from 'react';
import './App.css'

// COMPONENTS
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// ASSETS
import main_img from "./assets/main-img.png"
import React from 'react';

const styles = {
  home: `py-10 px-20`,
  hometop: `flex flex-row items-center`,
  homeBottom: `border-4 border-zinc-300 py-7 px-10 w-full mx-auto rounded-2xl bg-violet-800`,
}

const statsSecStyles= {
  stats: `bg-zinc-300 bg-white py-40 px-20 text-center`,
  statsDetails: `flex flex-row wrap items-center justify-evenly font-bold mt-32`,
  statsDetailBox: `bg-white mx-10 py-12 px-7 rounded-lg`,
  detailsHeading: `text-3xl mb-5`,
  detailsText: `text-zinc-400`,
}

const smallSecStyles= {
  main: `small_sec text-white text-center font-bold p-20`,
  head: `text-5xl`,
  btn: `bg-sky-400 text-xl mt-10 py-4 px-10 rounded-full transition duration-300 hover:scale-105 active:scale-90`
}



function App() {
  return (
    <>

      {/* NAVBAR */}

      <Navbar />



      {/* HOME SECTION */}

      <div className={styles.home}>
        <div className={styles.hometop}>
          <div className='home_sec_top_left text-left'>
            <h1 className='text-6xl text-zinc-700 font-bold my-5'>More than just shorter links</h1>

            <p className='text-zinc-500 text-xl my-10'>Bring your brand's recognition and get detailed insights on how your links are performing</p>

            <button className='border py-4 px-7 rounded-full bg-teal-400 text-white text-lg font-bold transition duration-300 hover:bg-sky-500 hover:scale-105 active:scale-95'>Get started</button>
          </div>

          <div className='home_sec_top_right w-3/4'>
            <img
              src={main_img}
              className=''
            />
          </div>
        </div>

        <div className={styles.homeBottom}>
          <form className='mx-auto flex items-center justify-between'>
            <input
              type='text'
              placeholder='Enter your link'
              className='text-left mr-5 w-full py-3 px-5 border-4 rounded-xl'
            />

            <button
              type='submit'
              className='font-bold border-2 w-40 border-transparent py-3 rounded-lg bg-teal-500 text-white'
            >
              Shorten it
            </button>
          </form>
        </div>
      </div>




      {/* STATISTICS SECTION */}

      <div className={statsSecStyles.stats}>
        <div className='stats_text'>
          <h1 className='text-6xl font-bold'>Advanced Statistics</h1>

          <p className='my-10 text-zinc-500 text-lg font-bold'>Track how your links are performing across the web with our <br /> advanced statistics dashboard</p>
        </div>

        <div className={statsSecStyles.statsDetails}>
          <div className={statsSecStyles.statsDetailBox}>
            <img />
            <h1 className={statsSecStyles.detailsHeading}>Brand Recognition</h1>
            <p className={statsSecStyles.detailsText}>Boost your brand recognition with each click. Generic links don't mean a thing. Branded lnks help instil confidence in your content.</p>
          </div>

          <div className={statsSecStyles.statsDetailBox}>
            <img />
            <h1 className={styles.detailsHeading}>Detailed Records</h1>
            <p className={statsSecStyles.detailsText}>Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.</p>
          </div>

          <div className={statsSecStyles.statsDetailBox}>
            <img />
            <h1 className={statsSecStyles.detailsHeading}>Fully Customizable</h1>
            <p className={statsSecStyles.detailsText}>Improve brand awarness and content discoverability through customizable links, supercharging audience engagement.</p>
          </div>
        </div>
      </div>



      {/* SMALL SECTION */}

      <section className={smallSecStyles.main}>
        <h1 className={smallSecStyles.head}>Boost your links today.</h1>

        <button className={smallSecStyles.btn}>
          Get started
        </button>
      </section>




      {/* FOOTER */}

      <Footer />
    </>
  )
}

export default App


// https://shrtco.de/docs
