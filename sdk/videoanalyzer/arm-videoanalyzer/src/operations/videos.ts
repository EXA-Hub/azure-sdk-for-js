/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { Videos } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { VideoAnalyzerManagementClient } from "../videoAnalyzerManagementClient";
import {
  VideoEntity,
  VideosListNextOptionalParams,
  VideosListOptionalParams,
  VideosListResponse,
  VideosGetOptionalParams,
  VideosGetResponse,
  VideosCreateOrUpdateOptionalParams,
  VideosCreateOrUpdateResponse,
  VideosDeleteOptionalParams,
  VideosUpdateOptionalParams,
  VideosUpdateResponse,
  VideosListContentTokenOptionalParams,
  VideosListContentTokenResponse,
  VideosListNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing Videos operations. */
export class VideosImpl implements Videos {
  private readonly client: VideoAnalyzerManagementClient;

  /**
   * Initialize a new instance of the class Videos class.
   * @param client Reference to the service client
   */
  constructor(client: VideoAnalyzerManagementClient) {
    this.client = client;
  }

  /**
   * Retrieves a list of video resources that have been created, along with their JSON representations.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The Azure Video Analyzer account name.
   * @param options The options parameters.
   */
  public list(
    resourceGroupName: string,
    accountName: string,
    options?: VideosListOptionalParams
  ): PagedAsyncIterableIterator<VideoEntity> {
    const iter = this.listPagingAll(resourceGroupName, accountName, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listPagingPage(resourceGroupName, accountName, options);
      }
    };
  }

  private async *listPagingPage(
    resourceGroupName: string,
    accountName: string,
    options?: VideosListOptionalParams
  ): AsyncIterableIterator<VideoEntity[]> {
    let result = await this._list(resourceGroupName, accountName, options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listNext(
        resourceGroupName,
        accountName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listPagingAll(
    resourceGroupName: string,
    accountName: string,
    options?: VideosListOptionalParams
  ): AsyncIterableIterator<VideoEntity> {
    for await (const page of this.listPagingPage(
      resourceGroupName,
      accountName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Retrieves a list of video resources that have been created, along with their JSON representations.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The Azure Video Analyzer account name.
   * @param options The options parameters.
   */
  private _list(
    resourceGroupName: string,
    accountName: string,
    options?: VideosListOptionalParams
  ): Promise<VideosListResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, accountName, options },
      listOperationSpec
    );
  }

  /**
   * Retrieves an existing video resource with the given name.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The Azure Video Analyzer account name.
   * @param videoName The Video name.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    accountName: string,
    videoName: string,
    options?: VideosGetOptionalParams
  ): Promise<VideosGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, accountName, videoName, options },
      getOperationSpec
    );
  }

  /**
   * Creates a new video resource or updates an existing video resource with the given name.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The Azure Video Analyzer account name.
   * @param videoName The Video name.
   * @param parameters The request parameters
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    accountName: string,
    videoName: string,
    parameters: VideoEntity,
    options?: VideosCreateOrUpdateOptionalParams
  ): Promise<VideosCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, accountName, videoName, parameters, options },
      createOrUpdateOperationSpec
    );
  }

  /**
   * Deletes an existing video resource and its underlying data. This operation is irreversible.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The Azure Video Analyzer account name.
   * @param videoName The Video name.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    accountName: string,
    videoName: string,
    options?: VideosDeleteOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceGroupName, accountName, videoName, options },
      deleteOperationSpec
    );
  }

  /**
   * Updates individual properties of an existing video resource with the given name.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The Azure Video Analyzer account name.
   * @param videoName The Video name.
   * @param parameters The request parameters
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    accountName: string,
    videoName: string,
    parameters: VideoEntity,
    options?: VideosUpdateOptionalParams
  ): Promise<VideosUpdateResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, accountName, videoName, parameters, options },
      updateOperationSpec
    );
  }

  /**
   * Generates a streaming token which can be used for accessing content from video content URLs, for a
   * video resource with the given name.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The Azure Video Analyzer account name.
   * @param videoName The Video name.
   * @param options The options parameters.
   */
  listContentToken(
    resourceGroupName: string,
    accountName: string,
    videoName: string,
    options?: VideosListContentTokenOptionalParams
  ): Promise<VideosListContentTokenResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, accountName, videoName, options },
      listContentTokenOperationSpec
    );
  }

  /**
   * ListNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The Azure Video Analyzer account name.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    resourceGroupName: string,
    accountName: string,
    nextLink: string,
    options?: VideosListNextOptionalParams
  ): Promise<VideosListNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, accountName, nextLink, options },
      listNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Media/videoAnalyzers/{accountName}/videos",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.VideoEntityCollection
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.top],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Media/videoAnalyzers/{accountName}/videos/{videoName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.VideoEntity
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.videoName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Media/videoAnalyzers/{accountName}/videos/{videoName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.VideoEntity
    },
    201: {
      bodyMapper: Mappers.VideoEntity
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.parameters12,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.videoName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Media/videoAnalyzers/{accountName}/videos/{videoName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.videoName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Media/videoAnalyzers/{accountName}/videos/{videoName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.VideoEntity
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.parameters12,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.videoName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const listContentTokenOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Media/videoAnalyzers/{accountName}/videos/{videoName}/listContentToken",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.VideoContentToken
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.videoName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.VideoEntityCollection
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.top],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
