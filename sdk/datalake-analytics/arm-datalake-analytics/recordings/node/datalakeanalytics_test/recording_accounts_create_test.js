let nock = require('nock');

module.exports.hash = "847fe3b5ec6a6aba11b307fdc6fdec00";

module.exports.testInfo = {"uniqueName":{},"newDate":{}}

nock('https://login.microsoftonline.com:443', {"encodedQueryParams":true})
  .get('/common/discovery/instance')
  .query(true)
  .reply(200, {"tenant_discovery_endpoint":"https://login.microsoftonline.com/88888888-8888-8888-8888-888888888888/v2.0/.well-known/openid-configuration","api-version":"1.1","metadata":[{"preferred_network":"login.microsoftonline.com","preferred_cache":"login.windows.net","aliases":["login.microsoftonline.com","login.windows.net","login.microsoft.com","sts.windows.net"]},{"preferred_network":"login.partner.microsoftonline.cn","preferred_cache":"login.partner.microsoftonline.cn","aliases":["login.partner.microsoftonline.cn","login.chinacloudapi.cn"]},{"preferred_network":"login.microsoftonline.de","preferred_cache":"login.microsoftonline.de","aliases":["login.microsoftonline.de"]},{"preferred_network":"login.microsoftonline.us","preferred_cache":"login.microsoftonline.us","aliases":["login.microsoftonline.us","login.usgovcloudapi.net"]},{"preferred_network":"login-us.microsoftonline.com","preferred_cache":"login-us.microsoftonline.com","aliases":["login-us.microsoftonline.com"]}]}, [
  'Cache-Control',
  'max-age=86400, private',
  'Content-Type',
  'application/json; charset=utf-8',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Methods',
  'GET, OPTIONS',
  'P3P',
  'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'x-ms-request-id',
  'b0945a43-ce20-4888-800b-bb5bd2690100',
  'x-ms-ests-server',
  '2.1.12231.8 - SEASLR2 ProdSlices',
  'Set-Cookie',
  'fpc=AqRwS1xwexBKhAX-jZ8n8Jk; expires=Sat, 18-Dec-2021 02:15:19 GMT; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'esctx=AQABAAAAAAD--DLA3VO7QrddgJg7WevrqlbpBitG_OKtC1BYfU5KN72dSHvCYBhBrLIvofnP4-yqoGtmWJGu14Xh0P9jugNsNIOKGYRhepMYgRVbhuvTzetKgCbYK03dkG_5-Ry2TJP27-E88lW5IUpMIcRBIkoiLe0UiBVxvqdhuI26qNIMeRfmoin1aYrpLeWpumsea0UgAA; domain=.login.microsoftonline.com; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'x-ms-gateway-slice=estsfd; path=/; secure; samesite=none; httponly',
  'Set-Cookie',
  'stsservicecookie=estsfd; path=/; secure; samesite=none; httponly',
  'Date',
  'Thu, 18 Nov 2021 02:15:19 GMT',
  'Content-Length',
  '980'
]);

