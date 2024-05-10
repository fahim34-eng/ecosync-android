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

  // i want to traverse checkedItems and create an array of checked items that included the total item not just the id
  const checkedItemArr = Object.keys(checkedItems).filter((item) => checkedItems[item]);


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
