import { UnoCss } from '@/shared'
import { css, html, LitElement } from 'lit'
import { customElement } from 'lit/decorators.js'

@customElement('web-test')
export class WebTest extends LitElement {
    static styles = css`
        .font {
            font-size: '20px';
            color: #fff;
        }
        ${UnoCss}
    `

    render() {
        return html` <h1>Test:</h1> `
    }
}
