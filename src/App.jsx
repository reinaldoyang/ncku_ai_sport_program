
import {HashRouter as Router, Routes, Route} from 'react-router-dom'
import { Layout } from './Layout.jsx'
import {Home} from './Pages/Home.jsx'
import {About} from './Pages/About.jsx'
import {News} from './Pages/News.jsx'
import { Activity } from './Pages/Activity.jsx'
import { Album } from './Pages/Album.jsx'
import { Teachers } from './Pages/Teachers.jsx'
import { Course } from './Pages/Course.jsx'
import { Class_Regulation } from './Pages/Class_regulation.jsx'
import { Contact } from './Pages/Contact.jsx'
import { AlbumDetail } from './Pages/AlbumDetail.jsx'
import { TeacherDetail } from './Pages/TeacherDetail.jsx'

function App() {
  return(
    <div>
      <Router>
        <Routes>
          <Route element={<Layout/>}>
            <Route path="/" element={<Home />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/news" element={<News />}/>
            <Route path="/activity" element={<Activity />}/>
            <Route path="/album" element={<Album />}/>
            <Route path="/album/:id" element={<AlbumDetail />} />
            <Route path="/teachers" element={<Teachers />}/>
            <Route path="/teachers/:id" element={<TeacherDetail />} />
            <Route path="/course" element={<Course />}/>
            <Route path="/class_regulation" element={<Class_Regulation />}/>
            <Route path="/contact" element={<Contact />}/>
          </Route>
        </Routes>
      </Router>
    </div>

  )
}

export default App
