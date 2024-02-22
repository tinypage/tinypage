import {
  baseKeymap,
  selectParentNode,
  setBlockType,
  toggleMark,
} from "prosemirror-commands";
import { keymap } from "prosemirror-keymap";
import { redo, undo } from "prosemirror-history";
import {
  liftListItem,
  sinkListItem,
  splitListItem,
} from "prosemirror-schema-list";
import { customSchema as schema } from "./schema";

export { baseKeymap };

export const customKeymap = {
  /* Editing actions */
  "Mod-z": undo,
  "Mod-y": redo,

  /* Inline text styles */
  "Mod-b": toggleMark(schema.marks.strong),
  "Mod-i": toggleMark(schema.marks.em),
  "Mod-u": toggleMark(schema.marks.underline),
  "Mod-Shift-s": toggleMark(schema.marks.strikethrough),
  "Mod-Shift-m": toggleMark(schema.marks.code),

  /* Block styles */
  "Mod-Shift-0": setBlockType(schema.nodes.paragraph),
  "Mod-Shift-1": setBlockType(schema.nodes.heading, { level: 1 }),
  "Mod-Shift-2": setBlockType(schema.nodes.heading, { level: 2 }),
  "Mod-Shift-3": setBlockType(schema.nodes.heading, { level: 3 }),
  "Mod-Shift-8": setBlockType(schema.nodes.code_block),

  /* Select parent node */
  "Mod-g": selectParentNode,

  /* Lists */
  Enter: splitListItem(schema.nodes.list_item),
  Tab: sinkListItem(schema.nodes.list_item),
  "Shift-Tab": liftListItem(schema.nodes.list_item),
};
