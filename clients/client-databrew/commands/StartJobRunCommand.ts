import { DataBrewClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataBrewClient";
import { StartJobRunRequest, StartJobRunResponse } from "../models/models_0";
import {
  deserializeAws_restJson1StartJobRunCommand,
  serializeAws_restJson1StartJobRunCommand,
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

export type StartJobRunCommandInput = StartJobRunRequest;
export type StartJobRunCommandOutput = StartJobRunResponse & __MetadataBearer;

/**
 * <p>Runs an AWS Glue DataBrew job that exists in the current AWS account.</p>
 */
export class StartJobRunCommand extends $Command<
  StartJobRunCommandInput,
  StartJobRunCommandOutput,
  DataBrewClientResolvedConfig
> {
  private resolved = false;
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: StartJobRunCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DataBrewClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StartJobRunCommandInput, StartJobRunCommandOutput> {
    if (!this.resolved) {
      this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
      this.resolved = true;
    }

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DataBrewClient";
    const commandName = "StartJobRunCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StartJobRunRequest.filterSensitiveLog,
      outputFilterSensitiveLog: StartJobRunResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StartJobRunCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1StartJobRunCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartJobRunCommandOutput> {
    return deserializeAws_restJson1StartJobRunCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
