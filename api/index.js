const OpenAPIParser = require('@readme/openapi-parser');
const express = require("express");

const app = express();

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.post('/convert', async function (req, res, next) {

    // crete a variable
    const apiDetailV2Spec = req.body;
    const endpointConfig = apiDetailV2Spec.endpointConfig ? JSON.parse(apiDetailV2Spec.endpointConfig) : null;

    // api service
    let serviceInfo = null;
    try {
      const url =  new URL(endpointConfig?.production_endpoints?.url || 'http://dummy.com');
      const gkeList = ['.api.devgcp.', '.adapter.api.gcp.', '.gcp.intra.', '.anthosdev.intra.', '.anthos.intra.'];
      for(p of gkeList) {
        const serviceNames = url.hostname.split(p);
        if (serviceNames.length > 1) {
          serviceInfo = {
            "key": serviceNames[0] + "-v1",
            "name": serviceNames[0],
            "version": "v1",
            "outdated": false
          }
          break;
        }
      }
    } catch(e) {
      console.log('Failed parse URL for serviceInfo: ' + e);
    }

    // api operation
    const operations = [];
    if (apiDetailV2Spec.apiDefinition) {
      const parser = new OpenAPIParser();
      const apiSpec = JSON.parse(apiDetailV2Spec.apiDefinition);

      await parser.validate(apiSpec);
      const paths = parser.api.paths;

      for (const [kp, vp] of Object.entries(paths)) {
        for (const [km, vm] of Object.entries(vp)) {
          operations.push({
            "target": kp,
            "verb": km.toUpperCase(),
            "authType": "Application & Application User",
            "throttlingPolicy": "Unlimited"
          })
        }
      }
    }

    let apiDetailV4Spec = {
      name: apiDetailV2Spec.name,
      description: apiDetailV2Spec.description,
      context: apiDetailV2Spec.context,
      version: apiDetailV2Spec.version,
      provider: apiDetailV2Spec.provider,
      wsdlInfo: {
        type: "WSDL"
      },
      wsdlUrl: "",
      responseCachingEnabled: apiDetailV2Spec.responseCaching === 'Disabled' ? false : true,
      cacheTimeout: apiDetailV2Spec.cacheTimeout,
      hasThumbnail: false,
      isDefaultVersion: apiDetailV2Spec.isDefaultVersion,
      isRevision: false,
      revisionId: 1,
      enableSchemaValidation: false,
      enableSubscriberVerification: false,
      type: apiDetailV2Spec.type,
      audience: "PUBLIC",
      transport: apiDetailV2Spec.transport,
      tags: apiDetailV2Spec.tags,
      policies: apiDetailV2Spec.tier,
      apiThrottlingPolicy: "Unlimited",
      authorizationHeader: "Authorization",
      securityScheme: [
        "oauth2"
      ],
      maxTps: apiDetailV2Spec.maxTps,
      visibility: apiDetailV2Spec.visibility,
      visibleTenants: [],
      mediationPolicies: [],
      subscriptionAvailability: "CURRENT_TENANT",
      additionalProperties: apiDetailV2Spec.additionalProperties ?? [],
      additionalPropertiesMap: [],
      monetization: {
        enabled: false,
        properties: null
      },
      accessControl: "NONE",
      accessControlRoles: [],
      businessInformation: apiDetailV2Spec.businessInformation,
      corsConfiguration: apiDetailV2Spec.corsConfiguration,
      websubSubscriptionConfiguration: {
        enable: false
      },
      workflowStatus: "CREATED",
      "endpointConfig": endpointConfig,
      "endpointImplementationType": "INLINE",
      "scopes": [
        {
          "scope": {
            "name": "apim:api_view",
            "displayName": "api_view",
            "description": "This Scope can used to view Apis",
            "bindings": [
              "admin",
              "Internal/creator",
              "Internal/publisher"
            ]
          },
          "shared": true
        }
      ],
      "operations": operations,
      "threatProtectionPolicies": null,
      "categories": [],
      "serviceInfo": serviceInfo,
      "advertiseInfo": {
        "advertised": false
      },
      "gatewayVendor": "wso2",
      "gatewayType": "wso2/synapse",
      "asyncTransportProtocols": [
        "http",
        "https"
      ]
    };

    return res.json(apiDetailV4Spec);
})

app.get("/", (req, res) => res.send("Express on Vercel"));

app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;
