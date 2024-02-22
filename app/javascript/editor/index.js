import { EditorState } from "prosemirror-state";
import { EditorView } from "prosemirror-view";
import { DOMSerializer } from "prosemirror-model";
import { history } from "prosemirror-history";
import { keymap } from "prosemirror-keymap";
import { inputRules } from "prosemirror-inputrules";
import { customSchema } from "./schema";
import { baseKeymap, customKeymap } from "./keymap";
import { customInputRules } from "./input-rules";
import { setBlockType, toggleMark, wrapIn, lift } from "prosemirror-commands";

const serializer = DOMSerializer.fromSchema(customSchema);

export function setup(container, value, onContentChange) {
  const doc = value ? customSchema.nodeFromJSON(JSON.parse(value)) : undefined;

  const state = EditorState.create({
    doc,
    schema: customSchema,
    plugins: [
      history(),
      keymap(customKeymap),
      keymap(baseKeymap),
      inputRules(customInputRules),
    ],
  });

  const view = new EditorView(container, {
    state,
    dispatchTransaction(transaction) {
      let newState = this.state.apply(transaction);
      view.updateState(newState);
      onContentChange(newState.doc.toJSON());
    },
  });

  return view;
}

export function render(value) {
  const doc = customSchema.nodeFromJSON(value);
  return serializer.serializeFragment(doc);
}

export function toggleTextMark(state, dispatch, typeName) {
  toggleMark(customSchema.marks[typeName])(state, dispatch);
}

export function clearTextMarks(state, dispatch) {
  const tr = state.tr;
  const { doc } = state;
  const from = 0;
  const to = doc.content.size;

  // Remove marks by not specifying a specific mark type, which removes all marks.
  tr.removeMark(from, to);

  if (tr.docChanged) {
    dispatch(tr);
  }
}

export function applyBlockType(state, dispatch, typeName, attrs) {
  setBlockType(customSchema.nodes[typeName], attrs)(state, dispatch);
}

export function wrapInType(state, dispatch, typeName) {
  const nodeType = customSchema.nodes[typeName];
  const { $from, $to } = state.selection;

  let isActive = false;

  state.doc.nodesBetween($from.pos, $to.pos, (node) => {
    if (node.type === nodeType) {
      isActive = true;
    }
  });

  const func = isActive ? lift : wrapIn(nodeType);
  func(state, dispatch);

  this.focus();
}
