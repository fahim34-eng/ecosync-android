import * as React from 'react';
import { Checkbox } from 'react-native-paper';

const AnonymousPostSelect = () => {
  const [postAnonymously, setPostAnonymously] = React.useState(false);
  const handleAnonymousCheck = () => {
    setPostAnonymously(prevState => !prevState);
  };

  return (
    <>
      <Checkbox.Item 
        label="Post Anonymously"
        status={postAnonymously ? 'checked' : 'unchecked'}
        onPress={handleAnonymousCheck}
      />
    </>
  );
};

export default AnonymousPostSelect;
