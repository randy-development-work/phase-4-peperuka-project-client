import React from "react";
// import { Button, Image, List } from "semantic-ui-react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";

function OneItem({ item }) {
    let navigator = useNavigate();
  const {
    id,
    image,
    name,
    vendor,
    location,
    category_id,
    vendor_contact,
    price,
    category,
  } = item;
  return (
    <div>
      <MDBCol>
        <MDBCard className="h-100">
          <MDBRipple
            rippleColor="light"
            rippleTag="div"
            className="bg-image hover-overlay"
          >
            <div
              alt="..."
              position="top"
              style={{
                height: 140,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundImage: `url(${image})`,
              }}
            />
          </MDBRipple>
          <MDBCardBody>
            <MDBCardTitle>
              <b>{name}</b>
            </MDBCardTitle>
            <MDBCardText>
              {vendor} | {vendor_contact} | <br /> {location}
              <br />
              <br />
              Category: {category.name}
              <br />
              <b>
                <MDBIcon fas icon="money-bill-wave-alt" /> {price}
              </b>
            </MDBCardText>
            <MDBBtn
              href="#"
              rounded
              style={{ marginRight: "60px" }}
              color="grey"
              rippleColor="dark"
              outline
              onClick={() => navigator(`/admin-items/${id}`)}
            >
              Edit
            </MDBBtn>
            <MDBBtn
              href="#"
              rounded
              color="dark"
              style={{ marginLeft: "35px" }}
            >
              Delete
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </div>
  );
}

export default OneItem;