nock('https://login.microsoftonline.com:443', {"encodedQueryParams":true})
  .get('/88888888-8888-8888-8888-888888888888/v2.0/.well-known/openid-configuration')
  .reply(200, {"token_endpoint":"https://login.microsoftonline.com/88888888-8888-8888-8888-888888888888/oauth2/v2.0/token","token_endpoint_auth_methods_supported":["client_secret_post","private_key_jwt","client_secret_basic"],"jwks_uri":"https://login.microsoftonline.com/88888888-8888-8888-8888-888888888888/discovery/v2.0/keys","response_modes_supported":["query","fragment","form_post"],"subject_types_supported":["pairwise"],"id_token_signing_alg_values_supported":["RS256"],"response_types_supported":["code","id_token","code id_token","id_token token"],"scopes_supported":["openid","profile","email","offline_access"],"issuer":"https://login.microsoftonline.com/88888888-8888-8888-8888-888888888888/v2.0","request_uri_parameter_supported":false,"userinfo_endpoint":"https://graph.microsoft.com/oidc/userinfo","authorization_endpoint":"https://login.microsoftonline.com/88888888-8888-8888-8888-888888888888/oauth2/v2.0/authorize","device_authorization_endpoint":"https://login.microsoftonline.com/88888888-8888-8888-8888-888888888888/oauth2/v2.0/devicecode","http_logout_supported":true,"frontchannel_logout_supported":true,"end_session_endpoint":"https://login.microsoftonline.com/88888888-8888-8888-8888-888888888888/oauth2/v2.0/logout","claims_supported":["sub","iss","cloud_instance_name","cloud_instance_host_name","cloud_graph_host_name","msgraph_host","aud","exp","iat","auth_time","acr","nonce","preferred_username","name","tid","ver","at_hash","c_hash","email"],"kerberos_endpoint":"https://login.microsoftonline.com/88888888-8888-8888-8888-888888888888/kerberos","tenant_region_scope":"WW","cloud_instance_name":"microsoftonline.com","cloud_graph_host_name":"graph.windows.net","msgraph_host":"graph.microsoft.com","rbac_url":"https://pas.windows.net"}, [
  'Cache-Control',
  'max-age=86400, private',
  'Content-Type',
  'application/json; charset=utf-8',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Methods',
  'GET, OPTIONS',
  'P3P',
  'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'x-ms-request-id',
  'b0945a43-ce20-4888-800b-bb5bd5690100',
  'x-ms-ests-server',
  '2.1.12231.8 - SEASLR2 ProdSlices',
  'Set-Cookie',
  'fpc=AnabLVE3RzNEmDOOY303gaA; expires=Sat, 18-Dec-2021 02:15:19 GMT; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'esctx=AQABAAAAAAD--DLA3VO7QrddgJg7Wevr74RWuzM0uJ_dN_GgZRfljrIMV5emN1coRqtg-G4lxJX0hdkJYavPXyPawmmXiB3MJfYUEo4MFdgbopf30mW1hvCGBTw6CXX7rEEse3KRJTyyDyqajkMuXs9LTkHrOXyN7uK1Bkr-gTp2oBnDminxPMb-6IT0rexpknU5HCvsh6kgAA; domain=.login.microsoftonline.com; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'x-ms-gateway-slice=estsfd; path=/; secure; samesite=none; httponly',
  'Set-Cookie',
  'stsservicecookie=estsfd; path=/; secure; samesite=none; httponly',
  'Date',
  'Thu, 18 Nov 2021 02:15:19 GMT',
  'Content-Length',
  '1753'
]);

nock('https://login.microsoftonline.com:443', {"encodedQueryParams":true})
  .post('/88888888-8888-8888-8888-888888888888/oauth2/v2.0/token', "client_id=azure_client_id&scope=https%3A%2F%2Fsanitized%2F&grant_type=client_credentials&x-client-SKU=msal.js.node&x-client-VER=1.3.3&x-client-OS=win32&x-client-CPU=x64&x-ms-lib-capability=retry-after, h429&x-client-current-telemetry=5|771,2,,,|,&x-client-last-telemetry=5|0|||0,0&client-request-id=e65107ec-fd98-419e-8e66-4422cc61479c&client_secret=azure_client_secret&claims=%7B%22access_token%22%3A%7B%22xms_cc%22%3A%7B%22values%22%3A%5B%22cp1%22%5D%7D%7D%7D")
  .reply(200, {"token_type":"Bearer","expires_in":86399,"ext_expires_in":86399,"access_token":"access_token"}, [
  'Cache-Control',
  'no-store, no-cache',
  'Pragma',
  'no-cache',
  'Content-Type',
  'application/json; charset=utf-8',
  'Expires',
  '-1',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'P3P',
  'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'x-ms-request-id',
  '5dd6015d-1c11-4581-ab0f-ab1c51210200',
  'x-ms-ests-server',
  '2.1.12231.8 - KRSLR1 ProdSlices',
  'x-ms-clitelem',
  '1,0,0,,',
  'Set-Cookie',
  'fpc=AlTq8qN7-i9FvQYQnzJ9WBMWPr5BAQAAADeuJ9kOAAAA; expires=Sat, 18-Dec-2021 02:15:19 GMT; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'x-ms-gateway-slice=estsfd; path=/; secure; samesite=none; httponly',
  'Set-Cookie',
  'stsservicecookie=estsfd; path=/; secure; samesite=none; httponly',
  'Date',
  'Thu, 18 Nov 2021 02:15:19 GMT',
  'Content-Length',
  '1351'
]);

