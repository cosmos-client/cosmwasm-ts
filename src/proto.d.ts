import * as $protobuf from "protobufjs";
/** Namespace cosmwasm. */
export namespace cosmwasm {

    /** Namespace wasm. */
    namespace wasm {

        /** Namespace v1. */
        namespace v1 {

            /** Represents a Query */
            class Query extends $protobuf.rpc.Service {

                /**
                 * Constructs a new Query service.
                 * @param rpcImpl RPC implementation
                 * @param [requestDelimited=false] Whether requests are length-delimited
                 * @param [responseDelimited=false] Whether responses are length-delimited
                 */
                constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                /**
                 * Calls ContractInfo.
                 * @param request QueryContractInfoRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and QueryContractInfoResponse
                 */
                public contractInfo(request: cosmwasm.wasm.v1.IQueryContractInfoRequest, callback: cosmwasm.wasm.v1.Query.ContractInfoCallback): void;

                /**
                 * Calls ContractInfo.
                 * @param request QueryContractInfoRequest message or plain object
                 * @returns Promise
                 */
                public contractInfo(request: cosmwasm.wasm.v1.IQueryContractInfoRequest): Promise<cosmwasm.wasm.v1.QueryContractInfoResponse>;

                /**
                 * Calls ContractHistory.
                 * @param request QueryContractHistoryRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and QueryContractHistoryResponse
                 */
                public contractHistory(request: cosmwasm.wasm.v1.IQueryContractHistoryRequest, callback: cosmwasm.wasm.v1.Query.ContractHistoryCallback): void;

                /**
                 * Calls ContractHistory.
                 * @param request QueryContractHistoryRequest message or plain object
                 * @returns Promise
                 */
                public contractHistory(request: cosmwasm.wasm.v1.IQueryContractHistoryRequest): Promise<cosmwasm.wasm.v1.QueryContractHistoryResponse>;

                /**
                 * Calls ContractsByCode.
                 * @param request QueryContractsByCodeRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and QueryContractsByCodeResponse
                 */
                public contractsByCode(request: cosmwasm.wasm.v1.IQueryContractsByCodeRequest, callback: cosmwasm.wasm.v1.Query.ContractsByCodeCallback): void;

                /**
                 * Calls ContractsByCode.
                 * @param request QueryContractsByCodeRequest message or plain object
                 * @returns Promise
                 */
                public contractsByCode(request: cosmwasm.wasm.v1.IQueryContractsByCodeRequest): Promise<cosmwasm.wasm.v1.QueryContractsByCodeResponse>;

                /**
                 * Calls AllContractState.
                 * @param request QueryAllContractStateRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and QueryAllContractStateResponse
                 */
                public allContractState(request: cosmwasm.wasm.v1.IQueryAllContractStateRequest, callback: cosmwasm.wasm.v1.Query.AllContractStateCallback): void;

                /**
                 * Calls AllContractState.
                 * @param request QueryAllContractStateRequest message or plain object
                 * @returns Promise
                 */
                public allContractState(request: cosmwasm.wasm.v1.IQueryAllContractStateRequest): Promise<cosmwasm.wasm.v1.QueryAllContractStateResponse>;

                /**
                 * Calls RawContractState.
                 * @param request QueryRawContractStateRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and QueryRawContractStateResponse
                 */
                public rawContractState(request: cosmwasm.wasm.v1.IQueryRawContractStateRequest, callback: cosmwasm.wasm.v1.Query.RawContractStateCallback): void;

                /**
                 * Calls RawContractState.
                 * @param request QueryRawContractStateRequest message or plain object
                 * @returns Promise
                 */
                public rawContractState(request: cosmwasm.wasm.v1.IQueryRawContractStateRequest): Promise<cosmwasm.wasm.v1.QueryRawContractStateResponse>;

                /**
                 * Calls SmartContractState.
                 * @param request QuerySmartContractStateRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and QuerySmartContractStateResponse
                 */
                public smartContractState(request: cosmwasm.wasm.v1.IQuerySmartContractStateRequest, callback: cosmwasm.wasm.v1.Query.SmartContractStateCallback): void;

                /**
                 * Calls SmartContractState.
                 * @param request QuerySmartContractStateRequest message or plain object
                 * @returns Promise
                 */
                public smartContractState(request: cosmwasm.wasm.v1.IQuerySmartContractStateRequest): Promise<cosmwasm.wasm.v1.QuerySmartContractStateResponse>;

                /**
                 * Calls Code.
                 * @param request QueryCodeRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and QueryCodeResponse
                 */
                public code(request: cosmwasm.wasm.v1.IQueryCodeRequest, callback: cosmwasm.wasm.v1.Query.CodeCallback): void;

                /**
                 * Calls Code.
                 * @param request QueryCodeRequest message or plain object
                 * @returns Promise
                 */
                public code(request: cosmwasm.wasm.v1.IQueryCodeRequest): Promise<cosmwasm.wasm.v1.QueryCodeResponse>;

                /**
                 * Calls Codes.
                 * @param request QueryCodesRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and QueryCodesResponse
                 */
                public codes(request: cosmwasm.wasm.v1.IQueryCodesRequest, callback: cosmwasm.wasm.v1.Query.CodesCallback): void;

                /**
                 * Calls Codes.
                 * @param request QueryCodesRequest message or plain object
                 * @returns Promise
                 */
                public codes(request: cosmwasm.wasm.v1.IQueryCodesRequest): Promise<cosmwasm.wasm.v1.QueryCodesResponse>;

                /**
                 * Calls PinnedCodes.
                 * @param request QueryPinnedCodesRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and QueryPinnedCodesResponse
                 */
                public pinnedCodes(request: cosmwasm.wasm.v1.IQueryPinnedCodesRequest, callback: cosmwasm.wasm.v1.Query.PinnedCodesCallback): void;

                /**
                 * Calls PinnedCodes.
                 * @param request QueryPinnedCodesRequest message or plain object
                 * @returns Promise
                 */
                public pinnedCodes(request: cosmwasm.wasm.v1.IQueryPinnedCodesRequest): Promise<cosmwasm.wasm.v1.QueryPinnedCodesResponse>;
            }

            namespace Query {

                /**
                 * Callback as used by {@link cosmwasm.wasm.v1.Query#contractInfo}.
                 * @param error Error, if any
                 * @param [response] QueryContractInfoResponse
                 */
                type ContractInfoCallback = (error: (Error|null), response?: cosmwasm.wasm.v1.QueryContractInfoResponse) => void;

                /**
                 * Callback as used by {@link cosmwasm.wasm.v1.Query#contractHistory}.
                 * @param error Error, if any
                 * @param [response] QueryContractHistoryResponse
                 */
                type ContractHistoryCallback = (error: (Error|null), response?: cosmwasm.wasm.v1.QueryContractHistoryResponse) => void;

                /**
                 * Callback as used by {@link cosmwasm.wasm.v1.Query#contractsByCode}.
                 * @param error Error, if any
                 * @param [response] QueryContractsByCodeResponse
                 */
                type ContractsByCodeCallback = (error: (Error|null), response?: cosmwasm.wasm.v1.QueryContractsByCodeResponse) => void;

                /**
                 * Callback as used by {@link cosmwasm.wasm.v1.Query#allContractState}.
                 * @param error Error, if any
                 * @param [response] QueryAllContractStateResponse
                 */
                type AllContractStateCallback = (error: (Error|null), response?: cosmwasm.wasm.v1.QueryAllContractStateResponse) => void;

                /**
                 * Callback as used by {@link cosmwasm.wasm.v1.Query#rawContractState}.
                 * @param error Error, if any
                 * @param [response] QueryRawContractStateResponse
                 */
                type RawContractStateCallback = (error: (Error|null), response?: cosmwasm.wasm.v1.QueryRawContractStateResponse) => void;

                /**
                 * Callback as used by {@link cosmwasm.wasm.v1.Query#smartContractState}.
                 * @param error Error, if any
                 * @param [response] QuerySmartContractStateResponse
                 */
                type SmartContractStateCallback = (error: (Error|null), response?: cosmwasm.wasm.v1.QuerySmartContractStateResponse) => void;

                /**
                 * Callback as used by {@link cosmwasm.wasm.v1.Query#code}.
                 * @param error Error, if any
                 * @param [response] QueryCodeResponse
                 */
                type CodeCallback = (error: (Error|null), response?: cosmwasm.wasm.v1.QueryCodeResponse) => void;

                /**
                 * Callback as used by {@link cosmwasm.wasm.v1.Query#codes}.
                 * @param error Error, if any
                 * @param [response] QueryCodesResponse
                 */
                type CodesCallback = (error: (Error|null), response?: cosmwasm.wasm.v1.QueryCodesResponse) => void;

                /**
                 * Callback as used by {@link cosmwasm.wasm.v1.Query#pinnedCodes}.
                 * @param error Error, if any
                 * @param [response] QueryPinnedCodesResponse
                 */
                type PinnedCodesCallback = (error: (Error|null), response?: cosmwasm.wasm.v1.QueryPinnedCodesResponse) => void;
            }

            /** Properties of a QueryContractInfoRequest. */
            interface IQueryContractInfoRequest {

                /** QueryContractInfoRequest address */
                address?: (string|null);
            }

            /** Represents a QueryContractInfoRequest. */
            class QueryContractInfoRequest implements IQueryContractInfoRequest {

                /**
                 * Constructs a new QueryContractInfoRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: cosmwasm.wasm.v1.IQueryContractInfoRequest);

                /** QueryContractInfoRequest address. */
                public address: string;

                /**
                 * Encodes the specified QueryContractInfoRequest message. Does not implicitly {@link cosmwasm.wasm.v1.QueryContractInfoRequest.verify|verify} messages.
                 * @param message QueryContractInfoRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: cosmwasm.wasm.v1.IQueryContractInfoRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified QueryContractInfoRequest message, length delimited. Does not implicitly {@link cosmwasm.wasm.v1.QueryContractInfoRequest.verify|verify} messages.
                 * @param message QueryContractInfoRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: cosmwasm.wasm.v1.IQueryContractInfoRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a QueryContractInfoRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns QueryContractInfoRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): cosmwasm.wasm.v1.QueryContractInfoRequest;

                /**
                 * Decodes a QueryContractInfoRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns QueryContractInfoRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): cosmwasm.wasm.v1.QueryContractInfoRequest;

                /**
                 * Verifies a QueryContractInfoRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a QueryContractInfoRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns QueryContractInfoRequest
                 */
                public static fromObject(object: { [k: string]: any }): cosmwasm.wasm.v1.QueryContractInfoRequest;

                /**
                 * Creates a plain object from a QueryContractInfoRequest message. Also converts values to other types if specified.
                 * @param message QueryContractInfoRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: cosmwasm.wasm.v1.QueryContractInfoRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this QueryContractInfoRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a QueryContractInfoResponse. */
            interface IQueryContractInfoResponse {

                /** QueryContractInfoResponse address */
                address?: (string|null);

                /** QueryContractInfoResponse contract_info */
                contract_info?: (cosmwasm.wasm.v1.IContractInfo|null);
            }

            /** Represents a QueryContractInfoResponse. */
            class QueryContractInfoResponse implements IQueryContractInfoResponse {

                /**
                 * Constructs a new QueryContractInfoResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: cosmwasm.wasm.v1.IQueryContractInfoResponse);

                /** QueryContractInfoResponse address. */
                public address: string;

                /** QueryContractInfoResponse contract_info. */
                public contract_info?: (cosmwasm.wasm.v1.IContractInfo|null);

                /**
                 * Encodes the specified QueryContractInfoResponse message. Does not implicitly {@link cosmwasm.wasm.v1.QueryContractInfoResponse.verify|verify} messages.
                 * @param message QueryContractInfoResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: cosmwasm.wasm.v1.IQueryContractInfoResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified QueryContractInfoResponse message, length delimited. Does not implicitly {@link cosmwasm.wasm.v1.QueryContractInfoResponse.verify|verify} messages.
                 * @param message QueryContractInfoResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: cosmwasm.wasm.v1.IQueryContractInfoResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a QueryContractInfoResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns QueryContractInfoResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): cosmwasm.wasm.v1.QueryContractInfoResponse;

                /**
                 * Decodes a QueryContractInfoResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns QueryContractInfoResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): cosmwasm.wasm.v1.QueryContractInfoResponse;

                /**
                 * Verifies a QueryContractInfoResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a QueryContractInfoResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns QueryContractInfoResponse
                 */
                public static fromObject(object: { [k: string]: any }): cosmwasm.wasm.v1.QueryContractInfoResponse;

                /**
                 * Creates a plain object from a QueryContractInfoResponse message. Also converts values to other types if specified.
                 * @param message QueryContractInfoResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: cosmwasm.wasm.v1.QueryContractInfoResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this QueryContractInfoResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a QueryContractHistoryRequest. */
            interface IQueryContractHistoryRequest {

                /** QueryContractHistoryRequest address */
                address?: (string|null);

                /** QueryContractHistoryRequest pagination */
                pagination?: (cosmos.base.query.v1beta1.IPageRequest|null);
            }

            /** Represents a QueryContractHistoryRequest. */
            class QueryContractHistoryRequest implements IQueryContractHistoryRequest {

                /**
                 * Constructs a new QueryContractHistoryRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: cosmwasm.wasm.v1.IQueryContractHistoryRequest);

                /** QueryContractHistoryRequest address. */
                public address: string;

                /** QueryContractHistoryRequest pagination. */
                public pagination?: (cosmos.base.query.v1beta1.IPageRequest|null);

                /**
                 * Encodes the specified QueryContractHistoryRequest message. Does not implicitly {@link cosmwasm.wasm.v1.QueryContractHistoryRequest.verify|verify} messages.
                 * @param message QueryContractHistoryRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: cosmwasm.wasm.v1.IQueryContractHistoryRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified QueryContractHistoryRequest message, length delimited. Does not implicitly {@link cosmwasm.wasm.v1.QueryContractHistoryRequest.verify|verify} messages.
                 * @param message QueryContractHistoryRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: cosmwasm.wasm.v1.IQueryContractHistoryRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a QueryContractHistoryRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns QueryContractHistoryRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): cosmwasm.wasm.v1.QueryContractHistoryRequest;

                /**
                 * Decodes a QueryContractHistoryRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns QueryContractHistoryRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): cosmwasm.wasm.v1.QueryContractHistoryRequest;

                /**
                 * Verifies a QueryContractHistoryRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a QueryContractHistoryRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns QueryContractHistoryRequest
                 */
                public static fromObject(object: { [k: string]: any }): cosmwasm.wasm.v1.QueryContractHistoryRequest;

                /**
                 * Creates a plain object from a QueryContractHistoryRequest message. Also converts values to other types if specified.
                 * @param message QueryContractHistoryRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: cosmwasm.wasm.v1.QueryContractHistoryRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this QueryContractHistoryRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a QueryContractHistoryResponse. */
            interface IQueryContractHistoryResponse {

                /** QueryContractHistoryResponse entries */
                entries?: (cosmwasm.wasm.v1.IContractCodeHistoryEntry[]|null);

                /** QueryContractHistoryResponse pagination */
                pagination?: (cosmos.base.query.v1beta1.IPageResponse|null);
            }

            /** Represents a QueryContractHistoryResponse. */
            class QueryContractHistoryResponse implements IQueryContractHistoryResponse {

                /**
                 * Constructs a new QueryContractHistoryResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: cosmwasm.wasm.v1.IQueryContractHistoryResponse);

                /** QueryContractHistoryResponse entries. */
                public entries: cosmwasm.wasm.v1.IContractCodeHistoryEntry[];

                /** QueryContractHistoryResponse pagination. */
                public pagination?: (cosmos.base.query.v1beta1.IPageResponse|null);

                /**
                 * Encodes the specified QueryContractHistoryResponse message. Does not implicitly {@link cosmwasm.wasm.v1.QueryContractHistoryResponse.verify|verify} messages.
                 * @param message QueryContractHistoryResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: cosmwasm.wasm.v1.IQueryContractHistoryResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified QueryContractHistoryResponse message, length delimited. Does not implicitly {@link cosmwasm.wasm.v1.QueryContractHistoryResponse.verify|verify} messages.
                 * @param message QueryContractHistoryResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: cosmwasm.wasm.v1.IQueryContractHistoryResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a QueryContractHistoryResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns QueryContractHistoryResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): cosmwasm.wasm.v1.QueryContractHistoryResponse;

                /**
                 * Decodes a QueryContractHistoryResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns QueryContractHistoryResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): cosmwasm.wasm.v1.QueryContractHistoryResponse;

                /**
                 * Verifies a QueryContractHistoryResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a QueryContractHistoryResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns QueryContractHistoryResponse
                 */
                public static fromObject(object: { [k: string]: any }): cosmwasm.wasm.v1.QueryContractHistoryResponse;

                /**
                 * Creates a plain object from a QueryContractHistoryResponse message. Also converts values to other types if specified.
                 * @param message QueryContractHistoryResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: cosmwasm.wasm.v1.QueryContractHistoryResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this QueryContractHistoryResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a QueryContractsByCodeRequest. */
            interface IQueryContractsByCodeRequest {

                /** QueryContractsByCodeRequest code_id */
                code_id?: (Long|null);

                /** QueryContractsByCodeRequest pagination */
                pagination?: (cosmos.base.query.v1beta1.IPageRequest|null);
            }

            /** Represents a QueryContractsByCodeRequest. */
            class QueryContractsByCodeRequest implements IQueryContractsByCodeRequest {

                /**
                 * Constructs a new QueryContractsByCodeRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: cosmwasm.wasm.v1.IQueryContractsByCodeRequest);

                /** QueryContractsByCodeRequest code_id. */
                public code_id: Long;

                /** QueryContractsByCodeRequest pagination. */
                public pagination?: (cosmos.base.query.v1beta1.IPageRequest|null);

                /**
                 * Encodes the specified QueryContractsByCodeRequest message. Does not implicitly {@link cosmwasm.wasm.v1.QueryContractsByCodeRequest.verify|verify} messages.
                 * @param message QueryContractsByCodeRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: cosmwasm.wasm.v1.IQueryContractsByCodeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified QueryContractsByCodeRequest message, length delimited. Does not implicitly {@link cosmwasm.wasm.v1.QueryContractsByCodeRequest.verify|verify} messages.
                 * @param message QueryContractsByCodeRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: cosmwasm.wasm.v1.IQueryContractsByCodeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a QueryContractsByCodeRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns QueryContractsByCodeRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): cosmwasm.wasm.v1.QueryContractsByCodeRequest;

                /**
                 * Decodes a QueryContractsByCodeRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns QueryContractsByCodeRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): cosmwasm.wasm.v1.QueryContractsByCodeRequest;

                /**
                 * Verifies a QueryContractsByCodeRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a QueryContractsByCodeRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns QueryContractsByCodeRequest
                 */
                public static fromObject(object: { [k: string]: any }): cosmwasm.wasm.v1.QueryContractsByCodeRequest;

                /**
                 * Creates a plain object from a QueryContractsByCodeRequest message. Also converts values to other types if specified.
                 * @param message QueryContractsByCodeRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: cosmwasm.wasm.v1.QueryContractsByCodeRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this QueryContractsByCodeRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a QueryContractsByCodeResponse. */
            interface IQueryContractsByCodeResponse {

                /** QueryContractsByCodeResponse contracts */
                contracts?: (string[]|null);

                /** QueryContractsByCodeResponse pagination */
                pagination?: (cosmos.base.query.v1beta1.IPageResponse|null);
            }

            /** Represents a QueryContractsByCodeResponse. */
            class QueryContractsByCodeResponse implements IQueryContractsByCodeResponse {

                /**
                 * Constructs a new QueryContractsByCodeResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: cosmwasm.wasm.v1.IQueryContractsByCodeResponse);

                /** QueryContractsByCodeResponse contracts. */
                public contracts: string[];

                /** QueryContractsByCodeResponse pagination. */
                public pagination?: (cosmos.base.query.v1beta1.IPageResponse|null);

                /**
                 * Encodes the specified QueryContractsByCodeResponse message. Does not implicitly {@link cosmwasm.wasm.v1.QueryContractsByCodeResponse.verify|verify} messages.
                 * @param message QueryContractsByCodeResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: cosmwasm.wasm.v1.IQueryContractsByCodeResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified QueryContractsByCodeResponse message, length delimited. Does not implicitly {@link cosmwasm.wasm.v1.QueryContractsByCodeResponse.verify|verify} messages.
                 * @param message QueryContractsByCodeResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: cosmwasm.wasm.v1.IQueryContractsByCodeResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a QueryContractsByCodeResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns QueryContractsByCodeResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): cosmwasm.wasm.v1.QueryContractsByCodeResponse;

                /**
                 * Decodes a QueryContractsByCodeResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns QueryContractsByCodeResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): cosmwasm.wasm.v1.QueryContractsByCodeResponse;

                /**
                 * Verifies a QueryContractsByCodeResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a QueryContractsByCodeResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns QueryContractsByCodeResponse
                 */
                public static fromObject(object: { [k: string]: any }): cosmwasm.wasm.v1.QueryContractsByCodeResponse;

                /**
                 * Creates a plain object from a QueryContractsByCodeResponse message. Also converts values to other types if specified.
                 * @param message QueryContractsByCodeResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: cosmwasm.wasm.v1.QueryContractsByCodeResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this QueryContractsByCodeResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a QueryAllContractStateRequest. */
            interface IQueryAllContractStateRequest {

                /** QueryAllContractStateRequest address */
                address?: (string|null);

                /** QueryAllContractStateRequest pagination */
                pagination?: (cosmos.base.query.v1beta1.IPageRequest|null);
            }

            /** Represents a QueryAllContractStateRequest. */
            class QueryAllContractStateRequest implements IQueryAllContractStateRequest {

                /**
                 * Constructs a new QueryAllContractStateRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: cosmwasm.wasm.v1.IQueryAllContractStateRequest);

                /** QueryAllContractStateRequest address. */
                public address: string;

                /** QueryAllContractStateRequest pagination. */
                public pagination?: (cosmos.base.query.v1beta1.IPageRequest|null);

                /**
                 * Encodes the specified QueryAllContractStateRequest message. Does not implicitly {@link cosmwasm.wasm.v1.QueryAllContractStateRequest.verify|verify} messages.
                 * @param message QueryAllContractStateRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: cosmwasm.wasm.v1.IQueryAllContractStateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified QueryAllContractStateRequest message, length delimited. Does not implicitly {@link cosmwasm.wasm.v1.QueryAllContractStateRequest.verify|verify} messages.
                 * @param message QueryAllContractStateRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: cosmwasm.wasm.v1.IQueryAllContractStateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a QueryAllContractStateRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns QueryAllContractStateRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): cosmwasm.wasm.v1.QueryAllContractStateRequest;

                /**
                 * Decodes a QueryAllContractStateRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns QueryAllContractStateRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): cosmwasm.wasm.v1.QueryAllContractStateRequest;

                /**
                 * Verifies a QueryAllContractStateRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a QueryAllContractStateRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns QueryAllContractStateRequest
                 */
                public static fromObject(object: { [k: string]: any }): cosmwasm.wasm.v1.QueryAllContractStateRequest;

                /**
                 * Creates a plain object from a QueryAllContractStateRequest message. Also converts values to other types if specified.
                 * @param message QueryAllContractStateRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: cosmwasm.wasm.v1.QueryAllContractStateRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this QueryAllContractStateRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a QueryAllContractStateResponse. */
            interface IQueryAllContractStateResponse {

                /** QueryAllContractStateResponse models */
                models?: (cosmwasm.wasm.v1.IModel[]|null);

                /** QueryAllContractStateResponse pagination */
                pagination?: (cosmos.base.query.v1beta1.IPageResponse|null);
            }

            /** Represents a QueryAllContractStateResponse. */
            class QueryAllContractStateResponse implements IQueryAllContractStateResponse {

