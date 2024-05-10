import * as React from 'react';
import { Checkbox } from 'react-native-paper';

const CheckBoxComponent = () => {
  const [checked, setChecked] = React.useState(false);

  return (
    // <Checkbox
    //   status={checked ? 'checked' : 'unchecked'}
    //   onPress={() => {
    //     setChecked(!checked);
    //   }}
    // >
    // </Checkbox>
    <Checkbox.Item label="Item" status={checked ? 'checked' : 'unchecked'} onPress={() => setChecked(!checked)}  />
  );
};

export default CheckBoxComponent;