nock('https://management.azure.com:443', {"encodedQueryParams":true})
  .put('/subscriptions/azure_subscription_id/resourceGroups/myjstest/providers/Microsoft.DataLakeAnalytics/accounts/myaccountxxx', {"location":"eastus2","tags":{"key1":"value1"},"properties":{"defaultDataLakeStoreAccount":"mygen1","dataLakeStoreAccounts":[{"name":"mygen1"}],"firewallState":"Enabled","firewallAllowAzureIps":"Enabled","newTier":"Consumption","maxJobCount":3,"maxDegreeOfParallelism":30,"maxDegreeOfParallelismPerJob":1,"minPriorityPerJob":1,"queryStoreRetention":30}})
  .query(true)
  .reply(201, {"properties":{"firewallState":"Enabled","firewallAllowAzureIps":"Enabled","defaultDataLakeStoreAccount":"mygen1","dataLakeStoreAccounts":[{"properties":{"suffix":"azuredatalakestore.net"},"name":"mygen1"}],"maxDegreeOfParallelism":30,"maxJobCount":3,"maxDegreeOfParallelismPerJob":1,"minPriorityPerJob":1,"queryStoreRetention":30,"newTier":"Consumption","provisioningState":"Creating","state":null,"endpoint":null,"accountId":"bb5483e6-b01e-4879-a6f2-f5d9289d426e"},"location":"eastus2","tags":{"key1":"value1"},"id":"/subscriptions/azure_subscription_id/resourceGroups/myjstest/providers/Microsoft.DataLakeAnalytics/accounts/myaccountxxx","name":"myaccountxxx","type":"Microsoft.DataLakeAnalytics/accounts"}, [
  'Cache-Control',
  'no-cache',
  'Pragma',
  'no-cache',
  'Content-Length',
  '724',
  'Content-Type',
  'application/json',
  'Expires',
  '-1',
  'Location',
  'https://management.azure.com/subscriptions/azure_subscription_id/resourcegroups/myjstest/providers/Microsoft.DataLakeAnalytics/accounts/myaccountxxx/operationresults/0?api-version=2019-11-01-preview',
  'Retry-After',
  '10',
  'Azure-AsyncOperation',
  'https://management.azure.com/subscriptions/azure_subscription_id/providers/Microsoft.DataLakeAnalytics/locations/eastus2/operationResults/bb5483e6-b01e-4879-a6f2-f5d9289d426e_0?api-version=2019-11-01-preview',
  'x-ms-request-id',
  'ad387f0b-96aa-4051-b251-4783c13063fd',
  'X-Content-Type-Options',
  'nosniff',
  'x-ms-ratelimit-remaining-subscription-writes',
  '1199',
  'Server',
  'Microsoft-IIS/10.0',
  'X-AspNet-Version',
  '4.0.30319',
  'X-Powered-By',
  'ASP.NET',
  'x-ms-correlation-request-id',
  '8860c2ba-d072-4547-8022-b8b0210a3c74',
  'x-ms-routing-request-id',
  'SOUTHEASTASIA:20211118T021528Z:8860c2ba-d072-4547-8022-b8b0210a3c74',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'Date',
  'Thu, 18 Nov 2021 02:15:28 GMT'
]);

nock('https://management.azure.com:443', {"encodedQueryParams":true})
  .get('/subscriptions/azure_subscription_id/providers/Microsoft.DataLakeAnalytics/locations/eastus2/operationResults/bb5483e6-b01e-4879-a6f2-f5d9289d426e_0')
  .query(true)
  .reply(200, ["1f8b0800000000000400edbd07601c499625262f6dca7b7f4af54ad7e074a10880601324d8904010ecc188cde692ec1d69472329ab2a81ca6556655d661640cced9dbcf7de7befbdf7de7befbdf7ba3b9d4e27f7dfff3f5c6664016cf6ce4adac99e2180aac81f3f7e7c1f3f227ef1474d9bb5ebe6a3471f9d2d5fd6d5459d37cd47237c5ab76f8a454e5fecedeced6eefd2ff0edeecec3ddabdff68efd3f1838307f7ef3d3cf8a98f7e","c9ff037a49907242000000"], [
  'Cache-Control',
  'no-cache',
  'Pragma',
  'no-cache',
  'Transfer-Encoding',
  'chunked',
  'Content-Type',
  'application/json',
  'Content-Encoding',
  'gzip',
  'Expires',
  '-1',
  'Vary',
  'Accept-Encoding',
  'x-ms-request-id',
  '9d7f62ad-56da-4bd1-a426-9133f14e1713',
  'X-Content-Type-Options',
  'nosniff',
  'x-ms-ratelimit-remaining-subscription-reads',
  '11999',
  'Server',
  'Microsoft-IIS/10.0',
  'X-AspNet-Version',
  '4.0.30319',
  'X-Powered-By',
  'ASP.NET',
  'x-ms-correlation-request-id',
  '2cb140e3-07cc-484e-ac35-42424b8da9bb',
  'x-ms-routing-request-id',
  'SOUTHEASTASIA:20211118T021530Z:2cb140e3-07cc-484e-ac35-42424b8da9bb',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'Date',
  'Thu, 18 Nov 2021 02:15:29 GMT'
]);

