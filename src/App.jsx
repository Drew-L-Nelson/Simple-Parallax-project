import './App.css'
import { Parallax } from 'react-parallax'
import CloudView from './Images/CloudView.jpg'
import Landscape2 from './Images/Landscape2.jpg'
import VaraMulti3 from './Images/VaraMulti3.jpg'

export default function App() {
  return (
    <div className='App'>
        <Parallax strength={100} blur={{ min: -5, max: 15 }} bgImage={Landscape2}>
            <div className='content'>
                <div className='text-content1'>
                    <h1>Code Crafters</h1>
                </div>
            </div>
        </Parallax>

        <Parallax strength={300} bgImage={VaraMulti3}>
            <div className='content'>
                <div >
                    <p className='text-content2'>
                        Welcome to Code Crafters! Discover a thrilling universe where adventure, technology, and storytelling ignite young minds. In Pixela's vibrant digital landscape, our unique tales blend fiction with coding, transforming how middle-grade readers engage with technology. Join Vara and Kai as they journey through Pixela, using their unique abilities to solve challenges intricately woven with coding concepts. 
                    </p>
                </div>
            </div>
        </Parallax>

        <Parallax strength={-300} bgImage={CloudView}>
            <div className="content">
                <div className="text-content3">
                    <p>
                        Our aim is to demystify coding, unleashing creativity and problem-solving skills. Our narratives also emphasize curiosity, resilience, and teamwork, creating fun-filled adventures with humor and valuable life lessons. Code Crafters is for young adventurers, parents, and educators seeking dynamic, enriching content. Join us and embark on an incredible journey of coding and storytelling at Code Crafters!
                    </p>
                </div>
            </div>
        </Parallax>
    </div>
  )
}
