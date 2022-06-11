import { css, html, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { StoreController } from 'exome/lit'
import { GlobalService } from './global.service'
import { router } from './pages.routing'
import { GlobalCss } from '@/shared/styles'

@customElement('web-app')
export class WebApp extends LitElement {
    private GlobalService = new StoreController(this, GlobalService)
    @property()
    name = 'World'
    static styles = [
        GlobalCss,
        css`
            :host {
                display: block;
                border: solid 1px gray;
                padding: 16px;
                max-width: 800px;
            }
            @unocss-placeholder;
        `
    ]
    @property({ type: Number })
    count = 0

    render() {
        return html`
            <div class="flex ">
                <vaadin-button
                    @click=${() => {
                        router.go('/blog')
                    }}
                    part="button"
                >
                    blog
                </vaadin-button>
                <vaadin-button
                    @click=${() => {
                        router.go('/test')
                    }}
                    part="button"
                >
                    test
                </vaadin-button>
            </div>
            <h1>Hello, ${this.name}!</h1>
            <div class="top-117px">child:</div>
            <slot></slot>
            <vaadin-button @click=${this._onClick} part="button">
                Click Count: ${this.GlobalService.store.count}
            </vaadin-button>
        `
    }

    private _onClick() {
        this.GlobalService.store.increment()
    }

    foo(): string {
        return 'foo'
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'web-app': WebApp
    }
}
