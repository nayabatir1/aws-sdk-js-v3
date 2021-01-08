import { ServiceInputTypes, ServiceOutputTypes, TranslateClientResolvedConfig } from "../TranslateClient";
import { DeleteTerminologyRequest } from "../models/models_0";
import {
  deserializeAws_json1_1DeleteTerminologyCommand,
  serializeAws_json1_1DeleteTerminologyCommand,
} from "../protocols/Aws_json1_1";
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

export type DeleteTerminologyCommandInput = DeleteTerminologyRequest;
export type DeleteTerminologyCommandOutput = __MetadataBearer;

/**
 * <p>A synchronous action that deletes a custom terminology.</p>
 */
export class DeleteTerminologyCommand extends $Command<
  DeleteTerminologyCommandInput,
  DeleteTerminologyCommandOutput,
  TranslateClientResolvedConfig
> {
  private resolved = false;
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteTerminologyCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: TranslateClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteTerminologyCommandInput, DeleteTerminologyCommandOutput> {
    if (!this.resolved) {
      this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
      this.resolved = true;
    }

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "TranslateClient";
    const commandName = "DeleteTerminologyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteTerminologyRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteTerminologyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteTerminologyCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteTerminologyCommandOutput> {
    return deserializeAws_json1_1DeleteTerminologyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
