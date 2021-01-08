import { CloudWatchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchClient";
import { DescribeAlarmsForMetricInput, DescribeAlarmsForMetricOutput } from "../models/models_0";
import {
  deserializeAws_queryDescribeAlarmsForMetricCommand,
  serializeAws_queryDescribeAlarmsForMetricCommand,
} from "../protocols/Aws_query";
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

export type DescribeAlarmsForMetricCommandInput = DescribeAlarmsForMetricInput;
export type DescribeAlarmsForMetricCommandOutput = DescribeAlarmsForMetricOutput & __MetadataBearer;

/**
 * <p>Retrieves the alarms for the specified metric. To
 * 			filter the results, specify a statistic, period, or unit.</p>
 * 		       <p>This operation retrieves only standard alarms that are based on
 * 		the specified metric. It does not return alarms based on math expressions that
 * 		use the specified metric, or composite alarms that use the specified metric.</p>
 */
export class DescribeAlarmsForMetricCommand extends $Command<
  DescribeAlarmsForMetricCommandInput,
  DescribeAlarmsForMetricCommandOutput,
  CloudWatchClientResolvedConfig
> {
  private resolved = false;
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeAlarmsForMetricCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudWatchClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeAlarmsForMetricCommandInput, DescribeAlarmsForMetricCommandOutput> {
    if (!this.resolved) {
      this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
      this.resolved = true;
    }

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudWatchClient";
    const commandName = "DescribeAlarmsForMetricCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeAlarmsForMetricInput.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeAlarmsForMetricOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeAlarmsForMetricCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDescribeAlarmsForMetricCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeAlarmsForMetricCommandOutput> {
    return deserializeAws_queryDescribeAlarmsForMetricCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
