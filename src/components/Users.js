import React from "react";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import IconButton from "@mui/material/IconButton";
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';

function Users() {
    return (
        <div className="container">
            
            <div className="card mt-5 mb-3 w-4 shadow">
                <div className="card-body">
                    <div className="row">
                        <div className="col-3">
                            <img src="https://mdbcdn.b-cdn.net/img/new/avatars/1.webp"
                                className="card-img rounded-circle shadow-4-strong" width="40px" alt=""></img>
                        </div>
                        <div className="col-9">
                            <div className="display-6">Alan</div>
                            <p className="card-text pt-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam,
                                ex
                                obcaecati molestiae
                                sequi magni odit sapiente autem ea doloremque natus
                                aliquid dolor cupiditate inventore corrupti nam?</p>
                            <br></br>
                            <p>Contact No: +9112345688</p>
                            <p>Email Address: test@gmail.com</p>
                            <div className="row">
                            <div><i className="fa fa-spinner fa-spin">no spinner but why</i></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Users;