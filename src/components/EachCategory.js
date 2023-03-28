import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
// import './Categories.css';
import Tilt from 'react-parallax-tilt'
import { CCard, CCardHeader, CCardTitle, CCardBody, CCardText, CRow, CCol, CCardFooter, CCardImage } from '@coreui/react';
import { Card, Icon, Image, Button } from 'semantic-ui-react';

function EachCategory({category}) {
  // console.log(props);
    const {id, image, name} = category
    // const imgStyle={
    //   height: 240,
    //   backgroundSize: "cover",
    //   backgroundPosition: "center",
    //   backgroundRepeat: "no-repeat",
    //   backgroundImage: `url(${image})`
    // }
  return (
    <Fragment className="frag_item">
       <Card className='card-style'>
            {/* <Image src={image} wrapped ui={true} /> */}
            <Link to={"/"} className="rounded-top" style={{
                height: 240,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundImage: `url(${image})`
            }}
            
            ></Link>
            <Card.Content>
            <Card.Header>{name}</Card.Header>            
          
            </Card.Content>
            
        </Card>

    </Fragment>
    
  );
}

export default EachCategory;