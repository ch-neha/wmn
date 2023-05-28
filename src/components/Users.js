import React, { useState } from "react";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import IconButton from "@mui/material/IconButton";
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';

function Users() {
    const [isConnected, setConnected] = useState(false);
    function click () {
        setConnected(true)
    }
  return (
    <div className="container">
      <div className="card mt-5 mb-3 w-4 shadow">
        <div className="card-body">
          <div className="row">
            <div className="col-2">
              <img
                src="https://mdbcdn.b-cdn.net/img/new/avatars/1.webp"
                className="card-img rounded-circle shadow-4-strong"
                width="80px"
                style={{ width: 220, height: 220 }}
                alt=""
              />
            </div>
            <div className="col-10">
              <h4 className="display-6">Alan</h4>
              <p className="card-text pt-2">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Ipsam, ex obcaecati molestiae sequi magni odit sapiente autem ea
                doloremque natus aliquid dolor cupiditate inventore corrupti
                nam?
              </p>
              <div className="row">
                <div className="col">
                  <p className="m-0">Contact No: +9112345688</p>
                  <p className="m-0">Email Address: test@gmail.com</p>
                </div>
              </div>
              <div className="row" style={{marginTop: 7}}>
                <div className="col">
                    <IconButton>
                        <WhatsAppIcon />
                    </IconButton>
                    <IconButton>
                        <TwitterIcon />
                    </IconButton>
                    <IconButton>
                        <InstagramIcon />
                    </IconButton>
                    <IconButton>
                        <FacebookRoundedIcon />
                    </IconButton>
                    </div>
                    <div className="col mx-5" style={{textAlign: "right"}}>
                    {
                        isConnected == false?
                        (<button type="button" class="btn btn-primary" onClick={click}>Connect<span class="bi bi-plus-circle mx-1"></span></button>):
                        (<button type="button" class="btn btn-primary" >Chat<span class="bi bi-chat mx-1"></span></button>)
                    }
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Users;
