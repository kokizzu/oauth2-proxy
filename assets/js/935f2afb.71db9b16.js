"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[53],{1109:function(o){o.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":"unreleased","badge":true,"noIndex":false,"className":"docs-version-current","isLast":false,"docsSidebars":{"docs":[{"type":"link","label":"Installation","href":"/oauth2-proxy/docs/next/","docId":"installation"},{"type":"link","label":"Behaviour","href":"/oauth2-proxy/docs/next/behaviour","docId":"behaviour"},{"type":"category","label":"Configuration","collapsed":false,"items":[{"type":"link","label":"Overview","href":"/oauth2-proxy/docs/next/configuration/overview","docId":"configuration/overview"},{"type":"category","label":"OAuth Provider Configuration","items":[{"type":"link","label":"Google (default)","href":"/oauth2-proxy/docs/next/configuration/providers/google","docId":"configuration/providers/google"},{"type":"link","label":"Azure","href":"/oauth2-proxy/docs/next/configuration/providers/azure","docId":"configuration/providers/azure"},{"type":"link","label":"ADFS","href":"/oauth2-proxy/docs/next/configuration/providers/adfs","docId":"configuration/providers/adfs"},{"type":"link","label":"Facebook","href":"/oauth2-proxy/docs/next/configuration/providers/facebook","docId":"configuration/providers/facebook"},{"type":"link","label":"GitHub","href":"/oauth2-proxy/docs/next/configuration/providers/github","docId":"configuration/providers/github"},{"type":"link","label":"Gitea","href":"/oauth2-proxy/docs/next/configuration/providers/gitea","docId":"configuration/providers/gitea"},{"type":"link","label":"Keycloak","href":"/oauth2-proxy/docs/next/configuration/providers/keycloak","docId":"configuration/providers/keycloak"},{"type":"link","label":"Keycloak OIDC","href":"/oauth2-proxy/docs/next/configuration/providers/keycloak_oidc","docId":"configuration/providers/keycloak_oidc"},{"type":"link","label":"GitLab","href":"/oauth2-proxy/docs/next/configuration/providers/gitlab","docId":"configuration/providers/gitlab"},{"type":"link","label":"LinkedIn","href":"/oauth2-proxy/docs/next/configuration/providers/linkedin","docId":"configuration/providers/linkedin"},{"type":"link","label":"Microsoft Azure AD","href":"/oauth2-proxy/docs/next/configuration/providers/azure_ad","docId":"configuration/providers/azure_ad"},{"type":"link","label":"OpenID Connect","href":"/oauth2-proxy/docs/next/configuration/providers/openid_connect","docId":"configuration/providers/openid_connect"},{"type":"link","label":"Login.gov","href":"/oauth2-proxy/docs/next/configuration/providers/login_gov","docId":"configuration/providers/login_gov"},{"type":"link","label":"NextCloud","href":"/oauth2-proxy/docs/next/configuration/providers/nextcloud","docId":"configuration/providers/nextcloud"},{"type":"link","label":"DigitalOcean","href":"/oauth2-proxy/docs/next/configuration/providers/digitalocean","docId":"configuration/providers/digitalocean"},{"type":"link","label":"BitBucket","href":"/oauth2-proxy/docs/next/configuration/providers/bitbucket","docId":"configuration/providers/bitbucket"}],"collapsed":true,"collapsible":true,"href":"/oauth2-proxy/docs/next/configuration/providers/"},{"type":"link","label":"Session Storage","href":"/oauth2-proxy/docs/next/configuration/session_storage","docId":"configuration/session_storage"},{"type":"link","label":"TLS Configuration","href":"/oauth2-proxy/docs/next/configuration/tls","docId":"configuration/tls"},{"type":"link","label":"Alpha Configuration","href":"/oauth2-proxy/docs/next/configuration/alpha-config","docId":"configuration/alpha-config"}],"collapsible":true,"href":"/oauth2-proxy/docs/next/configuration/overview"},{"type":"category","label":"Features","collapsed":false,"items":[{"type":"link","label":"Endpoints","href":"/oauth2-proxy/docs/next/features/endpoints","docId":"features/endpoints"}],"collapsible":true,"href":"/oauth2-proxy/docs/next/features/endpoints"},{"type":"category","label":"Community","collapsed":false,"items":[{"type":"link","label":"Contribution Guide","href":"/oauth2-proxy/docs/next/community/contribution","docId":"community/contribution"},{"type":"link","label":"Security","href":"/oauth2-proxy/docs/next/community/security","docId":"community/security"}],"collapsible":true,"href":"/oauth2-proxy/docs/next/community/security"}]},"docs":{"behaviour":{"id":"behaviour","title":"Behaviour","description":"1. Any request passing through the proxy (and not matched by --skip-auth-regex) is checked for the proxy\'s session cookie (--cookie-name) (or, if allowed, a JWT token - see --skip-jwt-bearer-tokens).","sidebar":"docs"},"community/contribution":{"id":"community/contribution","title":"Contribution Guide","description":"We track bugs and issues using Github.","sidebar":"docs"},"community/security":{"id":"community/security","title":"Security","description":"OAuth2 Proxy is a community project.","sidebar":"docs"},"configuration/alpha-config":{"id":"configuration/alpha-config","title":"Alpha Configuration","description":"This page contains documentation for alpha features.","sidebar":"docs"},"configuration/overview":{"id":"configuration/overview","title":"Overview","description":"oauth2-proxy can be configured via command line options, environment variables or config file (in decreasing order of precedence, i.e. command line options will overwrite environment variables and environment variables will overwrite configuration file settings).","sidebar":"docs"},"configuration/providers/adfs":{"id":"configuration/providers/adfs","title":"ADFS","description":"1. Open the ADFS administration console on your Windows Server and add a new Application Group","sidebar":"docs"},"configuration/providers/azure":{"id":"configuration/providers/azure","title":"Azure","description":"1. Add an application//portal.azure.com, choose Azure Active Directory, select","sidebar":"docs"},"configuration/providers/azure_ad":{"id":"configuration/providers/azure_ad","title":"Microsoft Azure AD","description":"For adding an application to the Microsoft Azure AD follow these steps to add an application.","sidebar":"docs"},"configuration/providers/bitbucket":{"id":"configuration/providers/bitbucket","title":"BitBucket","description":"1. Add a new OAuth consumer","sidebar":"docs"},"configuration/providers/digitalocean":{"id":"configuration/providers/digitalocean","title":"DigitalOcean","description":"1. Create a new OAuth application","sidebar":"docs"},"configuration/providers/facebook":{"id":"configuration/providers/facebook","title":"Facebook","description":"1.  Create a new FB App from","sidebar":"docs"},"configuration/providers/gitea":{"id":"configuration/providers/gitea","title":"Gitea","description":"1. Create a new application///user/settings/applications","sidebar":"docs"},"configuration/providers/github":{"id":"configuration/providers/github","title":"GitHub","description":"1.  Create a new project//github.com/settings/developers","sidebar":"docs"},"configuration/providers/gitlab":{"id":"configuration/providers/gitlab","title":"GitLab","description":"This auth provider has been tested against Gitlab version 12.X. Due to Gitlab API changes, it may not work for version","sidebar":"docs"},"configuration/providers/google":{"id":"configuration/providers/google","title":"Google (default)","description":"For Google, the registration steps are:","sidebar":"docs"},"configuration/providers/index":{"id":"configuration/providers/index","title":"OAuth Provider Configuration","description":"You will need to register an OAuth application with a Provider (Google, GitHub or another provider), and configure it","sidebar":"docs"},"configuration/providers/keycloak":{"id":"configuration/providers/keycloak","title":"Keycloak","description":"This is the legacy provider for Keycloak, use Keycloak OIDC Auth Provider if possible.","sidebar":"docs"},"configuration/providers/keycloak_oidc":{"id":"configuration/providers/keycloak_oidc","title":"Keycloak OIDC","description":"Keycloak has updated its admin console and as of version 19.0.0, the new admin console is enabled by default. The","sidebar":"docs"},"configuration/providers/linkedin":{"id":"configuration/providers/linkedin","title":"LinkedIn","description":"For LinkedIn, the registration steps are:","sidebar":"docs"},"configuration/providers/login_gov":{"id":"configuration/providers/login_gov","title":"Login.gov","description":"login.gov is an OIDC provider for the US Government.","sidebar":"docs"},"configuration/providers/nextcloud":{"id":"configuration/providers/nextcloud","title":"NextCloud","description":"The Nextcloud provider allows you to authenticate against users in your","sidebar":"docs"},"configuration/providers/openid_connect":{"id":"configuration/providers/openid_connect","title":"OpenID Connect","description":"OpenID Connect is a spec for OAUTH 2.0 + identity that is implemented by many major providers and several open source projects.","sidebar":"docs"},"configuration/session_storage":{"id":"configuration/session_storage","title":"Session Storage","description":"Sessions allow a user\'s authentication to be tracked between multiple HTTP","sidebar":"docs"},"configuration/tls":{"id":"configuration/tls","title":"TLS Configuration","description":"There are two recommended configurations:","sidebar":"docs"},"features/endpoints":{"id":"features/endpoints","title":"Endpoints","description":"OAuth2 Proxy responds directly to the following endpoints. All other endpoints will be proxied upstream when authenticated. The /oauth2 prefix can be changed with the --proxy-prefix config variable.","sidebar":"docs"},"installation":{"id":"installation","title":"Installation","description":"1.  Choose how to deploy:","sidebar":"docs"}}}')}}]);