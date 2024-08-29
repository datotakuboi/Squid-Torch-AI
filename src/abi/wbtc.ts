import * as p from '@subsquid/evm-codec'
import { event, fun, viewFun, indexed, ContractBase } from '@subsquid/evm-abi'
import type { EventParams as EParams, FunctionArguments, FunctionReturn } from '@subsquid/evm-abi'

export const events = {
    Pause: event("0x6985a02210a168e66602d3235cb6db0e70f92b3ba4d376a33c0f3d9434bff625", "Pause()", {}),
    Unpause: event("0x7805862f689e2f13df9f062ff482ad3ad112aca9e0847911ed832e158c525b33", "Unpause()", {}),
    Burn: event("0xcc16f5dbb4873280815c1ee09dbd06736cffcc184412cf7a71a0fdb75d397ca5", "Burn(address,uint256)", {"burner": indexed(p.address), "value": p.uint256}),
    Mint: event("0x0f6798a560793a54c3bcfe86a93cde1e73087d944c0ea20544137d4121396885", "Mint(address,uint256)", {"to": indexed(p.address), "amount": p.uint256}),
    MintFinished: event("0xae5184fba832cb2b1f702aca6117b8d265eaf03ad33eb133f19dde0f5920fa08", "MintFinished()", {}),
    OwnershipRenounced: event("0xf8df31144d9c2f0f6b59d69b8b98abd5459d07f2742c4df920b25aae33c64820", "OwnershipRenounced(address)", {"previousOwner": indexed(p.address)}),
    OwnershipTransferred: event("0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0", "OwnershipTransferred(address,address)", {"previousOwner": indexed(p.address), "newOwner": indexed(p.address)}),
    Approval: event("0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925", "Approval(address,address,uint256)", {"owner": indexed(p.address), "spender": indexed(p.address), "value": p.uint256}),
    Transfer: event("0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef", "Transfer(address,address,uint256)", {"from": indexed(p.address), "to": indexed(p.address), "value": p.uint256}),
}

export const functions = {
    mintingFinished: viewFun("0x05d2035b", "mintingFinished()", {}, p.bool),
    name: viewFun("0x06fdde03", "name()", {}, p.string),
    approve: fun("0x095ea7b3", "approve(address,uint256)", {"_spender": p.address, "_value": p.uint256}, p.bool),
    reclaimToken: fun("0x17ffc320", "reclaimToken(address)", {"_token": p.address}, ),
    totalSupply: viewFun("0x18160ddd", "totalSupply()", {}, p.uint256),
    transferFrom: fun("0x23b872dd", "transferFrom(address,address,uint256)", {"_from": p.address, "_to": p.address, "_value": p.uint256}, p.bool),
    decimals: viewFun("0x313ce567", "decimals()", {}, p.uint8),
    unpause: fun("0x3f4ba83a", "unpause()", {}, ),
    mint: fun("0x40c10f19", "mint(address,uint256)", {"_to": p.address, "_amount": p.uint256}, p.bool),
    burn: fun("0x42966c68", "burn(uint256)", {"value": p.uint256}, ),
    claimOwnership: fun("0x4e71e0c8", "claimOwnership()", {}, ),
    paused: viewFun("0x5c975abb", "paused()", {}, p.bool),
    decreaseApproval: fun("0x66188463", "decreaseApproval(address,uint256)", {"_spender": p.address, "_subtractedValue": p.uint256}, p.bool),
    balanceOf: viewFun("0x70a08231", "balanceOf(address)", {"_owner": p.address}, p.uint256),
    renounceOwnership: fun("0x715018a6", "renounceOwnership()", {}, ),
    finishMinting: fun("0x7d64bcb4", "finishMinting()", {}, p.bool),
    pause: fun("0x8456cb59", "pause()", {}, ),
    owner: viewFun("0x8da5cb5b", "owner()", {}, p.address),
    symbol: viewFun("0x95d89b41", "symbol()", {}, p.string),
    transfer: fun("0xa9059cbb", "transfer(address,uint256)", {"_to": p.address, "_value": p.uint256}, p.bool),
    increaseApproval: fun("0xd73dd623", "increaseApproval(address,uint256)", {"_spender": p.address, "_addedValue": p.uint256}, p.bool),
    allowance: viewFun("0xdd62ed3e", "allowance(address,address)", {"_owner": p.address, "_spender": p.address}, p.uint256),
    pendingOwner: viewFun("0xe30c3978", "pendingOwner()", {}, p.address),
    transferOwnership: fun("0xf2fde38b", "transferOwnership(address)", {"newOwner": p.address}, ),
}

export class Contract extends ContractBase {

    mintingFinished() {
        return this.eth_call(functions.mintingFinished, {})
    }

    name() {
        return this.eth_call(functions.name, {})
    }

    totalSupply() {
        return this.eth_call(functions.totalSupply, {})
    }

    decimals() {
        return this.eth_call(functions.decimals, {})
    }

    paused() {
        return this.eth_call(functions.paused, {})
    }

