export default function  MySkills(){
    return(
        <section id="list-skills">
                        <h3 id="skill"><strong>WHAT I USE</strong></h3>
                        <hr/>
                        <div id="iUse">
                            <div className="row g-4 row-cols-1 row-cols-md-2 row-cols-lg-3 p-4 mb-3">
                            <div className="col">
                                <i className="devicon-html5-plain devicons"></i>
                                <i className="devicon-css3-plain devicons"></i>
                                <i className="devicon-bootstrap-plain devicons"></i>
                                <p>
                                    HTML forms the structural backbone of my pages,
                                    while CSS adds the stylistic flair.
                                    <a href="#my-project" className="linkstyle">My projects.</a>
                                </p>
                            </div>
                            <div className="col">
                                <i className="devicon-javascript-plain devicons"></i>
                                <i className="devicon-react-plain devicons"></i>
                                <i className="devicon-nodejs-plain devicons"></i>
                                <p>This combo enables me to build robust, scalable web apps entirely in JavaScript to write both client-side (React) and server-side (Node) code.
                                    <a href="#my-project" className="linkstyle">My
                                        projects.</a></p>
                            </div>
                            <div className="col">
                                <i className="devicon-python-plain devicons"></i>
                                <i className="devicon-flask-plain devicons"></i>
                                <p>Flask, a lightweight Python web framework's simplicity helps
                                    create dynamic and scalable web applications. <a
                                        href="#my-project" className="linkstyle">My projects.</a></p>
                            </div>
                            <div className="col">
                                <i className="devicon-csharp-plain devicons"></i>
                                <p>Strengthened my understanding of object-oriented programming principles, including className structures, inheritance, encapsulation, and polymorphism.</p>
                            </div>
                            <div className="col">
                                <i className="devicon-git-plain devicons"></i>
                                <i className="devicon-github-original devicons"></i>
                                <p>I use git and Github to host most of my projects. as they are open source
                                    <a href="https://github.com/ndongaloris" className="linkstyle">My Github.</a>
                                </p>
                            </div>
                            <div className="col">
                                <i className="devicon-sqlite-plain devicons"></i>
                                <i className="devicon-mysql-plain devicons"></i>
                                <i className="devicon-postgresql-plain devicons"></i>
                                <i className="devicon-mongodb-plain devicons"></i>
                                <p>MySQL and SQLite are the database languages I use.<a href="#my-project"
                                    className="linkstyle">My projects.</a></p>
                            </div>
                            
                        </div>
                    </div>
                    </section>
    )
}