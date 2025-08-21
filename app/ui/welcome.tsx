export default function Welcome() {
    return (
        <section id="welcome">
            <div>
                <h1 id="simple-list-item-1">CURRENTLY WORKING ON THIS PORTFOLIO</h1>
                <hr/>
            </div>
            <div className="row" id="greetings">
                <div className="container text-center">
                    <div className="row">
                        <div className="col">
                            <section>
                                <h2><strong>LORIS&nbsp;JARED&nbsp;NDONGA</strong></h2>
                                <h4>FULL-STACK SOFTWARE DEVELOPER</h4>
                                <h5>BYU-I Student</h5>
                                <h6>CS50 Learner</h6>
                            </section>
                            <section>
                                <h4>My favorite quote:</h4>
                                <p>“Humankind Cannot Gain Anything Without First Giving Something In Return.
                                    To obtain, Something Of Equal Value Must Be Lost. That Is Alchemy's
                                    First
                                    Law Of Equivalent Exchange.”
                                    ― <strong>Edward Elric</strong></p>
                            </section>
                        </div>
                        <div className="col">
                            <img src="images/home.png" className="rounded float-end" alt="My picture" width="500"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}