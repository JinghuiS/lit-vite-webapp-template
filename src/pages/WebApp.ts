import { UnoCss } from '@/shared'
import { html, css, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { StoreController } from 'exome/lit'
import { GlobalService } from './global.service'
import { router } from './pages.routing'
/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('web-app')
export class WebApp extends LitElement {
    static styles = css`
        :host {
            display: block;
            border: solid 1px gray;
            padding: 16px;
            max-width: 800px;
        }
        ${UnoCss}
    `

    private GlobalService = new StoreController(this, GlobalService)

    @property()
    name = 'World'

    @property({ type: Number })
    count = 0

    render() {
        return html`
            <div>
                <div class="flex">
                    <vaadin-button
                        @click=${() => {
                            router.go('/')
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
                <vaadin-button @click=${this._onClick} part="button">
                    Click Count: ${this.GlobalService.store.count}
                </vaadin-button>
                <div class="mb-40px">child:</div>
            </div>

            <slot></slot>
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
