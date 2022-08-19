import React from 'react'
import MobileLogo from "./mobile.png"
import cup from './cup.svg'
import './first.css'

export default function main() {
  return (
    <>
        <div className='main'>
      
      <div className='right'>
          <div className='n1'>
          <img src={cup} alt="React Logo" className='cup'/>
            <div className='list'>
            <h2 className='old'>SexEdify</h2>
            <h2 className='win'>Overall Winner</h2>
            </div>
          </div>
          <div className='n2'>
          <img src={cup} alt="React Logo" className='cup'/>
            <div className='list'>
            <h2 className='racce'>GoogleAssist</h2>
            <h2 className='women'>Best Hack:Inclusivity</h2>
            </div>
          </div>
          <div className='n3' >
          <img src={cup} alt="React Logo" className='cup'/>
            <div className='list'>
            <h2 className='flush'>Kifu</h2>
            <h2 className='innovation'>Best Hack:Community</h2>
            </div>
          </div>
          <div className='n4'>
          <img src={cup} alt="React Logo" className='cup'/>
            <div className='list'>
            <h2 className='sans'>FarmEasy</h2>
            <h2 className='social'>Best Fresher's Team</h2>
            </div>
          </div>
          <img src={MobileLogo} alt="React Logo" className='mobile'/>
      </div>
      <div className='left'>
      
        <h1 className='adore'>Numbers to Adore ❤️</h1>
        <h2 className='few'>Here are a few numbers that are more than just numbers for us.</h2>
        <div className='f1'>
            <h2 className='reg'>Registrations</h2>
            <h4 className='t1'>2171</h4>
        </div>
        <div className='f2'>
          <h4 className='pro'>Project</h4>
          <h4 className='sub'>Submissions</h4>
          <h3 className='t2'>127</h3>
        </div>
        <div className='f3'>
          <h4 className='sess'>Sessions</h4>
          <h4 className='org'>Organised</h4>
          <h3 className='t3'>26</h3>
        </div>
      </div>
    </div>
    </>
  )
}
