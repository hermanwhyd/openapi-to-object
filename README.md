# wso2-apiv4-upgrade

WsO2 API-Detail publisher upgrade from v2.5.0 to v4.2.0

# Example
API-Detail v2.5.0
```json
{
   "id": "7a2298c4-c905-403f-8fac-38c73301631f",
   "name": "PizzaShackAPI",
   "description": "This document describe a RESTFul API for Pizza Shack online pizza delivery store.\r\n",
   "context": "/pizzashack",
   "version": "1.0.0",
   "provider": "admin",
   "apiDefinition": "{\"paths\":{\"/order\":{\"post\":{\"x-auth-type\":\"Application & Application User\",\"x-throttling-tier\":\"Unlimited\",\"description\":\"Create a new Order\",\"parameters\":[{\"schema\":{\"$ref\":\"#/definitions/Order\"},\"description\":\"Order object that needs to be added\",\"name\":\"body\",\"required\":true,\"in\":\"body\"}],\"responses\":{\"201\":{\"headers\":{\"Location\":{\"description\":\"The URL of the newly created resource.\",\"type\":\"string\"}},\"schema\":{\"$ref\":\"#/definitions/Order\"},\"description\":\"Created.\"}}}},\"/menu\":{\"get\":{\"x-auth-type\":\"Application & Application User\",\"x-throttling-tier\":\"Unlimited\",\"description\":\"Return a list of available menu items\",\"parameters\":[],\"responses\":{\"200\":{\"headers\":{},\"schema\":{\"title\":\"Menu\",\"properties\":{\"list\":{\"items\":{\"$ref\":\"#/definitions/MenuItem\"},\"type\":\"array\"}},\"type\":\"object\"},\"description\":\"OK.\"}}}}},\"schemes\":[\"https\"],\"produces\":[\"application/json\"],\"swagger\":\"2.0\",\"definitions\":{\"MenuItem\":{\"title\":\"Pizza menu Item\",\"properties\":{\"price\":{\"type\":\"string\"},\"description\":{\"type\":\"string\"},\"name\":{\"type\":\"string\"},\"image\":{\"type\":\"string\"}},\"required\":[\"name\"]},\"Order\":{\"title\":\"Pizza Order\",\"properties\":{\"customerName\":{\"type\":\"string\"},\"delivered\":{\"type\":\"boolean\"},\"address\":{\"type\":\"string\"},\"pizzaType\":{\"type\":\"string\"},\"creditCardNumber\":{\"type\":\"string\"},\"quantity\":{\"type\":\"number\"},\"orderId\":{\"type\":\"string\"}},\"required\":[\"orderId\"]}},\"consumes\":[\"application/json\"],\"info\":{\"title\":\"PizzaShackAPI\",\"description\":\"This document describe a RESTFul API for Pizza Shack online pizza delivery store.\\n\",\"license\":{\"name\":\"Apache 2.0\",\"url\":\"http://www.apache.org/licenses/LICENSE-2.0.html\"},\"contact\":{\"email\":\"architecture@pizzashack.com\",\"name\":\"John Doe\",\"url\":\"http://www.pizzashack.com\"},\"version\":\"1.0.0\"}}",
   "wsdlUri": null,
   "status": "CREATED",
   "responseCaching": "Disabled",
   "cacheTimeout": 300,
   "destinationStatsEnabled": null,
   "isDefaultVersion": false,
   "type": "HTTP",
   "transport":    [
      "http",
      "https"
   ],
   "tags": ["pizza"],
   "tiers": ["Unlimited"],
   "maxTps":    {
      "sandbox": 5000,
      "production": 1000
   },
   "thumbnailUri": null,
   "visibility": "PUBLIC",
   "visibleRoles": [],
   "endpointConfig": "{\"production_endpoints\":{\"url\":\"https://localhost:9443/am/sample/pizzashack/v1/api/\",\"config\":null},\"sandbox_endpoints\":{\"url\":\"https://localhost:9443/am/sample/pizzashack/v1/api/\",\"config\":null},\"endpoint_type\":\"http\"}",
   "endpointSecurity":    {
      "username": "user",
      "type": "basic",
      "password": "pass"
   },
   "gatewayEnvironments": "Production and Sandbox",
   "sequences": [],
   "subscriptionAvailability": null,
   "subscriptionAvailableTenants": [],
   "businessInformation":    {
      "businessOwnerEmail": "marketing@pizzashack.com",
      "technicalOwnerEmail": "architecture@pizzashack.com",
      "technicalOwner": "John Doe",
      "businessOwner": "Jane Roe"
   },
   "corsConfiguration":    {
      "accessControlAllowOrigins": ["*"],
      "accessControlAllowHeaders":       [
         "authorization",
         "Access-Control-Allow-Origin",
         "Content-Type",
         "SOAPAction"
      ],
      "accessControlAllowMethods":       [
         "GET",
         "PUT",
         "POST",
         "DELETE",
         "PATCH",
         "OPTIONS"
      ],
      "accessControlAllowCredentials": false,
      "corsConfigurationEnabled": false
   }
}
```

