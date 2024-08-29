import {Database, LocalDest, Store} from '@subsquid/file-store'
import { Transfers } from './tables'

export const db = new Database({
  tables: {
    Transfers,
  },
  dest: new LocalDest('./data'),
  chunkSizeMb: 100
})