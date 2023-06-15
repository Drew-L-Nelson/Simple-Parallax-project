import './App.css'
import { Parallax } from 'react-parallax'

export default function App() {
  return (
    <div className="App">
        <Parallax strength={600}>
            Hello World
        </Parallax>

        <Parallax>
            Hello World
        </Parallax>

        <Parallax>
            Hello World!!
        </Parallax>
    </div>
  )
}
