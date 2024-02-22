import { Controller } from "@hotwired/stimulus";

import {
  applyBlockType,
  clearTextMarks,
  setup,
  toggleTextMark,
  wrapInType,
} from "../editor";

// Connects to data-controller="editor"
export default class extends Controller {
  static targets = ["container", "content", "renderedContent", "toolbar"];

  connect() {
    console.log("[connect] editor");

    this.editorView = setup(
      this.containerTarget,
      this.contentTarget.value,
      (content) => {
        this.contentTarget.value = JSON.stringify(content);
      },
    );
  }

  toggleMark({ params }) {
    toggleTextMark(
      this.editorView.state,
      this.editorView.dispatch,
      params.mark,
    );

    this.focus();
  }

  clearFormatting() {
    clearTextMarks(this.editorView.state, this.editorView.dispatch);
  }

  formatBlockType({ params }) {
    applyBlockType(
      this.editorView.state,
      this.editorView.dispatch,
      params.type,
      params.attrs,
    );

    this.focus();
  }

  wrapInType({ params }) {
    wrapInType(this.editorView.state, this.editorView.dispatch, params.type);
  }

  toggleToolbar() {
    this.toolbarTarget.classList.toggle("_active");
  }

  focus() {
    this.editorView.focus();
  }
}