    balanceOf(_owner: BalanceOfParams["_owner"]) {
        return this.eth_call(functions.balanceOf, {_owner})
    }

    owner() {
        return this.eth_call(functions.owner, {})
    }

    symbol() {
        return this.eth_call(functions.symbol, {})
    }

    allowance(_owner: AllowanceParams["_owner"], _spender: AllowanceParams["_spender"]) {
        return this.eth_call(functions.allowance, {_owner, _spender})
    }

    pendingOwner() {
        return this.eth_call(functions.pendingOwner, {})
    }
}

/// Event types
export type PauseEventArgs = EParams<typeof events.Pause>
export type UnpauseEventArgs = EParams<typeof events.Unpause>
export type BurnEventArgs = EParams<typeof events.Burn>
export type MintEventArgs = EParams<typeof events.Mint>
export type MintFinishedEventArgs = EParams<typeof events.MintFinished>
export type OwnershipRenouncedEventArgs = EParams<typeof events.OwnershipRenounced>
export type OwnershipTransferredEventArgs = EParams<typeof events.OwnershipTransferred>
export type ApprovalEventArgs = EParams<typeof events.Approval>
export type TransferEventArgs = EParams<typeof events.Transfer>

/// Function types
export type MintingFinishedParams = FunctionArguments<typeof functions.mintingFinished>
export type MintingFinishedReturn = FunctionReturn<typeof functions.mintingFinished>

export type NameParams = FunctionArguments<typeof functions.name>
export type NameReturn = FunctionReturn<typeof functions.name>

export type ApproveParams = FunctionArguments<typeof functions.approve>
export type ApproveReturn = FunctionReturn<typeof functions.approve>

export type ReclaimTokenParams = FunctionArguments<typeof functions.reclaimToken>
export type ReclaimTokenReturn = FunctionReturn<typeof functions.reclaimToken>

export type TotalSupplyParams = FunctionArguments<typeof functions.totalSupply>
export type TotalSupplyReturn = FunctionReturn<typeof functions.totalSupply>

export type TransferFromParams = FunctionArguments<typeof functions.transferFrom>
export type TransferFromReturn = FunctionReturn<typeof functions.transferFrom>

export type DecimalsParams = FunctionArguments<typeof functions.decimals>
export type DecimalsReturn = FunctionReturn<typeof functions.decimals>

export type UnpauseParams = FunctionArguments<typeof functions.unpause>
export type UnpauseReturn = FunctionReturn<typeof functions.unpause>

export type MintParams = FunctionArguments<typeof functions.mint>
export type MintReturn = FunctionReturn<typeof functions.mint>

export type BurnParams = FunctionArguments<typeof functions.burn>
export type BurnReturn = FunctionReturn<typeof functions.burn>

export type ClaimOwnershipParams = FunctionArguments<typeof functions.claimOwnership>
export type ClaimOwnershipReturn = FunctionReturn<typeof functions.claimOwnership>

export type PausedParams = FunctionArguments<typeof functions.paused>
export type PausedReturn = FunctionReturn<typeof functions.paused>

export type DecreaseApprovalParams = FunctionArguments<typeof functions.decreaseApproval>
export type DecreaseApprovalReturn = FunctionReturn<typeof functions.decreaseApproval>

export type BalanceOfParams = FunctionArguments<typeof functions.balanceOf>
export type BalanceOfReturn = FunctionReturn<typeof functions.balanceOf>

export type RenounceOwnershipParams = FunctionArguments<typeof functions.renounceOwnership>
export type RenounceOwnershipReturn = FunctionReturn<typeof functions.renounceOwnership>

export type FinishMintingParams = FunctionArguments<typeof functions.finishMinting>
export type FinishMintingReturn = FunctionReturn<typeof functions.finishMinting>

export type PauseParams = FunctionArguments<typeof functions.pause>
export type PauseReturn = FunctionReturn<typeof functions.pause>

export type OwnerParams = FunctionArguments<typeof functions.owner>
export type OwnerReturn = FunctionReturn<typeof functions.owner>

export type SymbolParams = FunctionArguments<typeof functions.symbol>
export type SymbolReturn = FunctionReturn<typeof functions.symbol>

export type TransferParams = FunctionArguments<typeof functions.transfer>
export type TransferReturn = FunctionReturn<typeof functions.transfer>

export type IncreaseApprovalParams = FunctionArguments<typeof functions.increaseApproval>
export type IncreaseApprovalReturn = FunctionReturn<typeof functions.increaseApproval>

export type AllowanceParams = FunctionArguments<typeof functions.allowance>
export type AllowanceReturn = FunctionReturn<typeof functions.allowance>

export type PendingOwnerParams = FunctionArguments<typeof functions.pendingOwner>
export type PendingOwnerReturn = FunctionReturn<typeof functions.pendingOwner>

export type TransferOwnershipParams = FunctionArguments<typeof functions.transferOwnership>
export type TransferOwnershipReturn = FunctionReturn<typeof functions.transferOwnership>