                /**
                 * Constructs a new QueryAllContractStateResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: cosmwasm.wasm.v1.IQueryAllContractStateResponse);

                /** QueryAllContractStateResponse models. */
                public models: cosmwasm.wasm.v1.IModel[];

                /** QueryAllContractStateResponse pagination. */
                public pagination?: (cosmos.base.query.v1beta1.IPageResponse|null);

                /**
                 * Encodes the specified QueryAllContractStateResponse message. Does not implicitly {@link cosmwasm.wasm.v1.QueryAllContractStateResponse.verify|verify} messages.
                 * @param message QueryAllContractStateResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: cosmwasm.wasm.v1.IQueryAllContractStateResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified QueryAllContractStateResponse message, length delimited. Does not implicitly {@link cosmwasm.wasm.v1.QueryAllContractStateResponse.verify|verify} messages.
                 * @param message QueryAllContractStateResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: cosmwasm.wasm.v1.IQueryAllContractStateResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a QueryAllContractStateResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns QueryAllContractStateResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): cosmwasm.wasm.v1.QueryAllContractStateResponse;

                /**
                 * Decodes a QueryAllContractStateResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns QueryAllContractStateResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): cosmwasm.wasm.v1.QueryAllContractStateResponse;

                /**
                 * Verifies a QueryAllContractStateResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a QueryAllContractStateResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns QueryAllContractStateResponse
                 */
                public static fromObject(object: { [k: string]: any }): cosmwasm.wasm.v1.QueryAllContractStateResponse;

                /**
                 * Creates a plain object from a QueryAllContractStateResponse message. Also converts values to other types if specified.
                 * @param message QueryAllContractStateResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: cosmwasm.wasm.v1.QueryAllContractStateResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this QueryAllContractStateResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a QueryRawContractStateRequest. */
            interface IQueryRawContractStateRequest {

                /** QueryRawContractStateRequest address */
                address?: (string|null);

                /** QueryRawContractStateRequest query_data */
                query_data?: (Uint8Array|null);
            }

            /** Represents a QueryRawContractStateRequest. */
            class QueryRawContractStateRequest implements IQueryRawContractStateRequest {

                /**
                 * Constructs a new QueryRawContractStateRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: cosmwasm.wasm.v1.IQueryRawContractStateRequest);

                /** QueryRawContractStateRequest address. */
                public address: string;

                /** QueryRawContractStateRequest query_data. */
                public query_data: Uint8Array;

                /**
                 * Encodes the specified QueryRawContractStateRequest message. Does not implicitly {@link cosmwasm.wasm.v1.QueryRawContractStateRequest.verify|verify} messages.
                 * @param message QueryRawContractStateRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: cosmwasm.wasm.v1.IQueryRawContractStateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified QueryRawContractStateRequest message, length delimited. Does not implicitly {@link cosmwasm.wasm.v1.QueryRawContractStateRequest.verify|verify} messages.
                 * @param message QueryRawContractStateRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: cosmwasm.wasm.v1.IQueryRawContractStateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a QueryRawContractStateRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns QueryRawContractStateRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): cosmwasm.wasm.v1.QueryRawContractStateRequest;

                /**
                 * Decodes a QueryRawContractStateRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns QueryRawContractStateRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): cosmwasm.wasm.v1.QueryRawContractStateRequest;

                /**
                 * Verifies a QueryRawContractStateRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a QueryRawContractStateRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns QueryRawContractStateRequest
                 */
                public static fromObject(object: { [k: string]: any }): cosmwasm.wasm.v1.QueryRawContractStateRequest;

                /**
                 * Creates a plain object from a QueryRawContractStateRequest message. Also converts values to other types if specified.
                 * @param message QueryRawContractStateRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: cosmwasm.wasm.v1.QueryRawContractStateRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this QueryRawContractStateRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a QueryRawContractStateResponse. */
            interface IQueryRawContractStateResponse {

                /** QueryRawContractStateResponse data */
                data?: (Uint8Array|null);
            }

            /** Represents a QueryRawContractStateResponse. */
            class QueryRawContractStateResponse implements IQueryRawContractStateResponse {

                /**
                 * Constructs a new QueryRawContractStateResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: cosmwasm.wasm.v1.IQueryRawContractStateResponse);

                /** QueryRawContractStateResponse data. */
                public data: Uint8Array;

                /**
                 * Encodes the specified QueryRawContractStateResponse message. Does not implicitly {@link cosmwasm.wasm.v1.QueryRawContractStateResponse.verify|verify} messages.
                 * @param message QueryRawContractStateResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: cosmwasm.wasm.v1.IQueryRawContractStateResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified QueryRawContractStateResponse message, length delimited. Does not implicitly {@link cosmwasm.wasm.v1.QueryRawContractStateResponse.verify|verify} messages.
                 * @param message QueryRawContractStateResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: cosmwasm.wasm.v1.IQueryRawContractStateResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a QueryRawContractStateResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns QueryRawContractStateResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): cosmwasm.wasm.v1.QueryRawContractStateResponse;

                /**
                 * Decodes a QueryRawContractStateResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns QueryRawContractStateResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): cosmwasm.wasm.v1.QueryRawContractStateResponse;

                /**
                 * Verifies a QueryRawContractStateResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a QueryRawContractStateResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns QueryRawContractStateResponse
                 */
                public static fromObject(object: { [k: string]: any }): cosmwasm.wasm.v1.QueryRawContractStateResponse;

                /**
                 * Creates a plain object from a QueryRawContractStateResponse message. Also converts values to other types if specified.
                 * @param message QueryRawContractStateResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: cosmwasm.wasm.v1.QueryRawContractStateResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this QueryRawContractStateResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a QuerySmartContractStateRequest. */
            interface IQuerySmartContractStateRequest {

                /** QuerySmartContractStateRequest address */
                address?: (string|null);

                /** QuerySmartContractStateRequest query_data */
                query_data?: (Uint8Array|null);
            }

            /** Represents a QuerySmartContractStateRequest. */
            class QuerySmartContractStateRequest implements IQuerySmartContractStateRequest {

                /**
                 * Constructs a new QuerySmartContractStateRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: cosmwasm.wasm.v1.IQuerySmartContractStateRequest);

                /** QuerySmartContractStateRequest address. */
                public address: string;

                /** QuerySmartContractStateRequest query_data. */
                public query_data: Uint8Array;

                /**
                 * Encodes the specified QuerySmartContractStateRequest message. Does not implicitly {@link cosmwasm.wasm.v1.QuerySmartContractStateRequest.verify|verify} messages.
                 * @param message QuerySmartContractStateRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: cosmwasm.wasm.v1.IQuerySmartContractStateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified QuerySmartContractStateRequest message, length delimited. Does not implicitly {@link cosmwasm.wasm.v1.QuerySmartContractStateRequest.verify|verify} messages.
                 * @param message QuerySmartContractStateRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: cosmwasm.wasm.v1.IQuerySmartContractStateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a QuerySmartContractStateRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns QuerySmartContractStateRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): cosmwasm.wasm.v1.QuerySmartContractStateRequest;

                /**
                 * Decodes a QuerySmartContractStateRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns QuerySmartContractStateRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): cosmwasm.wasm.v1.QuerySmartContractStateRequest;

                /**
                 * Verifies a QuerySmartContractStateRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a QuerySmartContractStateRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns QuerySmartContractStateRequest
                 */
                public static fromObject(object: { [k: string]: any }): cosmwasm.wasm.v1.QuerySmartContractStateRequest;

                /**
                 * Creates a plain object from a QuerySmartContractStateRequest message. Also converts values to other types if specified.
                 * @param message QuerySmartContractStateRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: cosmwasm.wasm.v1.QuerySmartContractStateRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this QuerySmartContractStateRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a QuerySmartContractStateResponse. */
            interface IQuerySmartContractStateResponse {

                /** QuerySmartContractStateResponse data */
                data?: (Uint8Array|null);
            }

            /** Represents a QuerySmartContractStateResponse. */
            class QuerySmartContractStateResponse implements IQuerySmartContractStateResponse {

                /**
                 * Constructs a new QuerySmartContractStateResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: cosmwasm.wasm.v1.IQuerySmartContractStateResponse);

                /** QuerySmartContractStateResponse data. */
                public data: Uint8Array;

                /**
                 * Encodes the specified QuerySmartContractStateResponse message. Does not implicitly {@link cosmwasm.wasm.v1.QuerySmartContractStateResponse.verify|verify} messages.
                 * @param message QuerySmartContractStateResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: cosmwasm.wasm.v1.IQuerySmartContractStateResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified QuerySmartContractStateResponse message, length delimited. Does not implicitly {@link cosmwasm.wasm.v1.QuerySmartContractStateResponse.verify|verify} messages.
                 * @param message QuerySmartContractStateResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: cosmwasm.wasm.v1.IQuerySmartContractStateResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a QuerySmartContractStateResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns QuerySmartContractStateResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): cosmwasm.wasm.v1.QuerySmartContractStateResponse;

                /**
                 * Decodes a QuerySmartContractStateResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns QuerySmartContractStateResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): cosmwasm.wasm.v1.QuerySmartContractStateResponse;

                /**
                 * Verifies a QuerySmartContractStateResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a QuerySmartContractStateResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns QuerySmartContractStateResponse
                 */
                public static fromObject(object: { [k: string]: any }): cosmwasm.wasm.v1.QuerySmartContractStateResponse;

                /**
                 * Creates a plain object from a QuerySmartContractStateResponse message. Also converts values to other types if specified.
                 * @param message QuerySmartContractStateResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: cosmwasm.wasm.v1.QuerySmartContractStateResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this QuerySmartContractStateResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a QueryCodeRequest. */
            interface IQueryCodeRequest {

                /** QueryCodeRequest code_id */
                code_id?: (Long|null);
            }

            /** Represents a QueryCodeRequest. */
            class QueryCodeRequest implements IQueryCodeRequest {

                /**
                 * Constructs a new QueryCodeRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: cosmwasm.wasm.v1.IQueryCodeRequest);

                /** QueryCodeRequest code_id. */
                public code_id: Long;

                /**
                 * Encodes the specified QueryCodeRequest message. Does not implicitly {@link cosmwasm.wasm.v1.QueryCodeRequest.verify|verify} messages.
                 * @param message QueryCodeRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: cosmwasm.wasm.v1.IQueryCodeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified QueryCodeRequest message, length delimited. Does not implicitly {@link cosmwasm.wasm.v1.QueryCodeRequest.verify|verify} messages.
                 * @param message QueryCodeRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: cosmwasm.wasm.v1.IQueryCodeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a QueryCodeRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns QueryCodeRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): cosmwasm.wasm.v1.QueryCodeRequest;

                /**
                 * Decodes a QueryCodeRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns QueryCodeRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): cosmwasm.wasm.v1.QueryCodeRequest;

                /**
                 * Verifies a QueryCodeRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a QueryCodeRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns QueryCodeRequest
                 */
                public static fromObject(object: { [k: string]: any }): cosmwasm.wasm.v1.QueryCodeRequest;

                /**
                 * Creates a plain object from a QueryCodeRequest message. Also converts values to other types if specified.
                 * @param message QueryCodeRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: cosmwasm.wasm.v1.QueryCodeRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this QueryCodeRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a CodeInfoResponse. */
            interface ICodeInfoResponse {

                /** CodeInfoResponse code_id */
                code_id?: (Long|null);

                /** CodeInfoResponse creator */
                creator?: (string|null);

                /** CodeInfoResponse data_hash */
                data_hash?: (Uint8Array|null);
            }

            /** Represents a CodeInfoResponse. */
            class CodeInfoResponse implements ICodeInfoResponse {

                /**
                 * Constructs a new CodeInfoResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: cosmwasm.wasm.v1.ICodeInfoResponse);

                /** CodeInfoResponse code_id. */
                public code_id: Long;

                /** CodeInfoResponse creator. */
                public creator: string;

                /** CodeInfoResponse data_hash. */
                public data_hash: Uint8Array;

                /**
                 * Encodes the specified CodeInfoResponse message. Does not implicitly {@link cosmwasm.wasm.v1.CodeInfoResponse.verify|verify} messages.
                 * @param message CodeInfoResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: cosmwasm.wasm.v1.ICodeInfoResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified CodeInfoResponse message, length delimited. Does not implicitly {@link cosmwasm.wasm.v1.CodeInfoResponse.verify|verify} messages.
                 * @param message CodeInfoResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: cosmwasm.wasm.v1.ICodeInfoResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a CodeInfoResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns CodeInfoResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): cosmwasm.wasm.v1.CodeInfoResponse;

                /**
                 * Decodes a CodeInfoResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns CodeInfoResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): cosmwasm.wasm.v1.CodeInfoResponse;

                /**
                 * Verifies a CodeInfoResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a CodeInfoResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns CodeInfoResponse
                 */
                public static fromObject(object: { [k: string]: any }): cosmwasm.wasm.v1.CodeInfoResponse;

                /**
                 * Creates a plain object from a CodeInfoResponse message. Also converts values to other types if specified.
                 * @param message CodeInfoResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: cosmwasm.wasm.v1.CodeInfoResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this CodeInfoResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a QueryCodeResponse. */
            interface IQueryCodeResponse {

                /** QueryCodeResponse code_info */
                code_info?: (cosmwasm.wasm.v1.ICodeInfoResponse|null);

                /** QueryCodeResponse data */
                data?: (Uint8Array|null);
            }

            /** Represents a QueryCodeResponse. */
            class QueryCodeResponse implements IQueryCodeResponse {

                /**
                 * Constructs a new QueryCodeResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: cosmwasm.wasm.v1.IQueryCodeResponse);

                /** QueryCodeResponse code_info. */
                public code_info?: (cosmwasm.wasm.v1.ICodeInfoResponse|null);

                /** QueryCodeResponse data. */
                public data: Uint8Array;

                /**
                 * Encodes the specified QueryCodeResponse message. Does not implicitly {@link cosmwasm.wasm.v1.QueryCodeResponse.verify|verify} messages.
                 * @param message QueryCodeResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: cosmwasm.wasm.v1.IQueryCodeResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified QueryCodeResponse message, length delimited. Does not implicitly {@link cosmwasm.wasm.v1.QueryCodeResponse.verify|verify} messages.
                 * @param message QueryCodeResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: cosmwasm.wasm.v1.IQueryCodeResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a QueryCodeResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns QueryCodeResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): cosmwasm.wasm.v1.QueryCodeResponse;

                /**
                 * Decodes a QueryCodeResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns QueryCodeResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): cosmwasm.wasm.v1.QueryCodeResponse;

                /**
                 * Verifies a QueryCodeResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a QueryCodeResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns QueryCodeResponse
                 */
                public static fromObject(object: { [k: string]: any }): cosmwasm.wasm.v1.QueryCodeResponse;

                /**
                 * Creates a plain object from a QueryCodeResponse message. Also converts values to other types if specified.
                 * @param message QueryCodeResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: cosmwasm.wasm.v1.QueryCodeResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this QueryCodeResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a QueryCodesRequest. */
            interface IQueryCodesRequest {

                /** QueryCodesRequest pagination */
                pagination?: (cosmos.base.query.v1beta1.IPageRequest|null);
            }

            /** Represents a QueryCodesRequest. */
            class QueryCodesRequest implements IQueryCodesRequest {

                /**
                 * Constructs a new QueryCodesRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: cosmwasm.wasm.v1.IQueryCodesRequest);

                /** QueryCodesRequest pagination. */
                public pagination?: (cosmos.base.query.v1beta1.IPageRequest|null);

                /**
                 * Encodes the specified QueryCodesRequest message. Does not implicitly {@link cosmwasm.wasm.v1.QueryCodesRequest.verify|verify} messages.
                 * @param message QueryCodesRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: cosmwasm.wasm.v1.IQueryCodesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified QueryCodesRequest message, length delimited. Does not implicitly {@link cosmwasm.wasm.v1.QueryCodesRequest.verify|verify} messages.
                 * @param message QueryCodesRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: cosmwasm.wasm.v1.IQueryCodesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a QueryCodesRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns QueryCodesRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): cosmwasm.wasm.v1.QueryCodesRequest;

                /**
                 * Decodes a QueryCodesRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns QueryCodesRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): cosmwasm.wasm.v1.QueryCodesRequest;

                /**
                 * Verifies a QueryCodesRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a QueryCodesRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns QueryCodesRequest
                 */
                public static fromObject(object: { [k: string]: any }): cosmwasm.wasm.v1.QueryCodesRequest;

                /**
                 * Creates a plain object from a QueryCodesRequest message. Also converts values to other types if specified.
                 * @param message QueryCodesRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: cosmwasm.wasm.v1.QueryCodesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this QueryCodesRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a QueryCodesResponse. */
            interface IQueryCodesResponse {

                /** QueryCodesResponse code_infos */
                code_infos?: (cosmwasm.wasm.v1.ICodeInfoResponse[]|null);

                /** QueryCodesResponse pagination */
                pagination?: (cosmos.base.query.v1beta1.IPageResponse|null);
            }

            /** Represents a QueryCodesResponse. */
            class QueryCodesResponse implements IQueryCodesResponse {

                /**
                 * Constructs a new QueryCodesResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: cosmwasm.wasm.v1.IQueryCodesResponse);

                /** QueryCodesResponse code_infos. */
                public code_infos: cosmwasm.wasm.v1.ICodeInfoResponse[];

                /** QueryCodesResponse pagination. */
                public pagination?: (cosmos.base.query.v1beta1.IPageResponse|null);

                /**
                 * Encodes the specified QueryCodesResponse message. Does not implicitly {@link cosmwasm.wasm.v1.QueryCodesResponse.verify|verify} messages.
                 * @param message QueryCodesResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: cosmwasm.wasm.v1.IQueryCodesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified QueryCodesResponse message, length delimited. Does not implicitly {@link cosmwasm.wasm.v1.QueryCodesResponse.verify|verify} messages.
                 * @param message QueryCodesResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: cosmwasm.wasm.v1.IQueryCodesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a QueryCodesResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns QueryCodesResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): cosmwasm.wasm.v1.QueryCodesResponse;

                /**
                 * Decodes a QueryCodesResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns QueryCodesResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): cosmwasm.wasm.v1.QueryCodesResponse;

                /**
                 * Verifies a QueryCodesResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a QueryCodesResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns QueryCodesResponse
                 */
                public static fromObject(object: { [k: string]: any }): cosmwasm.wasm.v1.QueryCodesResponse;

                /**
                 * Creates a plain object from a QueryCodesResponse message. Also converts values to other types if specified.
                 * @param message QueryCodesResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: cosmwasm.wasm.v1.QueryCodesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this QueryCodesResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a QueryPinnedCodesRequest. */
            interface IQueryPinnedCodesRequest {

                /** QueryPinnedCodesRequest pagination */
                pagination?: (cosmos.base.query.v1beta1.IPageRequest|null);
            }

            /** Represents a QueryPinnedCodesRequest. */
            class QueryPinnedCodesRequest implements IQueryPinnedCodesRequest {

                /**
                 * Constructs a new QueryPinnedCodesRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: cosmwasm.wasm.v1.IQueryPinnedCodesRequest);

                /** QueryPinnedCodesRequest pagination. */
                public pagination?: (cosmos.base.query.v1beta1.IPageRequest|null);

                /**
                 * Encodes the specified QueryPinnedCodesRequest message. Does not implicitly {@link cosmwasm.wasm.v1.QueryPinnedCodesRequest.verify|verify} messages.
                 * @param message QueryPinnedCodesRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: cosmwasm.wasm.v1.IQueryPinnedCodesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified QueryPinnedCodesRequest message, length delimited. Does not implicitly {@link cosmwasm.wasm.v1.QueryPinnedCodesRequest.verify|verify} messages.
                 * @param message QueryPinnedCodesRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: cosmwasm.wasm.v1.IQueryPinnedCodesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a QueryPinnedCodesRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns QueryPinnedCodesRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): cosmwasm.wasm.v1.QueryPinnedCodesRequest;

                /**
                 * Decodes a QueryPinnedCodesRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns QueryPinnedCodesRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): cosmwasm.wasm.v1.QueryPinnedCodesRequest;

                /**
                 * Verifies a QueryPinnedCodesRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a QueryPinnedCodesRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns QueryPinnedCodesRequest
                 */
                public static fromObject(object: { [k: string]: any }): cosmwasm.wasm.v1.QueryPinnedCodesRequest;

                /**
                 * Creates a plain object from a QueryPinnedCodesRequest message. Also converts values to other types if specified.
                 * @param message QueryPinnedCodesRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: cosmwasm.wasm.v1.QueryPinnedCodesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this QueryPinnedCodesRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a QueryPinnedCodesResponse. */
            interface IQueryPinnedCodesResponse {

                /** QueryPinnedCodesResponse code_ids */
                code_ids?: (Long[]|null);

                /** QueryPinnedCodesResponse pagination */
                pagination?: (cosmos.base.query.v1beta1.IPageResponse|null);
            }

            /** Represents a QueryPinnedCodesResponse. */
            class QueryPinnedCodesResponse implements IQueryPinnedCodesResponse {

                /**
                 * Constructs a new QueryPinnedCodesResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: cosmwasm.wasm.v1.IQueryPinnedCodesResponse);

                /** QueryPinnedCodesResponse code_ids. */
                public code_ids: Long[];

                /** QueryPinnedCodesResponse pagination. */
                public pagination?: (cosmos.base.query.v1beta1.IPageResponse|null);

                /**
                 * Encodes the specified QueryPinnedCodesResponse message. Does not implicitly {@link cosmwasm.wasm.v1.QueryPinnedCodesResponse.verify|verify} messages.
                 * @param message QueryPinnedCodesResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: cosmwasm.wasm.v1.IQueryPinnedCodesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified QueryPinnedCodesResponse message, length delimited. Does not implicitly {@link cosmwasm.wasm.v1.QueryPinnedCodesResponse.verify|verify} messages.
                 * @param message QueryPinnedCodesResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: cosmwasm.wasm.v1.IQueryPinnedCodesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a QueryPinnedCodesResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns QueryPinnedCodesResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): cosmwasm.wasm.v1.QueryPinnedCodesResponse;

                /**
                 * Decodes a QueryPinnedCodesResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns QueryPinnedCodesResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): cosmwasm.wasm.v1.QueryPinnedCodesResponse;

                /**
                 * Verifies a QueryPinnedCodesResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a QueryPinnedCodesResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns QueryPinnedCodesResponse
                 */
                public static fromObject(object: { [k: string]: any }): cosmwasm.wasm.v1.QueryPinnedCodesResponse;

                /**
                 * Creates a plain object from a QueryPinnedCodesResponse message. Also converts values to other types if specified.
                 * @param message QueryPinnedCodesResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: cosmwasm.wasm.v1.QueryPinnedCodesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this QueryPinnedCodesResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** AccessType enum. */
            enum AccessType {
                ACCESS_TYPE_UNSPECIFIED = 0,
                ACCESS_TYPE_NOBODY = 1,
                ACCESS_TYPE_ONLY_ADDRESS = 2,
                ACCESS_TYPE_EVERYBODY = 3
            }

            /** Properties of an AccessTypeParam. */
            interface IAccessTypeParam {

                /** AccessTypeParam value */
                value?: (cosmwasm.wasm.v1.AccessType|null);
            }

            /** Represents an AccessTypeParam. */
            class AccessTypeParam implements IAccessTypeParam {

                /**
                 * Constructs a new AccessTypeParam.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: cosmwasm.wasm.v1.IAccessTypeParam);

                /** AccessTypeParam value. */
                public value: cosmwasm.wasm.v1.AccessType;

