import BigNumber from 'bignumber.js';
import Enum from 'enums-js';

/**
 * Format Enum params
 */
export const ArrayToEnumParam = (array) => {
  if (Array.isArray(array)) {
    return array.map((item) => (typeof item === 'string' ? [item] : item));
  }
  return array;
};

// Dapp Contract Address
export const SOURCE_ADDRESS = '0x987Aa19F00dB14FE9B5C9271F3A7Ee0A'.toLocaleLowerCase();

export const STARCOIN_NETWORK = () => parseInt(window.starcoin?.networkVersion) || 1;

// Bflay Contract address
// Different contract address for different network

export const BFAI_CONTRACT_ADDRESS = () =>
  (STARCOIN_NETWORK() == 251
    ? '0xFE125d419811297dfAB03c61EfEC0bC9'
    : '0x4ffcc98f43ce74668264a0cf6eebe42b'
  ).toLocaleLowerCase();

export const TOKEN_FAI = () => `${BFAI_CONTRACT_ADDRESS()}::FAI::FAI`;

export const BROWSER_URL_OF_TRANSACTION = (txn = '') =>
  txn
    ? `https://stcscan.io/${ENUMS.CHAIN_NAME[STARCOIN_NETWORK()].value}/transactions/detail/${txn}`
    : '';
export const NETWORK_NAME = () => ENUMS.CHAIN_NAME[STARCOIN_NETWORK()]?.value;

export const ToChainAmount = (amount, precision) => new BigNumber(amount).multipliedBy(precision);
export const ToHumanAmount = (amount, precision) => new BigNumber(amount).dividedBy(precision);

export const ENUMS = {
  // Tab Name Enum
  TAB_NAME: new Enum(...ArrayToEnumParam(['deposit', 'withdraw', 'borrow', 'repay'])),
  FAI_TAB_NAME: new Enum(...ArrayToEnumParam(['supply', 'withdraw', 'mint', 'repay'])),
  CHAIN_NAME: new Enum(
    ...ArrayToEnumParam([
      [1, 'main'],
      [251, 'barnard'],
      [253, 'halley'],
    ]),
  ),
  ROUTE_NAME: new Enum(
    ...ArrayToEnumParam([
      'BorrowHome',
      'BorrowResource',
      'BorrowDeposit',
      'BorrowLoan',
      'BorrowHistory',
      'Dashboard',
    ]),
  ),
  LS_NAME: new Enum(...ArrayToEnumParam(['deposit_query', 'borrow_query'])),
};

export const NETWORK_API = () =>
  `https://${ENUMS.CHAIN_NAME[STARCOIN_NETWORK()].value}-seed.starcoin.org/`;
