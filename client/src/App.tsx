import { Route, Routes } from "react-router-dom"
import Layout from "./pages/Layout"
import Dashboard from "./pages/Dashboard"
import ActivityLog from "./pages/ActivityLog"
import FoodLog from "./pages/FoodLog"
import Profile from "./pages/Profile"


const App = () => {
  return (
   <>
   <Routes>
    <Route path="/" element={<Layout/>}>
    <Route index element={<Dashboard/>}/>
    <Route path="activity" element={<ActivityLog/>}/>
    <Route path="food" element={<FoodLog/>}/>
    <Route path="profile" element={<Profile/>}/>

    </Route>

   </Routes>
   </>
  )
}

export default App
