import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import {
  DeleteProvisioningTemplateVersionRequest,
  DeleteProvisioningTemplateVersionResponse,
} from "../models/models_0";
import {
  deserializeAws_restJson1DeleteProvisioningTemplateVersionCommand,
  serializeAws_restJson1DeleteProvisioningTemplateVersionCommand,
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

export type DeleteProvisioningTemplateVersionCommandInput = DeleteProvisioningTemplateVersionRequest;
export type DeleteProvisioningTemplateVersionCommandOutput = DeleteProvisioningTemplateVersionResponse &
  __MetadataBearer;

/**
 * <p>Deletes a fleet provisioning template version.</p>
 */
export class DeleteProvisioningTemplateVersionCommand extends $Command<
  DeleteProvisioningTemplateVersionCommandInput,
  DeleteProvisioningTemplateVersionCommandOutput,
  IoTClientResolvedConfig
> {
  private resolved = false;
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteProvisioningTemplateVersionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteProvisioningTemplateVersionCommandInput, DeleteProvisioningTemplateVersionCommandOutput> {
    if (!this.resolved) {
      this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
      this.resolved = true;
    }

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTClient";
    const commandName = "DeleteProvisioningTemplateVersionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteProvisioningTemplateVersionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteProvisioningTemplateVersionResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DeleteProvisioningTemplateVersionCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteProvisioningTemplateVersionCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteProvisioningTemplateVersionCommandOutput> {
    return deserializeAws_restJson1DeleteProvisioningTemplateVersionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
