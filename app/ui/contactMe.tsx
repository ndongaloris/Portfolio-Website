export default function ContactMe(){
    return (
         <section id="contact">
                        <h3 id="contact-me"><strong>LET'S GET IN TOUCH</strong></h3>
                        <hr/>
                        <form action="/message" method="POST">
                            <div className="row g-3">

                                <div className="col col-12 col-md-6">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">First Name</label>
                                    <input type="text" className="form-control" placeholder="First name"
                                        aria-label="First name"/>
                                </div>
                                <div className="col col-12 col-md-6">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">Last Name</label>
                                    <input type="text" className="form-control" placeholder="Last name"
                                        aria-label="Last name"/>
                                </div>
                                <div className="col col-12 col-md-6">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                                    <input type="email" className="form-control" placeholder="myname@email.com"
                                        aria-label="Email Address"/>
                                </div>
                                <div className="col col-12 col-md-6">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">Phone Number
                                        (OPTIONAL)</label>
                                    <input type="text" className="form-control" placeholder="Phone Number"
                                        aria-label="Last name"/>
                                </div>
                                <div className="col col-12">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">Subject</label>
                                    <input type="text" className="form-control" id="exampleFormControlInput1"
                                        placeholder="Subject"/>
                                </div>
                                <div className="col col-12">
                                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Message</label>
                                    // rows="3"
                                    <textarea className="form-control" id="exampleFormControlTextarea1"
                                        placeholder="Write your message here" ></textarea>
                                </div>
                                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                                    <button type="button">Send Now</button>
                                </div>
                            </div>
                        </form>
                    </section>
    )
}