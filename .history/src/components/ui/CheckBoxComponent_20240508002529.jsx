import * as React from 'react';
import { Checkbox } from 'react-native-paper';

const CheckBoxComponent = () => {
  const [checked, setChecked] = React.useState(false);

  const items = [
    {
      id: 1,
      name: 'Entry',
    },
    {
      id: 2,
      name: 'Main',
    },
    {
      id: 3,
      name: 'Dessert',
    },
    {
      id: 4,
      name: 'Drinks',
    },
  ];

  const handleCheck = () => {
    setChecked(!checked);
  }


  return (
    <>
      {items.map((item) => (
        <Checkbox.Item 
          key={item.id} 
          label={item.name} 
          status={checked ? 'checked' : 'unchecked'} 
          onPress={handleCheck} 
        />
      ))}
    </>
  );
};

export default CheckBoxComponent;
