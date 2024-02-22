import { Controller } from "@hotwired/stimulus";

// Connects to data-controller="dialog"
export default class extends Controller {
  connect() {}

  close(event) {
    if (event.target === event.currentTarget) {
      this.element.remove();
    }
  }
}
