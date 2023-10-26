"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[5995],{6720:function(o){o.exports=JSON.parse('{"pluginId":"default","version":"7.1.x","label":"7.1.x","banner":"unmaintained","badge":true,"noIndex":false,"className":"docs-version-7.1.x","isLast":false,"docsSidebars":{"version-7.1.x/docs":[{"type":"link","label":"Installation","href":"/oauth2-proxy/docs/7.1.x/","docId":"installation"},{"type":"link","label":"Behaviour","href":"/oauth2-proxy/docs/7.1.x/behaviour","docId":"behaviour"},{"collapsed":false,"type":"category","label":"Configuration","items":[{"type":"link","label":"Overview","href":"/oauth2-proxy/docs/7.1.x/configuration/overview","docId":"configuration/overview"},{"type":"link","label":"OAuth Provider Configuration","href":"/oauth2-proxy/docs/7.1.x/configuration/oauth_provider","docId":"configuration/oauth_provider"},{"type":"link","label":"Session Storage","href":"/oauth2-proxy/docs/7.1.x/configuration/session_storage","docId":"configuration/session_storage"},{"type":"link","label":"TLS Configuration","href":"/oauth2-proxy/docs/7.1.x/configuration/tls","docId":"configuration/tls"},{"type":"link","label":"Alpha Configuration","href":"/oauth2-proxy/docs/7.1.x/configuration/alpha-config","docId":"configuration/alpha-config"}],"collapsible":true},{"collapsed":false,"type":"category","label":"Features","items":[{"type":"link","label":"Endpoints","href":"/oauth2-proxy/docs/7.1.x/features/endpoints","docId":"features/endpoints"}],"collapsible":true},{"collapsed":false,"type":"category","label":"Community","items":[{"type":"link","label":"Security","href":"/oauth2-proxy/docs/7.1.x/community/security","docId":"community/security"}],"collapsible":true}]},"docs":{"behaviour":{"id":"behaviour","title":"Behaviour","description":"1. Any request passing through the proxy (and not matched by --skip-auth-regex) is checked for the proxy\'s session cookie (--cookie-name) (or, if allowed, a JWT token - see --skip-jwt-bearer-tokens).","sidebar":"version-7.1.x/docs"},"community/security":{"id":"community/security","title":"Security","description":"OAuth2 Proxy is a community project.","sidebar":"version-7.1.x/docs"},"configuration/alpha-config":{"id":"configuration/alpha-config","title":"Alpha Configuration","description":"This page contains documentation for alpha features.","sidebar":"version-7.1.x/docs"},"configuration/oauth_provider":{"id":"configuration/oauth_provider","title":"OAuth Provider Configuration","description":"You will need to register an OAuth application with a Provider (Google, GitHub or another provider), and configure it with Redirect URI(s) for the domain you intend to run oauth2-proxy on.","sidebar":"version-7.1.x/docs"},"configuration/overview":{"id":"configuration/overview","title":"Overview","description":"oauth2-proxy can be configured via command line options, environment variables or config file (in decreasing order of precedence, i.e. command line options will overwrite environment variables and environment variables will overwrite configuration file settings).","sidebar":"version-7.1.x/docs"},"configuration/session_storage":{"id":"configuration/session_storage","title":"Session Storage","description":"Sessions allow a user\'s authentication to be tracked between multiple HTTP","sidebar":"version-7.1.x/docs"},"configuration/tls":{"id":"configuration/tls","title":"TLS Configuration","description":"There are two recommended configurations.","sidebar":"version-7.1.x/docs"},"features/endpoints":{"id":"features/endpoints","title":"Endpoints","description":"OAuth2 Proxy responds directly to the following endpoints. All other endpoints will be proxied upstream when authenticated. The /oauth2 prefix can be changed with the --proxy-prefix config variable.","sidebar":"version-7.1.x/docs"},"installation":{"id":"installation","title":"Installation","description":"1.  Choose how to deploy:","sidebar":"version-7.1.x/docs"}}}')}}]);