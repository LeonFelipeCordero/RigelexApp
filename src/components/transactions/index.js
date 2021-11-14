import React from 'react';
import { Text, List, ListItem, Divider } from '@ui-kitten/components';

export default TransactionsList = (props) => {
  renderItemAccessory = (amount, isSender) => (
    <Text status={isSender ? 'danger' : 'primary'}>
      {`${amount.denom} ${amount.amount}`}
    </Text>
  );

  navigateToTransactionOverview = (txHash) =>
    props.navigation.navigate('TransactionOverview', { txHash: txHash });

  renderItem = ({ item }) => {
    const sender = item.tx.value.msg[0].value.from_address;
    const title = item.tx.value.memo;
    const date = new Date(item.timestamp).toLocaleDateString();
    return (
      <ListItem
        title={`${title}`}
        description={<Text>{date}</Text>}
        accessoryRight={() =>
          this.renderItemAccessory(
            item.tx.value.msg[0].value.amount[0],
            sender === props.wallet.key.accAddress
          )
        }
        onPress={() => navigateToTransactionOverview(item.txhash)}
      />
    );
  };

  return (
    <List
      data={props.transactions.txs}
      renderItem={renderItem}
      ItemSeparatorComponent={Divider}
      style={{ maxHeight: '100%' }}
    />
  );
};
