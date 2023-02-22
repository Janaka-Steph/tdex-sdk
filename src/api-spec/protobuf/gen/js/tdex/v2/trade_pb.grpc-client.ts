/* eslint-disable */
// @generated by protobuf-ts 2.8.2 with parameter client_grpc1,add_pb_suffix,eslint_disable,ts_nocheck,long_type_string
// @generated from protobuf file "tdex/v2/trade.proto" (package "tdex.v2", syntax proto3)
// tslint:disable
// @ts-nocheck
import { TradeService } from "./trade_pb";
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { CompleteTradeResponse } from "./trade_pb";
import type { CompleteTradeRequest } from "./trade_pb";
import type { ProposeTradeResponse } from "./trade_pb";
import type { ProposeTradeRequest } from "./trade_pb";
import type { PreviewTradeResponse } from "./trade_pb";
import type { PreviewTradeRequest } from "./trade_pb";
import type { GetMarketPriceResponse } from "./trade_pb";
import type { GetMarketPriceRequest } from "./trade_pb";
import type { GetMarketBalanceResponse } from "./trade_pb";
import type { GetMarketBalanceRequest } from "./trade_pb";
import type { ListMarketsResponse } from "./trade_pb";
import type { ListMarketsRequest } from "./trade_pb";
import * as grpc from "@grpc/grpc-js";
/**
 * @generated from protobuf service tdex.v2.TradeService
 */