                /**
                 * Encodes the specified AccessTypeParam message. Does not implicitly {@link cosmwasm.wasm.v1.AccessTypeParam.verify|verify} messages.
                 * @param message AccessTypeParam message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: cosmwasm.wasm.v1.IAccessTypeParam, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified AccessTypeParam message, length delimited. Does not implicitly {@link cosmwasm.wasm.v1.AccessTypeParam.verify|verify} messages.
                 * @param message AccessTypeParam message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: cosmwasm.wasm.v1.IAccessTypeParam, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an AccessTypeParam message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns AccessTypeParam
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): cosmwasm.wasm.v1.AccessTypeParam;

                /**
                 * Decodes an AccessTypeParam message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns AccessTypeParam
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): cosmwasm.wasm.v1.AccessTypeParam;

                /**
                 * Verifies an AccessTypeParam message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an AccessTypeParam message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns AccessTypeParam
                 */
                public static fromObject(object: { [k: string]: any }): cosmwasm.wasm.v1.AccessTypeParam;

                /**
                 * Creates a plain object from an AccessTypeParam message. Also converts values to other types if specified.
                 * @param message AccessTypeParam
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: cosmwasm.wasm.v1.AccessTypeParam, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this AccessTypeParam to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of an AccessConfig. */
            interface IAccessConfig {

                /** AccessConfig permission */
                permission?: (cosmwasm.wasm.v1.AccessType|null);

                /** AccessConfig address */
                address?: (string|null);
            }

            /** Represents an AccessConfig. */
            class AccessConfig implements IAccessConfig {

                /**
                 * Constructs a new AccessConfig.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: cosmwasm.wasm.v1.IAccessConfig);

                /** AccessConfig permission. */
                public permission: cosmwasm.wasm.v1.AccessType;

                /** AccessConfig address. */
                public address: string;

                /**
                 * Encodes the specified AccessConfig message. Does not implicitly {@link cosmwasm.wasm.v1.AccessConfig.verify|verify} messages.
                 * @param message AccessConfig message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: cosmwasm.wasm.v1.IAccessConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified AccessConfig message, length delimited. Does not implicitly {@link cosmwasm.wasm.v1.AccessConfig.verify|verify} messages.
                 * @param message AccessConfig message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: cosmwasm.wasm.v1.IAccessConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an AccessConfig message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns AccessConfig
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): cosmwasm.wasm.v1.AccessConfig;

                /**
                 * Decodes an AccessConfig message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns AccessConfig
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): cosmwasm.wasm.v1.AccessConfig;

                /**
                 * Verifies an AccessConfig message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an AccessConfig message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns AccessConfig
                 */
                public static fromObject(object: { [k: string]: any }): cosmwasm.wasm.v1.AccessConfig;

                /**
                 * Creates a plain object from an AccessConfig message. Also converts values to other types if specified.
                 * @param message AccessConfig
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: cosmwasm.wasm.v1.AccessConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this AccessConfig to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Params. */
            interface IParams {

                /** Params code_upload_access */
                code_upload_access?: (cosmwasm.wasm.v1.IAccessConfig|null);

                /** Params instantiate_default_permission */
                instantiate_default_permission?: (cosmwasm.wasm.v1.AccessType|null);

                /** Params max_wasm_code_size */
                max_wasm_code_size?: (Long|null);
            }

            /** Represents a Params. */
            class Params implements IParams {

                /**
                 * Constructs a new Params.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: cosmwasm.wasm.v1.IParams);

                /** Params code_upload_access. */
                public code_upload_access?: (cosmwasm.wasm.v1.IAccessConfig|null);

                /** Params instantiate_default_permission. */
                public instantiate_default_permission: cosmwasm.wasm.v1.AccessType;

                /** Params max_wasm_code_size. */
                public max_wasm_code_size: Long;

                /**
                 * Encodes the specified Params message. Does not implicitly {@link cosmwasm.wasm.v1.Params.verify|verify} messages.
                 * @param message Params message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: cosmwasm.wasm.v1.IParams, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Params message, length delimited. Does not implicitly {@link cosmwasm.wasm.v1.Params.verify|verify} messages.
                 * @param message Params message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: cosmwasm.wasm.v1.IParams, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Params message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Params
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): cosmwasm.wasm.v1.Params;

                /**
                 * Decodes a Params message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Params
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): cosmwasm.wasm.v1.Params;

                /**
                 * Verifies a Params message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Params message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Params
                 */
                public static fromObject(object: { [k: string]: any }): cosmwasm.wasm.v1.Params;

                /**
                 * Creates a plain object from a Params message. Also converts values to other types if specified.
                 * @param message Params
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: cosmwasm.wasm.v1.Params, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Params to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a CodeInfo. */
            interface ICodeInfo {

                /** CodeInfo code_hash */
                code_hash?: (Uint8Array|null);

                /** CodeInfo creator */
                creator?: (string|null);

                /** CodeInfo instantiate_config */
                instantiate_config?: (cosmwasm.wasm.v1.IAccessConfig|null);
            }

            /** Represents a CodeInfo. */
            class CodeInfo implements ICodeInfo {

                /**
                 * Constructs a new CodeInfo.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: cosmwasm.wasm.v1.ICodeInfo);

                /** CodeInfo code_hash. */
                public code_hash: Uint8Array;

                /** CodeInfo creator. */
                public creator: string;

                /** CodeInfo instantiate_config. */
                public instantiate_config?: (cosmwasm.wasm.v1.IAccessConfig|null);

                /**
                 * Encodes the specified CodeInfo message. Does not implicitly {@link cosmwasm.wasm.v1.CodeInfo.verify|verify} messages.
                 * @param message CodeInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: cosmwasm.wasm.v1.ICodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified CodeInfo message, length delimited. Does not implicitly {@link cosmwasm.wasm.v1.CodeInfo.verify|verify} messages.
                 * @param message CodeInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: cosmwasm.wasm.v1.ICodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a CodeInfo message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns CodeInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): cosmwasm.wasm.v1.CodeInfo;

                /**
                 * Decodes a CodeInfo message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns CodeInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): cosmwasm.wasm.v1.CodeInfo;

                /**
                 * Verifies a CodeInfo message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a CodeInfo message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns CodeInfo
                 */
                public static fromObject(object: { [k: string]: any }): cosmwasm.wasm.v1.CodeInfo;

                /**
                 * Creates a plain object from a CodeInfo message. Also converts values to other types if specified.
                 * @param message CodeInfo
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: cosmwasm.wasm.v1.CodeInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this CodeInfo to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a ContractInfo. */
            interface IContractInfo {

                /** ContractInfo code_id */
                code_id?: (Long|null);

                /** ContractInfo creator */
                creator?: (string|null);

                /** ContractInfo admin */
                admin?: (string|null);

                /** ContractInfo label */
                label?: (string|null);

                /** ContractInfo created */
                created?: (cosmwasm.wasm.v1.IAbsoluteTxPosition|null);

                /** ContractInfo ibc_port_id */
                ibc_port_id?: (string|null);

                /** ContractInfo extension */
                extension?: (google.protobuf.IAny|null);
            }

            /** Represents a ContractInfo. */
            class ContractInfo implements IContractInfo {

                /**
                 * Constructs a new ContractInfo.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: cosmwasm.wasm.v1.IContractInfo);

                /** ContractInfo code_id. */
                public code_id: Long;

                /** ContractInfo creator. */
                public creator: string;

                /** ContractInfo admin. */
                public admin: string;

                /** ContractInfo label. */
                public label: string;

                /** ContractInfo created. */
                public created?: (cosmwasm.wasm.v1.IAbsoluteTxPosition|null);

                /** ContractInfo ibc_port_id. */
                public ibc_port_id: string;

                /** ContractInfo extension. */
                public extension?: (google.protobuf.IAny|null);

                /**
                 * Encodes the specified ContractInfo message. Does not implicitly {@link cosmwasm.wasm.v1.ContractInfo.verify|verify} messages.
                 * @param message ContractInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: cosmwasm.wasm.v1.IContractInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ContractInfo message, length delimited. Does not implicitly {@link cosmwasm.wasm.v1.ContractInfo.verify|verify} messages.
                 * @param message ContractInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: cosmwasm.wasm.v1.IContractInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ContractInfo message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ContractInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): cosmwasm.wasm.v1.ContractInfo;

                /**
                 * Decodes a ContractInfo message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ContractInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): cosmwasm.wasm.v1.ContractInfo;

                /**
                 * Verifies a ContractInfo message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ContractInfo message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ContractInfo
                 */
                public static fromObject(object: { [k: string]: any }): cosmwasm.wasm.v1.ContractInfo;

                /**
                 * Creates a plain object from a ContractInfo message. Also converts values to other types if specified.
                 * @param message ContractInfo
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: cosmwasm.wasm.v1.ContractInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ContractInfo to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** ContractCodeHistoryOperationType enum. */
            enum ContractCodeHistoryOperationType {
                CONTRACT_CODE_HISTORY_OPERATION_TYPE_UNSPECIFIED = 0,
                CONTRACT_CODE_HISTORY_OPERATION_TYPE_INIT = 1,
                CONTRACT_CODE_HISTORY_OPERATION_TYPE_MIGRATE = 2,
                CONTRACT_CODE_HISTORY_OPERATION_TYPE_GENESIS = 3
            }

            /** Properties of a ContractCodeHistoryEntry. */
            interface IContractCodeHistoryEntry {

                /** ContractCodeHistoryEntry operation */
                operation?: (cosmwasm.wasm.v1.ContractCodeHistoryOperationType|null);

                /** ContractCodeHistoryEntry code_id */
                code_id?: (Long|null);

                /** ContractCodeHistoryEntry updated */
                updated?: (cosmwasm.wasm.v1.IAbsoluteTxPosition|null);

                /** ContractCodeHistoryEntry msg */
                msg?: (Uint8Array|null);
            }

            /** Represents a ContractCodeHistoryEntry. */
            class ContractCodeHistoryEntry implements IContractCodeHistoryEntry {

                /**
                 * Constructs a new ContractCodeHistoryEntry.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: cosmwasm.wasm.v1.IContractCodeHistoryEntry);

                /** ContractCodeHistoryEntry operation. */
                public operation: cosmwasm.wasm.v1.ContractCodeHistoryOperationType;

                /** ContractCodeHistoryEntry code_id. */
                public code_id: Long;

                /** ContractCodeHistoryEntry updated. */
                public updated?: (cosmwasm.wasm.v1.IAbsoluteTxPosition|null);

                /** ContractCodeHistoryEntry msg. */
                public msg: Uint8Array;

                /**
                 * Encodes the specified ContractCodeHistoryEntry message. Does not implicitly {@link cosmwasm.wasm.v1.ContractCodeHistoryEntry.verify|verify} messages.
                 * @param message ContractCodeHistoryEntry message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: cosmwasm.wasm.v1.IContractCodeHistoryEntry, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ContractCodeHistoryEntry message, length delimited. Does not implicitly {@link cosmwasm.wasm.v1.ContractCodeHistoryEntry.verify|verify} messages.
                 * @param message ContractCodeHistoryEntry message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: cosmwasm.wasm.v1.IContractCodeHistoryEntry, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ContractCodeHistoryEntry message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ContractCodeHistoryEntry
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): cosmwasm.wasm.v1.ContractCodeHistoryEntry;

                /**
                 * Decodes a ContractCodeHistoryEntry message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ContractCodeHistoryEntry
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): cosmwasm.wasm.v1.ContractCodeHistoryEntry;

                /**
                 * Verifies a ContractCodeHistoryEntry message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ContractCodeHistoryEntry message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ContractCodeHistoryEntry
                 */
                public static fromObject(object: { [k: string]: any }): cosmwasm.wasm.v1.ContractCodeHistoryEntry;

                /**
                 * Creates a plain object from a ContractCodeHistoryEntry message. Also converts values to other types if specified.
                 * @param message ContractCodeHistoryEntry
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: cosmwasm.wasm.v1.ContractCodeHistoryEntry, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ContractCodeHistoryEntry to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of an AbsoluteTxPosition. */
            interface IAbsoluteTxPosition {

                /** AbsoluteTxPosition block_height */
                block_height?: (Long|null);

                /** AbsoluteTxPosition tx_index */
                tx_index?: (Long|null);
            }

            /** Represents an AbsoluteTxPosition. */
            class AbsoluteTxPosition implements IAbsoluteTxPosition {

                /**
                 * Constructs a new AbsoluteTxPosition.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: cosmwasm.wasm.v1.IAbsoluteTxPosition);

                /** AbsoluteTxPosition block_height. */
                public block_height: Long;

                /** AbsoluteTxPosition tx_index. */
                public tx_index: Long;

                /**
                 * Encodes the specified AbsoluteTxPosition message. Does not implicitly {@link cosmwasm.wasm.v1.AbsoluteTxPosition.verify|verify} messages.
                 * @param message AbsoluteTxPosition message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: cosmwasm.wasm.v1.IAbsoluteTxPosition, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified AbsoluteTxPosition message, length delimited. Does not implicitly {@link cosmwasm.wasm.v1.AbsoluteTxPosition.verify|verify} messages.
                 * @param message AbsoluteTxPosition message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: cosmwasm.wasm.v1.IAbsoluteTxPosition, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an AbsoluteTxPosition message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns AbsoluteTxPosition
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): cosmwasm.wasm.v1.AbsoluteTxPosition;

                /**
                 * Decodes an AbsoluteTxPosition message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns AbsoluteTxPosition
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): cosmwasm.wasm.v1.AbsoluteTxPosition;

                /**
                 * Verifies an AbsoluteTxPosition message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an AbsoluteTxPosition message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns AbsoluteTxPosition
                 */
                public static fromObject(object: { [k: string]: any }): cosmwasm.wasm.v1.AbsoluteTxPosition;

                /**
                 * Creates a plain object from an AbsoluteTxPosition message. Also converts values to other types if specified.
                 * @param message AbsoluteTxPosition
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: cosmwasm.wasm.v1.AbsoluteTxPosition, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this AbsoluteTxPosition to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Model. */
            interface IModel {

                /** Model key */
                key?: (Uint8Array|null);

                /** Model value */
                value?: (Uint8Array|null);
            }

            /** Represents a Model. */
            class Model implements IModel {

                /**
                 * Constructs a new Model.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: cosmwasm.wasm.v1.IModel);

                /** Model key. */
                public key: Uint8Array;

                /** Model value. */
                public value: Uint8Array;

                /**
                 * Encodes the specified Model message. Does not implicitly {@link cosmwasm.wasm.v1.Model.verify|verify} messages.
                 * @param message Model message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: cosmwasm.wasm.v1.IModel, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Model message, length delimited. Does not implicitly {@link cosmwasm.wasm.v1.Model.verify|verify} messages.
                 * @param message Model message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: cosmwasm.wasm.v1.IModel, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Model message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Model
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): cosmwasm.wasm.v1.Model;

                /**
                 * Decodes a Model message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Model
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): cosmwasm.wasm.v1.Model;

                /**
                 * Verifies a Model message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Model message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Model
                 */
                public static fromObject(object: { [k: string]: any }): cosmwasm.wasm.v1.Model;

                /**
                 * Creates a plain object from a Model message. Also converts values to other types if specified.
                 * @param message Model
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: cosmwasm.wasm.v1.Model, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Model to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Represents a Msg */
            class Msg extends $protobuf.rpc.Service {

                /**
                 * Constructs a new Msg service.
                 * @param rpcImpl RPC implementation
                 * @param [requestDelimited=false] Whether requests are length-delimited
                 * @param [responseDelimited=false] Whether responses are length-delimited
                 */
                constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                /**
                 * Calls StoreCode.
                 * @param request MsgStoreCode message or plain object
                 * @param callback Node-style callback called with the error, if any, and MsgStoreCodeResponse
                 */
                public storeCode(request: cosmwasm.wasm.v1.IMsgStoreCode, callback: cosmwasm.wasm.v1.Msg.StoreCodeCallback): void;

                /**
                 * Calls StoreCode.
                 * @param request MsgStoreCode message or plain object
                 * @returns Promise
                 */
                public storeCode(request: cosmwasm.wasm.v1.IMsgStoreCode): Promise<cosmwasm.wasm.v1.MsgStoreCodeResponse>;

                /**
                 * Calls InstantiateContract.
                 * @param request MsgInstantiateContract message or plain object
                 * @param callback Node-style callback called with the error, if any, and MsgInstantiateContractResponse
                 */
                public instantiateContract(request: cosmwasm.wasm.v1.IMsgInstantiateContract, callback: cosmwasm.wasm.v1.Msg.InstantiateContractCallback): void;

                /**
                 * Calls InstantiateContract.
                 * @param request MsgInstantiateContract message or plain object
                 * @returns Promise
                 */
                public instantiateContract(request: cosmwasm.wasm.v1.IMsgInstantiateContract): Promise<cosmwasm.wasm.v1.MsgInstantiateContractResponse>;

                /**
                 * Calls ExecuteContract.
                 * @param request MsgExecuteContract message or plain object
                 * @param callback Node-style callback called with the error, if any, and MsgExecuteContractResponse
                 */
                public executeContract(request: cosmwasm.wasm.v1.IMsgExecuteContract, callback: cosmwasm.wasm.v1.Msg.ExecuteContractCallback): void;

                /**
                 * Calls ExecuteContract.
                 * @param request MsgExecuteContract message or plain object
                 * @returns Promise
                 */
                public executeContract(request: cosmwasm.wasm.v1.IMsgExecuteContract): Promise<cosmwasm.wasm.v1.MsgExecuteContractResponse>;

                /**
                 * Calls MigrateContract.
                 * @param request MsgMigrateContract message or plain object
                 * @param callback Node-style callback called with the error, if any, and MsgMigrateContractResponse
                 */
                public migrateContract(request: cosmwasm.wasm.v1.IMsgMigrateContract, callback: cosmwasm.wasm.v1.Msg.MigrateContractCallback): void;

                /**
                 * Calls MigrateContract.
                 * @param request MsgMigrateContract message or plain object
                 * @returns Promise
                 */
                public migrateContract(request: cosmwasm.wasm.v1.IMsgMigrateContract): Promise<cosmwasm.wasm.v1.MsgMigrateContractResponse>;

                /**
                 * Calls UpdateAdmin.
                 * @param request MsgUpdateAdmin message or plain object
                 * @param callback Node-style callback called with the error, if any, and MsgUpdateAdminResponse
                 */
                public updateAdmin(request: cosmwasm.wasm.v1.IMsgUpdateAdmin, callback: cosmwasm.wasm.v1.Msg.UpdateAdminCallback): void;

                /**
                 * Calls UpdateAdmin.
                 * @param request MsgUpdateAdmin message or plain object
                 * @returns Promise
                 */
                public updateAdmin(request: cosmwasm.wasm.v1.IMsgUpdateAdmin): Promise<cosmwasm.wasm.v1.MsgUpdateAdminResponse>;

                /**
                 * Calls ClearAdmin.
                 * @param request MsgClearAdmin message or plain object
                 * @param callback Node-style callback called with the error, if any, and MsgClearAdminResponse
                 */
                public clearAdmin(request: cosmwasm.wasm.v1.IMsgClearAdmin, callback: cosmwasm.wasm.v1.Msg.ClearAdminCallback): void;

                /**
                 * Calls ClearAdmin.
                 * @param request MsgClearAdmin message or plain object
                 * @returns Promise
                 */
                public clearAdmin(request: cosmwasm.wasm.v1.IMsgClearAdmin): Promise<cosmwasm.wasm.v1.MsgClearAdminResponse>;
            }

            namespace Msg {

                /**
                 * Callback as used by {@link cosmwasm.wasm.v1.Msg#storeCode}.
                 * @param error Error, if any
                 * @param [response] MsgStoreCodeResponse
                 */
                type StoreCodeCallback = (error: (Error|null), response?: cosmwasm.wasm.v1.MsgStoreCodeResponse) => void;

                /**
                 * Callback as used by {@link cosmwasm.wasm.v1.Msg#instantiateContract}.
                 * @param error Error, if any
                 * @param [response] MsgInstantiateContractResponse
                 */
                type InstantiateContractCallback = (error: (Error|null), response?: cosmwasm.wasm.v1.MsgInstantiateContractResponse) => void;

                /**
                 * Callback as used by {@link cosmwasm.wasm.v1.Msg#executeContract}.
                 * @param error Error, if any
                 * @param [response] MsgExecuteContractResponse
                 */
                type ExecuteContractCallback = (error: (Error|null), response?: cosmwasm.wasm.v1.MsgExecuteContractResponse) => void;

                /**
                 * Callback as used by {@link cosmwasm.wasm.v1.Msg#migrateContract}.
                 * @param error Error, if any
                 * @param [response] MsgMigrateContractResponse
                 */
                type MigrateContractCallback = (error: (Error|null), response?: cosmwasm.wasm.v1.MsgMigrateContractResponse) => void;

                /**
                 * Callback as used by {@link cosmwasm.wasm.v1.Msg#updateAdmin}.
                 * @param error Error, if any
                 * @param [response] MsgUpdateAdminResponse
                 */
                type UpdateAdminCallback = (error: (Error|null), response?: cosmwasm.wasm.v1.MsgUpdateAdminResponse) => void;

                /**
                 * Callback as used by {@link cosmwasm.wasm.v1.Msg#clearAdmin}.
                 * @param error Error, if any
                 * @param [response] MsgClearAdminResponse
                 */
                type ClearAdminCallback = (error: (Error|null), response?: cosmwasm.wasm.v1.MsgClearAdminResponse) => void;
            }

            /** Properties of a MsgStoreCode. */
            interface IMsgStoreCode {

                /** MsgStoreCode sender */
                sender?: (string|null);

                /** MsgStoreCode wasm_byte_code */
                wasm_byte_code?: (Uint8Array|null);

                /** MsgStoreCode instantiate_permission */
                instantiate_permission?: (cosmwasm.wasm.v1.IAccessConfig|null);
            }

            /** Represents a MsgStoreCode. */
            class MsgStoreCode implements IMsgStoreCode {

                /**
                 * Constructs a new MsgStoreCode.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: cosmwasm.wasm.v1.IMsgStoreCode);

                /** MsgStoreCode sender. */
                public sender: string;

                /** MsgStoreCode wasm_byte_code. */
                public wasm_byte_code: Uint8Array;

                /** MsgStoreCode instantiate_permission. */
                public instantiate_permission?: (cosmwasm.wasm.v1.IAccessConfig|null);

                /**
                 * Encodes the specified MsgStoreCode message. Does not implicitly {@link cosmwasm.wasm.v1.MsgStoreCode.verify|verify} messages.
                 * @param message MsgStoreCode message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: cosmwasm.wasm.v1.IMsgStoreCode, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified MsgStoreCode message, length delimited. Does not implicitly {@link cosmwasm.wasm.v1.MsgStoreCode.verify|verify} messages.
                 * @param message MsgStoreCode message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: cosmwasm.wasm.v1.IMsgStoreCode, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a MsgStoreCode message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns MsgStoreCode
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): cosmwasm.wasm.v1.MsgStoreCode;

                /**
                 * Decodes a MsgStoreCode message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns MsgStoreCode
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): cosmwasm.wasm.v1.MsgStoreCode;

                /**
                 * Verifies a MsgStoreCode message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a MsgStoreCode message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns MsgStoreCode
                 */
                public static fromObject(object: { [k: string]: any }): cosmwasm.wasm.v1.MsgStoreCode;

                /**
                 * Creates a plain object from a MsgStoreCode message. Also converts values to other types if specified.
                 * @param message MsgStoreCode
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: cosmwasm.wasm.v1.MsgStoreCode, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this MsgStoreCode to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a MsgStoreCodeResponse. */
            interface IMsgStoreCodeResponse {

                /** MsgStoreCodeResponse code_id */
                code_id?: (Long|null);
            }

            /** Represents a MsgStoreCodeResponse. */
            class MsgStoreCodeResponse implements IMsgStoreCodeResponse {

                /**
                 * Constructs a new MsgStoreCodeResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: cosmwasm.wasm.v1.IMsgStoreCodeResponse);

                /** MsgStoreCodeResponse code_id. */
                public code_id: Long;

