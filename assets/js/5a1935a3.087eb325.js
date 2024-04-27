"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6486],{5897:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>t,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var r=i(5893),o=i(1151);const s={},t="More about Configurations",l={id:"configurations/configurations_in_detail",title:"More about Configurations",description:"More details about important configurations.",source:"@site/docs/configurations/configurations_in_detail.md",sourceDirName:"configurations",slug:"/configurations/configurations_in_detail",permalink:"/TaskWeaver/docs/configurations/configurations_in_detail",draft:!1,unlisted:!1,editUrl:"https://github.com/microsoft/TaskWeaver/tree/main/website/docs/configurations/configurations_in_detail.md",tags:[],version:"current",frontMatter:{},sidebar:"documentSidebar",previous:{title:"Configuration File",permalink:"/TaskWeaver/docs/configurations/overview"},next:{title:"Customization",permalink:"/TaskWeaver/docs/customization"}},a={},d=[{value:"Planner Configuration",id:"planner-configuration",level:2},{value:"Session Configuration",id:"session-configuration",level:2},{value:"Embedding Configuration",id:"embedding-configuration",level:2}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"more-about-configurations",children:"More about Configurations"}),"\n",(0,r.jsx)(n.p,{children:"More details about important configurations."}),"\n",(0,r.jsx)(n.h2,{id:"planner-configuration",children:"Planner Configuration"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"planner.example_base_path"}),":\tThe folder to store planner examples. The default value is ",(0,r.jsx)(n.code,{children:"${AppBaseDir}/planner_examples"}),".\nIf you want to create your own planner examples, you can add them to this folder. More details about ",(0,r.jsx)(n.code,{children:"example"})," can referred to ",(0,r.jsx)(n.a,{href:"/TaskWeaver/docs/customization/example/",children:"example"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"planner.prompt_compression"}),": At times, lengthy conversations with the Planner may exceed the input limitations of the LLM model.\nTo address this issue, we can compress the chat history and send it to the LLM model. The default value for this setting is ",(0,r.jsx)(n.code,{children:"false"}),".\nMore details about ",(0,r.jsx)(n.code,{children:"prompt_compression"})," can be referred to ",(0,r.jsx)(n.a,{href:"../advanced/compression",children:"prompt_compression"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"planner.use_experience"}),": Whether to use experience summarized from the previous chat history in planner. The default value is ",(0,r.jsx)(n.code,{children:"false"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"planner.llm_alias"}),": The alias of the LLM used by the Planner. If you do not specify the LLM for the Planner, the primary LLM will be used by default."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"session-configuration",children:"Session Configuration"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"session.max_internal_chat_round_num"}),": the maximum number of internal chat rounds between Planner and Code Interpreter.\nIf the number of internal chat rounds exceeds this number, the session will be terminated.\nThe default value is ",(0,r.jsx)(n.code,{children:"10"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"session.roles"}),": the roles included for the conversation. The default value is ",(0,r.jsx)(n.code,{children:'["planner", "code_interpreter"]'}),".","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"TaskWeaver has 3 code interpreters:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"code_interpreter"}),": it will generate Python code to fulfill the user's request. This is the default code interpreter."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"code_interpreter_plugin_only"}),": please refer to ",(0,r.jsx)(n.a,{href:"/TaskWeaver/docs/plugin/plugin_only",children:"plugin_only_mode"})," for more details."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"code_interpreter_cli_only"}),": allow users to directly communicate with the Command Line Interface (CLI) in natural language.\nPlease refer to ",(0,r.jsx)(n.a,{href:"/TaskWeaver/docs/advanced/cli_only",children:"cli_only_mode"})," for more details."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["If you do not specify ",(0,r.jsx)(n.code,{children:"planner"}),' in the roles, you will enter the "no-planner" mode.\nIt allows users to directly communicate with the worker role, such as ',(0,r.jsx)(n.code,{children:"code_interpreter"}),".\nIn this mode, users can only send messages to the ",(0,r.jsx)(n.code,{children:"CodeInterpreter"})," and receive messages from the ",(0,r.jsx)(n.code,{children:"CodeInterpreter"}),'.\nNote that only single worker role is allowed in the "no-planner" mode because all user requests will be sent to the worker role directly.\nHere is an example:']}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:" =========================================================\n _____         _     _       __\n|_   _|_ _ ___| | _ | |     / /__  ____ __   _____  _____\n  | |/ _` / __| |/ /| | /| / / _ \\/ __ `/ | / / _ \\/ ___/\n  | | (_| \\__ \\   < | |/ |/ /  __/ /_/ /| |/ /  __/ /\n  |_|\\__,_|___/_|\\_\\|__/|__/\\___/\\__,_/ |___/\\___/_/\n=========================================================\nTaskWeaver: I am TaskWeaver, an AI assistant. To get started, could you please enter your request?\nHuman: generate 10 random numbers\n>>> [PYTHON]Starting... \nimport numpy as np\nrandom_numbers = np.random.rand(10)\nrandom_numbers\n>>> [VERIFICATION]\nNONE\n>>> [STATUS]Starting...         \nSUCCESS\n>>> [RESULT]\nThe execution of the generated python code above has succeeded\n\nThe result of above Python code after execution is:\narray([0.09918602, 0.68732778, 0.44413814, 0.4756623 , 0.48302334,\n       0.8286594 , 0.80994359, 0.35677263, 0.45719317, 0.68240194])\n>>> [CODEINTERPRETER->PLANNER]\nThe following python code has been executed:\n```python\nimport numpy as np\nrandom_numbers = np.random.rand(10)\nrandom_numbers\n```\n\nThe execution of the generated python code above has succeeded\n\nThe result of above Python code after execution is:\narray([0.09918602, 0.68732778, 0.44413814, 0.4756623 , 0.48302334,\n       0.8286594 , 0.80994359, 0.35677263, 0.45719317, 0.68240194])\nTaskWeaver: The following python code has been executed:\n```python\nimport numpy as np\nrandom_numbers = np.random.rand(10)\nrandom_numbers\n```\n\nThe execution of the generated python code above has succeeded\n\nThe result of above Python code after execution is:\narray([0.09918602, 0.68732778, 0.44413814, 0.4756623 , 0.48302334,\n       0.8286594 , 0.80994359, 0.35677263, 0.45719317, 0.68240194])\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"embedding-configuration",children:"Embedding Configuration"}),"\n",(0,r.jsx)(n.p,{children:"In TaskWeaver, we support various embedding models to generate embeddings for auto plugin selection."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"llm.embedding_api_type"}),": The type of the embedding API. We support the following types:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"openai"}),"\n",(0,r.jsx)(n.li,{children:"qwen"}),"\n",(0,r.jsx)(n.li,{children:"ollama"}),"\n",(0,r.jsx)(n.li,{children:"sentence_transformers"}),"\n",(0,r.jsx)(n.li,{children:"glm"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"llm.embedding_model"}),": The embedding model name. The model name should be aligned with ",(0,r.jsx)(n.code,{children:"llm.embedding_api_type"}),".\nWe only list some embedding models we have tested below:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["openai","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"text-embedding-ada-002"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["qwen","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"text-embedding-v1"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["ollama","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"llama2"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["sentence_transformers","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"all-mpnet-base-v2"}),"\n",(0,r.jsx)(n.li,{children:"multi-qa-mpnet-base-dot-v1"}),"\n",(0,r.jsx)(n.li,{children:"all-distilroberta-v1"}),"\n",(0,r.jsx)(n.li,{children:"all-MiniLM-L12-v2"}),"\n",(0,r.jsx)(n.li,{children:"multi-qa-MiniLM-L6-cos-v1"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["zhipuai","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"embedding-2\nYou also can use other embedding models supported by the above embedding APIs."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>l,a:()=>t});var r=i(7294);const o={},s=r.createContext(o);function t(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:t(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);