nock('https://management.azure.com:443', {"encodedQueryParams":true})
  .get('/subscriptions/azure_subscription_id/providers/Microsoft.DataLakeAnalytics/locations/eastus2/operationResults/bb5483e6-b01e-4879-a6f2-f5d9289d426e_0')
  .query(true)
  .reply(200, ["1f8b0800000000000400edbd07601c499625262f6dca7b7f4af54ad7e074a10880601324d8904010ecc188cde692ec1d69472329ab2a81ca6556655d661640cced9dbcf7de7befbdf7de7befbdf7ba3b9d4e27f7dfff3f5c6664016cf6ce4adac99e2180aac81f3f7e7c1f3f227ef1474d9bb5ebe6a3471f9d2d5fd6d5459d37cd47237c5ab76f8a454e5fecedeced6eefd2ff0edeecec3ddabdff68efd3f1838307f7ef3d3cf8a98f7e","c9ff037a49907242000000"], [
  'Cache-Control',
  'no-cache',
  'Pragma',
  'no-cache',
  'Transfer-Encoding',
  'chunked',
  'Content-Type',
  'application/json',
  'Content-Encoding',
  'gzip',
  'Expires',
  '-1',
  'Vary',
  'Accept-Encoding',
  'x-ms-request-id',
  '99575332-603d-4c87-b389-db94e0984146',
  'X-Content-Type-Options',
  'nosniff',
  'x-ms-ratelimit-remaining-subscription-reads',
  '11998',
  'Server',
  'Microsoft-IIS/10.0',
  'X-AspNet-Version',
  '4.0.30319',
  'X-Powered-By',
  'ASP.NET',
  'x-ms-correlation-request-id',
  '31c85a41-221e-4ffc-90e5-2578b58e24ba',
  'x-ms-routing-request-id',
  'SOUTHEASTASIA:20211118T021533Z:31c85a41-221e-4ffc-90e5-2578b58e24ba',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'Date',
  'Thu, 18 Nov 2021 02:15:32 GMT'
]);

nock('https://management.azure.com:443', {"encodedQueryParams":true})
  .get('/subscriptions/azure_subscription_id/providers/Microsoft.DataLakeAnalytics/locations/eastus2/operationResults/bb5483e6-b01e-4879-a6f2-f5d9289d426e_0')
  .query(true)
  .reply(200, ["1f8b0800000000000400edbd07601c499625262f6dca7b7f4af54ad7e074a10880601324d8904010ecc188cde692ec1d69472329ab2a81ca6556655d661640cced9dbcf7de7befbdf7de7befbdf7ba3b9d4e27f7dfff3f5c6664016cf6ce4adac99e2180aac81f3f7e7c1f3f227ef1474d9bb5ebe6a3471f9d2d5fd6d5459d37cd47237c5ab76f8a454e5fecedeced6eefd2ff0edeecec3ddabdff68efd3f1838307f7ef3d3cf8a98f7e","c9ff037a49907242000000"], [
  'Cache-Control',
  'no-cache',
  'Pragma',
  'no-cache',
  'Transfer-Encoding',
  'chunked',
  'Content-Type',
  'application/json',
  'Content-Encoding',
  'gzip',
  'Expires',
  '-1',
  'Vary',
  'Accept-Encoding',
  'x-ms-request-id',
  '253d21a0-a07e-4ee0-a601-4914178cef44',
  'X-Content-Type-Options',
  'nosniff',
  'x-ms-ratelimit-remaining-subscription-reads',
  '11997',
  'Server',
  'Microsoft-IIS/10.0',
  'X-AspNet-Version',
  '4.0.30319',
  'X-Powered-By',
  'ASP.NET',
  'x-ms-correlation-request-id',
  'ba238243-176c-4cba-8977-8aadf9eaed9a',
  'x-ms-routing-request-id',
  'SOUTHEASTASIA:20211118T021537Z:ba238243-176c-4cba-8977-8aadf9eaed9a',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'Date',
  'Thu, 18 Nov 2021 02:15:36 GMT'
]);

