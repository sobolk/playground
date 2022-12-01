import { AmplifyAuthCognitoStackTemplate } from '@aws-amplify/cli-extensibility-helper';

export function override(resources: AmplifyAuthCognitoStackTemplate) {
    console.log();
    console.log("In auth override");

    resources.userPool.node.addInfo("kaboooom");
}
