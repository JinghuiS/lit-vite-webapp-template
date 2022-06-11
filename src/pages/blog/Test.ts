import { css, html, LitElement } from 'lit'
import { customElement } from 'lit/decorators.js'

@customElement('web-test')
export class WebTest extends LitElement {
    static styles = css`
        .font {
            font-size: '20px';
            color: #fff;
        }
        @unocss-placeholder;
    `
    render() {
        return html` <h1>Test:</h1> `
    }
}
