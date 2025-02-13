/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { SchemaGroupsOperationsImpl, SchemaImpl } from "./operations";
import { SchemaGroupsOperations, Schema } from "./operationsInterfaces";
import { GeneratedSchemaRegistryClientContext } from "./generatedSchemaRegistryClientContext";
import { GeneratedSchemaRegistryClientOptionalParams } from "./models";

export class GeneratedSchemaRegistryClient extends GeneratedSchemaRegistryClientContext {
  /**
   * Initializes a new instance of the GeneratedSchemaRegistryClient class.
   * @param endpoint The Schema Registry service endpoint, for example
   *                 my-namespace.servicebus.windows.net.
   * @param options The parameter options
   */
  constructor(
    endpoint: string,
    options?: GeneratedSchemaRegistryClientOptionalParams
  ) {
    super(endpoint, options);
    this.schemaGroupsOperations = new SchemaGroupsOperationsImpl(this);
    this.schema = new SchemaImpl(this);
  }

  schemaGroupsOperations: SchemaGroupsOperations;
  schema: Schema;
}
