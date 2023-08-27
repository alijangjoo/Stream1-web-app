import Form from 'react-bootstrap/Form';
import { CARD_VIEW } from '../../../Instagram/Accounts/instagram-account-constants';

const ToggleSwitch =({viewMode, onChangeCallback})=>{
    return(
        <Form>
        <Form.Check // prettier-ignore
          type="switch"
          id="custom-switch"
          label={viewMode === CARD_VIEW?"Card View":"Grid View"}
          onChange={onChangeCallback}
        />
      </Form>
    )
}
export default ToggleSwitch