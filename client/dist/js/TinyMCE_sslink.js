webpackJsonp([3],{910:function(t,n,e){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(n,"__esModule",{value:!0});var r=e(97),o=i(r),a=e(28),u=i(a),s=e(26),l=i(s),c={init:function(t){var n=o.default.getActions("sslink").map(function(n){return Object.assign({},n,{onclick:function(){return n.onclick(t)}})});t.addButton("sslink",{icon:"link",title:"Insert Link",type:"menubutton",menu:n}),t.addMenuItem("sslink",{icon:"link",text:"Insert Link",menu:n})}};l.default.entwine("ss",function(t){t(".insert-link__dialog-wrapper").entwine({Element:null,Data:{},onunmatch:function(){this._clearModal()},_clearModal:function(){u.default.unmountComponentAtNode(this[0])},open:function(){this.renderModal(!0)},close:function(){this.setData({}),this.renderModal(!1)},renderModal:function(){},handleInsert:function(t){var n=this.buildAttributes(t);return this.insertLinkInEditor(n),this.close(),Promise.resolve()},buildAttributes:function(t){var n=t.Anchor&&t.Anchor.length?"#"+t.Anchor:"";return{href:""+t.Link+n,target:t.TargetBlank?"_blank":"",title:t.Description}},insertLinkInEditor:function(t){var n=this.getElement().getEditor();n.insertLink(t),n.addUndo(),n.repaint()},getOriginalAttributes:function(){var n=this.getElement().getEditor(),e=t(n.getSelectedNode()),i=(e.attr("href")||"").split("#");return{Link:i[0]||"",Anchor:i[1]||"",Description:e.attr("title"),TargetBlank:!!e.attr("target")}}})}),tinymce.PluginManager.add("sslink",function(t){return c.init(t)}),n.default=c},97:function(t,n){t.exports=TinyMCEActionRegistrar}},[910]);