nock('https://management.azure.com:443', {"encodedQueryParams":true})
  .get('/subscriptions/azure_subscription_id/providers/Microsoft.DataLakeAnalytics/locations/eastus2/operationResults/bb5483e6-b01e-4879-a6f2-f5d9289d426e_0')
  .query(true)
  .reply(200, ["1f8b0800000000000400edbd07601c499625262f6dca7b7f4af54ad7e074a10880601324d8904010ecc188cde692ec1d69472329ab2a81ca6556655d661640cced9dbcf7de7befbdf7de7befbdf7ba3b9d4e27f7dfff3f5c6664016cf6ce4adac99e2180aac81f3f7e7c1f3f227ef1474d9bb5ebe6a3471f9d2d5fd6d5459d37cd47237c5ab76f8a454e5fecedeced6eefd2ff0edeecec3ddabdff68efd3f1838307f7ef3d3cf8a98f7e","c9ff037a49907242000000"], [
  'Cache-Control',
  'no-cache',
  'Pragma',
  'no-cache',
  'Transfer-Encoding',
  'chunked',
  'Content-Type',
  'application/json',
  'Content-Encoding',
  'gzip',
  'Expires',
  '-1',
  'Vary',
  'Accept-Encoding',
  'x-ms-request-id',
  'a264a136-cb55-421a-be53-8eb4b320f399',
  'X-Content-Type-Options',
  'nosniff',
  'x-ms-ratelimit-remaining-subscription-reads',
  '11996',
  'Server',
  'Microsoft-IIS/10.0',
  'X-AspNet-Version',
  '4.0.30319',
  'X-Powered-By',
  'ASP.NET',
  'x-ms-correlation-request-id',
  '1c3b65fc-fecb-4cb8-90f2-66cac4442b9f',
  'x-ms-routing-request-id',
  'SOUTHEASTASIA:20211118T021540Z:1c3b65fc-fecb-4cb8-90f2-66cac4442b9f',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'Date',
  'Thu, 18 Nov 2021 02:15:39 GMT'
]);

nock('https://management.azure.com:443', {"encodedQueryParams":true})
  .get('/subscriptions/azure_subscription_id/providers/Microsoft.DataLakeAnalytics/locations/eastus2/operationResults/bb5483e6-b01e-4879-a6f2-f5d9289d426e_0')
  .query(true)
  .reply(200, ["1f8b0800000000000400edbd07601c499625262f6dca7b7f4af54ad7e074a10880601324d8904010ecc188cde692ec1d69472329ab2a81ca6556655d661640cced9dbcf7de7befbdf7de7befbdf7ba3b9d4e27f7dfff3f5c6664016cf6ce4adac99e2180aac81f3f7e7c1f3f227ef1474d9bb5ebe6a3471f9d2d5fd6d5459d37cd47237c5ab76f8a454e5fecedeced6eefd2ff0edeecec3ddabdff68efd3f1838307f7ef3d3cf8a98f7e","c9ff037a49907242000000"], [
  'Cache-Control',
  'no-cache',
  'Pragma',
  'no-cache',
  'Transfer-Encoding',
  'chunked',
  'Content-Type',
  'application/json',
  'Content-Encoding',
  'gzip',
  'Expires',
  '-1',
  'Vary',
  'Accept-Encoding',
  'x-ms-request-id',
  '26fd2f8d-9f3b-48c5-bbd5-f00a21eaff7a',
  'X-Content-Type-Options',
  'nosniff',
  'x-ms-ratelimit-remaining-subscription-reads',
  '11995',
  'Server',
  'Microsoft-IIS/10.0',
  'X-AspNet-Version',
  '4.0.30319',
  'X-Powered-By',
  'ASP.NET',
  'x-ms-correlation-request-id',
  '1ac30a1e-48bc-43cc-9bb3-906cf418468e',
  'x-ms-routing-request-id',
  'SOUTHEASTASIA:20211118T021543Z:1ac30a1e-48bc-43cc-9bb3-906cf418468e',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'Date',
  'Thu, 18 Nov 2021 02:15:42 GMT'
]);

