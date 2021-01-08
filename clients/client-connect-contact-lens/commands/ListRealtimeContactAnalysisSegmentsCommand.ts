import {
  ConnectContactLensClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ConnectContactLensClient";
import {
  ListRealtimeContactAnalysisSegmentsRequest,
  ListRealtimeContactAnalysisSegmentsResponse,
} from "../models/models_0";
import {
  deserializeAws_restJson1ListRealtimeContactAnalysisSegmentsCommand,
  serializeAws_restJson1ListRealtimeContactAnalysisSegmentsCommand,
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

export type ListRealtimeContactAnalysisSegmentsCommandInput = ListRealtimeContactAnalysisSegmentsRequest;
export type ListRealtimeContactAnalysisSegmentsCommandOutput = ListRealtimeContactAnalysisSegmentsResponse &
  __MetadataBearer;

/**
 * <p>Provides a list of analysis segments for a real-time analysis session.</p>
 */
export class ListRealtimeContactAnalysisSegmentsCommand extends $Command<
  ListRealtimeContactAnalysisSegmentsCommandInput,
  ListRealtimeContactAnalysisSegmentsCommandOutput,
  ConnectContactLensClientResolvedConfig
> {
  private resolved = false;
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListRealtimeContactAnalysisSegmentsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ConnectContactLensClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListRealtimeContactAnalysisSegmentsCommandInput, ListRealtimeContactAnalysisSegmentsCommandOutput> {
    if (!this.resolved) {
      this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
      this.resolved = true;
    }

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConnectContactLensClient";
    const commandName = "ListRealtimeContactAnalysisSegmentsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListRealtimeContactAnalysisSegmentsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListRealtimeContactAnalysisSegmentsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: ListRealtimeContactAnalysisSegmentsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1ListRealtimeContactAnalysisSegmentsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListRealtimeContactAnalysisSegmentsCommandOutput> {
    return deserializeAws_restJson1ListRealtimeContactAnalysisSegmentsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
