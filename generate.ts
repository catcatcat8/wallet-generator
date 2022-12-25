import { ethers } from 'ethers'

function main(): void {
  try {
    const wallet = ethers.Wallet.createRandom()
    console.log("mnemonic:", wallet.mnemonic.phrase)
    console.log("private key:", wallet.privateKey);
    console.log("address", wallet.address);
  } catch (error) {
    console.log(error)
  }
}

main()