nock('https://management.azure.com:443', {"encodedQueryParams":true})
  .get('/subscriptions/azure_subscription_id/providers/Microsoft.DataLakeAnalytics/locations/eastus2/operationResults/bb5483e6-b01e-4879-a6f2-f5d9289d426e_0')
  .query(true)
  .reply(200, ["1f8b0800000000000400edbd07601c499625262f6dca7b7f4af54ad7e074a10880601324d8904010ecc188cde692ec1d69472329ab2a81ca6556655d661640cced9dbcf7de7befbdf7de7befbdf7ba3b9d4e27f7dfff3f5c6664016cf6ce4adac99e2180aac81f3f7e7c1f3f227ef1474d9bb5ebe6a3471f9d2d5fd6d5459d37cd47237c5ab76f8a454e5fecedeced6eefd2ff0edeecec3ddabdff68efd3f1838307f7ef3d3cf8a98f7e","c9ff037a49907242000000"], [
  'Cache-Control',
  'no-cache',
  'Pragma',
  'no-cache',
  'Transfer-Encoding',
  'chunked',
  'Content-Type',
  'application/json',
  'Content-Encoding',
  'gzip',
  'Expires',
  '-1',
  'Vary',
  'Accept-Encoding',
  'x-ms-request-id',
  '089fa0d0-8a0c-4810-a13d-355f79f08e18',
  'X-Content-Type-Options',
  'nosniff',
  'x-ms-ratelimit-remaining-subscription-reads',
  '11994',
  'Server',
  'Microsoft-IIS/10.0',
  'X-AspNet-Version',
  '4.0.30319',
  'X-Powered-By',
  'ASP.NET',
  'x-ms-correlation-request-id',
  'cdf321ad-5baa-4059-8e00-bd59845b9d85',
  'x-ms-routing-request-id',
  'SOUTHEASTASIA:20211118T021547Z:cdf321ad-5baa-4059-8e00-bd59845b9d85',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'Date',
  'Thu, 18 Nov 2021 02:15:46 GMT'
]);

nock('https://management.azure.com:443', {"encodedQueryParams":true})
  .get('/subscriptions/azure_subscription_id/providers/Microsoft.DataLakeAnalytics/locations/eastus2/operationResults/bb5483e6-b01e-4879-a6f2-f5d9289d426e_0')
  .query(true)
  .reply(200, ["1f8b0800000000000400edbd07601c499625262f6dca7b7f4af54ad7e074a10880601324d8904010ecc188cde692ec1d69472329ab2a81ca6556655d661640cced9dbcf7de7befbdf7de7befbdf7ba3b9d4e27f7dfff3f5c6664016cf6ce4adac99e2180aac81f3f7e7c1f3f227ef1474d9bb5ebe6a3471f9d2d5fd6d5459d37cd47237c5ab76f8a454e5fecedeced6eefd2ff0edeecec3ddabdff68efd3f1838307f7ef3d3cf8a98f7e","c9ff037a49907242000000"], [
  'Cache-Control',
  'no-cache',
  'Pragma',
  'no-cache',
  'Transfer-Encoding',
  'chunked',
  'Content-Type',
  'application/json',
  'Content-Encoding',
  'gzip',
  'Expires',
  '-1',
  'Vary',
  'Accept-Encoding',
  'x-ms-request-id',
  '3d1855c3-6ba2-4c96-87ca-d68fa95a1a01',
  'X-Content-Type-Options',
  'nosniff',
  'x-ms-ratelimit-remaining-subscription-reads',
  '11993',
  'Server',
  'Microsoft-IIS/10.0',
  'X-AspNet-Version',
  '4.0.30319',
  'X-Powered-By',
  'ASP.NET',
  'x-ms-correlation-request-id',
  '1e02cd22-1284-4e0c-847b-479d776d764e',
  'x-ms-routing-request-id',
  'SOUTHEASTASIA:20211118T021550Z:1e02cd22-1284-4e0c-847b-479d776d764e',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'Date',
  'Thu, 18 Nov 2021 02:15:49 GMT'
]);

nock('https://management.azure.com:443', {"encodedQueryParams":true})
  .get('/subscriptions/azure_subscription_id/providers/Microsoft.DataLakeAnalytics/locations/eastus2/operationResults/bb5483e6-b01e-4879-a6f2-f5d9289d426e_0')
  .query(true)
  .reply(200, ["1f8b0800000000000400edbd07601c499625262f6dca7b7f4af54ad7e074a10880601324d8904010ecc188cde692ec1d69472329ab2a81ca6556655d661640cced9dbcf7de7befbdf7de7befbdf7ba3b9d4e27f7dfff3f5c6664016cf6ce4adac99e2180aac81f3f7e7c1f3f227ef1474d9bb5ebe6a3471f9d2d5fd6d5459d37cd47237c5ab76f8a454e5fecedeced6eefd2ff0edeecec3ddabdff68efd3f1838307f7ef3d3cf8a98f7e","c9ff037a49907242000000"], [
  'Cache-Control',
  'no-cache',
  'Pragma',
  'no-cache',
  'Transfer-Encoding',
  'chunked',
  'Content-Type',
  'application/json',
  'Content-Encoding',
  'gzip',
  'Expires',
  '-1',
  'Vary',
  'Accept-Encoding',
  'x-ms-request-id',
  '2da7e7bb-274c-4716-a6cd-fb3f535ca0dc',
  'X-Content-Type-Options',
  'nosniff',
  'x-ms-ratelimit-remaining-subscription-reads',
  '11992',
  'Server',
  'Microsoft-IIS/10.0',
  'X-AspNet-Version',
  '4.0.30319',
  'X-Powered-By',
  'ASP.NET',
  'x-ms-correlation-request-id',
  'bb68b6b7-d1db-4308-83b9-89dbb53ae6a4',
  'x-ms-routing-request-id',
  'SOUTHEASTASIA:20211118T021553Z:bb68b6b7-d1db-4308-83b9-89dbb53ae6a4',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'Date',
  'Thu, 18 Nov 2021 02:15:53 GMT'
]);

