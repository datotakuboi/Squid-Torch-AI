import * as p from '@subsquid/evm-codec'
import { event, fun, viewFun, indexed, ContractBase } from '@subsquid/evm-abi'
import type { EventParams as EParams, FunctionArguments, FunctionReturn } from '@subsquid/evm-abi'

export const events = {
    Approval: event("0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925", "Approval(address,address,uint256)", {"src": indexed(p.address), "guy": indexed(p.address), "wad": p.uint256}),
    LogNote: event("0xd3d8bec38a91a5f4411247483bc030a174e77cda9c0351924c759f41453aa5e8", "LogNote(bytes4,address,bytes32,bytes32,bytes)", {"sig": indexed(p.bytes4), "usr": indexed(p.address), "arg1": indexed(p.bytes32), "arg2": indexed(p.bytes32), "data": p.bytes}),
    Transfer: event("0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef", "Transfer(address,address,uint256)", {"src": indexed(p.address), "dst": indexed(p.address), "wad": p.uint256}),
}

export const functions = {
    DOMAIN_SEPARATOR: viewFun("0x3644e515", "DOMAIN_SEPARATOR()", {}, p.bytes32),
    PERMIT_TYPEHASH: viewFun("0x30adf81f", "PERMIT_TYPEHASH()", {}, p.bytes32),
    allowance: viewFun("0xdd62ed3e", "allowance(address,address)", {"_0": p.address, "_1": p.address}, p.uint256),
    approve: fun("0x095ea7b3", "approve(address,uint256)", {"usr": p.address, "wad": p.uint256}, p.bool),
    balanceOf: viewFun("0x70a08231", "balanceOf(address)", {"_0": p.address}, p.uint256),
    burn: fun("0x9dc29fac", "burn(address,uint256)", {"usr": p.address, "wad": p.uint256}, ),
    decimals: viewFun("0x313ce567", "decimals()", {}, p.uint8),
    deny: fun("0x9c52a7f1", "deny(address)", {"guy": p.address}, ),
    mint: fun("0x40c10f19", "mint(address,uint256)", {"usr": p.address, "wad": p.uint256}, ),
    move: fun("0xbb35783b", "move(address,address,uint256)", {"src": p.address, "dst": p.address, "wad": p.uint256}, ),
    name: viewFun("0x06fdde03", "name()", {}, p.string),
    nonces: viewFun("0x7ecebe00", "nonces(address)", {"_0": p.address}, p.uint256),
    permit: fun("0x8fcbaf0c", "permit(address,address,uint256,uint256,bool,uint8,bytes32,bytes32)", {"holder": p.address, "spender": p.address, "nonce": p.uint256, "expiry": p.uint256, "allowed": p.bool, "v": p.uint8, "r": p.bytes32, "s": p.bytes32}, ),
    pull: fun("0xf2d5d56b", "pull(address,uint256)", {"usr": p.address, "wad": p.uint256}, ),
    push: fun("0xb753a98c", "push(address,uint256)", {"usr": p.address, "wad": p.uint256}, ),
    rely: fun("0x65fae35e", "rely(address)", {"guy": p.address}, ),
    symbol: viewFun("0x95d89b41", "symbol()", {}, p.string),
    totalSupply: viewFun("0x18160ddd", "totalSupply()", {}, p.uint256),
    transfer: fun("0xa9059cbb", "transfer(address,uint256)", {"dst": p.address, "wad": p.uint256}, p.bool),
    transferFrom: fun("0x23b872dd", "transferFrom(address,address,uint256)", {"src": p.address, "dst": p.address, "wad": p.uint256}, p.bool),
    version: viewFun("0x54fd4d50", "version()", {}, p.string),
    wards: viewFun("0xbf353dbb", "wards(address)", {"_0": p.address}, p.uint256),
}

export class Contract extends ContractBase {

    DOMAIN_SEPARATOR() {
        return this.eth_call(functions.DOMAIN_SEPARATOR, {})
    }

    PERMIT_TYPEHASH() {
        return this.eth_call(functions.PERMIT_TYPEHASH, {})
    }

    allowance(_0: AllowanceParams["_0"], _1: AllowanceParams["_1"]) {
        return this.eth_call(functions.allowance, {_0, _1})
    }

