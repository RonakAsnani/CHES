import React from 'react';
import { Link } from 'react-router-dom';

import './PastEvents.css';
import PSiphon from '../../assets/images/Homepage/past_events_siphon.png';
import PEureka from '../../assets/images/Homepage/past_events_eureka.png';
import PStock from '../../assets/images/Homepage/past_events_stockMania.png';
import recruitment from '../../assets/images/Homepage/recruitment.jpeg';

const Pastevents = (props) => {
    return (
        <React.Fragment>

            {/* <div className="container" style={{ marginTop: "50px" }}>
                <div className="row" style={{ marginBottom: "30px" }}>
                    <div className="col-lg-6 mx-auto text-center">
                        <h2 className="pastevents-header">🎉We are Recruiting!!!🎉</h2>
                        <hr style={{ width: "25%", backgroundColor: "#e9c46a", height: "4px" }} />
                    </div>
                </div>
            </div> */}

            {/* <div className="container mb-5">
                <div className="row align-items-center justify-content-between">
                    <div className="col-md-12 col-lg-12">
                        <div className="card recruitment" style={{ width: "25rem", margin: "auto" }}>
                            <img className="card-img-top" src={recruitment} alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title"></h5>
                                <p className="card-text">After a fabulous orientation with the sophomores where we discussed about the various committee profiles, the events of ChES and the roles, the sophomores are going to undertake for the next session,  we are <strong>now recruiting</strong> for the next academic session.

                                    Even if you missed  the orientation due to certain reasons, don't worry you can still apply .

                                    Discover what you are truly passionate about by joining ChES. Register through the button below:</p>
                                <a href="https://forms.gle/u6VkokiduNwKozF7A" target="_blank" class="btn btn-primary">REGISTER</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

            <div className="container" style={{ marginTop: "50px" }}>
                <div className="row" style={{ marginBottom: "30px" }}>
                    <div className="col-lg-6 mx-auto text-center">
                        <h2 className="pastevents-header">Past Events</h2>
                        <hr style={{ width: "25%", backgroundColor: "#e9c46a", height: "4px", margin: "auto" }} />
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
                        <h2 className="pastevent-header">Siphon</h2>
                        <p className="pastevent-text">Siphon is the annual departmental fest of Chemical Engineering Deartment, SVNIT. It is a two day fest, organised in the first month of even semester. Events under Siphon are planned to improve the general chemical knowlege of the masses through games like Murder-Mystery, Bid-Wisely, The Lucky Element, Chemical Tambola. Other events like Starch Walk, Plasti-Psycho are pure fun games with a chemical twist. Many of the events have cash prizes up for grab.</p>
                    </div>
                </div>
            </div>

            {/* second event */}

            <div className="container mb-5">
                <div className="row align-items-center justify-content-between">
                    <div className="col-md-6">
                        <h2 className="pastevent-header">Eureka</h2>
                        <p className="pastevent-text">This initiative was started in October 2019 to help students develop a
                            research-orientated mind. Participating students were assigned problem
                            statements like Self-healing Corrosion-resistant coatings, Innovation in electric
                            batteries, Plastic to Fuel, Nanomaterials, Vector Entrapment, Electrostatic
                            precipitators etc. which needed to be optimised. The program lasted for a month
                            and was successful up to a great extent as students learnt to access, read and
                            analyse the research papers that helped them get an idea of the research field.
                            Groups of 2​nd and 3​rd year students were made to organise the program. Weekly
                            meetings were conducted to discuss the problem statements. There was an online
                            portal assessment to evaluate the progress of each team. Teams presented their
                            research abstracts to the audience in the Blackboard Sessions conducted. Finally,
                            the teams compiled and concluded their optimal solution to the respective problem
                            statement selected by them in the Poster Presentation.</p>
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
                        <h2 className="pastevent-header">Stock Mania</h2>
                        <p className="pastevent-text">Rags or Riches?
                            In investing, what is comfortable is rarely profitable. It is about being smarter and more disciplined than the rest.

                            ChES brings a Pre-Event, for our much awaited annual fest, Siphon 6.0, for you get a better understanding of trading strategies and portfolio management through Stock Mania!
                            For more information and rules about the competition, attend the orientation on 21st March 2021, 5.30 pm onward.

                            Also, you can perform a post-event analysis of your stock market trades and learn from your positives and negatives and apply them into real-time trading!</p>
                    </div>
                </div>
            </div>

        </React.Fragment>
    )
}

export default Pastevents;
