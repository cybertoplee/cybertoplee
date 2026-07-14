self.__MIDDLEWARE_MATCHERS = [
  {
    "regexp": "^\\/t\\/mcp-server-cybertoplee\\/p\\/cybertoplee(?:\\/(_next\\/data\\/[^/]{1,}))?(?:\\/((?:[^\\/#\\?]+?)(?:\\/(?:[^\\/#\\?]+?))*))?(\\.json|\\.rsc|\\.segments\\/.+\\.segment\\.rsc)?[\\/#\\?]?$",
    "originalSource": "/:path*"
  }
];self.__MIDDLEWARE_MATCHERS_CB && self.__MIDDLEWARE_MATCHERS_CB()