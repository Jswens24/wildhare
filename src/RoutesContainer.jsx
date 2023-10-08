
import { Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import About from './components/About';
import Shop from './components/Shop';
import DetailView from './components/DetailView';

const RoutesContainer = () => {


    return (
        <div>
            <Routes>
                {/* <Route path='/' />
                <Route path='/#about' />
                <Route path='/#shop' />
                <Route path='/detail/:id' element={<DetailView />} /> */}
            </Routes>
        </div>
    )
}

export default RoutesContainer