import { Router } from '@vaadin/router'

class HashRouter extends Router {
    public go = (
        path:
            | string
            | {
                  pathname: string
                  search?: string | undefined
                  hash?: string | undefined
              }
    ) => {
        window.location.hash = '#' + path
    }
    __updateBrowserHistory(pathname: any) {
        if (window.location.hash.substring(1) !== pathname) {
            window.location.hash = '#' + pathname.pathname
        }
    }
}

function globalHashChangeHandler(event: any) {
    const pathname =
        event.newURL.indexOf('#') > -1
            ? event.newURL.substring(event.newURL.indexOf('#') + 1)
            : '/'
    Router.go(pathname)
}

const HASHCHANGE: Router.NavigationTrigger = {
    activate() {
        window.addEventListener('hashchange', globalHashChangeHandler, false)
    },
    inactivate() {
        window.removeEventListener('hashchange', globalHashChangeHandler, false)
    }
}
//@ts-ignore
Router.NavigationTrigger = [HASHCHANGE]

export { HashRouter }
