import { KinesisVideoClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KinesisVideoClient";
import { CreateStreamInput, CreateStreamOutput } from "../models/models_0";
import {
  deserializeAws_restJson1CreateStreamCommand,
  serializeAws_restJson1CreateStreamCommand,
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

export type CreateStreamCommandInput = CreateStreamInput;
export type CreateStreamCommandOutput = CreateStreamOutput & __MetadataBearer;

/**
 * <p>Creates a new Kinesis video stream. </p>
 *
 *         <p>When you create a new stream, Kinesis Video Streams assigns it a version number.
 *             When you change the stream's metadata, Kinesis Video Streams updates the version. </p>
 *         <p>
 *             <code>CreateStream</code> is an asynchronous operation.</p>
 *         <p>For information about how the service works, see <a href="https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/how-it-works.html">How it Works</a>. </p>
 *         <p>You must have permissions for the <code>KinesisVideo:CreateStream</code>
 *             action.</p>
 */
export class CreateStreamCommand extends $Command<
  CreateStreamCommandInput,
  CreateStreamCommandOutput,
  KinesisVideoClientResolvedConfig
> {
  private resolved = false;
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateStreamCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: KinesisVideoClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateStreamCommandInput, CreateStreamCommandOutput> {
    if (!this.resolved) {
      this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
      this.resolved = true;
    }

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KinesisVideoClient";
    const commandName = "CreateStreamCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateStreamInput.filterSensitiveLog,
      outputFilterSensitiveLog: CreateStreamOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateStreamCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateStreamCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateStreamCommandOutput> {
    return deserializeAws_restJson1CreateStreamCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
