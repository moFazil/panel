import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./pages/Home";
import Layout from "./components/Layout";
import PrayerTime from "./pages/PrayerTime";
import Notification from "./pages/Notification";
import Event from "./pages/Event";
import HadithForm from "./pages/HadithForm";
import RegisteredUsers from "./pages/RegisteredUsers";
import LoginForm from "./pages/LoginForm";
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="prayertime" element={<PrayerTime/>}/>
        <Route path="notification" element={<Notification/>}/>
        <Route path="event" element={<Event/>}/>
        <Route path="hadith" element={<HadithForm/>}/>
        <Route path="user" element={<RegisteredUsers/>}/>
        </Route>
        <Route path="login" element={<LoginForm/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App
