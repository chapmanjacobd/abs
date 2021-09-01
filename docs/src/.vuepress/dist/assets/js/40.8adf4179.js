(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{539:function(t,a,s){"use strict";s.r(a);var n=s(45),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"why-another-scripting-language"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#why-another-scripting-language"}},[t._v("#")]),t._v(" Why another scripting language?")]),t._v(" "),s("p",[t._v("If you're a developer, chances are that you got your hands\non a server at some point during your career and bumped\ninto an "),s("code",[t._v(".sh")]),t._v(" script")]),t._v(" "),s("p",[t._v("You might have felt, though, that the script was written\nin a fairly strange language, with a very untraditional syntax:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" -z "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$STRING")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("then")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fi")]),t._v("\n")])])]),s("p",[t._v("("),s("em",[t._v("if you're wondering, the above snippet would check whether the variable\n"),s("code",[t._v("$STRING")]),t._v(" is an empty string")]),t._v(")")]),t._v(" "),s("p",[t._v("Far for bashing Bash (pun intended) or the generic "),s("a",{attrs:{href:"http://pubs.opengroup.org/onlinepubs/9699919799/utilities/V3_chap02.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("shell command language"),s("OutboundLink")],1),t._v(",\nwe believe there should be a more straightforward alternative\nto automating tasks.")]),t._v(" "),s("p",[t._v("We believe the pragmatic Python or the elegant Ruby haven't been\nable to overcome Bash as the "),s("em",[t._v("de-facto")]),t._v(" standard\nfor shell scripting because of the "),s("a",{attrs:{href:"https://www.quora.com/What-are-the-main-advantages-of-Bash-as-a-programming-language",target:"_blank",rel:"noopener noreferrer"}},[t._v("inner simplicity of Bash"),s("OutboundLink")],1),t._v(".\nRunning programs in parallel, interacting with the underlying system,\nease of portability... ...these are quick and easy wins when you're\nwriting those "),s("code",[t._v(".sh")]),t._v(" files.")]),t._v(" "),s("p",[t._v("We believe, though, there could be an alternative where a programmer would\ncombine the syntax and flexibility of general-purpose languages\n(Python, Ruby and JS, to name a few) with the benefits of Bash.")]),t._v(" "),s("p",[t._v("This is why we developed the ABS programming language: a\nlanguage that is a joy to work with in the context of shell scripting:\nit isn't here to replace the likes of PHP, Java or Python,\nneither it wants to diminish the importance of Bash.")]),t._v(" "),s("p",[t._v("ABS tries to mix a more modern syntax with the\nsimplicity of Bash.")]),t._v(" "),s("p",[t._v("Let's take a look a look at some practical ABS code. We will now\ncall the API of nba.com in order to retrieve the stats for\none of the NBA games played in 2017:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("r "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://data.nba.net/prod/v1/20170201/0021600732_boxscore.json"')]),t._v(" -H "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'DNT: 1'")]),t._v(" -H "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Accept-Encoding: gzip, deflate, sdch'")]),t._v(" -H "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Accept-Language: en'")]),t._v(" -H "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/57.0.2987.133 Safari/537.36'")]),t._v(" -H "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Accept: */*'")]),t._v(" -H "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Referer: http://stats.nba.com/'")]),t._v(" -H "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Connection: keep-alive'")]),t._v(" --compressed"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("r.ok "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    echo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Could not fetch game data. Bummer!"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    exit"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\ndoc "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" r.json"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nname, city "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" doc.basicGameData.arena "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# arena is a JSON object: {"name": "TD Garden", "city": "Boston"}')]),t._v("\n\necho"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"The game was played at the %s arena in %s"')]),t._v(", name, city"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nhighlight "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" doc.basicGameData.nugget.text\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" highlight."),s("span",{pre:!0,attrs:{class:"token function-name function"}},[t._v("len")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    echo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"The press said: '),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("%s"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v('"')]),t._v(", highlight"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# The game was played at the TD Garden in Boston")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# The press said: "Thomas scores 19 of 44 points in 4th quarter"')]),t._v("\n")])])]),s("p",[t._v("You will notice 3 things:")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://en.wikipedia.org/wiki/Isaiah_Thomas_(basketball)",target:"_blank",rel:"noopener noreferrer"}},[t._v("Isiah Thomas"),s("OutboundLink")],1),t._v(" seems to be a really good player")]),t._v(" "),s("li",[t._v("you should be very familiar with the above syntax")]),t._v(" "),s("li",[t._v("the language is capable of seamlessly throwing shell commands into the mix")])]),t._v(" "),s("p",[t._v("This is exactly why ABS was born: a familiar syntax, and the convenience of Bash.")]),t._v(" "),s("p",[t._v("A sneak-peek at some of the things ABS can elegantly do:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Unix pipes work")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ip")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" icanhazip.com "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("tr")]),t._v(" -d "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'"),s("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[t._v("\\n")]),t._v("'")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")])]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# We now have a string -> "10.10.10.12"')]),t._v("\necho"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ip"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Let's play with it -> [10, 10, 10, 12]")]),t._v("\nparts "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ip.split"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"."')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(".map"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("int"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 42 anyone?")]),t._v("\necho"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("parts.sum"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("))")]),t._v("\n")])])]),s("p",[t._v("and some more opinionated language features:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Case-insensitive string comparison")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"LeBron"')]),t._v(" ~ "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"lebron"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Array concatenation")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" + "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(", "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Reading from the stdin")]),t._v("\necho"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("\"You typed '%s'\"")]),t._v(", stdin"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("))")]),t._v("\n")])])]),s("h2",{attrs:{id:"next"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#next"}},[t._v("#")]),t._v(" Next")]),t._v(" "),s("p",[t._v("That's about it for the intro, we don't want to spoil the rest.\nYou can now head over to read "),s("a",{attrs:{href:"/introduction/how-to-run-abs-code"}},[t._v("how to run ABS code!")])])])}),[],!1,null,null,null);a.default=e.exports}}]);