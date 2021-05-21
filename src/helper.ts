import * as pathToRegexp from 'path-to-regexp';

import {
  ProuterPath,
  ProuterPathExp,
  ProuterRequestProcessor,
  ProuterRequest,
  ProuterParsedHandler,
  ProuterPathKey
} from './entity';

export const routerHelper = {
  getPath(processHash = false) {
    if (processHash) {
      return decodeURI(location.pathname + location.search + location.hash);
    }
    return decodeURI(location.pathname + location.search);
  },

  stringToRegexp(str: string) {
    const keys: ProuterPathKey[] = [];
    const resp = pathToRegexp(str, keys) as ProuterPathExp;
    resp.keys = keys;
    return resp;
  },

  parseQuery(str: string) {
    const searchObj: { [key: string]: string } = {};

    if (str === '') {
      return searchObj;
    }

    const qs = str.slice(1);
    const args = qs.split('&');

    for (const arg of args) {
      const paramKv = arg.split('=');
      searchObj[decodeURIComponent(paramKv[0])] = decodeURIComponent(paramKv[1]);
    }

    return searchObj;
  },

  parsePath(path: string) {
    let url: URL | HTMLAnchorElement;

    if (typeof URL === 'function') {
      url = new URL(path, 'http://example.com');
    } else {
      url = document.createElement('a');
      url.href = 'http://example.com' + path;
    }

    const parsedPath: Partial<ProuterPath> = {
      path: url.pathname,
      queryString: url.search,
      query: routerHelper.parseQuery(url.search)
    };

    return parsedPath;
  },

  /**
   * Obtain the request processors for the given path according to the handlers in the router.
   */
  obtainRequestProcessors(path: string, handlers: ProuterParsedHandler[]) {
    const parsedPath = routerHelper.parsePath(path);
    const requestProcessors: ProuterRequestProcessor[] = [];
    const req = parsedPath as ProuterRequest;
    req.params = {};

    for (const handler of handlers) {
      const result = handler.pathExp.exec(req.path);

      if (result) {
        const params = result.slice(1);
        const keys = handler.pathExp.keys;

        for (let i = 0; i < params.length; i++) {
          req.params[keys[i].name] = decodeURIComponent(params[i]);
        }

        requestProcessors.push({ callback: handler.callback, request: req });
      }
    }

    return requestProcessors;
  }
};