                /**
                 * Encodes the specified MsgStoreCodeResponse message. Does not implicitly {@link cosmwasm.wasm.v1.MsgStoreCodeResponse.verify|verify} messages.
                 * @param message MsgStoreCodeResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: cosmwasm.wasm.v1.IMsgStoreCodeResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified MsgStoreCodeResponse message, length delimited. Does not implicitly {@link cosmwasm.wasm.v1.MsgStoreCodeResponse.verify|verify} messages.
                 * @param message MsgStoreCodeResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: cosmwasm.wasm.v1.IMsgStoreCodeResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a MsgStoreCodeResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns MsgStoreCodeResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): cosmwasm.wasm.v1.MsgStoreCodeResponse;

                /**
                 * Decodes a MsgStoreCodeResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns MsgStoreCodeResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): cosmwasm.wasm.v1.MsgStoreCodeResponse;

                /**
                 * Verifies a MsgStoreCodeResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a MsgStoreCodeResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns MsgStoreCodeResponse
                 */
                public static fromObject(object: { [k: string]: any }): cosmwasm.wasm.v1.MsgStoreCodeResponse;

                /**
                 * Creates a plain object from a MsgStoreCodeResponse message. Also converts values to other types if specified.
                 * @param message MsgStoreCodeResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: cosmwasm.wasm.v1.MsgStoreCodeResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this MsgStoreCodeResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a MsgInstantiateContract. */
            interface IMsgInstantiateContract {

                /** MsgInstantiateContract sender */
                sender?: (string|null);

                /** MsgInstantiateContract admin */
                admin?: (string|null);

                /** MsgInstantiateContract code_id */
                code_id?: (Long|null);

                /** MsgInstantiateContract label */
                label?: (string|null);

                /** MsgInstantiateContract msg */
                msg?: (Uint8Array|null);

                /** MsgInstantiateContract funds */
                funds?: (cosmos.base.v1beta1.ICoin[]|null);
            }

            /** Represents a MsgInstantiateContract. */
            class MsgInstantiateContract implements IMsgInstantiateContract {

                /**
                 * Constructs a new MsgInstantiateContract.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: cosmwasm.wasm.v1.IMsgInstantiateContract);

                /** MsgInstantiateContract sender. */
                public sender: string;

                /** MsgInstantiateContract admin. */
                public admin: string;

                /** MsgInstantiateContract code_id. */
                public code_id: Long;

                /** MsgInstantiateContract label. */
                public label: string;

                /** MsgInstantiateContract msg. */
                public msg: Uint8Array;

                /** MsgInstantiateContract funds. */
                public funds: cosmos.base.v1beta1.ICoin[];

                /**
                 * Encodes the specified MsgInstantiateContract message. Does not implicitly {@link cosmwasm.wasm.v1.MsgInstantiateContract.verify|verify} messages.
                 * @param message MsgInstantiateContract message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: cosmwasm.wasm.v1.IMsgInstantiateContract, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified MsgInstantiateContract message, length delimited. Does not implicitly {@link cosmwasm.wasm.v1.MsgInstantiateContract.verify|verify} messages.
                 * @param message MsgInstantiateContract message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: cosmwasm.wasm.v1.IMsgInstantiateContract, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a MsgInstantiateContract message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns MsgInstantiateContract
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): cosmwasm.wasm.v1.MsgInstantiateContract;

                /**
                 * Decodes a MsgInstantiateContract message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns MsgInstantiateContract
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): cosmwasm.wasm.v1.MsgInstantiateContract;

                /**
                 * Verifies a MsgInstantiateContract message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a MsgInstantiateContract message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns MsgInstantiateContract
                 */
                public static fromObject(object: { [k: string]: any }): cosmwasm.wasm.v1.MsgInstantiateContract;

                /**
                 * Creates a plain object from a MsgInstantiateContract message. Also converts values to other types if specified.
                 * @param message MsgInstantiateContract
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: cosmwasm.wasm.v1.MsgInstantiateContract, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this MsgInstantiateContract to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a MsgInstantiateContractResponse. */
            interface IMsgInstantiateContractResponse {

                /** MsgInstantiateContractResponse address */
                address?: (string|null);

                /** MsgInstantiateContractResponse data */
                data?: (Uint8Array|null);
            }

            /** Represents a MsgInstantiateContractResponse. */
            class MsgInstantiateContractResponse implements IMsgInstantiateContractResponse {

                /**
                 * Constructs a new MsgInstantiateContractResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: cosmwasm.wasm.v1.IMsgInstantiateContractResponse);

                /** MsgInstantiateContractResponse address. */
                public address: string;

                /** MsgInstantiateContractResponse data. */
                public data: Uint8Array;

                /**
                 * Encodes the specified MsgInstantiateContractResponse message. Does not implicitly {@link cosmwasm.wasm.v1.MsgInstantiateContractResponse.verify|verify} messages.
                 * @param message MsgInstantiateContractResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: cosmwasm.wasm.v1.IMsgInstantiateContractResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified MsgInstantiateContractResponse message, length delimited. Does not implicitly {@link cosmwasm.wasm.v1.MsgInstantiateContractResponse.verify|verify} messages.
                 * @param message MsgInstantiateContractResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: cosmwasm.wasm.v1.IMsgInstantiateContractResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a MsgInstantiateContractResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns MsgInstantiateContractResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): cosmwasm.wasm.v1.MsgInstantiateContractResponse;

                /**
                 * Decodes a MsgInstantiateContractResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns MsgInstantiateContractResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): cosmwasm.wasm.v1.MsgInstantiateContractResponse;

                /**
                 * Verifies a MsgInstantiateContractResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a MsgInstantiateContractResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns MsgInstantiateContractResponse
                 */
                public static fromObject(object: { [k: string]: any }): cosmwasm.wasm.v1.MsgInstantiateContractResponse;

                /**
                 * Creates a plain object from a MsgInstantiateContractResponse message. Also converts values to other types if specified.
                 * @param message MsgInstantiateContractResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: cosmwasm.wasm.v1.MsgInstantiateContractResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this MsgInstantiateContractResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a MsgExecuteContract. */
            interface IMsgExecuteContract {

                /** MsgExecuteContract sender */
                sender?: (string|null);

                /** MsgExecuteContract contract */
                contract?: (string|null);

                /** MsgExecuteContract msg */
                msg?: (Uint8Array|null);

                /** MsgExecuteContract funds */
                funds?: (cosmos.base.v1beta1.ICoin[]|null);
            }

            /** Represents a MsgExecuteContract. */
            class MsgExecuteContract implements IMsgExecuteContract {

                /**
                 * Constructs a new MsgExecuteContract.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: cosmwasm.wasm.v1.IMsgExecuteContract);

                /** MsgExecuteContract sender. */
                public sender: string;

                /** MsgExecuteContract contract. */
                public contract: string;

                /** MsgExecuteContract msg. */
                public msg: Uint8Array;

                /** MsgExecuteContract funds. */
                public funds: cosmos.base.v1beta1.ICoin[];

                /**
                 * Encodes the specified MsgExecuteContract message. Does not implicitly {@link cosmwasm.wasm.v1.MsgExecuteContract.verify|verify} messages.
                 * @param message MsgExecuteContract message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: cosmwasm.wasm.v1.IMsgExecuteContract, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified MsgExecuteContract message, length delimited. Does not implicitly {@link cosmwasm.wasm.v1.MsgExecuteContract.verify|verify} messages.
                 * @param message MsgExecuteContract message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: cosmwasm.wasm.v1.IMsgExecuteContract, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a MsgExecuteContract message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns MsgExecuteContract
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): cosmwasm.wasm.v1.MsgExecuteContract;

                /**
                 * Decodes a MsgExecuteContract message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns MsgExecuteContract
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): cosmwasm.wasm.v1.MsgExecuteContract;

                /**
                 * Verifies a MsgExecuteContract message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a MsgExecuteContract message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns MsgExecuteContract
                 */
                public static fromObject(object: { [k: string]: any }): cosmwasm.wasm.v1.MsgExecuteContract;

                /**
                 * Creates a plain object from a MsgExecuteContract message. Also converts values to other types if specified.
                 * @param message MsgExecuteContract
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: cosmwasm.wasm.v1.MsgExecuteContract, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this MsgExecuteContract to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a MsgExecuteContractResponse. */
            interface IMsgExecuteContractResponse {

                /** MsgExecuteContractResponse data */
                data?: (Uint8Array|null);
            }

            /** Represents a MsgExecuteContractResponse. */
            class MsgExecuteContractResponse implements IMsgExecuteContractResponse {

                /**
                 * Constructs a new MsgExecuteContractResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: cosmwasm.wasm.v1.IMsgExecuteContractResponse);

                /** MsgExecuteContractResponse data. */
                public data: Uint8Array;

                /**
                 * Encodes the specified MsgExecuteContractResponse message. Does not implicitly {@link cosmwasm.wasm.v1.MsgExecuteContractResponse.verify|verify} messages.
                 * @param message MsgExecuteContractResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: cosmwasm.wasm.v1.IMsgExecuteContractResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified MsgExecuteContractResponse message, length delimited. Does not implicitly {@link cosmwasm.wasm.v1.MsgExecuteContractResponse.verify|verify} messages.
                 * @param message MsgExecuteContractResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: cosmwasm.wasm.v1.IMsgExecuteContractResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a MsgExecuteContractResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns MsgExecuteContractResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): cosmwasm.wasm.v1.MsgExecuteContractResponse;

                /**
                 * Decodes a MsgExecuteContractResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns MsgExecuteContractResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): cosmwasm.wasm.v1.MsgExecuteContractResponse;

                /**
                 * Verifies a MsgExecuteContractResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a MsgExecuteContractResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns MsgExecuteContractResponse
                 */
                public static fromObject(object: { [k: string]: any }): cosmwasm.wasm.v1.MsgExecuteContractResponse;

                /**
                 * Creates a plain object from a MsgExecuteContractResponse message. Also converts values to other types if specified.
                 * @param message MsgExecuteContractResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: cosmwasm.wasm.v1.MsgExecuteContractResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this MsgExecuteContractResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a MsgMigrateContract. */
            interface IMsgMigrateContract {

                /** MsgMigrateContract sender */
                sender?: (string|null);

                /** MsgMigrateContract contract */
                contract?: (string|null);

                /** MsgMigrateContract code_id */
                code_id?: (Long|null);

                /** MsgMigrateContract msg */
                msg?: (Uint8Array|null);
            }

            /** Represents a MsgMigrateContract. */
            class MsgMigrateContract implements IMsgMigrateContract {

                /**
                 * Constructs a new MsgMigrateContract.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: cosmwasm.wasm.v1.IMsgMigrateContract);

                /** MsgMigrateContract sender. */
                public sender: string;

                /** MsgMigrateContract contract. */
                public contract: string;

                /** MsgMigrateContract code_id. */
                public code_id: Long;

                /** MsgMigrateContract msg. */
                public msg: Uint8Array;

                /**
                 * Encodes the specified MsgMigrateContract message. Does not implicitly {@link cosmwasm.wasm.v1.MsgMigrateContract.verify|verify} messages.
                 * @param message MsgMigrateContract message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: cosmwasm.wasm.v1.IMsgMigrateContract, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified MsgMigrateContract message, length delimited. Does not implicitly {@link cosmwasm.wasm.v1.MsgMigrateContract.verify|verify} messages.
                 * @param message MsgMigrateContract message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: cosmwasm.wasm.v1.IMsgMigrateContract, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a MsgMigrateContract message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns MsgMigrateContract
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): cosmwasm.wasm.v1.MsgMigrateContract;

                /**
                 * Decodes a MsgMigrateContract message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns MsgMigrateContract
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): cosmwasm.wasm.v1.MsgMigrateContract;

                /**
                 * Verifies a MsgMigrateContract message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a MsgMigrateContract message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns MsgMigrateContract
                 */
                public static fromObject(object: { [k: string]: any }): cosmwasm.wasm.v1.MsgMigrateContract;

                /**
                 * Creates a plain object from a MsgMigrateContract message. Also converts values to other types if specified.
                 * @param message MsgMigrateContract
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: cosmwasm.wasm.v1.MsgMigrateContract, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this MsgMigrateContract to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a MsgMigrateContractResponse. */
            interface IMsgMigrateContractResponse {

                /** MsgMigrateContractResponse data */
                data?: (Uint8Array|null);
            }

            /** Represents a MsgMigrateContractResponse. */
            class MsgMigrateContractResponse implements IMsgMigrateContractResponse {

                /**
                 * Constructs a new MsgMigrateContractResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: cosmwasm.wasm.v1.IMsgMigrateContractResponse);

                /** MsgMigrateContractResponse data. */
                public data: Uint8Array;

                /**
                 * Encodes the specified MsgMigrateContractResponse message. Does not implicitly {@link cosmwasm.wasm.v1.MsgMigrateContractResponse.verify|verify} messages.
                 * @param message MsgMigrateContractResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: cosmwasm.wasm.v1.IMsgMigrateContractResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified MsgMigrateContractResponse message, length delimited. Does not implicitly {@link cosmwasm.wasm.v1.MsgMigrateContractResponse.verify|verify} messages.
                 * @param message MsgMigrateContractResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: cosmwasm.wasm.v1.IMsgMigrateContractResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a MsgMigrateContractResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns MsgMigrateContractResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): cosmwasm.wasm.v1.MsgMigrateContractResponse;

                /**
                 * Decodes a MsgMigrateContractResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns MsgMigrateContractResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): cosmwasm.wasm.v1.MsgMigrateContractResponse;

                /**
                 * Verifies a MsgMigrateContractResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a MsgMigrateContractResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns MsgMigrateContractResponse
                 */
                public static fromObject(object: { [k: string]: any }): cosmwasm.wasm.v1.MsgMigrateContractResponse;

                /**
                 * Creates a plain object from a MsgMigrateContractResponse message. Also converts values to other types if specified.
                 * @param message MsgMigrateContractResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: cosmwasm.wasm.v1.MsgMigrateContractResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this MsgMigrateContractResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a MsgUpdateAdmin. */
            interface IMsgUpdateAdmin {

                /** MsgUpdateAdmin sender */
                sender?: (string|null);

                /** MsgUpdateAdmin new_admin */
                new_admin?: (string|null);

                /** MsgUpdateAdmin contract */
                contract?: (string|null);
            }

            /** Represents a MsgUpdateAdmin. */
            class MsgUpdateAdmin implements IMsgUpdateAdmin {

                /**
                 * Constructs a new MsgUpdateAdmin.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: cosmwasm.wasm.v1.IMsgUpdateAdmin);

                /** MsgUpdateAdmin sender. */
                public sender: string;

                /** MsgUpdateAdmin new_admin. */
                public new_admin: string;

                /** MsgUpdateAdmin contract. */
                public contract: string;

                /**
                 * Encodes the specified MsgUpdateAdmin message. Does not implicitly {@link cosmwasm.wasm.v1.MsgUpdateAdmin.verify|verify} messages.
                 * @param message MsgUpdateAdmin message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: cosmwasm.wasm.v1.IMsgUpdateAdmin, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified MsgUpdateAdmin message, length delimited. Does not implicitly {@link cosmwasm.wasm.v1.MsgUpdateAdmin.verify|verify} messages.
                 * @param message MsgUpdateAdmin message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: cosmwasm.wasm.v1.IMsgUpdateAdmin, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a MsgUpdateAdmin message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns MsgUpdateAdmin
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): cosmwasm.wasm.v1.MsgUpdateAdmin;

                /**
                 * Decodes a MsgUpdateAdmin message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns MsgUpdateAdmin
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): cosmwasm.wasm.v1.MsgUpdateAdmin;

                /**
                 * Verifies a MsgUpdateAdmin message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a MsgUpdateAdmin message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns MsgUpdateAdmin
                 */
                public static fromObject(object: { [k: string]: any }): cosmwasm.wasm.v1.MsgUpdateAdmin;

                /**
                 * Creates a plain object from a MsgUpdateAdmin message. Also converts values to other types if specified.
                 * @param message MsgUpdateAdmin
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: cosmwasm.wasm.v1.MsgUpdateAdmin, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this MsgUpdateAdmin to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a MsgUpdateAdminResponse. */
            interface IMsgUpdateAdminResponse {
            }

            /** Represents a MsgUpdateAdminResponse. */
            class MsgUpdateAdminResponse implements IMsgUpdateAdminResponse {

                /**
                 * Constructs a new MsgUpdateAdminResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: cosmwasm.wasm.v1.IMsgUpdateAdminResponse);

                /**
                 * Encodes the specified MsgUpdateAdminResponse message. Does not implicitly {@link cosmwasm.wasm.v1.MsgUpdateAdminResponse.verify|verify} messages.
                 * @param message MsgUpdateAdminResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: cosmwasm.wasm.v1.IMsgUpdateAdminResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified MsgUpdateAdminResponse message, length delimited. Does not implicitly {@link cosmwasm.wasm.v1.MsgUpdateAdminResponse.verify|verify} messages.
                 * @param message MsgUpdateAdminResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: cosmwasm.wasm.v1.IMsgUpdateAdminResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a MsgUpdateAdminResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns MsgUpdateAdminResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): cosmwasm.wasm.v1.MsgUpdateAdminResponse;

                /**
                 * Decodes a MsgUpdateAdminResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns MsgUpdateAdminResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): cosmwasm.wasm.v1.MsgUpdateAdminResponse;

                /**
                 * Verifies a MsgUpdateAdminResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a MsgUpdateAdminResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns MsgUpdateAdminResponse
                 */
                public static fromObject(object: { [k: string]: any }): cosmwasm.wasm.v1.MsgUpdateAdminResponse;

                /**
                 * Creates a plain object from a MsgUpdateAdminResponse message. Also converts values to other types if specified.
                 * @param message MsgUpdateAdminResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: cosmwasm.wasm.v1.MsgUpdateAdminResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this MsgUpdateAdminResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a MsgClearAdmin. */
            interface IMsgClearAdmin {

                /** MsgClearAdmin sender */
                sender?: (string|null);

                /** MsgClearAdmin contract */
                contract?: (string|null);
            }

            /** Represents a MsgClearAdmin. */
            class MsgClearAdmin implements IMsgClearAdmin {

                /**
                 * Constructs a new MsgClearAdmin.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: cosmwasm.wasm.v1.IMsgClearAdmin);

                /** MsgClearAdmin sender. */
                public sender: string;

                /** MsgClearAdmin contract. */
                public contract: string;

                /**
                 * Encodes the specified MsgClearAdmin message. Does not implicitly {@link cosmwasm.wasm.v1.MsgClearAdmin.verify|verify} messages.
                 * @param message MsgClearAdmin message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: cosmwasm.wasm.v1.IMsgClearAdmin, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified MsgClearAdmin message, length delimited. Does not implicitly {@link cosmwasm.wasm.v1.MsgClearAdmin.verify|verify} messages.
                 * @param message MsgClearAdmin message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: cosmwasm.wasm.v1.IMsgClearAdmin, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a MsgClearAdmin message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns MsgClearAdmin
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): cosmwasm.wasm.v1.MsgClearAdmin;

                /**
                 * Decodes a MsgClearAdmin message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns MsgClearAdmin
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): cosmwasm.wasm.v1.MsgClearAdmin;

                /**
                 * Verifies a MsgClearAdmin message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a MsgClearAdmin message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns MsgClearAdmin
                 */
                public static fromObject(object: { [k: string]: any }): cosmwasm.wasm.v1.MsgClearAdmin;

                /**
                 * Creates a plain object from a MsgClearAdmin message. Also converts values to other types if specified.
                 * @param message MsgClearAdmin
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: cosmwasm.wasm.v1.MsgClearAdmin, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this MsgClearAdmin to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a MsgClearAdminResponse. */
            interface IMsgClearAdminResponse {
            }

            /** Represents a MsgClearAdminResponse. */
            class MsgClearAdminResponse implements IMsgClearAdminResponse {

                /**
                 * Constructs a new MsgClearAdminResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: cosmwasm.wasm.v1.IMsgClearAdminResponse);

                /**
                 * Encodes the specified MsgClearAdminResponse message. Does not implicitly {@link cosmwasm.wasm.v1.MsgClearAdminResponse.verify|verify} messages.
                 * @param message MsgClearAdminResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: cosmwasm.wasm.v1.IMsgClearAdminResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified MsgClearAdminResponse message, length delimited. Does not implicitly {@link cosmwasm.wasm.v1.MsgClearAdminResponse.verify|verify} messages.
                 * @param message MsgClearAdminResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: cosmwasm.wasm.v1.IMsgClearAdminResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a MsgClearAdminResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns MsgClearAdminResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): cosmwasm.wasm.v1.MsgClearAdminResponse;

                /**
                 * Decodes a MsgClearAdminResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns MsgClearAdminResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): cosmwasm.wasm.v1.MsgClearAdminResponse;

                /**
                 * Verifies a MsgClearAdminResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a MsgClearAdminResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns MsgClearAdminResponse
                 */
                public static fromObject(object: { [k: string]: any }): cosmwasm.wasm.v1.MsgClearAdminResponse;

                /**
                 * Creates a plain object from a MsgClearAdminResponse message. Also converts values to other types if specified.
                 * @param message MsgClearAdminResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: cosmwasm.wasm.v1.MsgClearAdminResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this MsgClearAdminResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a GenesisState. */
            interface IGenesisState {

                /** GenesisState params */
                params?: (cosmwasm.wasm.v1.IParams|null);

                /** GenesisState codes */
                codes?: (cosmwasm.wasm.v1.ICode[]|null);

                /** GenesisState contracts */
                contracts?: (cosmwasm.wasm.v1.IContract[]|null);

                /** GenesisState sequences */
                sequences?: (cosmwasm.wasm.v1.ISequence[]|null);

                /** GenesisState gen_msgs */
                gen_msgs?: (cosmwasm.wasm.v1.GenesisState.IGenMsgs[]|null);
            }

            /** Represents a GenesisState. */
            class GenesisState implements IGenesisState {

                /**
                 * Constructs a new GenesisState.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: cosmwasm.wasm.v1.IGenesisState);

                /** GenesisState params. */
                public params?: (cosmwasm.wasm.v1.IParams|null);

                /** GenesisState codes. */
                public codes: cosmwasm.wasm.v1.ICode[];

                /** GenesisState contracts. */
                public contracts: cosmwasm.wasm.v1.IContract[];

                /** GenesisState sequences. */
                public sequences: cosmwasm.wasm.v1.ISequence[];

                /** GenesisState gen_msgs. */
                public gen_msgs: cosmwasm.wasm.v1.GenesisState.IGenMsgs[];

                /**
                 * Encodes the specified GenesisState message. Does not implicitly {@link cosmwasm.wasm.v1.GenesisState.verify|verify} messages.
                 * @param message GenesisState message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: cosmwasm.wasm.v1.IGenesisState, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified GenesisState message, length delimited. Does not implicitly {@link cosmwasm.wasm.v1.GenesisState.verify|verify} messages.
                 * @param message GenesisState message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: cosmwasm.wasm.v1.IGenesisState, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GenesisState message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GenesisState
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): cosmwasm.wasm.v1.GenesisState;

                /**
                 * Decodes a GenesisState message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns GenesisState
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): cosmwasm.wasm.v1.GenesisState;

                /**
                 * Verifies a GenesisState message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a GenesisState message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns GenesisState
                 */
                public static fromObject(object: { [k: string]: any }): cosmwasm.wasm.v1.GenesisState;

                /**
                 * Creates a plain object from a GenesisState message. Also converts values to other types if specified.
                 * @param message GenesisState
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: cosmwasm.wasm.v1.GenesisState, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this GenesisState to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            namespace GenesisState {

                /** Properties of a GenMsgs. */
                interface IGenMsgs {

