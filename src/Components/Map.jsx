import React from 'react'

export default function Map() {
  return (
    <div>
      <h4 className='text-center mb-3'>Embed Location Map</h4>
      <div>
      <iframe title='Yash Sales' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d877.6506055110293!2d79.43060151176176!3d28.370867296408164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a0072fed3dfa57%3A0x969204fa057b4704!2sYash%20Sales!5e0!3m2!1sen!2sin!4v1703145277525!5m2!1sen!2sin"
        width="600px" height="450px" style={{ border: "0",}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade">
        </iframe>
        </div>
    </div>
  )
}
