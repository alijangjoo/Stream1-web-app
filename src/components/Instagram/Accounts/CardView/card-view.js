import React from "react";
import Card from 'react-bootstrap/Card';

export const AccountCardView = ({rows})=>{
    return (
        <div>
            {rows.map((row) => (
            <Card >
            <Card.Body>
              <Card.Title>{row.account}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">{row.expire}</Card.Subtitle>
              <Card.Text>
                {row.liveStatus}
              </Card.Text>
              <Card.Text>
                {row.loginStatus}
              </Card.Text>
              <Card.Link href="#" className='text-primary'><i class="bi bi-camera-reels" aria-hidden="true">Live</i> </Card.Link>
              <Card.Link href="#" className='text-primary'><i class="bi bi-clock-history" aria-hidden="true"></i> Live History</Card.Link>
              <Card.Link href="#" className='text-primary'><i class="bi bi-person-circle" aria-hidden="true"></i> Login/Logout</Card.Link>
              <Card.Link href="#" className='text-primary'><i class="bi bi-currency-dollar" aria-hidden="true"></i> Extend Service</Card.Link>
              <Card.Link href="#" className='text-danger'><i class="bi bi-trash" aria-hidden="true"></i> Delete</Card.Link>
            </Card.Body>
          </Card>
          ))}
        </div>
    )
}