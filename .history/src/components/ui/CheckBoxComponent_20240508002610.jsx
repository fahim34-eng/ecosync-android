import * as React from 'react';
import { Checkbox } from 'react-native-paper';

const CheckBoxComponent = () => {
  const [checkedItems, setCheckedItems] = React.useState({});

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

  const handleCheck = (itemId) => {
    setCheckedItems(prevState => ({
      ...prevState,
      [itemId]: !prevState[itemId]
    }));
  }

  const checkedItemArr = Object.keys(checkedItems).filter(key => checkedItems[key]);

  console.log(checkedItemArr)

  return (
    <>
      {items.map((item) => (
        <Checkbox.Item 
          key={item.id} 
          label={item.name} 
          status={checkedItems[item.id] ? 'checked' : 'unchecked'} 
          onPress={() => handleCheck(item.id)} 
        />
      ))}
    </>
  );
};

export default CheckBoxComponent;
