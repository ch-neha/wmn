function Users() {
    return (
        <div className="container">
            
            <div className="card-group mt-5">
                <div className="col-2 card shadow m-2">
                    <img alt=""
                        width="100%" />
                    <div className="card-body">
                        <h5>YouTube Videos</h5>
                        <p>Check out some YouTube tutorials to learn better.</p>
                    </div>
                    <div className="card-footer">
                        
                    </div>
                </div>

                <div className="card col-2  shadow  m-2">
                    <img  alt=""
                        width="100%" />
                    <div className="card-body">
                        <h5>Pdfs and PPTs</h5>
                        <p>Check out written notes and ppts of lecturers.</p>
                    </div>
                    <div className="card-footer">
                        
                    </div>
                </div>

                <div className="card col-2 shadow m-2">
                    <img  alt=""
                        width="100%" />
                    <div className="card-body">
                        <h5>Important Questions</h5>
                        <p>Check out important questions given by faculty for reference.</p>
                    </div>
                    <div className="card-footer m-1">
                        
                    </div>
                </div>

                <div className="card col-2 shadow m-2">
                    <img src="https://mdbcdn.b-cdn.net/img/new/avatars/9.webp" alt="hey there"
                       className="rounded-circle" width="100%" />
                        
                    <div className="card-body">
                        <h5>Previous Papers</h5>
                        <p>Check out some of the previously given question papers for reference.</p>
                    </div>
                    {/* <div className="card-footer">
                        <div>
                            <div style={{ textDecoration: "none" }} >
                                <button type="button" className="btn btn-warning d-block mx-auto w-100"
                                >Open</button>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default Users;