export interface ITradeServiceClient {
    /**
     * ListMarkets lists all the markets open for trading.
     *
     * @generated from protobuf rpc: ListMarkets(tdex.v2.ListMarketsRequest) returns (tdex.v2.ListMarketsResponse);
     */
    listMarkets(input: ListMarketsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (err: grpc.ServiceError | null, value?: ListMarketsResponse) => void): grpc.ClientUnaryCall;
    listMarkets(input: ListMarketsRequest, metadata: grpc.Metadata, callback: (err: grpc.ServiceError | null, value?: ListMarketsResponse) => void): grpc.ClientUnaryCall;
    listMarkets(input: ListMarketsRequest, options: grpc.CallOptions, callback: (err: grpc.ServiceError | null, value?: ListMarketsResponse) => void): grpc.ClientUnaryCall;
    listMarkets(input: ListMarketsRequest, callback: (err: grpc.ServiceError | null, value?: ListMarketsResponse) => void): grpc.ClientUnaryCall;
    /**
     * GetMarketBalance retutns the balance of the two current reserves of the
     * given market.
     *
     * @generated from protobuf rpc: GetMarketBalance(tdex.v2.GetMarketBalanceRequest) returns (tdex.v2.GetMarketBalanceResponse);
     */
    getMarketBalance(input: GetMarketBalanceRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (err: grpc.ServiceError | null, value?: GetMarketBalanceResponse) => void): grpc.ClientUnaryCall;
    getMarketBalance(input: GetMarketBalanceRequest, metadata: grpc.Metadata, callback: (err: grpc.ServiceError | null, value?: GetMarketBalanceResponse) => void): grpc.ClientUnaryCall;
    getMarketBalance(input: GetMarketBalanceRequest, options: grpc.CallOptions, callback: (err: grpc.ServiceError | null, value?: GetMarketBalanceResponse) => void): grpc.ClientUnaryCall;
    getMarketBalance(input: GetMarketBalanceRequest, callback: (err: grpc.ServiceError | null, value?: GetMarketBalanceResponse) => void): grpc.ClientUnaryCall;
    /**
     * GetMarketPrice retutns the spot price for the requested market and its
     * minimum tradable amount of base asset.
     *
     * @generated from protobuf rpc: GetMarketPrice(tdex.v2.GetMarketPriceRequest) returns (tdex.v2.GetMarketPriceResponse);
     */
    getMarketPrice(input: GetMarketPriceRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (err: grpc.ServiceError | null, value?: GetMarketPriceResponse) => void): grpc.ClientUnaryCall;
    getMarketPrice(input: GetMarketPriceRequest, metadata: grpc.Metadata, callback: (err: grpc.ServiceError | null, value?: GetMarketPriceResponse) => void): grpc.ClientUnaryCall;
    getMarketPrice(input: GetMarketPriceRequest, options: grpc.CallOptions, callback: (err: grpc.ServiceError | null, value?: GetMarketPriceResponse) => void): grpc.ClientUnaryCall;
    getMarketPrice(input: GetMarketPriceRequest, callback: (err: grpc.ServiceError | null, value?: GetMarketPriceResponse) => void): grpc.ClientUnaryCall;
    /**
     * PreviewTrade returns a counter amount and asset in response to the
     * provided ones and a trade type for a market.
     *
     * The trade type can assume values BUY or SELL and it always refer to the
     * fixed base asset.
     * For example:
     *  * if trade type is BUY, it means the trader wants to buy base asset funds.
     *  * if trade type is SELL, it means the trader wants to sell base asset funds.
     *
     * @generated from protobuf rpc: PreviewTrade(tdex.v2.PreviewTradeRequest) returns (tdex.v2.PreviewTradeResponse);
     */
    previewTrade(input: PreviewTradeRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (err: grpc.ServiceError | null, value?: PreviewTradeResponse) => void): grpc.ClientUnaryCall;
    previewTrade(input: PreviewTradeRequest, metadata: grpc.Metadata, callback: (err: grpc.ServiceError | null, value?: PreviewTradeResponse) => void): grpc.ClientUnaryCall;
    previewTrade(input: PreviewTradeRequest, options: grpc.CallOptions, callback: (err: grpc.ServiceError | null, value?: PreviewTradeResponse) => void): grpc.ClientUnaryCall;
    previewTrade(input: PreviewTradeRequest, callback: (err: grpc.ServiceError | null, value?: PreviewTradeResponse) => void): grpc.ClientUnaryCall;
    /**
     * ProposeTrade allows a trader to present a SwapRequest. The service answers
     * with a SwapAccept, filling the request's partial transaction, + an
     * expiration time to complete the swap when accepting the swap, or,
     * otherwise, with a SwapFail containg the reason for the rejection of the
     * proposal.
     *
     * @generated from protobuf rpc: ProposeTrade(tdex.v2.ProposeTradeRequest) returns (tdex.v2.ProposeTradeResponse);
     */
    proposeTrade(input: ProposeTradeRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (err: grpc.ServiceError | null, value?: ProposeTradeResponse) => void): grpc.ClientUnaryCall;
    proposeTrade(input: ProposeTradeRequest, metadata: grpc.Metadata, callback: (err: grpc.ServiceError | null, value?: ProposeTradeResponse) => void): grpc.ClientUnaryCall;
    proposeTrade(input: ProposeTradeRequest, options: grpc.CallOptions, callback: (err: grpc.ServiceError | null, value?: ProposeTradeResponse) => void): grpc.ClientUnaryCall;
    proposeTrade(input: ProposeTradeRequest, callback: (err: grpc.ServiceError | null, value?: ProposeTradeResponse) => void): grpc.ClientUnaryCall;
    /**
     * CompleteTrade can be used by the trader to let the daemon finalizing,
     * extracting, and broadcasting the swap transaction, once he's signed his
     * inputs.
     * This is not mandatory, the trader can do the steps above on his own
     * alternatively.
     *
     * @generated from protobuf rpc: CompleteTrade(tdex.v2.CompleteTradeRequest) returns (tdex.v2.CompleteTradeResponse);
     */
    completeTrade(input: CompleteTradeRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (err: grpc.ServiceError | null, value?: CompleteTradeResponse) => void): grpc.ClientUnaryCall;
    completeTrade(input: CompleteTradeRequest, metadata: grpc.Metadata, callback: (err: grpc.ServiceError | null, value?: CompleteTradeResponse) => void): grpc.ClientUnaryCall;
    completeTrade(input: CompleteTradeRequest, options: grpc.CallOptions, callback: (err: grpc.ServiceError | null, value?: CompleteTradeResponse) => void): grpc.ClientUnaryCall;
    completeTrade(input: CompleteTradeRequest, callback: (err: grpc.ServiceError | null, value?: CompleteTradeResponse) => void): grpc.ClientUnaryCall;
}
/**
 * @generated from protobuf service tdex.v2.TradeService
 */
