
import "bootstrap/dist/css/bootstrap.min.css"
import { Container } from "react-bootstrap"
import { Routes, Route, Navigate } from "react-router-dom"
import { NewNote } from "./NewNote"

function App() {
 

  return ( <Container className="my-4">
    <Routes>
    <Route   path="/" element={<h1>Hi</h1>}></Route>
    <Route path="/new" element={<NewNote/>}></Route>
    <Route path="*" element={<Navigate to="/" />}></Route>
    <Route   path="/:id" >
      <Route index element={<h1>Show</h1>} />
      <Route path="edit" element={<h1>Edit</h1>} />
    </Route>
    <Route path="/new" element={<h1>New</h1>}></Route>
      </Routes>

  </Container>) 
}

export default App
