# wso2-apiv4-upgrade

WsO2 API-Detail publisher upgrade from v2.5.0 to v4.2.0

# Example
API-Detail v2.5.0
```json
{
    "openapi": "3.0.1",
    "info": {
        "title": "API-RequestCatcher-v1-Resource",
        "version": "v1"
    },
    "servers": [
        {
            "url": "/"
        }
    ],
    "security": [
        {
            "default": []
        }
    ],
    "paths": {
        "/*": {
            "get": {
                "responses": {
                    "200": {
                        "description": "OK"
                    }
                },
                "security": [
                    {
                        "default": []
                    }
                ],
                "x-auth-type": "Application & Application User",
                "x-throttling-tier": "Unlimited"
            }
        }
    },
    "components": {
        "securitySchemes": {
            "default": {
                "type": "oauth2",
                "flows": {
                    "implicit": {
                        "authorizationUrl": "https://test.com",
                        "scopes": {}
                    }
                }
            }
        }
    }
}
```

API-Detail v4.2.0
```json
```
