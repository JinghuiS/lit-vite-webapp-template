import { Router } from '@vaadin/router'
import { HashRouter } from './HashRouter'

type RouterOptions = {
    outlet?: Node | null | undefined
    isHash: boolean
}

export type RouterType = _Router | HashRouter

class _Router extends Router {
    public go = (
        path:
            | string
            | {
                  pathname: string
                  search?: string | undefined
                  hash?: string | undefined
              }
    ) => {
        Router.go(path)
    }
}

export function useRouter(options: RouterOptions): RouterType {
    if (options.isHash) {
        return new HashRouter(options.outlet)
    } else {
        return new _Router(options.outlet)
    }
}
