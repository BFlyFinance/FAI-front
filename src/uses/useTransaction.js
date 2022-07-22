import { JsonProvider } from 'utils/TxnWrapper';
import { NETWORK_API } from 'config';

/**
 * Get Transaction Status
 */
export const GetTransactionStatus = (txHash) => {
  return JsonProvider(NETWORK_API()).getTransactionInfo(txHash);
};

export default () => {
  const TXN_CHECK_INTERVAL = 3000;
  let rolling = true;

  const startTransactionCheck = async (txn) => {
    try {
      const currentTxnStatus = await GetTransactionStatus(txn);

      if (currentTxnStatus?.status === 'Executed') {
        return Promise.resolve();
      } else if (typeof currentTxnStatus?.status === 'object') {
        return Promise.reject({
          message: `${txn} Transaction Faild!`,
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  return {
    startTransactionCheck,
  };
};
