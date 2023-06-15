import './App.css'
import { Parallax } from 'react-parallax'
import CloudView from './Images/CloudView.jpg'
import Landscape2 from './Images/Landscape2.jpg'
import VaraMulti3 from './Images/VaraMulti3.jpg'

export default function App() {
  return (
    <div className='App'>
        <Parallax strength={600} bgImage={Landscape2}>
            <div className='content'>
                <div className='text-content'>Normal Prallax</div>
            </div>
        </Parallax>

        <Parallax>
            
        </Parallax>

        <Parallax>
            
        </Parallax>
    </div>
  )
}
