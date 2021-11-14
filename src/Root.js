import React from 'react';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import Stacks from './navigation/Stacks';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import * as eva from '@eva-design/eva';

export default Root = () => {
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <Stacks></Stacks>
      </ApplicationProvider>
    </>
  );
};
