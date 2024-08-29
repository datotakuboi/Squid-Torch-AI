import {TypeormDatabase} from '@subsquid/typeorm-store'
import {Burn} from './model'
import {processor, contractAddress} from './processor'
// import {processor, contractAddresses} from './processor'
// Import all ABI handlers
import {events} from './abi/dai';
// import { events as maticEvents } from './abi/matic';
// import { events as wbtcEvents } from './abi/wbtc';
// import { events as usdtEvents } from './abi/usdt';
// import { events as usdcEvents } from './abi/usdc';
// import { events as wethEvents } from './abi/weth';
// import { events as daiEvents } from './abi/dai';
import { db } from './db';
// import { BigDecimal } from 'bigdecimal.js'
import { Decimal } from 'decimal.js';

// processor.run(new TypeormDatabase({supportHotBlocks: true}), async (ctx) => {
//     const burns: Burn[] = []
//     for (let c of ctx.blocks) {
//         for (let tx of c.transactions) {
//             // decode and normalize the tx data
//             burns.push(
//                 new Burn({
//                     id: tx.id,
//                     block: c.header.height,
//                     address: tx.from,
//                     value: tx.value,
//                     txHash: tx.hash,
//                 })
//             )
//         }
//     }
//     // apply vectorized transformations and aggregations
//     const burned = burns.reduce((acc, b) => acc + b.value, 0n) / 1_000_000_000n
//     const startBlock = ctx.blocks.at(0)?.header.height
//     const endBlock = ctx.blocks.at(-1)?.header.height
//     ctx.log.info(`Burned ${burned} Gwei from ${startBlock} to ${endBlock}`)

//     // upsert batches of entities with batch-optimized ctx.store.save
//     await ctx.store.upsert(burns)
// })

processor.run(db, async (ctx) => {
    let decimals = 18
    for (let block of ctx.blocks) {
      for (let log of block.logs) {
        if (log.address !== contractAddress) continue;
        if (log.topics[0] !== events.Transfer.topic) continue;
  
        const { src, dst, wad } = events.Transfer.decode(log);
        const amount = new Decimal(wad.toString()).dividedBy(new Decimal(10).pow(decimals)).toNumber();

        ctx.store.Transfers.write({
          blockNumber: block.header.height,
          timestamp: new Date(block.header.timestamp),
          contractAddress: log.address,
          from: src.toLowerCase(),
          to: dst.toLowerCase(),
          amount: amount,
        });
      }
    }
  });

// Define an interface for the token configuration
// interface TokenConfig {
//   [address: string]: {
//       decimals: number;
//       events: any;
//   };
// }

// // Mapping each contract to its events and decimals
// const tokenConfig: TokenConfig = {
//   '0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0': { decimals: 18, events: maticEvents },
//   '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599': { decimals: 8, events: wbtcEvents },
//   '0xdAC17F958D2ee523a2206206994597C13D831ec7': { decimals: 6, events: usdtEvents },
//   '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48': { decimals: 6, events: usdcEvents },
//   '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2': { decimals: 18, events: wethEvents },
//   '0x6B175474E89094C44Da98b954EedeAC495271d0F': { decimals: 18, events: daiEvents }
// };

// processor.run(db, async (ctx) => {
//   for (let block of ctx.blocks) {
//       for (let log of block.logs) {
//           const tokenDetail = tokenConfig[log.address.toLowerCase()];
//           if (!tokenDetail || log.topics[0] !== tokenDetail.events.Transfer.topic) continue;

//           const { from, to, value } = tokenDetail.events.Transfer.decode(log);
//           const amount = new Decimal(value.toString()).dividedBy(new Decimal(10).pow(tokenDetail.decimals)).toNumber();

//           ctx.store.Transfers.write({
//               blockNumber: block.header.height,
//               timestamp: new Date(block.header.timestamp),
//               contractAddress: log.address,
//               from: from.toLowerCase(),
//               to: to.toLowerCase(),
//               amount: amount,
//           });
//       }
//   }
// });