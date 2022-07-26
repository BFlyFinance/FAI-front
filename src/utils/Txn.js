/**
 * Save Txn to indexedDB
 */
import 'es6-promise/auto';

import { get, set, update, createStore } from 'idb-keyval';
const FAIStore = createStore('fai-db', 'fai-store');

import useModal from 'uses/useModal';
const { openTxnModal, openTxnCheckedNotification, openTxnCheckedFailedNotification } = useModal();

const TXN_KEY = (account) => `${account}_txns`;

export const addTxn = ({ txn, address, name, oper, amount }) => {
  if (!window.starcoin.selectedAddress) return Promise.reject();

  openTxnModal(txn);
  return update(
    TXN_KEY(window.starcoin.selectedAddress),
    (val = {}) => {
      val[txn] = {
        address,
        name,
        oper,
        amount,
        createdAt: Date.now(),
        status: false,
      };
      return val;
    },
    FAIStore,
  );
};

export const checkedTxn = (txn) => {
  if (!window.starcoin.selectedAddress) return Promise.reject();

  openTxnCheckedNotification(txn);
  return update(
    TXN_KEY(window.starcoin.selectedAddress),
    (val = {}) => {
      val[txn] = {
        ...val[txn],
        status: true,
      };
      return val;
    },
    FAIStore,
  );
};

export const checkedTxnFaild = (txn) => {
  if (!window.starcoin.selectedAddress) return Promise.reject();

  openTxnCheckedFailedNotification(txn);
  return update(
    TXN_KEY(window.starcoin.selectedAddress),
    (val = {}) => {
      val[txn] = {
        ...val[txn],
        status: true,
      };
      return val;
    },
    FAIStore,
  );
};

export const getAllUncheckedTxns = () => {
  if (!window.starcoin.selectedAddress) return Promise.reject();

  return get(TXN_KEY(window.starcoin.selectedAddress), FAIStore).then((txns) => {
    if (!txns) return [];
    return Object.keys(txns).filter((txn) => !txns[txn].status);
  });
};

export const getAllTxn = () => {
  if (!window.starcoin.selectedAddress) return Promise.reject();

  return get(TXN_KEY(window.starcoin.selectedAddress), FAIStore);
};
