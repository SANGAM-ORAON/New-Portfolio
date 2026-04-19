import React from 'react'

const Footer = () => {
  return (
    <section id='footer'>
        <footer className="w-full py-2 border-t border-gray-800 text-center text-gray-500 text-sm">
  <p>Designed & Developed by <span className="text-white">Sangam Oraon</span></p>
  <p className="mt-1">© {new Date().getFullYear()} All rights reserved.</p>
</footer>
    </section>
  )
}

export default Footer