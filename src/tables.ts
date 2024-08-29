import {Table, Column, Types} from '@subsquid/file-store-csv'

export const Transfers = new Table(
  'transfers.csv',
  {
    blockNumber: Column(Types.Numeric()),
    timestamp: Column(Types.DateTime()),
    contractAddress: Column(Types.String()),
    from: Column(Types.String()),
    to: Column(Types.String()),
    amount: Column(Types.Numeric()),
  },
  {
    header: false,
  }
)