nock('https://management.azure.com:443', {"encodedQueryParams":true})
  .get('/subscriptions/azure_subscription_id/providers/Microsoft.DataLakeAnalytics/locations/eastus2/operationResults/bb5483e6-b01e-4879-a6f2-f5d9289d426e_0')
  .query(true)
  .reply(200, ["1f8b0800000000000400edbd07601c499625262f6dca7b7f4af54ad7e074a10880601324d8904010ecc188cde692ec1d69472329ab2a81ca6556655d661640cced9dbcf7de7befbdf7de7befbdf7ba3b9d4e27f7dfff3f5c6664016cf6ce4adac99e2180aac81f3f7e7c1f3f227ef1474d9bb5ebe6a3471f9d2d5fd6d5459d37cd47237c5ab76f8a454e5fecedeced6eefd2ff0edeecec3ddabdff68efd3f1838307f7ef3d3cf8a98f7e","c9ff037a49907242000000"], [
  'Cache-Control',
  'no-cache',
  'Pragma',
  'no-cache',
  'Transfer-Encoding',
  'chunked',
  'Content-Type',
  'application/json',
  'Content-Encoding',
  'gzip',
  'Expires',
  '-1',
  'Vary',
  'Accept-Encoding',
  'x-ms-request-id',
  'd6127bac-777b-4671-abe2-dda07672a9be',
  'X-Content-Type-Options',
  'nosniff',
  'x-ms-ratelimit-remaining-subscription-reads',
  '11991',
  'Server',
  'Microsoft-IIS/10.0',
  'X-AspNet-Version',
  '4.0.30319',
  'X-Powered-By',
  'ASP.NET',
  'x-ms-correlation-request-id',
  'a025552c-93f5-42f6-acbf-a08cbda69028',
  'x-ms-routing-request-id',
  'SOUTHEASTASIA:20211118T021557Z:a025552c-93f5-42f6-acbf-a08cbda69028',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'Date',
  'Thu, 18 Nov 2021 02:15:56 GMT'
]);

nock('https://management.azure.com:443', {"encodedQueryParams":true})
  .get('/subscriptions/azure_subscription_id/providers/Microsoft.DataLakeAnalytics/locations/eastus2/operationResults/bb5483e6-b01e-4879-a6f2-f5d9289d426e_0')
  .query(true)
  .reply(200, ["1f8b0800000000000400edbd07601c499625262f6dca7b7f4af54ad7e074a10880601324d8904010ecc188cde692ec1d69472329ab2a81ca6556655d661640cced9dbcf7de7befbdf7de7befbdf7ba3b9d4e27f7dfff3f5c6664016cf6ce4adac99e2180aac81f3f7e7c1f3f227ef1474d9bb5ebe6a3471fbd5e4fa7793ecb671f8df061ddbe2916397dbeb7b3b7bbbd4bff3b78b3b3f768f7fea3bd4fc70f0e1edcbff7f0e0a7a869be9c0d35bc7f307eb8bfbfb3f3e0fe4f7df44b","fe1fd4e848d06a000000"], [
  'Cache-Control',
  'no-cache',
  'Pragma',
  'no-cache',
  'Transfer-Encoding',
  'chunked',
  'Content-Type',
  'application/json',
  'Content-Encoding',
  'gzip',
  'Expires',
  '-1',
  'Vary',
  'Accept-Encoding',
  'x-ms-request-id',
  '66e0e155-32cb-4d45-bca3-5728dc0a8f35',
  'X-Content-Type-Options',
  'nosniff',
  'x-ms-ratelimit-remaining-subscription-reads',
  '11990',
  'Server',
  'Microsoft-IIS/10.0',
  'X-AspNet-Version',
  '4.0.30319',
  'X-Powered-By',
  'ASP.NET',
  'x-ms-correlation-request-id',
  '675285e3-6117-441b-b9bc-84be1cc541b2',
  'x-ms-routing-request-id',
  'SOUTHEASTASIA:20211118T021600Z:675285e3-6117-441b-b9bc-84be1cc541b2',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'Date',
  'Thu, 18 Nov 2021 02:15:59 GMT'
]);

