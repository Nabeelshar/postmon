import{f as H,E as I,h as w,b4 as T,bf as u,z as $,o as n,d as B,e as r,t as E,j as e,i as t,c as d,N as M,b9 as h,m,aV as f,aq as x,x as S,_ as z}from"./index.cb7d2b1b.js";import{u as D,a as P}from"./utils.30b28a2e.js";import{I as F,a as N}from"./index.609850ee.js";import{b as V,a as j,c as O,u as W}from"./lens-actions.d9daeb6a.js";import"./date.5007ec6f.js";import"./Tab.vue_vue_type_script_setup_true_lang.ebb0cf62.js";import"./EnvInput.vue_vue_type_script_setup_true_lang.7a6fa16d.js";import"./importers.47a20f34.js";import"./json.eb8ef70b.js";import"./___vite-browser-external_commonjs-proxy.d9545c06.js";import"./TaskOption.1d4f6c52.js";import"./network.26950d14.js";import"./check-circle.741ca2e2.js";import"./helpers.65ea97b2.js";import"./rotate-ccw.089277b4.js";import"./json.50ff94ee.js";import"./grip-vertical.9229403b.js";import"./vuedraggable.umd.336b3c3b.js";import"./files.4937b996.js";import"./index.6567cf9d.js";import"./Shortcode.33f3099c.js";const q={class:"flex flex-col flex-1"},A={class:"sticky z-10 flex items-center justify-between flex-shrink-0 pl-4 overflow-x-auto border-b bg-primary border-dividerLight top-lowerSecondaryStickyFold"},J={class:"font-semibold truncate text-secondaryLight"},K={class:"flex"},G=H({__name:"HTMLLensRenderer",props:{response:null},setup(s){const g=s,o=I(),b=w(null),i=w(!0),{responseBodyText:l}=V(g.response),{downloadIcon:C,downloadResponse:y}=j("text/html",l),{previewFrame:L,previewEnabled:a,togglePreview:k}=O(!1,l),{copyIcon:R,copyResponse:v}=W(l);return D(b,l,T({extendedEditorConfig:{mode:"htmlmixed",readOnly:!0,lineWrapping:i},linter:null,completer:null,environmentHighlights:!0})),u("response.preview.toggle",()=>k()),u("response.file.download",()=>y()),u("response.copy",()=>v()),(Q,_)=>{const c=S,p=$("tippy");return n(),B("div",q,[r("div",A,[r("label",J,E(e(o)("response.body")),1),r("div",K,[s.response.body?t((n(),d(c,{key:0,title:e(o)("state.linewrap"),class:M({"!text-accent":i.value}),icon:e(P),onClick:_[0]||(_[0]=h(U=>i.value=!i.value,["prevent"]))},null,8,["title","class","icon"])),[[p,{theme:"tooltip"}]]):m("",!0),s.response.body?t((n(),d(c,{key:1,title:`${e(a)?e(o)("hide.preview"):e(o)("response.preview_html")} <kbd>${e(f)()}</kbd><kbd>Shift</kbd><kbd>P</kbd>`,icon:e(a)?e(N):e(F),onClick:h(e(k),["prevent"])},null,8,["title","icon","onClick"])),[[p,{theme:"tooltip",allowHTML:!0}]]):m("",!0),s.response.body?t((n(),d(c,{key:2,title:`${e(o)("action.download_file")} <kbd>${e(f)()}</kbd><kbd>J</kbd>`,icon:e(C),onClick:e(y)},null,8,["title","icon","onClick"])),[[p,{theme:"tooltip",allowHTML:!0}]]):m("",!0),s.response.body?t((n(),d(c,{key:3,title:`${e(o)("action.copy")} <kbd>${e(f)()}</kbd><kbd>.</kbd>`,icon:e(R),onClick:e(v)},null,8,["title","icon","onClick"])),[[p,{theme:"tooltip",allowHTML:!0}]]):m("",!0)])]),t(r("div",{ref_key:"htmlResponse",ref:b,class:"flex flex-col flex-1"},null,512),[[x,!e(a)]]),t(r("iframe",{ref_key:"previewFrame",ref:L,class:"covers-response",src:"about:blank",loading:"lazy",sandbox:""},null,512),[[x,e(a)]])])}}});const ve=z(G,[["__scopeId","data-v-f3c3558c"]]);export{ve as default};
//# sourceMappingURL=HTMLLensRenderer.31a21691.js.map
