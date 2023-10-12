
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import MyParticles from './componets/myParticles'

import HomePage from './componets/HomePage'
import CourseOutline from './componets/CourseOutline'
import ConceptualizeDesign from './componets/ConceptualizeDesign'
import MemoryLearning from './componets/MemoryLearning'
import ProjectOutline from './componets/ProjectOutline'
import './App.css'

function App() {
  

  return (
    <BrowserRouter>

    <MyParticles/>

      <Routes>
        <Route exact path='/' element={<HomePage/>}/>
        <Route exact path='CourseOutline' element={<CourseOutline/>}/>
        <Route exact path='ConceptualizeDesign' element={<ConceptualizeDesign/>}/>
        <Route exact path='MemoryLearning' element={<MemoryLearning/>}/>
        <Route exact path='ProjectOutline' element={<ProjectOutline/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
