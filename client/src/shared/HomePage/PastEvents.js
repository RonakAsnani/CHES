import React from 'react';
import { Link } from 'react-router-dom';

import './PastEvents.css';
import PSiphon from '../../assets/images/Homepage/past_events_siphon.png';
import PEureka from '../../assets/images/Homepage/past_events_eureka.png';
import PStock from '../../assets/images/Homepage/past_events_stockMania.png';

const Pastevents = (props) => {
    return (
        <React.Fragment>
            <div className="container" style={{ marginTop: "50px" }}>
                <div className="row" style={{ marginBottom: "30px" }}>
                    <div className="col-lg-6 mx-auto text-center">
                        <h2 className="pastevents-header">Past Events</h2>
                        <hr style={{ width: "25%", backgroundColor: "#e9c46a", height: "4px" }} />
                    </div>
                </div>
            </div>

            {/* first event */}
            <div className="container mb-5">
                <div className="row align-items-center justify-content-between">
                    <div className="col-md-6 col-lg-5">
                        <img src={PSiphon} className="img-fluid" />
                    </div>
                    <div className="col-md-6">
                        <h2 style={{ fontSize: "42px" }}>Siphon</h2>
                        <p>Siphon is the annual departmental fest of Chemical Engineering Deartment, SVNIT. It is a two day fest, organised in the first month of even semester. Events under Siphon are planned to improve the general chemical knowlege of the masses through games like Murder-Mystery, Bid-Wisely, The Lucky Element, Chemical Tambola. Other events like Starch Walk, Plasti-Psycho are pure fun games with a chemical twist. Many of the events have cash prizes up for grab.</p>
                    </div>
                </div>
            </div>

            {/* second event */}

            <div className="container mb-5">
                <div className="row align-items-center justify-content-between">
                    <div className="col-md-6">
                        <h2 style={{ fontSize: "42px" }}>Eureka</h2>
                        <p>Déjà vu.
                            They say it’s when
                            You see the already seen.
                            It’s like the coming back of foreshadows
                            That you left behind,
                            Quite a while ago.
                            And in a way that you
                            Least expected it.
                            But what I say is,
                            Let’s not believe in
                            Déjà vu.
                            Instead,
                            I would like
                            Rather love to
                            Be your
                            'Deja Brew'.</p>
                    </div>
                    <div className="col-md-6 col-lg-5">
                        <img src={PEureka} className="img-fluid" />
                    </div>
                </div>
            </div>

            <div className="container mb-5">
                <div className="row align-items-center justify-content-between">
                    <div className="col-md-6 col-lg-5">
                        <img src={PStock} className="img-fluid" />
                    </div>
                    <div className="col-md-6">
                        <h2 style={{ fontSize: "42px" }}>Stock Mania</h2>
                        <p>We are focussed on giving a satisfactory user experience and creating spaces which connect with the local culture of any location we establish at.
                            Fresh & superior quality ingredients are used to create innovative dishes and beverages that taste & look distinctive and incite fascination. From the lighting to the curated music, from free-walk spaces to the seating, we formulate an aesthetic as a whole so the final picture at the end is nothing short of marvelous!</p>
                    </div>
                </div>
            </div>

        </React.Fragment>
    )
}

export default Pastevents;
