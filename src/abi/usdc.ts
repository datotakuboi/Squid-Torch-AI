import * as p from '@subsquid/evm-codec'
import { event, fun, viewFun, indexed, ContractBase } from '@subsquid/evm-abi'
import type { EventParams as EParams, FunctionArguments, FunctionReturn } from '@subsquid/evm-abi'

export const events = {
    AdminChanged: event("0x7e644d79422f17c01e4894b5f4f588d331ebfa28653d42ae832dc59e38c9798f", "AdminChanged(address,address)", {"previousAdmin": p.address, "newAdmin": p.address}),
    Upgraded: event("0xbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b", "Upgraded(address)", {"implementation": p.address}),
}

export const functions = {
    upgradeTo: fun("0x3659cfe6", "upgradeTo(address)", {"newImplementation": p.address}, ),
    upgradeToAndCall: fun("0x4f1ef286", "upgradeToAndCall(address,bytes)", {"newImplementation": p.address, "data": p.bytes}, ),
    implementation: viewFun("0x5c60da1b", "implementation()", {}, p.address),
    changeAdmin: fun("0x8f283970", "changeAdmin(address)", {"newAdmin": p.address}, ),
    admin: viewFun("0xf851a440", "admin()", {}, p.address),
}

export class Contract extends ContractBase {

    implementation() {
        return this.eth_call(functions.implementation, {})
    }

    admin() {
        return this.eth_call(functions.admin, {})
    }
}

/// Event types
export type AdminChangedEventArgs = EParams<typeof events.AdminChanged>
export type UpgradedEventArgs = EParams<typeof events.Upgraded>

/// Function types
export type UpgradeToParams = FunctionArguments<typeof functions.upgradeTo>
export type UpgradeToReturn = FunctionReturn<typeof functions.upgradeTo>

export type UpgradeToAndCallParams = FunctionArguments<typeof functions.upgradeToAndCall>
export type UpgradeToAndCallReturn = FunctionReturn<typeof functions.upgradeToAndCall>

export type ImplementationParams = FunctionArguments<typeof functions.implementation>
export type ImplementationReturn = FunctionReturn<typeof functions.implementation>

export type ChangeAdminParams = FunctionArguments<typeof functions.changeAdmin>
export type ChangeAdminReturn = FunctionReturn<typeof functions.changeAdmin>

export type AdminParams = FunctionArguments<typeof functions.admin>
export type AdminReturn = FunctionReturn<typeof functions.admin>

