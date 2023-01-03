import React from 'react';
import { Button } from 'dumi-c';
const Index = () => {
  return (
    <Button
      size="large"
      type="primary"
      onClick={() => {
        console.log('e');
      }}
    >
      testing
    </Button>
  );
};
export default Index;
