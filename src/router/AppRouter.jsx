import { Navigate, Route, Routes } from "react-router-dom"
import CalendarPage from "../calendar/pages/CalendarPage"
import { LoginPage } from "../auth/pages/LoginPage";


const AppRouter = () => {

    const authStatus = 'authenticated';

  return (
    <Routes>

        {
            (authStatus === 'not-authenticated')
            ? <Route path="/auth/" element={ <LoginPage /> } />
            : <Route path="/*" element={ <CalendarPage /> } />
        }
        
        <Route path="/*" element={ <Navigate to="/auth" /> } />

    </Routes>
  )
}

export default AppRouter
