import ClassicEditorBase from "@ckeditor/ckeditor5-editor-classic/src/classiceditor";

import EssentialsPlugin from "@ckeditor/ckeditor5-essentials/src/essentials";
import HeadingPlugin from "@ckeditor/ckeditor5-heading/src/heading";
// import TitlePlugin from "@ckeditor/ckeditor5-heading/src/title";
import BoldPlugin from "@ckeditor/ckeditor5-basic-styles/src/bold";
import ItalicPlugin from "@ckeditor/ckeditor5-basic-styles/src/italic";
import UnderlinePlugin from "@ckeditor/ckeditor5-basic-styles/src/underline";
import StrikethroughPlugin from "@ckeditor/ckeditor5-basic-styles/src/strikethrough";
import SubscriptPlugin from "@ckeditor/ckeditor5-basic-styles/src/subscript";
import SuperscriptPlugin from "@ckeditor/ckeditor5-basic-styles/src/superscript";
import LinkPlugin from "@ckeditor/ckeditor5-link/src/link";
import FontPlugin from '@ckeditor/ckeditor5-font/src/font';
import ListStylePlugin from "@ckeditor/ckeditor5-list/src/liststyle";
import ImagePlugin from "@ckeditor/ckeditor5-image/src/image";
import ImageResizePlugin from "@ckeditor/ckeditor5-image/src/imageresize";
import ImageToolbarPlugin from "@ckeditor/ckeditor5-image/src/imagetoolbar";
import ImageCaptionPlugin from "@ckeditor/ckeditor5-image/src/imagecaption";
import ImageStylePlugin from "@ckeditor/ckeditor5-image/src/imagestyle";
import Base64UploadAdapter from '@ckeditor/ckeditor5-upload/src/adapters/base64uploadadapter';
import ImageInsertPlugin from '@ckeditor/ckeditor5-image/src/imageinsert';
import TablePlugin from "@ckeditor/ckeditor5-table/src/table";
import MediaEmbedPlugin from "@ckeditor/ckeditor5-media-embed/src/mediaembed";
import AlignmentPlugin from '@ckeditor/ckeditor5-alignment/src/alignment';
import ParagraphPlugin from "@ckeditor/ckeditor5-paragraph/src/paragraph";

export default class ClassicEditor extends ClassicEditorBase { }

ClassicEditor.builtinPlugins = [
  EssentialsPlugin,
  HeadingPlugin,
  // TitlePlugin,
  BoldPlugin,
  ItalicPlugin,
  UnderlinePlugin,
  StrikethroughPlugin,
  SubscriptPlugin,
  SuperscriptPlugin,
  LinkPlugin,
  FontPlugin,
  ListStylePlugin,
  ImagePlugin,
  ImageToolbarPlugin,
  ImageCaptionPlugin,
  ImageStylePlugin,
  ImageResizePlugin,
  Base64UploadAdapter,
  ImageInsertPlugin,
  TablePlugin,
  MediaEmbedPlugin,
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
      "insertImage", "insertTable", "mediaEmbed", "|",
      "undo", "redo"],
    shouldNotGroupWhenFull: true
  },
  language: 'en',
  // title: {
  //   placeholder: "Enter Your Title",
  // },
  indentBlock: {
    offset: 1,
    unit: "em"
  },
  image: {
    toolbar: [
      "imageStyle:alignLeft",
      "imageStyle:alignCenter",
      "imageStyle:alignRight",
    ],
    styles: [
      "alignLeft",
      "alignCenter",
      "alignRight",
    ] 
  },
  placeholder: "Enter your content"
}