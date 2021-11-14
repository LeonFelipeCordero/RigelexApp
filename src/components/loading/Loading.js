import React from 'react';
import { Layout, Spinner, Text } from '@ui-kitten/components';
import { layout } from '../../styles/Styles';

export default Loading = (props) => {
  return (
    <Layout style={layout.containerCenter}>
      <Text>{props.title}</Text>
      <Spinner size={props.size ? props.size : 'giant'} />
    </Layout>
  );
};
