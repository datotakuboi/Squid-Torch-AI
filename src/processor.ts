import {assertNotNull} from '@subsquid/util-internal'
import {
    BlockHeader,
    DataHandlerContext,
    EvmBatchProcessor,
    EvmBatchProcessorFields,
    Log as _Log,
    Transaction as _Transaction,
} from '@subsquid/evm-processor'
import { events } from './abi/dai';
import { db } from './db';

//List of contract addresses: change accordingly on which token to mine
//   Matic: '0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0'.toLowerCase(),
//   WBTC: '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599'.toLowerCase(),
//   USDT: '0xdAC17F958D2ee523a2206206994597C13D831ec7'.toLowerCase(),
//   USDC: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48'.toLowerCase(),
//   WETH: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2'.toLowerCase(),
//   DAI: '0x6B175474E89094C44Da98b954EedeAC495271d0F'.toLowerCase()

export const contractAddress =
  '0xdAC17F958D2ee523a2206206994597C13D831ec7'.toLowerCase(); //USDT

export const processor = new EvmBatchProcessor()
    // Lookup archive by the network name in Subsquid registry
    // See https://docs.subsquid.io/evm-indexing/supported-networks/
    .setGateway('https://v2.archive.subsquid.io/network/ethereum-mainnet')
    // Chain RPC endpoint is required for
    //  - indexing unfinalized blocks https://docs.subsquid.io/basics/unfinalized-blocks/
    //  - querying the contract state https://docs.subsquid.io/evm-indexing/query-state/
    .setRpcEndpoint({
        // Set the URL via .env for local runs or via secrets when deploying to Subsquid Cloud
        // https://docs.subsquid.io/deploy-squid/env-variables/
        url: assertNotNull(process.env.RPC_ETH_HTTP, 'No RPC endpoint supplied'),
        // More RPC connection options at https://docs.subsquid.io/evm-indexing/configuration/initialization/#set-data-source
        rateLimit: 10
    })
    .setFinalityConfirmation(75)
    .addLog({
        // address: Object.values(contractAddresses), // Listen to all specified addresses
        address: [contractAddress], // Listen to all specified addresses
        topic0: [events.Transfer.topic]
      })
    // .setFields({
    //     transaction: {
    //         from: true,
    //         value: true,
    //         hash: true,
    //     },
    // })
    .setBlockRange({
        from: 19000000,
    });
    // .addTransaction({
    //     to: ['0x0000000000000000000000000000000000000000'],
    // })



export type Fields = EvmBatchProcessorFields<typeof processor>
export type Block = BlockHeader<Fields>
export type Log = _Log<Fields>
export type Transaction = _Transaction<Fields>
export type ProcessorContext<Store> = DataHandlerContext<Store, Fields>