                    /** GenMsgs store_code */
                    store_code?: (cosmwasm.wasm.v1.IMsgStoreCode|null);

                    /** GenMsgs instantiate_contract */
                    instantiate_contract?: (cosmwasm.wasm.v1.IMsgInstantiateContract|null);

                    /** GenMsgs execute_contract */
                    execute_contract?: (cosmwasm.wasm.v1.IMsgExecuteContract|null);
                }

                /** Represents a GenMsgs. */
                class GenMsgs implements IGenMsgs {

                    /**
                     * Constructs a new GenMsgs.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: cosmwasm.wasm.v1.GenesisState.IGenMsgs);

                    /** GenMsgs store_code. */
                    public store_code?: (cosmwasm.wasm.v1.IMsgStoreCode|null);

                    /** GenMsgs instantiate_contract. */
                    public instantiate_contract?: (cosmwasm.wasm.v1.IMsgInstantiateContract|null);

                    /** GenMsgs execute_contract. */
                    public execute_contract?: (cosmwasm.wasm.v1.IMsgExecuteContract|null);

                    /** GenMsgs sum. */
                    public sum?: ("store_code"|"instantiate_contract"|"execute_contract");

                    /**
                     * Encodes the specified GenMsgs message. Does not implicitly {@link cosmwasm.wasm.v1.GenesisState.GenMsgs.verify|verify} messages.
                     * @param message GenMsgs message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: cosmwasm.wasm.v1.GenesisState.IGenMsgs, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GenMsgs message, length delimited. Does not implicitly {@link cosmwasm.wasm.v1.GenesisState.GenMsgs.verify|verify} messages.
                     * @param message GenMsgs message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: cosmwasm.wasm.v1.GenesisState.IGenMsgs, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GenMsgs message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GenMsgs
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): cosmwasm.wasm.v1.GenesisState.GenMsgs;

                    /**
                     * Decodes a GenMsgs message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GenMsgs
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): cosmwasm.wasm.v1.GenesisState.GenMsgs;

                    /**
                     * Verifies a GenMsgs message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GenMsgs message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GenMsgs
                     */
                    public static fromObject(object: { [k: string]: any }): cosmwasm.wasm.v1.GenesisState.GenMsgs;

                    /**
                     * Creates a plain object from a GenMsgs message. Also converts values to other types if specified.
                     * @param message GenMsgs
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: cosmwasm.wasm.v1.GenesisState.GenMsgs, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GenMsgs to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }
            }

            /** Properties of a Code. */
            interface ICode {

                /** Code code_id */
                code_id?: (Long|null);

                /** Code code_info */
                code_info?: (cosmwasm.wasm.v1.ICodeInfo|null);

                /** Code code_bytes */
                code_bytes?: (Uint8Array|null);

                /** Code pinned */
                pinned?: (boolean|null);
            }

            /** Represents a Code. */
            class Code implements ICode {

                /**
                 * Constructs a new Code.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: cosmwasm.wasm.v1.ICode);

                /** Code code_id. */
                public code_id: Long;

                /** Code code_info. */
                public code_info?: (cosmwasm.wasm.v1.ICodeInfo|null);

                /** Code code_bytes. */
                public code_bytes: Uint8Array;

                /** Code pinned. */
                public pinned: boolean;

                /**
                 * Encodes the specified Code message. Does not implicitly {@link cosmwasm.wasm.v1.Code.verify|verify} messages.
                 * @param message Code message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: cosmwasm.wasm.v1.ICode, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Code message, length delimited. Does not implicitly {@link cosmwasm.wasm.v1.Code.verify|verify} messages.
                 * @param message Code message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: cosmwasm.wasm.v1.ICode, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Code message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Code
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): cosmwasm.wasm.v1.Code;

                /**
                 * Decodes a Code message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Code
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): cosmwasm.wasm.v1.Code;

                /**
                 * Verifies a Code message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Code message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Code
                 */
                public static fromObject(object: { [k: string]: any }): cosmwasm.wasm.v1.Code;

                /**
                 * Creates a plain object from a Code message. Also converts values to other types if specified.
                 * @param message Code
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: cosmwasm.wasm.v1.Code, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Code to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Contract. */
            interface IContract {

                /** Contract contract_address */
                contract_address?: (string|null);

                /** Contract contract_info */
                contract_info?: (cosmwasm.wasm.v1.IContractInfo|null);

                /** Contract contract_state */
                contract_state?: (cosmwasm.wasm.v1.IModel[]|null);
            }

            /** Represents a Contract. */
            class Contract implements IContract {

                /**
                 * Constructs a new Contract.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: cosmwasm.wasm.v1.IContract);

                /** Contract contract_address. */
                public contract_address: string;

                /** Contract contract_info. */
                public contract_info?: (cosmwasm.wasm.v1.IContractInfo|null);

                /** Contract contract_state. */
                public contract_state: cosmwasm.wasm.v1.IModel[];

                /**
                 * Encodes the specified Contract message. Does not implicitly {@link cosmwasm.wasm.v1.Contract.verify|verify} messages.
                 * @param message Contract message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: cosmwasm.wasm.v1.IContract, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Contract message, length delimited. Does not implicitly {@link cosmwasm.wasm.v1.Contract.verify|verify} messages.
                 * @param message Contract message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: cosmwasm.wasm.v1.IContract, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Contract message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Contract
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): cosmwasm.wasm.v1.Contract;

                /**
                 * Decodes a Contract message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Contract
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): cosmwasm.wasm.v1.Contract;

                /**
                 * Verifies a Contract message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Contract message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Contract
                 */
                public static fromObject(object: { [k: string]: any }): cosmwasm.wasm.v1.Contract;

                /**
                 * Creates a plain object from a Contract message. Also converts values to other types if specified.
                 * @param message Contract
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: cosmwasm.wasm.v1.Contract, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Contract to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Sequence. */
            interface ISequence {

                /** Sequence id_key */
                id_key?: (Uint8Array|null);

                /** Sequence value */
                value?: (Long|null);
            }

            /** Represents a Sequence. */
            class Sequence implements ISequence {

                /**
                 * Constructs a new Sequence.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: cosmwasm.wasm.v1.ISequence);

                /** Sequence id_key. */
                public id_key: Uint8Array;

                /** Sequence value. */
                public value: Long;

                /**
                 * Encodes the specified Sequence message. Does not implicitly {@link cosmwasm.wasm.v1.Sequence.verify|verify} messages.
                 * @param message Sequence message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: cosmwasm.wasm.v1.ISequence, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Sequence message, length delimited. Does not implicitly {@link cosmwasm.wasm.v1.Sequence.verify|verify} messages.
                 * @param message Sequence message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: cosmwasm.wasm.v1.ISequence, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Sequence message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Sequence
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): cosmwasm.wasm.v1.Sequence;

                /**
                 * Decodes a Sequence message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Sequence
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): cosmwasm.wasm.v1.Sequence;

                /**
                 * Verifies a Sequence message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Sequence message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Sequence
                 */
                public static fromObject(object: { [k: string]: any }): cosmwasm.wasm.v1.Sequence;

                /**
                 * Creates a plain object from a Sequence message. Also converts values to other types if specified.
                 * @param message Sequence
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: cosmwasm.wasm.v1.Sequence, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Sequence to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a StoreCodeProposal. */
            interface IStoreCodeProposal {

                /** StoreCodeProposal title */
                title?: (string|null);

                /** StoreCodeProposal description */
                description?: (string|null);

                /** StoreCodeProposal run_as */
                run_as?: (string|null);

                /** StoreCodeProposal wasm_byte_code */
                wasm_byte_code?: (Uint8Array|null);

                /** StoreCodeProposal instantiate_permission */
                instantiate_permission?: (cosmwasm.wasm.v1.IAccessConfig|null);
            }

            /** Represents a StoreCodeProposal. */
            class StoreCodeProposal implements IStoreCodeProposal {

                /**
                 * Constructs a new StoreCodeProposal.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: cosmwasm.wasm.v1.IStoreCodeProposal);

                /** StoreCodeProposal title. */
                public title: string;

                /** StoreCodeProposal description. */
                public description: string;

                /** StoreCodeProposal run_as. */
                public run_as: string;

                /** StoreCodeProposal wasm_byte_code. */
                public wasm_byte_code: Uint8Array;

                /** StoreCodeProposal instantiate_permission. */
                public instantiate_permission?: (cosmwasm.wasm.v1.IAccessConfig|null);

                /**
                 * Encodes the specified StoreCodeProposal message. Does not implicitly {@link cosmwasm.wasm.v1.StoreCodeProposal.verify|verify} messages.
                 * @param message StoreCodeProposal message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: cosmwasm.wasm.v1.IStoreCodeProposal, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified StoreCodeProposal message, length delimited. Does not implicitly {@link cosmwasm.wasm.v1.StoreCodeProposal.verify|verify} messages.
                 * @param message StoreCodeProposal message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: cosmwasm.wasm.v1.IStoreCodeProposal, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a StoreCodeProposal message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns StoreCodeProposal
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): cosmwasm.wasm.v1.StoreCodeProposal;

                /**
                 * Decodes a StoreCodeProposal message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns StoreCodeProposal
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): cosmwasm.wasm.v1.StoreCodeProposal;

                /**
                 * Verifies a StoreCodeProposal message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a StoreCodeProposal message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns StoreCodeProposal
                 */
                public static fromObject(object: { [k: string]: any }): cosmwasm.wasm.v1.StoreCodeProposal;

                /**
                 * Creates a plain object from a StoreCodeProposal message. Also converts values to other types if specified.
                 * @param message StoreCodeProposal
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: cosmwasm.wasm.v1.StoreCodeProposal, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this StoreCodeProposal to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of an InstantiateContractProposal. */
            interface IInstantiateContractProposal {

                /** InstantiateContractProposal title */
                title?: (string|null);

                /** InstantiateContractProposal description */
                description?: (string|null);

                /** InstantiateContractProposal run_as */
                run_as?: (string|null);

                /** InstantiateContractProposal admin */
                admin?: (string|null);

                /** InstantiateContractProposal code_id */
                code_id?: (Long|null);

                /** InstantiateContractProposal label */
                label?: (string|null);

                /** InstantiateContractProposal msg */
                msg?: (Uint8Array|null);

                /** InstantiateContractProposal funds */
                funds?: (cosmos.base.v1beta1.ICoin[]|null);
            }

            /** Represents an InstantiateContractProposal. */
            class InstantiateContractProposal implements IInstantiateContractProposal {

                /**
                 * Constructs a new InstantiateContractProposal.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: cosmwasm.wasm.v1.IInstantiateContractProposal);

                /** InstantiateContractProposal title. */
                public title: string;

                /** InstantiateContractProposal description. */
                public description: string;

                /** InstantiateContractProposal run_as. */
                public run_as: string;

                /** InstantiateContractProposal admin. */
                public admin: string;

                /** InstantiateContractProposal code_id. */
                public code_id: Long;

                /** InstantiateContractProposal label. */
                public label: string;

                /** InstantiateContractProposal msg. */
                public msg: Uint8Array;

                /** InstantiateContractProposal funds. */
                public funds: cosmos.base.v1beta1.ICoin[];

                /**
                 * Encodes the specified InstantiateContractProposal message. Does not implicitly {@link cosmwasm.wasm.v1.InstantiateContractProposal.verify|verify} messages.
                 * @param message InstantiateContractProposal message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: cosmwasm.wasm.v1.IInstantiateContractProposal, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified InstantiateContractProposal message, length delimited. Does not implicitly {@link cosmwasm.wasm.v1.InstantiateContractProposal.verify|verify} messages.
                 * @param message InstantiateContractProposal message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: cosmwasm.wasm.v1.IInstantiateContractProposal, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an InstantiateContractProposal message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns InstantiateContractProposal
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): cosmwasm.wasm.v1.InstantiateContractProposal;

                /**
                 * Decodes an InstantiateContractProposal message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns InstantiateContractProposal
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): cosmwasm.wasm.v1.InstantiateContractProposal;

                /**
                 * Verifies an InstantiateContractProposal message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an InstantiateContractProposal message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns InstantiateContractProposal
                 */
                public static fromObject(object: { [k: string]: any }): cosmwasm.wasm.v1.InstantiateContractProposal;

                /**
                 * Creates a plain object from an InstantiateContractProposal message. Also converts values to other types if specified.
                 * @param message InstantiateContractProposal
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: cosmwasm.wasm.v1.InstantiateContractProposal, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this InstantiateContractProposal to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a MigrateContractProposal. */
            interface IMigrateContractProposal {

                /** MigrateContractProposal title */
                title?: (string|null);

                /** MigrateContractProposal description */
                description?: (string|null);

                /** MigrateContractProposal run_as */
                run_as?: (string|null);

                /** MigrateContractProposal contract */
                contract?: (string|null);

                /** MigrateContractProposal code_id */
                code_id?: (Long|null);

                /** MigrateContractProposal msg */
                msg?: (Uint8Array|null);
            }

            /** Represents a MigrateContractProposal. */
            class MigrateContractProposal implements IMigrateContractProposal {

                /**
                 * Constructs a new MigrateContractProposal.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: cosmwasm.wasm.v1.IMigrateContractProposal);

                /** MigrateContractProposal title. */
                public title: string;

                /** MigrateContractProposal description. */
                public description: string;

                /** MigrateContractProposal run_as. */
                public run_as: string;

                /** MigrateContractProposal contract. */
                public contract: string;

                /** MigrateContractProposal code_id. */
                public code_id: Long;

                /** MigrateContractProposal msg. */
                public msg: Uint8Array;

                /**
                 * Encodes the specified MigrateContractProposal message. Does not implicitly {@link cosmwasm.wasm.v1.MigrateContractProposal.verify|verify} messages.
                 * @param message MigrateContractProposal message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: cosmwasm.wasm.v1.IMigrateContractProposal, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified MigrateContractProposal message, length delimited. Does not implicitly {@link cosmwasm.wasm.v1.MigrateContractProposal.verify|verify} messages.
                 * @param message MigrateContractProposal message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: cosmwasm.wasm.v1.IMigrateContractProposal, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a MigrateContractProposal message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns MigrateContractProposal
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): cosmwasm.wasm.v1.MigrateContractProposal;

                /**
                 * Decodes a MigrateContractProposal message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns MigrateContractProposal
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): cosmwasm.wasm.v1.MigrateContractProposal;

                /**
                 * Verifies a MigrateContractProposal message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a MigrateContractProposal message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns MigrateContractProposal
                 */
                public static fromObject(object: { [k: string]: any }): cosmwasm.wasm.v1.MigrateContractProposal;

                /**
                 * Creates a plain object from a MigrateContractProposal message. Also converts values to other types if specified.
                 * @param message MigrateContractProposal
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: cosmwasm.wasm.v1.MigrateContractProposal, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this MigrateContractProposal to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of an UpdateAdminProposal. */
            interface IUpdateAdminProposal {

                /** UpdateAdminProposal title */
                title?: (string|null);

                /** UpdateAdminProposal description */
                description?: (string|null);

                /** UpdateAdminProposal new_admin */
                new_admin?: (string|null);

                /** UpdateAdminProposal contract */
                contract?: (string|null);
            }

            /** Represents an UpdateAdminProposal. */
            class UpdateAdminProposal implements IUpdateAdminProposal {

                /**
                 * Constructs a new UpdateAdminProposal.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: cosmwasm.wasm.v1.IUpdateAdminProposal);

                /** UpdateAdminProposal title. */
                public title: string;

                /** UpdateAdminProposal description. */
                public description: string;

                /** UpdateAdminProposal new_admin. */
                public new_admin: string;

                /** UpdateAdminProposal contract. */
                public contract: string;

                /**
                 * Encodes the specified UpdateAdminProposal message. Does not implicitly {@link cosmwasm.wasm.v1.UpdateAdminProposal.verify|verify} messages.
                 * @param message UpdateAdminProposal message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: cosmwasm.wasm.v1.IUpdateAdminProposal, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified UpdateAdminProposal message, length delimited. Does not implicitly {@link cosmwasm.wasm.v1.UpdateAdminProposal.verify|verify} messages.
                 * @param message UpdateAdminProposal message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: cosmwasm.wasm.v1.IUpdateAdminProposal, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an UpdateAdminProposal message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns UpdateAdminProposal
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): cosmwasm.wasm.v1.UpdateAdminProposal;

                /**
                 * Decodes an UpdateAdminProposal message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns UpdateAdminProposal
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): cosmwasm.wasm.v1.UpdateAdminProposal;

                /**
                 * Verifies an UpdateAdminProposal message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an UpdateAdminProposal message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns UpdateAdminProposal
                 */
                public static fromObject(object: { [k: string]: any }): cosmwasm.wasm.v1.UpdateAdminProposal;

                /**
                 * Creates a plain object from an UpdateAdminProposal message. Also converts values to other types if specified.
                 * @param message UpdateAdminProposal
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: cosmwasm.wasm.v1.UpdateAdminProposal, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this UpdateAdminProposal to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a ClearAdminProposal. */
            interface IClearAdminProposal {

                /** ClearAdminProposal title */
                title?: (string|null);

                /** ClearAdminProposal description */
                description?: (string|null);

                /** ClearAdminProposal contract */
                contract?: (string|null);
            }

            /** Represents a ClearAdminProposal. */
            class ClearAdminProposal implements IClearAdminProposal {

                /**
                 * Constructs a new ClearAdminProposal.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: cosmwasm.wasm.v1.IClearAdminProposal);

                /** ClearAdminProposal title. */
                public title: string;

                /** ClearAdminProposal description. */
                public description: string;

                /** ClearAdminProposal contract. */
                public contract: string;

                /**
                 * Encodes the specified ClearAdminProposal message. Does not implicitly {@link cosmwasm.wasm.v1.ClearAdminProposal.verify|verify} messages.
                 * @param message ClearAdminProposal message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: cosmwasm.wasm.v1.IClearAdminProposal, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ClearAdminProposal message, length delimited. Does not implicitly {@link cosmwasm.wasm.v1.ClearAdminProposal.verify|verify} messages.
                 * @param message ClearAdminProposal message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: cosmwasm.wasm.v1.IClearAdminProposal, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ClearAdminProposal message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ClearAdminProposal
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): cosmwasm.wasm.v1.ClearAdminProposal;

                /**
                 * Decodes a ClearAdminProposal message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ClearAdminProposal
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): cosmwasm.wasm.v1.ClearAdminProposal;

                /**
                 * Verifies a ClearAdminProposal message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ClearAdminProposal message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ClearAdminProposal
                 */
                public static fromObject(object: { [k: string]: any }): cosmwasm.wasm.v1.ClearAdminProposal;

                /**
                 * Creates a plain object from a ClearAdminProposal message. Also converts values to other types if specified.
                 * @param message ClearAdminProposal
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: cosmwasm.wasm.v1.ClearAdminProposal, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ClearAdminProposal to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a PinCodesProposal. */
            interface IPinCodesProposal {

                /** PinCodesProposal title */
                title?: (string|null);

                /** PinCodesProposal description */
                description?: (string|null);

                /** PinCodesProposal code_ids */
                code_ids?: (Long[]|null);
            }

            /** Represents a PinCodesProposal. */
            class PinCodesProposal implements IPinCodesProposal {

                /**
                 * Constructs a new PinCodesProposal.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: cosmwasm.wasm.v1.IPinCodesProposal);

                /** PinCodesProposal title. */
                public title: string;

                /** PinCodesProposal description. */
                public description: string;

                /** PinCodesProposal code_ids. */
                public code_ids: Long[];

                /**
                 * Encodes the specified PinCodesProposal message. Does not implicitly {@link cosmwasm.wasm.v1.PinCodesProposal.verify|verify} messages.
                 * @param message PinCodesProposal message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: cosmwasm.wasm.v1.IPinCodesProposal, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified PinCodesProposal message, length delimited. Does not implicitly {@link cosmwasm.wasm.v1.PinCodesProposal.verify|verify} messages.
                 * @param message PinCodesProposal message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: cosmwasm.wasm.v1.IPinCodesProposal, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a PinCodesProposal message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns PinCodesProposal
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): cosmwasm.wasm.v1.PinCodesProposal;

                /**
                 * Decodes a PinCodesProposal message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns PinCodesProposal
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): cosmwasm.wasm.v1.PinCodesProposal;

                /**
                 * Verifies a PinCodesProposal message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a PinCodesProposal message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns PinCodesProposal
                 */
                public static fromObject(object: { [k: string]: any }): cosmwasm.wasm.v1.PinCodesProposal;

                /**
                 * Creates a plain object from a PinCodesProposal message. Also converts values to other types if specified.
                 * @param message PinCodesProposal
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: cosmwasm.wasm.v1.PinCodesProposal, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this PinCodesProposal to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of an UnpinCodesProposal. */
            interface IUnpinCodesProposal {

                /** UnpinCodesProposal title */
                title?: (string|null);

                /** UnpinCodesProposal description */
                description?: (string|null);

                /** UnpinCodesProposal code_ids */
                code_ids?: (Long[]|null);
            }

            /** Represents an UnpinCodesProposal. */
            class UnpinCodesProposal implements IUnpinCodesProposal {

                /**
                 * Constructs a new UnpinCodesProposal.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: cosmwasm.wasm.v1.IUnpinCodesProposal);

                /** UnpinCodesProposal title. */
                public title: string;

                /** UnpinCodesProposal description. */
                public description: string;

                /** UnpinCodesProposal code_ids. */
                public code_ids: Long[];

                /**
                 * Encodes the specified UnpinCodesProposal message. Does not implicitly {@link cosmwasm.wasm.v1.UnpinCodesProposal.verify|verify} messages.
                 * @param message UnpinCodesProposal message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: cosmwasm.wasm.v1.IUnpinCodesProposal, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified UnpinCodesProposal message, length delimited. Does not implicitly {@link cosmwasm.wasm.v1.UnpinCodesProposal.verify|verify} messages.
                 * @param message UnpinCodesProposal message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: cosmwasm.wasm.v1.IUnpinCodesProposal, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an UnpinCodesProposal message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns UnpinCodesProposal
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): cosmwasm.wasm.v1.UnpinCodesProposal;

                /**
                 * Decodes an UnpinCodesProposal message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns UnpinCodesProposal
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): cosmwasm.wasm.v1.UnpinCodesProposal;

                /**
                 * Verifies an UnpinCodesProposal message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an UnpinCodesProposal message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns UnpinCodesProposal
                 */
                public static fromObject(object: { [k: string]: any }): cosmwasm.wasm.v1.UnpinCodesProposal;

                /**
                 * Creates a plain object from an UnpinCodesProposal message. Also converts values to other types if specified.
                 * @param message UnpinCodesProposal
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: cosmwasm.wasm.v1.UnpinCodesProposal, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this UnpinCodesProposal to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a MsgIBCSend. */
            interface IMsgIBCSend {

                /** MsgIBCSend channel */
                channel?: (string|null);

                /** MsgIBCSend timeout_height */
                timeout_height?: (Long|null);

                /** MsgIBCSend timeout_timestamp */
                timeout_timestamp?: (Long|null);

                /** MsgIBCSend data */
                data?: (Uint8Array|null);
            }

            /** Represents a MsgIBCSend. */
            class MsgIBCSend implements IMsgIBCSend {

                /**
                 * Constructs a new MsgIBCSend.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: cosmwasm.wasm.v1.IMsgIBCSend);

                /** MsgIBCSend channel. */
                public channel: string;

                /** MsgIBCSend timeout_height. */
                public timeout_height: Long;

                /** MsgIBCSend timeout_timestamp. */
                public timeout_timestamp: Long;

                /** MsgIBCSend data. */
                public data: Uint8Array;

