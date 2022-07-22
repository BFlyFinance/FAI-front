import BigNumber from 'bignumber.js';

// 实际抵押率
export const realStakeRatio = (stakeSTCAmount, priceOfSTC, mintedFAIAmount) => {
  return new BigNumber(stakeSTCAmount)
    .multipliedBy(priceOfSTC)
    .dividedBy(mintedFAIAmount)
    .toNumber();
};

// 剩余可取STC
export const maxWithdrawableSTC = (
  stakeSTCAmount,
  mintedFAIAmount,
  miniumalStakeRatio,
  priceOfSTC,
  hunmanReadableStabilityFee,
) => {
  // 存入的STC - (实际铸造FAI+ toHunmanReadable(稳定费))*最低抵押率/STC的价格
  return Math.max(0, new BigNumber(stakeSTCAmount)
    .minus(
      new BigNumber(mintedFAIAmount)
        .plus(hunmanReadableStabilityFee)
        .multipliedBy(miniumalStakeRatio)
        .dividedBy(priceOfSTC),
    )
    .toNumber());
};

// 最大可铸造
export const maxCanMinit = (stakeSTCAmount, price, miniumalStakeRatio) => {
  if (new BigNumber(miniumalStakeRatio).isEqualTo(0)) return 0;
  return new BigNumber(stakeSTCAmount).multipliedBy(price).dividedBy(miniumalStakeRatio).toNumber();
};

// 剩余可铸造
export const calcAbleToGenerate = (maxMintedAmount, mintedFAIAmount) => 
   Math.max(0, new BigNumber(maxMintedAmount).minus(mintedFAIAmount).dp(4).toNumber());
  
