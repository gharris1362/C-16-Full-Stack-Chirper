import React from 'react'
import { Link } from 'react-router-dom';
import Timeline from '../components/Timeline.jsx';
import Creator from './Creator.jsx'
const Home = () => {


    return (
        <>
        <div>
            

        <Creator/>
        <Timeline/>
        </div>
        </>
    )

}

export default Home