import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./pages/Home";
import Layout from "./components/Layout";
import PrayerTime from "./pages/PrayerTime";
import Notification from "./pages/Notification";
import Event from "../src/pages/Event";
import HadithForm from "./pages/HadithForm";
import RegisteredUsers from "./pages/RegisteredUsers";
import LoginForm from "./pages/LoginForm";
import AboutMasjith from "./pages/AboutMasjith";
import DailDua from "../src/pages/DailyDua";
import AskIman from "./pages/AskIman";
import AudioBayan from "../src/pages/AudioBayan";
import JummaLiveStream from "../src/pages/JummaLiveStream";
import MaintanenceService from "../src/pages/MaintanenceService";
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
        <Route path="registrationlist" element={<RegisteredUsers/>}/>
        <Route path="about-masjith"  element={<AboutMasjith/>}/>
        <Route path="daily-dua"  element={<DailDua />}/>
        <Route path="ask-iman"  element={<AskIman />}/>
        <Route path="audio-bayan"  element={<AudioBayan />}/>
        <Route path="jumma-live-stream"  element={<JummaLiveStream />}/>
        <Route path="maintenance-service"  element={<MaintanenceService />}/>
        </Route>
        <Route path="login" element={<LoginForm/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App
