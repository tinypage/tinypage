import { Controller } from "@hotwired/stimulus";
import { render } from "../editor";

// Connects to data-controller="entry-view"
export default class extends Controller {
  static targets = ["data", "view"];

  connect() {
    const data = JSON.parse(this.dataTarget.value);
    this.viewTarget.innerHTML = "";
    this.viewTarget.appendChild(render(data));
  }
}
