import { Route } from '@vaadin/router'

export const routes: Route[] = [
    {
        path: '/',
        component: 'web-app',
        action: async () => {
            await import('./WebApp')
        },
        children: [
            {
                path: '',
                component: 'web-blog',
                action: async () => {
                    await import('./blog/Blog')
                }
            }
        ]
    }
]
