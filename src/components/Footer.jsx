import React from 'react'

// COMPONENTS
import SocialLinks from "./SocialLinks";

// STYLES OBJECT

const footerStyles = {
  footer: `bg-zinc-900 font-bold text-zinc-100 py-20 px-24 flex flex-row justify-between`,
  smallLink: `w-3/4 flex flex-row justify-evenly text-center`,
  socialLink: ``,
  linkHead: `text-2xl mb-4`,
  list: `footer_list_items text-zinc-500`,
}

const Footer = () => {
  return (
    <footer className={footerStyles.footer}>
      <div className='text-4xl'>
        Shortly.
      </div>

      <div className={footerStyles.smallLink}>
        <div>
          <h1 className={footerStyles.linkHead}>Features</h1>
          <ul className={footerStyles.list}>
            <li>link shortening</li>
            <li>branded links</li>
            <li>analytics</li>
          </ul>
        </div>

        <div>
          <h1 className={footerStyles.linkHead}>Resources</h1>
          <ul className={footerStyles.list}>
            <li>blog</li>
            <li>developers</li>
            <li>support</li>
          </ul>
        </div>

        <div>
          <h1 className={footerStyles.linkHead}>Company</h1>
          <ul className={footerStyles.list}>
            <li>about</li>
            <li>our team</li>
            <li>careers</li>
            <li>contact</li>
          </ul>
        </div>
      </div>

      <div className={footerStyles.socialLink}>
        <SocialLinks />
      </div>

    </footer>
  )
}

export default Footer