import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Collections from './Collections';
import Navbar from '../components/Navbar';
import HeroSlider from '../components/HeroSlider';
import CollectionsSection from '../components/CollectionsSection';
import SneakersKicks from '../components/SneakersKicks';
import DiscoverShoes from '../components/DiscoverShoes';
import Boots from '../components/Boots';
import TimelessStyles from '../components/TimelessStyles';
import EndSale from '../components/EndSale';
import SaveBig from '../components/SaveBig';

function Home() {
    return (
        <div>
             <Navbar/>
             <HeroSlider/>
             <CollectionsSection/>
             <SneakersKicks/>
             <DiscoverShoes/>
             <Boots/>
             <TimelessStyles/>
             <EndSale/>
             <SaveBig/>
        </div>
    )
}

export default Home

