import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { DeletePolicyRequest } from "../models/models_0";
import { deserializeAws_queryDeletePolicyCommand, serializeAws_queryDeletePolicyCommand } from "../protocols/Aws_query";
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

export type DeletePolicyCommandInput = DeletePolicyRequest;
export type DeletePolicyCommandOutput = __MetadataBearer;

/**
 * <p>Deletes the specified managed policy.</p>
 *          <p>Before you can delete a managed policy, you must first detach the policy from all users,
 *          groups, and roles that it is attached to. In addition, you must delete all the policy's
 *          versions. The following steps describe the process for deleting a managed policy:</p>
 *          <ul>
 *             <li>
 *                <p>Detach the policy from all users, groups, and roles that the policy is attached
 *                to, using the <a>DetachUserPolicy</a>, <a>DetachGroupPolicy</a>, or <a>DetachRolePolicy</a> API operations. To list all the users,
 *                groups, and roles that a policy is attached to, use <a>ListEntitiesForPolicy</a>.</p>
 *             </li>
 *             <li>
 *                <p>Delete all versions of the policy using <a>DeletePolicyVersion</a>. To
 *                list the policy's versions, use <a>ListPolicyVersions</a>. You cannot use
 *                   <a>DeletePolicyVersion</a> to delete the version that is marked as the
 *                default version. You delete the policy's default version in the next step of the
 *                process.</p>
 *             </li>
 *             <li>
 *                <p>Delete the policy (this automatically deletes the policy's default version) using
 *                this API.</p>
 *             </li>
 *          </ul>
 *          <p>For information about managed policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed Policies and Inline
 *             Policies</a> in the <i>IAM User Guide</i>.</p>
 */
export class DeletePolicyCommand extends $Command<
  DeletePolicyCommandInput,
  DeletePolicyCommandOutput,
  IAMClientResolvedConfig
> {
  private resolved = false;
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeletePolicyCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IAMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeletePolicyCommandInput, DeletePolicyCommandOutput> {
    if (!this.resolved) {
      this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
      this.resolved = true;
    }

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IAMClient";
    const commandName = "DeletePolicyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeletePolicyRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeletePolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDeletePolicyCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeletePolicyCommandOutput> {
    return deserializeAws_queryDeletePolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
