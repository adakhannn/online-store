import React from 'react';
import {Card, Col, Image} from "react-bootstrap";
import star from '../assets/star.png'
import {useHistory} from "react-router-dom/cjs/react-router-dom";
import {DEVICE_ROUTE} from "../utils/consts";

const DeviceItem = ({device}) => {
  const history = useHistory()
  return (
    <Col md={3} className="mt-3 d-flex justify-content-center" onClick={() => history.push(DEVICE_ROUTE + '/' + device.id)}>
      <Card className="p-1" style={{width: 150, cursor: 'pointer'}} border={"light"}>
        <Image width={150} height={150} src={process.env.REACT_APP_API_URL + device.img}/>
        <div className="text-black-50 d-flex justify-content-between align-items-center mt-1">
          <div>Samsung</div>
          <div className="d-flex align-items-center" style={{gap: 5}}>
            <div>{device.rating}</div>
            <Image width={17} height={17} style={{position: "relative", top: 1}} src={star}/>
          </div>
        </div>
        <div>{device.name}</div>
      </Card>
    </Col>
  );
};

export default DeviceItem;
