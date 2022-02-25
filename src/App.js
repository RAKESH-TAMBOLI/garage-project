import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Container, Flex } from '@chakra-ui/react'
import Footer from './components/Footer'
import LoginGarage from './screens/LoginGarage'
import Header from './components/Header'
import HelpSceen from './screens/HelpScreen'
import FavouritesScreen from './screens/FavouritesScreen'
import ReferScreen from './screens/ReferScreen'
import ContactScreen from './screens/ContactScreen'
import PeriodicServiceScreen from './screens/PeriodicServiceScreen'
const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <Container maxW='8xl' bgColor='gray.100'>
                <Flex
                    as='main'
                    as='main'
                    minH='xl'
                    py='5'
                    px='5'
                    direction='column'>
                    <Routes>
                        <Route
                            path='/mastergarage/periodicservice'
                            element={<PeriodicServiceScreen />}
                        />
                    </Routes>
                    <Routes>
                        <Route
                            path='/mastergarage/help'
                            element={<HelpSceen />}
                        />
                    </Routes>
                    <Routes>
                        <Route
                            path='mastergarage/favourites'
                            element={<FavouritesScreen />}
                        />
                    </Routes>
                    <Routes>
                        <Route
                            path='/mastergarage/refer'
                            element={<ReferScreen />}
                        />
                    </Routes>
                    <Routes>
                        <Route
                            path='/mastergarage/contact'
                            element={<ContactScreen />}
                        />
                    </Routes>
                    <Routes>
                        <Route path='/' element={<LoginGarage />} />
                    </Routes>
                </Flex>
            </Container>
            <Footer />
        </BrowserRouter>
    )
}

export default App