                /**
                 * Encodes the specified MsgIBCSend message. Does not implicitly {@link cosmwasm.wasm.v1.MsgIBCSend.verify|verify} messages.
                 * @param message MsgIBCSend message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: cosmwasm.wasm.v1.IMsgIBCSend, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified MsgIBCSend message, length delimited. Does not implicitly {@link cosmwasm.wasm.v1.MsgIBCSend.verify|verify} messages.
                 * @param message MsgIBCSend message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: cosmwasm.wasm.v1.IMsgIBCSend, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a MsgIBCSend message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns MsgIBCSend
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): cosmwasm.wasm.v1.MsgIBCSend;

                /**
                 * Decodes a MsgIBCSend message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns MsgIBCSend
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): cosmwasm.wasm.v1.MsgIBCSend;

                /**
                 * Verifies a MsgIBCSend message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a MsgIBCSend message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns MsgIBCSend
                 */
                public static fromObject(object: { [k: string]: any }): cosmwasm.wasm.v1.MsgIBCSend;

                /**
                 * Creates a plain object from a MsgIBCSend message. Also converts values to other types if specified.
                 * @param message MsgIBCSend
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: cosmwasm.wasm.v1.MsgIBCSend, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this MsgIBCSend to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a MsgIBCCloseChannel. */
            interface IMsgIBCCloseChannel {

                /** MsgIBCCloseChannel channel */
                channel?: (string|null);
            }

            /** Represents a MsgIBCCloseChannel. */
            class MsgIBCCloseChannel implements IMsgIBCCloseChannel {

                /**
                 * Constructs a new MsgIBCCloseChannel.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: cosmwasm.wasm.v1.IMsgIBCCloseChannel);

                /** MsgIBCCloseChannel channel. */
                public channel: string;

                /**
                 * Encodes the specified MsgIBCCloseChannel message. Does not implicitly {@link cosmwasm.wasm.v1.MsgIBCCloseChannel.verify|verify} messages.
                 * @param message MsgIBCCloseChannel message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: cosmwasm.wasm.v1.IMsgIBCCloseChannel, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified MsgIBCCloseChannel message, length delimited. Does not implicitly {@link cosmwasm.wasm.v1.MsgIBCCloseChannel.verify|verify} messages.
                 * @param message MsgIBCCloseChannel message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: cosmwasm.wasm.v1.IMsgIBCCloseChannel, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a MsgIBCCloseChannel message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns MsgIBCCloseChannel
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): cosmwasm.wasm.v1.MsgIBCCloseChannel;

                /**
                 * Decodes a MsgIBCCloseChannel message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns MsgIBCCloseChannel
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): cosmwasm.wasm.v1.MsgIBCCloseChannel;

                /**
                 * Verifies a MsgIBCCloseChannel message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a MsgIBCCloseChannel message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns MsgIBCCloseChannel
                 */
                public static fromObject(object: { [k: string]: any }): cosmwasm.wasm.v1.MsgIBCCloseChannel;

                /**
                 * Creates a plain object from a MsgIBCCloseChannel message. Also converts values to other types if specified.
                 * @param message MsgIBCCloseChannel
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: cosmwasm.wasm.v1.MsgIBCCloseChannel, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this MsgIBCCloseChannel to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }
    }
}

/** Namespace google. */
export namespace google {

    /** Namespace protobuf. */
    namespace protobuf {

        /** Properties of a FileDescriptorSet. */
        interface IFileDescriptorSet {

            /** FileDescriptorSet file */
            file?: (google.protobuf.IFileDescriptorProto[]|null);
        }

        /** Represents a FileDescriptorSet. */
        class FileDescriptorSet implements IFileDescriptorSet {

            /**
             * Constructs a new FileDescriptorSet.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFileDescriptorSet);

            /** FileDescriptorSet file. */
            public file: google.protobuf.IFileDescriptorProto[];

            /**
             * Encodes the specified FileDescriptorSet message. Does not implicitly {@link google.protobuf.FileDescriptorSet.verify|verify} messages.
             * @param message FileDescriptorSet message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFileDescriptorSet, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FileDescriptorSet message, length delimited. Does not implicitly {@link google.protobuf.FileDescriptorSet.verify|verify} messages.
             * @param message FileDescriptorSet message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFileDescriptorSet, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FileDescriptorSet message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FileDescriptorSet
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FileDescriptorSet;

            /**
             * Decodes a FileDescriptorSet message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FileDescriptorSet
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FileDescriptorSet;

            /**
             * Verifies a FileDescriptorSet message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FileDescriptorSet message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FileDescriptorSet
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FileDescriptorSet;

            /**
             * Creates a plain object from a FileDescriptorSet message. Also converts values to other types if specified.
             * @param message FileDescriptorSet
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FileDescriptorSet, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FileDescriptorSet to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a FileDescriptorProto. */
        interface IFileDescriptorProto {

            /** FileDescriptorProto name */
            name?: (string|null);

            /** FileDescriptorProto package */
            "package"?: (string|null);

            /** FileDescriptorProto dependency */
            dependency?: (string[]|null);

            /** FileDescriptorProto public_dependency */
            public_dependency?: (number[]|null);

            /** FileDescriptorProto weak_dependency */
            weak_dependency?: (number[]|null);

            /** FileDescriptorProto message_type */
            message_type?: (google.protobuf.IDescriptorProto[]|null);

            /** FileDescriptorProto enum_type */
            enum_type?: (google.protobuf.IEnumDescriptorProto[]|null);

            /** FileDescriptorProto service */
            service?: (google.protobuf.IServiceDescriptorProto[]|null);

            /** FileDescriptorProto extension */
            extension?: (google.protobuf.IFieldDescriptorProto[]|null);

            /** FileDescriptorProto options */
            options?: (google.protobuf.IFileOptions|null);

            /** FileDescriptorProto source_code_info */
            source_code_info?: (google.protobuf.ISourceCodeInfo|null);

            /** FileDescriptorProto syntax */
            syntax?: (string|null);
        }

        /** Represents a FileDescriptorProto. */
        class FileDescriptorProto implements IFileDescriptorProto {

            /**
             * Constructs a new FileDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFileDescriptorProto);

            /** FileDescriptorProto name. */
            public name: string;

            /** FileDescriptorProto package. */
            public package: string;

            /** FileDescriptorProto dependency. */
            public dependency: string[];

            /** FileDescriptorProto public_dependency. */
            public public_dependency: number[];

            /** FileDescriptorProto weak_dependency. */
            public weak_dependency: number[];

            /** FileDescriptorProto message_type. */
            public message_type: google.protobuf.IDescriptorProto[];

            /** FileDescriptorProto enum_type. */
            public enum_type: google.protobuf.IEnumDescriptorProto[];

            /** FileDescriptorProto service. */
            public service: google.protobuf.IServiceDescriptorProto[];

            /** FileDescriptorProto extension. */
            public extension: google.protobuf.IFieldDescriptorProto[];

            /** FileDescriptorProto options. */
            public options?: (google.protobuf.IFileOptions|null);

            /** FileDescriptorProto source_code_info. */
            public source_code_info?: (google.protobuf.ISourceCodeInfo|null);

            /** FileDescriptorProto syntax. */
            public syntax: string;

            /**
             * Encodes the specified FileDescriptorProto message. Does not implicitly {@link google.protobuf.FileDescriptorProto.verify|verify} messages.
             * @param message FileDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFileDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FileDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.FileDescriptorProto.verify|verify} messages.
             * @param message FileDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFileDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FileDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FileDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FileDescriptorProto;

            /**
             * Decodes a FileDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FileDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FileDescriptorProto;

            /**
             * Verifies a FileDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FileDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FileDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FileDescriptorProto;

            /**
             * Creates a plain object from a FileDescriptorProto message. Also converts values to other types if specified.
             * @param message FileDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FileDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FileDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a DescriptorProto. */
        interface IDescriptorProto {

            /** DescriptorProto name */
            name?: (string|null);

            /** DescriptorProto field */
            field?: (google.protobuf.IFieldDescriptorProto[]|null);

            /** DescriptorProto extension */
            extension?: (google.protobuf.IFieldDescriptorProto[]|null);

            /** DescriptorProto nested_type */
            nested_type?: (google.protobuf.IDescriptorProto[]|null);

            /** DescriptorProto enum_type */
            enum_type?: (google.protobuf.IEnumDescriptorProto[]|null);

            /** DescriptorProto extension_range */
            extension_range?: (google.protobuf.DescriptorProto.IExtensionRange[]|null);

            /** DescriptorProto oneof_decl */
            oneof_decl?: (google.protobuf.IOneofDescriptorProto[]|null);

            /** DescriptorProto options */
            options?: (google.protobuf.IMessageOptions|null);

            /** DescriptorProto reserved_range */
            reserved_range?: (google.protobuf.DescriptorProto.IReservedRange[]|null);

            /** DescriptorProto reserved_name */
            reserved_name?: (string[]|null);
        }

        /** Represents a DescriptorProto. */
        class DescriptorProto implements IDescriptorProto {

            /**
             * Constructs a new DescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IDescriptorProto);

            /** DescriptorProto name. */
            public name: string;

            /** DescriptorProto field. */
            public field: google.protobuf.IFieldDescriptorProto[];

            /** DescriptorProto extension. */
            public extension: google.protobuf.IFieldDescriptorProto[];

            /** DescriptorProto nested_type. */
            public nested_type: google.protobuf.IDescriptorProto[];

            /** DescriptorProto enum_type. */
            public enum_type: google.protobuf.IEnumDescriptorProto[];

            /** DescriptorProto extension_range. */
            public extension_range: google.protobuf.DescriptorProto.IExtensionRange[];

            /** DescriptorProto oneof_decl. */
            public oneof_decl: google.protobuf.IOneofDescriptorProto[];

            /** DescriptorProto options. */
            public options?: (google.protobuf.IMessageOptions|null);

            /** DescriptorProto reserved_range. */
            public reserved_range: google.protobuf.DescriptorProto.IReservedRange[];

            /** DescriptorProto reserved_name. */
            public reserved_name: string[];

            /**
             * Encodes the specified DescriptorProto message. Does not implicitly {@link google.protobuf.DescriptorProto.verify|verify} messages.
             * @param message DescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.verify|verify} messages.
             * @param message DescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.DescriptorProto;

            /**
             * Decodes a DescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.DescriptorProto;

            /**
             * Verifies a DescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.DescriptorProto;

            /**
             * Creates a plain object from a DescriptorProto message. Also converts values to other types if specified.
             * @param message DescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.DescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace DescriptorProto {

            /** Properties of an ExtensionRange. */
            interface IExtensionRange {

                /** ExtensionRange start */
                start?: (number|null);

                /** ExtensionRange end */
                end?: (number|null);
            }

            /** Represents an ExtensionRange. */
            class ExtensionRange implements IExtensionRange {

                /**
                 * Constructs a new ExtensionRange.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.DescriptorProto.IExtensionRange);

                /** ExtensionRange start. */
                public start: number;

                /** ExtensionRange end. */
                public end: number;

                /**
                 * Encodes the specified ExtensionRange message. Does not implicitly {@link google.protobuf.DescriptorProto.ExtensionRange.verify|verify} messages.
                 * @param message ExtensionRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.DescriptorProto.IExtensionRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ExtensionRange message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.ExtensionRange.verify|verify} messages.
                 * @param message ExtensionRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.DescriptorProto.IExtensionRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an ExtensionRange message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ExtensionRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.DescriptorProto.ExtensionRange;

                /**
                 * Decodes an ExtensionRange message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ExtensionRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.DescriptorProto.ExtensionRange;

                /**
                 * Verifies an ExtensionRange message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an ExtensionRange message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ExtensionRange
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.DescriptorProto.ExtensionRange;

                /**
                 * Creates a plain object from an ExtensionRange message. Also converts values to other types if specified.
                 * @param message ExtensionRange
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.DescriptorProto.ExtensionRange, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ExtensionRange to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a ReservedRange. */
            interface IReservedRange {

                /** ReservedRange start */
                start?: (number|null);

                /** ReservedRange end */
                end?: (number|null);
            }

            /** Represents a ReservedRange. */
            class ReservedRange implements IReservedRange {

                /**
                 * Constructs a new ReservedRange.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.DescriptorProto.IReservedRange);

                /** ReservedRange start. */
                public start: number;

                /** ReservedRange end. */
                public end: number;

                /**
                 * Encodes the specified ReservedRange message. Does not implicitly {@link google.protobuf.DescriptorProto.ReservedRange.verify|verify} messages.
                 * @param message ReservedRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.DescriptorProto.IReservedRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ReservedRange message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.ReservedRange.verify|verify} messages.
                 * @param message ReservedRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.DescriptorProto.IReservedRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ReservedRange message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ReservedRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.DescriptorProto.ReservedRange;

                /**
                 * Decodes a ReservedRange message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ReservedRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.DescriptorProto.ReservedRange;

                /**
                 * Verifies a ReservedRange message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ReservedRange message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ReservedRange
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.DescriptorProto.ReservedRange;

                /**
                 * Creates a plain object from a ReservedRange message. Also converts values to other types if specified.
                 * @param message ReservedRange
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.DescriptorProto.ReservedRange, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ReservedRange to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of a FieldDescriptorProto. */
        interface IFieldDescriptorProto {

            /** FieldDescriptorProto name */
            name?: (string|null);

            /** FieldDescriptorProto number */
            number?: (number|null);

            /** FieldDescriptorProto label */
            label?: (google.protobuf.FieldDescriptorProto.Label|null);

            /** FieldDescriptorProto type */
            type?: (google.protobuf.FieldDescriptorProto.Type|null);

            /** FieldDescriptorProto type_name */
            type_name?: (string|null);

            /** FieldDescriptorProto extendee */
            extendee?: (string|null);

            /** FieldDescriptorProto default_value */
            default_value?: (string|null);

            /** FieldDescriptorProto oneof_index */
            oneof_index?: (number|null);

            /** FieldDescriptorProto json_name */
            json_name?: (string|null);

            /** FieldDescriptorProto options */
            options?: (google.protobuf.IFieldOptions|null);
        }

        /** Represents a FieldDescriptorProto. */
        class FieldDescriptorProto implements IFieldDescriptorProto {

            /**
             * Constructs a new FieldDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFieldDescriptorProto);

            /** FieldDescriptorProto name. */
            public name: string;

            /** FieldDescriptorProto number. */
            public number: number;

            /** FieldDescriptorProto label. */
            public label: google.protobuf.FieldDescriptorProto.Label;

            /** FieldDescriptorProto type. */
            public type: google.protobuf.FieldDescriptorProto.Type;

            /** FieldDescriptorProto type_name. */
            public type_name: string;

            /** FieldDescriptorProto extendee. */
            public extendee: string;

            /** FieldDescriptorProto default_value. */
            public default_value: string;

            /** FieldDescriptorProto oneof_index. */
            public oneof_index: number;

            /** FieldDescriptorProto json_name. */
            public json_name: string;

            /** FieldDescriptorProto options. */
            public options?: (google.protobuf.IFieldOptions|null);

            /**
             * Encodes the specified FieldDescriptorProto message. Does not implicitly {@link google.protobuf.FieldDescriptorProto.verify|verify} messages.
             * @param message FieldDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFieldDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FieldDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.FieldDescriptorProto.verify|verify} messages.
             * @param message FieldDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFieldDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FieldDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FieldDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FieldDescriptorProto;

            /**
             * Decodes a FieldDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FieldDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FieldDescriptorProto;

            /**
             * Verifies a FieldDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FieldDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FieldDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FieldDescriptorProto;

            /**
             * Creates a plain object from a FieldDescriptorProto message. Also converts values to other types if specified.
             * @param message FieldDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FieldDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FieldDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace FieldDescriptorProto {

            /** Type enum. */
            enum Type {
                TYPE_DOUBLE = 1,
                TYPE_FLOAT = 2,
                TYPE_INT64 = 3,
                TYPE_UINT64 = 4,
                TYPE_INT32 = 5,
                TYPE_FIXED64 = 6,
                TYPE_FIXED32 = 7,
                TYPE_BOOL = 8,
                TYPE_STRING = 9,
                TYPE_GROUP = 10,
                TYPE_MESSAGE = 11,
                TYPE_BYTES = 12,
                TYPE_UINT32 = 13,
                TYPE_ENUM = 14,
                TYPE_SFIXED32 = 15,
                TYPE_SFIXED64 = 16,
                TYPE_SINT32 = 17,
                TYPE_SINT64 = 18
            }

            /** Label enum. */
            enum Label {
                LABEL_OPTIONAL = 1,
                LABEL_REQUIRED = 2,
                LABEL_REPEATED = 3
            }
        }

        /** Properties of an OneofDescriptorProto. */
        interface IOneofDescriptorProto {

            /** OneofDescriptorProto name */
            name?: (string|null);

            /** OneofDescriptorProto options */
            options?: (google.protobuf.IOneofOptions|null);
        }

        /** Represents an OneofDescriptorProto. */
        class OneofDescriptorProto implements IOneofDescriptorProto {

            /**
             * Constructs a new OneofDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IOneofDescriptorProto);

            /** OneofDescriptorProto name. */
            public name: string;

            /** OneofDescriptorProto options. */
            public options?: (google.protobuf.IOneofOptions|null);

            /**
             * Encodes the specified OneofDescriptorProto message. Does not implicitly {@link google.protobuf.OneofDescriptorProto.verify|verify} messages.
             * @param message OneofDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IOneofDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified OneofDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.OneofDescriptorProto.verify|verify} messages.
             * @param message OneofDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IOneofDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an OneofDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns OneofDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.OneofDescriptorProto;

            /**
             * Decodes an OneofDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns OneofDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.OneofDescriptorProto;

            /**
             * Verifies an OneofDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an OneofDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns OneofDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.OneofDescriptorProto;

            /**
             * Creates a plain object from an OneofDescriptorProto message. Also converts values to other types if specified.
             * @param message OneofDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.OneofDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this OneofDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an EnumDescriptorProto. */
        interface IEnumDescriptorProto {

            /** EnumDescriptorProto name */
            name?: (string|null);

            /** EnumDescriptorProto value */
            value?: (google.protobuf.IEnumValueDescriptorProto[]|null);

            /** EnumDescriptorProto options */
            options?: (google.protobuf.IEnumOptions|null);
        }

        /** Represents an EnumDescriptorProto. */
        class EnumDescriptorProto implements IEnumDescriptorProto {

            /**
             * Constructs a new EnumDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumDescriptorProto);

            /** EnumDescriptorProto name. */
            public name: string;

            /** EnumDescriptorProto value. */
            public value: google.protobuf.IEnumValueDescriptorProto[];

            /** EnumDescriptorProto options. */
            public options?: (google.protobuf.IEnumOptions|null);

            /**
             * Encodes the specified EnumDescriptorProto message. Does not implicitly {@link google.protobuf.EnumDescriptorProto.verify|verify} messages.
             * @param message EnumDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.EnumDescriptorProto.verify|verify} messages.
             * @param message EnumDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEnumDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumDescriptorProto;

            /**
             * Decodes an EnumDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EnumDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumDescriptorProto;

            /**
             * Verifies an EnumDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumDescriptorProto;

            /**
             * Creates a plain object from an EnumDescriptorProto message. Also converts values to other types if specified.
             * @param message EnumDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.EnumDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an EnumValueDescriptorProto. */
        interface IEnumValueDescriptorProto {

            /** EnumValueDescriptorProto name */
            name?: (string|null);

            /** EnumValueDescriptorProto number */
            number?: (number|null);

            /** EnumValueDescriptorProto options */
            options?: (google.protobuf.IEnumValueOptions|null);
        }

        /** Represents an EnumValueDescriptorProto. */
        class EnumValueDescriptorProto implements IEnumValueDescriptorProto {

            /**
             * Constructs a new EnumValueDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumValueDescriptorProto);

            /** EnumValueDescriptorProto name. */
            public name: string;

            /** EnumValueDescriptorProto number. */
            public number: number;

            /** EnumValueDescriptorProto options. */
            public options?: (google.protobuf.IEnumValueOptions|null);

            /**
             * Encodes the specified EnumValueDescriptorProto message. Does not implicitly {@link google.protobuf.EnumValueDescriptorProto.verify|verify} messages.
             * @param message EnumValueDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumValueDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumValueDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.EnumValueDescriptorProto.verify|verify} messages.
             * @param message EnumValueDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEnumValueDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumValueDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumValueDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumValueDescriptorProto;

            /**
             * Decodes an EnumValueDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EnumValueDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumValueDescriptorProto;

            /**
             * Verifies an EnumValueDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumValueDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumValueDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumValueDescriptorProto;

            /**
             * Creates a plain object from an EnumValueDescriptorProto message. Also converts values to other types if specified.
             * @param message EnumValueDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.EnumValueDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumValueDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ServiceDescriptorProto. */
        interface IServiceDescriptorProto {

            /** ServiceDescriptorProto name */
            name?: (string|null);

            /** ServiceDescriptorProto method */
            method?: (google.protobuf.IMethodDescriptorProto[]|null);

            /** ServiceDescriptorProto options */
            options?: (google.protobuf.IServiceOptions|null);
        }

        /** Represents a ServiceDescriptorProto. */
        class ServiceDescriptorProto implements IServiceDescriptorProto {

            /**
             * Constructs a new ServiceDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IServiceDescriptorProto);

            /** ServiceDescriptorProto name. */
            public name: string;

            /** ServiceDescriptorProto method. */
            public method: google.protobuf.IMethodDescriptorProto[];

            /** ServiceDescriptorProto options. */
            public options?: (google.protobuf.IServiceOptions|null);

            /**
             * Encodes the specified ServiceDescriptorProto message. Does not implicitly {@link google.protobuf.ServiceDescriptorProto.verify|verify} messages.
             * @param message ServiceDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IServiceDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ServiceDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.ServiceDescriptorProto.verify|verify} messages.
             * @param message ServiceDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IServiceDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ServiceDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ServiceDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.ServiceDescriptorProto;

            /**
             * Decodes a ServiceDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ServiceDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.ServiceDescriptorProto;

            /**
             * Verifies a ServiceDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ServiceDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ServiceDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.ServiceDescriptorProto;

            /**
             * Creates a plain object from a ServiceDescriptorProto message. Also converts values to other types if specified.
             * @param message ServiceDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.ServiceDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ServiceDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MethodDescriptorProto. */
        interface IMethodDescriptorProto {

            /** MethodDescriptorProto name */
            name?: (string|null);

            /** MethodDescriptorProto input_type */
            input_type?: (string|null);

            /** MethodDescriptorProto output_type */
            output_type?: (string|null);

            /** MethodDescriptorProto options */
            options?: (google.protobuf.IMethodOptions|null);

            /** MethodDescriptorProto client_streaming */
            client_streaming?: (boolean|null);

            /** MethodDescriptorProto server_streaming */
            server_streaming?: (boolean|null);
        }

        /** Represents a MethodDescriptorProto. */
        class MethodDescriptorProto implements IMethodDescriptorProto {

            /**
             * Constructs a new MethodDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IMethodDescriptorProto);

            /** MethodDescriptorProto name. */
            public name: string;

            /** MethodDescriptorProto input_type. */
            public input_type: string;

            /** MethodDescriptorProto output_type. */
            public output_type: string;

            /** MethodDescriptorProto options. */
            public options?: (google.protobuf.IMethodOptions|null);

            /** MethodDescriptorProto client_streaming. */
            public client_streaming: boolean;

            /** MethodDescriptorProto server_streaming. */
            public server_streaming: boolean;

            /**
             * Encodes the specified MethodDescriptorProto message. Does not implicitly {@link google.protobuf.MethodDescriptorProto.verify|verify} messages.
             * @param message MethodDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IMethodDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MethodDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.MethodDescriptorProto.verify|verify} messages.
             * @param message MethodDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IMethodDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MethodDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MethodDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.MethodDescriptorProto;

            /**
             * Decodes a MethodDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MethodDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.MethodDescriptorProto;

            /**
             * Verifies a MethodDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MethodDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MethodDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.MethodDescriptorProto;

            /**
             * Creates a plain object from a MethodDescriptorProto message. Also converts values to other types if specified.
             * @param message MethodDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.MethodDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MethodDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a FileOptions. */
        interface IFileOptions {

