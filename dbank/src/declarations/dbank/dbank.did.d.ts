import type { Principal } from '@dfinity/principal';
export interface _SERVICE {
  'checkBalance' : () => Promise<number>,
  'compound' : () => Promise<undefined>,
  'deposit' : (arg_0: number) => Promise<undefined>,
  'withdrawal' : (arg_0: number) => Promise<undefined>,
}
