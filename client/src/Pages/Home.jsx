import React from 'react';
import Banner from '../Components/Banner';
import HowWorks from '../Components/HowWorks';
import { useLoaderData } from 'react-router';
import RecentCars from '../Components/RecentCars';
import WhyChooseUs from '../Components/WhyChooseUs';
import SpecialOffers from '../Components/SpecialOffers';

const Home = () => {
    const data = useLoaderData()
    
    return (
        <>
            <Banner></Banner>
            <WhyChooseUs></WhyChooseUs>
            <RecentCars data={data}></RecentCars>
            <HowWorks></HowWorks>
            <SpecialOffers></SpecialOffers>
        </>
    );
};

export default Home;