            /** FileOptions java_package */
            java_package?: (string|null);

            /** FileOptions java_outer_classname */
            java_outer_classname?: (string|null);

            /** FileOptions java_multiple_files */
            java_multiple_files?: (boolean|null);

            /** FileOptions java_generate_equals_and_hash */
            java_generate_equals_and_hash?: (boolean|null);

            /** FileOptions java_string_check_utf8 */
            java_string_check_utf8?: (boolean|null);

            /** FileOptions optimize_for */
            optimize_for?: (google.protobuf.FileOptions.OptimizeMode|null);

            /** FileOptions go_package */
            go_package?: (string|null);

            /** FileOptions cc_generic_services */
            cc_generic_services?: (boolean|null);

            /** FileOptions java_generic_services */
            java_generic_services?: (boolean|null);

            /** FileOptions py_generic_services */
            py_generic_services?: (boolean|null);

            /** FileOptions deprecated */
            deprecated?: (boolean|null);

            /** FileOptions cc_enable_arenas */
            cc_enable_arenas?: (boolean|null);

            /** FileOptions objc_class_prefix */
            objc_class_prefix?: (string|null);

            /** FileOptions csharp_namespace */
            csharp_namespace?: (string|null);

            /** FileOptions uninterpreted_option */
            uninterpreted_option?: (google.protobuf.IUninterpretedOption[]|null);

            /** FileOptions .gogoproto.goproto_getters_all */
            ".gogoproto.goproto_getters_all"?: (boolean|null);

            /** FileOptions .gogoproto.goproto_enum_prefix_all */
            ".gogoproto.goproto_enum_prefix_all"?: (boolean|null);

            /** FileOptions .gogoproto.goproto_stringer_all */
            ".gogoproto.goproto_stringer_all"?: (boolean|null);

            /** FileOptions .gogoproto.verbose_equal_all */
            ".gogoproto.verbose_equal_all"?: (boolean|null);

            /** FileOptions .gogoproto.face_all */
            ".gogoproto.face_all"?: (boolean|null);

            /** FileOptions .gogoproto.gostring_all */
            ".gogoproto.gostring_all"?: (boolean|null);

            /** FileOptions .gogoproto.populate_all */
            ".gogoproto.populate_all"?: (boolean|null);

            /** FileOptions .gogoproto.stringer_all */
            ".gogoproto.stringer_all"?: (boolean|null);

            /** FileOptions .gogoproto.onlyone_all */
            ".gogoproto.onlyone_all"?: (boolean|null);

            /** FileOptions .gogoproto.equal_all */
            ".gogoproto.equal_all"?: (boolean|null);

            /** FileOptions .gogoproto.description_all */
            ".gogoproto.description_all"?: (boolean|null);

            /** FileOptions .gogoproto.testgen_all */
            ".gogoproto.testgen_all"?: (boolean|null);

            /** FileOptions .gogoproto.benchgen_all */
            ".gogoproto.benchgen_all"?: (boolean|null);

            /** FileOptions .gogoproto.marshaler_all */
            ".gogoproto.marshaler_all"?: (boolean|null);

            /** FileOptions .gogoproto.unmarshaler_all */
            ".gogoproto.unmarshaler_all"?: (boolean|null);

            /** FileOptions .gogoproto.stable_marshaler_all */
            ".gogoproto.stable_marshaler_all"?: (boolean|null);

            /** FileOptions .gogoproto.sizer_all */
            ".gogoproto.sizer_all"?: (boolean|null);

            /** FileOptions .gogoproto.goproto_enum_stringer_all */
            ".gogoproto.goproto_enum_stringer_all"?: (boolean|null);

            /** FileOptions .gogoproto.enum_stringer_all */
            ".gogoproto.enum_stringer_all"?: (boolean|null);

            /** FileOptions .gogoproto.unsafe_marshaler_all */
            ".gogoproto.unsafe_marshaler_all"?: (boolean|null);

            /** FileOptions .gogoproto.unsafe_unmarshaler_all */
            ".gogoproto.unsafe_unmarshaler_all"?: (boolean|null);

            /** FileOptions .gogoproto.goproto_extensions_map_all */
            ".gogoproto.goproto_extensions_map_all"?: (boolean|null);

            /** FileOptions .gogoproto.goproto_unrecognized_all */
            ".gogoproto.goproto_unrecognized_all"?: (boolean|null);

            /** FileOptions .gogoproto.gogoproto_import */
            ".gogoproto.gogoproto_import"?: (boolean|null);

            /** FileOptions .gogoproto.protosizer_all */
            ".gogoproto.protosizer_all"?: (boolean|null);

            /** FileOptions .gogoproto.compare_all */
            ".gogoproto.compare_all"?: (boolean|null);

            /** FileOptions .gogoproto.typedecl_all */
            ".gogoproto.typedecl_all"?: (boolean|null);

            /** FileOptions .gogoproto.enumdecl_all */
            ".gogoproto.enumdecl_all"?: (boolean|null);

            /** FileOptions .gogoproto.goproto_registration */
            ".gogoproto.goproto_registration"?: (boolean|null);

            /** FileOptions .gogoproto.messagename_all */
            ".gogoproto.messagename_all"?: (boolean|null);

            /** FileOptions .gogoproto.goproto_sizecache_all */
            ".gogoproto.goproto_sizecache_all"?: (boolean|null);

            /** FileOptions .gogoproto.goproto_unkeyed_all */
            ".gogoproto.goproto_unkeyed_all"?: (boolean|null);
        }

        /** Represents a FileOptions. */
        class FileOptions implements IFileOptions {

            /**
             * Constructs a new FileOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFileOptions);

            /** FileOptions java_package. */
            public java_package: string;

            /** FileOptions java_outer_classname. */
            public java_outer_classname: string;

            /** FileOptions java_multiple_files. */
            public java_multiple_files: boolean;

            /** FileOptions java_generate_equals_and_hash. */
            public java_generate_equals_and_hash: boolean;

            /** FileOptions java_string_check_utf8. */
            public java_string_check_utf8: boolean;

            /** FileOptions optimize_for. */
            public optimize_for: google.protobuf.FileOptions.OptimizeMode;

            /** FileOptions go_package. */
            public go_package: string;

            /** FileOptions cc_generic_services. */
            public cc_generic_services: boolean;

            /** FileOptions java_generic_services. */
            public java_generic_services: boolean;

            /** FileOptions py_generic_services. */
            public py_generic_services: boolean;

            /** FileOptions deprecated. */
            public deprecated: boolean;

            /** FileOptions cc_enable_arenas. */
            public cc_enable_arenas: boolean;

            /** FileOptions objc_class_prefix. */
            public objc_class_prefix: string;

            /** FileOptions csharp_namespace. */
            public csharp_namespace: string;

            /** FileOptions uninterpreted_option. */
            public uninterpreted_option: google.protobuf.IUninterpretedOption[];

            /**
             * Encodes the specified FileOptions message. Does not implicitly {@link google.protobuf.FileOptions.verify|verify} messages.
             * @param message FileOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFileOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FileOptions message, length delimited. Does not implicitly {@link google.protobuf.FileOptions.verify|verify} messages.
             * @param message FileOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFileOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FileOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FileOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FileOptions;

            /**
             * Decodes a FileOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FileOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FileOptions;

            /**
             * Verifies a FileOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FileOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FileOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FileOptions;

            /**
             * Creates a plain object from a FileOptions message. Also converts values to other types if specified.
             * @param message FileOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FileOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FileOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace FileOptions {

            /** OptimizeMode enum. */
            enum OptimizeMode {
                SPEED = 1,
                CODE_SIZE = 2,
                LITE_RUNTIME = 3
            }
        }

        /** Properties of a MessageOptions. */
        interface IMessageOptions {

            /** MessageOptions message_set_wire_format */
            message_set_wire_format?: (boolean|null);

            /** MessageOptions no_standard_descriptor_accessor */
            no_standard_descriptor_accessor?: (boolean|null);

            /** MessageOptions deprecated */
            deprecated?: (boolean|null);

            /** MessageOptions map_entry */
            map_entry?: (boolean|null);

            /** MessageOptions uninterpreted_option */
            uninterpreted_option?: (google.protobuf.IUninterpretedOption[]|null);

            /** MessageOptions .gogoproto.goproto_getters */
            ".gogoproto.goproto_getters"?: (boolean|null);

            /** MessageOptions .gogoproto.goproto_stringer */
            ".gogoproto.goproto_stringer"?: (boolean|null);

            /** MessageOptions .gogoproto.verbose_equal */
            ".gogoproto.verbose_equal"?: (boolean|null);

            /** MessageOptions .gogoproto.face */
            ".gogoproto.face"?: (boolean|null);

            /** MessageOptions .gogoproto.gostring */
            ".gogoproto.gostring"?: (boolean|null);

            /** MessageOptions .gogoproto.populate */
            ".gogoproto.populate"?: (boolean|null);

            /** MessageOptions .gogoproto.stringer */
            ".gogoproto.stringer"?: (boolean|null);

            /** MessageOptions .gogoproto.onlyone */
            ".gogoproto.onlyone"?: (boolean|null);

            /** MessageOptions .gogoproto.equal */
            ".gogoproto.equal"?: (boolean|null);

            /** MessageOptions .gogoproto.description */
            ".gogoproto.description"?: (boolean|null);

            /** MessageOptions .gogoproto.testgen */
            ".gogoproto.testgen"?: (boolean|null);

            /** MessageOptions .gogoproto.benchgen */
            ".gogoproto.benchgen"?: (boolean|null);

            /** MessageOptions .gogoproto.marshaler */
            ".gogoproto.marshaler"?: (boolean|null);

            /** MessageOptions .gogoproto.unmarshaler */
            ".gogoproto.unmarshaler"?: (boolean|null);

            /** MessageOptions .gogoproto.stable_marshaler */
            ".gogoproto.stable_marshaler"?: (boolean|null);

            /** MessageOptions .gogoproto.sizer */
            ".gogoproto.sizer"?: (boolean|null);

            /** MessageOptions .gogoproto.unsafe_marshaler */
            ".gogoproto.unsafe_marshaler"?: (boolean|null);

            /** MessageOptions .gogoproto.unsafe_unmarshaler */
            ".gogoproto.unsafe_unmarshaler"?: (boolean|null);

            /** MessageOptions .gogoproto.goproto_extensions_map */
            ".gogoproto.goproto_extensions_map"?: (boolean|null);

            /** MessageOptions .gogoproto.goproto_unrecognized */
            ".gogoproto.goproto_unrecognized"?: (boolean|null);

            /** MessageOptions .gogoproto.protosizer */
            ".gogoproto.protosizer"?: (boolean|null);

            /** MessageOptions .gogoproto.compare */
            ".gogoproto.compare"?: (boolean|null);

            /** MessageOptions .gogoproto.typedecl */
            ".gogoproto.typedecl"?: (boolean|null);

            /** MessageOptions .gogoproto.messagename */
            ".gogoproto.messagename"?: (boolean|null);

            /** MessageOptions .gogoproto.goproto_sizecache */
            ".gogoproto.goproto_sizecache"?: (boolean|null);

            /** MessageOptions .gogoproto.goproto_unkeyed */
            ".gogoproto.goproto_unkeyed"?: (boolean|null);

            /** MessageOptions .cosmos_proto.interface_type */
            ".cosmos_proto.interface_type"?: (string|null);

            /** MessageOptions .cosmos_proto.implements_interface */
            ".cosmos_proto.implements_interface"?: (string|null);
        }

        /** Represents a MessageOptions. */
        class MessageOptions implements IMessageOptions {

            /**
             * Constructs a new MessageOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IMessageOptions);

            /** MessageOptions message_set_wire_format. */
            public message_set_wire_format: boolean;

            /** MessageOptions no_standard_descriptor_accessor. */
            public no_standard_descriptor_accessor: boolean;

            /** MessageOptions deprecated. */
            public deprecated: boolean;

            /** MessageOptions map_entry. */
            public map_entry: boolean;

            /** MessageOptions uninterpreted_option. */
            public uninterpreted_option: google.protobuf.IUninterpretedOption[];

            /**
             * Encodes the specified MessageOptions message. Does not implicitly {@link google.protobuf.MessageOptions.verify|verify} messages.
             * @param message MessageOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IMessageOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MessageOptions message, length delimited. Does not implicitly {@link google.protobuf.MessageOptions.verify|verify} messages.
             * @param message MessageOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IMessageOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MessageOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MessageOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.MessageOptions;

            /**
             * Decodes a MessageOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MessageOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.MessageOptions;

            /**
             * Verifies a MessageOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MessageOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MessageOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.MessageOptions;

            /**
             * Creates a plain object from a MessageOptions message. Also converts values to other types if specified.
             * @param message MessageOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.MessageOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MessageOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a FieldOptions. */
        interface IFieldOptions {

            /** FieldOptions ctype */
            ctype?: (google.protobuf.FieldOptions.CType|null);

            /** FieldOptions packed */
            packed?: (boolean|null);

            /** FieldOptions jstype */
            jstype?: (google.protobuf.FieldOptions.JSType|null);

            /** FieldOptions lazy */
            lazy?: (boolean|null);

            /** FieldOptions deprecated */
            deprecated?: (boolean|null);

            /** FieldOptions weak */
            weak?: (boolean|null);

            /** FieldOptions uninterpreted_option */
            uninterpreted_option?: (google.protobuf.IUninterpretedOption[]|null);

            /** FieldOptions .gogoproto.nullable */
            ".gogoproto.nullable"?: (boolean|null);

            /** FieldOptions .gogoproto.embed */
            ".gogoproto.embed"?: (boolean|null);

            /** FieldOptions .gogoproto.customtype */
            ".gogoproto.customtype"?: (string|null);

            /** FieldOptions .gogoproto.customname */
            ".gogoproto.customname"?: (string|null);

            /** FieldOptions .gogoproto.jsontag */
            ".gogoproto.jsontag"?: (string|null);

            /** FieldOptions .gogoproto.moretags */
            ".gogoproto.moretags"?: (string|null);

            /** FieldOptions .gogoproto.casttype */
            ".gogoproto.casttype"?: (string|null);

            /** FieldOptions .gogoproto.castkey */
            ".gogoproto.castkey"?: (string|null);

            /** FieldOptions .gogoproto.castvalue */
            ".gogoproto.castvalue"?: (string|null);

            /** FieldOptions .gogoproto.stdtime */
            ".gogoproto.stdtime"?: (boolean|null);

            /** FieldOptions .gogoproto.stdduration */
            ".gogoproto.stdduration"?: (boolean|null);

            /** FieldOptions .gogoproto.wktpointer */
            ".gogoproto.wktpointer"?: (boolean|null);

            /** FieldOptions .gogoproto.castrepeated */
            ".gogoproto.castrepeated"?: (string|null);

            /** FieldOptions .cosmos_proto.accepts_interface */
            ".cosmos_proto.accepts_interface"?: (string|null);
        }

        /** Represents a FieldOptions. */
        class FieldOptions implements IFieldOptions {

            /**
             * Constructs a new FieldOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFieldOptions);

            /** FieldOptions ctype. */
            public ctype: google.protobuf.FieldOptions.CType;

            /** FieldOptions packed. */
            public packed: boolean;

            /** FieldOptions jstype. */
            public jstype: google.protobuf.FieldOptions.JSType;

            /** FieldOptions lazy. */
            public lazy: boolean;

            /** FieldOptions deprecated. */
            public deprecated: boolean;

            /** FieldOptions weak. */
            public weak: boolean;

            /** FieldOptions uninterpreted_option. */
            public uninterpreted_option: google.protobuf.IUninterpretedOption[];

            /**
             * Encodes the specified FieldOptions message. Does not implicitly {@link google.protobuf.FieldOptions.verify|verify} messages.
             * @param message FieldOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFieldOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FieldOptions message, length delimited. Does not implicitly {@link google.protobuf.FieldOptions.verify|verify} messages.
             * @param message FieldOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFieldOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FieldOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FieldOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FieldOptions;

            /**
             * Decodes a FieldOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FieldOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FieldOptions;

            /**
             * Verifies a FieldOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FieldOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FieldOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FieldOptions;

            /**
             * Creates a plain object from a FieldOptions message. Also converts values to other types if specified.
             * @param message FieldOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FieldOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FieldOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace FieldOptions {

            /** CType enum. */
            enum CType {
                STRING = 0,
                CORD = 1,
                STRING_PIECE = 2
            }

            /** JSType enum. */
            enum JSType {
                JS_NORMAL = 0,
                JS_STRING = 1,
                JS_NUMBER = 2
            }
        }

        /** Properties of an OneofOptions. */
        interface IOneofOptions {

            /** OneofOptions uninterpreted_option */
            uninterpreted_option?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents an OneofOptions. */
        class OneofOptions implements IOneofOptions {

            /**
             * Constructs a new OneofOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IOneofOptions);

            /** OneofOptions uninterpreted_option. */
            public uninterpreted_option: google.protobuf.IUninterpretedOption[];

            /**
             * Encodes the specified OneofOptions message. Does not implicitly {@link google.protobuf.OneofOptions.verify|verify} messages.
             * @param message OneofOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IOneofOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified OneofOptions message, length delimited. Does not implicitly {@link google.protobuf.OneofOptions.verify|verify} messages.
             * @param message OneofOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IOneofOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an OneofOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns OneofOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.OneofOptions;

            /**
             * Decodes an OneofOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns OneofOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.OneofOptions;

            /**
             * Verifies an OneofOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an OneofOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns OneofOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.OneofOptions;

            /**
             * Creates a plain object from an OneofOptions message. Also converts values to other types if specified.
             * @param message OneofOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.OneofOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this OneofOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an EnumOptions. */
        interface IEnumOptions {

            /** EnumOptions allow_alias */
            allow_alias?: (boolean|null);

            /** EnumOptions deprecated */
            deprecated?: (boolean|null);

            /** EnumOptions uninterpreted_option */
            uninterpreted_option?: (google.protobuf.IUninterpretedOption[]|null);

            /** EnumOptions .gogoproto.goproto_enum_prefix */
            ".gogoproto.goproto_enum_prefix"?: (boolean|null);

            /** EnumOptions .gogoproto.goproto_enum_stringer */
            ".gogoproto.goproto_enum_stringer"?: (boolean|null);

            /** EnumOptions .gogoproto.enum_stringer */
            ".gogoproto.enum_stringer"?: (boolean|null);

            /** EnumOptions .gogoproto.enum_customname */
            ".gogoproto.enum_customname"?: (string|null);

            /** EnumOptions .gogoproto.enumdecl */
            ".gogoproto.enumdecl"?: (boolean|null);
        }

        /** Represents an EnumOptions. */
        class EnumOptions implements IEnumOptions {

            /**
             * Constructs a new EnumOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumOptions);

            /** EnumOptions allow_alias. */
            public allow_alias: boolean;

            /** EnumOptions deprecated. */
            public deprecated: boolean;

            /** EnumOptions uninterpreted_option. */
            public uninterpreted_option: google.protobuf.IUninterpretedOption[];

            /**
             * Encodes the specified EnumOptions message. Does not implicitly {@link google.protobuf.EnumOptions.verify|verify} messages.
             * @param message EnumOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumOptions message, length delimited. Does not implicitly {@link google.protobuf.EnumOptions.verify|verify} messages.
             * @param message EnumOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEnumOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumOptions;

            /**
             * Decodes an EnumOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EnumOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumOptions;

            /**
             * Verifies an EnumOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumOptions;

            /**
             * Creates a plain object from an EnumOptions message. Also converts values to other types if specified.
             * @param message EnumOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.EnumOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an EnumValueOptions. */
        interface IEnumValueOptions {

            /** EnumValueOptions deprecated */
            deprecated?: (boolean|null);

            /** EnumValueOptions uninterpreted_option */
            uninterpreted_option?: (google.protobuf.IUninterpretedOption[]|null);

            /** EnumValueOptions .gogoproto.enumvalue_customname */
            ".gogoproto.enumvalue_customname"?: (string|null);
        }

        /** Represents an EnumValueOptions. */
        class EnumValueOptions implements IEnumValueOptions {

            /**
             * Constructs a new EnumValueOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumValueOptions);

            /** EnumValueOptions deprecated. */
            public deprecated: boolean;

            /** EnumValueOptions uninterpreted_option. */
            public uninterpreted_option: google.protobuf.IUninterpretedOption[];

            /**
             * Encodes the specified EnumValueOptions message. Does not implicitly {@link google.protobuf.EnumValueOptions.verify|verify} messages.
             * @param message EnumValueOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumValueOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumValueOptions message, length delimited. Does not implicitly {@link google.protobuf.EnumValueOptions.verify|verify} messages.
             * @param message EnumValueOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEnumValueOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumValueOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumValueOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumValueOptions;

            /**
             * Decodes an EnumValueOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EnumValueOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumValueOptions;

            /**
             * Verifies an EnumValueOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumValueOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumValueOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumValueOptions;

            /**
             * Creates a plain object from an EnumValueOptions message. Also converts values to other types if specified.
             * @param message EnumValueOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.EnumValueOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumValueOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ServiceOptions. */
        interface IServiceOptions {

            /** ServiceOptions deprecated */
            deprecated?: (boolean|null);

            /** ServiceOptions uninterpreted_option */
            uninterpreted_option?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents a ServiceOptions. */
        class ServiceOptions implements IServiceOptions {

            /**
             * Constructs a new ServiceOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IServiceOptions);

            /** ServiceOptions deprecated. */
            public deprecated: boolean;

            /** ServiceOptions uninterpreted_option. */
            public uninterpreted_option: google.protobuf.IUninterpretedOption[];

            /**
             * Encodes the specified ServiceOptions message. Does not implicitly {@link google.protobuf.ServiceOptions.verify|verify} messages.
             * @param message ServiceOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IServiceOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ServiceOptions message, length delimited. Does not implicitly {@link google.protobuf.ServiceOptions.verify|verify} messages.
             * @param message ServiceOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IServiceOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ServiceOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ServiceOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.ServiceOptions;

            /**
             * Decodes a ServiceOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ServiceOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.ServiceOptions;

            /**
             * Verifies a ServiceOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ServiceOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ServiceOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.ServiceOptions;

            /**
             * Creates a plain object from a ServiceOptions message. Also converts values to other types if specified.
             * @param message ServiceOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.ServiceOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ServiceOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MethodOptions. */
        interface IMethodOptions {

            /** MethodOptions deprecated */
            deprecated?: (boolean|null);

            /** MethodOptions uninterpreted_option */
            uninterpreted_option?: (google.protobuf.IUninterpretedOption[]|null);

            /** MethodOptions .google.api.http */
            ".google.api.http"?: (google.api.IHttpRule|null);
        }

        /** Represents a MethodOptions. */
        class MethodOptions implements IMethodOptions {

            /**
             * Constructs a new MethodOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IMethodOptions);

            /** MethodOptions deprecated. */
            public deprecated: boolean;

            /** MethodOptions uninterpreted_option. */
            public uninterpreted_option: google.protobuf.IUninterpretedOption[];

            /**
             * Encodes the specified MethodOptions message. Does not implicitly {@link google.protobuf.MethodOptions.verify|verify} messages.
             * @param message MethodOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IMethodOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MethodOptions message, length delimited. Does not implicitly {@link google.protobuf.MethodOptions.verify|verify} messages.
             * @param message MethodOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IMethodOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MethodOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MethodOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.MethodOptions;

            /**
             * Decodes a MethodOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MethodOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.MethodOptions;

            /**
             * Verifies a MethodOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MethodOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MethodOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.MethodOptions;

            /**
             * Creates a plain object from a MethodOptions message. Also converts values to other types if specified.
             * @param message MethodOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.MethodOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MethodOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an UninterpretedOption. */
        interface IUninterpretedOption {

            /** UninterpretedOption name */
            name?: (google.protobuf.UninterpretedOption.INamePart[]|null);

            /** UninterpretedOption identifier_value */
            identifier_value?: (string|null);

            /** UninterpretedOption positive_int_value */
            positive_int_value?: (Long|null);

