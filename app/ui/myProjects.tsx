import Image from "next/image";

export default function MyProjects() {
    return (
        <section id="project">
            <h3 id="my-project"><strong>PROJECTS I HAVE BUILT</strong></h3>
            <hr />
            <div className="container text-center displayP">
                <div className="row row-cols-1 row-cols-lg-2">
                    <div className="col">
                        {/* // style="max-width: 540px;" */}
                        <div className="card mb-3" >
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <Image src="images/money.jpeg" className="img-fluid rounded-start" alt="Finance app logo" />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">Finance</h5>
                                        <p className="card-text"> Allow the user to calculate a loan and savings
                                            by
                                            generating a schedule.
                                        </p>
                                        <a href="https://finance-y1i9.onrender.com/">Visit</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        {/* // style="max-width: 540px;" */}
                        <div className="card mb-3" >
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <Image src="/images/delorean.jpg" className="img-fluid rounded-start" alt="" />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">CSE Motors</h5>
                                        <p className="card-text">This is a wider card with supporting text below
                                            as a natural lead-in to additional content.</p>
                                        <a href="https://cse340-backend-dev.onrender.com/">Visit</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container text-center displayP">
                <div className="row row-cols-1 row-cols-lg-2">
                    <div className="col">
                        {/* // style="max-width: 540px;" */}
                        <div className="card mb-3">
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <Image src="/images/banner-sm.jpg" className="img-fluid rounded-start" alt="" />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">Sleep Outside</h5>
                                        <p className="card-text">A simple web app with Vite support to bundle up our assets. A website selling camping tools and kits.</p>
                                        <a href="https://sleepoutside13.netlify.app/">Visit</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        {/* // style="max-width: 540px;" */}
                        <div className="card mb-3">
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <Image src="/images/N-animez.jpeg" className="img-fluid rounded-start" alt="" />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">N-animez</h5>
                                        <p className="card-text">This is a wider card with supporting text below
                                            as
                                            a
                                            natural lead-in to additional content.</p>
                                        <a href="https://n-animez.netlify.app/">Visit</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}