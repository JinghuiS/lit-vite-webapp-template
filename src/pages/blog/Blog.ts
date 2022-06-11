import { GlobalCss } from '@/shared/styles'
import { StoreController } from 'exome/lit'
import { css, html, LitElement } from 'lit'
import { customElement } from 'lit/decorators.js'
import { GlobalService } from '../global.service'

@customElement('web-blog')
export class WebBlog extends LitElement {
    static styles = css`
        @unocss-placeholder;
    `

    private GlobalService = new StoreController(this, GlobalService)

    render() {
        return html`
            <h1 class="bg-red">blog:</h1>
            <vaadin-button @click=${this.GlobalService.store.increment}
                >++</vaadin-button
            >
            <h1 class=" w-[20px] flex text-lg">
                ${this.GlobalService.store.count}
            </h1>
        `
    }
}
