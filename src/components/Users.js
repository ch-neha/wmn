import React, { useState } from "react";

function Users() {

    const [users, setusers] = useState([
        {
            'imgurl': 'https://turinghut.org/static/9384c958bbd95db9f010ee70a3bdaee1/30cdc/turinghut_logo.png',
            'name':'Turing Hut',
            'desc':'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam exobcaecati molestiaesequi magni odit sapiente autem ea doloremque natusaliquid dolor cupiditate inventore corrupti nam?',
            'phone':'+919872362435',
            'email':'turinghut@gmail.com'
        },
        {
            'imgurl':'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Association_for_Computing_Machinery_%28ACM%29_logo.svg/1200px-Association_for_Computing_Machinery_%28ACM%29_logo.svg.png',
            'name':'CSI',
            'desc':'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam exobcaecati molestiaesequi magni odit sapiente autem ea doloremque natusaliquid dolor cupiditate inventore corrupti nam?',
            'phone':'+919872362435',
            'email':'csiindia@gmail.com'
        },
        {
            'imgurl':'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj92UzpcNh8gvuPWNapxP6wdjXQ5Xm4NuDVI22E7s&s',
            'name':'EDCell',
            'desc':'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam exobcaecati molestiaesequi magni odit sapiente autem ea doloremque natusaliquid dolor cupiditate inventore corrupti nam?',
            'phone':'+919872362435',
            'email':'ecell@gmail.com'
        },
        {
            'imgurl':'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Association_for_Computing_Machinery_%28ACM%29_logo.svg/1200px-Association_for_Computing_Machinery_%28ACM%29_logo.svg.pngp',
            'name':'ACM',
            'desc':'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam exobcaecati molestiaesequi magni odit sapiente autem ea doloremque natusaliquid dolor cupiditate inventore corrupti nam?',
            'phone':'+919872362435',
            'email':'acm@gmail.com'
        },
    ]);

    return (
        <div className="container">

            {

                users.map((ele) => <div className="card mt-5 mb-3 shadow">
                <div className="card-body">
                    <div className="row">
                        <div className="col-3">
                            <img src={ele.imgurl}
                                className="card-img rounded-circle shadow-4-strong" width="40px" alt=""></img>
                        </div>
                        <div className="col-9">
                            <div className="display-6">{ele.name}</div>
                            <p className="card-text pt-2">{ele.desc}</p>
                            <br></br>
                            <p>Contact No: {ele.phone}</p>
                            <p>Email Address: {ele.email}</p>
                            <div className="row">
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>)

            }
            
            
            
        </div>
    )
}

export default Users;