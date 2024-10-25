import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

export class NasaImage extends DDDSuper(I18NMixin(LitElement)) {
  constructor() {
    super();
    this.title = "";
    this.source = "";
    this.alt = "";
    this.owner = "";
  }

  static get properties() {
    return {
      source: { type: String },
      title: { type: String },
      alt: { type: String },
      owner: { type: String },
    };
  }

  static get styles() {
    return [
      css`
        :host {
          width: 240px;
          height: 260px;
          display: inline-grid;
          margin: var(--ddd-spacing-4);
          margin-bottom: var(--ddd-spacing-8);
        }
        .image {
          background-color: gray;
          border-radius: 16px;
          padding: var(--ddd-spacing-4) 0;
        }
        .image div {
          max-width: 240px;
          height: 40px;
          font-size: 16px;
          font-weight: bold;
          text-align: center;
        }

        .image img {
          width: 240px;
          height: 200px;
        }
        .image img:hover {
          background-color: gray;
          opacity: 0.5;
        }
        #owner {
          font-size: 12px;
          font-style: italic;
        }
        a:link,
        a:visited,
        a:hover,
        a:active {
          text-decoration: none;
          color: black;
        }
      `,
    ];
  }

  render() {
    return html`
      <a class="image" href="${this.source}">
        <div id="owner">${this.owner}</div>
        <img src="${this.source}" alt="${this.alt}" />
        <div>${this.title}</div>
      </a>
    `;
  }
  static get tag() {
    return "nasa-image";
  }
}
customElements.define(NasaImage.tag, NasaImage);
