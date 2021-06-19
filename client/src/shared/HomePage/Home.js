import React from 'react';

import Banner from './Banner'
import Articles from './HomeArticles/Articles';
import PastEvents from './PastEvents';

const Home = () => {
    return (
        <React.Fragment>
            <Banner />
            <Articles />
            <PastEvents />
        </React.Fragment>
    )
}

export default Home
