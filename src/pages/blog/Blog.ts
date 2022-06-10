import { UnoCss } from '@/shared'
import { StoreController } from 'exome/lit'
import { css, html, LitElement } from 'lit'
import { customElement } from 'lit/decorators.js'
import { GlobalService } from '../global.service'

@customElement('web-blog')
export class WebBlog extends LitElement {
    static styles = css`
        .font {
            font-size: '20px';
            color: #fff;
        }
        ${UnoCss}
    `
    private GlobalService = new StoreController(this, GlobalService)

    render() {
        return html`
            <h1>blog:</h1>
            <vaadin-button @click=${this.GlobalService.store.increment}
                >++</vaadin-button
            >
            <h1 class="bg-red font ">${this.GlobalService.store.count}</h1>
            <slot></slot>
        `
    }
}
