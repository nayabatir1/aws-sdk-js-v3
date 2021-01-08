import { APIGatewayClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../APIGatewayClient";
import { BasePathMappings, GetBasePathMappingsRequest } from "../models/models_0";
import {
  deserializeAws_restJson1GetBasePathMappingsCommand,
  serializeAws_restJson1GetBasePathMappingsCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export type GetBasePathMappingsCommandInput = GetBasePathMappingsRequest;
export type GetBasePathMappingsCommandOutput = BasePathMappings & __MetadataBearer;

/**
 * <p>Represents a collection of <a>BasePathMapping</a> resources.</p>
 */
export class GetBasePathMappingsCommand extends $Command<
  GetBasePathMappingsCommandInput,
  GetBasePathMappingsCommandOutput,
  APIGatewayClientResolvedConfig
> {
  private resolved = false;
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetBasePathMappingsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: APIGatewayClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetBasePathMappingsCommandInput, GetBasePathMappingsCommandOutput> {
    if (!this.resolved) {
      this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
      this.resolved = true;
    }

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "APIGatewayClient";
    const commandName = "GetBasePathMappingsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetBasePathMappingsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: BasePathMappings.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetBasePathMappingsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetBasePathMappingsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetBasePathMappingsCommandOutput> {
    return deserializeAws_restJson1GetBasePathMappingsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