    balanceOf(_0: BalanceOfParams["_0"]) {
        return this.eth_call(functions.balanceOf, {_0})
    }

    decimals() {
        return this.eth_call(functions.decimals, {})
    }

    name() {
        return this.eth_call(functions.name, {})
    }

    nonces(_0: NoncesParams["_0"]) {
        return this.eth_call(functions.nonces, {_0})
    }

    symbol() {
        return this.eth_call(functions.symbol, {})
    }

    totalSupply() {
        return this.eth_call(functions.totalSupply, {})
    }

    version() {
        return this.eth_call(functions.version, {})
    }

    wards(_0: WardsParams["_0"]) {
        return this.eth_call(functions.wards, {_0})
    }
}

/// Event types
export type ApprovalEventArgs = EParams<typeof events.Approval>
export type LogNoteEventArgs = EParams<typeof events.LogNote>
export type TransferEventArgs = EParams<typeof events.Transfer>

/// Function types
export type DOMAIN_SEPARATORParams = FunctionArguments<typeof functions.DOMAIN_SEPARATOR>
export type DOMAIN_SEPARATORReturn = FunctionReturn<typeof functions.DOMAIN_SEPARATOR>

export type PERMIT_TYPEHASHParams = FunctionArguments<typeof functions.PERMIT_TYPEHASH>
export type PERMIT_TYPEHASHReturn = FunctionReturn<typeof functions.PERMIT_TYPEHASH>

export type AllowanceParams = FunctionArguments<typeof functions.allowance>
export type AllowanceReturn = FunctionReturn<typeof functions.allowance>

export type ApproveParams = FunctionArguments<typeof functions.approve>
export type ApproveReturn = FunctionReturn<typeof functions.approve>

export type BalanceOfParams = FunctionArguments<typeof functions.balanceOf>
export type BalanceOfReturn = FunctionReturn<typeof functions.balanceOf>

export type BurnParams = FunctionArguments<typeof functions.burn>
export type BurnReturn = FunctionReturn<typeof functions.burn>

export type DecimalsParams = FunctionArguments<typeof functions.decimals>
export type DecimalsReturn = FunctionReturn<typeof functions.decimals>

export type DenyParams = FunctionArguments<typeof functions.deny>
export type DenyReturn = FunctionReturn<typeof functions.deny>

export type MintParams = FunctionArguments<typeof functions.mint>
export type MintReturn = FunctionReturn<typeof functions.mint>

export type MoveParams = FunctionArguments<typeof functions.move>
export type MoveReturn = FunctionReturn<typeof functions.move>

export type NameParams = FunctionArguments<typeof functions.name>
export type NameReturn = FunctionReturn<typeof functions.name>

export type NoncesParams = FunctionArguments<typeof functions.nonces>
export type NoncesReturn = FunctionReturn<typeof functions.nonces>

export type PermitParams = FunctionArguments<typeof functions.permit>
export type PermitReturn = FunctionReturn<typeof functions.permit>

export type PullParams = FunctionArguments<typeof functions.pull>
export type PullReturn = FunctionReturn<typeof functions.pull>

export type PushParams = FunctionArguments<typeof functions.push>
export type PushReturn = FunctionReturn<typeof functions.push>

export type RelyParams = FunctionArguments<typeof functions.rely>
export type RelyReturn = FunctionReturn<typeof functions.rely>

export type SymbolParams = FunctionArguments<typeof functions.symbol>
export type SymbolReturn = FunctionReturn<typeof functions.symbol>

export type TotalSupplyParams = FunctionArguments<typeof functions.totalSupply>
export type TotalSupplyReturn = FunctionReturn<typeof functions.totalSupply>

export type TransferParams = FunctionArguments<typeof functions.transfer>
export type TransferReturn = FunctionReturn<typeof functions.transfer>

export type TransferFromParams = FunctionArguments<typeof functions.transferFrom>
export type TransferFromReturn = FunctionReturn<typeof functions.transferFrom>

export type VersionParams = FunctionArguments<typeof functions.version>
export type VersionReturn = FunctionReturn<typeof functions.version>

export type WardsParams = FunctionArguments<typeof functions.wards>
export type WardsReturn = FunctionReturn<typeof functions.wards>

