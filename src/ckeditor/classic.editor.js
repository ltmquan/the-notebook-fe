import ClassicEditorBase from "@ckeditor/ckeditor5-editor-classic/src/classiceditor";

import EssentialsPlugin from "@ckeditor/ckeditor5-essentials/src/essentials";
import HeadingPlugin from "@ckeditor/ckeditor5-heading/src/heading";
import BoldPlugin from "@ckeditor/ckeditor5-basic-styles/src/bold";
import ItalicPlugin from "@ckeditor/ckeditor5-basic-styles/src/italic";
import UnderlinePlugin from "@ckeditor/ckeditor5-basic-styles/src/underline";
import StrikethroughPlugin from "@ckeditor/ckeditor5-basic-styles/src/strikethrough";
import SubscriptPlugin from "@ckeditor/ckeditor5-basic-styles/src/subscript";
import SuperscriptPlugin from "@ckeditor/ckeditor5-basic-styles/src/superscript";
import LinkPlugin from "@ckeditor/ckeditor5-link/src/link";
import FontPlugin from '@ckeditor/ckeditor5-font/src/font';
import ListStylePlugin from "@ckeditor/ckeditor5-list/src/liststyle";
import TablePlugin from "@ckeditor/ckeditor5-table/src/table";
import AlignmentPlugin from '@ckeditor/ckeditor5-alignment/src/alignment';
import ParagraphPlugin from "@ckeditor/ckeditor5-paragraph/src/paragraph";

export default class ClassicEditor extends ClassicEditorBase { }

ClassicEditor.builtinPlugins = [
  EssentialsPlugin,
  HeadingPlugin,
  BoldPlugin,
  ItalicPlugin,
  UnderlinePlugin,
  StrikethroughPlugin,
  SubscriptPlugin,
  SuperscriptPlugin,
  LinkPlugin,
  FontPlugin,
  ListStylePlugin,
  TablePlugin,
  AlignmentPlugin,
  ParagraphPlugin,
]

ClassicEditor.defaultConfig = {
  toolbar: {
    items: [
      "heading", "|",
      "bold", "italic", "underline", "strikethrough", "subscript", "superscript", "link", "|",
      "fontSize", "fontFamily", "fontColor", "fontBackgroundColor", "|",
      // "-",
      "bulletedList", "numberedList", "|",
      "alignment:left", "alignment:center", "alignment:right", "alignment:justify", 
      "insertTable", "|",
      "undo", "redo"],
    shouldNotGroupWhenFull: true
  },
  language: 'en',
  indentBlock: {
    offset: 1,
    unit: "em"
  },
  placeholder: "Enter your content"
}