            /** UninterpretedOption negative_int_value */
            negative_int_value?: (Long|null);

            /** UninterpretedOption double_value */
            double_value?: (number|null);

            /** UninterpretedOption string_value */
            string_value?: (Uint8Array|null);

            /** UninterpretedOption aggregate_value */
            aggregate_value?: (string|null);
        }

        /** Represents an UninterpretedOption. */
        class UninterpretedOption implements IUninterpretedOption {

            /**
             * Constructs a new UninterpretedOption.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IUninterpretedOption);

            /** UninterpretedOption name. */
            public name: google.protobuf.UninterpretedOption.INamePart[];

            /** UninterpretedOption identifier_value. */
            public identifier_value: string;

            /** UninterpretedOption positive_int_value. */
            public positive_int_value: Long;

            /** UninterpretedOption negative_int_value. */
            public negative_int_value: Long;

            /** UninterpretedOption double_value. */
            public double_value: number;

            /** UninterpretedOption string_value. */
            public string_value: Uint8Array;

            /** UninterpretedOption aggregate_value. */
            public aggregate_value: string;

            /**
             * Encodes the specified UninterpretedOption message. Does not implicitly {@link google.protobuf.UninterpretedOption.verify|verify} messages.
             * @param message UninterpretedOption message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IUninterpretedOption, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UninterpretedOption message, length delimited. Does not implicitly {@link google.protobuf.UninterpretedOption.verify|verify} messages.
             * @param message UninterpretedOption message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IUninterpretedOption, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an UninterpretedOption message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UninterpretedOption
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.UninterpretedOption;

            /**
             * Decodes an UninterpretedOption message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns UninterpretedOption
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.UninterpretedOption;

            /**
             * Verifies an UninterpretedOption message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an UninterpretedOption message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UninterpretedOption
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.UninterpretedOption;

            /**
             * Creates a plain object from an UninterpretedOption message. Also converts values to other types if specified.
             * @param message UninterpretedOption
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.UninterpretedOption, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UninterpretedOption to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace UninterpretedOption {

            /** Properties of a NamePart. */
            interface INamePart {

                /** NamePart name_part */
                name_part: string;

                /** NamePart is_extension */
                is_extension: boolean;
            }

            /** Represents a NamePart. */
            class NamePart implements INamePart {

                /**
                 * Constructs a new NamePart.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.UninterpretedOption.INamePart);

                /** NamePart name_part. */
                public name_part: string;

                /** NamePart is_extension. */
                public is_extension: boolean;

                /**
                 * Encodes the specified NamePart message. Does not implicitly {@link google.protobuf.UninterpretedOption.NamePart.verify|verify} messages.
                 * @param message NamePart message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.UninterpretedOption.INamePart, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified NamePart message, length delimited. Does not implicitly {@link google.protobuf.UninterpretedOption.NamePart.verify|verify} messages.
                 * @param message NamePart message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.UninterpretedOption.INamePart, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a NamePart message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns NamePart
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.UninterpretedOption.NamePart;

                /**
                 * Decodes a NamePart message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns NamePart
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.UninterpretedOption.NamePart;

                /**
                 * Verifies a NamePart message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a NamePart message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns NamePart
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.UninterpretedOption.NamePart;

                /**
                 * Creates a plain object from a NamePart message. Also converts values to other types if specified.
                 * @param message NamePart
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.UninterpretedOption.NamePart, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this NamePart to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of a SourceCodeInfo. */
        interface ISourceCodeInfo {

            /** SourceCodeInfo location */
            location?: (google.protobuf.SourceCodeInfo.ILocation[]|null);
        }

        /** Represents a SourceCodeInfo. */
        class SourceCodeInfo implements ISourceCodeInfo {

            /**
             * Constructs a new SourceCodeInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.ISourceCodeInfo);

            /** SourceCodeInfo location. */
            public location: google.protobuf.SourceCodeInfo.ILocation[];

            /**
             * Encodes the specified SourceCodeInfo message. Does not implicitly {@link google.protobuf.SourceCodeInfo.verify|verify} messages.
             * @param message SourceCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.ISourceCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SourceCodeInfo message, length delimited. Does not implicitly {@link google.protobuf.SourceCodeInfo.verify|verify} messages.
             * @param message SourceCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.ISourceCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SourceCodeInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SourceCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.SourceCodeInfo;

            /**
             * Decodes a SourceCodeInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SourceCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.SourceCodeInfo;

            /**
             * Verifies a SourceCodeInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SourceCodeInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SourceCodeInfo
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.SourceCodeInfo;

            /**
             * Creates a plain object from a SourceCodeInfo message. Also converts values to other types if specified.
             * @param message SourceCodeInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.SourceCodeInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SourceCodeInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace SourceCodeInfo {

            /** Properties of a Location. */
            interface ILocation {

                /** Location path */
                path?: (number[]|null);

                /** Location span */
                span?: (number[]|null);

                /** Location leading_comments */
                leading_comments?: (string|null);

                /** Location trailing_comments */
                trailing_comments?: (string|null);

                /** Location leading_detached_comments */
                leading_detached_comments?: (string[]|null);
            }

            /** Represents a Location. */
            class Location implements ILocation {

                /**
                 * Constructs a new Location.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.SourceCodeInfo.ILocation);

                /** Location path. */
                public path: number[];

                /** Location span. */
                public span: number[];

                /** Location leading_comments. */
                public leading_comments: string;

                /** Location trailing_comments. */
                public trailing_comments: string;

                /** Location leading_detached_comments. */
                public leading_detached_comments: string[];

                /**
                 * Encodes the specified Location message. Does not implicitly {@link google.protobuf.SourceCodeInfo.Location.verify|verify} messages.
                 * @param message Location message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.SourceCodeInfo.ILocation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Location message, length delimited. Does not implicitly {@link google.protobuf.SourceCodeInfo.Location.verify|verify} messages.
                 * @param message Location message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.SourceCodeInfo.ILocation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Location message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Location
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.SourceCodeInfo.Location;

                /**
                 * Decodes a Location message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Location
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.SourceCodeInfo.Location;

                /**
                 * Verifies a Location message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Location message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Location
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.SourceCodeInfo.Location;

                /**
                 * Creates a plain object from a Location message. Also converts values to other types if specified.
                 * @param message Location
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.SourceCodeInfo.Location, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Location to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of a GeneratedCodeInfo. */
        interface IGeneratedCodeInfo {

            /** GeneratedCodeInfo annotation */
            annotation?: (google.protobuf.GeneratedCodeInfo.IAnnotation[]|null);
        }

        /** Represents a GeneratedCodeInfo. */
        class GeneratedCodeInfo implements IGeneratedCodeInfo {

            /**
             * Constructs a new GeneratedCodeInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IGeneratedCodeInfo);

            /** GeneratedCodeInfo annotation. */
            public annotation: google.protobuf.GeneratedCodeInfo.IAnnotation[];

            /**
             * Encodes the specified GeneratedCodeInfo message. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.verify|verify} messages.
             * @param message GeneratedCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IGeneratedCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GeneratedCodeInfo message, length delimited. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.verify|verify} messages.
             * @param message GeneratedCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IGeneratedCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GeneratedCodeInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GeneratedCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.GeneratedCodeInfo;

            /**
             * Decodes a GeneratedCodeInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GeneratedCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.GeneratedCodeInfo;

            /**
             * Verifies a GeneratedCodeInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GeneratedCodeInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GeneratedCodeInfo
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.GeneratedCodeInfo;

            /**
             * Creates a plain object from a GeneratedCodeInfo message. Also converts values to other types if specified.
             * @param message GeneratedCodeInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.GeneratedCodeInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GeneratedCodeInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace GeneratedCodeInfo {

            /** Properties of an Annotation. */
            interface IAnnotation {

                /** Annotation path */
                path?: (number[]|null);

                /** Annotation source_file */
                source_file?: (string|null);

                /** Annotation begin */
                begin?: (number|null);

                /** Annotation end */
                end?: (number|null);
            }

            /** Represents an Annotation. */
            class Annotation implements IAnnotation {

                /**
                 * Constructs a new Annotation.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.GeneratedCodeInfo.IAnnotation);

                /** Annotation path. */
                public path: number[];

                /** Annotation source_file. */
                public source_file: string;

                /** Annotation begin. */
                public begin: number;

                /** Annotation end. */
                public end: number;

                /**
                 * Encodes the specified Annotation message. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.Annotation.verify|verify} messages.
                 * @param message Annotation message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.GeneratedCodeInfo.IAnnotation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Annotation message, length delimited. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.Annotation.verify|verify} messages.
                 * @param message Annotation message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.GeneratedCodeInfo.IAnnotation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an Annotation message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Annotation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.GeneratedCodeInfo.Annotation;

                /**
                 * Decodes an Annotation message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Annotation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.GeneratedCodeInfo.Annotation;

                /**
                 * Verifies an Annotation message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an Annotation message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Annotation
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.GeneratedCodeInfo.Annotation;

                /**
                 * Creates a plain object from an Annotation message. Also converts values to other types if specified.
                 * @param message Annotation
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.GeneratedCodeInfo.Annotation, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Annotation to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of an Any. */
        interface IAny {

            /** Any type_url */
            type_url?: (string|null);

            /** Any value */
            value?: (Uint8Array|null);
        }

        /** Represents an Any. */
        class Any implements IAny {

            /**
             * Constructs a new Any.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IAny);

            /** Any type_url. */
            public type_url: string;

            /** Any value. */
            public value: Uint8Array;

            /**
             * Encodes the specified Any message. Does not implicitly {@link google.protobuf.Any.verify|verify} messages.
             * @param message Any message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IAny, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Any message, length delimited. Does not implicitly {@link google.protobuf.Any.verify|verify} messages.
             * @param message Any message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IAny, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Any message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Any
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Any;

            /**
             * Decodes an Any message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Any
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Any;

            /**
             * Verifies an Any message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Any message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Any
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Any;

            /**
             * Creates a plain object from an Any message. Also converts values to other types if specified.
             * @param message Any
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Any, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Any to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Namespace api. */
    namespace api {

        /** Properties of a Http. */
        interface IHttp {

            /** Http rules */
            rules?: (google.api.IHttpRule[]|null);

            /** Http fully_decode_reserved_expansion */
            fully_decode_reserved_expansion?: (boolean|null);
        }

        /** Represents a Http. */
        class Http implements IHttp {

            /**
             * Constructs a new Http.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IHttp);

            /** Http rules. */
            public rules: google.api.IHttpRule[];

            /** Http fully_decode_reserved_expansion. */
            public fully_decode_reserved_expansion: boolean;

            /**
             * Encodes the specified Http message. Does not implicitly {@link google.api.Http.verify|verify} messages.
             * @param message Http message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IHttp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Http message, length delimited. Does not implicitly {@link google.api.Http.verify|verify} messages.
             * @param message Http message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IHttp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Http message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Http
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.Http;

            /**
             * Decodes a Http message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Http
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.Http;

            /**
             * Verifies a Http message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Http message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Http
             */
            public static fromObject(object: { [k: string]: any }): google.api.Http;

            /**
             * Creates a plain object from a Http message. Also converts values to other types if specified.
             * @param message Http
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.Http, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Http to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a HttpRule. */
        interface IHttpRule {

            /** HttpRule selector */
            selector?: (string|null);

            /** HttpRule get */
            get?: (string|null);

            /** HttpRule put */
            put?: (string|null);

            /** HttpRule post */
            post?: (string|null);

            /** HttpRule delete */
            "delete"?: (string|null);

            /** HttpRule patch */
            patch?: (string|null);

            /** HttpRule custom */
            custom?: (google.api.ICustomHttpPattern|null);

            /** HttpRule body */
            body?: (string|null);

            /** HttpRule response_body */
            response_body?: (string|null);

            /** HttpRule additional_bindings */
            additional_bindings?: (google.api.IHttpRule[]|null);
        }

        /** Represents a HttpRule. */
        class HttpRule implements IHttpRule {

            /**
             * Constructs a new HttpRule.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IHttpRule);

            /** HttpRule selector. */
            public selector: string;

            /** HttpRule get. */
            public get?: (string|null);

            /** HttpRule put. */
            public put?: (string|null);

            /** HttpRule post. */
            public post?: (string|null);

            /** HttpRule delete. */
            public delete?: (string|null);

            /** HttpRule patch. */
            public patch?: (string|null);

            /** HttpRule custom. */
            public custom?: (google.api.ICustomHttpPattern|null);

            /** HttpRule body. */
            public body: string;

            /** HttpRule response_body. */
            public response_body: string;

            /** HttpRule additional_bindings. */
            public additional_bindings: google.api.IHttpRule[];

            /** HttpRule pattern. */
            public pattern?: ("get"|"put"|"post"|"delete"|"patch"|"custom");

            /**
             * Encodes the specified HttpRule message. Does not implicitly {@link google.api.HttpRule.verify|verify} messages.
             * @param message HttpRule message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IHttpRule, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified HttpRule message, length delimited. Does not implicitly {@link google.api.HttpRule.verify|verify} messages.
             * @param message HttpRule message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IHttpRule, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a HttpRule message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns HttpRule
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.HttpRule;

            /**
             * Decodes a HttpRule message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns HttpRule
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.HttpRule;

            /**
             * Verifies a HttpRule message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a HttpRule message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns HttpRule
             */
            public static fromObject(object: { [k: string]: any }): google.api.HttpRule;

            /**
             * Creates a plain object from a HttpRule message. Also converts values to other types if specified.
             * @param message HttpRule
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.HttpRule, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this HttpRule to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a CustomHttpPattern. */
        interface ICustomHttpPattern {

            /** CustomHttpPattern kind */
            kind?: (string|null);

            /** CustomHttpPattern path */
            path?: (string|null);
        }

        /** Represents a CustomHttpPattern. */
        class CustomHttpPattern implements ICustomHttpPattern {

            /**
             * Constructs a new CustomHttpPattern.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.ICustomHttpPattern);

            /** CustomHttpPattern kind. */
            public kind: string;

            /** CustomHttpPattern path. */
            public path: string;

            /**
             * Encodes the specified CustomHttpPattern message. Does not implicitly {@link google.api.CustomHttpPattern.verify|verify} messages.
             * @param message CustomHttpPattern message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.ICustomHttpPattern, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CustomHttpPattern message, length delimited. Does not implicitly {@link google.api.CustomHttpPattern.verify|verify} messages.
             * @param message CustomHttpPattern message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.ICustomHttpPattern, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CustomHttpPattern message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CustomHttpPattern
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.CustomHttpPattern;

            /**
             * Decodes a CustomHttpPattern message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CustomHttpPattern
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.CustomHttpPattern;

            /**
             * Verifies a CustomHttpPattern message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CustomHttpPattern message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CustomHttpPattern
             */
            public static fromObject(object: { [k: string]: any }): google.api.CustomHttpPattern;

            /**
             * Creates a plain object from a CustomHttpPattern message. Also converts values to other types if specified.
             * @param message CustomHttpPattern
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.CustomHttpPattern, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CustomHttpPattern to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }
}

/** Namespace cosmos. */
export namespace cosmos {

    /** Namespace base. */
    namespace base {

        /** Namespace query. */
        namespace query {

            /** Namespace v1beta1. */
            namespace v1beta1 {

                /** Properties of a PageRequest. */
                interface IPageRequest {

                    /** PageRequest key */
                    key?: (Uint8Array|null);

                    /** PageRequest offset */
                    offset?: (Long|null);

                    /** PageRequest limit */
                    limit?: (Long|null);

                    /** PageRequest count_total */
                    count_total?: (boolean|null);
                }

                /** Represents a PageRequest. */
                class PageRequest implements IPageRequest {

                    /**
                     * Constructs a new PageRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: cosmos.base.query.v1beta1.IPageRequest);

                    /** PageRequest key. */
                    public key: Uint8Array;

                    /** PageRequest offset. */
                    public offset: Long;

                    /** PageRequest limit. */
                    public limit: Long;

                    /** PageRequest count_total. */
                    public count_total: boolean;

                    /**
                     * Encodes the specified PageRequest message. Does not implicitly {@link cosmos.base.query.v1beta1.PageRequest.verify|verify} messages.
                     * @param message PageRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: cosmos.base.query.v1beta1.IPageRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified PageRequest message, length delimited. Does not implicitly {@link cosmos.base.query.v1beta1.PageRequest.verify|verify} messages.
                     * @param message PageRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: cosmos.base.query.v1beta1.IPageRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a PageRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns PageRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): cosmos.base.query.v1beta1.PageRequest;

                    /**
                     * Decodes a PageRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns PageRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): cosmos.base.query.v1beta1.PageRequest;

                    /**
                     * Verifies a PageRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a PageRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns PageRequest
                     */
                    public static fromObject(object: { [k: string]: any }): cosmos.base.query.v1beta1.PageRequest;

                    /**
                     * Creates a plain object from a PageRequest message. Also converts values to other types if specified.
                     * @param message PageRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: cosmos.base.query.v1beta1.PageRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this PageRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a PageResponse. */
                interface IPageResponse {

                    /** PageResponse next_key */
                    next_key?: (Uint8Array|null);

                    /** PageResponse total */
                    total?: (Long|null);
                }

                /** Represents a PageResponse. */
                class PageResponse implements IPageResponse {

                    /**
                     * Constructs a new PageResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: cosmos.base.query.v1beta1.IPageResponse);

                    /** PageResponse next_key. */
                    public next_key: Uint8Array;

                    /** PageResponse total. */
                    public total: Long;

                    /**
                     * Encodes the specified PageResponse message. Does not implicitly {@link cosmos.base.query.v1beta1.PageResponse.verify|verify} messages.
                     * @param message PageResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: cosmos.base.query.v1beta1.IPageResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified PageResponse message, length delimited. Does not implicitly {@link cosmos.base.query.v1beta1.PageResponse.verify|verify} messages.
                     * @param message PageResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: cosmos.base.query.v1beta1.IPageResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a PageResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns PageResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): cosmos.base.query.v1beta1.PageResponse;

                    /**
                     * Decodes a PageResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns PageResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): cosmos.base.query.v1beta1.PageResponse;

                    /**
                     * Verifies a PageResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a PageResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns PageResponse
                     */
                    public static fromObject(object: { [k: string]: any }): cosmos.base.query.v1beta1.PageResponse;

                    /**
                     * Creates a plain object from a PageResponse message. Also converts values to other types if specified.
                     * @param message PageResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: cosmos.base.query.v1beta1.PageResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this PageResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }
            }
        }

        /** Namespace v1beta1. */
        namespace v1beta1 {

            /** Properties of a Coin. */
            interface ICoin {

                /** Coin denom */
                denom?: (string|null);

                /** Coin amount */
                amount?: (string|null);
            }

            /** Represents a Coin. */
            class Coin implements ICoin {

                /**
                 * Constructs a new Coin.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: cosmos.base.v1beta1.ICoin);

                /** Coin denom. */
                public denom: string;

                /** Coin amount. */
                public amount: string;

                /**
                 * Encodes the specified Coin message. Does not implicitly {@link cosmos.base.v1beta1.Coin.verify|verify} messages.
                 * @param message Coin message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: cosmos.base.v1beta1.ICoin, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Coin message, length delimited. Does not implicitly {@link cosmos.base.v1beta1.Coin.verify|verify} messages.
                 * @param message Coin message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: cosmos.base.v1beta1.ICoin, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Coin message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Coin
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): cosmos.base.v1beta1.Coin;

                /**
                 * Decodes a Coin message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Coin
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): cosmos.base.v1beta1.Coin;

                /**
                 * Verifies a Coin message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Coin message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Coin
                 */
                public static fromObject(object: { [k: string]: any }): cosmos.base.v1beta1.Coin;

                /**
                 * Creates a plain object from a Coin message. Also converts values to other types if specified.
                 * @param message Coin
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: cosmos.base.v1beta1.Coin, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Coin to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a DecCoin. */
            interface IDecCoin {

                /** DecCoin denom */
                denom?: (string|null);

                /** DecCoin amount */
                amount?: (string|null);
            }

            /** Represents a DecCoin. */
            class DecCoin implements IDecCoin {

                /**
                 * Constructs a new DecCoin.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: cosmos.base.v1beta1.IDecCoin);

                /** DecCoin denom. */
                public denom: string;

                /** DecCoin amount. */
                public amount: string;

                /**
                 * Encodes the specified DecCoin message. Does not implicitly {@link cosmos.base.v1beta1.DecCoin.verify|verify} messages.
                 * @param message DecCoin message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: cosmos.base.v1beta1.IDecCoin, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified DecCoin message, length delimited. Does not implicitly {@link cosmos.base.v1beta1.DecCoin.verify|verify} messages.
                 * @param message DecCoin message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: cosmos.base.v1beta1.IDecCoin, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a DecCoin message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns DecCoin
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): cosmos.base.v1beta1.DecCoin;

                /**
                 * Decodes a DecCoin message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns DecCoin
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): cosmos.base.v1beta1.DecCoin;

                /**
                 * Verifies a DecCoin message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a DecCoin message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns DecCoin
                 */
                public static fromObject(object: { [k: string]: any }): cosmos.base.v1beta1.DecCoin;

                /**
                 * Creates a plain object from a DecCoin message. Also converts values to other types if specified.
                 * @param message DecCoin
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: cosmos.base.v1beta1.DecCoin, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this DecCoin to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of an IntProto. */
            interface IIntProto {

                /** IntProto int */
                int?: (string|null);
            }

            /** Represents an IntProto. */
            class IntProto implements IIntProto {

                /**
                 * Constructs a new IntProto.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: cosmos.base.v1beta1.IIntProto);

                /** IntProto int. */
                public int: string;

                /**
                 * Encodes the specified IntProto message. Does not implicitly {@link cosmos.base.v1beta1.IntProto.verify|verify} messages.
                 * @param message IntProto message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: cosmos.base.v1beta1.IIntProto, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified IntProto message, length delimited. Does not implicitly {@link cosmos.base.v1beta1.IntProto.verify|verify} messages.
                 * @param message IntProto message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: cosmos.base.v1beta1.IIntProto, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an IntProto message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns IntProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): cosmos.base.v1beta1.IntProto;

                /**
                 * Decodes an IntProto message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns IntProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): cosmos.base.v1beta1.IntProto;

                /**
                 * Verifies an IntProto message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an IntProto message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns IntProto
                 */
                public static fromObject(object: { [k: string]: any }): cosmos.base.v1beta1.IntProto;

                /**
                 * Creates a plain object from an IntProto message. Also converts values to other types if specified.
                 * @param message IntProto
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: cosmos.base.v1beta1.IntProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this IntProto to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a DecProto. */
            interface IDecProto {

                /** DecProto dec */
                dec?: (string|null);
            }

            /** Represents a DecProto. */
            class DecProto implements IDecProto {

                /**
                 * Constructs a new DecProto.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: cosmos.base.v1beta1.IDecProto);

                /** DecProto dec. */
                public dec: string;

                /**
                 * Encodes the specified DecProto message. Does not implicitly {@link cosmos.base.v1beta1.DecProto.verify|verify} messages.
                 * @param message DecProto message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: cosmos.base.v1beta1.IDecProto, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified DecProto message, length delimited. Does not implicitly {@link cosmos.base.v1beta1.DecProto.verify|verify} messages.
                 * @param message DecProto message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: cosmos.base.v1beta1.IDecProto, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a DecProto message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns DecProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): cosmos.base.v1beta1.DecProto;

                /**
                 * Decodes a DecProto message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns DecProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): cosmos.base.v1beta1.DecProto;

                /**
                 * Verifies a DecProto message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a DecProto message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns DecProto
                 */
                public static fromObject(object: { [k: string]: any }): cosmos.base.v1beta1.DecProto;

                /**
                 * Creates a plain object from a DecProto message. Also converts values to other types if specified.
                 * @param message DecProto
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: cosmos.base.v1beta1.DecProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this DecProto to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }
    }
}