export class TradeServiceClient extends grpc.Client implements ITradeServiceClient {
    private readonly _binaryOptions: Partial<BinaryReadOptions & BinaryWriteOptions>;
    constructor(address: string, credentials: grpc.ChannelCredentials, options: grpc.ClientOptions = {}, binaryOptions: Partial<BinaryReadOptions & BinaryWriteOptions> = {}) {
        super(address, credentials, options);
        this._binaryOptions = binaryOptions;
    }
    /**
     * ListMarkets lists all the markets open for trading.
     *
     * @generated from protobuf rpc: ListMarkets(tdex.v2.ListMarketsRequest) returns (tdex.v2.ListMarketsResponse);
     */
    listMarkets(input: ListMarketsRequest, metadata: grpc.Metadata | grpc.CallOptions | ((err: grpc.ServiceError | null, value?: ListMarketsResponse) => void), options?: grpc.CallOptions | ((err: grpc.ServiceError | null, value?: ListMarketsResponse) => void), callback?: ((err: grpc.ServiceError | null, value?: ListMarketsResponse) => void)): grpc.ClientUnaryCall {
        const method = TradeService.methods[0];
        return this.makeUnaryRequest<ListMarketsRequest, ListMarketsResponse>(`/${TradeService.typeName}/${method.name}`, (value: ListMarketsRequest): Buffer => Buffer.from(method.I.toBinary(value, this._binaryOptions)), (value: Buffer): ListMarketsResponse => method.O.fromBinary(value, this._binaryOptions), input, (metadata as any), (options as any), (callback as any));
    }
    /**
     * GetMarketBalance retutns the balance of the two current reserves of the
     * given market.
     *
     * @generated from protobuf rpc: GetMarketBalance(tdex.v2.GetMarketBalanceRequest) returns (tdex.v2.GetMarketBalanceResponse);
     */
    getMarketBalance(input: GetMarketBalanceRequest, metadata: grpc.Metadata | grpc.CallOptions | ((err: grpc.ServiceError | null, value?: GetMarketBalanceResponse) => void), options?: grpc.CallOptions | ((err: grpc.ServiceError | null, value?: GetMarketBalanceResponse) => void), callback?: ((err: grpc.ServiceError | null, value?: GetMarketBalanceResponse) => void)): grpc.ClientUnaryCall {
        const method = TradeService.methods[1];
        return this.makeUnaryRequest<GetMarketBalanceRequest, GetMarketBalanceResponse>(`/${TradeService.typeName}/${method.name}`, (value: GetMarketBalanceRequest): Buffer => Buffer.from(method.I.toBinary(value, this._binaryOptions)), (value: Buffer): GetMarketBalanceResponse => method.O.fromBinary(value, this._binaryOptions), input, (metadata as any), (options as any), (callback as any));
    }
    /**
     * GetMarketPrice retutns the spot price for the requested market and its
     * minimum tradable amount of base asset.
     *
     * @generated from protobuf rpc: GetMarketPrice(tdex.v2.GetMarketPriceRequest) returns (tdex.v2.GetMarketPriceResponse);
     */
    getMarketPrice(input: GetMarketPriceRequest, metadata: grpc.Metadata | grpc.CallOptions | ((err: grpc.ServiceError | null, value?: GetMarketPriceResponse) => void), options?: grpc.CallOptions | ((err: grpc.ServiceError | null, value?: GetMarketPriceResponse) => void), callback?: ((err: grpc.ServiceError | null, value?: GetMarketPriceResponse) => void)): grpc.ClientUnaryCall {
        const method = TradeService.methods[2];
        return this.makeUnaryRequest<GetMarketPriceRequest, GetMarketPriceResponse>(`/${TradeService.typeName}/${method.name}`, (value: GetMarketPriceRequest): Buffer => Buffer.from(method.I.toBinary(value, this._binaryOptions)), (value: Buffer): GetMarketPriceResponse => method.O.fromBinary(value, this._binaryOptions), input, (metadata as any), (options as any), (callback as any));
    }
    /**
     * PreviewTrade returns a counter amount and asset in response to the
     * provided ones and a trade type for a market.
     *
     * The trade type can assume values BUY or SELL and it always refer to the
     * fixed base asset.
     * For example:
     *  * if trade type is BUY, it means the trader wants to buy base asset funds.
     *  * if trade type is SELL, it means the trader wants to sell base asset funds.
     *
     * @generated from protobuf rpc: PreviewTrade(tdex.v2.PreviewTradeRequest) returns (tdex.v2.PreviewTradeResponse);
     */
    previewTrade(input: PreviewTradeRequest, metadata: grpc.Metadata | grpc.CallOptions | ((err: grpc.ServiceError | null, value?: PreviewTradeResponse) => void), options?: grpc.CallOptions | ((err: grpc.ServiceError | null, value?: PreviewTradeResponse) => void), callback?: ((err: grpc.ServiceError | null, value?: PreviewTradeResponse) => void)): grpc.ClientUnaryCall {
        const method = TradeService.methods[3];
        return this.makeUnaryRequest<PreviewTradeRequest, PreviewTradeResponse>(`/${TradeService.typeName}/${method.name}`, (value: PreviewTradeRequest): Buffer => Buffer.from(method.I.toBinary(value, this._binaryOptions)), (value: Buffer): PreviewTradeResponse => method.O.fromBinary(value, this._binaryOptions), input, (metadata as any), (options as any), (callback as any));
    }
    /**
     * ProposeTrade allows a trader to present a SwapRequest. The service answers
     * with a SwapAccept, filling the request's partial transaction, + an
     * expiration time to complete the swap when accepting the swap, or,
     * otherwise, with a SwapFail containg the reason for the rejection of the
     * proposal.
     *
     * @generated from protobuf rpc: ProposeTrade(tdex.v2.ProposeTradeRequest) returns (tdex.v2.ProposeTradeResponse);
     */
    proposeTrade(input: ProposeTradeRequest, metadata: grpc.Metadata | grpc.CallOptions | ((err: grpc.ServiceError | null, value?: ProposeTradeResponse) => void), options?: grpc.CallOptions | ((err: grpc.ServiceError | null, value?: ProposeTradeResponse) => void), callback?: ((err: grpc.ServiceError | null, value?: ProposeTradeResponse) => void)): grpc.ClientUnaryCall {
        const method = TradeService.methods[4];
        return this.makeUnaryRequest<ProposeTradeRequest, ProposeTradeResponse>(`/${TradeService.typeName}/${method.name}`, (value: ProposeTradeRequest): Buffer => Buffer.from(method.I.toBinary(value, this._binaryOptions)), (value: Buffer): ProposeTradeResponse => method.O.fromBinary(value, this._binaryOptions), input, (metadata as any), (options as any), (callback as any));
    }
    /**
     * CompleteTrade can be used by the trader to let the daemon finalizing,
     * extracting, and broadcasting the swap transaction, once he's signed his
     * inputs.
     * This is not mandatory, the trader can do the steps above on his own
     * alternatively.
     *
     * @generated from protobuf rpc: CompleteTrade(tdex.v2.CompleteTradeRequest) returns (tdex.v2.CompleteTradeResponse);
     */
    completeTrade(input: CompleteTradeRequest, metadata: grpc.Metadata | grpc.CallOptions | ((err: grpc.ServiceError | null, value?: CompleteTradeResponse) => void), options?: grpc.CallOptions | ((err: grpc.ServiceError | null, value?: CompleteTradeResponse) => void), callback?: ((err: grpc.ServiceError | null, value?: CompleteTradeResponse) => void)): grpc.ClientUnaryCall {
        const method = TradeService.methods[5];
        return this.makeUnaryRequest<CompleteTradeRequest, CompleteTradeResponse>(`/${TradeService.typeName}/${method.name}`, (value: CompleteTradeRequest): Buffer => Buffer.from(method.I.toBinary(value, this._binaryOptions)), (value: Buffer): CompleteTradeResponse => method.O.fromBinary(value, this._binaryOptions), input, (metadata as any), (options as any), (callback as any));
    }
}
