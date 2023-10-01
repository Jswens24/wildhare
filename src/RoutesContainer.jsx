
import { Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import About from './components/About';
import Shop from './components/Shop';

const RoutesContainer = () => {


    return (
        <div>
            <Routes>
                <Route path='/' />
                <Route path='/#about' />
                <Route path='/#shop' />
            </Routes>
        </div>
    )
}

export default RoutesContainer