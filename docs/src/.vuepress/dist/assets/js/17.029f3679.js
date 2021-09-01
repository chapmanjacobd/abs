(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{516:function(e,t,a){"use strict";a.r(t);var i=a(45),n=Object(i.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"runtime"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#runtime"}},[e._v("#")]),e._v(" Runtime")]),e._v(" "),a("p",[e._v("The ABS runtime lets you customize how ABS scripts are interpreted,\nand exposes some useful global variables.")]),e._v(" "),a("h2",{attrs:{id:"abs-init-file"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#abs-init-file"}},[e._v("#")]),e._v(" ABS init file")]),e._v(" "),a("p",[e._v("When the ABS interpreter starts running, it will load an optional\nABS script as its init file. The ABS init file path can be\nconfigured via the OS environment variable "),a("code",[e._v("ABS_INIT_FILE")]),e._v(". The\ndefault value is "),a("code",[e._v("ABS_INIT_FILE=~/.absrc")]),e._v(".")]),e._v(" "),a("p",[e._v("If the "),a("code",[e._v("ABS_INIT_FILE")]),e._v(" exists, it will be evaluated before the\ninterpreter begins in both interactive REPL or script modes.\nThe result of all expressions evaluated in the init file become\npart of the ABS global environment which are available to command\nline expressions or script programs.")]),e._v(" "),a("p",[e._v("Have a look at "),a("a",{attrs:{href:"https://github.com/abs-lang/abs/tree/master/examples/absrc.abs",target:"_blank",rel:"noopener noreferrer"}},[e._v("an example ABS init file"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"abs-interactive"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#abs-interactive"}},[e._v("#")]),e._v(" ABS_INTERACTIVE")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("ABS_INTERACTIVE")]),e._v(" global environment variable\nis pre-set to "),a("code",[e._v("true")]),e._v(" or "),a("code",[e._v("false")]),e._v(" so that the init file can determine\nwhich mode is running. This is useful if you wish to set the ABS REPL\ncommand line prompt or history configuration variables in the init file.\nThis will preset the prompt and history parameters for the interactive\nREPL (see "),a("a",{attrs:{href:"/misc/configuring-the-repl#REPL_Command_History"}},[e._v("REPL Command History")]),e._v(" above).")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ abs\nHello user, welcome to the ABS programming language!\nType 'quit' when you're done, 'help' if you get lost!\n⧐  ABS_INTERACTIVE\ntrue\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);