import React, {useEffect} from 'react';
import { useDispatch } from 'react-redux';

import { getArticles } from '../../actions/articles';
import Banner from './Banner'
import Articles from './HomeArticles/Articles';
import PastEvents from './PastEvents';

const Home = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getArticles());
    }, [dispatch])

    return (
        <React.Fragment>
            <Banner />
            <Articles />
            <PastEvents />
        </React.Fragment>
    )
}

export default Home
