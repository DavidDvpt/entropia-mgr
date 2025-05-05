'use client';

import { use } from 'react';

interface ITransactionPageProps {
  transactionType: 'buy' | 'sell';
}
function BuyPage(props: { params: Promise<{ transactionType: string }> }) {
  const { transactionType } = use(props.params);

  return <div>{transactionType === 'buy' ? 'BuyPage' : 'SellPage'}</div>;
}

export default BuyPage;
