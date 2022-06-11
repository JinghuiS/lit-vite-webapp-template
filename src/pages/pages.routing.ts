import { Route } from '@vaadin/router'
import { useRouter } from '@/shared'
export const routes: Route[] = [
    {
        path: '/',
        component: 'web-app',
        action: async () => {
            await import('./WebApp')
        },
        children: [
            {
                path: 'blog',
                component: 'web-blog',
                action: async () => {
                    await import('./blog/Blog')
                }
            },
            {
                path: 'test',
                component: 'web-test',
                action: async () => {
                    await import('./blog/Test')
                }
            }
        ]
    }
]
export const router = useRouter({
    isHash: false,
    outlet: document.querySelector('#outlet')
})

router.setRoutes(routes)
