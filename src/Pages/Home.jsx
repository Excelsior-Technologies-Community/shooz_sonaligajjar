import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Collections from './Collections';
import Navbar from '../components/Navbar';
import HeroSlider from '../components/HeroSlider';
import CollectionsSection from '../components/CollectionsSection';
import SneakersKicks from '../components/SneakersKicks';

function Home() {
    return (
        <div>
             <Navbar/>
             <HeroSlider/>
             <CollectionsSection/>
             <SneakersKicks/>
        </div>
    )
}

export default Home