API-Detail v4.2.0
```json
{
    "name": "PizzaShackAPI",
    "description": "This document describe a RESTFul API for Pizza Shack online pizza delivery store.\r\n",
    "context": "/pizzashack",
    "version": "1.0.0",
    "provider": "admin",
    "wsdlInfo": {
        "type": "WSDL"
    },
    "wsdlUrl": "",
    "responseCachingEnabled": false,
    "cacheTimeout": 300,
    "hasThumbnail": false,
    "isDefaultVersion": false,
    "isRevision": false,
    "revisionId": 1,
    "enableSchemaValidation": false,
    "enableSubscriberVerification": false,
    "type": "HTTP",
    "audience": "PUBLIC",
    "transport": [
        "http",
        "https"
    ],
    "tags": [
        "pizza"
    ],
    "apiThrottlingPolicy": "Unlimited",
    "authorizationHeader": "Authorization",
    "securityScheme": [
        "oauth2"
    ],
    "maxTps": {
        "sandbox": 5000,
        "production": 1000
    },
    "visibility": "PUBLIC",
    "visibleTenants": [],
    "mediationPolicies": [],
    "subscriptionAvailability": "CURRENT_TENANT",
    "additionalProperties": [],
    "additionalPropertiesMap": [],
    "monetization": {
        "enabled": false,
        "properties": null
    },
    "accessControl": "NONE",
    "accessControlRoles": [],
    "businessInformation": {
        "businessOwnerEmail": "marketing@pizzashack.com",
        "technicalOwnerEmail": "architecture@pizzashack.com",
        "technicalOwner": "John Doe",
        "businessOwner": "Jane Roe"
    },
    "corsConfiguration": {
        "accessControlAllowOrigins": [
            "*"
        ],
        "accessControlAllowHeaders": [
            "authorization",
            "Access-Control-Allow-Origin",
            "Content-Type",
            "SOAPAction"
        ],
        "accessControlAllowMethods": [
            "GET",
            "PUT",
            "POST",
            "DELETE",
            "PATCH",
            "OPTIONS"
        ],
        "accessControlAllowCredentials": false,
        "corsConfigurationEnabled": false
    },
    "websubSubscriptionConfiguration": {
        "enable": false
    },
    "workflowStatus": "CREATED",
    "endpointConfig": {
        "production_endpoints": {
            "url": "https://localhost:9443/am/sample/pizzashack/v1/api/",
            "config": null
        },
        "sandbox_endpoints": {
            "url": "https://localhost:9443/am/sample/pizzashack/v1/api/",
            "config": null
        },
        "endpoint_type": "http"
    },
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
    "operations": [
        {
            "target": "/order/{orderId}",
            "verb": "POST",
            "authType": "Application & Application User",
            "throttlingPolicy": "Unlimited"
        },
        {
            "target": "/menu",
            "verb": "GET",
            "authType": "Application & Application User",
            "throttlingPolicy": "Unlimited"
        }
    ],
    "threatProtectionPolicies": null,
    "categories": [],
    "serviceInfo": {
        "key": "PetStore-1.0.0",
        "name": "PetStore",
        "version": "1.0.0",
        "outdated": false
    },
    "advertiseInfo": {
        "advertised": false
    },
    "gatewayVendor": "wso2",
    "gatewayType": "wso2/synapse",
    "asyncTransportProtocols": [
        "http",
        "https"
    ]
}
```