nock('https://management.azure.com:443', {"encodedQueryParams":true})
  .get('/subscriptions/azure_subscription_id/resourceGroups/myjstest/providers/Microsoft.DataLakeAnalytics/accounts/myaccountxxx')
  .query(true)
  .reply(200, ["1f8b0800000000000400edbd07601c499625262f6dca7b7f4af54ad7e074a10880601324d8904010ecc188cde692ec1d69472329ab2a81ca6556655d661640cced9dbcf7de7befbdf7de7befbdf7ba3b9d4e27f7dfff3f5c6664016cf6ce4adac99e2180aac81f3f7e7c1f3f227ef147abba5ae5755be4cd478f7ef147b3fc3c5b97edd3accd9e676ff3d76d55e7c7d369b55eb66fae57f9478f3e9af95f7d340afffe3c5fee697302f7bdef8f3e3a2feafc2a2bcbd76dd6e2f5d3653629f319bd68be392ecbeaeaf807eb3a3f5bd14b9116afd625b003b8cba26ed759f9226fafaafaadf7c52c9fac2f8036759f37cdf3fc322f09180127401b46456d16d717f97217cd22df037c9748cdfafcbc78476f66c01a6f95f45683b7c6cbbcfde8978c3e5a660b8c5641ff124270b59e94c5348602c1fc802eb259d9d659b12c96174db65811e5a8317dfff5215ecc8b65535ccc0931208e26d9858f2c7db8c8de3dcd2fea3cfff2fc6556d31ce565d12c3e7a746f87bffb4e3539416bfa80005c376dbef862e08ddd1d7ac536712feed1c70429f2cecbbca666f4263528962feba2aa8bf6dafb745a2d56eb367f5911c179f4c0f817adf3fa9ac9fe2a6ff3655b544bc28e3a991797f917799b619ca6f1745dd7d4e64d91d74490936ad9ac172b7e85a8945f453f27725f160dfd4e3361b8fdf59ab8319f313737fad9f1b4a51ee9837c395b5505c64a7c920979dfbd7b370e26285b66e5755b4c1b9ea4d147daee6c466f4d26f7f70feee59f6e4f7676f3edfd83070fb7b34fcff7b6cfefcf1eee1d3c9cedef7d8a7ea6759e01c737054fefdecedeeef62efdefe0cdcedea3ddfb8fee1f8c1fde7b70f070ffa7a8714974f8a29a15e7453ebbc50bc435653565f0d432a797d7cd1e8169b30b22e52ffee86d7ebd4b5f5c66e53a2739187d5400f1bbcd7ad24ceb8249d7dc7db877fef0feece07cfbdef4d307dbfbbb7bfbdb0f77a70fb60fa6e73b0fa6b3c9f9defeee5d9a9b6a5d4ff3cfeb6abd6aee2eae7f9a58a669ef32d96779dddcfda298d655539db7632365c7867877956c784f7f254a139ecaf29d4f5b5175b701f8d12f","f97f008839376243050000"], [
  'Cache-Control',
  'no-cache',
  'Pragma',
  'no-cache',
  'Transfer-Encoding',
  'chunked',
  'Content-Type',
  'application/json',
  'Content-Encoding',
  'gzip',
  'Expires',
  '-1',
  'Vary',
  'Accept-Encoding',
  'x-ms-request-id',
  '63194d04-d805-44c9-86f4-65371f999fdc',
  'X-Content-Type-Options',
  'nosniff',
  'x-ms-ratelimit-remaining-subscription-reads',
  '11989',
  'Server',
  'Microsoft-IIS/10.0',
  'X-AspNet-Version',
  '4.0.30319',
  'X-Powered-By',
  'ASP.NET',
  'x-ms-correlation-request-id',
  '41a9d1c5-7e2a-40af-8410-7a99904a7b57',
  'x-ms-routing-request-id',
  'SOUTHEASTASIA:20211118T021603Z:41a9d1c5-7e2a-40af-8410-7a99904a7b57',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'Date',
  'Thu, 18 Nov 2021 02:16:03 GMT'
]);
