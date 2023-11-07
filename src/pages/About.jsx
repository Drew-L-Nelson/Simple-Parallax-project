import '../styles/About.css';
import { Parallax } from 'react-parallax'
import Landscape2 from '../Images/Landscape2.jpg'
import VaraMulti3 from '../Images/VaraMulti3.jpg'

export default function About() {
  return (
    <div className='App'>
        <Parallax strength={100} blur={{ min: -10, max: 10 }} bgImage={Landscape2}>
            <div className='content1'>
                <div className='text-content1'>
                    {/* <h1>Code Crafters</h1> */}
                    <h1>Coming Soon</h1>
                </div>
            </div>
        </Parallax>

        <Parallax strength={300} >
            <div className='content2'>
                <div className='text-content2'>
                    <p>
                        {/* Welcome to Code Crafters! Discover a thrilling universe where adventure, technology, and storytelling ignite young minds. In Pixela's vibrant digital landscape, our unique tales blend fiction with coding, transforming how middle-grade readers engage with technology. Join Vara and Kai as they journey through Pixela, using their unique abilities to solve challenges intricately woven with coding concepts. <br></br><br></br> */}
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br></br><br></br>

                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

                        {/* Our aim is to demystify coding, unleashing creativity and problem-solving skills. Our narratives also emphasize curiosity, resilience, and teamwork, creating fun-filled adventures with humor and valuable life lessons. Code Crafters is for young adventurers, parents, and educators seeking dynamic, enriching content. Join us and embark on an incredible journey of coding and storytelling at Code Crafters! */}
                    </p>
                </div>
            </div>
        </Parallax>

        <Parallax strength={-100} bgImage={VaraMulti3}>
            <div className="content3">
                <div className="text-content3">
                    <p>
                        (Socials Down Here)
                    </p>
                    <button>
                        Click Me
                    </button>
                </div>
            </div>
        </Parallax>
    </div>
  )
}
