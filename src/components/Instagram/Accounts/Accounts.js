import * as React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import {GRID_VIEW, CARD_VIEW} from '../Accounts/instagram-account-constants'
import { useState } from 'react';
import ToggleSwitch from '../../Common/Form/Switch/switch'
import { AccountGridView } from './GridView/grid-view';
import { AccountCardView } from './CardView/card-view';

function createData(
  account,
  expire,
  loginStatus,
  liveStatus,
  Commands
) {
  return { account, expire, loginStatus, liveStatus,Commands };
}

const rows = [
  createData('livetest123456789.test',"2023-27-08", "","-","-"),
  createData('haadi.test8', "2023-20-08", "","-","-"),
  createData('haadi.test2', "2023-20-07", "","-","-"),
  createData('newuser_1398', "2023-21-05", "","-","-"),
];

export default function AccountGrid() {
  const[displayMode,setDisplayMode] = useState(CARD_VIEW)
  const displayModeHandler =()=>{
    setDisplayMode(displayMode === GRID_VIEW?CARD_VIEW:GRID_VIEW)
  }
  return (
    <Card className='col-md-12'>
      <Card.Header>Manage Instagram Accounts</Card.Header>
      <Card.Body>
      <Button variant="primary" onClick={displayModeHandler}>New Account</Button>
      <ToggleSwitch onChangeCallback={displayModeHandler} viewMode={displayMode}></ToggleSwitch>
      {displayMode === CARD_VIEW?
      <AccountCardView rows={rows}></AccountCardView>
      :
      <AccountGridView rows={rows}></AccountGridView>
    }      
      </Card.Body>
    </Card>
  );
}
