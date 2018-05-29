(function(){function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}return e})()({1:[function(require,module,exports){
'use strict';

const loadSVM = require('./src/loadSVM');
const libsvm = require('./dist/asm/libsvm');
module.exports = loadSVM(libsvm);

},{"./dist/asm/libsvm":2,"./src/loadSVM":3}],2:[function(require,module,exports){
var Module=module.exports={};var Module;if(!Module)Module=(typeof Module!=="undefined"?Module:null)||{};var moduleOverrides={};for(var key in Module){if(Module.hasOwnProperty(key)){moduleOverrides[key]=Module[key]}}var ENVIRONMENT_IS_WEB=false;var ENVIRONMENT_IS_WORKER=false;var ENVIRONMENT_IS_NODE=false;var ENVIRONMENT_IS_SHELL=false;if(Module["ENVIRONMENT"]){if(Module["ENVIRONMENT"]==="WEB"){ENVIRONMENT_IS_WEB=true}else if(Module["ENVIRONMENT"]==="WORKER"){ENVIRONMENT_IS_WORKER=true}else if(Module["ENVIRONMENT"]==="NODE"){ENVIRONMENT_IS_NODE=true}else if(Module["ENVIRONMENT"]==="SHELL"){ENVIRONMENT_IS_SHELL=true}else{throw new Error("The provided Module['ENVIRONMENT'] value is not valid. It must be one of: WEB|WORKER|NODE|SHELL.")}}else{ENVIRONMENT_IS_WEB=typeof window==="object";ENVIRONMENT_IS_WORKER=typeof importScripts==="function";ENVIRONMENT_IS_NODE=typeof process==="object"&&typeof require==="function"&&!ENVIRONMENT_IS_WEB&&!ENVIRONMENT_IS_WORKER;ENVIRONMENT_IS_SHELL=!ENVIRONMENT_IS_WEB&&!ENVIRONMENT_IS_NODE&&!ENVIRONMENT_IS_WORKER}if(ENVIRONMENT_IS_NODE){if(!Module["print"])Module["print"]=console.log;if(!Module["printErr"])Module["printErr"]=console.warn;var nodeFS;var nodePath;Module["read"]=function read(filename,binary){if(!nodeFS)nodeFS=require("fs");if(!nodePath)nodePath=require("path");filename=nodePath["normalize"](filename);var ret=nodeFS["readFileSync"](filename);return binary?ret:ret.toString()};Module["readBinary"]=function readBinary(filename){var ret=Module["read"](filename,true);if(!ret.buffer){ret=new Uint8Array(ret)}assert(ret.buffer);return ret};Module["load"]=function load(f){globalEval(read(f))};if(!Module["thisProgram"]){if(process["argv"].length>1){Module["thisProgram"]=process["argv"][1].replace(/\\/g,"/")}else{Module["thisProgram"]="unknown-program"}}Module["arguments"]=process["argv"].slice(2);if(typeof module!=="undefined"){module["exports"]=Module}process["on"]("uncaughtException",(function(ex){if(!(ex instanceof ExitStatus)){throw ex}}));Module["inspect"]=(function(){return"[Emscripten Module object]"})}else if(ENVIRONMENT_IS_SHELL){if(!Module["print"])Module["print"]=print;if(typeof printErr!="undefined")Module["printErr"]=printErr;if(typeof read!="undefined"){Module["read"]=read}else{Module["read"]=function read(){throw"no read() available"}}Module["readBinary"]=function readBinary(f){if(typeof readbuffer==="function"){return new Uint8Array(readbuffer(f))}var data=read(f,"binary");assert(typeof data==="object");return data};if(typeof scriptArgs!="undefined"){Module["arguments"]=scriptArgs}else if(typeof arguments!="undefined"){Module["arguments"]=arguments}if(typeof quit==="function"){Module["quit"]=(function(status,toThrow){quit(status)})}}else if(ENVIRONMENT_IS_WEB||ENVIRONMENT_IS_WORKER){Module["read"]=function read(url){var xhr=new XMLHttpRequest;xhr.open("GET",url,false);xhr.send(null);return xhr.responseText};if(ENVIRONMENT_IS_WORKER){Module["readBinary"]=function read(url){var xhr=new XMLHttpRequest;xhr.open("GET",url,false);xhr.responseType="arraybuffer";xhr.send(null);return xhr.response}}Module["readAsync"]=function readAsync(url,onload,onerror){var xhr=new XMLHttpRequest;xhr.open("GET",url,true);xhr.responseType="arraybuffer";xhr.onload=function xhr_onload(){if(xhr.status==200||xhr.status==0&&xhr.response){onload(xhr.response)}else{onerror()}};xhr.onerror=onerror;xhr.send(null)};if(typeof arguments!="undefined"){Module["arguments"]=arguments}if(typeof console!=="undefined"){if(!Module["print"])Module["print"]=function print(x){console.log(x)};if(!Module["printErr"])Module["printErr"]=function printErr(x){console.warn(x)}}else{var TRY_USE_DUMP=false;if(!Module["print"])Module["print"]=TRY_USE_DUMP&&typeof dump!=="undefined"?(function(x){dump(x)}):(function(x){})}if(ENVIRONMENT_IS_WORKER){Module["load"]=importScripts}if(typeof Module["setWindowTitle"]==="undefined"){Module["setWindowTitle"]=(function(title){document.title=title})}}else{throw"Unknown runtime environment. Where are we?"}function globalEval(x){eval.call(null,x)}if(!Module["load"]&&Module["read"]){Module["load"]=function load(f){globalEval(Module["read"](f))}}if(!Module["print"]){Module["print"]=(function(){})}if(!Module["printErr"]){Module["printErr"]=Module["print"]}if(!Module["arguments"]){Module["arguments"]=[]}if(!Module["thisProgram"]){Module["thisProgram"]="./this.program"}if(!Module["quit"]){Module["quit"]=(function(status,toThrow){throw toThrow})}Module.print=Module["print"];Module.printErr=Module["printErr"];Module["preRun"]=[];Module["postRun"]=[];for(var key in moduleOverrides){if(moduleOverrides.hasOwnProperty(key)){Module[key]=moduleOverrides[key]}}moduleOverrides=undefined;var Runtime={setTempRet0:(function(value){tempRet0=value;return value}),getTempRet0:(function(){return tempRet0}),stackSave:(function(){return STACKTOP}),stackRestore:(function(stackTop){STACKTOP=stackTop}),getNativeTypeSize:(function(type){switch(type){case"i1":case"i8":return 1;case"i16":return 2;case"i32":return 4;case"i64":return 8;case"float":return 4;case"double":return 8;default:{if(type[type.length-1]==="*"){return Runtime.QUANTUM_SIZE}else if(type[0]==="i"){var bits=parseInt(type.substr(1));assert(bits%8===0);return bits/8}else{return 0}}}}),getNativeFieldSize:(function(type){return Math.max(Runtime.getNativeTypeSize(type),Runtime.QUANTUM_SIZE)}),STACK_ALIGN:16,prepVararg:(function(ptr,type){if(type==="double"||type==="i64"){if(ptr&7){assert((ptr&7)===4);ptr+=4}}else{assert((ptr&3)===0)}return ptr}),getAlignSize:(function(type,size,vararg){if(!vararg&&(type=="i64"||type=="double"))return 8;if(!type)return Math.min(size,8);return Math.min(size||(type?Runtime.getNativeFieldSize(type):0),Runtime.QUANTUM_SIZE)}),dynCall:(function(sig,ptr,args){if(args&&args.length){return Module["dynCall_"+sig].apply(null,[ptr].concat(args))}else{return Module["dynCall_"+sig].call(null,ptr)}}),functionPointers:[],addFunction:(function(func){for(var i=0;i<Runtime.functionPointers.length;i++){if(!Runtime.functionPointers[i]){Runtime.functionPointers[i]=func;return 2*(1+i)}}throw"Finished up all reserved function pointers. Use a higher value for RESERVED_FUNCTION_POINTERS."}),removeFunction:(function(index){Runtime.functionPointers[(index-2)/2]=null}),warnOnce:(function(text){if(!Runtime.warnOnce.shown)Runtime.warnOnce.shown={};if(!Runtime.warnOnce.shown[text]){Runtime.warnOnce.shown[text]=1;Module.printErr(text)}}),funcWrappers:{},getFuncWrapper:(function(func,sig){assert(sig);if(!Runtime.funcWrappers[sig]){Runtime.funcWrappers[sig]={}}var sigCache=Runtime.funcWrappers[sig];if(!sigCache[func]){if(sig.length===1){sigCache[func]=function dynCall_wrapper(){return Runtime.dynCall(sig,func)}}else if(sig.length===2){sigCache[func]=function dynCall_wrapper(arg){return Runtime.dynCall(sig,func,[arg])}}else{sigCache[func]=function dynCall_wrapper(){return Runtime.dynCall(sig,func,Array.prototype.slice.call(arguments))}}}return sigCache[func]}),getCompilerSetting:(function(name){throw"You must build with -s RETAIN_COMPILER_SETTINGS=1 for Runtime.getCompilerSetting or emscripten_get_compiler_setting to work"}),stackAlloc:(function(size){var ret=STACKTOP;STACKTOP=STACKTOP+size|0;STACKTOP=STACKTOP+15&-16;return ret}),staticAlloc:(function(size){var ret=STATICTOP;STATICTOP=STATICTOP+size|0;STATICTOP=STATICTOP+15&-16;return ret}),dynamicAlloc:(function(size){var ret=HEAP32[DYNAMICTOP_PTR>>2];var end=(ret+size+15|0)&-16;HEAP32[DYNAMICTOP_PTR>>2]=end;if(end>=TOTAL_MEMORY){var success=enlargeMemory();if(!success){HEAP32[DYNAMICTOP_PTR>>2]=ret;return 0}}return ret}),alignMemory:(function(size,quantum){var ret=size=Math.ceil(size/(quantum?quantum:16))*(quantum?quantum:16);return ret}),makeBigInt:(function(low,high,unsigned){var ret=unsigned?+(low>>>0)+ +(high>>>0)*+4294967296:+(low>>>0)+ +(high|0)*+4294967296;return ret}),GLOBAL_BASE:8,QUANTUM_SIZE:4,__dummy__:0};Module["Runtime"]=Runtime;var ABORT=0;var EXITSTATUS=0;function assert(condition,text){if(!condition){abort("Assertion failed: "+text)}}function getCFunc(ident){var func=Module["_"+ident];if(!func){try{func=eval("_"+ident)}catch(e){}}assert(func,"Cannot call unknown function "+ident+" (perhaps LLVM optimizations or closure removed it?)");return func}var cwrap,ccall;((function(){var JSfuncs={"stackSave":(function(){Runtime.stackSave()}),"stackRestore":(function(){Runtime.stackRestore()}),"arrayToC":(function(arr){var ret=Runtime.stackAlloc(arr.length);writeArrayToMemory(arr,ret);return ret}),"stringToC":(function(str){var ret=0;if(str!==null&&str!==undefined&&str!==0){var len=(str.length<<2)+1;ret=Runtime.stackAlloc(len);stringToUTF8(str,ret,len)}return ret})};var toC={"string":JSfuncs["stringToC"],"array":JSfuncs["arrayToC"]};ccall=function ccallFunc(ident,returnType,argTypes,args,opts){var func=getCFunc(ident);var cArgs=[];var stack=0;if(args){for(var i=0;i<args.length;i++){var converter=toC[argTypes[i]];if(converter){if(stack===0)stack=Runtime.stackSave();cArgs[i]=converter(args[i])}else{cArgs[i]=args[i]}}}var ret=func.apply(null,cArgs);if(returnType==="string")ret=Pointer_stringify(ret);if(stack!==0){if(opts&&opts.async){EmterpreterAsync.asyncFinalizers.push((function(){Runtime.stackRestore(stack)}));return}Runtime.stackRestore(stack)}return ret};var sourceRegex=/^function\s*[a-zA-Z$_0-9]*\s*\(([^)]*)\)\s*{\s*([^*]*?)[\s;]*(?:return\s*(.*?)[;\s]*)?}$/;function parseJSFunc(jsfunc){var parsed=jsfunc.toString().match(sourceRegex).slice(1);return{arguments:parsed[0],body:parsed[1],returnValue:parsed[2]}}var JSsource=null;function ensureJSsource(){if(!JSsource){JSsource={};for(var fun in JSfuncs){if(JSfuncs.hasOwnProperty(fun)){JSsource[fun]=parseJSFunc(JSfuncs[fun])}}}}cwrap=function cwrap(ident,returnType,argTypes){argTypes=argTypes||[];var cfunc=getCFunc(ident);var numericArgs=argTypes.every((function(type){return type==="number"}));var numericRet=returnType!=="string";if(numericRet&&numericArgs){return cfunc}var argNames=argTypes.map((function(x,i){return"$"+i}));var funcstr="(function("+argNames.join(",")+") {";var nargs=argTypes.length;if(!numericArgs){ensureJSsource();funcstr+="var stack = "+JSsource["stackSave"].body+";";for(var i=0;i<nargs;i++){var arg=argNames[i],type=argTypes[i];if(type==="number")continue;var convertCode=JSsource[type+"ToC"];funcstr+="var "+convertCode.arguments+" = "+arg+";";funcstr+=convertCode.body+";";funcstr+=arg+"=("+convertCode.returnValue+");"}}var cfuncname=parseJSFunc((function(){return cfunc})).returnValue;funcstr+="var ret = "+cfuncname+"("+argNames.join(",")+");";if(!numericRet){var strgfy=parseJSFunc((function(){return Pointer_stringify})).returnValue;funcstr+="ret = "+strgfy+"(ret);"}if(!numericArgs){ensureJSsource();funcstr+=JSsource["stackRestore"].body.replace("()","(stack)")+";"}funcstr+="return ret})";return eval(funcstr)}}))();Module["ccall"]=ccall;Module["cwrap"]=cwrap;function setValue(ptr,value,type,noSafe){type=type||"i8";if(type.charAt(type.length-1)==="*")type="i32";switch(type){case"i1":HEAP8[ptr>>0]=value;break;case"i8":HEAP8[ptr>>0]=value;break;case"i16":HEAP16[ptr>>1]=value;break;case"i32":HEAP32[ptr>>2]=value;break;case"i64":tempI64=[value>>>0,(tempDouble=value,+Math_abs(tempDouble)>=+1?tempDouble>+0?(Math_min(+Math_floor(tempDouble/+4294967296),+4294967295)|0)>>>0:~~+Math_ceil((tempDouble- +(~~tempDouble>>>0))/+4294967296)>>>0:0)],HEAP32[ptr>>2]=tempI64[0],HEAP32[ptr+4>>2]=tempI64[1];break;case"float":HEAPF32[ptr>>2]=value;break;case"double":HEAPF64[ptr>>3]=value;break;default:abort("invalid type for setValue: "+type)}}Module["setValue"]=setValue;function getValue(ptr,type,noSafe){type=type||"i8";if(type.charAt(type.length-1)==="*")type="i32";switch(type){case"i1":return HEAP8[ptr>>0];case"i8":return HEAP8[ptr>>0];case"i16":return HEAP16[ptr>>1];case"i32":return HEAP32[ptr>>2];case"i64":return HEAP32[ptr>>2];case"float":return HEAPF32[ptr>>2];case"double":return HEAPF64[ptr>>3];default:abort("invalid type for setValue: "+type)}return null}Module["getValue"]=getValue;var ALLOC_NORMAL=0;var ALLOC_STACK=1;var ALLOC_STATIC=2;var ALLOC_DYNAMIC=3;var ALLOC_NONE=4;Module["ALLOC_NORMAL"]=ALLOC_NORMAL;Module["ALLOC_STACK"]=ALLOC_STACK;Module["ALLOC_STATIC"]=ALLOC_STATIC;Module["ALLOC_DYNAMIC"]=ALLOC_DYNAMIC;Module["ALLOC_NONE"]=ALLOC_NONE;function allocate(slab,types,allocator,ptr){var zeroinit,size;if(typeof slab==="number"){zeroinit=true;size=slab}else{zeroinit=false;size=slab.length}var singleType=typeof types==="string"?types:null;var ret;if(allocator==ALLOC_NONE){ret=ptr}else{ret=[typeof _malloc==="function"?_malloc:Runtime.staticAlloc,Runtime.stackAlloc,Runtime.staticAlloc,Runtime.dynamicAlloc][allocator===undefined?ALLOC_STATIC:allocator](Math.max(size,singleType?1:types.length))}if(zeroinit){var ptr=ret,stop;assert((ret&3)==0);stop=ret+(size&~3);for(;ptr<stop;ptr+=4){HEAP32[ptr>>2]=0}stop=ret+size;while(ptr<stop){HEAP8[ptr++>>0]=0}return ret}if(singleType==="i8"){if(slab.subarray||slab.slice){HEAPU8.set(slab,ret)}else{HEAPU8.set(new Uint8Array(slab),ret)}return ret}var i=0,type,typeSize,previousType;while(i<size){var curr=slab[i];if(typeof curr==="function"){curr=Runtime.getFunctionIndex(curr)}type=singleType||types[i];if(type===0){i++;continue}if(type=="i64")type="i32";setValue(ret+i,curr,type);if(previousType!==type){typeSize=Runtime.getNativeTypeSize(type);previousType=type}i+=typeSize}return ret}Module["allocate"]=allocate;function getMemory(size){if(!staticSealed)return Runtime.staticAlloc(size);if(!runtimeInitialized)return Runtime.dynamicAlloc(size);return _malloc(size)}Module["getMemory"]=getMemory;function Pointer_stringify(ptr,length){if(length===0||!ptr)return"";var hasUtf=0;var t;var i=0;while(1){t=HEAPU8[ptr+i>>0];hasUtf|=t;if(t==0&&!length)break;i++;if(length&&i==length)break}if(!length)length=i;var ret="";if(hasUtf<128){var MAX_CHUNK=1024;var curr;while(length>0){curr=String.fromCharCode.apply(String,HEAPU8.subarray(ptr,ptr+Math.min(length,MAX_CHUNK)));ret=ret?ret+curr:curr;ptr+=MAX_CHUNK;length-=MAX_CHUNK}return ret}return Module["UTF8ToString"](ptr)}Module["Pointer_stringify"]=Pointer_stringify;function AsciiToString(ptr){var str="";while(1){var ch=HEAP8[ptr++>>0];if(!ch)return str;str+=String.fromCharCode(ch)}}Module["AsciiToString"]=AsciiToString;function stringToAscii(str,outPtr){return writeAsciiToMemory(str,outPtr,false)}Module["stringToAscii"]=stringToAscii;var UTF8Decoder=typeof TextDecoder!=="undefined"?new TextDecoder("utf8"):undefined;function UTF8ArrayToString(u8Array,idx){var endPtr=idx;while(u8Array[endPtr])++endPtr;if(endPtr-idx>16&&u8Array.subarray&&UTF8Decoder){return UTF8Decoder.decode(u8Array.subarray(idx,endPtr))}else{var u0,u1,u2,u3,u4,u5;var str="";while(1){u0=u8Array[idx++];if(!u0)return str;if(!(u0&128)){str+=String.fromCharCode(u0);continue}u1=u8Array[idx++]&63;if((u0&224)==192){str+=String.fromCharCode((u0&31)<<6|u1);continue}u2=u8Array[idx++]&63;if((u0&240)==224){u0=(u0&15)<<12|u1<<6|u2}else{u3=u8Array[idx++]&63;if((u0&248)==240){u0=(u0&7)<<18|u1<<12|u2<<6|u3}else{u4=u8Array[idx++]&63;if((u0&252)==248){u0=(u0&3)<<24|u1<<18|u2<<12|u3<<6|u4}else{u5=u8Array[idx++]&63;u0=(u0&1)<<30|u1<<24|u2<<18|u3<<12|u4<<6|u5}}}if(u0<65536){str+=String.fromCharCode(u0)}else{var ch=u0-65536;str+=String.fromCharCode(55296|ch>>10,56320|ch&1023)}}}}Module["UTF8ArrayToString"]=UTF8ArrayToString;function UTF8ToString(ptr){return UTF8ArrayToString(HEAPU8,ptr)}Module["UTF8ToString"]=UTF8ToString;function stringToUTF8Array(str,outU8Array,outIdx,maxBytesToWrite){if(!(maxBytesToWrite>0))return 0;var startIdx=outIdx;var endIdx=outIdx+maxBytesToWrite-1;for(var i=0;i<str.length;++i){var u=str.charCodeAt(i);if(u>=55296&&u<=57343)u=65536+((u&1023)<<10)|str.charCodeAt(++i)&1023;if(u<=127){if(outIdx>=endIdx)break;outU8Array[outIdx++]=u}else if(u<=2047){if(outIdx+1>=endIdx)break;outU8Array[outIdx++]=192|u>>6;outU8Array[outIdx++]=128|u&63}else if(u<=65535){if(outIdx+2>=endIdx)break;outU8Array[outIdx++]=224|u>>12;outU8Array[outIdx++]=128|u>>6&63;outU8Array[outIdx++]=128|u&63}else if(u<=2097151){if(outIdx+3>=endIdx)break;outU8Array[outIdx++]=240|u>>18;outU8Array[outIdx++]=128|u>>12&63;outU8Array[outIdx++]=128|u>>6&63;outU8Array[outIdx++]=128|u&63}else if(u<=67108863){if(outIdx+4>=endIdx)break;outU8Array[outIdx++]=248|u>>24;outU8Array[outIdx++]=128|u>>18&63;outU8Array[outIdx++]=128|u>>12&63;outU8Array[outIdx++]=128|u>>6&63;outU8Array[outIdx++]=128|u&63}else{if(outIdx+5>=endIdx)break;outU8Array[outIdx++]=252|u>>30;outU8Array[outIdx++]=128|u>>24&63;outU8Array[outIdx++]=128|u>>18&63;outU8Array[outIdx++]=128|u>>12&63;outU8Array[outIdx++]=128|u>>6&63;outU8Array[outIdx++]=128|u&63}}outU8Array[outIdx]=0;return outIdx-startIdx}Module["stringToUTF8Array"]=stringToUTF8Array;function stringToUTF8(str,outPtr,maxBytesToWrite){return stringToUTF8Array(str,HEAPU8,outPtr,maxBytesToWrite)}Module["stringToUTF8"]=stringToUTF8;function lengthBytesUTF8(str){var len=0;for(var i=0;i<str.length;++i){var u=str.charCodeAt(i);if(u>=55296&&u<=57343)u=65536+((u&1023)<<10)|str.charCodeAt(++i)&1023;if(u<=127){++len}else if(u<=2047){len+=2}else if(u<=65535){len+=3}else if(u<=2097151){len+=4}else if(u<=67108863){len+=5}else{len+=6}}return len}Module["lengthBytesUTF8"]=lengthBytesUTF8;var UTF16Decoder=typeof TextDecoder!=="undefined"?new TextDecoder("utf-16le"):undefined;function demangle(func){var __cxa_demangle_func=Module["___cxa_demangle"]||Module["__cxa_demangle"];if(__cxa_demangle_func){try{var s=func.substr(1);var len=lengthBytesUTF8(s)+1;var buf=_malloc(len);stringToUTF8(s,buf,len);var status=_malloc(4);var ret=__cxa_demangle_func(buf,0,0,status);if(getValue(status,"i32")===0&&ret){return Pointer_stringify(ret)}}catch(e){}finally{if(buf)_free(buf);if(status)_free(status);if(ret)_free(ret)}return func}Runtime.warnOnce("warning: build with  -s DEMANGLE_SUPPORT=1  to link in libcxxabi demangling");return func}function demangleAll(text){var regex=/__Z[\w\d_]+/g;return text.replace(regex,(function(x){var y=demangle(x);return x===y?x:x+" ["+y+"]"}))}function jsStackTrace(){var err=new Error;if(!err.stack){try{throw new Error(0)}catch(e){err=e}if(!err.stack){return"(no stack trace available)"}}return err.stack.toString()}function stackTrace(){var js=jsStackTrace();if(Module["extraStackTrace"])js+="\n"+Module["extraStackTrace"]();return demangleAll(js)}Module["stackTrace"]=stackTrace;var WASM_PAGE_SIZE=65536;var ASMJS_PAGE_SIZE=16777216;var MIN_TOTAL_MEMORY=16777216;function alignUp(x,multiple){if(x%multiple>0){x+=multiple-x%multiple}return x}var HEAP;var buffer;var HEAP8,HEAPU8,HEAP16,HEAPU16,HEAP32,HEAPU32,HEAPF32,HEAPF64;function updateGlobalBuffer(buf){Module["buffer"]=buffer=buf}function updateGlobalBufferViews(){Module["HEAP8"]=HEAP8=new Int8Array(buffer);Module["HEAP16"]=HEAP16=new Int16Array(buffer);Module["HEAP32"]=HEAP32=new Int32Array(buffer);Module["HEAPU8"]=HEAPU8=new Uint8Array(buffer);Module["HEAPU16"]=HEAPU16=new Uint16Array(buffer);Module["HEAPU32"]=HEAPU32=new Uint32Array(buffer);Module["HEAPF32"]=HEAPF32=new Float32Array(buffer);Module["HEAPF64"]=HEAPF64=new Float64Array(buffer)}var STATIC_BASE,STATICTOP,staticSealed;var STACK_BASE,STACKTOP,STACK_MAX;var DYNAMIC_BASE,DYNAMICTOP_PTR;STATIC_BASE=STATICTOP=STACK_BASE=STACKTOP=STACK_MAX=DYNAMIC_BASE=DYNAMICTOP_PTR=0;staticSealed=false;function abortOnCannotGrowMemory(){abort("Cannot enlarge memory arrays. Either (1) compile with  -s TOTAL_MEMORY=X  with X higher than the current value "+TOTAL_MEMORY+", (2) compile with  -s ALLOW_MEMORY_GROWTH=1  which adjusts the size at runtime but prevents some optimizations, (3) set Module.TOTAL_MEMORY to a higher value before the program runs, or if you want malloc to return NULL (0) instead of this abort, compile with  -s ABORTING_MALLOC=0 ")}if(!Module["reallocBuffer"])Module["reallocBuffer"]=(function(size){var ret;try{if(ArrayBuffer.transfer){ret=ArrayBuffer.transfer(buffer,size)}else{var oldHEAP8=HEAP8;ret=new ArrayBuffer(size);var temp=new Int8Array(ret);temp.set(oldHEAP8)}}catch(e){return false}var success=_emscripten_replace_memory(ret);if(!success)return false;return ret});function enlargeMemory(){var PAGE_MULTIPLE=Module["usingWasm"]?WASM_PAGE_SIZE:ASMJS_PAGE_SIZE;var LIMIT=2147483648-PAGE_MULTIPLE;if(HEAP32[DYNAMICTOP_PTR>>2]>LIMIT){return false}TOTAL_MEMORY=Math.max(TOTAL_MEMORY,MIN_TOTAL_MEMORY);while(TOTAL_MEMORY<HEAP32[DYNAMICTOP_PTR>>2]){if(TOTAL_MEMORY<=536870912){TOTAL_MEMORY=alignUp(2*TOTAL_MEMORY,PAGE_MULTIPLE)}else{TOTAL_MEMORY=Math.min(alignUp((3*TOTAL_MEMORY+2147483648)/4,PAGE_MULTIPLE),LIMIT)}}var replacement=Module["reallocBuffer"](TOTAL_MEMORY);if(!replacement||replacement.byteLength!=TOTAL_MEMORY){return false}updateGlobalBuffer(replacement);updateGlobalBufferViews();return true}var byteLength;try{byteLength=Function.prototype.call.bind(Object.getOwnPropertyDescriptor(ArrayBuffer.prototype,"byteLength").get);byteLength(new ArrayBuffer(4))}catch(e){byteLength=(function(buffer){return buffer.byteLength})}var TOTAL_STACK=Module["TOTAL_STACK"]||5242880;var TOTAL_MEMORY=Module["TOTAL_MEMORY"]||16777216;if(TOTAL_MEMORY<TOTAL_STACK)Module.printErr("TOTAL_MEMORY should be larger than TOTAL_STACK, was "+TOTAL_MEMORY+"! (TOTAL_STACK="+TOTAL_STACK+")");if(Module["buffer"]){buffer=Module["buffer"]}else{{buffer=new ArrayBuffer(TOTAL_MEMORY)}}updateGlobalBufferViews();function getTotalMemory(){return TOTAL_MEMORY}HEAP32[0]=1668509029;HEAP16[1]=25459;if(HEAPU8[2]!==115||HEAPU8[3]!==99)throw"Runtime error: expected the system to be little-endian!";Module["HEAP"]=HEAP;Module["buffer"]=buffer;Module["HEAP8"]=HEAP8;Module["HEAP16"]=HEAP16;Module["HEAP32"]=HEAP32;Module["HEAPU8"]=HEAPU8;Module["HEAPU16"]=HEAPU16;Module["HEAPU32"]=HEAPU32;Module["HEAPF32"]=HEAPF32;Module["HEAPF64"]=HEAPF64;function callRuntimeCallbacks(callbacks){while(callbacks.length>0){var callback=callbacks.shift();if(typeof callback=="function"){callback();continue}var func=callback.func;if(typeof func==="number"){if(callback.arg===undefined){Module["dynCall_v"](func)}else{Module["dynCall_vi"](func,callback.arg)}}else{func(callback.arg===undefined?null:callback.arg)}}}var __ATPRERUN__=[];var __ATINIT__=[];var __ATMAIN__=[];var __ATEXIT__=[];var __ATPOSTRUN__=[];var runtimeInitialized=false;var runtimeExited=false;function preRun(){if(Module["preRun"]){if(typeof Module["preRun"]=="function")Module["preRun"]=[Module["preRun"]];while(Module["preRun"].length){addOnPreRun(Module["preRun"].shift())}}callRuntimeCallbacks(__ATPRERUN__)}function ensureInitRuntime(){if(runtimeInitialized)return;runtimeInitialized=true;callRuntimeCallbacks(__ATINIT__)}function preMain(){callRuntimeCallbacks(__ATMAIN__)}function exitRuntime(){callRuntimeCallbacks(__ATEXIT__);runtimeExited=true}function postRun(){if(Module["postRun"]){if(typeof Module["postRun"]=="function")Module["postRun"]=[Module["postRun"]];while(Module["postRun"].length){addOnPostRun(Module["postRun"].shift())}}callRuntimeCallbacks(__ATPOSTRUN__)}function addOnPreRun(cb){__ATPRERUN__.unshift(cb)}Module["addOnPreRun"]=addOnPreRun;function addOnInit(cb){__ATINIT__.unshift(cb)}Module["addOnInit"]=addOnInit;function addOnPreMain(cb){__ATMAIN__.unshift(cb)}Module["addOnPreMain"]=addOnPreMain;function addOnExit(cb){__ATEXIT__.unshift(cb)}Module["addOnExit"]=addOnExit;function addOnPostRun(cb){__ATPOSTRUN__.unshift(cb)}Module["addOnPostRun"]=addOnPostRun;function intArrayFromString(stringy,dontAddNull,length){var len=length>0?length:lengthBytesUTF8(stringy)+1;var u8array=new Array(len);var numBytesWritten=stringToUTF8Array(stringy,u8array,0,u8array.length);if(dontAddNull)u8array.length=numBytesWritten;return u8array}Module["intArrayFromString"]=intArrayFromString;function intArrayToString(array){var ret=[];for(var i=0;i<array.length;i++){var chr=array[i];if(chr>255){chr&=255}ret.push(String.fromCharCode(chr))}return ret.join("")}Module["intArrayToString"]=intArrayToString;function writeStringToMemory(string,buffer,dontAddNull){Runtime.warnOnce("writeStringToMemory is deprecated and should not be called! Use stringToUTF8() instead!");var lastChar,end;if(dontAddNull){end=buffer+lengthBytesUTF8(string);lastChar=HEAP8[end]}stringToUTF8(string,buffer,Infinity);if(dontAddNull)HEAP8[end]=lastChar}Module["writeStringToMemory"]=writeStringToMemory;function writeArrayToMemory(array,buffer){HEAP8.set(array,buffer)}Module["writeArrayToMemory"]=writeArrayToMemory;function writeAsciiToMemory(str,buffer,dontAddNull){for(var i=0;i<str.length;++i){HEAP8[buffer++>>0]=str.charCodeAt(i)}if(!dontAddNull)HEAP8[buffer>>0]=0}Module["writeAsciiToMemory"]=writeAsciiToMemory;if(!Math["imul"]||Math["imul"](4294967295,5)!==-5)Math["imul"]=function imul(a,b){var ah=a>>>16;var al=a&65535;var bh=b>>>16;var bl=b&65535;return al*bl+(ah*bl+al*bh<<16)|0};Math.imul=Math["imul"];if(!Math["clz32"])Math["clz32"]=(function(x){x=x>>>0;for(var i=0;i<32;i++){if(x&1<<31-i)return i}return 32});Math.clz32=Math["clz32"];if(!Math["trunc"])Math["trunc"]=(function(x){return x<0?Math.ceil(x):Math.floor(x)});Math.trunc=Math["trunc"];var Math_abs=Math.abs;var Math_cos=Math.cos;var Math_sin=Math.sin;var Math_tan=Math.tan;var Math_acos=Math.acos;var Math_asin=Math.asin;var Math_atan=Math.atan;var Math_atan2=Math.atan2;var Math_exp=Math.exp;var Math_log=Math.log;var Math_sqrt=Math.sqrt;var Math_ceil=Math.ceil;var Math_floor=Math.floor;var Math_pow=Math.pow;var Math_imul=Math.imul;var Math_fround=Math.fround;var Math_round=Math.round;var Math_min=Math.min;var Math_clz32=Math.clz32;var Math_trunc=Math.trunc;var runDependencies=0;var runDependencyWatcher=null;var dependenciesFulfilled=null;function getUniqueRunDependency(id){return id}function addRunDependency(id){runDependencies++;if(Module["monitorRunDependencies"]){Module["monitorRunDependencies"](runDependencies)}}Module["addRunDependency"]=addRunDependency;function removeRunDependency(id){runDependencies--;if(Module["monitorRunDependencies"]){Module["monitorRunDependencies"](runDependencies)}if(runDependencies==0){if(runDependencyWatcher!==null){clearInterval(runDependencyWatcher);runDependencyWatcher=null}if(dependenciesFulfilled){var callback=dependenciesFulfilled;dependenciesFulfilled=null;callback()}}}Module["removeRunDependency"]=removeRunDependency;Module["preloadedImages"]={};Module["preloadedAudios"]={};var ASM_CONSTS=[];STATIC_BASE=8;STATICTOP=STATIC_BASE+7824;__ATINIT__.push();allocate([116,5,0,0,186,5,0,0,24,0,0,0,0,0,0,0,76,5,0,0,194,5,0,0,76,5,0,0,241,5,0,0,116,5,0,0,249,5,0,0,32,0,0,0,0,0,0,0,116,5,0,0,26,8,0,0,8,0,0,0,0,0,0,0,116,5,0,0,33,8,0,0,8,0,0,0,0,0,0,0,116,5,0,0,47,8,0,0,8,0,0,0,0,0,0,0,76,5,0,0,17,22,0,0,116,5,0,0,113,22,0,0,128,0,0,0,0,0,0,0,116,5,0,0,30,22,0,0,144,0,0,0,0,0,0,0,76,5,0,0,63,22,0,0,116,5,0,0,76,22,0,0,112,0,0,0,0,0,0,0,116,5,0,0,119,23,0,0,128,0,0,0,0,0,0,0,116,5,0,0,83,23,0,0,168,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,2,0,0,0,0,0,0,0,32,0,0,0,3,0,0,0,4,0,0,0,1,0,0,0,1,0,0,0,5,0,0,0,6,0,0,0,0,0,0,0,40,0,0,0,3,0,0,0,7,0,0,0,2,0,0,0,2,0,0,0,8,0,0,0,0,0,0,0,56,0,0,0,3,0,0,0,1,0,0,0,2,0,0,0,9,0,0,0,10,0,0,0,0,0,0,0,72,0,0,0,4,0,0,0,2,0,0,0,3,0,0,0,11,0,0,0,12,0,0,0,0,0,0,0,88,0,0,0,5,0,0,0,3,0,0,0,4,0,0,0,13,0,0,0,14,0,0,0,128,9,0,0,134,9,0,0,141,9,0,0,151,9,0,0,163,9,0,0,0,0,0,0,86,9,0,0,93,9,0,0,104,9,0,0,108,9,0,0,116,9,0,0,0,0,0,0,168,1,0,0,5,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,0,0,0,7,0,0,0,28,26,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,255,255,255,255,255,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,216,23,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,28,3,0,0,5,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,7,0,0,0,36,26,0,0,0,4,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10,255,255,255,255,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,28,3,0,0,184,3,0,0,20,0,0,0,67,46,85,84,70,45,56,0,0,0,0,0,0,0,0,0,0,0,0,0,222,18,4,149,0,0,0,0,255,255,255,255,255,255,255,255,255,255,255,255,2,0,0,192,3,0,0,192,4,0,0,192,5,0,0,192,6,0,0,192,7,0,0,192,8,0,0,192,9,0,0,192,10,0,0,192,11,0,0,192,12,0,0,192,13,0,0,192,14,0,0,192,15,0,0,192,16,0,0,192,17,0,0,192,18,0,0,192,19,0,0,192,20,0,0,192,21,0,0,192,22,0,0,192,23,0,0,192,24,0,0,192,25,0,0,192,26,0,0,192,27,0,0,192,28,0,0,192,29,0,0,192,30,0,0,192,31,0,0,192,0,0,0,179,1,0,0,195,2,0,0,195,3,0,0,195,4,0,0,195,5,0,0,195,6,0,0,195,7,0,0,195,8,0,0,195,9,0,0,195,10,0,0,195,11,0,0,195,12,0,0,195,13,0,0,211,14,0,0,195,15,0,0,195,0,0,12,187,1,0,12,195,2,0,12,195,3,0,12,195,4,0,12,211,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,255,255,255,255,255,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10,0,0,0,100,0,0,0,232,3,0,0,16,39,0,0,160,134,1,0,64,66,15,0,128,150,152,0,0,225,245,5,95,112,137,0,255,9,47,15,2,0,0,0,8,22,0,0,0,0,0,0,112,0,0,0,15,0,0,0,16,0,0,0,17,0,0,0,18,0,0,0,10,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,152,0,0,0,15,0,0,0,19,0,0,0,17,0,0,0,18,0,0,0,10,0,0,0,2,0,0,0,2,0,0,0,2,0,0,0,32,9,10,0,85,110,107,110,111,119,110,32,111,112,116,105,111,110,58,32,45,37,99,10,0,116,101,115,116,102,105,108,101,46,116,120,116,0,54,75,101,114,110,101,108,0,55,81,77,97,116,114,105,120,0,42,0,10,87,65,82,78,73,78,71,58,32,117,115,105,110,103,32,45,104,32,48,32,109,97,121,32,98,101,32,102,97,115,116,101,114,10,0,54,83,111,108,118,101,114,0,57,83,111,108,118,101,114,95,78,85,0,10,87,65,82,78,73,78,71,58,32,114,101,97,99,104,105,110,103,32,109,97,120,32,110,117,109,98,101,114,32,111,102,32,105,116,101,114,97,116,105,111,110,115,10,0,10,111,112,116,105,109,105,122,97,116,105,111,110,32,102,105,110,105,115,104,101,100,44,32,35,105,116,101,114,32,61,32,37,100,10,0,80,114,111,98,46,32,109,111,100,101,108,32,102,111,114,32,116,101,115,116,32,100,97,116,97,58,32,116,97,114,103,101,116,32,118,97,108,117,101,32,61,32,112,114,101,100,105,99,116,101,100,32,118,97,108,117,101,32,43,32,122,44,10,122,58,32,76,97,112,108,97,99,101,32,100,105,115,116,114,105,98,117,116,105,111,110,32,101,94,40,45,124,122,124,47,115,105,103,109,97,41,47,40,50,115,105,103,109,97,41,44,115,105,103,109,97,61,32,37,103,10,0,87,65,82,78,73,78,71,58,32,116,114,97,105,110,105,110,103,32,100,97,116,97,32,105,110,32,111,110,108,121,32,111,110,101,32,99,108,97,115,115,46,32,83,101,101,32,82,69,65,68,77,69,32,102,111,114,32,100,101,116,97,105,108,115,46,10,0,87,65,82,78,73,78,71,58,32,99,108,97,115,115,32,108,97,98,101,108,32,37,100,32,115,112,101,99,105,102,105,101,100,32,105,110,32,119,101,105,103,104,116,32,105,115,32,110,111,116,32,102,111,117,110,100,10,0,76,105,110,101,32,115,101,97,114,99,104,32,102,97,105,108,115,32,105,110,32,116,119,111,45,99,108,97,115,115,32,112,114,111,98,97,98,105,108,105,116,121,32,101,115,116,105,109,97,116,101,115,10,0,82,101,97,99,104,105,110,103,32,109,97,120,105,109,97,108,32,105,116,101,114,97,116,105,111,110,115,32,105,110,32,116,119,111,45,99,108,97,115,115,32,112,114,111,98,97,98,105,108,105,116,121,32,101,115,116,105,109,97,116,101,115,10,0,84,111,116,97,108,32,110,83,86,32,61,32,37,100,10,0,110,117,32,61,32,37,102,10,0,67,32,61,32,37,102,10,0,101,112,115,105,108,111,110,32,61,32,37,102,10,0,111,98,106,32,61,32,37,102,44,32,114,104,111,32,61,32,37,102,10,0,110,83,86,32,61,32,37,100,44,32,110,66,83,86,32,61,32,37,100,10,0,53,83,86,82,95,81,0,49,49,79,78,69,95,67,76,65,83,83,95,81,0,53,83,86,67,95,81,0,87,65,82,78,73,78,71,58,32,35,32,102,111,108,100,115,32,62,32,35,32,100,97,116,97,46,32,87,105,108,108,32,117,115,101,32,35,32,102,111,108,100,115,32,61,32,35,32,100,97,116,97,32,105,110,115,116,101,97,100,32,40,105,46,101,46,44,32,108,101,97,118,101,45,111,110,101,45,111,117,116,32,99,114,111,115,115,32,118,97,108,105,100,97,116,105,111,110,41,10,0,69,120,99,101,101,100,115,32,109,97,120,95,105,116,101,114,32,105,110,32,109,117,108,116,105,99,108,97,115,115,95,112,114,111,98,10,0,119,0,115,118,109,95,116,121,112,101,32,37,115,10,0,107,101,114,110,101,108,95,116,121,112,101,32,37,115,10,0,100,101,103,114,101,101,32,37,100,10,0,103,97,109,109,97,32,37,103,10,0,99,111,101,102,48,32,37,103,10,0,110,114,95,99,108,97,115,115,32,37,100,10,0,116,111,116,97,108,95,115,118,32,37,100,10,0,114,104,111,0,32,37,103,0,108,97,98,101,108,0,32,37,100,0,112,114,111,98,65,0,112,114,111,98,66,0,110,114,95,115,118,0,83,86,10,0,37,100,58,37,46,56,103,32,0,48,58,37,100,32,0,37,46,49,54,103,32,0,108,105,110,101,97,114,0,112,111,108,121,110,111,109,105,97,108,0,114,98,102,0,115,105,103,109,111,105,100,0,112,114,101,99,111,109,112,117,116,101,100,0,99,95,115,118,99,0,110,117,95,115,118,99,0,111,110,101,95,99,108,97,115,115,0,101,112,115,105,108,111,110,95,115,118,114,0,110,117,95,115,118,114,0,37,56,48,115,0,115,118,109,95,116,121,112,101,0,107,101,114,110,101,108,95,116,121,112,101,0,100,101,103,114,101,101,0,37,100,0,103,97,109,109,97,0,37,108,102,0,99,111,101,102,48,0,110,114,95,99,108,97,115,115,0,116,111,116,97,108,95,115,118,0,83,86,0,117,110,107,110,111,119,110,32,116,101,120,116,32,105,110,32,109,111,100,101,108,32,102,105,108,101,58,32,91,37,115,93,10,0,117,110,107,110,111,119,110,32,107,101,114,110,101,108,32,102,117,110,99,116,105,111,110,46,10,0,117,110,107,110,111,119,110,32,115,118,109,32,116,121,112,101,46,10,0,114,98,0,69,82,82,79,82,58,32,102,115,99,97,110,102,32,102,97,105,108,101,100,32,116,111,32,114,101,97,100,32,109,111,100,101,108,10,0,58,0,32,9,0,17,0,10,0,17,17,17,0,0,0,0,5,0,0,0,0,0,0,9,0,0,0,0,11,0,0,0,0,0,0,0,0,17,0,15,10,17,17,17,3,10,7,0,1,19,9,11,11,0,0,9,6,11,0,0,11,0,6,17,0,0,0,17,17,17,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,11,0,0,0,0,0,0,0,0,17,0,10,10,17,17,17,0,10,0,0,2,0,9,11,0,0,0,9,0,11,0,0,11,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,12,0,0,0,0,0,0,0,0,0,0,0,12,0,0,0,0,12,0,0,0,0,9,12,0,0,0,0,0,12,0,0,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,14,0,0,0,0,0,0,0,0,0,0,0,13,0,0,0,4,13,0,0,0,0,9,14,0,0,0,0,0,14,0,0,14,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,16,0,0,0,0,0,0,0,0,0,0,0,15,0,0,0,0,15,0,0,0,0,9,16,0,0,0,0,0,16,0,0,16,0,0,18,0,0,0,18,18,18,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,18,0,0,0,18,18,18,0,0,0,0,0,0,9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,11,0,0,0,0,0,0,0,0,0,0,0,10,0,0,0,0,10,0,0,0,0,9,11,0,0,0,0,0,11,0,0,11,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,12,0,0,0,0,0,0,0,0,0,0,0,12,0,0,0,0,12,0,0,0,0,9,12,0,0,0,0,0,12,0,0,12,0,0,45,43,32,32,32,48,88,48,120,0,40,110,117,108,108,41,0,45,48,88,43,48,88,32,48,88,45,48,120,43,48,120,32,48,120,0,105,110,102,0,73,78,70,0,78,65,78,0,48,49,50,51,52,53,54,55,56,57,65,66,67,68,69,70,46,0,84,33,34,25,13,1,2,3,17,75,28,12,16,4,11,29,18,30,39,104,110,111,112,113,98,32,5,6,15,19,20,21,26,8,22,7,40,36,23,24,9,10,14,27,31,37,35,131,130,125,38,42,43,60,61,62,63,67,71,74,77,88,89,90,91,92,93,94,95,96,97,99,100,101,102,103,105,106,107,108,114,115,116,121,122,123,124,0,73,108,108,101,103,97,108,32,98,121,116,101,32,115,101,113,117,101,110,99,101,0,68,111,109,97,105,110,32,101,114,114,111,114,0,82,101,115,117,108,116,32,110,111,116,32,114,101,112,114,101,115,101,110,116,97,98,108,101,0,78,111,116,32,97,32,116,116,121,0,80,101,114,109,105,115,115,105,111,110,32,100,101,110,105,101,100,0,79,112,101,114,97,116,105,111,110,32,110,111,116,32,112,101,114,109,105,116,116,101,100,0,78,111,32,115,117,99,104,32,102,105,108,101,32,111,114,32,100,105,114,101,99,116,111,114,121,0,78,111,32,115,117,99,104,32,112,114,111,99,101,115,115,0,70,105,108,101,32,101,120,105,115,116,115,0,86,97,108,117,101,32,116,111,111,32,108,97,114,103,101,32,102,111,114,32,100,97,116,97,32,116,121,112,101,0,78,111,32,115,112,97,99,101,32,108,101,102,116,32,111,110,32,100,101,118,105,99,101,0,79,117,116,32,111,102,32,109,101,109,111,114,121,0,82,101,115,111,117,114,99,101,32,98,117,115,121,0,73,110,116,101,114,114,117,112,116,101,100,32,115,121,115,116,101,109,32,99,97,108,108,0,82,101,115,111,117,114,99,101,32,116,101,109,112,111,114,97,114,105,108,121,32,117,110,97,118,97,105,108,97,98,108,101,0,73,110,118,97,108,105,100,32,115,101,101,107,0,67,114,111,115,115,45,100,101,118,105,99,101,32,108,105,110,107,0,82,101,97,100,45,111,110,108,121,32,102,105,108,101,32,115,121,115,116,101,109,0,68,105,114,101,99,116,111,114,121,32,110,111,116,32,101,109,112,116,121,0,67,111,110,110,101,99,116,105,111,110,32,114,101,115,101,116,32,98,121,32,112,101,101,114,0,79,112,101,114,97,116,105,111,110,32,116,105,109,101,100,32,111,117,116,0,67,111,110,110,101,99,116,105,111,110,32,114,101,102,117,115,101,100,0,72,111,115,116,32,105,115,32,100,111,119,110,0,72,111,115,116,32,105,115,32,117,110,114,101,97,99,104,97,98,108,101,0,65,100,100,114,101,115,115,32,105,110,32,117,115,101,0,66,114,111,107,101,110,32,112,105,112,101,0,73,47,79,32,101,114,114,111,114,0,78,111,32,115,117,99,104,32,100,101,118,105,99,101,32,111,114,32,97,100,100,114,101,115,115,0,66,108,111,99,107,32,100,101,118,105,99,101,32,114,101,113,117,105,114,101,100,0,78,111,32,115,117,99,104,32,100,101,118,105,99,101,0,78,111,116,32,97,32,100,105,114,101,99,116,111,114,121,0,73,115,32,97,32,100,105,114,101,99,116,111,114,121,0,84,101,120,116,32,102,105,108,101,32,98,117,115,121,0,69,120,101,99,32,102,111,114,109,97,116,32,101,114,114,111,114,0,73,110,118,97,108,105,100,32,97,114,103,117,109,101,110,116,0,65,114,103,117,109,101,110,116,32,108,105,115,116,32,116,111,111,32,108,111,110,103,0,83,121,109,98,111,108,105,99,32,108,105,110,107,32,108,111,111,112,0,70,105,108,101,110,97,109,101,32,116,111,111,32,108,111,110,103,0,84,111,111,32,109,97,110,121,32,111,112,101,110,32,102,105,108,101,115,32,105,110,32,115,121,115,116,101,109,0,78,111,32,102,105,108,101,32,100,101,115,99,114,105,112,116,111,114,115,32,97,118,97,105,108,97,98,108,101,0,66,97,100,32,102,105,108,101,32,100,101,115,99,114,105,112,116,111,114,0,78,111,32,99,104,105,108,100,32,112,114,111,99,101,115,115,0,66,97,100,32,97,100,100,114,101,115,115,0,70,105,108,101,32,116,111,111,32,108,97,114,103,101,0,84,111,111,32,109,97,110,121,32,108,105,110,107,115,0,78,111,32,108,111,99,107,115,32,97,118,97,105,108,97,98,108,101,0,82,101,115,111,117,114,99,101,32,100,101,97,100,108,111,99,107,32,119,111,117,108,100,32,111,99,99,117,114,0,83,116,97,116,101,32,110,111,116,32,114,101,99,111,118,101,114,97,98,108,101,0,80,114,101,118,105,111,117,115,32,111,119,110,101,114,32,100,105,101,100,0,79,112,101,114,97,116,105,111,110,32,99,97,110,99,101,108,101,100,0,70,117,110,99,116,105,111,110,32,110,111,116,32,105,109,112,108,101,109,101,110,116,101,100,0,78,111,32,109,101,115,115,97,103,101,32,111,102,32,100,101,115,105,114,101,100,32,116,121,112,101,0,73,100,101,110,116,105,102,105,101,114,32,114,101,109,111,118,101,100,0,68,101,118,105,99,101,32,110,111,116,32,97,32,115,116,114,101,97,109,0,78,111,32,100,97,116,97,32,97,118,97,105,108,97,98,108,101,0,68,101,118,105,99,101,32,116,105,109,101,111,117,116,0,79,117,116,32,111,102,32,115,116,114,101,97,109,115,32,114,101,115,111,117,114,99,101,115,0,76,105,110,107,32,104,97,115,32,98,101,101,110,32,115,101,118,101,114,101,100,0,80,114,111,116,111,99,111,108,32,101,114,114,111,114,0,66,97,100,32,109,101,115,115,97,103,101,0,70,105,108,101,32,100,101,115,99,114,105,112,116,111,114,32,105,110,32,98,97,100,32,115,116,97,116,101,0,78,111,116,32,97,32,115,111,99,107,101,116,0,68,101,115,116,105,110,97,116,105,111,110,32,97,100,100,114,101,115,115,32,114,101,113,117,105,114,101,100,0,77,101,115,115,97,103,101,32,116,111,111,32,108,97,114,103,101,0,80,114,111,116,111,99,111,108,32,119,114,111,110,103,32,116,121,112,101,32,102,111,114,32,115,111,99,107,101,116,0,80,114,111,116,111,99,111,108,32,110,111,116,32,97,118,97,105,108,97,98,108,101,0,80,114,111,116,111,99,111,108,32,110,111,116,32,115,117,112,112,111,114,116,101,100,0,83,111,99,107,101,116,32,116,121,112,101,32,110,111,116,32,115,117,112,112,111,114,116,101,100,0,78,111,116,32,115,117,112,112,111,114,116,101,100,0,80,114,111,116,111,99,111,108,32,102,97,109,105,108,121,32,110,111,116,32,115,117,112,112,111,114,116,101,100,0,65,100,100,114,101,115,115,32,102,97,109,105,108,121,32,110,111,116,32,115,117,112,112,111,114,116,101,100,32,98,121,32,112,114,111,116,111,99,111,108,0,65,100,100,114,101,115,115,32,110,111,116,32,97,118,97,105,108,97,98,108,101,0,78,101,116,119,111,114,107,32,105,115,32,100,111,119,110,0,78,101,116,119,111,114,107,32,117,110,114,101,97,99,104,97,98,108,101,0,67,111,110,110,101,99,116,105,111,110,32,114,101,115,101,116,32,98,121,32,110,101,116,119,111,114,107,0,67,111,110,110,101,99,116,105,111,110,32,97,98,111,114,116,101,100,0,78,111,32,98,117,102,102,101,114,32,115,112,97,99,101,32,97,118,97,105,108,97,98,108,101,0,83,111,99,107,101,116,32,105,115,32,99,111,110,110,101,99,116,101,100,0,83,111,99,107,101,116,32,110,111,116,32,99,111,110,110,101,99,116,101,100,0,67,97,110,110,111,116,32,115,101,110,100,32,97,102,116,101,114,32,115,111,99,107,101,116,32,115,104,117,116,100,111,119,110,0,79,112,101,114,97,116,105,111,110,32,97,108,114,101,97,100,121,32,105,110,32,112,114,111,103,114,101,115,115,0,79,112,101,114,97,116,105,111,110,32,105,110,32,112,114,111,103,114,101,115,115,0,83,116,97,108,101,32,102,105,108,101,32,104,97,110,100,108,101,0,82,101,109,111,116,101,32,73,47,79,32,101,114,114,111,114,0,81,117,111,116,97,32,101,120,99,101,101,100,101,100,0,78,111,32,109,101,100,105,117,109,32,102,111,117,110,100,0,87,114,111,110,103,32,109,101,100,105,117,109,32,116,121,112,101,0,78,111,32,101,114,114,111,114,32,105,110,102,111,114,109,97,116,105,111,110,0,0,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,0,1,2,3,4,5,6,7,8,9,255,255,255,255,255,255,255,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,255,255,255,255,255,255,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,0,1,2,4,7,3,6,5,0,105,110,102,105,110,105,116,121,0,110,97,110,0,114,119,97,0,76,67,95,65,76,76,0,76,67,95,67,84,89,80,69,0,0,0,0,76,67,95,78,85,77,69,82,73,67,0,0,76,67,95,84,73,77,69,0,0,0,0,0,76,67,95,67,79,76,76,65,84,69,0,0,76,67,95,77,79,78,69,84,65,82,89,0,76,67,95,77,69,83,83,65,71,69,83,0,76,65,78,71,0,67,46,85,84,70,45,56,0,80,79,83,73,88,0,77,85,83,76,95,76,79,67,80,65,84,72,0,67,46,85,84,70,45,56,0,0,0,0,0,0,0,0,0,67,0,116,101,114,109,105,110,97,116,105,110,103,32,119,105,116,104,32,37,115,32,101,120,99,101,112,116,105,111,110,32,111,102,32,116,121,112,101,32,37,115,58,32,37,115,0,116,101,114,109,105,110,97,116,105,110,103,32,119,105,116,104,32,37,115,32,101,120,99,101,112,116,105,111,110,32,111,102,32,116,121,112,101,32,37,115,0,116,101,114,109,105,110,97,116,105,110,103,32,119,105,116,104,32,37,115,32,102,111,114,101,105,103,110,32,101,120,99,101,112,116,105,111,110,0,116,101,114,109,105,110,97,116,105,110,103,0,117,110,99,97,117,103,104,116,0,83,116,57,101,120,99,101,112,116,105,111,110,0,78,49,48,95,95,99,120,120,97,98,105,118,49,49,54,95,95,115,104,105,109,95,116,121,112,101,95,105,110,102,111,69,0,83,116,57,116,121,112,101,95,105,110,102,111,0,78,49,48,95,95,99,120,120,97,98,105,118,49,50,48,95,95,115,105,95,99,108,97,115,115,95,116,121,112,101,95,105,110,102,111,69,0,78,49,48,95,95,99,120,120,97,98,105,118,49,49,55,95,95,99,108,97,115,115,95,116,121,112,101,95,105,110,102,111,69,0,112,116,104,114,101,97,100,95,111,110,99,101,32,102,97,105,108,117,114,101,32,105,110,32,95,95,99,120,97,95,103,101,116,95,103,108,111,98,97,108,115,95,102,97,115,116,40,41,0,99,97,110,110,111,116,32,99,114,101,97,116,101,32,112,116,104,114,101,97,100,32,107,101,121,32,102,111,114,32,95,95,99,120,97,95,103,101,116,95,103,108,111,98,97,108,115,40,41,0,99,97,110,110,111,116,32,122,101,114,111,32,111,117,116,32,116,104,114,101,97,100,32,118,97,108,117,101,32,102,111,114,32,95,95,99,120,97,95,103,101,116,95,103,108,111,98,97,108,115,40,41,0,116,101,114,109,105,110,97,116,101,95,104,97,110,100,108,101,114,32,117,110,101,120,112,101,99,116,101,100,108,121,32,114,101,116,117,114,110,101,100,0,78,49,48,95,95,99,120,120,97,98,105,118,49,49,57,95,95,112,111,105,110,116,101,114,95,116,121,112,101,95,105,110,102,111,69,0,78,49,48,95,95,99,120,120,97,98,105,118,49,49,55,95,95,112,98,97,115,101,95,116,121,112,101,95,105,110,102,111,69,0],"i8",ALLOC_NONE,Runtime.GLOBAL_BASE);var tempDoublePtr=STATICTOP;STATICTOP+=16;Module["_i64Subtract"]=_i64Subtract;Module["_i64Add"]=_i64Add;Module["_memset"]=_memset;Module["_bitshift64Shl"]=_bitshift64Shl;function _abort(){Module["abort"]()}function _pthread_once(ptr,func){if(!_pthread_once.seen)_pthread_once.seen={};if(ptr in _pthread_once.seen)return;Module["dynCall_v"](func);_pthread_once.seen[ptr]=1}function ___lock(){}function ___unlock(){}var PTHREAD_SPECIFIC={};function _pthread_getspecific(key){return PTHREAD_SPECIFIC[key]||0}var PTHREAD_SPECIFIC_NEXT_KEY=1;var ERRNO_CODES={EPERM:1,ENOENT:2,ESRCH:3,EINTR:4,EIO:5,ENXIO:6,E2BIG:7,ENOEXEC:8,EBADF:9,ECHILD:10,EAGAIN:11,EWOULDBLOCK:11,ENOMEM:12,EACCES:13,EFAULT:14,ENOTBLK:15,EBUSY:16,EEXIST:17,EXDEV:18,ENODEV:19,ENOTDIR:20,EISDIR:21,EINVAL:22,ENFILE:23,EMFILE:24,ENOTTY:25,ETXTBSY:26,EFBIG:27,ENOSPC:28,ESPIPE:29,EROFS:30,EMLINK:31,EPIPE:32,EDOM:33,ERANGE:34,ENOMSG:42,EIDRM:43,ECHRNG:44,EL2NSYNC:45,EL3HLT:46,EL3RST:47,ELNRNG:48,EUNATCH:49,ENOCSI:50,EL2HLT:51,EDEADLK:35,ENOLCK:37,EBADE:52,EBADR:53,EXFULL:54,ENOANO:55,EBADRQC:56,EBADSLT:57,EDEADLOCK:35,EBFONT:59,ENOSTR:60,ENODATA:61,ETIME:62,ENOSR:63,ENONET:64,ENOPKG:65,EREMOTE:66,ENOLINK:67,EADV:68,ESRMNT:69,ECOMM:70,EPROTO:71,EMULTIHOP:72,EDOTDOT:73,EBADMSG:74,ENOTUNIQ:76,EBADFD:77,EREMCHG:78,ELIBACC:79,ELIBBAD:80,ELIBSCN:81,ELIBMAX:82,ELIBEXEC:83,ENOSYS:38,ENOTEMPTY:39,ENAMETOOLONG:36,ELOOP:40,EOPNOTSUPP:95,EPFNOSUPPORT:96,ECONNRESET:104,ENOBUFS:105,EAFNOSUPPORT:97,EPROTOTYPE:91,ENOTSOCK:88,ENOPROTOOPT:92,ESHUTDOWN:108,ECONNREFUSED:111,EADDRINUSE:98,ECONNABORTED:103,ENETUNREACH:101,ENETDOWN:100,ETIMEDOUT:110,EHOSTDOWN:112,EHOSTUNREACH:113,EINPROGRESS:115,EALREADY:114,EDESTADDRREQ:89,EMSGSIZE:90,EPROTONOSUPPORT:93,ESOCKTNOSUPPORT:94,EADDRNOTAVAIL:99,ENETRESET:102,EISCONN:106,ENOTCONN:107,ETOOMANYREFS:109,EUSERS:87,EDQUOT:122,ESTALE:116,ENOTSUP:95,ENOMEDIUM:123,EILSEQ:84,EOVERFLOW:75,ECANCELED:125,ENOTRECOVERABLE:131,EOWNERDEAD:130,ESTRPIPE:86};function _pthread_key_create(key,destructor){if(key==0){return ERRNO_CODES.EINVAL}HEAP32[key>>2]=PTHREAD_SPECIFIC_NEXT_KEY;PTHREAD_SPECIFIC[PTHREAD_SPECIFIC_NEXT_KEY]=0;PTHREAD_SPECIFIC_NEXT_KEY++;return 0}var ERRNO_MESSAGES={0:"Success",1:"Not super-user",2:"No such file or directory",3:"No such process",4:"Interrupted system call",5:"I/O error",6:"No such device or address",7:"Arg list too long",8:"Exec format error",9:"Bad file number",10:"No children",11:"No more processes",12:"Not enough core",13:"Permission denied",14:"Bad address",15:"Block device required",16:"Mount device busy",17:"File exists",18:"Cross-device link",19:"No such device",20:"Not a directory",21:"Is a directory",22:"Invalid argument",23:"Too many open files in system",24:"Too many open files",25:"Not a typewriter",26:"Text file busy",27:"File too large",28:"No space left on device",29:"Illegal seek",30:"Read only file system",31:"Too many links",32:"Broken pipe",33:"Math arg out of domain of func",34:"Math result not representable",35:"File locking deadlock error",36:"File or path name too long",37:"No record locks available",38:"Function not implemented",39:"Directory not empty",40:"Too many symbolic links",42:"No message of desired type",43:"Identifier removed",44:"Channel number out of range",45:"Level 2 not synchronized",46:"Level 3 halted",47:"Level 3 reset",48:"Link number out of range",49:"Protocol driver not attached",50:"No CSI structure available",51:"Level 2 halted",52:"Invalid exchange",53:"Invalid request descriptor",54:"Exchange full",55:"No anode",56:"Invalid request code",57:"Invalid slot",59:"Bad font file fmt",60:"Device not a stream",61:"No data (for no delay io)",62:"Timer expired",63:"Out of streams resources",64:"Machine is not on the network",65:"Package not installed",66:"The object is remote",67:"The link has been severed",68:"Advertise error",69:"Srmount error",70:"Communication error on send",71:"Protocol error",72:"Multihop attempted",73:"Cross mount point (not really error)",74:"Trying to read unreadable message",75:"Value too large for defined data type",76:"Given log. name not unique",77:"f.d. invalid for this operation",78:"Remote address changed",79:"Can   access a needed shared lib",80:"Accessing a corrupted shared lib",81:".lib section in a.out corrupted",82:"Attempting to link in too many libs",83:"Attempting to exec a shared library",84:"Illegal byte sequence",86:"Streams pipe error",87:"Too many users",88:"Socket operation on non-socket",89:"Destination address required",90:"Message too long",91:"Protocol wrong type for socket",92:"Protocol not available",93:"Unknown protocol",94:"Socket type not supported",95:"Not supported",96:"Protocol family not supported",97:"Address family not supported by protocol family",98:"Address already in use",99:"Address not available",100:"Network interface is not configured",101:"Network is unreachable",102:"Connection reset by network",103:"Connection aborted",104:"Connection reset by peer",105:"No buffer space available",106:"Socket is already connected",107:"Socket is not connected",108:"Can't send after socket shutdown",109:"Too many references",110:"Connection timed out",111:"Connection refused",112:"Host is down",113:"Host is unreachable",114:"Socket already connected",115:"Connection already in progress",116:"Stale file handle",122:"Quota exceeded",123:"No medium (in tape drive)",125:"Operation canceled",130:"Previous owner died",131:"State not recoverable"};function ___setErrNo(value){if(Module["___errno_location"])HEAP32[Module["___errno_location"]()>>2]=value;return value}var PATH={splitPath:(function(filename){var splitPathRe=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;return splitPathRe.exec(filename).slice(1)}),normalizeArray:(function(parts,allowAboveRoot){var up=0;for(var i=parts.length-1;i>=0;i--){var last=parts[i];if(last==="."){parts.splice(i,1)}else if(last===".."){parts.splice(i,1);up++}else if(up){parts.splice(i,1);up--}}if(allowAboveRoot){for(;up--;up){parts.unshift("..")}}return parts}),normalize:(function(path){var isAbsolute=path.charAt(0)==="/",trailingSlash=path.substr(-1)==="/";path=PATH.normalizeArray(path.split("/").filter((function(p){return!!p})),!isAbsolute).join("/");if(!path&&!isAbsolute){path="."}if(path&&trailingSlash){path+="/"}return(isAbsolute?"/":"")+path}),dirname:(function(path){var result=PATH.splitPath(path),root=result[0],dir=result[1];if(!root&&!dir){return"."}if(dir){dir=dir.substr(0,dir.length-1)}return root+dir}),basename:(function(path){if(path==="/")return"/";var lastSlash=path.lastIndexOf("/");if(lastSlash===-1)return path;return path.substr(lastSlash+1)}),extname:(function(path){return PATH.splitPath(path)[3]}),join:(function(){var paths=Array.prototype.slice.call(arguments,0);return PATH.normalize(paths.join("/"))}),join2:(function(l,r){return PATH.normalize(l+"/"+r)}),resolve:(function(){var resolvedPath="",resolvedAbsolute=false;for(var i=arguments.length-1;i>=-1&&!resolvedAbsolute;i--){var path=i>=0?arguments[i]:FS.cwd();if(typeof path!=="string"){throw new TypeError("Arguments to path.resolve must be strings")}else if(!path){return""}resolvedPath=path+"/"+resolvedPath;resolvedAbsolute=path.charAt(0)==="/"}resolvedPath=PATH.normalizeArray(resolvedPath.split("/").filter((function(p){return!!p})),!resolvedAbsolute).join("/");return(resolvedAbsolute?"/":"")+resolvedPath||"."}),relative:(function(from,to){from=PATH.resolve(from).substr(1);to=PATH.resolve(to).substr(1);function trim(arr){var start=0;for(;start<arr.length;start++){if(arr[start]!=="")break}var end=arr.length-1;for(;end>=0;end--){if(arr[end]!=="")break}if(start>end)return[];return arr.slice(start,end-start+1)}var fromParts=trim(from.split("/"));var toParts=trim(to.split("/"));var length=Math.min(fromParts.length,toParts.length);var samePartsLength=length;for(var i=0;i<length;i++){if(fromParts[i]!==toParts[i]){samePartsLength=i;break}}var outputParts=[];for(var i=samePartsLength;i<fromParts.length;i++){outputParts.push("..")}outputParts=outputParts.concat(toParts.slice(samePartsLength));return outputParts.join("/")})};var TTY={ttys:[],init:(function(){}),shutdown:(function(){}),register:(function(dev,ops){TTY.ttys[dev]={input:[],output:[],ops:ops};FS.registerDevice(dev,TTY.stream_ops)}),stream_ops:{open:(function(stream){var tty=TTY.ttys[stream.node.rdev];if(!tty){throw new FS.ErrnoError(ERRNO_CODES.ENODEV)}stream.tty=tty;stream.seekable=false}),close:(function(stream){stream.tty.ops.flush(stream.tty)}),flush:(function(stream){stream.tty.ops.flush(stream.tty)}),read:(function(stream,buffer,offset,length,pos){if(!stream.tty||!stream.tty.ops.get_char){throw new FS.ErrnoError(ERRNO_CODES.ENXIO)}var bytesRead=0;for(var i=0;i<length;i++){var result;try{result=stream.tty.ops.get_char(stream.tty)}catch(e){throw new FS.ErrnoError(ERRNO_CODES.EIO)}if(result===undefined&&bytesRead===0){throw new FS.ErrnoError(ERRNO_CODES.EAGAIN)}if(result===null||result===undefined)break;bytesRead++;buffer[offset+i]=result}if(bytesRead){stream.node.timestamp=Date.now()}return bytesRead}),write:(function(stream,buffer,offset,length,pos){if(!stream.tty||!stream.tty.ops.put_char){throw new FS.ErrnoError(ERRNO_CODES.ENXIO)}for(var i=0;i<length;i++){try{stream.tty.ops.put_char(stream.tty,buffer[offset+i])}catch(e){throw new FS.ErrnoError(ERRNO_CODES.EIO)}}if(length){stream.node.timestamp=Date.now()}return i})},default_tty_ops:{get_char:(function(tty){if(!tty.input.length){var result=null;if(ENVIRONMENT_IS_NODE){var BUFSIZE=256;var buf=new Buffer(BUFSIZE);var bytesRead=0;var isPosixPlatform=process.platform!="win32";var fd=process.stdin.fd;if(isPosixPlatform){var usingDevice=false;try{fd=fs.openSync("/dev/stdin","r");usingDevice=true}catch(e){}}try{bytesRead=fs.readSync(fd,buf,0,BUFSIZE,null)}catch(e){if(e.toString().indexOf("EOF")!=-1)bytesRead=0;else throw e}if(usingDevice){fs.closeSync(fd)}if(bytesRead>0){result=buf.slice(0,bytesRead).toString("utf-8")}else{result=null}}else if(typeof window!="undefined"&&typeof window.prompt=="function"){result=window.prompt("Input: ");if(result!==null){result+="\n"}}else if(typeof readline=="function"){result=readline();if(result!==null){result+="\n"}}if(!result){return null}tty.input=intArrayFromString(result,true)}return tty.input.shift()}),put_char:(function(tty,val){if(val===null||val===10){Module["print"](UTF8ArrayToString(tty.output,0));tty.output=[]}else{if(val!=0)tty.output.push(val)}}),flush:(function(tty){if(tty.output&&tty.output.length>0){Module["print"](UTF8ArrayToString(tty.output,0));tty.output=[]}})},default_tty1_ops:{put_char:(function(tty,val){if(val===null||val===10){Module["printErr"](UTF8ArrayToString(tty.output,0));tty.output=[]}else{if(val!=0)tty.output.push(val)}}),flush:(function(tty){if(tty.output&&tty.output.length>0){Module["printErr"](UTF8ArrayToString(tty.output,0));tty.output=[]}})}};var MEMFS={ops_table:null,mount:(function(mount){return MEMFS.createNode(null,"/",16384|511,0)}),createNode:(function(parent,name,mode,dev){if(FS.isBlkdev(mode)||FS.isFIFO(mode)){throw new FS.ErrnoError(ERRNO_CODES.EPERM)}if(!MEMFS.ops_table){MEMFS.ops_table={dir:{node:{getattr:MEMFS.node_ops.getattr,setattr:MEMFS.node_ops.setattr,lookup:MEMFS.node_ops.lookup,mknod:MEMFS.node_ops.mknod,rename:MEMFS.node_ops.rename,unlink:MEMFS.node_ops.unlink,rmdir:MEMFS.node_ops.rmdir,readdir:MEMFS.node_ops.readdir,symlink:MEMFS.node_ops.symlink},stream:{llseek:MEMFS.stream_ops.llseek}},file:{node:{getattr:MEMFS.node_ops.getattr,setattr:MEMFS.node_ops.setattr},stream:{llseek:MEMFS.stream_ops.llseek,read:MEMFS.stream_ops.read,write:MEMFS.stream_ops.write,allocate:MEMFS.stream_ops.allocate,mmap:MEMFS.stream_ops.mmap,msync:MEMFS.stream_ops.msync}},link:{node:{getattr:MEMFS.node_ops.getattr,setattr:MEMFS.node_ops.setattr,readlink:MEMFS.node_ops.readlink},stream:{}},chrdev:{node:{getattr:MEMFS.node_ops.getattr,setattr:MEMFS.node_ops.setattr},stream:FS.chrdev_stream_ops}}}var node=FS.createNode(parent,name,mode,dev);if(FS.isDir(node.mode)){node.node_ops=MEMFS.ops_table.dir.node;node.stream_ops=MEMFS.ops_table.dir.stream;node.contents={}}else if(FS.isFile(node.mode)){node.node_ops=MEMFS.ops_table.file.node;node.stream_ops=MEMFS.ops_table.file.stream;node.usedBytes=0;node.contents=null}else if(FS.isLink(node.mode)){node.node_ops=MEMFS.ops_table.link.node;node.stream_ops=MEMFS.ops_table.link.stream}else if(FS.isChrdev(node.mode)){node.node_ops=MEMFS.ops_table.chrdev.node;node.stream_ops=MEMFS.ops_table.chrdev.stream}node.timestamp=Date.now();if(parent){parent.contents[name]=node}return node}),getFileDataAsRegularArray:(function(node){if(node.contents&&node.contents.subarray){var arr=[];for(var i=0;i<node.usedBytes;++i)arr.push(node.contents[i]);return arr}return node.contents}),getFileDataAsTypedArray:(function(node){if(!node.contents)return new Uint8Array;if(node.contents.subarray)return node.contents.subarray(0,node.usedBytes);return new Uint8Array(node.contents)}),expandFileStorage:(function(node,newCapacity){if(node.contents&&node.contents.subarray&&newCapacity>node.contents.length){node.contents=MEMFS.getFileDataAsRegularArray(node);node.usedBytes=node.contents.length}if(!node.contents||node.contents.subarray){var prevCapacity=node.contents?node.contents.length:0;if(prevCapacity>=newCapacity)return;var CAPACITY_DOUBLING_MAX=1024*1024;newCapacity=Math.max(newCapacity,prevCapacity*(prevCapacity<CAPACITY_DOUBLING_MAX?2:1.125)|0);if(prevCapacity!=0)newCapacity=Math.max(newCapacity,256);var oldContents=node.contents;node.contents=new Uint8Array(newCapacity);if(node.usedBytes>0)node.contents.set(oldContents.subarray(0,node.usedBytes),0);return}if(!node.contents&&newCapacity>0)node.contents=[];while(node.contents.length<newCapacity)node.contents.push(0)}),resizeFileStorage:(function(node,newSize){if(node.usedBytes==newSize)return;if(newSize==0){node.contents=null;node.usedBytes=0;return}if(!node.contents||node.contents.subarray){var oldContents=node.contents;node.contents=new Uint8Array(new ArrayBuffer(newSize));if(oldContents){node.contents.set(oldContents.subarray(0,Math.min(newSize,node.usedBytes)))}node.usedBytes=newSize;return}if(!node.contents)node.contents=[];if(node.contents.length>newSize)node.contents.length=newSize;else while(node.contents.length<newSize)node.contents.push(0);node.usedBytes=newSize}),node_ops:{getattr:(function(node){var attr={};attr.dev=FS.isChrdev(node.mode)?node.id:1;attr.ino=node.id;attr.mode=node.mode;attr.nlink=1;attr.uid=0;attr.gid=0;attr.rdev=node.rdev;if(FS.isDir(node.mode)){attr.size=4096}else if(FS.isFile(node.mode)){attr.size=node.usedBytes}else if(FS.isLink(node.mode)){attr.size=node.link.length}else{attr.size=0}attr.atime=new Date(node.timestamp);attr.mtime=new Date(node.timestamp);attr.ctime=new Date(node.timestamp);attr.blksize=4096;attr.blocks=Math.ceil(attr.size/attr.blksize);return attr}),setattr:(function(node,attr){if(attr.mode!==undefined){node.mode=attr.mode}if(attr.timestamp!==undefined){node.timestamp=attr.timestamp}if(attr.size!==undefined){MEMFS.resizeFileStorage(node,attr.size)}}),lookup:(function(parent,name){throw FS.genericErrors[ERRNO_CODES.ENOENT]}),mknod:(function(parent,name,mode,dev){return MEMFS.createNode(parent,name,mode,dev)}),rename:(function(old_node,new_dir,new_name){if(FS.isDir(old_node.mode)){var new_node;try{new_node=FS.lookupNode(new_dir,new_name)}catch(e){}if(new_node){for(var i in new_node.contents){throw new FS.ErrnoError(ERRNO_CODES.ENOTEMPTY)}}}delete old_node.parent.contents[old_node.name];old_node.name=new_name;new_dir.contents[new_name]=old_node;old_node.parent=new_dir}),unlink:(function(parent,name){delete parent.contents[name]}),rmdir:(function(parent,name){var node=FS.lookupNode(parent,name);for(var i in node.contents){throw new FS.ErrnoError(ERRNO_CODES.ENOTEMPTY)}delete parent.contents[name]}),readdir:(function(node){var entries=[".",".."];for(var key in node.contents){if(!node.contents.hasOwnProperty(key)){continue}entries.push(key)}return entries}),symlink:(function(parent,newname,oldpath){var node=MEMFS.createNode(parent,newname,511|40960,0);node.link=oldpath;return node}),readlink:(function(node){if(!FS.isLink(node.mode)){throw new FS.ErrnoError(ERRNO_CODES.EINVAL)}return node.link})},stream_ops:{read:(function(stream,buffer,offset,length,position){var contents=stream.node.contents;if(position>=stream.node.usedBytes)return 0;var size=Math.min(stream.node.usedBytes-position,length);assert(size>=0);if(size>8&&contents.subarray){buffer.set(contents.subarray(position,position+size),offset)}else{for(var i=0;i<size;i++)buffer[offset+i]=contents[position+i]}return size}),write:(function(stream,buffer,offset,length,position,canOwn){if(!length)return 0;var node=stream.node;node.timestamp=Date.now();if(buffer.subarray&&(!node.contents||node.contents.subarray)){if(canOwn){node.contents=buffer.subarray(offset,offset+length);node.usedBytes=length;return length}else if(node.usedBytes===0&&position===0){node.contents=new Uint8Array(buffer.subarray(offset,offset+length));node.usedBytes=length;return length}else if(position+length<=node.usedBytes){node.contents.set(buffer.subarray(offset,offset+length),position);return length}}MEMFS.expandFileStorage(node,position+length);if(node.contents.subarray&&buffer.subarray)node.contents.set(buffer.subarray(offset,offset+length),position);else{for(var i=0;i<length;i++){node.contents[position+i]=buffer[offset+i]}}node.usedBytes=Math.max(node.usedBytes,position+length);return length}),llseek:(function(stream,offset,whence){var position=offset;if(whence===1){position+=stream.position}else if(whence===2){if(FS.isFile(stream.node.mode)){position+=stream.node.usedBytes}}if(position<0){throw new FS.ErrnoError(ERRNO_CODES.EINVAL)}return position}),allocate:(function(stream,offset,length){MEMFS.expandFileStorage(stream.node,offset+length);stream.node.usedBytes=Math.max(stream.node.usedBytes,offset+length)}),mmap:(function(stream,buffer,offset,length,position,prot,flags){if(!FS.isFile(stream.node.mode)){throw new FS.ErrnoError(ERRNO_CODES.ENODEV)}var ptr;var allocated;var contents=stream.node.contents;if(!(flags&2)&&(contents.buffer===buffer||contents.buffer===buffer.buffer)){allocated=false;ptr=contents.byteOffset}else{if(position>0||position+length<stream.node.usedBytes){if(contents.subarray){contents=contents.subarray(position,position+length)}else{contents=Array.prototype.slice.call(contents,position,position+length)}}allocated=true;ptr=_malloc(length);if(!ptr){throw new FS.ErrnoError(ERRNO_CODES.ENOMEM)}buffer.set(contents,ptr)}return{ptr:ptr,allocated:allocated}}),msync:(function(stream,buffer,offset,length,mmapFlags){if(!FS.isFile(stream.node.mode)){throw new FS.ErrnoError(ERRNO_CODES.ENODEV)}if(mmapFlags&2){return 0}var bytesWritten=MEMFS.stream_ops.write(stream,buffer,0,length,offset,false);return 0})}};var IDBFS={dbs:{},indexedDB:(function(){if(typeof indexedDB!=="undefined")return indexedDB;var ret=null;if(typeof window==="object")ret=window.indexedDB||window.mozIndexedDB||window.webkitIndexedDB||window.msIndexedDB;assert(ret,"IDBFS used, but indexedDB not supported");return ret}),DB_VERSION:21,DB_STORE_NAME:"FILE_DATA",mount:(function(mount){return MEMFS.mount.apply(null,arguments)}),syncfs:(function(mount,populate,callback){IDBFS.getLocalSet(mount,(function(err,local){if(err)return callback(err);IDBFS.getRemoteSet(mount,(function(err,remote){if(err)return callback(err);var src=populate?remote:local;var dst=populate?local:remote;IDBFS.reconcile(src,dst,callback)}))}))}),getDB:(function(name,callback){var db=IDBFS.dbs[name];if(db){return callback(null,db)}var req;try{req=IDBFS.indexedDB().open(name,IDBFS.DB_VERSION)}catch(e){return callback(e)}if(!req){return callback("Unable to connect to IndexedDB")}req.onupgradeneeded=(function(e){var db=e.target.result;var transaction=e.target.transaction;var fileStore;if(db.objectStoreNames.contains(IDBFS.DB_STORE_NAME)){fileStore=transaction.objectStore(IDBFS.DB_STORE_NAME)}else{fileStore=db.createObjectStore(IDBFS.DB_STORE_NAME)}if(!fileStore.indexNames.contains("timestamp")){fileStore.createIndex("timestamp","timestamp",{unique:false})}});req.onsuccess=(function(){db=req.result;IDBFS.dbs[name]=db;callback(null,db)});req.onerror=(function(e){callback(this.error);e.preventDefault()})}),getLocalSet:(function(mount,callback){var entries={};function isRealDir(p){return p!=="."&&p!==".."}function toAbsolute(root){return(function(p){return PATH.join2(root,p)})}var check=FS.readdir(mount.mountpoint).filter(isRealDir).map(toAbsolute(mount.mountpoint));while(check.length){var path=check.pop();var stat;try{stat=FS.stat(path)}catch(e){return callback(e)}if(FS.isDir(stat.mode)){check.push.apply(check,FS.readdir(path).filter(isRealDir).map(toAbsolute(path)))}entries[path]={timestamp:stat.mtime}}return callback(null,{type:"local",entries:entries})}),getRemoteSet:(function(mount,callback){var entries={};IDBFS.getDB(mount.mountpoint,(function(err,db){if(err)return callback(err);var transaction=db.transaction([IDBFS.DB_STORE_NAME],"readonly");transaction.onerror=(function(e){callback(this.error);e.preventDefault()});var store=transaction.objectStore(IDBFS.DB_STORE_NAME);var index=store.index("timestamp");index.openKeyCursor().onsuccess=(function(event){var cursor=event.target.result;if(!cursor){return callback(null,{type:"remote",db:db,entries:entries})}entries[cursor.primaryKey]={timestamp:cursor.key};cursor.continue()})}))}),loadLocalEntry:(function(path,callback){var stat,node;try{var lookup=FS.lookupPath(path);node=lookup.node;stat=FS.stat(path)}catch(e){return callback(e)}if(FS.isDir(stat.mode)){return callback(null,{timestamp:stat.mtime,mode:stat.mode})}else if(FS.isFile(stat.mode)){node.contents=MEMFS.getFileDataAsTypedArray(node);return callback(null,{timestamp:stat.mtime,mode:stat.mode,contents:node.contents})}else{return callback(new Error("node type not supported"))}}),storeLocalEntry:(function(path,entry,callback){try{if(FS.isDir(entry.mode)){FS.mkdir(path,entry.mode)}else if(FS.isFile(entry.mode)){FS.writeFile(path,entry.contents,{encoding:"binary",canOwn:true})}else{return callback(new Error("node type not supported"))}FS.chmod(path,entry.mode);FS.utime(path,entry.timestamp,entry.timestamp)}catch(e){return callback(e)}callback(null)}),removeLocalEntry:(function(path,callback){try{var lookup=FS.lookupPath(path);var stat=FS.stat(path);if(FS.isDir(stat.mode)){FS.rmdir(path)}else if(FS.isFile(stat.mode)){FS.unlink(path)}}catch(e){return callback(e)}callback(null)}),loadRemoteEntry:(function(store,path,callback){var req=store.get(path);req.onsuccess=(function(event){callback(null,event.target.result)});req.onerror=(function(e){callback(this.error);e.preventDefault()})}),storeRemoteEntry:(function(store,path,entry,callback){var req=store.put(entry,path);req.onsuccess=(function(){callback(null)});req.onerror=(function(e){callback(this.error);e.preventDefault()})}),removeRemoteEntry:(function(store,path,callback){var req=store.delete(path);req.onsuccess=(function(){callback(null)});req.onerror=(function(e){callback(this.error);e.preventDefault()})}),reconcile:(function(src,dst,callback){var total=0;var create=[];Object.keys(src.entries).forEach((function(key){var e=src.entries[key];var e2=dst.entries[key];if(!e2||e.timestamp>e2.timestamp){create.push(key);total++}}));var remove=[];Object.keys(dst.entries).forEach((function(key){var e=dst.entries[key];var e2=src.entries[key];if(!e2){remove.push(key);total++}}));if(!total){return callback(null)}var completed=0;var db=src.type==="remote"?src.db:dst.db;var transaction=db.transaction([IDBFS.DB_STORE_NAME],"readwrite");var store=transaction.objectStore(IDBFS.DB_STORE_NAME);function done(err){if(err){if(!done.errored){done.errored=true;return callback(err)}return}if(++completed>=total){return callback(null)}}transaction.onerror=(function(e){done(this.error);e.preventDefault()});create.sort().forEach((function(path){if(dst.type==="local"){IDBFS.loadRemoteEntry(store,path,(function(err,entry){if(err)return done(err);IDBFS.storeLocalEntry(path,entry,done)}))}else{IDBFS.loadLocalEntry(path,(function(err,entry){if(err)return done(err);IDBFS.storeRemoteEntry(store,path,entry,done)}))}}));remove.sort().reverse().forEach((function(path){if(dst.type==="local"){IDBFS.removeLocalEntry(path,done)}else{IDBFS.removeRemoteEntry(store,path,done)}}))})};var NODEFS={isWindows:false,staticInit:(function(){NODEFS.isWindows=!!process.platform.match(/^win/)}),mount:(function(mount){assert(ENVIRONMENT_IS_NODE);return NODEFS.createNode(null,"/",NODEFS.getMode(mount.opts.root),0)}),createNode:(function(parent,name,mode,dev){if(!FS.isDir(mode)&&!FS.isFile(mode)&&!FS.isLink(mode)){throw new FS.ErrnoError(ERRNO_CODES.EINVAL)}var node=FS.createNode(parent,name,mode);node.node_ops=NODEFS.node_ops;node.stream_ops=NODEFS.stream_ops;return node}),getMode:(function(path){var stat;try{stat=fs.lstatSync(path);if(NODEFS.isWindows){stat.mode=stat.mode|(stat.mode&146)>>1}}catch(e){if(!e.code)throw e;throw new FS.ErrnoError(ERRNO_CODES[e.code])}return stat.mode}),realPath:(function(node){var parts=[];while(node.parent!==node){parts.push(node.name);node=node.parent}parts.push(node.mount.opts.root);parts.reverse();return PATH.join.apply(null,parts)}),flagsToPermissionStringMap:{0:"r",1:"r+",2:"r+",64:"r",65:"r+",66:"r+",129:"rx+",193:"rx+",514:"w+",577:"w",578:"w+",705:"wx",706:"wx+",1024:"a",1025:"a",1026:"a+",1089:"a",1090:"a+",1153:"ax",1154:"ax+",1217:"ax",1218:"ax+",4096:"rs",4098:"rs+"},flagsToPermissionString:(function(flags){flags&=~2097152;flags&=~2048;flags&=~32768;flags&=~524288;if(flags in NODEFS.flagsToPermissionStringMap){return NODEFS.flagsToPermissionStringMap[flags]}else{throw new FS.ErrnoError(ERRNO_CODES.EINVAL)}}),node_ops:{getattr:(function(node){var path=NODEFS.realPath(node);var stat;try{stat=fs.lstatSync(path)}catch(e){if(!e.code)throw e;throw new FS.ErrnoError(ERRNO_CODES[e.code])}if(NODEFS.isWindows&&!stat.blksize){stat.blksize=4096}if(NODEFS.isWindows&&!stat.blocks){stat.blocks=(stat.size+stat.blksize-1)/stat.blksize|0}return{dev:stat.dev,ino:stat.ino,mode:stat.mode,nlink:stat.nlink,uid:stat.uid,gid:stat.gid,rdev:stat.rdev,size:stat.size,atime:stat.atime,mtime:stat.mtime,ctime:stat.ctime,blksize:stat.blksize,blocks:stat.blocks}}),setattr:(function(node,attr){var path=NODEFS.realPath(node);try{if(attr.mode!==undefined){fs.chmodSync(path,attr.mode);node.mode=attr.mode}if(attr.timestamp!==undefined){var date=new Date(attr.timestamp);fs.utimesSync(path,date,date)}if(attr.size!==undefined){fs.truncateSync(path,attr.size)}}catch(e){if(!e.code)throw e;throw new FS.ErrnoError(ERRNO_CODES[e.code])}}),lookup:(function(parent,name){var path=PATH.join2(NODEFS.realPath(parent),name);var mode=NODEFS.getMode(path);return NODEFS.createNode(parent,name,mode)}),mknod:(function(parent,name,mode,dev){var node=NODEFS.createNode(parent,name,mode,dev);var path=NODEFS.realPath(node);try{if(FS.isDir(node.mode)){fs.mkdirSync(path,node.mode)}else{fs.writeFileSync(path,"",{mode:node.mode})}}catch(e){if(!e.code)throw e;throw new FS.ErrnoError(ERRNO_CODES[e.code])}return node}),rename:(function(oldNode,newDir,newName){var oldPath=NODEFS.realPath(oldNode);var newPath=PATH.join2(NODEFS.realPath(newDir),newName);try{fs.renameSync(oldPath,newPath)}catch(e){if(!e.code)throw e;throw new FS.ErrnoError(ERRNO_CODES[e.code])}}),unlink:(function(parent,name){var path=PATH.join2(NODEFS.realPath(parent),name);try{fs.unlinkSync(path)}catch(e){if(!e.code)throw e;throw new FS.ErrnoError(ERRNO_CODES[e.code])}}),rmdir:(function(parent,name){var path=PATH.join2(NODEFS.realPath(parent),name);try{fs.rmdirSync(path)}catch(e){if(!e.code)throw e;throw new FS.ErrnoError(ERRNO_CODES[e.code])}}),readdir:(function(node){var path=NODEFS.realPath(node);try{return fs.readdirSync(path)}catch(e){if(!e.code)throw e;throw new FS.ErrnoError(ERRNO_CODES[e.code])}}),symlink:(function(parent,newName,oldPath){var newPath=PATH.join2(NODEFS.realPath(parent),newName);try{fs.symlinkSync(oldPath,newPath)}catch(e){if(!e.code)throw e;throw new FS.ErrnoError(ERRNO_CODES[e.code])}}),readlink:(function(node){var path=NODEFS.realPath(node);try{path=fs.readlinkSync(path);path=NODEJS_PATH.relative(NODEJS_PATH.resolve(node.mount.opts.root),path);return path}catch(e){if(!e.code)throw e;throw new FS.ErrnoError(ERRNO_CODES[e.code])}})},stream_ops:{open:(function(stream){var path=NODEFS.realPath(stream.node);try{if(FS.isFile(stream.node.mode)){stream.nfd=fs.openSync(path,NODEFS.flagsToPermissionString(stream.flags))}}catch(e){if(!e.code)throw e;throw new FS.ErrnoError(ERRNO_CODES[e.code])}}),close:(function(stream){try{if(FS.isFile(stream.node.mode)&&stream.nfd){fs.closeSync(stream.nfd)}}catch(e){if(!e.code)throw e;throw new FS.ErrnoError(ERRNO_CODES[e.code])}}),read:(function(stream,buffer,offset,length,position){if(length===0)return 0;var nbuffer=new Buffer(length);var res;try{res=fs.readSync(stream.nfd,nbuffer,0,length,position)}catch(e){throw new FS.ErrnoError(ERRNO_CODES[e.code])}if(res>0){for(var i=0;i<res;i++){buffer[offset+i]=nbuffer[i]}}return res}),write:(function(stream,buffer,offset,length,position){var nbuffer=new Buffer(buffer.subarray(offset,offset+length));var res;try{res=fs.writeSync(stream.nfd,nbuffer,0,length,position)}catch(e){throw new FS.ErrnoError(ERRNO_CODES[e.code])}return res}),llseek:(function(stream,offset,whence){var position=offset;if(whence===1){position+=stream.position}else if(whence===2){if(FS.isFile(stream.node.mode)){try{var stat=fs.fstatSync(stream.nfd);position+=stat.size}catch(e){throw new FS.ErrnoError(ERRNO_CODES[e.code])}}}if(position<0){throw new FS.ErrnoError(ERRNO_CODES.EINVAL)}return position})}};var WORKERFS={DIR_MODE:16895,FILE_MODE:33279,reader:null,mount:(function(mount){assert(ENVIRONMENT_IS_WORKER);if(!WORKERFS.reader)WORKERFS.reader=new FileReaderSync;var root=WORKERFS.createNode(null,"/",WORKERFS.DIR_MODE,0);var createdParents={};function ensureParent(path){var parts=path.split("/");var parent=root;for(var i=0;i<parts.length-1;i++){var curr=parts.slice(0,i+1).join("/");if(!createdParents[curr]){createdParents[curr]=WORKERFS.createNode(parent,parts[i],WORKERFS.DIR_MODE,0)}parent=createdParents[curr]}return parent}function base(path){var parts=path.split("/");return parts[parts.length-1]}Array.prototype.forEach.call(mount.opts["files"]||[],(function(file){WORKERFS.createNode(ensureParent(file.name),base(file.name),WORKERFS.FILE_MODE,0,file,file.lastModifiedDate)}));(mount.opts["blobs"]||[]).forEach((function(obj){WORKERFS.createNode(ensureParent(obj["name"]),base(obj["name"]),WORKERFS.FILE_MODE,0,obj["data"])}));(mount.opts["packages"]||[]).forEach((function(pack){pack["metadata"].files.forEach((function(file){var name=file.filename.substr(1);WORKERFS.createNode(ensureParent(name),base(name),WORKERFS.FILE_MODE,0,pack["blob"].slice(file.start,file.end))}))}));return root}),createNode:(function(parent,name,mode,dev,contents,mtime){var node=FS.createNode(parent,name,mode);node.mode=mode;node.node_ops=WORKERFS.node_ops;node.stream_ops=WORKERFS.stream_ops;node.timestamp=(mtime||new Date).getTime();assert(WORKERFS.FILE_MODE!==WORKERFS.DIR_MODE);if(mode===WORKERFS.FILE_MODE){node.size=contents.size;node.contents=contents}else{node.size=4096;node.contents={}}if(parent){parent.contents[name]=node}return node}),node_ops:{getattr:(function(node){return{dev:1,ino:undefined,mode:node.mode,nlink:1,uid:0,gid:0,rdev:undefined,size:node.size,atime:new Date(node.timestamp),mtime:new Date(node.timestamp),ctime:new Date(node.timestamp),blksize:4096,blocks:Math.ceil(node.size/4096)}}),setattr:(function(node,attr){if(attr.mode!==undefined){node.mode=attr.mode}if(attr.timestamp!==undefined){node.timestamp=attr.timestamp}}),lookup:(function(parent,name){throw new FS.ErrnoError(ERRNO_CODES.ENOENT)}),mknod:(function(parent,name,mode,dev){throw new FS.ErrnoError(ERRNO_CODES.EPERM)}),rename:(function(oldNode,newDir,newName){throw new FS.ErrnoError(ERRNO_CODES.EPERM)}),unlink:(function(parent,name){throw new FS.ErrnoError(ERRNO_CODES.EPERM)}),rmdir:(function(parent,name){throw new FS.ErrnoError(ERRNO_CODES.EPERM)}),readdir:(function(node){var entries=[".",".."];for(var key in node.contents){if(!node.contents.hasOwnProperty(key)){continue}entries.push(key)}return entries}),symlink:(function(parent,newName,oldPath){throw new FS.ErrnoError(ERRNO_CODES.EPERM)}),readlink:(function(node){throw new FS.ErrnoError(ERRNO_CODES.EPERM)})},stream_ops:{read:(function(stream,buffer,offset,length,position){if(position>=stream.node.size)return 0;var chunk=stream.node.contents.slice(position,position+length);var ab=WORKERFS.reader.readAsArrayBuffer(chunk);buffer.set(new Uint8Array(ab),offset);return chunk.size}),write:(function(stream,buffer,offset,length,position){throw new FS.ErrnoError(ERRNO_CODES.EIO)}),llseek:(function(stream,offset,whence){var position=offset;if(whence===1){position+=stream.position}else if(whence===2){if(FS.isFile(stream.node.mode)){position+=stream.node.size}}if(position<0){throw new FS.ErrnoError(ERRNO_CODES.EINVAL)}return position})}};STATICTOP+=16;STATICTOP+=16;STATICTOP+=16;var FS={root:null,mounts:[],devices:[null],streams:[],nextInode:1,nameTable:null,currentPath:"/",initialized:false,ignorePermissions:true,trackingDelegate:{},tracking:{openFlags:{READ:1,WRITE:2}},ErrnoError:null,genericErrors:{},filesystems:null,syncFSRequests:0,handleFSError:(function(e){if(!(e instanceof FS.ErrnoError))throw e+" : "+stackTrace();return ___setErrNo(e.errno)}),lookupPath:(function(path,opts){path=PATH.resolve(FS.cwd(),path);opts=opts||{};if(!path)return{path:"",node:null};var defaults={follow_mount:true,recurse_count:0};for(var key in defaults){if(opts[key]===undefined){opts[key]=defaults[key]}}if(opts.recurse_count>8){throw new FS.ErrnoError(ERRNO_CODES.ELOOP)}var parts=PATH.normalizeArray(path.split("/").filter((function(p){return!!p})),false);var current=FS.root;var current_path="/";for(var i=0;i<parts.length;i++){var islast=i===parts.length-1;if(islast&&opts.parent){break}current=FS.lookupNode(current,parts[i]);current_path=PATH.join2(current_path,parts[i]);if(FS.isMountpoint(current)){if(!islast||islast&&opts.follow_mount){current=current.mounted.root}}if(!islast||opts.follow){var count=0;while(FS.isLink(current.mode)){var link=FS.readlink(current_path);current_path=PATH.resolve(PATH.dirname(current_path),link);var lookup=FS.lookupPath(current_path,{recurse_count:opts.recurse_count});current=lookup.node;if(count++>40){throw new FS.ErrnoError(ERRNO_CODES.ELOOP)}}}}return{path:current_path,node:current}}),getPath:(function(node){var path;while(true){if(FS.isRoot(node)){var mount=node.mount.mountpoint;if(!path)return mount;return mount[mount.length-1]!=="/"?mount+"/"+path:mount+path}path=path?node.name+"/"+path:node.name;node=node.parent}}),hashName:(function(parentid,name){var hash=0;for(var i=0;i<name.length;i++){hash=(hash<<5)-hash+name.charCodeAt(i)|0}return(parentid+hash>>>0)%FS.nameTable.length}),hashAddNode:(function(node){var hash=FS.hashName(node.parent.id,node.name);node.name_next=FS.nameTable[hash];FS.nameTable[hash]=node}),hashRemoveNode:(function(node){var hash=FS.hashName(node.parent.id,node.name);if(FS.nameTable[hash]===node){FS.nameTable[hash]=node.name_next}else{var current=FS.nameTable[hash];while(current){if(current.name_next===node){current.name_next=node.name_next;break}current=current.name_next}}}),lookupNode:(function(parent,name){var err=FS.mayLookup(parent);if(err){throw new FS.ErrnoError(err,parent)}var hash=FS.hashName(parent.id,name);for(var node=FS.nameTable[hash];node;node=node.name_next){var nodeName=node.name;if(node.parent.id===parent.id&&nodeName===name){return node}}return FS.lookup(parent,name)}),createNode:(function(parent,name,mode,rdev){if(!FS.FSNode){FS.FSNode=(function(parent,name,mode,rdev){if(!parent){parent=this}this.parent=parent;this.mount=parent.mount;this.mounted=null;this.id=FS.nextInode++;this.name=name;this.mode=mode;this.node_ops={};this.stream_ops={};this.rdev=rdev});FS.FSNode.prototype={};var readMode=292|73;var writeMode=146;Object.defineProperties(FS.FSNode.prototype,{read:{get:(function(){return(this.mode&readMode)===readMode}),set:(function(val){val?this.mode|=readMode:this.mode&=~readMode})},write:{get:(function(){return(this.mode&writeMode)===writeMode}),set:(function(val){val?this.mode|=writeMode:this.mode&=~writeMode})},isFolder:{get:(function(){return FS.isDir(this.mode)})},isDevice:{get:(function(){return FS.isChrdev(this.mode)})}})}var node=new FS.FSNode(parent,name,mode,rdev);FS.hashAddNode(node);return node}),destroyNode:(function(node){FS.hashRemoveNode(node)}),isRoot:(function(node){return node===node.parent}),isMountpoint:(function(node){return!!node.mounted}),isFile:(function(mode){return(mode&61440)===32768}),isDir:(function(mode){return(mode&61440)===16384}),isLink:(function(mode){return(mode&61440)===40960}),isChrdev:(function(mode){return(mode&61440)===8192}),isBlkdev:(function(mode){return(mode&61440)===24576}),isFIFO:(function(mode){return(mode&61440)===4096}),isSocket:(function(mode){return(mode&49152)===49152}),flagModes:{"r":0,"rs":1052672,"r+":2,"w":577,"wx":705,"xw":705,"w+":578,"wx+":706,"xw+":706,"a":1089,"ax":1217,"xa":1217,"a+":1090,"ax+":1218,"xa+":1218},modeStringToFlags:(function(str){var flags=FS.flagModes[str];if(typeof flags==="undefined"){throw new Error("Unknown file open mode: "+str)}return flags}),flagsToPermissionString:(function(flag){var perms=["r","w","rw"][flag&3];if(flag&512){perms+="w"}return perms}),nodePermissions:(function(node,perms){if(FS.ignorePermissions){return 0}if(perms.indexOf("r")!==-1&&!(node.mode&292)){return ERRNO_CODES.EACCES}else if(perms.indexOf("w")!==-1&&!(node.mode&146)){return ERRNO_CODES.EACCES}else if(perms.indexOf("x")!==-1&&!(node.mode&73)){return ERRNO_CODES.EACCES}return 0}),mayLookup:(function(dir){var err=FS.nodePermissions(dir,"x");if(err)return err;if(!dir.node_ops.lookup)return ERRNO_CODES.EACCES;return 0}),mayCreate:(function(dir,name){try{var node=FS.lookupNode(dir,name);return ERRNO_CODES.EEXIST}catch(e){}return FS.nodePermissions(dir,"wx")}),mayDelete:(function(dir,name,isdir){var node;try{node=FS.lookupNode(dir,name)}catch(e){return e.errno}var err=FS.nodePermissions(dir,"wx");if(err){return err}if(isdir){if(!FS.isDir(node.mode)){return ERRNO_CODES.ENOTDIR}if(FS.isRoot(node)||FS.getPath(node)===FS.cwd()){return ERRNO_CODES.EBUSY}}else{if(FS.isDir(node.mode)){return ERRNO_CODES.EISDIR}}return 0}),mayOpen:(function(node,flags){if(!node){return ERRNO_CODES.ENOENT}if(FS.isLink(node.mode)){return ERRNO_CODES.ELOOP}else if(FS.isDir(node.mode)){if(FS.flagsToPermissionString(flags)!=="r"||flags&512){return ERRNO_CODES.EISDIR}}return FS.nodePermissions(node,FS.flagsToPermissionString(flags))}),MAX_OPEN_FDS:4096,nextfd:(function(fd_start,fd_end){fd_start=fd_start||0;fd_end=fd_end||FS.MAX_OPEN_FDS;for(var fd=fd_start;fd<=fd_end;fd++){if(!FS.streams[fd]){return fd}}throw new FS.ErrnoError(ERRNO_CODES.EMFILE)}),getStream:(function(fd){return FS.streams[fd]}),createStream:(function(stream,fd_start,fd_end){if(!FS.FSStream){FS.FSStream=(function(){});FS.FSStream.prototype={};Object.defineProperties(FS.FSStream.prototype,{object:{get:(function(){return this.node}),set:(function(val){this.node=val})},isRead:{get:(function(){return(this.flags&2097155)!==1})},isWrite:{get:(function(){return(this.flags&2097155)!==0})},isAppend:{get:(function(){return this.flags&1024})}})}var newStream=new FS.FSStream;for(var p in stream){newStream[p]=stream[p]}stream=newStream;var fd=FS.nextfd(fd_start,fd_end);stream.fd=fd;FS.streams[fd]=stream;return stream}),closeStream:(function(fd){FS.streams[fd]=null}),chrdev_stream_ops:{open:(function(stream){var device=FS.getDevice(stream.node.rdev);stream.stream_ops=device.stream_ops;if(stream.stream_ops.open){stream.stream_ops.open(stream)}}),llseek:(function(){throw new FS.ErrnoError(ERRNO_CODES.ESPIPE)})},major:(function(dev){return dev>>8}),minor:(function(dev){return dev&255}),makedev:(function(ma,mi){return ma<<8|mi}),registerDevice:(function(dev,ops){FS.devices[dev]={stream_ops:ops}}),getDevice:(function(dev){return FS.devices[dev]}),getMounts:(function(mount){var mounts=[];var check=[mount];while(check.length){var m=check.pop();mounts.push(m);check.push.apply(check,m.mounts)}return mounts}),syncfs:(function(populate,callback){if(typeof populate==="function"){callback=populate;populate=false}FS.syncFSRequests++;if(FS.syncFSRequests>1){console.log("warning: "+FS.syncFSRequests+" FS.syncfs operations in flight at once, probably just doing extra work")}var mounts=FS.getMounts(FS.root.mount);var completed=0;function doCallback(err){assert(FS.syncFSRequests>0);FS.syncFSRequests--;return callback(err)}function done(err){if(err){if(!done.errored){done.errored=true;return doCallback(err)}return}if(++completed>=mounts.length){doCallback(null)}}mounts.forEach((function(mount){if(!mount.type.syncfs){return done(null)}mount.type.syncfs(mount,populate,done)}))}),mount:(function(type,opts,mountpoint){var root=mountpoint==="/";var pseudo=!mountpoint;var node;if(root&&FS.root){throw new FS.ErrnoError(ERRNO_CODES.EBUSY)}else if(!root&&!pseudo){var lookup=FS.lookupPath(mountpoint,{follow_mount:false});mountpoint=lookup.path;node=lookup.node;if(FS.isMountpoint(node)){throw new FS.ErrnoError(ERRNO_CODES.EBUSY)}if(!FS.isDir(node.mode)){throw new FS.ErrnoError(ERRNO_CODES.ENOTDIR)}}var mount={type:type,opts:opts,mountpoint:mountpoint,mounts:[]};var mountRoot=type.mount(mount);mountRoot.mount=mount;mount.root=mountRoot;if(root){FS.root=mountRoot}else if(node){node.mounted=mount;if(node.mount){node.mount.mounts.push(mount)}}return mountRoot}),unmount:(function(mountpoint){var lookup=FS.lookupPath(mountpoint,{follow_mount:false});if(!FS.isMountpoint(lookup.node)){throw new FS.ErrnoError(ERRNO_CODES.EINVAL)}var node=lookup.node;var mount=node.mounted;var mounts=FS.getMounts(mount);Object.keys(FS.nameTable).forEach((function(hash){var current=FS.nameTable[hash];while(current){var next=current.name_next;if(mounts.indexOf(current.mount)!==-1){FS.destroyNode(current)}current=next}}));node.mounted=null;var idx=node.mount.mounts.indexOf(mount);assert(idx!==-1);node.mount.mounts.splice(idx,1)}),lookup:(function(parent,name){return parent.node_ops.lookup(parent,name)}),mknod:(function(path,mode,dev){var lookup=FS.lookupPath(path,{parent:true});var parent=lookup.node;var name=PATH.basename(path);if(!name||name==="."||name===".."){throw new FS.ErrnoError(ERRNO_CODES.EINVAL)}var err=FS.mayCreate(parent,name);if(err){throw new FS.ErrnoError(err)}if(!parent.node_ops.mknod){throw new FS.ErrnoError(ERRNO_CODES.EPERM)}return parent.node_ops.mknod(parent,name,mode,dev)}),create:(function(path,mode){mode=mode!==undefined?mode:438;mode&=4095;mode|=32768;return FS.mknod(path,mode,0)}),mkdir:(function(path,mode){mode=mode!==undefined?mode:511;mode&=511|512;mode|=16384;return FS.mknod(path,mode,0)}),mkdirTree:(function(path,mode){var dirs=path.split("/");var d="";for(var i=0;i<dirs.length;++i){if(!dirs[i])continue;d+="/"+dirs[i];try{FS.mkdir(d,mode)}catch(e){if(e.errno!=ERRNO_CODES.EEXIST)throw e}}}),mkdev:(function(path,mode,dev){if(typeof dev==="undefined"){dev=mode;mode=438}mode|=8192;return FS.mknod(path,mode,dev)}),symlink:(function(oldpath,newpath){if(!PATH.resolve(oldpath)){throw new FS.ErrnoError(ERRNO_CODES.ENOENT)}var lookup=FS.lookupPath(newpath,{parent:true});var parent=lookup.node;if(!parent){throw new FS.ErrnoError(ERRNO_CODES.ENOENT)}var newname=PATH.basename(newpath);var err=FS.mayCreate(parent,newname);if(err){throw new FS.ErrnoError(err)}if(!parent.node_ops.symlink){throw new FS.ErrnoError(ERRNO_CODES.EPERM)}return parent.node_ops.symlink(parent,newname,oldpath)}),rename:(function(old_path,new_path){var old_dirname=PATH.dirname(old_path);var new_dirname=PATH.dirname(new_path);var old_name=PATH.basename(old_path);var new_name=PATH.basename(new_path);var lookup,old_dir,new_dir;try{lookup=FS.lookupPath(old_path,{parent:true});old_dir=lookup.node;lookup=FS.lookupPath(new_path,{parent:true});new_dir=lookup.node}catch(e){throw new FS.ErrnoError(ERRNO_CODES.EBUSY)}if(!old_dir||!new_dir)throw new FS.ErrnoError(ERRNO_CODES.ENOENT);if(old_dir.mount!==new_dir.mount){throw new FS.ErrnoError(ERRNO_CODES.EXDEV)}var old_node=FS.lookupNode(old_dir,old_name);var relative=PATH.relative(old_path,new_dirname);if(relative.charAt(0)!=="."){throw new FS.ErrnoError(ERRNO_CODES.EINVAL)}relative=PATH.relative(new_path,old_dirname);if(relative.charAt(0)!=="."){throw new FS.ErrnoError(ERRNO_CODES.ENOTEMPTY)}var new_node;try{new_node=FS.lookupNode(new_dir,new_name)}catch(e){}if(old_node===new_node){return}var isdir=FS.isDir(old_node.mode);var err=FS.mayDelete(old_dir,old_name,isdir);if(err){throw new FS.ErrnoError(err)}err=new_node?FS.mayDelete(new_dir,new_name,isdir):FS.mayCreate(new_dir,new_name);if(err){throw new FS.ErrnoError(err)}if(!old_dir.node_ops.rename){throw new FS.ErrnoError(ERRNO_CODES.EPERM)}if(FS.isMountpoint(old_node)||new_node&&FS.isMountpoint(new_node)){throw new FS.ErrnoError(ERRNO_CODES.EBUSY)}if(new_dir!==old_dir){err=FS.nodePermissions(old_dir,"w");if(err){throw new FS.ErrnoError(err)}}try{if(FS.trackingDelegate["willMovePath"]){FS.trackingDelegate["willMovePath"](old_path,new_path)}}catch(e){console.log("FS.trackingDelegate['willMovePath']('"+old_path+"', '"+new_path+"') threw an exception: "+e.message)}FS.hashRemoveNode(old_node);try{old_dir.node_ops.rename(old_node,new_dir,new_name)}catch(e){throw e}finally{FS.hashAddNode(old_node)}try{if(FS.trackingDelegate["onMovePath"])FS.trackingDelegate["onMovePath"](old_path,new_path)}catch(e){console.log("FS.trackingDelegate['onMovePath']('"+old_path+"', '"+new_path+"') threw an exception: "+e.message)}}),rmdir:(function(path){var lookup=FS.lookupPath(path,{parent:true});var parent=lookup.node;var name=PATH.basename(path);var node=FS.lookupNode(parent,name);var err=FS.mayDelete(parent,name,true);if(err){throw new FS.ErrnoError(err)}if(!parent.node_ops.rmdir){throw new FS.ErrnoError(ERRNO_CODES.EPERM)}if(FS.isMountpoint(node)){throw new FS.ErrnoError(ERRNO_CODES.EBUSY)}try{if(FS.trackingDelegate["willDeletePath"]){FS.trackingDelegate["willDeletePath"](path)}}catch(e){console.log("FS.trackingDelegate['willDeletePath']('"+path+"') threw an exception: "+e.message)}parent.node_ops.rmdir(parent,name);FS.destroyNode(node);try{if(FS.trackingDelegate["onDeletePath"])FS.trackingDelegate["onDeletePath"](path)}catch(e){console.log("FS.trackingDelegate['onDeletePath']('"+path+"') threw an exception: "+e.message)}}),readdir:(function(path){var lookup=FS.lookupPath(path,{follow:true});var node=lookup.node;if(!node.node_ops.readdir){throw new FS.ErrnoError(ERRNO_CODES.ENOTDIR)}return node.node_ops.readdir(node)}),unlink:(function(path){var lookup=FS.lookupPath(path,{parent:true});var parent=lookup.node;var name=PATH.basename(path);var node=FS.lookupNode(parent,name);var err=FS.mayDelete(parent,name,false);if(err){throw new FS.ErrnoError(err)}if(!parent.node_ops.unlink){throw new FS.ErrnoError(ERRNO_CODES.EPERM)}if(FS.isMountpoint(node)){throw new FS.ErrnoError(ERRNO_CODES.EBUSY)}try{if(FS.trackingDelegate["willDeletePath"]){FS.trackingDelegate["willDeletePath"](path)}}catch(e){console.log("FS.trackingDelegate['willDeletePath']('"+path+"') threw an exception: "+e.message)}parent.node_ops.unlink(parent,name);FS.destroyNode(node);try{if(FS.trackingDelegate["onDeletePath"])FS.trackingDelegate["onDeletePath"](path)}catch(e){console.log("FS.trackingDelegate['onDeletePath']('"+path+"') threw an exception: "+e.message)}}),readlink:(function(path){var lookup=FS.lookupPath(path);var link=lookup.node;if(!link){throw new FS.ErrnoError(ERRNO_CODES.ENOENT)}if(!link.node_ops.readlink){throw new FS.ErrnoError(ERRNO_CODES.EINVAL)}return PATH.resolve(FS.getPath(link.parent),link.node_ops.readlink(link))}),stat:(function(path,dontFollow){var lookup=FS.lookupPath(path,{follow:!dontFollow});var node=lookup.node;if(!node){throw new FS.ErrnoError(ERRNO_CODES.ENOENT)}if(!node.node_ops.getattr){throw new FS.ErrnoError(ERRNO_CODES.EPERM)}return node.node_ops.getattr(node)}),lstat:(function(path){return FS.stat(path,true)}),chmod:(function(path,mode,dontFollow){var node;if(typeof path==="string"){var lookup=FS.lookupPath(path,{follow:!dontFollow});node=lookup.node}else{node=path}if(!node.node_ops.setattr){throw new FS.ErrnoError(ERRNO_CODES.EPERM)}node.node_ops.setattr(node,{mode:mode&4095|node.mode&~4095,timestamp:Date.now()})}),lchmod:(function(path,mode){FS.chmod(path,mode,true)}),fchmod:(function(fd,mode){var stream=FS.getStream(fd);if(!stream){throw new FS.ErrnoError(ERRNO_CODES.EBADF)}FS.chmod(stream.node,mode)}),chown:(function(path,uid,gid,dontFollow){var node;if(typeof path==="string"){var lookup=FS.lookupPath(path,{follow:!dontFollow});node=lookup.node}else{node=path}if(!node.node_ops.setattr){throw new FS.ErrnoError(ERRNO_CODES.EPERM)}node.node_ops.setattr(node,{timestamp:Date.now()})}),lchown:(function(path,uid,gid){FS.chown(path,uid,gid,true)}),fchown:(function(fd,uid,gid){var stream=FS.getStream(fd);if(!stream){throw new FS.ErrnoError(ERRNO_CODES.EBADF)}FS.chown(stream.node,uid,gid)}),truncate:(function(path,len){if(len<0){throw new FS.ErrnoError(ERRNO_CODES.EINVAL)}var node;if(typeof path==="string"){var lookup=FS.lookupPath(path,{follow:true});node=lookup.node}else{node=path}if(!node.node_ops.setattr){throw new FS.ErrnoError(ERRNO_CODES.EPERM)}if(FS.isDir(node.mode)){throw new FS.ErrnoError(ERRNO_CODES.EISDIR)}if(!FS.isFile(node.mode)){throw new FS.ErrnoError(ERRNO_CODES.EINVAL)}var err=FS.nodePermissions(node,"w");if(err){throw new FS.ErrnoError(err)}node.node_ops.setattr(node,{size:len,timestamp:Date.now()})}),ftruncate:(function(fd,len){var stream=FS.getStream(fd);if(!stream){throw new FS.ErrnoError(ERRNO_CODES.EBADF)}if((stream.flags&2097155)===0){throw new FS.ErrnoError(ERRNO_CODES.EINVAL)}FS.truncate(stream.node,len)}),utime:(function(path,atime,mtime){var lookup=FS.lookupPath(path,{follow:true});var node=lookup.node;node.node_ops.setattr(node,{timestamp:Math.max(atime,mtime)})}),open:(function(path,flags,mode,fd_start,fd_end){if(path===""){throw new FS.ErrnoError(ERRNO_CODES.ENOENT)}flags=typeof flags==="string"?FS.modeStringToFlags(flags):flags;mode=typeof mode==="undefined"?438:mode;if(flags&64){mode=mode&4095|32768}else{mode=0}var node;if(typeof path==="object"){node=path}else{path=PATH.normalize(path);try{var lookup=FS.lookupPath(path,{follow:!(flags&131072)});node=lookup.node}catch(e){}}var created=false;if(flags&64){if(node){if(flags&128){throw new FS.ErrnoError(ERRNO_CODES.EEXIST)}}else{node=FS.mknod(path,mode,0);created=true}}if(!node){throw new FS.ErrnoError(ERRNO_CODES.ENOENT)}if(FS.isChrdev(node.mode)){flags&=~512}if(flags&65536&&!FS.isDir(node.mode)){throw new FS.ErrnoError(ERRNO_CODES.ENOTDIR)}if(!created){var err=FS.mayOpen(node,flags);if(err){throw new FS.ErrnoError(err)}}if(flags&512){FS.truncate(node,0)}flags&=~(128|512);var stream=FS.createStream({node:node,path:FS.getPath(node),flags:flags,seekable:true,position:0,stream_ops:node.stream_ops,ungotten:[],error:false},fd_start,fd_end);if(stream.stream_ops.open){stream.stream_ops.open(stream)}if(Module["logReadFiles"]&&!(flags&1)){if(!FS.readFiles)FS.readFiles={};if(!(path in FS.readFiles)){FS.readFiles[path]=1;Module["printErr"]("read file: "+path)}}try{if(FS.trackingDelegate["onOpenFile"]){var trackingFlags=0;if((flags&2097155)!==1){trackingFlags|=FS.tracking.openFlags.READ}if((flags&2097155)!==0){trackingFlags|=FS.tracking.openFlags.WRITE}FS.trackingDelegate["onOpenFile"](path,trackingFlags)}}catch(e){console.log("FS.trackingDelegate['onOpenFile']('"+path+"', flags) threw an exception: "+e.message)}return stream}),close:(function(stream){if(stream.getdents)stream.getdents=null;try{if(stream.stream_ops.close){stream.stream_ops.close(stream)}}catch(e){throw e}finally{FS.closeStream(stream.fd)}}),llseek:(function(stream,offset,whence){if(!stream.seekable||!stream.stream_ops.llseek){throw new FS.ErrnoError(ERRNO_CODES.ESPIPE)}stream.position=stream.stream_ops.llseek(stream,offset,whence);stream.ungotten=[];return stream.position}),read:(function(stream,buffer,offset,length,position){if(length<0||position<0){throw new FS.ErrnoError(ERRNO_CODES.EINVAL)}if((stream.flags&2097155)===1){throw new FS.ErrnoError(ERRNO_CODES.EBADF)}if(FS.isDir(stream.node.mode)){throw new FS.ErrnoError(ERRNO_CODES.EISDIR)}if(!stream.stream_ops.read){throw new FS.ErrnoError(ERRNO_CODES.EINVAL)}var seeking=true;if(typeof position==="undefined"){position=stream.position;seeking=false}else if(!stream.seekable){throw new FS.ErrnoError(ERRNO_CODES.ESPIPE)}var bytesRead=stream.stream_ops.read(stream,buffer,offset,length,position);if(!seeking)stream.position+=bytesRead;return bytesRead}),write:(function(stream,buffer,offset,length,position,canOwn){if(length<0||position<0){throw new FS.ErrnoError(ERRNO_CODES.EINVAL)}if((stream.flags&2097155)===0){throw new FS.ErrnoError(ERRNO_CODES.EBADF)}if(FS.isDir(stream.node.mode)){throw new FS.ErrnoError(ERRNO_CODES.EISDIR)}if(!stream.stream_ops.write){throw new FS.ErrnoError(ERRNO_CODES.EINVAL)}if(stream.flags&1024){FS.llseek(stream,0,2)}var seeking=true;if(typeof position==="undefined"){position=stream.position;seeking=false}else if(!stream.seekable){throw new FS.ErrnoError(ERRNO_CODES.ESPIPE)}var bytesWritten=stream.stream_ops.write(stream,buffer,offset,length,position,canOwn);if(!seeking)stream.position+=bytesWritten;try{if(stream.path&&FS.trackingDelegate["onWriteToFile"])FS.trackingDelegate["onWriteToFile"](stream.path)}catch(e){console.log("FS.trackingDelegate['onWriteToFile']('"+path+"') threw an exception: "+e.message)}return bytesWritten}),allocate:(function(stream,offset,length){if(offset<0||length<=0){throw new FS.ErrnoError(ERRNO_CODES.EINVAL)}if((stream.flags&2097155)===0){throw new FS.ErrnoError(ERRNO_CODES.EBADF)}if(!FS.isFile(stream.node.mode)&&!FS.isDir(node.mode)){throw new FS.ErrnoError(ERRNO_CODES.ENODEV)}if(!stream.stream_ops.allocate){throw new FS.ErrnoError(ERRNO_CODES.EOPNOTSUPP)}stream.stream_ops.allocate(stream,offset,length)}),mmap:(function(stream,buffer,offset,length,position,prot,flags){if((stream.flags&2097155)===1){throw new FS.ErrnoError(ERRNO_CODES.EACCES)}if(!stream.stream_ops.mmap){throw new FS.ErrnoError(ERRNO_CODES.ENODEV)}return stream.stream_ops.mmap(stream,buffer,offset,length,position,prot,flags)}),msync:(function(stream,buffer,offset,length,mmapFlags){if(!stream||!stream.stream_ops.msync){return 0}return stream.stream_ops.msync(stream,buffer,offset,length,mmapFlags)}),munmap:(function(stream){return 0}),ioctl:(function(stream,cmd,arg){if(!stream.stream_ops.ioctl){throw new FS.ErrnoError(ERRNO_CODES.ENOTTY)}return stream.stream_ops.ioctl(stream,cmd,arg)}),readFile:(function(path,opts){opts=opts||{};opts.flags=opts.flags||"r";opts.encoding=opts.encoding||"binary";if(opts.encoding!=="utf8"&&opts.encoding!=="binary"){throw new Error('Invalid encoding type "'+opts.encoding+'"')}var ret;var stream=FS.open(path,opts.flags);var stat=FS.stat(path);var length=stat.size;var buf=new Uint8Array(length);FS.read(stream,buf,0,length,0);if(opts.encoding==="utf8"){ret=UTF8ArrayToString(buf,0)}else if(opts.encoding==="binary"){ret=buf}FS.close(stream);return ret}),writeFile:(function(path,data,opts){opts=opts||{};opts.flags=opts.flags||"w";opts.encoding=opts.encoding||"utf8";if(opts.encoding!=="utf8"&&opts.encoding!=="binary"){throw new Error('Invalid encoding type "'+opts.encoding+'"')}var stream=FS.open(path,opts.flags,opts.mode);if(opts.encoding==="utf8"){var buf=new Uint8Array(lengthBytesUTF8(data)+1);var actualNumBytes=stringToUTF8Array(data,buf,0,buf.length);FS.write(stream,buf,0,actualNumBytes,0,opts.canOwn)}else if(opts.encoding==="binary"){FS.write(stream,data,0,data.length,0,opts.canOwn)}FS.close(stream)}),cwd:(function(){return FS.currentPath}),chdir:(function(path){var lookup=FS.lookupPath(path,{follow:true});if(lookup.node===null){throw new FS.ErrnoError(ERRNO_CODES.ENOENT)}if(!FS.isDir(lookup.node.mode)){throw new FS.ErrnoError(ERRNO_CODES.ENOTDIR)}var err=FS.nodePermissions(lookup.node,"x");if(err){throw new FS.ErrnoError(err)}FS.currentPath=lookup.path}),createDefaultDirectories:(function(){FS.mkdir("/tmp");FS.mkdir("/home");FS.mkdir("/home/web_user")}),createDefaultDevices:(function(){FS.mkdir("/dev");FS.registerDevice(FS.makedev(1,3),{read:(function(){return 0}),write:(function(stream,buffer,offset,length,pos){return length})});FS.mkdev("/dev/null",FS.makedev(1,3));TTY.register(FS.makedev(5,0),TTY.default_tty_ops);TTY.register(FS.makedev(6,0),TTY.default_tty1_ops);FS.mkdev("/dev/tty",FS.makedev(5,0));FS.mkdev("/dev/tty1",FS.makedev(6,0));var random_device;if(typeof crypto!=="undefined"){var randomBuffer=new Uint8Array(1);random_device=(function(){crypto.getRandomValues(randomBuffer);return randomBuffer[0]})}else if(ENVIRONMENT_IS_NODE){random_device=(function(){return require("crypto").randomBytes(1)[0]})}else{random_device=(function(){return Math.random()*256|0})}FS.createDevice("/dev","random",random_device);FS.createDevice("/dev","urandom",random_device);FS.mkdir("/dev/shm");FS.mkdir("/dev/shm/tmp")}),createSpecialDirectories:(function(){FS.mkdir("/proc");FS.mkdir("/proc/self");FS.mkdir("/proc/self/fd");FS.mount({mount:(function(){var node=FS.createNode("/proc/self","fd",16384|511,73);node.node_ops={lookup:(function(parent,name){var fd=+name;var stream=FS.getStream(fd);if(!stream)throw new FS.ErrnoError(ERRNO_CODES.EBADF);var ret={parent:null,mount:{mountpoint:"fake"},node_ops:{readlink:(function(){return stream.path})}};ret.parent=ret;return ret})};return node})},{},"/proc/self/fd")}),createStandardStreams:(function(){if(Module["stdin"]){FS.createDevice("/dev","stdin",Module["stdin"])}else{FS.symlink("/dev/tty","/dev/stdin")}if(Module["stdout"]){FS.createDevice("/dev","stdout",null,Module["stdout"])}else{FS.symlink("/dev/tty","/dev/stdout")}if(Module["stderr"]){FS.createDevice("/dev","stderr",null,Module["stderr"])}else{FS.symlink("/dev/tty1","/dev/stderr")}var stdin=FS.open("/dev/stdin","r");assert(stdin.fd===0,"invalid handle for stdin ("+stdin.fd+")");var stdout=FS.open("/dev/stdout","w");assert(stdout.fd===1,"invalid handle for stdout ("+stdout.fd+")");var stderr=FS.open("/dev/stderr","w");assert(stderr.fd===2,"invalid handle for stderr ("+stderr.fd+")")}),ensureErrnoError:(function(){if(FS.ErrnoError)return;FS.ErrnoError=function ErrnoError(errno,node){this.node=node;this.setErrno=(function(errno){this.errno=errno;for(var key in ERRNO_CODES){if(ERRNO_CODES[key]===errno){this.code=key;break}}});this.setErrno(errno);this.message=ERRNO_MESSAGES[errno]};FS.ErrnoError.prototype=new Error;FS.ErrnoError.prototype.constructor=FS.ErrnoError;[ERRNO_CODES.ENOENT].forEach((function(code){FS.genericErrors[code]=new FS.ErrnoError(code);FS.genericErrors[code].stack="<generic error, no stack>"}))}),staticInit:(function(){FS.ensureErrnoError();FS.nameTable=new Array(4096);FS.mount(MEMFS,{},"/");FS.createDefaultDirectories();FS.createDefaultDevices();FS.createSpecialDirectories();FS.filesystems={"MEMFS":MEMFS,"IDBFS":IDBFS,"NODEFS":NODEFS,"WORKERFS":WORKERFS}}),init:(function(input,output,error){assert(!FS.init.initialized,"FS.init was previously called. If you want to initialize later with custom parameters, remove any earlier calls (note that one is automatically added to the generated code)");FS.init.initialized=true;FS.ensureErrnoError();Module["stdin"]=input||Module["stdin"];Module["stdout"]=output||Module["stdout"];Module["stderr"]=error||Module["stderr"];FS.createStandardStreams()}),quit:(function(){FS.init.initialized=false;var fflush=Module["_fflush"];if(fflush)fflush(0);for(var i=0;i<FS.streams.length;i++){var stream=FS.streams[i];if(!stream){continue}FS.close(stream)}}),getMode:(function(canRead,canWrite){var mode=0;if(canRead)mode|=292|73;if(canWrite)mode|=146;return mode}),joinPath:(function(parts,forceRelative){var path=PATH.join.apply(null,parts);if(forceRelative&&path[0]=="/")path=path.substr(1);return path}),absolutePath:(function(relative,base){return PATH.resolve(base,relative)}),standardizePath:(function(path){return PATH.normalize(path)}),findObject:(function(path,dontResolveLastLink){var ret=FS.analyzePath(path,dontResolveLastLink);if(ret.exists){return ret.object}else{___setErrNo(ret.error);return null}}),analyzePath:(function(path,dontResolveLastLink){try{var lookup=FS.lookupPath(path,{follow:!dontResolveLastLink});path=lookup.path}catch(e){}var ret={isRoot:false,exists:false,error:0,name:null,path:null,object:null,parentExists:false,parentPath:null,parentObject:null};try{var lookup=FS.lookupPath(path,{parent:true});ret.parentExists=true;ret.parentPath=lookup.path;ret.parentObject=lookup.node;ret.name=PATH.basename(path);lookup=FS.lookupPath(path,{follow:!dontResolveLastLink});ret.exists=true;ret.path=lookup.path;ret.object=lookup.node;ret.name=lookup.node.name;ret.isRoot=lookup.path==="/"}catch(e){ret.error=e.errno}return ret}),createFolder:(function(parent,name,canRead,canWrite){var path=PATH.join2(typeof parent==="string"?parent:FS.getPath(parent),name);var mode=FS.getMode(canRead,canWrite);return FS.mkdir(path,mode)}),createPath:(function(parent,path,canRead,canWrite){parent=typeof parent==="string"?parent:FS.getPath(parent);var parts=path.split("/").reverse();while(parts.length){var part=parts.pop();if(!part)continue;var current=PATH.join2(parent,part);try{FS.mkdir(current)}catch(e){}parent=current}return current}),createFile:(function(parent,name,properties,canRead,canWrite){var path=PATH.join2(typeof parent==="string"?parent:FS.getPath(parent),name);var mode=FS.getMode(canRead,canWrite);return FS.create(path,mode)}),createDataFile:(function(parent,name,data,canRead,canWrite,canOwn){var path=name?PATH.join2(typeof parent==="string"?parent:FS.getPath(parent),name):parent;var mode=FS.getMode(canRead,canWrite);var node=FS.create(path,mode);if(data){if(typeof data==="string"){var arr=new Array(data.length);for(var i=0,len=data.length;i<len;++i)arr[i]=data.charCodeAt(i);data=arr}FS.chmod(node,mode|146);var stream=FS.open(node,"w");FS.write(stream,data,0,data.length,0,canOwn);FS.close(stream);FS.chmod(node,mode)}return node}),createDevice:(function(parent,name,input,output){var path=PATH.join2(typeof parent==="string"?parent:FS.getPath(parent),name);var mode=FS.getMode(!!input,!!output);if(!FS.createDevice.major)FS.createDevice.major=64;var dev=FS.makedev(FS.createDevice.major++,0);FS.registerDevice(dev,{open:(function(stream){stream.seekable=false}),close:(function(stream){if(output&&output.buffer&&output.buffer.length){output(10)}}),read:(function(stream,buffer,offset,length,pos){var bytesRead=0;for(var i=0;i<length;i++){var result;try{result=input()}catch(e){throw new FS.ErrnoError(ERRNO_CODES.EIO)}if(result===undefined&&bytesRead===0){throw new FS.ErrnoError(ERRNO_CODES.EAGAIN)}if(result===null||result===undefined)break;bytesRead++;buffer[offset+i]=result}if(bytesRead){stream.node.timestamp=Date.now()}return bytesRead}),write:(function(stream,buffer,offset,length,pos){for(var i=0;i<length;i++){try{output(buffer[offset+i])}catch(e){throw new FS.ErrnoError(ERRNO_CODES.EIO)}}if(length){stream.node.timestamp=Date.now()}return i})});return FS.mkdev(path,mode,dev)}),createLink:(function(parent,name,target,canRead,canWrite){var path=PATH.join2(typeof parent==="string"?parent:FS.getPath(parent),name);return FS.symlink(target,path)}),forceLoadFile:(function(obj){if(obj.isDevice||obj.isFolder||obj.link||obj.contents)return true;var success=true;if(typeof XMLHttpRequest!=="undefined"){throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.")}else if(Module["read"]){try{obj.contents=intArrayFromString(Module["read"](obj.url),true);obj.usedBytes=obj.contents.length}catch(e){success=false}}else{throw new Error("Cannot load without read() or XMLHttpRequest.")}if(!success)___setErrNo(ERRNO_CODES.EIO);return success}),createLazyFile:(function(parent,name,url,canRead,canWrite){function LazyUint8Array(){this.lengthKnown=false;this.chunks=[]}LazyUint8Array.prototype.get=function LazyUint8Array_get(idx){if(idx>this.length-1||idx<0){return undefined}var chunkOffset=idx%this.chunkSize;var chunkNum=idx/this.chunkSize|0;return this.getter(chunkNum)[chunkOffset]};LazyUint8Array.prototype.setDataGetter=function LazyUint8Array_setDataGetter(getter){this.getter=getter};LazyUint8Array.prototype.cacheLength=function LazyUint8Array_cacheLength(){var xhr=new XMLHttpRequest;xhr.open("HEAD",url,false);xhr.send(null);if(!(xhr.status>=200&&xhr.status<300||xhr.status===304))throw new Error("Couldn't load "+url+". Status: "+xhr.status);var datalength=Number(xhr.getResponseHeader("Content-length"));var header;var hasByteServing=(header=xhr.getResponseHeader("Accept-Ranges"))&&header==="bytes";var usesGzip=(header=xhr.getResponseHeader("Content-Encoding"))&&header==="gzip";var chunkSize=1024*1024;if(!hasByteServing)chunkSize=datalength;var doXHR=(function(from,to){if(from>to)throw new Error("invalid range ("+from+", "+to+") or no bytes requested!");if(to>datalength-1)throw new Error("only "+datalength+" bytes available! programmer error!");var xhr=new XMLHttpRequest;xhr.open("GET",url,false);if(datalength!==chunkSize)xhr.setRequestHeader("Range","bytes="+from+"-"+to);if(typeof Uint8Array!="undefined")xhr.responseType="arraybuffer";if(xhr.overrideMimeType){xhr.overrideMimeType("text/plain; charset=x-user-defined")}xhr.send(null);if(!(xhr.status>=200&&xhr.status<300||xhr.status===304))throw new Error("Couldn't load "+url+". Status: "+xhr.status);if(xhr.response!==undefined){return new Uint8Array(xhr.response||[])}else{return intArrayFromString(xhr.responseText||"",true)}});var lazyArray=this;lazyArray.setDataGetter((function(chunkNum){var start=chunkNum*chunkSize;var end=(chunkNum+1)*chunkSize-1;end=Math.min(end,datalength-1);if(typeof lazyArray.chunks[chunkNum]==="undefined"){lazyArray.chunks[chunkNum]=doXHR(start,end)}if(typeof lazyArray.chunks[chunkNum]==="undefined")throw new Error("doXHR failed!");return lazyArray.chunks[chunkNum]}));if(usesGzip||!datalength){chunkSize=datalength=1;datalength=this.getter(0).length;chunkSize=datalength;console.log("LazyFiles on gzip forces download of the whole file when length is accessed")}this._length=datalength;this._chunkSize=chunkSize;this.lengthKnown=true};if(typeof XMLHttpRequest!=="undefined"){if(!ENVIRONMENT_IS_WORKER)throw"Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";var lazyArray=new LazyUint8Array;Object.defineProperties(lazyArray,{length:{get:(function(){if(!this.lengthKnown){this.cacheLength()}return this._length})},chunkSize:{get:(function(){if(!this.lengthKnown){this.cacheLength()}return this._chunkSize})}});var properties={isDevice:false,contents:lazyArray}}else{var properties={isDevice:false,url:url}}var node=FS.createFile(parent,name,properties,canRead,canWrite);if(properties.contents){node.contents=properties.contents}else if(properties.url){node.contents=null;node.url=properties.url}Object.defineProperties(node,{usedBytes:{get:(function(){return this.contents.length})}});var stream_ops={};var keys=Object.keys(node.stream_ops);keys.forEach((function(key){var fn=node.stream_ops[key];stream_ops[key]=function forceLoadLazyFile(){if(!FS.forceLoadFile(node)){throw new FS.ErrnoError(ERRNO_CODES.EIO)}return fn.apply(null,arguments)}}));stream_ops.read=function stream_ops_read(stream,buffer,offset,length,position){if(!FS.forceLoadFile(node)){throw new FS.ErrnoError(ERRNO_CODES.EIO)}var contents=stream.node.contents;if(position>=contents.length)return 0;var size=Math.min(contents.length-position,length);assert(size>=0);if(contents.slice){for(var i=0;i<size;i++){buffer[offset+i]=contents[position+i]}}else{for(var i=0;i<size;i++){buffer[offset+i]=contents.get(position+i)}}return size};node.stream_ops=stream_ops;return node}),createPreloadedFile:(function(parent,name,url,canRead,canWrite,onload,onerror,dontCreateFile,canOwn,preFinish){Browser.init();var fullname=name?PATH.resolve(PATH.join2(parent,name)):parent;var dep=getUniqueRunDependency("cp "+fullname);function processData(byteArray){function finish(byteArray){if(preFinish)preFinish();if(!dontCreateFile){FS.createDataFile(parent,name,byteArray,canRead,canWrite,canOwn)}if(onload)onload();removeRunDependency(dep)}var handled=false;Module["preloadPlugins"].forEach((function(plugin){if(handled)return;if(plugin["canHandle"](fullname)){plugin["handle"](byteArray,fullname,finish,(function(){if(onerror)onerror();removeRunDependency(dep)}));handled=true}}));if(!handled)finish(byteArray)}addRunDependency(dep);if(typeof url=="string"){Browser.asyncLoad(url,(function(byteArray){processData(byteArray)}),onerror)}else{processData(url)}}),indexedDB:(function(){return window.indexedDB||window.mozIndexedDB||window.webkitIndexedDB||window.msIndexedDB}),DB_NAME:(function(){return"EM_FS_"+window.location.pathname}),DB_VERSION:20,DB_STORE_NAME:"FILE_DATA",saveFilesToDB:(function(paths,onload,onerror){onload=onload||(function(){});onerror=onerror||(function(){});var indexedDB=FS.indexedDB();try{var openRequest=indexedDB.open(FS.DB_NAME(),FS.DB_VERSION)}catch(e){return onerror(e)}openRequest.onupgradeneeded=function openRequest_onupgradeneeded(){console.log("creating db");var db=openRequest.result;db.createObjectStore(FS.DB_STORE_NAME)};openRequest.onsuccess=function openRequest_onsuccess(){var db=openRequest.result;var transaction=db.transaction([FS.DB_STORE_NAME],"readwrite");var files=transaction.objectStore(FS.DB_STORE_NAME);var ok=0,fail=0,total=paths.length;function finish(){if(fail==0)onload();else onerror()}paths.forEach((function(path){var putRequest=files.put(FS.analyzePath(path).object.contents,path);putRequest.onsuccess=function putRequest_onsuccess(){ok++;if(ok+fail==total)finish()};putRequest.onerror=function putRequest_onerror(){fail++;if(ok+fail==total)finish()}}));transaction.onerror=onerror};openRequest.onerror=onerror}),loadFilesFromDB:(function(paths,onload,onerror){onload=onload||(function(){});onerror=onerror||(function(){});var indexedDB=FS.indexedDB();try{var openRequest=indexedDB.open(FS.DB_NAME(),FS.DB_VERSION)}catch(e){return onerror(e)}openRequest.onupgradeneeded=onerror;openRequest.onsuccess=function openRequest_onsuccess(){var db=openRequest.result;try{var transaction=db.transaction([FS.DB_STORE_NAME],"readonly")}catch(e){onerror(e);return}var files=transaction.objectStore(FS.DB_STORE_NAME);var ok=0,fail=0,total=paths.length;function finish(){if(fail==0)onload();else onerror()}paths.forEach((function(path){var getRequest=files.get(path);getRequest.onsuccess=function getRequest_onsuccess(){if(FS.analyzePath(path).exists){FS.unlink(path)}FS.createDataFile(PATH.dirname(path),PATH.basename(path),getRequest.result,true,true,true);ok++;if(ok+fail==total)finish()};getRequest.onerror=function getRequest_onerror(){fail++;if(ok+fail==total)finish()}}));transaction.onerror=onerror};openRequest.onerror=onerror})};var SYSCALLS={DEFAULT_POLLMASK:5,mappings:{},umask:511,calculateAt:(function(dirfd,path){if(path[0]!=="/"){var dir;if(dirfd===-100){dir=FS.cwd()}else{var dirstream=FS.getStream(dirfd);if(!dirstream)throw new FS.ErrnoError(ERRNO_CODES.EBADF);dir=dirstream.path}path=PATH.join2(dir,path)}return path}),doStat:(function(func,path,buf){try{var stat=func(path)}catch(e){if(e&&e.node&&PATH.normalize(path)!==PATH.normalize(FS.getPath(e.node))){return-ERRNO_CODES.ENOTDIR}throw e}HEAP32[buf>>2]=stat.dev;HEAP32[buf+4>>2]=0;HEAP32[buf+8>>2]=stat.ino;HEAP32[buf+12>>2]=stat.mode;HEAP32[buf+16>>2]=stat.nlink;HEAP32[buf+20>>2]=stat.uid;HEAP32[buf+24>>2]=stat.gid;HEAP32[buf+28>>2]=stat.rdev;HEAP32[buf+32>>2]=0;HEAP32[buf+36>>2]=stat.size;HEAP32[buf+40>>2]=4096;HEAP32[buf+44>>2]=stat.blocks;HEAP32[buf+48>>2]=stat.atime.getTime()/1e3|0;HEAP32[buf+52>>2]=0;HEAP32[buf+56>>2]=stat.mtime.getTime()/1e3|0;HEAP32[buf+60>>2]=0;HEAP32[buf+64>>2]=stat.ctime.getTime()/1e3|0;HEAP32[buf+68>>2]=0;HEAP32[buf+72>>2]=stat.ino;return 0}),doMsync:(function(addr,stream,len,flags){var buffer=new Uint8Array(HEAPU8.subarray(addr,addr+len));FS.msync(stream,buffer,0,len,flags)}),doMkdir:(function(path,mode){path=PATH.normalize(path);if(path[path.length-1]==="/")path=path.substr(0,path.length-1);FS.mkdir(path,mode,0);return 0}),doMknod:(function(path,mode,dev){switch(mode&61440){case 32768:case 8192:case 24576:case 4096:case 49152:break;default:return-ERRNO_CODES.EINVAL}FS.mknod(path,mode,dev);return 0}),doReadlink:(function(path,buf,bufsize){if(bufsize<=0)return-ERRNO_CODES.EINVAL;var ret=FS.readlink(path);var len=Math.min(bufsize,lengthBytesUTF8(ret));var endChar=HEAP8[buf+len];stringToUTF8(ret,buf,bufsize+1);HEAP8[buf+len]=endChar;return len}),doAccess:(function(path,amode){if(amode&~7){return-ERRNO_CODES.EINVAL}var node;var lookup=FS.lookupPath(path,{follow:true});node=lookup.node;var perms="";if(amode&4)perms+="r";if(amode&2)perms+="w";if(amode&1)perms+="x";if(perms&&FS.nodePermissions(node,perms)){return-ERRNO_CODES.EACCES}return 0}),doDup:(function(path,flags,suggestFD){var suggest=FS.getStream(suggestFD);if(suggest)FS.close(suggest);return FS.open(path,flags,0,suggestFD,suggestFD).fd}),doReadv:(function(stream,iov,iovcnt,offset){var ret=0;for(var i=0;i<iovcnt;i++){var ptr=HEAP32[iov+i*8>>2];var len=HEAP32[iov+(i*8+4)>>2];var curr=FS.read(stream,HEAP8,ptr,len,offset);if(curr<0)return-1;ret+=curr;if(curr<len)break}return ret}),doWritev:(function(stream,iov,iovcnt,offset){var ret=0;for(var i=0;i<iovcnt;i++){var ptr=HEAP32[iov+i*8>>2];var len=HEAP32[iov+(i*8+4)>>2];var curr=FS.write(stream,HEAP8,ptr,len,offset);if(curr<0)return-1;ret+=curr}return ret}),varargs:0,get:(function(varargs){SYSCALLS.varargs+=4;var ret=HEAP32[SYSCALLS.varargs-4>>2];return ret}),getStr:(function(){var ret=Pointer_stringify(SYSCALLS.get());return ret}),getStreamFromFD:(function(){var stream=FS.getStream(SYSCALLS.get());if(!stream)throw new FS.ErrnoError(ERRNO_CODES.EBADF);return stream}),getSocketFromFD:(function(){var socket=SOCKFS.getSocket(SYSCALLS.get());if(!socket)throw new FS.ErrnoError(ERRNO_CODES.EBADF);return socket}),getSocketAddress:(function(allowNull){var addrp=SYSCALLS.get(),addrlen=SYSCALLS.get();if(allowNull&&addrp===0)return null;var info=__read_sockaddr(addrp,addrlen);if(info.errno)throw new FS.ErrnoError(info.errno);info.addr=DNS.lookup_addr(info.addr)||info.addr;return info}),get64:(function(){var low=SYSCALLS.get(),high=SYSCALLS.get();if(low>=0)assert(high===0);else assert(high===-1);return low}),getZero:(function(){assert(SYSCALLS.get()===0)})};function ___syscall91(which,varargs){SYSCALLS.varargs=varargs;try{var addr=SYSCALLS.get(),len=SYSCALLS.get();var info=SYSCALLS.mappings[addr];if(!info)return 0;if(len===info.len){var stream=FS.getStream(info.fd);SYSCALLS.doMsync(addr,stream,len,info.flags);FS.munmap(stream);SYSCALLS.mappings[addr]=null;if(info.allocated){_free(info.malloc)}}return 0}catch(e){if(typeof FS==="undefined"||!(e instanceof FS.ErrnoError))abort(e);return-e.errno}}function _pthread_setspecific(key,value){if(!(key in PTHREAD_SPECIFIC)){return ERRNO_CODES.EINVAL}PTHREAD_SPECIFIC[key]=value;return 0}function __exit(status){Module["exit"](status)}function _exit(status){__exit(status)}function ___syscall54(which,varargs){SYSCALLS.varargs=varargs;try{var stream=SYSCALLS.getStreamFromFD(),op=SYSCALLS.get();switch(op){case 21505:{if(!stream.tty)return-ERRNO_CODES.ENOTTY;return 0};case 21506:{if(!stream.tty)return-ERRNO_CODES.ENOTTY;return 0};case 21519:{if(!stream.tty)return-ERRNO_CODES.ENOTTY;var argp=SYSCALLS.get();HEAP32[argp>>2]=0;return 0};case 21520:{if(!stream.tty)return-ERRNO_CODES.ENOTTY;return-ERRNO_CODES.EINVAL};case 21531:{var argp=SYSCALLS.get();return FS.ioctl(stream,op,argp)};case 21523:{if(!stream.tty)return-ERRNO_CODES.ENOTTY;return 0};default:abort("bad ioctl syscall "+op)}}catch(e){if(typeof FS==="undefined"||!(e instanceof FS.ErrnoError))abort(e);return-e.errno}}Module["_bitshift64Lshr"]=_bitshift64Lshr;function ___cxa_pure_virtual(){ABORT=true;throw"Pure virtual function called!"}var _environ=STATICTOP;STATICTOP+=16;function ___buildEnvironment(env){var MAX_ENV_VALUES=64;var TOTAL_ENV_SIZE=1024;var poolPtr;var envPtr;if(!___buildEnvironment.called){___buildEnvironment.called=true;ENV["USER"]=ENV["LOGNAME"]="web_user";ENV["PATH"]="/";ENV["PWD"]="/";ENV["HOME"]="/home/web_user";ENV["LANG"]="C";ENV["_"]=Module["thisProgram"];poolPtr=allocate(TOTAL_ENV_SIZE,"i8",ALLOC_STATIC);envPtr=allocate(MAX_ENV_VALUES*4,"i8*",ALLOC_STATIC);HEAP32[envPtr>>2]=poolPtr;HEAP32[_environ>>2]=envPtr}else{envPtr=HEAP32[_environ>>2];poolPtr=HEAP32[envPtr>>2]}var strings=[];var totalSize=0;for(var key in env){if(typeof env[key]==="string"){var line=key+"="+env[key];strings.push(line);totalSize+=line.length}}if(totalSize>TOTAL_ENV_SIZE){throw new Error("Environment size exceeded TOTAL_ENV_SIZE!")}var ptrSize=4;for(var i=0;i<strings.length;i++){var line=strings[i];writeAsciiToMemory(line,poolPtr);HEAP32[envPtr+i*ptrSize>>2]=poolPtr;poolPtr+=line.length+1}HEAP32[envPtr+strings.length*ptrSize>>2]=0}var ENV={};function _getenv(name){if(name===0)return 0;name=Pointer_stringify(name);if(!ENV.hasOwnProperty(name))return 0;if(_getenv.ret)_free(_getenv.ret);_getenv.ret=allocate(intArrayFromString(ENV[name]),"i8",ALLOC_NORMAL);return _getenv.ret}function ___map_file(pathname,size){___setErrNo(ERRNO_CODES.EPERM);return-1}function __ZSt18uncaught_exceptionv(){return!!__ZSt18uncaught_exceptionv.uncaught_exception}var EXCEPTIONS={last:0,caught:[],infos:{},deAdjust:(function(adjusted){if(!adjusted||EXCEPTIONS.infos[adjusted])return adjusted;for(var ptr in EXCEPTIONS.infos){var info=EXCEPTIONS.infos[ptr];if(info.adjusted===adjusted){return ptr}}return adjusted}),addRef:(function(ptr){if(!ptr)return;var info=EXCEPTIONS.infos[ptr];info.refcount++}),decRef:(function(ptr){if(!ptr)return;var info=EXCEPTIONS.infos[ptr];assert(info.refcount>0);info.refcount--;if(info.refcount===0&&!info.rethrown){if(info.destructor){Module["dynCall_vi"](info.destructor,ptr)}delete EXCEPTIONS.infos[ptr];___cxa_free_exception(ptr)}}),clearRef:(function(ptr){if(!ptr)return;var info=EXCEPTIONS.infos[ptr];info.refcount=0})};function ___cxa_begin_catch(ptr){var info=EXCEPTIONS.infos[ptr];if(info&&!info.caught){info.caught=true;__ZSt18uncaught_exceptionv.uncaught_exception--}if(info)info.rethrown=false;EXCEPTIONS.caught.push(ptr);EXCEPTIONS.addRef(EXCEPTIONS.deAdjust(ptr));return ptr}function ___syscall5(which,varargs){SYSCALLS.varargs=varargs;try{var pathname=SYSCALLS.getStr(),flags=SYSCALLS.get(),mode=SYSCALLS.get();var stream=FS.open(pathname,flags,mode);return stream.fd}catch(e){if(typeof FS==="undefined"||!(e instanceof FS.ErrnoError))abort(e);return-e.errno}}function _emscripten_memcpy_big(dest,src,num){HEAPU8.set(HEAPU8.subarray(src,src+num),dest);return dest}Module["_memcpy"]=_memcpy;function ___syscall6(which,varargs){SYSCALLS.varargs=varargs;try{var stream=SYSCALLS.getStreamFromFD();FS.close(stream);return 0}catch(e){if(typeof FS==="undefined"||!(e instanceof FS.ErrnoError))abort(e);return-e.errno}}var cttz_i8=allocate([8,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,4,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,5,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,4,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,6,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,4,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,5,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,4,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,7,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,4,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,5,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,4,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,6,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,4,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,5,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,4,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0],"i8",ALLOC_STATIC);Module["_llvm_cttz_i32"]=_llvm_cttz_i32;Module["___udivmoddi4"]=___udivmoddi4;Module["___udivdi3"]=___udivdi3;Module["___muldsi3"]=___muldsi3;Module["___muldi3"]=___muldi3;Module["_sbrk"]=_sbrk;function ___resumeException(ptr){if(!EXCEPTIONS.last){EXCEPTIONS.last=ptr}throw ptr+" - Exception catching is disabled, this exception cannot be caught. Compile with -s DISABLE_EXCEPTION_CATCHING=0 or DISABLE_EXCEPTION_CATCHING=2 to catch."}function ___cxa_find_matching_catch(){var thrown=EXCEPTIONS.last;if(!thrown){return(Runtime.setTempRet0(0),0)|0}var info=EXCEPTIONS.infos[thrown];var throwntype=info.type;if(!throwntype){return(Runtime.setTempRet0(0),thrown)|0}var typeArray=Array.prototype.slice.call(arguments);var pointer=Module["___cxa_is_pointer_type"](throwntype);if(!___cxa_find_matching_catch.buffer)___cxa_find_matching_catch.buffer=_malloc(4);HEAP32[___cxa_find_matching_catch.buffer>>2]=thrown;thrown=___cxa_find_matching_catch.buffer;for(var i=0;i<typeArray.length;i++){if(typeArray[i]&&Module["___cxa_can_catch"](typeArray[i],throwntype,thrown)){thrown=HEAP32[thrown>>2];info.adjusted=thrown;return(Runtime.setTempRet0(typeArray[i]),thrown)|0}}thrown=HEAP32[thrown>>2];return(Runtime.setTempRet0(throwntype),thrown)|0}function ___gxx_personality_v0(){}Module["___uremdi3"]=___uremdi3;Module["_llvm_bswap_i32"]=_llvm_bswap_i32;function ___syscall140(which,varargs){SYSCALLS.varargs=varargs;try{var stream=SYSCALLS.getStreamFromFD(),offset_high=SYSCALLS.get(),offset_low=SYSCALLS.get(),result=SYSCALLS.get(),whence=SYSCALLS.get();var offset=offset_low;assert(offset_high===0);FS.llseek(stream,offset,whence);HEAP32[result>>2]=stream.position;if(stream.getdents&&offset===0&&whence===0)stream.getdents=null;return 0}catch(e){if(typeof FS==="undefined"||!(e instanceof FS.ErrnoError))abort(e);return-e.errno}}function ___syscall146(which,varargs){SYSCALLS.varargs=varargs;try{var stream=SYSCALLS.getStreamFromFD(),iov=SYSCALLS.get(),iovcnt=SYSCALLS.get();return SYSCALLS.doWritev(stream,iov,iovcnt)}catch(e){if(typeof FS==="undefined"||!(e instanceof FS.ErrnoError))abort(e);return-e.errno}}function ___syscall221(which,varargs){SYSCALLS.varargs=varargs;try{var stream=SYSCALLS.getStreamFromFD(),cmd=SYSCALLS.get();switch(cmd){case 0:{var arg=SYSCALLS.get();if(arg<0){return-ERRNO_CODES.EINVAL}var newStream;newStream=FS.open(stream.path,stream.flags,0,arg);return newStream.fd};case 1:case 2:return 0;case 3:return stream.flags;case 4:{var arg=SYSCALLS.get();stream.flags|=arg;return 0};case 12:case 12:{var arg=SYSCALLS.get();var offset=0;HEAP16[arg+offset>>1]=2;return 0};case 13:case 14:case 13:case 14:return 0;case 16:case 8:return-ERRNO_CODES.EINVAL;case 9:___setErrNo(ERRNO_CODES.EINVAL);return-1;default:{return-ERRNO_CODES.EINVAL}}}catch(e){if(typeof FS==="undefined"||!(e instanceof FS.ErrnoError))abort(e);return-e.errno}}function ___syscall145(which,varargs){SYSCALLS.varargs=varargs;try{var stream=SYSCALLS.getStreamFromFD(),iov=SYSCALLS.get(),iovcnt=SYSCALLS.get();return SYSCALLS.doReadv(stream,iov,iovcnt)}catch(e){if(typeof FS==="undefined"||!(e instanceof FS.ErrnoError))abort(e);return-e.errno}}FS.staticInit();__ATINIT__.unshift((function(){if(!Module["noFSInit"]&&!FS.init.initialized)FS.init()}));__ATMAIN__.push((function(){FS.ignorePermissions=false}));__ATEXIT__.push((function(){FS.quit()}));Module["FS_createFolder"]=FS.createFolder;Module["FS_createPath"]=FS.createPath;Module["FS_createDataFile"]=FS.createDataFile;Module["FS_createPreloadedFile"]=FS.createPreloadedFile;Module["FS_createLazyFile"]=FS.createLazyFile;Module["FS_createLink"]=FS.createLink;Module["FS_createDevice"]=FS.createDevice;Module["FS_unlink"]=FS.unlink;__ATINIT__.unshift((function(){TTY.init()}));__ATEXIT__.push((function(){TTY.shutdown()}));if(ENVIRONMENT_IS_NODE){var fs=require("fs");var NODEJS_PATH=require("path");NODEFS.staticInit()}___buildEnvironment(ENV);DYNAMICTOP_PTR=allocate(1,"i32",ALLOC_STATIC);STACK_BASE=STACKTOP=Runtime.alignMemory(STATICTOP);STACK_MAX=STACK_BASE+TOTAL_STACK;DYNAMIC_BASE=Runtime.alignMemory(STACK_MAX);HEAP32[DYNAMICTOP_PTR>>2]=DYNAMIC_BASE;staticSealed=true;function invoke_iiii(index,a1,a2,a3){try{return Module["dynCall_iiii"](index,a1,a2,a3)}catch(e){if(typeof e!=="number"&&e!=="longjmp")throw e;Module["setThrew"](1,0)}}function invoke_viiiiii(index,a1,a2,a3,a4,a5,a6){try{Module["dynCall_viiiiii"](index,a1,a2,a3,a4,a5,a6)}catch(e){if(typeof e!=="number"&&e!=="longjmp")throw e;Module["setThrew"](1,0)}}function invoke_di(index,a1){try{return Module["dynCall_di"](index,a1)}catch(e){if(typeof e!=="number"&&e!=="longjmp")throw e;Module["setThrew"](1,0)}}function invoke_vi(index,a1){try{Module["dynCall_vi"](index,a1)}catch(e){if(typeof e!=="number"&&e!=="longjmp")throw e;Module["setThrew"](1,0)}}function invoke_ii(index,a1){try{return Module["dynCall_ii"](index,a1)}catch(e){if(typeof e!=="number"&&e!=="longjmp")throw e;Module["setThrew"](1,0)}}function invoke_viii(index,a1,a2,a3){try{Module["dynCall_viii"](index,a1,a2,a3)}catch(e){if(typeof e!=="number"&&e!=="longjmp")throw e;Module["setThrew"](1,0)}}function invoke_v(index){try{Module["dynCall_v"](index)}catch(e){if(typeof e!=="number"&&e!=="longjmp")throw e;Module["setThrew"](1,0)}}function invoke_viiii(index,a1,a2,a3,a4){try{Module["dynCall_viiii"](index,a1,a2,a3,a4)}catch(e){if(typeof e!=="number"&&e!=="longjmp")throw e;Module["setThrew"](1,0)}}function invoke_viiiii(index,a1,a2,a3,a4,a5){try{Module["dynCall_viiiii"](index,a1,a2,a3,a4,a5)}catch(e){if(typeof e!=="number"&&e!=="longjmp")throw e;Module["setThrew"](1,0)}}function invoke_diii(index,a1,a2,a3){try{return Module["dynCall_diii"](index,a1,a2,a3)}catch(e){if(typeof e!=="number"&&e!=="longjmp")throw e;Module["setThrew"](1,0)}}Module.asmGlobalArg={"Math":Math,"Int8Array":Int8Array,"Int16Array":Int16Array,"Int32Array":Int32Array,"Uint8Array":Uint8Array,"Uint16Array":Uint16Array,"Uint32Array":Uint32Array,"Float32Array":Float32Array,"Float64Array":Float64Array,"NaN":NaN,"Infinity":Infinity,"byteLength":byteLength};Module.asmLibraryArg={"abort":abort,"assert":assert,"enlargeMemory":enlargeMemory,"getTotalMemory":getTotalMemory,"abortOnCannotGrowMemory":abortOnCannotGrowMemory,"invoke_iiii":invoke_iiii,"invoke_viiiiii":invoke_viiiiii,"invoke_di":invoke_di,"invoke_vi":invoke_vi,"invoke_ii":invoke_ii,"invoke_viii":invoke_viii,"invoke_v":invoke_v,"invoke_viiii":invoke_viiii,"invoke_viiiii":invoke_viiiii,"invoke_diii":invoke_diii,"___syscall221":___syscall221,"_pthread_key_create":_pthread_key_create,"_abort":_abort,"___gxx_personality_v0":___gxx_personality_v0,"__ZSt18uncaught_exceptionv":__ZSt18uncaught_exceptionv,"___buildEnvironment":___buildEnvironment,"___setErrNo":___setErrNo,"___cxa_begin_catch":___cxa_begin_catch,"_emscripten_memcpy_big":_emscripten_memcpy_big,"___resumeException":___resumeException,"___cxa_find_matching_catch":___cxa_find_matching_catch,"__exit":__exit,"_pthread_getspecific":_pthread_getspecific,"___syscall91":___syscall91,"_pthread_once":_pthread_once,"_getenv":_getenv,"___map_file":___map_file,"___syscall54":___syscall54,"___unlock":___unlock,"_pthread_setspecific":_pthread_setspecific,"___lock":___lock,"___syscall6":___syscall6,"___syscall5":___syscall5,"___cxa_pure_virtual":___cxa_pure_virtual,"___syscall140":___syscall140,"_exit":_exit,"___syscall145":___syscall145,"___syscall146":___syscall146,"DYNAMICTOP_PTR":DYNAMICTOP_PTR,"tempDoublePtr":tempDoublePtr,"ABORT":ABORT,"STACKTOP":STACKTOP,"STACK_MAX":STACK_MAX,"cttz_i8":cttz_i8};// EMSCRIPTEN_START_ASM
var asm=(function(global,env,buffer) {
"almost asm";var a=global.Int8Array;var b=global.Int16Array;var c=global.Int32Array;var d=global.Uint8Array;var e=global.Uint16Array;var f=global.Uint32Array;var g=global.Float32Array;var h=global.Float64Array;var i=new a(buffer);var j=new b(buffer);var k=new c(buffer);var l=new d(buffer);var m=new e(buffer);var n=new f(buffer);var o=new g(buffer);var p=new h(buffer);var q=global.byteLength;var r=env.DYNAMICTOP_PTR|0;var s=env.tempDoublePtr|0;var t=env.ABORT|0;var u=env.STACKTOP|0;var v=env.STACK_MAX|0;var w=env.cttz_i8|0;var x=0;var y=0;var z=0;var A=0;var B=global.NaN,C=global.Infinity;var D=0,E=0,F=0,G=0,H=0.0,I=0,J=0,K=0,L=0.0;var M=0;var N=global.Math.floor;var O=global.Math.abs;var P=global.Math.sqrt;var Q=global.Math.pow;var R=global.Math.cos;var S=global.Math.sin;var T=global.Math.tan;var U=global.Math.acos;var V=global.Math.asin;var W=global.Math.atan;var X=global.Math.atan2;var Y=global.Math.exp;var Z=global.Math.log;var _=global.Math.ceil;var $=global.Math.imul;var aa=global.Math.min;var ba=global.Math.max;var ca=global.Math.clz32;var da=env.abort;var ea=env.assert;var fa=env.enlargeMemory;var ga=env.getTotalMemory;var ha=env.abortOnCannotGrowMemory;var ia=env.invoke_iiii;var ja=env.invoke_viiiiii;var ka=env.invoke_di;var la=env.invoke_vi;var ma=env.invoke_ii;var na=env.invoke_viii;var oa=env.invoke_v;var pa=env.invoke_viiii;var qa=env.invoke_viiiii;var ra=env.invoke_diii;var sa=env.___syscall221;var ta=env._pthread_key_create;var ua=env._abort;var va=env.___gxx_personality_v0;var wa=env.__ZSt18uncaught_exceptionv;var xa=env.___buildEnvironment;var ya=env.___setErrNo;var za=env.___cxa_begin_catch;var Aa=env._emscripten_memcpy_big;var Ba=env.___resumeException;var Ca=env.___cxa_find_matching_catch;var Da=env.__exit;var Ea=env._pthread_getspecific;var Fa=env.___syscall91;var Ga=env._pthread_once;var Ha=env._getenv;var Ia=env.___map_file;var Ja=env.___syscall54;var Ka=env.___unlock;var La=env._pthread_setspecific;var Ma=env.___lock;var Na=env.___syscall6;var Oa=env.___syscall5;var Pa=env.___cxa_pure_virtual;var Qa=env.___syscall140;var Ra=env._exit;var Sa=env.___syscall145;var Ta=env.___syscall146;var Ua=0.0;function Va(newBuffer){if(q(newBuffer)&16777215||q(newBuffer)<=16777215||q(newBuffer)>2147483648)return false;i=new a(newBuffer);j=new b(newBuffer);k=new c(newBuffer);l=new d(newBuffer);m=new e(newBuffer);n=new f(newBuffer);o=new g(newBuffer);p=new h(newBuffer);buffer=newBuffer;return true}
// EMSCRIPTEN_START_FUNCS
function eb(a){a=a|0;var b=0;b=u;u=u+a|0;u=u+15&-16;return b|0}function fb(){return u|0}function gb(a){a=a|0;u=a}function hb(a,b){a=a|0;b=b|0;u=a;v=b}function ib(a,b){a=a|0;b=b|0;if(!x){x=a;y=b}}function jb(a){a=a|0;M=a}function kb(){return M|0}function lb(a){a=a|0;return}function mb(){Ra(1)}function nb(a,b){a=a|0;b=b|0;var c=0,d=0,e=0,f=0,g=0,h=0,j=0,l=0,m=0,n=0,o=0,q=0,r=0,s=0,t=0,v=0,w=0,x=0,y=0,z=0.0;y=u;u=u+272|0;x=y;q=y+8|0;He(q,a)|0;a=Ue(q,1428)|0;k[b>>2]=0;q=b+4|0;k[q>>2]=2;r=b+8|0;k[r>>2]=3;s=b+16|0;t=b+24|0;v=b+72|0;k[s>>2]=0;k[s+4>>2]=0;k[s+8>>2]=0;k[s+12>>2]=0;p[v>>3]=.5;w=b+32|0;p[w>>3]=100.0;f=b+48|0;p[f>>3]=1.0;g=b+40|0;p[g>>3]=.001;h=b+80|0;p[h>>3]=.1;j=b+88|0;k[j>>2]=1;l=b+92|0;k[l>>2]=0;m=b+56|0;k[m>>2]=0;n=b+60|0;k[n>>2]=0;o=b+64|0;k[o>>2]=0;if(!a){u=y;return}d=a;a=0;a:while(1){if((i[d>>0]|0)!=45){c=22;break}c=Ue(0,1428)|0;if(!c){c=5;break}e=i[d+1>>0]|0;do switch(e|0){case 115:{e=Xd(c)|0;k[b>>2]=e;break}case 116:{e=Xd(c)|0;k[q>>2]=e;break}case 100:{e=Xd(c)|0;k[r>>2]=e;break}case 103:{z=+Qd(c);p[s>>3]=z;break}case 114:{z=+Qd(c);p[t>>3]=z;break}case 110:{z=+Qd(c);p[v>>3]=z;break}case 109:{z=+Qd(c);p[w>>3]=z;break}case 99:{z=+Qd(c);p[f>>3]=z;break}case 101:{z=+Qd(c);p[g>>3]=z;break}case 113:{a=20;break}case 112:{z=+Qd(c);p[h>>3]=z;break}case 104:{e=Xd(c)|0;k[j>>2]=e;break}case 98:{e=Xd(c)|0;k[l>>2]=e;break}case 119:{e=(k[m>>2]|0)+1|0;k[m>>2]=e;e=Ye(k[n>>2]|0,e<<2)|0;k[n>>2]=e;e=Ye(k[o>>2]|0,k[m>>2]<<3)|0;k[o>>2]=e;d=Xd(d+2|0)|0;k[(k[n>>2]|0)+((k[m>>2]|0)+-1<<2)>>2]=d;z=+Qd(c);p[e+((k[m>>2]|0)+-1<<3)>>3]=z;break}default:{c=20;break a}}while(0);d=Ue(0,1428)|0;if(!d){c=22;break}}if((c|0)==5)mb();else if((c|0)==20){y=k[105]|0;k[x>>2]=e;Ae(y,1432,x)|0;mb()}else if((c|0)==22){Jc(a);u=y;return}}function ob(a,b,c,d,e){a=a|0;b=b|0;c=c|0;d=+d;e=e|0;var f=0,g=0,h=0;g=k[(k[a+8>>2]|0)+(e<<2)>>2]|0;if((c|0)>0){f=0;do{h=f;f=f+1|0;k[g+(h<<4)>>2]=f;p[g+(h<<4)+8>>3]=+p[b+(h<<3)>>3]}while((f|0)!=(c|0))}k[g+(c<<4)>>2]=-1;p[(k[a+4>>2]|0)+(e<<3)>>3]=d;return}function pb(a){a=a|0;var b=0,c=0;if((Ec(1453,a)|0)<0){a=0;return a|0}c=te(1453,2626)|0;Ke(c,0,2)|0;b=ie(c)|0;Ke(c,0,0)|0;a=Ve(b+1|0)|0;fe(a,b,1,c)|0;Ee(c)|0;i[a+b>>0]=0;return a|0}function qb(a){a=a|0;var b=0;b=te(1453,2240)|0;je(a,b)|0;Ee(b)|0;return Gc(1453)|0}function rb(a,b){a=a|0;b=b|0;var c=0,d=0,e=0,f=0,g=0;e=Ve(12)|0;k[e>>2]=a;f=Ve(a<<3)|0;k[e+4>>2]=f;f=Ve(a<<2)|0;k[e+8>>2]=f;d=b+1|0;c=Ve($(d<<4,a)|0)|0;if((a|0)>0)b=0;else return e|0;do{g=c+(($(b,d)|0)<<4)|0;k[f+(b<<2)>>2]=g;b=b+1|0}while((b|0)<(a|0));return e|0}function sb(a){a=a|0;var b=0,c=0;b=u;u=u+16|0;c=b;k[c>>2]=a;zc(c);u=b;return}function tb(a,b){a=a|0;b=b|0;var c=0,d=0,e=0;e=u;u=u+96|0;d=e;nb(b,d);b=d+16|0;c=+p[b>>3]==0.0;if(((k[d>>2]|0)+-3|0)>>>0<2){if(c)p[b>>3]=.1}else if(c)p[b>>3]=.5;a=Zb(a,d)|0;Ic(d);u=e;return a|0}function ub(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;var e=0,f=0;e=u;u=u+96|0;f=e;nb(b,f);_b(a,f,c,d);Ic(f);u=e;return}function vb(a){a=a|0;var b=0;We(k[a+4>>2]|0);b=a+8|0;if((k[a>>2]|0)>0)We(k[k[b>>2]>>2]|0);We(k[b>>2]|0);We(a);return}function wb(a,b,c){a=a|0;b=b|0;c=c|0;var d=0,e=0,f=0,g=0.0;e=Ve((c<<4)+16|0)|0;if((c|0)>0){d=0;do{f=d;d=d+1|0;k[e+(f<<4)>>2]=d;p[e+(f<<4)+8>>3]=+p[b+(f<<3)>>3]}while((d|0)!=(c|0))}k[e+(c<<4)>>2]=-1;g=+yc(a,e);We(e);return +g}function xb(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;var e=0,f=0,g=0;f=Ve((c<<4)+16|0)|0;if((c|0)>0){e=0;do{g=e;e=e+1|0;k[f+(g<<4)>>2]=e;p[f+(g<<4)+8>>3]=+p[b+(g<<3)>>3]}while((e|0)!=(c|0))}k[f+(c<<4)>>2]=-1;return +(+wc(a,f,d))}function yb(a,b,c,d,e){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;var f=0,g=0,h=0,i=0,j=0,l=0,m=0,n=0,o=0,q=0;o=u;u=u+96|0;m=o;n=Ve(12)|0;k[n>>2]=c;l=Ve(c<<3)|0;k[n+4>>2]=l;j=Ve(c<<2)|0;k[n+8>>2]=j;g=d+1|0;h=Ve($(c<<4,g)|0)|0;i=(c|0)>0;a:do if(i){f=0;do{q=h+(($(f,g)|0)<<4)|0;k[j+(f<<2)>>2]=q;f=f+1|0}while((f|0)!=(c|0));if(i){if((d|0)>0)f=0;else{f=0;while(1){k[(k[j+(f<<2)>>2]|0)+(d<<4)>>2]=-1;p[l+(f<<3)>>3]=+p[b+(f<<3)>>3];f=f+1|0;if((f|0)==(c|0))break a}}do{h=k[j+(f<<2)>>2]|0;i=$(f,d)|0;g=0;do{q=g;g=g+1|0;k[h+(q<<4)>>2]=g;p[h+(q<<4)+8>>3]=+p[a+(q+i<<3)>>3]}while((g|0)!=(d|0));k[h+(d<<4)>>2]=-1;p[l+(f<<3)>>3]=+p[b+(f<<3)>>3];f=f+1|0}while((f|0)!=(c|0))}}while(0);nb(e,m);f=m+16|0;g=+p[f>>3]==0.0;if(((k[m>>2]|0)+-3|0)>>>0<2){if(!g){q=Zb(n,m)|0;Ic(m);u=o;return q|0}p[f>>3]=.1;q=Zb(n,m)|0;Ic(m);u=o;return q|0}else{if(!g){q=Zb(n,m)|0;Ic(m);u=o;return q|0}p[f>>3]=.5;q=Zb(n,m)|0;Ic(m);u=o;return q|0}return 0}function zb(a){a=a|0;return +(+p[a+80>>3])}function Ab(a,b,c){a=a|0;b=b|0;c=c|0;var d=0,e=0,f=0,g=0.0;d=k[a+12>>2]|0;f=d+(b<<2)|0;d=d+(c<<2)|0;e=k[f>>2]|0;k[f>>2]=k[d>>2];k[d>>2]=e;d=k[a+16>>2]|0;b=d+(b<<3)|0;a=d+(c<<3)|0;if(!d)return;g=+p[b>>3];p[b>>3]=+p[a>>3];p[a>>3]=g;return}function Bb(a){a=a|0;var b=0;k[a>>2]=208;b=k[a+12>>2]|0;if(b|0)cf(b);a=k[a+16>>2]|0;if(!a)return;cf(a);return}function Cb(a){a=a|0;var b=0;k[a>>2]=208;b=k[a+12>>2]|0;if(b|0)cf(b);b=k[a+16>>2]|0;if(!b){bf(a);return}cf(b);bf(a);return}function Db(a){a=a|0;return}function Eb(a){a=a|0;bf(a);return}function Fb(a,b,c){a=a|0;b=b|0;c=c|0;var d=0,e=0.0,f=0,g=0,h=0,j=0.0,l=0.0,m=0,n=0,q=0,r=0,s=0.0,t=0,u=0,v=0,w=0.0;q=a+4|0;r=k[q>>2]|0;if((r|0)<=0){c=1;return c|0}m=k[a+8>>2]|0;n=k[a+16>>2]|0;h=a+12|0;d=-1;g=0;e=-C;do{f=i[n+g>>0]|0;if((i[m+g>>0]|0)==1){if(f<<24>>24!=1?(j=-+p[(k[h>>2]|0)+(g<<3)>>3],e<=j):0){e=j;d=g}}else if(f<<24>>24!=0?(l=+p[(k[h>>2]|0)+(g<<3)>>3],l>=e):0){e=l;d=g}g=g+1|0}while((g|0)<(r|0));if((d|0)==-1){d=-1;v=0}else{v=k[a+24>>2]|0;v=Wa[k[k[v>>2]>>2]&15](v,d,r)|0;r=k[q>>2]|0}if((r|0)<=0){c=1;return c|0}m=k[a+8>>2]|0;n=k[a+16>>2]|0;q=a+12|0;t=a+28|0;u=m+d|0;h=0;f=-1;l=C;j=-C;do{g=i[n+h>>0]|0;if((i[m+h>>0]|0)==1){if(g<<24>>24){w=+p[(k[q>>2]|0)+(h<<3)>>3];s=e+w;j=w>=j?w:j;if(s>0.0){g=k[t>>2]|0;w=+p[g+(d<<3)>>3]+ +p[g+(h<<3)>>3]-+(i[u>>0]|0)*2.0*+o[v+(h<<2)>>2];w=-(s*s)/(w>0.0?w:1.0e-12);g=!(w<=l);f=g?f:h;l=g?l:w}}}else if(g<<24>>24!=1){w=+p[(k[q>>2]|0)+(h<<3)>>3];s=e-w;w=-w;j=j<=w?w:j;if(s>0.0){g=k[t>>2]|0;w=+p[g+(d<<3)>>3]+ +p[g+(h<<3)>>3]+ +(i[u>>0]|0)*2.0*+o[v+(h<<2)>>2];w=-(s*s)/(w>0.0?w:1.0e-12);g=!(w<=l);f=g?f:h;l=g?l:w}}h=h+1|0}while((h|0)<(r|0));if((f|0)==-1?1:e+j<+p[a+32>>3]){c=1;return c|0}k[b>>2]=d;k[c>>2]=f;c=0;return c|0}function Gb(a){a=a|0;var b=0.0,c=0.0,d=0.0,e=0.0,f=0,g=0,h=0,j=0,l=0,m=0;j=k[a+4>>2]|0;if((j|0)>0){l=k[a+8>>2]|0;m=k[a+12>>2]|0;h=k[a+16>>2]|0;g=0;d=0.0;c=-C;b=C;f=0;while(1){a=i[l+g>>0]|0;e=+(a<<24>>24)*+p[m+(g<<3)>>3];a:do switch(i[h+g>>0]|0){case 1:if(a<<24>>24==-1){b=b<e?b:e;a=f;break a}else{c=c>e?c:e;a=f;break a}case 0:if(a<<24>>24==1){b=b<e?b:e;a=f;break a}else{c=c>e?c:e;a=f;break a}default:{d=d+e;a=f+1|0}}while(0);g=g+1|0;if((g|0)>=(j|0))break;else f=a}if((a|0)>0){e=d/+(a|0);return +e}}else{c=-C;b=C}e=(b+c)*.5;return +e}function Hb(a){a=a|0;var b=0,c=0.0,d=0.0,e=0.0,f=0,g=0,h=0,j=0,l=0,m=0,n=0,o=0,q=0,r=0,s=0,t=0,v=0,w=0,x=0;x=u;u=u+16|0;n=x;v=a+4|0;m=k[v>>2]|0;if((m|0)>0){h=k[a+8>>2]|0;j=k[a+16>>2]|0;l=a+12|0;d=-C;g=0;c=-C;do{f=i[j+g>>0]|0;b=f<<24>>24==1;do if((i[h+g>>0]|0)==1){if(!b){e=-+p[(k[l>>2]|0)+(g<<3)>>3];d=d<=e?e:d;if(!(f<<24>>24))break}e=+p[(k[l>>2]|0)+(g<<3)>>3];if(e>=c)c=e}else{if(!b){e=-+p[(k[l>>2]|0)+(g<<3)>>3];c=c<=e?e:c;if(!(f<<24>>24))break}e=+p[(k[l>>2]|0)+(g<<3)>>3];if(e>=d)d=e}while(0);g=g+1|0}while((g|0)<(m|0))}else{c=-C;d=-C}b=a+72|0;if((i[b>>0]|0)==0?d+c<=+p[a+32>>3]*10.0:0){i[b>>0]=1;Ib(a);k[v>>2]=k[a+68>>2];Jb(1483,n);b=k[v>>2]|0}else b=m;if((b|0)<=0){u=x;return}m=a+16|0;n=a+8|0;o=a+12|0;q=a+24|0;r=a+20|0;s=a+56|0;t=a+60|0;l=a+64|0;j=0;do{h=k[m>>2]|0;a:do switch(i[h+j>>0]|0){case 1:{f=k[n>>2]|0;g=k[o>>2]|0;e=-+p[g+(j<<3)>>3];if((i[f+j>>0]|0)==1)if(d<e){w=25;break a}else break a;else if(c<e){w=25;break a}else break a}case 0:{f=k[n>>2]|0;g=k[o>>2]|0;e=+p[g+(j<<3)>>3];if((i[f+j>>0]|0)==1)if(e>c){w=25;break a}else break a;else if(e>d){w=25;break a}else break a}default:{}}while(0);b:do if((w|0)==25){w=0;b=b+-1|0;k[v>>2]=b;if((b|0)>(j|0)){c:while(1){d:do switch(i[h+b>>0]|0){case 1:{e=-+p[g+(b<<3)>>3];if((i[f+b>>0]|0)==1)if(d<e)break d;else break c;else if(c<e)break d;else break c}case 0:{e=+p[g+(b<<3)>>3];if((i[f+b>>0]|0)==1)if(e>c)break d;else break c;else if(e>d)break d;else break c}default:break c}while(0);b=b+-1|0;k[v>>2]=b;if((b|0)<=(j|0))break b}h=k[q>>2]|0;$a[k[(k[h>>2]|0)+8>>2]&7](h,j,b);h=k[n>>2]|0;g=h+j|0;h=h+b|0;a=i[g>>0]|0;i[g>>0]=i[h>>0]|0;i[h>>0]=a;h=k[o>>2]|0;a=h+(j<<3)|0;h=h+(b<<3)|0;e=+p[a>>3];p[a>>3]=+p[h>>3];p[h>>3]=e;h=k[m>>2]|0;a=h+j|0;h=h+b|0;g=i[a>>0]|0;i[a>>0]=i[h>>0]|0;i[h>>0]=g;h=k[r>>2]|0;g=h+(j<<3)|0;h=h+(b<<3)|0;e=+p[g>>3];p[g>>3]=+p[h>>3];p[h>>3]=e;h=k[s>>2]|0;g=h+(j<<3)|0;h=h+(b<<3)|0;e=+p[g>>3];p[g>>3]=+p[h>>3];p[h>>3]=e;h=k[t>>2]|0;g=h+(j<<2)|0;h=h+(b<<2)|0;a=k[g>>2]|0;k[g>>2]=k[h>>2];k[h>>2]=a;h=k[l>>2]|0;a=h+(j<<3)|0;b=h+(b<<3)|0;e=+p[a>>3];p[a>>3]=+p[b>>3];p[b>>3]=e;b=k[v>>2]|0}}while(0);j=j+1|0}while((j|0)<(b|0));u=x;return}function Ib(a){a=a|0;var b=0,c=0,d=0,e=0,f=0,g=0,h=0,j=0,l=0,m=0.0,n=0,q=0,r=0,s=0;s=u;u=u+16|0;g=s;q=a+4|0;h=k[q>>2]|0;r=a+68|0;f=k[r>>2]|0;if((h|0)==(f|0)){u=s;return}if((h|0)<(f|0)){e=k[a+64>>2]|0;c=k[a+56>>2]|0;d=k[a+12>>2]|0;b=h;do{p[d+(b<<3)>>3]=+p[e+(b<<3)>>3]+ +p[c+(b<<3)>>3];b=b+1|0}while((b|0)!=(f|0))}if((h|0)>0){d=k[a+16>>2]|0;b=0;c=0;do{b=((i[d+c>>0]|0)==2&1)+b|0;c=c+1|0}while((c|0)<(h|0))}else b=0;if((b<<1|0)<(h|0)){Jb(1485,g);d=k[r>>2]|0;c=k[q>>2]|0}else{d=f;c=h}if(($(d,b)|0)<=($(c<<1,d-c|0)|0)){if((c|0)<=0){u=s;return}j=a+16|0;l=a+24|0;n=a+20|0;h=a+12|0;g=0;b=d;do{if((i[(k[j>>2]|0)+g>>0]|0)==2){e=k[l>>2]|0;e=Wa[k[k[e>>2]>>2]&15](e,g,b)|0;m=+p[(k[n>>2]|0)+(g<<3)>>3];c=k[q>>2]|0;b=k[r>>2]|0;if((c|0)<(b|0)){f=k[h>>2]|0;d=c;do{a=f+(d<<3)|0;p[a>>3]=+p[a>>3]+m*+o[e+(d<<2)>>2];d=d+1|0}while((d|0)<(b|0))}}g=g+1|0}while((g|0)<(c|0));u=s;return}if((d|0)<=(c|0)){u=s;return}h=a+24|0;j=a+16|0;l=a+20|0;g=a+12|0;f=c;d=c;do{e=k[h>>2]|0;e=Wa[k[k[e>>2]>>2]&15](e,f,d)|0;d=k[q>>2]|0;if((d|0)>0){c=k[j>>2]|0;b=0;do{if((i[c+b>>0]|0)==2){a=(k[g>>2]|0)+(f<<3)|0;p[a>>3]=+p[a>>3]+ +p[(k[l>>2]|0)+(b<<3)>>3]*+o[e+(b<<2)>>2]}b=b+1|0}while((b|0)<(d|0))}f=f+1|0}while((f|0)<(k[r>>2]|0));u=s;return}function Jb(a,b){a=a|0;b=b|0;var c=0,d=0,e=0;c=u;u=u+1040|0;d=c+16|0;e=c;k[e>>2]=b;gd(d,a,e)|0;Za[k[64]&31](d);u=c;return}function Kb(a){a=a|0;var b=0;b=k[198]|0;je(a,b)|0;Fe(b)|0;return}function Lb(a){a=a|0;bf(a);return}function Mb(a,b,c){a=a|0;b=b|0;c=c|0;var d=0,e=0,f=0.0,g=0.0,h=0,j=0.0,l=0.0,m=0,n=0,q=0,r=0,s=0,t=0.0,u=0,v=0.0,w=0,x=0,y=0,z=0.0;u=a+4|0;s=k[u>>2]|0;if((s|0)>0){q=k[a+8>>2]|0;r=k[a+16>>2]|0;n=a+12|0;l=-C;h=-1;g=-C;m=0;d=-1;while(1){e=i[r+m>>0]|0;if((i[q+m>>0]|0)==1)if(e<<24>>24!=1?(f=-+p[(k[n>>2]|0)+(m<<3)>>3],l<=f):0){l=f;e=m}else e=h;else if(e<<24>>24!=0?(j=+p[(k[n>>2]|0)+(m<<3)>>3],j>=g):0){e=h;g=j;d=m}else e=h;m=m+1|0;if((m|0)>=(s|0))break;else h=e}if((e|0)==-1){h=-1;y=0}else{y=k[a+24>>2]|0;h=e;y=Wa[k[k[y>>2]>>2]&15](y,e,s)|0}if((d|0)==-1)x=0;else{x=k[a+24>>2]|0;x=Wa[k[k[x>>2]>>2]&15](x,d,k[u>>2]|0)|0}q=k[u>>2]|0;if((q|0)>0){r=k[a+8>>2]|0;s=k[a+16>>2]|0;u=a+12|0;w=a+28|0;j=-C;n=0;f=-C;v=C;e=-1;while(1){m=i[s+n>>0]|0;if((i[r+n>>0]|0)==1)if(m<<24>>24){z=+p[(k[u>>2]|0)+(n<<3)>>3];t=l+z;j=z>=j?z:j;if(t>0.0){m=k[w>>2]|0;z=+p[m+(h<<3)>>3]+ +p[m+(n<<3)>>3]-+o[y+(n<<2)>>2]*2.0;t=-(t*t)/(z>0.0?z:1.0e-12);m=!(t<=v);t=m?v:t;e=m?e:n}else t=v}else t=v;else if(m<<24>>24!=1){z=+p[(k[u>>2]|0)+(n<<3)>>3];t=g-z;z=-z;f=f<=z?z:f;if(t>0.0){m=k[w>>2]|0;z=+p[m+(d<<3)>>3]+ +p[m+(n<<3)>>3]-+o[x+(n<<2)>>2]*2.0;t=-(t*t)/(z>0.0?z:1.0e-12);m=!(t<=v);t=m?v:t;e=m?e:n}else t=v}else t=v;n=n+1|0;if((n|0)>=(q|0))break;else v=t}}else{j=-C;f=-C;e=-1}}else{l=-C;j=-C;h=-1;g=-C;f=-C;e=-1;d=-1}v=l+j;z=g+f;if((e|0)==-1?1:(v>z?v:z)<+p[a+32>>3]){c=1;return c|0}k[b>>2]=(i[(k[a+8>>2]|0)+e>>0]|0)==1?h:d;k[c>>2]=e;c=0;return c|0}function Nb(a){a=a|0;var b=0,c=0.0,d=0.0,e=0.0,f=0.0,g=0.0,h=0.0,j=0,l=0,m=0.0,n=0,o=0,q=0,r=0,s=0,t=0,u=0;q=k[a+4>>2]|0;if((q|0)>0){r=k[a+8>>2]|0;s=k[a+16>>2]|0;t=a+12|0;o=0;f=0.0;m=0.0;g=-C;e=-C;c=C;d=C;b=0;n=0;while(1){l=i[s+o>>0]|0;j=l<<24>>24==1;do if((i[r+o>>0]|0)==1){if(j){h=+p[(k[t>>2]|0)+(o<<3)>>3];e=e>h?e:h;j=n;break}h=+p[(k[t>>2]|0)+(o<<3)>>3];if(!(l<<24>>24)){d=d<h?d:h;j=n;break}else{m=m+h;j=n+1|0;break}}else{if(j){h=+p[(k[t>>2]|0)+(o<<3)>>3];g=g>h?g:h;j=n;break}h=+p[(k[t>>2]|0)+(o<<3)>>3];if(!(l<<24>>24)){c=c<h?c:h;j=n;break}else{f=f+h;b=b+1|0;j=n;break}}while(0);o=o+1|0;if((o|0)>=(q|0))break;else n=j}if((j|0)>0){h=m/+(j|0);e=f;d=g}else u=17}else{f=0.0;g=-C;e=-C;c=C;d=C;b=0;u=17}if((u|0)==17){h=(d+e)*.5;e=f;d=g}if((b|0)>0){m=e/+(b|0);g=h+m;g=g*.5;u=a+76|0;u=k[u>>2]|0;u=u+32|0;p[u>>3]=g;m=h-m;m=m*.5;return +m}else{m=(c+d)*.5;g=h+m;g=g*.5;u=a+76|0;u=k[u>>2]|0;u=u+32|0;p[u>>3]=g;m=h-m;m=m*.5;return +m}return 0.0}function Ob(a){a=a|0;var b=0,c=0.0,d=0.0,e=0.0,f=0.0,g=0,h=0.0,j=0,l=0,m=0,n=0,o=0,q=0,r=0,s=0,t=0,u=0,v=0,w=0,x=0,y=0.0;w=a+4|0;n=k[w>>2]|0;if((n|0)>0){j=k[a+16>>2]|0;l=a+8|0;m=a+12|0;c=-C;f=-C;h=-C;e=-C;g=0;while(1){b=i[j+g>>0]|0;if(b<<24>>24!=1){d=-+p[(k[m>>2]|0)+(g<<3)>>3];if((i[(k[l>>2]|0)+g>>0]|0)==1){if(!(e<d))d=e}else if(c<d){c=d;d=e}else d=e;if(!(b<<24>>24))e=h;else x=10}else{d=e;x=10}do if((x|0)==10){x=0;e=+p[(k[m>>2]|0)+(g<<3)>>3];if((i[(k[l>>2]|0)+g>>0]|0)==1){if(!(e>h)){e=h;break}break}else{if(!(e>f)){e=h;break}f=e;e=h;break}}while(0);g=g+1|0;if((g|0)>=(n|0))break;else{h=e;e=d}}}else{c=-C;f=-C;e=-C;d=-C}b=a+72|0;if((i[b>>0]|0)==0?(y=d+e,h=f+c,(y>h?y:h)<=+p[a+32>>3]*10.0):0){i[b>>0]=1;Ib(a);b=k[a+68>>2]|0;k[w>>2]=b}else b=n;if((b|0)<=0)return;o=a+16|0;q=a+8|0;r=a+12|0;s=a+24|0;t=a+20|0;u=a+56|0;v=a+60|0;n=a+64|0;m=0;do{l=k[o>>2]|0;a:do switch(i[l+m>>0]|0){case 1:{g=k[q>>2]|0;j=k[r>>2]|0;h=-+p[j+(m<<3)>>3];if((i[g+m>>0]|0)==1)if(d<h){x=28;break a}else break a;else if(c<h){x=28;break a}else break a}case 0:{g=k[q>>2]|0;j=k[r>>2]|0;h=+p[j+(m<<3)>>3];if((i[g+m>>0]|0)==1)if(h>e){x=28;break a}else break a;else if(h>f){x=28;break a}else break a}default:{}}while(0);b:do if((x|0)==28){x=0;b=b+-1|0;k[w>>2]=b;if((b|0)>(m|0)){c:while(1){d:do switch(i[l+b>>0]|0){case 1:{h=-+p[j+(b<<3)>>3];if((i[g+b>>0]|0)==1)if(d<h)break d;else break c;else if(c<h)break d;else break c}case 0:{h=+p[j+(b<<3)>>3];if((i[g+b>>0]|0)==1)if(h>e)break d;else break c;else if(h>f)break d;else break c}default:break c}while(0);b=b+-1|0;k[w>>2]=b;if((b|0)<=(m|0))break b}l=k[s>>2]|0;$a[k[(k[l>>2]|0)+8>>2]&7](l,m,b);l=k[q>>2]|0;j=l+m|0;l=l+b|0;a=i[j>>0]|0;i[j>>0]=i[l>>0]|0;i[l>>0]=a;l=k[r>>2]|0;a=l+(m<<3)|0;l=l+(b<<3)|0;y=+p[a>>3];p[a>>3]=+p[l>>3];p[l>>3]=y;l=k[o>>2]|0;a=l+m|0;l=l+b|0;j=i[a>>0]|0;i[a>>0]=i[l>>0]|0;i[l>>0]=j;l=k[t>>2]|0;j=l+(m<<3)|0;l=l+(b<<3)|0;y=+p[j>>3];p[j>>3]=+p[l>>3];p[l>>3]=y;l=k[u>>2]|0;j=l+(m<<3)|0;l=l+(b<<3)|0;y=+p[j>>3];p[j>>3]=+p[l>>3];p[l>>3]=y;l=k[v>>2]|0;j=l+(m<<2)|0;l=l+(b<<2)|0;a=k[j>>2]|0;k[j>>2]=k[l>>2];k[l>>2]=a;l=k[n>>2]|0;a=l+(m<<3)|0;b=l+(b<<3)|0;y=+p[a>>3];p[a>>3]=+p[b>>3];p[b>>3]=y;b=k[w>>2]|0}}while(0);m=m+1|0}while((m|0)<(b|0));return}function Pb(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;var e=0,f=0,g=0,h=0,i=0,j=0,l=0,m=0,n=0;h=k[a+8>>2]|0;i=h+(b<<4)|0;j=h+(b<<4)+12|0;e=k[j>>2]|0;if(e|0){g=h+(b<<4)+4|0;f=k[i>>2]|0;k[f+4>>2]=k[g>>2];k[k[g>>2]>>2]=f}e=d-e|0;if((e|0)<=0){j=d;d=k[h+(b<<4)+8>>2]|0;a=a+12|0;h=h+(b<<4)+4|0;k[h>>2]=a;b=k[a>>2]|0;k[i>>2]=b;b=b+4|0;k[b>>2]=i;h=k[h>>2]|0;k[h>>2]=i;k[c>>2]=d;return j|0}f=a+4|0;if((k[f>>2]|0)<(e|0)){g=a+16|0;do{m=k[g>>2]|0;n=m+4|0;l=k[m>>2]|0;k[l+4>>2]=k[n>>2];k[k[n>>2]>>2]=l;n=m+8|0;We(k[n>>2]|0);m=m+12|0;l=(k[f>>2]|0)+(k[m>>2]|0)|0;k[f>>2]=l;k[n>>2]=0;k[m>>2]=0}while((l|0)<(e|0))}n=h+(b<<4)+8|0;m=Ye(k[n>>2]|0,d<<2)|0;k[n>>2]=m;k[f>>2]=(k[f>>2]|0)-e;n=k[j>>2]|0;k[j>>2]=d;j=a+12|0;l=h+(b<<4)+4|0;k[l>>2]=j;j=k[j>>2]|0;k[i>>2]=j;j=j+4|0;k[j>>2]=i;l=k[l>>2]|0;k[l>>2]=i;k[c>>2]=m;return n|0}function Qb(a,b,c){a=a|0;b=b|0;c=c|0;var d=0,e=0,f=0,g=0,h=0;if((b|0)==(c|0))return;d=a+8|0;e=k[d>>2]|0;if(k[e+(b<<4)+12>>2]|0){h=e+(b<<4)+4|0;g=k[e+(b<<4)>>2]|0;k[g+4>>2]=k[h>>2];k[k[h>>2]>>2]=g}if(k[e+(c<<4)+12>>2]|0){h=e+(c<<4)+4|0;g=k[e+(c<<4)>>2]|0;k[g+4>>2]=k[h>>2];k[k[h>>2]>>2]=g}f=e+(b<<4)+8|0;h=e+(c<<4)+8|0;g=k[f>>2]|0;k[f>>2]=k[h>>2];k[h>>2]=g;d=k[d>>2]|0;h=d+(b<<4)+12|0;g=d+(c<<4)+12|0;e=k[h>>2]|0;k[h>>2]=k[g>>2];k[g>>2]=e;if(k[h>>2]|0){g=d+(b<<4)|0;f=a+12|0;h=d+(b<<4)+4|0;k[h>>2]=f;f=k[f>>2]|0;k[g>>2]=f;k[f+4>>2]=g;k[k[h>>2]>>2]=g}if(!e)h=a+12|0;else{f=d+(c<<4)|0;h=a+12|0;g=d+(c<<4)+4|0;k[g>>2]=h;e=k[h>>2]|0;k[f>>2]=e;k[e+4>>2]=f;k[k[g>>2]>>2]=f}f=(b|0)>(c|0);g=f?c:b;f=f?b:c;d=k[a+16>>2]|0;if((d|0)==(h|0))return;c=a+4|0;do{e=d+12|0;b=k[e>>2]|0;do if((b|0)>(g|0))if((b|0)>(f|0)){a=k[d+8>>2]|0;e=a+(g<<2)|0;a=a+(f<<2)|0;b=k[e>>2]|0;k[e>>2]=k[a>>2];k[a>>2]=b;break}else{a=d+4|0;b=k[d>>2]|0;k[b+4>>2]=k[a>>2];k[k[a>>2]>>2]=b;a=d+8|0;We(k[a>>2]|0);k[c>>2]=(k[c>>2]|0)+(k[e>>2]|0);k[a>>2]=0;k[e>>2]=0;break}while(0);d=k[d+4>>2]|0}while((d|0)!=(h|0));return}function Rb(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;var e=0.0,f=0,g=0,h=0,i=0,j=0;k[a>>2]=208;h=k[d+4>>2]|0;k[a+20>>2]=h;k[a+24>>2]=k[d+8>>2];p[a+32>>3]=+p[d+16>>3];p[a+40>>3]=+p[d+24>>3];switch(h|0){case 0:{d=2;f=0;g=6;break}case 1:{d=1;f=0;g=6;break}case 2:{d=3;f=0;g=6;break}case 3:{d=4;f=0;g=6;break}case 4:{d=5;f=0;g=6;break}default:{}}if((g|0)==6){k[a+4>>2]=d;k[a+8>>2]=f}j=af(b>>>0>1073741823?-1:b<<2)|0;k[a+12>>2]=j;Nf(j|0,c|0,b<<2|0)|0;if((h|0)!=2){k[a+16>>2]=0;return}i=af(b>>>0>536870911?-1:b<<3)|0;k[a+16>>2]=i;if((b|0)>0)h=0;else return;do{d=k[j+(h<<2)>>2]|0;f=k[d>>2]|0;a:do if((f|0)==-1)e=0.0;else{e=0.0;c=d;g=d;while(1){d=c;b:while(1){c=k[d>>2]|0;if((c|0)==-1)break a;while(1){if((f|0)==(c|0))break b;if((f|0)<=(c|0))break;d=d+16|0;c=k[d>>2]|0;if((c|0)==-1)break a}g=g+16|0;f=k[g>>2]|0;if((f|0)==-1)break a}e=e+ +p[g+8>>3]*+p[d+8>>3];g=g+16|0;f=k[g>>2]|0;if((f|0)==-1)break;else c=d+16|0}}while(0);p[i+(h<<3)>>3]=e;h=h+1|0}while((h|0)!=(b|0));return}function Sb(a,b,c){a=a|0;b=b|0;c=c|0;a=k[a+12>>2]|0;return +(+p[(k[a+(b<<2)>>2]|0)+(~~+p[(k[a+(c<<2)>>2]|0)+8>>3]<<4)+8>>3])}function Tb(a,b,c){a=a|0;b=b|0;c=c|0;var d=0.0,e=0,f=0,g=0,h=0.0;h=+p[a+32>>3];f=k[a+12>>2]|0;e=k[f+(b<<2)>>2]|0;g=k[e>>2]|0;a:do if((g|0)==-1)d=0.0;else{d=0.0;b=k[f+(c<<2)>>2]|0;while(1){b:while(1){c=k[b>>2]|0;if((c|0)==-1)break a;while(1){if((g|0)==(c|0))break b;if((g|0)<=(c|0))break;b=b+16|0;c=k[b>>2]|0;if((c|0)==-1)break a}e=e+16|0;g=k[e>>2]|0;if((g|0)==-1)break a}d=d+ +p[e+8>>3]*+p[b+8>>3];e=e+16|0;g=k[e>>2]|0;if((g|0)==-1)break;else b=b+16|0}}while(0);return +(+dd(h*d+ +p[a+40>>3]))}function Ub(a,b,c){a=a|0;b=b|0;c=c|0;var d=0.0,e=0,f=0.0,g=0.0;g=+p[a+32>>3];e=k[a+16>>2]|0;f=+p[e+(b<<3)>>3]+ +p[e+(c<<3)>>3];a=k[a+12>>2]|0;b=k[a+(b<<2)>>2]|0;e=k[b>>2]|0;a:do if((e|0)==-1)d=0.0;else{d=0.0;a=k[a+(c<<2)>>2]|0;while(1){c=e;b:while(1){e=k[a>>2]|0;if((e|0)==-1)break a;while(1){if((c|0)==(e|0))break b;if((c|0)<=(e|0))break;a=a+16|0;e=k[a>>2]|0;if((e|0)==-1)break a}b=b+16|0;c=k[b>>2]|0;if((c|0)==-1)break a}d=d+ +p[b+8>>3]*+p[a+8>>3];b=b+16|0;e=k[b>>2]|0;if((e|0)==-1)break;else a=a+16|0}}while(0);return +(+Y(+-(g*(f-d*2.0))))}function Vb(a,b,c){a=a|0;b=b|0;c=c|0;var d=0.0,e=0;a=k[a+12>>2]|0;b=k[a+(b<<2)>>2]|0;e=k[b>>2]|0;if((e|0)==-1){d=0.0;return +d}d=0.0;a=k[a+(c<<2)>>2]|0;a:while(1){b:while(1){c=k[a>>2]|0;if((c|0)==-1){a=10;break a}while(1){if((e|0)==(c|0))break b;if((e|0)<=(c|0))break;a=a+16|0;c=k[a>>2]|0;if((c|0)==-1){a=10;break a}}b=b+16|0;e=k[b>>2]|0;if((e|0)==-1){a=10;break a}}d=d+ +p[b+8>>3]*+p[a+8>>3];b=b+16|0;e=k[b>>2]|0;if((e|0)==-1){a=10;break}else a=a+16|0}if((a|0)==10)return +d;return +(0.0)}function Wb(a,b,c){a=a|0;b=b|0;c=c|0;var d=0.0,e=0.0,f=0,g=0,h=0,i=0.0;i=+p[a+32>>3];g=k[a+12>>2]|0;f=k[g+(b<<2)>>2]|0;h=k[f>>2]|0;a:do if((h|0)==-1)e=0.0;else{e=0.0;b=k[g+(c<<2)>>2]|0;while(1){b:while(1){c=k[b>>2]|0;if((c|0)==-1)break a;while(1){if((h|0)==(c|0))break b;if((h|0)<=(c|0))break;b=b+16|0;c=k[b>>2]|0;if((c|0)==-1)break a}f=f+16|0;h=k[f>>2]|0;if((h|0)==-1)break a}e=e+ +p[f+8>>3]*+p[b+8>>3];f=f+16|0;h=k[f>>2]|0;if((h|0)==-1)break;else b=b+16|0}}while(0);b=k[a+24>>2]|0;if((b|0)<=0){i=1.0;return +i}d=1.0;e=i*e+ +p[a+40>>3];while(1){d=b&1|0?d*e:d;b=b>>>1;if(!b)break;else e=e*e}return +d}function Xb(a,b,c){a=a|0;b=b|0;c=c|0;var d=0.0,e=0.0,f=0,g=0,h=0.0;switch(k[c+4>>2]|0){case 0:{f=k[a>>2]|0;if((f|0)==-1){h=0.0;return +h}else d=0.0;a:while(1){g=f;b:while(1){f=k[b>>2]|0;if((f|0)==-1){f=43;break a}while(1){if((g|0)==(f|0))break b;if((g|0)<=(f|0))break;b=b+16|0;f=k[b>>2]|0;if((f|0)==-1){f=43;break a}}a=a+16|0;g=k[a>>2]|0;if((g|0)==-1){f=43;break a}}d=d+ +p[a+8>>3]*+p[b+8>>3];a=a+16|0;f=k[a>>2]|0;if((f|0)==-1){f=43;break}else b=b+16|0}if((f|0)==43)return +d;break}case 1:{h=+p[c+16>>3];f=k[a>>2]|0;c:do if((f|0)==-1)e=0.0;else{e=0.0;while(1){d:while(1){g=k[b>>2]|0;if((g|0)==-1)break c;while(1){if((f|0)==(g|0))break d;if((f|0)<=(g|0))break;b=b+16|0;g=k[b>>2]|0;if((g|0)==-1)break c}a=a+16|0;f=k[a>>2]|0;if((f|0)==-1)break c}e=e+ +p[a+8>>3]*+p[b+8>>3];a=a+16|0;f=k[a>>2]|0;if((f|0)==-1)break;else b=b+16|0}}while(0);a=k[c+8>>2]|0;if((a|0)<=0){h=1.0;return +h}d=1.0;e=h*e+ +p[c+24>>3];while(1){d=a&1|0?d*e:d;a=a>>>1;if(!a)break;else e=e*e}return +d}case 2:{f=k[a>>2]|0;e:do if((f|0)==-1){a=b;d=0.0}else{d=0.0;while(1){g=k[b>>2]|0;if((g|0)==-1)break;while(1){if((f|0)==(g|0)){f=23;break}if((f|0)>(g|0)){f=27;break}h=+p[a+8>>3];d=d+h*h;a=a+16|0;f=k[a>>2]|0;if((f|0)==-1){a=b;break e}}if((f|0)==23){e=+p[a+8>>3]-+p[b+8>>3];a=a+16|0;e=e*e}else if((f|0)==27){e=+p[b+8>>3];e=e*e}d=d+e;b=b+16|0;f=k[a>>2]|0;if((f|0)==-1){a=b;break e}}do{h=+p[a+8>>3];d=d+h*h;a=a+16|0}while((k[a>>2]|0)!=-1);a=b}while(0);if((k[a>>2]|0)!=-1)do{h=+p[a+8>>3];d=d+h*h;a=a+16|0}while((k[a>>2]|0)!=-1);h=+Y(+-(d*+p[c+16>>3]));return +h}case 3:{e=+p[c+16>>3];f=k[a>>2]|0;f:do if((f|0)==-1)d=0.0;else{d=0.0;while(1){g:while(1){g=k[b>>2]|0;if((g|0)==-1)break f;while(1){if((f|0)==(g|0))break g;if((f|0)<=(g|0))break;b=b+16|0;g=k[b>>2]|0;if((g|0)==-1)break f}a=a+16|0;f=k[a>>2]|0;if((f|0)==-1)break f}d=d+ +p[a+8>>3]*+p[b+8>>3];a=a+16|0;f=k[a>>2]|0;if((f|0)==-1)break;else b=b+16|0}}while(0);h=+dd(e*d+ +p[c+24>>3]);return +h}case 4:{h=+p[a+(~~+p[b+8>>3]<<4)+8>>3];return +h}default:{h=0.0;return +h}}return +(0.0)}function Yb(a,b,c,d,e,f,g,h,j,l,m){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;f=f|0;g=+g;h=+h;j=+j;l=l|0;m=m|0;var n=0,q=0,r=0,s=0,t=0.0,v=0.0,w=0.0,x=0,y=0,z=0,A=0,B=0.0,C=0.0,D=0,E=0,F=0,G=0,H=0,I=0,J=0,K=0,L=0,M=0,N=0,O=0,P=0,Q=0,R=0,S=0,T=0,U=0,V=0,W=0,X=0,Y=0,Z=0;Y=u;u=u+48|0;X=Y+24|0;O=Y+16|0;N=Y+8|0;M=Y;J=Y+32|0;K=Y+28|0;k[a+68>>2]=b;k[a+24>>2]=c;T=_a[k[(k[c>>2]|0)+4>>2]&7](c)|0;L=a+28|0;k[L>>2]=T;T=a+56|0;r=b>>>0>536870911?-1:b<<3;U=af(r)|0;k[T>>2]=U;H=b<<3;Nf(U|0,d|0,H|0)|0;U=a+8|0;d=(b|0)>-1?b:-1;n=af(d)|0;k[U>>2]=n;Nf(n|0,e|0,b|0)|0;V=a+20|0;e=af(r)|0;k[V>>2]=e;Nf(e|0,f|0,H|0)|0;H=a+40|0;p[H>>3]=g;I=a+48|0;p[I>>3]=h;p[a+32>>3]=j;i[a+72>>0]=0;d=af(d)|0;W=a+16|0;k[W>>2]=d;P=(b|0)>0;if(P?(C=+p[e>>3],i[d>>0]=!(C>=+p[((i[n>>0]|0)>0?H:I)>>3])?(C<=0.0?0:2):1,(b|0)!=1):0){d=1;do{C=+p[(k[V>>2]|0)+(d<<3)>>3];i[(k[W>>2]|0)+d>>0]=!(C>=+p[((i[(k[U>>2]|0)+d>>0]|0)>0?H:I)>>3])?(C<=0.0?0:2):1;d=d+1|0}while((d|0)!=(b|0))}e=af(b>>>0>1073741823?-1:b<<2)|0;S=a+60|0;k[S>>2]=e;if(P){d=0;do{k[e+(d<<2)>>2]=d;d=d+1|0}while((d|0)!=(b|0))}G=a+4|0;k[G>>2]=b;q=af(r)|0;Q=a+12|0;k[Q>>2]=q;e=af(r)|0;R=a+64|0;k[R>>2]=e;if(P){n=k[T>>2]|0;d=0;do{p[q+(d<<3)>>3]=+p[n+(d<<3)>>3];p[e+(d<<3)>>3]=0.0;d=d+1|0}while((d|0)!=(b|0));if(P){s=0;d=k[W>>2]|0;do{if(i[d+s>>0]|0){r=Wa[k[k[c>>2]>>2]&15](c,s,b)|0;j=+p[(k[V>>2]|0)+(s<<3)>>3];e=k[Q>>2]|0;d=0;do{F=e+(d<<3)|0;p[F>>3]=+p[F>>3]+j*+o[r+(d<<2)>>2];d=d+1|0}while((d|0)!=(b|0));d=k[W>>2]|0;if((i[d+s>>0]|0)==1){n=k[R>>2]|0;q=(k[U>>2]|0)+s|0;e=0;do{F=n+(e<<3)|0;p[F>>3]=+p[F>>3]+ +p[((i[q>>0]|0)>0?H:I)>>3]*+o[r+(e<<2)>>2];e=e+1|0}while((e|0)!=(b|0))}}s=s+1|0}while((s|0)!=(b|0))}}F=(b|0)>21474836?2147483647:b*100|0;F=(F|0)>1e7?F:1e7;E=(b|0)<1e3?b:1e3;a:do if((F|0)>0){D=(m|0)==0;r=0;d=E+1|0;while(1){d=d+-1|0;if(!d){if(!D)Za[k[(k[a>>2]|0)+16>>2]&31](a);Jb(3198,M);d=E}if(Wa[k[(k[a>>2]|0)+8>>2]&15](a,J,K)|0){Ib(a);k[G>>2]=b;Jb(1483,N);if(!(Wa[k[(k[a>>2]|0)+8>>2]&15](a,J,K)|0))d=1;else break}r=r+1|0;s=Wa[k[k[c>>2]>>2]&15](c,k[J>>2]|0,k[G>>2]|0)|0;m=Wa[k[k[c>>2]>>2]&15](c,k[K>>2]|0,k[G>>2]|0)|0;y=k[J>>2]|0;q=k[U>>2]|0;A=q+y|0;e=i[A>>0]|0;B=+p[(e<<24>>24>0?H:I)>>3];z=k[K>>2]|0;q=i[q+z>>0]|0;C=+p[(q<<24>>24>0?H:I)>>3];n=k[V>>2]|0;x=n+(y<<3)|0;v=+p[x>>3];n=n+(z<<3)|0;w=+p[n>>3];Z=k[L>>2]|0;j=+p[Z+(y<<3)>>3]+ +p[Z+(z<<3)>>3];t=+o[s+(z<<2)>>2]*2.0;do if(e<<24>>24==q<<24>>24){t=j-t;e=k[Q>>2]|0;t=(+p[e+(y<<3)>>3]-+p[e+(z<<3)>>3])/(!(t<=0.0)?t:1.0e-12);j=v+w;p[x>>3]=v-t;t=+p[n>>3]+t;p[n>>3]=t;if(j>B){if(+p[x>>3]>B){p[x>>3]=B;p[n>>3]=j-B}}else if(t<0.0){p[n>>3]=0.0;p[x>>3]=j}if(j>C){if(!(+p[n>>3]>C)){q=e;break}p[n>>3]=C;p[x>>3]=j-C;q=e;break}else{if(!(+p[x>>3]<0.0)){q=e;break}p[x>>3]=0.0;p[n>>3]=j;q=e;break}}else{t=t+j;e=k[Q>>2]|0;t=(-+p[e+(y<<3)>>3]-+p[e+(z<<3)>>3])/(!(t<=0.0)?t:1.0e-12);j=v-w;p[x>>3]=v+t;t=+p[n>>3]+t;p[n>>3]=t;if(j>0.0){if(t<0.0){p[n>>3]=0.0;p[x>>3]=j}}else if(+p[x>>3]<0.0){p[x>>3]=0.0;p[n>>3]=-j}if(j>B-C){if(!(+p[x>>3]>B)){q=e;break}p[x>>3]=B;p[n>>3]=B-j;q=e;break}else{if(!(+p[n>>3]>C)){q=e;break}p[n>>3]=C;p[x>>3]=C+j;q=e;break}}while(0);j=+p[x>>3];v=j-v;t=+p[n>>3]-w;n=k[G>>2]|0;if((n|0)>0){e=0;do{Z=q+(e<<3)|0;p[Z>>3]=+p[Z>>3]+(v*+o[s+(e<<2)>>2]+t*+o[m+(e<<2)>>2]);e=e+1|0}while((e|0)<(n|0));j=+p[x>>3]}s=k[W>>2]|0;e=s+y|0;n=(i[e>>0]|0)==1;s=(i[s+z>>0]|0)==1;i[e>>0]=!(j>=+p[((i[A>>0]|0)>0?H:I)>>3])?(j<=0.0?0:2):1;e=k[K>>2]|0;w=+p[(k[V>>2]|0)+(e<<3)>>3];i[(k[W>>2]|0)+e>>0]=!(w>=+p[((i[(k[U>>2]|0)+e>>0]|0)>0?H:I)>>3])?(w<=0.0?0:2):1;e=k[J>>2]|0;do if(n^(i[(k[W>>2]|0)+e>>0]|0)==1){q=Wa[k[k[c>>2]>>2]&15](c,e,b)|0;if(n){if(!P)break;n=k[R>>2]|0;e=0;do{Z=n+(e<<3)|0;p[Z>>3]=+p[Z>>3]-B*+o[q+(e<<2)>>2];e=e+1|0}while((e|0)!=(b|0))}else{if(!P)break;n=k[R>>2]|0;e=0;do{Z=n+(e<<3)|0;p[Z>>3]=+p[Z>>3]+B*+o[q+(e<<2)>>2];e=e+1|0}while((e|0)!=(b|0))}}while(0);e=k[K>>2]|0;do if(s^(i[(k[W>>2]|0)+e>>0]|0)==1){q=Wa[k[k[c>>2]>>2]&15](c,e,b)|0;if(s){if(!P)break;n=k[R>>2]|0;e=0;do{Z=n+(e<<3)|0;p[Z>>3]=+p[Z>>3]-C*+o[q+(e<<2)>>2];e=e+1|0}while((e|0)!=(b|0))}else{if(!P)break;n=k[R>>2]|0;e=0;do{Z=n+(e<<3)|0;p[Z>>3]=+p[Z>>3]+C*+o[q+(e<<2)>>2];e=e+1|0}while((e|0)!=(b|0))}}while(0);if((r|0)>=(F|0))break a}}else r=0;while(0);if((r|0)>=(F|0)){if((k[G>>2]|0)<(b|0)){Ib(a);k[G>>2]=b;Jb(1483,O)}ke(1540,44,1,k[105]|0)|0}C=+Ya[k[(k[a>>2]|0)+12>>2]&3](a);p[l+8>>3]=C;if(P){e=k[V>>2]|0;n=k[Q>>2]|0;q=k[T>>2]|0;d=0;j=0.0;do{j=j+ +p[e+(d<<3)>>3]*(+p[n+(d<<3)>>3]+ +p[q+(d<<3)>>3]);d=d+1|0}while((d|0)!=(b|0));p[l>>3]=j*.5;if(P){e=k[V>>2]|0;n=k[S>>2]|0;d=0;do{p[f+(k[n+(d<<2)>>2]<<3)>>3]=+p[e+(d<<3)>>3];d=d+1|0}while((d|0)!=(b|0))}}else p[l>>3]=0.0;p[l+16>>3]=g;p[l+24>>3]=h;k[X>>2]=r;Jb(1585,X);d=k[T>>2]|0;if(d|0)cf(d);d=k[U>>2]|0;if(d|0)cf(d);d=k[V>>2]|0;if(d|0)cf(d);d=k[W>>2]|0;if(d|0)cf(d);d=k[S>>2]|0;if(d|0)cf(d);d=k[Q>>2]|0;if(d|0)cf(d);d=k[R>>2]|0;if(!d){u=Y;return}cf(d);u=Y;return}function Zb(a,b){a=a|0;b=b|0;var c=0,d=0,e=0.0,f=0,g=0,h=0,j=0,m=0.0,n=0,o=0,q=0,r=0,s=0,t=0,v=0,w=0,x=0,y=0,z=0,A=0,B=0,C=0,D=0.0,E=0.0,F=0.0,G=0.0,H=0.0,I=0.0,J=0.0,K=0.0,L=0,M=0.0,N=0,Q=0,R=0,S=0,T=0,U=0,V=0,W=0,X=0,_=0,aa=0,ba=0,ca=0,da=0,ea=0,fa=0,ga=0,ha=0,ia=0,ja=0,ka=0,la=0,ma=0,na=0,oa=0,pa=0,qa=0,ra=0,sa=0,ta=0,ua=0,va=0,wa=0,xa=0,ya=0,za=0,Aa=0,Ba=0,Ca=0,Da=0,Ea=0,Fa=0.0;Ea=u;u=u+272|0;qa=Ea+232|0;na=Ea+224|0;ma=Ea+216|0;s=Ea+208|0;f=Ea+200|0;n=Ea+192|0;oa=Ea+96|0;ka=Ea;Aa=Ea+260|0;Ba=Ea+256|0;Ca=Ea+252|0;sa=Ea+248|0;la=Ea+236|0;Da=Ve(144)|0;g=Da;o=b;r=g+96|0;do{k[g>>2]=k[o>>2];g=g+4|0;o=o+4|0}while((g|0)<(r|0));k[Da+136>>2]=0;c=k[b>>2]|0;if((c+-2|0)>>>0<3){k[Da+96>>2]=2;k[Da+128>>2]=0;k[Da+132>>2]=0;j=Da+116|0;k[j>>2]=0;k[Da+120>>2]=0;Ca=Ve(4)|0;q=Da+108|0;k[q>>2]=Ca;if((k[b+92>>2]|0)!=0&(c+-3|0)>>>0<2){h=Ve(8)|0;k[j>>2]=h;h=Ve(k[a>>2]<<3)|0;g=oa;o=b;r=g+96|0;do{k[g>>2]=k[o>>2];g=g+4|0;o=o+4|0}while((g|0)<(r|0));k[oa+92>>2]=0;_b(a,oa,5,h);g=k[a>>2]|0;f=(g|0)>0;if(f){d=k[a+4>>2]|0;c=0;e=0.0;do{Ca=h+(c<<3)|0;M=+p[d+(c<<3)>>3]-+p[Ca>>3];p[Ca>>3]=M;e=e+ +O(+M);c=c+1|0}while((c|0)<(g|0));e=e/+(g|0);if(f){m=+P(+(e*(e*2.0)))*5.0;c=0;d=0;e=0.0;do{M=+O(+(+p[h+(d<<3)>>3]));Ca=M>m;e=Ca?e:e+M;c=(Ca&1)+c|0;d=d+1|0}while((d|0)<(g|0))}else{c=0;e=0.0}}else{c=0;e=0.0}M=e/+(g-c|0);p[n>>3]=M;Jb(1621,n);We(h);p[k[j>>2]>>3]=M}$b(oa,a,b,0.0,0.0);f=Ve(8)|0;k[Da+112>>2]=f;p[f>>3]=+p[oa+8>>3];f=k[a>>2]|0;o=k[oa>>2]|0;if((f|0)>0){c=0;d=0;do{M=+p[o+(d<<3)>>3];c=(M==M&0.0==0.0&M!=0.0&1)+c|0;d=d+1|0}while((d|0)<(f|0))}else c=0;k[Da+100>>2]=c;j=c<<2;h=Ve(j)|0;n=Da+104|0;k[n>>2]=h;h=Ve(c<<3)|0;k[k[q>>2]>>2]=h;j=Ve(j)|0;h=Da+124|0;k[h>>2]=j;j=a+8|0;g=0;c=0;a:while(1){while(1){if((c|0)>=(f|0))break a;e=+p[o+(c<<3)>>3];d=c+1|0;if(e!=e|0.0!=0.0|e==0.0)c=d;else break}k[(k[n>>2]|0)+(g<<2)>>2]=k[(k[j>>2]|0)+(c<<2)>>2];p[(k[k[q>>2]>>2]|0)+(g<<3)>>3]=e;k[(k[h>>2]|0)+(g<<2)>>2]=d;g=g+1|0;c=d;f=k[a>>2]|0}We(o);u=Ea;return Da|0}ra=k[a>>2]|0;k[Ba>>2]=0;k[Ca>>2]=0;k[sa>>2]=0;d=ra<<2;za=Ve(d)|0;ac(a,Aa,Ba,Ca,sa,za);c=k[Aa>>2]|0;if((c|0)==1)Jb(1743,f);ya=Ve(d)|0;pa=(ra|0)>0;if(pa){f=k[a+8>>2]|0;d=0;do{k[ya+(d<<2)>>2]=k[f+(k[za+(d<<2)>>2]<<2)>>2];d=d+1|0}while((d|0)!=(ra|0))}xa=Ve(c<<3)|0;r=(c|0)>0;if(r){e=+p[b+48>>3];d=0;do{p[xa+(d<<3)>>3]=e;d=d+1|0}while((d|0)<(c|0))}j=b+56|0;d=k[j>>2]|0;if((d|0)>0){n=b+60|0;o=k[105]|0;q=b+64|0;a=k[Ba>>2]|0;h=0;do{b:do if(r){g=k[(k[n>>2]|0)+(h<<2)>>2]|0;f=0;do{if((g|0)==(k[a+(f<<2)>>2]|0))break b;f=f+1|0}while((f|0)<(c|0))}else f=0;while(0);if((f|0)==(c|0)){k[s>>2]=k[(k[n>>2]|0)+(h<<2)>>2];Ae(o,1810,s)|0;d=k[j>>2]|0}else{wa=xa+(f<<3)|0;p[wa>>3]=+p[(k[q>>2]|0)+(h<<3)>>3]*+p[wa>>3]}h=h+1|0}while((h|0)<(d|0))}va=Ve(ra)|0;if(pa)Kf(va|0,0,ra|0)|0;d=($(c+-1|0,c)|0)/2|0;wa=Ve(d<<4)|0;ga=b+92|0;if(!(k[ga>>2]|0)){ha=0;ia=0;ta=0;ua=0}else{ua=d<<3;ta=Ve(ua)|0;ua=Ve(ua)|0;ha=ta;ia=ua}if(r){T=k[Ca>>2]|0;U=k[sa>>2]|0;V=la+8|0;W=la+4|0;X=oa+8|0;_=oa+4|0;aa=ka+92|0;ba=ka+48|0;ca=ka+56|0;da=ka+60|0;ea=ka+64|0;fa=k[Aa>>2]|0;d=0;S=0;do{f=S;S=S+1|0;if((S|0)<(c|0)){Q=T+(f<<2)|0;R=U+(f<<2)|0;N=xa+(f<<3)|0;L=S;while(1){z=k[Q>>2]|0;A=k[T+(L<<2)>>2]|0;B=k[R>>2]|0;C=k[U+(L<<2)>>2]|0;h=C+B|0;k[la>>2]=h;f=h<<2;c=Ve(f)|0;k[V>>2]=c;g=h<<3;x=Ve(g)|0;k[W>>2]=x;x=(B|0)>0;if(x?(k[c>>2]=k[ya+(z<<2)>>2],p[k[W>>2]>>3]=1.0,(B|0)!=1):0){c=1;do{k[(k[V>>2]|0)+(c<<2)>>2]=k[ya+(c+z<<2)>>2];p[(k[W>>2]|0)+(c<<3)>>3]=1.0;c=c+1|0}while((c|0)!=(B|0))}y=(C|0)>0;if(y){c=0;do{w=c+B|0;k[(k[V>>2]|0)+(w<<2)>>2]=k[ya+(c+A<<2)>>2];p[(k[W>>2]|0)+(w<<3)>>3]=-1.0;c=c+1|0}while((c|0)!=(C|0))}if(!(k[ga>>2]|0))c=xa+(L<<3)|0;else{e=+p[N>>3];c=xa+(L<<3)|0;m=+p[c>>3];v=ha+(d<<3)|0;w=ia+(d<<3)|0;t=Ve(f)|0;s=Ve(g)|0;g=(h|0)>0;if(g){f=0;do{k[t+(f<<2)>>2]=f;f=f+1|0}while((f|0)<(h|0));if(g){f=0;do{r=Oe()|0;g=k[la>>2]|0;q=t+(f<<2)|0;r=t+(((r|0)%(g-f|0)|0)+f<<2)|0;a=k[q>>2]|0;k[q>>2]=k[r>>2];k[r>>2]=a;f=f+1|0}while((f|0)<(g|0));a=0}else{a=0;g=h}}else{a=0;g=h}do{n=$(a,g)|0;f=(n|0)/5|0;a=a+1|0;q=($(a,g)|0)/5|0;j=g+(f-q)|0;k[oa>>2]=j;h=Ve(j<<2)|0;k[X>>2]=h;j=Ve(j<<3)|0;k[_>>2]=j;do if((n|0)>4){r=k[t>>2]|0;k[h>>2]=k[(k[V>>2]|0)+(r<<2)>>2];j=k[_>>2]|0;p[j>>3]=+p[(k[W>>2]|0)+(r<<3)>>3];if((n|0)>9)h=1;else{h=1;break}do{r=k[t+(h<<2)>>2]|0;k[(k[X>>2]|0)+(h<<2)>>2]=k[(k[V>>2]|0)+(r<<2)>>2];j=k[_>>2]|0;p[j+(h<<3)>>3]=+p[(k[W>>2]|0)+(r<<3)>>3];h=h+1|0}while((h|0)<(f|0))}else h=0;while(0);if((q|0)<(g|0)){j=q;do{r=k[t+(j<<2)>>2]|0;k[(k[X>>2]|0)+(h<<2)>>2]=k[(k[V>>2]|0)+(r<<2)>>2];n=k[_>>2]|0;p[n+(h<<3)>>3]=+p[(k[W>>2]|0)+(r<<3)>>3];h=h+1|0;j=j+1|0}while((j|0)<(g|0))}else n=j;if((h|0)>0){j=0;g=0;o=0;do{r=+p[n+(o<<3)>>3]>0.0;g=(r&1)+g|0;j=((r^1)&1)+j|0;o=o+1|0}while((o|0)!=(h|0))}else{j=0;g=0}h=(g|0)==0;c:do if(!(j|g)){if((f|0)>=(q|0))break;do{p[s+(k[t+(f<<2)>>2]<<3)>>3]=0.0;f=f+1|0}while((f|0)!=(q|0))}else{if((g|0)>0&(j|0)==0){if((f|0)>=(q|0))break;while(1){p[s+(k[t+(f<<2)>>2]<<3)>>3]=1.0;f=f+1|0;if((f|0)==(q|0))break c}}if(h&(j|0)>0){if((f|0)>=(q|0))break;while(1){p[s+(k[t+(f<<2)>>2]<<3)>>3]=-1.0;f=f+1|0;if((f|0)==(q|0))break c}}g=ka;o=b;r=g+96|0;do{k[g>>2]=k[o>>2];g=g+4|0;o=o+4|0}while((g|0)<(r|0));k[aa>>2]=0;p[ba>>3]=1.0;k[ca>>2]=2;r=Ve(8)|0;k[da>>2]=r;h=Ve(16)|0;k[ea>>2]=h;k[r>>2]=1;k[r+4>>2]=-1;p[h>>3]=e;p[h+8>>3]=m;h=Zb(oa,ka)|0;if((f|0)>=(q|0)){if(h|0)ja=76}else{g=h+128|0;do{r=k[t+(f<<2)>>2]|0;ja=s+(r<<3)|0;+bc(h,k[(k[V>>2]|0)+(r<<2)>>2]|0,ja);p[ja>>3]=+(k[k[g>>2]>>2]|0)*+p[ja>>3];f=f+1|0}while((f|0)!=(q|0));ja=76}if((ja|0)==76){ja=0;cc(h);We(h)}We(k[da>>2]|0);We(k[ea>>2]|0)}while(0);We(k[X>>2]|0);We(k[_>>2]|0);g=k[la>>2]|0}while((a|0)!=5);h=k[W>>2]|0;n=(g|0)>0;if(n){e=0.0;m=0.0;f=0;do{r=+p[h+(f<<3)>>3]>0.0;m=r?m:m+1.0;e=r?e+1.0:e;f=f+1|0}while((f|0)!=(g|0))}else{e=0.0;m=0.0}F=e+1.0;D=F/(e+2.0);E=1.0/(m+2.0);j=Ve(g<<3)|0;p[v>>3]=0.0;F=+Z(+((m+1.0)/F));p[w>>3]=F;if(n){m=+p[v>>3];e=0.0;f=0;do{M=+p[h+(f<<3)>>3]>0.0?D:E;p[j+(f<<3)>>3]=M;K=F+m*+p[s+(f<<3)>>3];r=!(K>=0.0);e=e+(+Z(+(+Y(+(r?K:-K))+1.0))+K*(r?M+-1.0:M));f=f+1|0}while((f|0)!=(g|0));f=0;M=e}else{f=0;M=0.0}while(1){if(n){K=+p[v>>3];J=1.0e-12;m=1.0e-12;E=0.0;D=0.0;e=0.0;h=0;while(1){I=+p[s+(h<<3)>>3];G=F+K*I;if(!(G>=0.0)){Fa=+Y(+G);G=Fa+1.0;H=1.0/G;G=Fa/G}else{H=+Y(+-G);G=H+1.0;H=H/G;G=1.0/G}Fa=G*H;G=J+I*I*Fa;m=m+Fa;e=e+I*Fa;Fa=+p[j+(h<<3)>>3]-H;D=D+I*Fa;E=E+Fa;h=h+1|0;if((h|0)==(g|0))break;else J=G}}else{G=1.0e-12;m=1.0e-12;E=0.0;D=0.0;e=0.0}if(+O(+D)<1.0e-05?+O(+E)<1.0e-05:0){ja=104;break}I=m*G-e*e;J=-(D*m-e*E)/I;I=-(E*G-e*D)/I;G=D*J+E*I;H=+p[v>>3];d:do if(n){D=1.0;while(1){e=H+J*D;E=F+I*D;m=0.0;h=0;do{K=E+e*+p[s+(h<<3)>>3];r=!(K>=0.0);Fa=+p[j+(h<<3)>>3];m=m+(+Z(+(+Y(+(r?K:-K))+1.0))+K*(r?Fa+-1.0:Fa));h=h+1|0}while((h|0)!=(g|0));if(m<M+G*(D*.0001)){ja=99;break d}D=D*.5;if(!(D>=1.0e-10)){m=M;e=F;break}}}else{e=1.0;while(1){if(M+G*(e*.0001)>0.0)break;D=e*.5;if(!(D>=1.0e-10)){m=M;e=F;break d}else e=D}m=0.0;D=e;E=F+I*e;e=H+J*e;ja=99}while(0);if((ja|0)==99){ja=0;p[v>>3]=e;p[w>>3]=E;e=E}if(D<1.0e-10){ja=102;break}f=f+1|0;if((f|0)<100){M=m;F=e}else{ja=105;break}}if((ja|0)==102){Jb(1868,ma);ja=104}if((ja|0)==104?(ja=0,(f|0)>99):0)ja=105;if((ja|0)==105){ja=0;Jb(1922,na)}We(j);We(s);We(t)}$b(oa,la,b,+p[N>>3],+p[c>>3]);g=wa+(d<<4)|0;k[g>>2]=k[oa>>2];k[g+4>>2]=k[oa+4>>2];k[g+8>>2]=k[oa+8>>2];k[g+12>>2]=k[oa+12>>2];if(x){c=0;do{f=va+(c+z)|0;do if(!(i[f>>0]|0)){Fa=+p[(k[g>>2]|0)+(c<<3)>>3];if(Fa!=Fa|0.0!=0.0|Fa==0.0)break;i[f>>0]=1}while(0);c=c+1|0}while((c|0)!=(B|0))}if(y){c=0;do{f=va+(c+A)|0;do if(!(i[f>>0]|0)){Fa=+p[(k[g>>2]|0)+(c+B<<3)>>3];if(Fa!=Fa|0.0!=0.0|Fa==0.0)break;i[f>>0]=1}while(0);c=c+1|0}while((c|0)!=(C|0))}We(k[V>>2]|0);We(k[W>>2]|0);d=d+1|0;L=L+1|0;if((L|0)>=(fa|0)){c=fa;break}}}}while((S|0)<(c|0))}k[Da+96>>2]=c;g=Ve(c<<2)|0;k[Da+128>>2]=g;if((c|0)>0){f=k[Ba>>2]|0;c=k[Aa>>2]|0;d=0;do{k[g+(d<<2)>>2]=k[f+(d<<2)>>2];d=d+1|0}while((d|0)<(c|0))}j=$(c+-1|0,c)|0;n=(j|0)/2|0;h=n<<3;f=Ve(h)|0;k[Da+112>>2]=f;j=(j|0)>1;if(j){d=0;do{p[f+(d<<3)>>3]=+p[wa+(d<<4)+8>>3];d=d+1|0}while((d|0)<(n|0))}if(k[ga>>2]|0){g=Ve(h)|0;k[Da+116>>2]=g;f=Ve(h)|0;k[Da+120>>2]=f;if(j){d=0;do{p[g+(d<<3)>>3]=+p[ha+(d<<3)>>3];p[f+(d<<3)>>3]=+p[ia+(d<<3)>>3];d=d+1|0}while((d|0)<(n|0))}}else{k[Da+116>>2]=0;k[Da+120>>2]=0}q=c<<2;L=Ve(q)|0;q=Ve(q)|0;k[Da+132>>2]=q;if((c|0)>0){n=k[sa>>2]|0;o=k[Ca>>2]|0;a=k[Aa>>2]|0;c=0;j=0;do{g=k[n+(j<<2)>>2]|0;if((g|0)>0){h=k[o+(j<<2)>>2]|0;f=0;d=0;do{oa=l[va+(h+f)>>0]|0;c=oa+c|0;d=oa+d|0;f=f+1|0}while((f|0)<(g|0))}else d=0;k[q+(j<<2)>>2]=d;k[L+(j<<2)>>2]=d;j=j+1|0}while((j|0)<(a|0));j=c;h=a}else{j=0;h=c}k[qa>>2]=j;Jb(1986,qa);k[Da+100>>2]=j;qa=j<<2;g=Ve(qa)|0;f=Da+104|0;k[f>>2]=g;qa=Ve(qa)|0;g=Da+124|0;k[g>>2]=qa;if(pa){c=0;d=0;do{if(i[va+d>>0]|0){k[(k[f>>2]|0)+(c<<2)>>2]=k[ya+(d<<2)>>2];k[(k[g>>2]|0)+(c<<2)>>2]=(k[za+(d<<2)>>2]|0)+1;c=c+1|0}d=d+1|0}while((d|0)!=(ra|0))}d=h<<2;C=Ve(d)|0;k[C>>2]=0;g=(h|0)>1;if(g){c=1;f=0;do{f=(k[L+(c+-1<<2)>>2]|0)+f|0;k[C+(c<<2)>>2]=f;c=c+1|0}while((c|0)<(h|0))}c=Ve(d+-4|0)|0;B=Da+108|0;k[B>>2]=c;if(g){f=j<<3;d=h+-1|0;ra=Ve(f)|0;k[c>>2]=ra;if((d|0)>1){c=1;do{ra=k[B>>2]|0;qa=Ve(f)|0;k[ra+(c<<2)>>2]=qa;c=c+1|0}while((c|0)<(d|0))}z=k[Aa>>2]|0}else z=h;e:do if((z|0)>0){A=k[Ca>>2]|0;c=k[sa>>2]|0;x=0;y=0;d=z;while(1){d=d+-1|0;t=x;x=x+1|0;v=(x|0)<(z|0);if(!v)break e;o=k[A+(t<<2)>>2]|0;w=k[c+(t<<2)>>2]|0;q=k[C+(t<<2)>>2]|0;if((w|0)>0){j=x;n=y;while(1){a=k[A+(j<<2)>>2]|0;r=k[c+(j<<2)>>2]|0;s=wa+(n<<4)|0;h=j+-1|0;f=q;g=0;do{if(i[va+(g+o)>>0]|0){p[(k[(k[B>>2]|0)+(h<<2)>>2]|0)+(f<<3)>>3]=+p[(k[s>>2]|0)+(g<<3)>>3];f=f+1|0}g=g+1|0}while((g|0)!=(w|0));if((r|0)>0){g=0;f=k[C+(j<<2)>>2]|0;do{if(i[va+(g+a)>>0]|0){p[(k[(k[B>>2]|0)+(t<<2)>>2]|0)+(f<<3)>>3]=+p[(k[s>>2]|0)+(g+w<<3)>>3];f=f+1|0}g=g+1|0}while((g|0)!=(r|0))}j=j+1|0;if((j|0)==(z|0))break;else n=n+1|0}}else{g=x;j=y;while(1){n=k[A+(g<<2)>>2]|0;o=k[c+(g<<2)>>2]|0;if((o|0)>0){q=wa+(j<<4)|0;h=0;f=k[C+(g<<2)>>2]|0;do{if(i[va+(h+n)>>0]|0){p[(k[(k[B>>2]|0)+(t<<2)>>2]|0)+(f<<3)>>3]=+p[(k[q>>2]|0)+(h+w<<3)>>3];f=f+1|0}h=h+1|0}while((h|0)!=(o|0))}g=g+1|0;if((g|0)==(z|0))break;else j=j+1|0}}if(!v)break;else y=y+d|0}}else c=k[sa>>2]|0;while(0);We(k[Ba>>2]|0);We(ta);We(ua);We(c);We(za);We(k[Ca>>2]|0);We(ya);We(xa);We(va);c=k[Aa>>2]|0;c=$(c+-1|0,c)|0;if((c|0)>1){d=(c|0)/2|0;c=0;do{We(k[wa+(c<<4)>>2]|0);c=c+1|0}while((c|0)<(d|0))}We(wa);We(L);We(C);u=Ea;return Da|0}function _b(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;var e=0,f=0,g=0,h=0,i=0,j=0,l=0,m=0,n=0,o=0,q=0,r=0,s=0,t=0,v=0,w=0,x=0,y=0,z=0,A=0,B=0,C=0,D=0,E=0,F=0,G=0.0;D=u;u=u+32|0;f=D+20|0;A=D+8|0;v=D+4|0;w=D;B=k[a>>2]|0;g=B<<2;y=Ve(g)|0;if((B|0)<(c|0)){ke(2102,100,1,k[105]|0)|0;x=B}else x=c;e=x<<2;z=Ve(e+4|0)|0;if(!((x|0)<(B|0)&(k[b>>2]|0)>>>0<2)){f=(B|0)>0;if(f){e=0;do{k[y+(e<<2)>>2]=e;e=e+1|0}while((e|0)!=(B|0));if(f){e=0;do{t=y+(e<<2)|0;w=y+(((Oe()|0)%(B-e|0)|0)+e<<2)|0;v=k[t>>2]|0;k[t>>2]=k[w>>2];k[w>>2]=v;e=e+1|0}while((e|0)!=(B|0))}}if((x|0)<0){We(z);We(y);u=D;return}else{e=0;while(1){w=($(e,B)|0)/(x|0)|0;k[z+(e<<2)>>2]=w;if((e|0)<(x|0))e=e+1|0;else break}}}else{k[A>>2]=0;k[v>>2]=0;k[w>>2]=0;ac(a,f,v,A,w,y);s=Ve(e)|0;t=Ve(g)|0;if((B|0)>0)Nf(t|0,y|0,g|0)|0;o=k[f>>2]|0;n=(o|0)>0;if(n){g=k[w>>2]|0;h=k[A>>2]|0;e=0;do{i=g+(e<<2)|0;if((k[i>>2]|0)>0){j=h+(e<<2)|0;f=0;do{F=Oe()|0;m=k[i>>2]|0;l=k[j>>2]|0;F=t+(((F|0)%(m-f|0)|0)+f+l<<2)|0;l=t+(l+f<<2)|0;E=k[F>>2]|0;k[F>>2]=k[l>>2];k[l>>2]=E;f=f+1|0}while((f|0)<(m|0))}e=e+1|0}while((e|0)<(o|0))}l=(x|0)>0;do if(l){j=k[w>>2]|0;if(n){f=0;do{h=s+(f<<2)|0;k[h>>2]=0;g=f;f=f+1|0;e=0;i=0;do{F=k[j+(e<<2)>>2]|0;i=(($(F,f)|0)/(x|0)|0)-(($(F,g)|0)/(x|0)|0)+i|0;e=e+1|0}while((e|0)!=(o|0));k[h>>2]=i}while((f|0)<(x|0));k[z>>2]=0;if((x|0)<1){m=1;break}else{e=1;f=0}}else{Kf(s|0,0,-4-(((B|0)<(c|0)?B:c)<<2^-4)|0)|0;k[z>>2]=0;e=1;f=0}while(1){f=(k[s+(e+-1<<2)>>2]|0)+f|0;k[z+(e<<2)>>2]=f;if((e|0)>=(x|0)){m=0;break}else e=e+1|0}}else{k[z>>2]=0;m=1}while(0);if(n?(q=k[A>>2]|0,r=k[w>>2]|0,l):0){e=0;do{h=k[q+(e<<2)>>2]|0;i=k[r+(e<<2)>>2]|0;f=0;do{j=($(i,f)|0)/(x|0)|0;l=j+h|0;g=f;f=f+1|0;c=($(i,f)|0)/(x|0)|0;if((l|0)<(c+h|0)){F=z+(g<<2)|0;E=k[F>>2]|0;Nf(y+(E<<2)|0,t+(l<<2)|0,c-j<<2|0)|0;k[F>>2]=E+c-j}}while((f|0)<(x|0));e=e+1|0}while((e|0)<(o|0))}k[z>>2]=0;if(!m){e=1;f=0;while(1){f=(k[s+(e+-1<<2)>>2]|0)+f|0;k[z+(e<<2)>>2]=f;if((e|0)>=(x|0))break;else e=e+1|0}}We(k[A>>2]|0);We(k[v>>2]|0);We(k[w>>2]|0);We(t);We(s)}if((x|0)<=0){We(z);We(y);u=D;return}n=A+8|0;o=A+4|0;q=b+92|0;r=a+8|0;c=a+4|0;l=0;m=k[z>>2]|0;do{l=l+1|0;g=m;m=k[z+(l<<2)>>2]|0;F=g-m+B|0;k[A>>2]=F;e=Ve(F<<2)|0;k[n>>2]=e;F=Ve(F<<3)|0;k[o>>2]=F;if((g|0)>0){F=k[y>>2]|0;k[e>>2]=k[(k[r>>2]|0)+(F<<2)>>2];p[k[o>>2]>>3]=+p[(k[c>>2]|0)+(F<<3)>>3];if((g|0)==1)e=g;else{e=1;do{F=k[y+(e<<2)>>2]|0;k[(k[n>>2]|0)+(e<<2)>>2]=k[(k[r>>2]|0)+(F<<2)>>2];p[(k[o>>2]|0)+(e<<3)>>3]=+p[(k[c>>2]|0)+(F<<3)>>3];e=e+1|0}while((e|0)!=(g|0));e=g}}else e=0;if((m|0)<(B|0)){f=m;while(1){F=k[y+(f<<2)>>2]|0;k[(k[n>>2]|0)+(e<<2)>>2]=k[(k[r>>2]|0)+(F<<2)>>2];p[(k[o>>2]|0)+(e<<3)>>3]=+p[(k[c>>2]|0)+(F<<3)>>3];f=f+1|0;if((f|0)==(B|0))break;else e=e+1|0}}j=Zb(A,b)|0;if((k[q>>2]|0)!=0?(k[b>>2]|0)>>>0<2:0){f=Ve(k[j+96>>2]<<3)|0;if((g|0)<(m|0)){e=g;do{F=k[y+(e<<2)>>2]|0;G=+wc(j,k[(k[r>>2]|0)+(F<<2)>>2]|0,f);p[d+(F<<3)>>3]=G;e=e+1|0}while((e|0)!=(m|0))}We(f)}else C=46;if((C|0)==46?(C=0,(g|0)<(m|0)):0){i=j+96|0;f=g;do{g=k[y+(f<<2)>>2]|0;h=k[(k[r>>2]|0)+(g<<2)>>2]|0;e=k[i>>2]|0;if(((k[j>>2]|0)+-2|0)>>>0<3)e=8;else e=(($(e+-1|0,e)|0)/2|0)<<3;F=Ve(e)|0;G=+bc(j,h,F);We(F);p[d+(g<<3)>>3]=G;f=f+1|0}while((f|0)!=(m|0))}if(j|0){cc(j);We(j)}We(k[n>>2]|0);We(k[o>>2]|0)}while((l|0)<(x|0));We(z);We(y);u=D;return}function $b(a,b,c,d,e){a=a|0;b=b|0;c=c|0;d=+d;e=+e;var f=0,g=0,h=0.0,j=0,l=0,m=0,n=0,o=0,q=0,r=0,s=0,t=0,v=0,w=0,x=0,y=0,z=0,A=0,B=0,C=0.0;A=u;u=u+256|0;z=A+248|0;w=A+232|0;q=A+224|0;r=A+216|0;m=A+208|0;n=A+200|0;s=A+120|0;t=A+40|0;x=A;v=k[b>>2]|0;o=v<<3;y=Ve(o)|0;switch(k[c>>2]|0){case 0:{l=af(v>>>0>536870911?-1:v<<3)|0;m=af((v|0)>-1?v:-1)|0;j=(v|0)>0;if(j){g=k[b+4>>2]|0;f=0;do{p[y+(f<<3)>>3]=0.0;p[l+(f<<3)>>3]=-1.0;i[m+f>>0]=+p[g+(f<<3)>>3]>0.0?1:-1;f=f+1|0}while((f|0)!=(v|0))}k[s>>2]=236;dc(t,b,c,m);Yb(s,v,t,l,m,y,d,e,+p[c+40>>3],x,k[c+88>>2]|0);ec(t);if(j){h=0.0;f=0;do{h=h+ +p[y+(f<<3)>>3];f=f+1|0}while((f|0)!=(v|0))}else h=0.0;if(d==e){p[n>>3]=h/(+(k[b>>2]|0)*d);Jb(2002,n)}if(j){f=0;do{t=y+(f<<3)|0;p[t>>3]=+p[t>>3]*+(i[m+f>>0]|0);f=f+1|0}while((f|0)!=(v|0))}cf(l);cf(m);break}case 1:{h=+p[c+72>>3];l=af((v|0)>-1?v:-1)|0;j=(v|0)>0;if(j){g=k[b+4>>2]|0;f=0;do{i[l+f>>0]=+p[g+(f<<3)>>3]>0.0?1:-1;f=f+1|0}while((f|0)!=(v|0));d=h*+(v|0)*.5;h=d;f=0;do{if((i[l+f>>0]|0)==1){e=h>1.0?1.0:h;h=h-e}else{e=d>1.0?1.0:d;d=d-e}p[y+(f<<3)>>3]=e;f=f+1|0}while((f|0)!=(v|0))}g=af(v>>>0>536870911?-1:v<<3)|0;if(j)Kf(g|0,0,o|0)|0;k[s>>2]=268;dc(t,b,c,l);h=+p[c+40>>3];c=k[c+88>>2]|0;k[s+76>>2]=x;Yb(s,v,t,g,l,y,1.0,1.0,h,x,c);ec(t);h=+p[x+32>>3];d=1.0/h;p[m>>3]=d;Jb(2011,m);if(j){f=0;do{t=y+(f<<3)|0;p[t>>3]=+p[t>>3]*(+(i[l+f>>0]|0)/h);f=f+1|0}while((f|0)!=(v|0))}v=x+8|0;p[v>>3]=+p[v>>3]/h;p[x>>3]=+p[x>>3]/(h*h);p[x+16>>3]=d;p[x+24>>3]=d;cf(l);cf(g);break}case 2:{j=af(v>>>0>536870911?-1:v<<3)|0;l=af((v|0)>-1?v:-1)|0;h=+(v|0)*+p[c+72>>3];f=~~h;if((f|0)>0){g=0;do{p[y+(g<<3)>>3]=1.0;g=g+1|0}while((g|0)!=(f|0))}if((f|0)<(v|0)){h=h-+(f|0);g=29}else g=30;while(1)if((g|0)==29){p[y+(f<<3)>>3]=h;g=30;continue}else if((g|0)==30){f=f+1|0;if((f|0)<(v|0)){h=0.0;g=29;continue}else break}if((v|0)>0){Kf(j|0,0,o|0)|0;Kf(l|0,1,v|0)|0}k[s>>2]=236;gc(t,b,c);Yb(s,v,t,j,l,y,1.0,1.0,+p[c+40>>3],x,k[c+88>>2]|0);hc(t);cf(j);cf(l);break}case 3:{j=v<<1;n=j>>>0>536870911?-1:j<<3;m=af(n)|0;n=af(n)|0;o=af((v|0)<0?-1:j)|0;l=(v|0)>0;if(l){g=k[b+4>>2]|0;h=+p[c+80>>3];f=0;do{p[m+(f<<3)>>3]=0.0;B=g+(f<<3)|0;p[n+(f<<3)>>3]=h-+p[B>>3];i[o+f>>0]=1;q=f+v|0;p[m+(q<<3)>>3]=0.0;p[n+(q<<3)>>3]=h+ +p[B>>3];i[o+q>>0]=-1;f=f+1|0}while((f|0)!=(v|0))}k[s>>2]=236;ic(t,b,c);g=c+48|0;e=+p[g>>3];Yb(s,j,t,n,o,m,e,e,+p[c+40>>3],x,k[c+88>>2]|0);jc(t);if(l){h=0.0;f=0;do{e=+p[m+(f<<3)>>3]-+p[m+(f+v<<3)>>3];p[y+(f<<3)>>3]=e;h=h+ +O(+e);f=f+1|0}while((f|0)!=(v|0))}else h=0.0;p[r>>3]=h/(+(v|0)*+p[g>>3]);Jb(2002,r);cf(m);cf(n);cf(o);break}case 4:{d=+p[c+48>>3];g=v<<1;n=g>>>0>536870911?-1:g<<3;m=af(n)|0;n=af(n)|0;o=af((v|0)<0?-1:g)|0;j=(v|0)>0;if(j){l=k[b+4>>2]|0;h=+(v|0)*(d*+p[c+72>>3])*.5;f=0;while(1){e=h<d?h:d;B=f+v|0;p[m+(B<<3)>>3]=e;p[m+(f<<3)>>3]=e;r=l+(f<<3)|0;p[n+(f<<3)>>3]=-+p[r>>3];i[o+f>>0]=1;p[n+(B<<3)>>3]=+p[r>>3];i[o+B>>0]=-1;f=f+1|0;if((f|0)==(v|0))break;else h=h-e}}k[s>>2]=268;ic(t,b,c);e=+p[c+40>>3];B=k[c+88>>2]|0;k[s+76>>2]=x;Yb(s,g,t,n,o,m,d,d,e,x,B);jc(t);p[q>>3]=-+p[x+32>>3];Jb(2019,q);if(j){f=0;do{p[y+(f<<3)>>3]=+p[m+(f<<3)>>3]-+p[m+(f+v<<3)>>3];f=f+1|0}while((f|0)!=(v|0))}cf(m);cf(n);cf(o);break}default:{}}n=x+8|0;e=+p[n>>3];p[w>>3]=+p[x>>3];p[w+8>>3]=e;Jb(2033,w);m=k[b>>2]|0;if((m|0)<=0){x=0;B=0;k[z>>2]=B;B=z+4|0;k[B>>2]=x;Jb(2053,z);k[a>>2]=y;e=+p[n>>3];B=a+8|0;p[B>>3]=e;u=A;return}l=b+4|0;e=+p[x+16>>3];d=+p[x+24>>3];g=0;f=0;j=0;do{C=+p[y+(j<<3)>>3];h=+O(+C);do if(!(C!=C|0.0!=0.0|C==0.0)){f=f+1|0;if(+p[(k[l>>2]|0)+(j<<3)>>3]>0.0){if(!(h>=e))break;g=g+1|0;break}else{if(!(h>=d))break;g=g+1|0;break}}while(0);j=j+1|0}while((j|0)<(m|0));k[z>>2]=f;B=z+4|0;k[B>>2]=g;Jb(2053,z);k[a>>2]=y;C=+p[n>>3];B=a+8|0;p[B>>3]=C;u=A;return}function ac(a,b,c,d,e,f){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;f=f|0;var g=0,h=0,i=0,j=0,l=0,m=0,n=0,o=0,q=0,r=0,s=0,t=0,u=0,v=0;u=k[a>>2]|0;i=Ve(64)|0;g=Ve(64)|0;v=Ve(u<<2)|0;t=(u|0)>0;if(t){r=a+4|0;n=0;q=0;o=i;m=g;h=16;l=g;while(1){j=~~+p[(k[r>>2]|0)+(q<<3)>>3];a:do if((n|0)>0){a=0;while(1){if((j|0)==(k[o+(a<<2)>>2]|0))break;a=a+1|0;if((a|0)>=(n|0))break a}g=m+(a<<2)|0;k[g>>2]=(k[g>>2]|0)+1}else a=0;while(0);k[v+(q<<2)>>2]=a;if((a|0)==(n|0)){a=h<<3;if((n|0)==(h|0)){i=Ye(i,a)|0;l=Ye(l,a)|0;a=h<<1;g=i;m=l}else{a=h;g=o}k[g+(n<<2)>>2]=j;k[m+(n<<2)>>2]=1;n=n+1|0}else{a=h;g=o}q=q+1|0;if((q|0)==(u|0))break;else{o=g;h=a}}if((n|0)==2)if(((k[g>>2]|0)==-1?(s=g+4|0,(k[s>>2]|0)==1):0)?(k[g>>2]=1,k[s>>2]=-1,s=m+4|0,r=k[m>>2]|0,k[m>>2]=k[s>>2],k[s>>2]=r,t):0){a=0;do{s=v+(a<<2)|0;k[s>>2]=(k[s>>2]|0)==0&1;a=a+1|0}while((a|0)!=(u|0))}else n=2}else{n=0;m=g;l=g}j=Ve(n<<2)|0;k[j>>2]=0;h=(n|0)>1;if(h){a=1;g=0;do{g=(k[m+(a+-1<<2)>>2]|0)+g|0;k[j+(a<<2)>>2]=g;a=a+1|0}while((a|0)!=(n|0))}if(t){a=0;do{t=j+(k[v+(a<<2)>>2]<<2)|0;s=k[t>>2]|0;k[f+(s<<2)>>2]=a;k[t>>2]=s+1;a=a+1|0}while((a|0)!=(u|0))}k[j>>2]=0;if(h){a=1;g=0}else{k[b>>2]=n;k[c>>2]=i;k[d>>2]=j;k[e>>2]=l;We(v);return}do{g=(k[m+(a+-1<<2)>>2]|0)+g|0;k[j+(a<<2)>>2]=g;a=a+1|0}while((a|0)!=(n|0));k[b>>2]=n;k[c>>2]=i;k[d>>2]=j;k[e>>2]=l;We(v);return}function bc(a,b,c){a=a|0;b=b|0;c=c|0;var d=0.0,e=0,f=0,g=0,h=0,i=0,j=0,l=0,m=0,n=0,o=0,q=0,r=0,s=0,t=0,u=0,v=0,w=0,x=0,y=0,z=0,A=0,B=0,C=0,D=0.0,E=0;i=k[a>>2]|0;if((i+-2|0)>>>0<3){g=k[k[a+108>>2]>>2]|0;h=k[a+100>>2]|0;if((h|0)>0){f=k[a+104>>2]|0;e=0;d=0.0;do{D=+p[g+(e<<3)>>3];d=d+D*+Xb(b,k[f+(e<<2)>>2]|0,a);e=e+1|0}while((e|0)<(h|0))}else d=0.0;D=d-+p[k[a+112>>2]>>3];p[c>>3]=D;D=(i|0)==2?(D>0.0?1.0:-1.0):D;return +D}B=k[a+96>>2]|0;f=k[a+100>>2]|0;C=Ve(f<<3)|0;if((f|0)>0){g=k[a+104>>2]|0;e=0;do{D=+Xb(b,k[g+(e<<2)>>2]|0,a);p[C+(e<<3)>>3]=D;e=e+1|0}while((e|0)!=(f|0))}h=B<<2;A=Ve(h)|0;k[A>>2]=0;y=(B|0)>1;if(y){f=k[a+132>>2]|0;e=1;g=0;do{g=(k[f+(e+-1<<2)>>2]|0)+g|0;k[A+(e<<2)>>2]=g;e=e+1|0}while((e|0)!=(B|0))}z=Ve(h)|0;if((B|0)>0){Kf(z|0,0,h|0)|0;u=a+132|0;v=a+108|0;w=a+112|0;e=0;t=0;x=B;do{x=x+-1|0;f=t;t=t+1|0;do if((t|0)<(B|0)){l=k[A+(f<<2)>>2]|0;q=k[u>>2]|0;m=k[q+(f<<2)>>2]|0;n=k[v>>2]|0;r=k[n+(f<<2)>>2]|0;s=k[w>>2]|0;o=z+(f<<2)|0;if((m|0)>0){b=t;j=e;g=r}else{i=t;b=e;while(1){g=k[A+(i<<2)>>2]|0;h=k[q+(i<<2)>>2]|0;if((h|0)>0){f=0;d=0.0;do{n=f+g|0;d=d+ +p[r+(n<<3)>>3]*+p[C+(n<<3)>>3];f=f+1|0}while((f|0)!=(h|0))}else d=0.0;D=d-+p[s+(b<<3)>>3];p[c+(b<<3)>>3]=D;n=D>0.0?o:z+(i<<2)|0;k[n>>2]=(k[n>>2]|0)+1;i=i+1|0;if((i|0)==(B|0))break;else b=b+1|0}e=e+x|0;break}while(1){h=k[A+(b<<2)>>2]|0;i=k[q+(b<<2)>>2]|0;f=0;d=0.0;do{E=f+l|0;d=d+ +p[g+(E<<3)>>3]*+p[C+(E<<3)>>3];f=f+1|0}while((f|0)!=(m|0));if((i|0)>0){f=0;do{E=f+h|0;d=d+ +p[r+(E<<3)>>3]*+p[C+(E<<3)>>3];f=f+1|0}while((f|0)!=(i|0))}D=d-+p[s+(j<<3)>>3];p[c+(j<<3)>>3]=D;f=D>0.0?o:z+(b<<2)|0;k[f>>2]=(k[f>>2]|0)+1;f=b+1|0;if((f|0)==(B|0))break;g=k[n+(b<<2)>>2]|0;b=f;j=j+1|0}e=e+x|0}while(0)}while((t|0)!=(B|0))}if(y){e=0;f=1;do{e=(k[z+(f<<2)>>2]|0)>(k[z+(e<<2)>>2]|0)?f:e;f=f+1|0}while((f|0)!=(B|0))}else e=0;We(C);We(A);We(z);D=+(k[(k[a+128>>2]|0)+(e<<2)>>2]|0);return +D}function cc(a){a=a|0;var b=0,c=0,d=0;if((k[a+136>>2]|0?(k[a+100>>2]|0)>0:0)?(b=k[a+104>>2]|0,b|0):0)We(k[b>>2]|0);c=a+108|0;b=k[c>>2]|0;if((b|0?(d=a+96|0,(k[d>>2]|0)>1):0)?(We(k[b>>2]|0),((k[d>>2]|0)+-1|0)>1):0){b=1;do{We(k[(k[c>>2]|0)+(b<<2)>>2]|0);b=b+1|0}while((b|0)<((k[d>>2]|0)+-1|0))}d=a+104|0;We(k[d>>2]|0);k[d>>2]=0;We(k[c>>2]|0);k[c>>2]=0;d=a+112|0;We(k[d>>2]|0);k[d>>2]=0;d=a+128|0;We(k[d>>2]|0);k[d>>2]=0;d=a+116|0;We(k[d>>2]|0);k[d>>2]=0;d=a+120|0;We(k[d>>2]|0);k[d>>2]=0;d=a+124|0;We(k[d>>2]|0);k[d>>2]=0;d=a+132|0;We(k[d>>2]|0);k[d>>2]=0;return}function dc(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;var e=0,f=0,g=0,h=0,i=0,j=0.0;Rb(a,k[b>>2]|0,k[b+8>>2]|0,c);k[a>>2]=352;h=k[b>>2]|0;f=af((h|0)>-1?h:-1)|0;k[a+48>>2]=f;Nf(f|0,d|0,h|0)|0;f=$e(28)|0;e=~~(+p[c+32>>3]*1048576.0);k[f>>2]=h;g=Xe(h,16)|0;k[f+8>>2]=g;e=(e>>>2)-(h<<2&1073741820)|0;g=h<<1;k[f+4>>2]=(e|0)>(g|0)?e:g;g=f+12|0;k[g>>2]=g;k[f+16>>2]=g;k[a+52>>2]=f;f=af(h>>>0>536870911?-1:h<<3)|0;g=a+56|0;k[g>>2]=f;if((h|0)<=0)return;e=a+4|0;f=a+8|0;d=0;do{c=k[e>>2]|0;i=k[f>>2]|0;h=a+(i>>1)|0;if(i&1)c=k[(k[h>>2]|0)+c>>2]|0;j=+db[c&7](h,d,d);p[(k[g>>2]|0)+(d<<3)>>3]=j;d=d+1|0}while((d|0)<(k[b>>2]|0));return}function ec(a){a=a|0;var b=0,c=0,d=0;k[a>>2]=352;b=k[a+48>>2]|0;if(b|0)cf(b);c=k[a+52>>2]|0;if(c|0){d=c+12|0;b=k[c+16>>2]|0;if((b|0)!=(d|0))do{We(k[b+8>>2]|0);b=k[b+4>>2]|0}while((b|0)!=(d|0));We(k[c+8>>2]|0);bf(c)}b=k[a+56>>2]|0;if(b|0)cf(b);k[a>>2]=208;b=k[a+12>>2]|0;if(b|0)cf(b);b=k[a+16>>2]|0;if(!b)return;cf(b);return}function fc(a){a=a|0;za(a|0)|0;Bf()}function gc(a,b,c){a=a|0;b=b|0;c=c|0;var d=0,e=0,f=0,g=0,h=0,i=0,j=0.0;Rb(a,k[b>>2]|0,k[b+8>>2]|0,c);k[a>>2]=324;f=$e(28)|0;h=k[b>>2]|0;e=~~(+p[c+32>>3]*1048576.0);k[f>>2]=h;g=Xe(h,16)|0;k[f+8>>2]=g;e=(e>>>2)-(h<<2&1073741820)|0;g=h<<1;k[f+4>>2]=(e|0)>(g|0)?e:g;g=f+12|0;k[g>>2]=g;k[f+16>>2]=g;k[a+48>>2]=f;f=af(h>>>0>536870911?-1:h<<3)|0;g=a+52|0;k[g>>2]=f;if((h|0)<=0)return;e=a+4|0;f=a+8|0;d=0;do{c=k[e>>2]|0;i=k[f>>2]|0;h=a+(i>>1)|0;if(i&1)c=k[(k[h>>2]|0)+c>>2]|0;j=+db[c&7](h,d,d);p[(k[g>>2]|0)+(d<<3)>>3]=j;d=d+1|0}while((d|0)<(k[b>>2]|0));return}function hc(a){a=a|0;var b=0,c=0,d=0;k[a>>2]=324;c=k[a+48>>2]|0;if(c|0){d=c+12|0;b=k[c+16>>2]|0;if((b|0)!=(d|0))do{We(k[b+8>>2]|0);b=k[b+4>>2]|0}while((b|0)!=(d|0));We(k[c+8>>2]|0);bf(c)}b=k[a+52>>2]|0;if(b|0)cf(b);k[a>>2]=208;b=k[a+12>>2]|0;if(b|0)cf(b);b=k[a+16>>2]|0;if(!b)return;cf(b);return}function ic(a,b,c){a=a|0;b=b|0;c=c|0;var d=0,e=0,f=0,g=0,h=0,j=0,l=0,m=0,n=0.0;Rb(a,k[b>>2]|0,k[b+8>>2]|0,c);k[a>>2]=296;b=k[b>>2]|0;l=a+48|0;k[l>>2]=b;d=$e(28)|0;g=~~(+p[c+32>>3]*1048576.0);k[d>>2]=b;f=Xe(b,16)|0;k[d+8>>2]=f;g=(g>>>2)-(b<<2&1073741820)|0;f=b<<1;k[d+4>>2]=(g|0)>(f|0)?g:f;g=d+12|0;k[g>>2]=g;k[d+16>>2]=g;k[a+52>>2]=d;d=af(f>>>0>536870911?-1:f<<3)|0;g=a+76|0;k[g>>2]=d;d=af((b|0)<0?-1:f)|0;h=a+56|0;k[h>>2]=d;f=af(f>>>0>1073741823?-1:f<<2)|0;j=a+60|0;k[j>>2]=f;if((b|0)<=0){h=b;h=h<<1;j=h<<2;h=h>>>0>1073741823;j=h?-1:j;h=af(j)|0;l=a+68|0;k[l>>2]=h;j=af(j)|0;l=a+72|0;k[l>>2]=j;a=a+64|0;k[a>>2]=0;return}e=a+4|0;f=a+8|0;c=0;b=d;while(1){i[b+c>>0]=1;i[(k[h>>2]|0)+((k[l>>2]|0)+c)>>0]=-1;b=k[j>>2]|0;k[b+(c<<2)>>2]=c;k[b+((k[l>>2]|0)+c<<2)>>2]=c;b=k[e>>2]|0;m=k[f>>2]|0;d=a+(m>>1)|0;if(m&1)b=k[(k[d>>2]|0)+b>>2]|0;n=+db[b&7](d,c,c);m=k[g>>2]|0;p[m+(c<<3)>>3]=n;b=k[l>>2]|0;p[m+(b+c<<3)>>3]=n;c=c+1|0;if((c|0)>=(b|0))break;b=k[h>>2]|0}j=b<<1;l=j<<2;j=j>>>0>1073741823;l=j?-1:l;j=af(l)|0;m=a+68|0;k[m>>2]=j;l=af(l)|0;m=a+72|0;k[m>>2]=l;m=a+64|0;k[m>>2]=0;return}function jc(a){a=a|0;var b=0,c=0,d=0;k[a>>2]=296;c=k[a+52>>2]|0;if(c|0){d=c+12|0;b=k[c+16>>2]|0;if((b|0)!=(d|0))do{We(k[b+8>>2]|0);b=k[b+4>>2]|0}while((b|0)!=(d|0));We(k[c+8>>2]|0);bf(c)}b=k[a+56>>2]|0;if(b|0)cf(b);b=k[a+60>>2]|0;if(b|0)cf(b);b=k[a+68>>2]|0;if(b|0)cf(b);b=k[a+72>>2]|0;if(b|0)cf(b);b=k[a+76>>2]|0;if(b|0)cf(b);k[a>>2]=208;b=k[a+12>>2]|0;if(b|0)cf(b);b=k[a+16>>2]|0;if(!b)return;cf(b);return}function kc(a,b,c){a=a|0;b=b|0;c=c|0;var d=0,e=0,f=0,g=0.0,h=0,j=0,l=0,m=0,n=0,p=0,q=0,r=0,s=0;r=u;u=u+16|0;p=r;q=a+60|0;n=k[(k[q>>2]|0)+(b<<2)>>2]|0;j=a+48|0;l=Pb(k[a+52>>2]|0,n,p,k[j>>2]|0)|0;m=k[j>>2]|0;if((l|0)<(m|0)&(m|0)>0){f=a+4|0;h=a+8|0;l=k[p>>2]|0;e=0;do{d=k[f>>2]|0;s=k[h>>2]|0;m=a+(s>>1)|0;if(s&1)d=k[(k[m>>2]|0)+d>>2]|0;g=+db[d&7](m,n,e);o[l+(e<<2)>>2]=g;e=e+1|0}while((e|0)<(k[j>>2]|0))}h=a+64|0;s=k[h>>2]|0;j=k[a+68+(s<<2)>>2]|0;k[h>>2]=1-s;h=k[a+56>>2]|0;if((c|0)<=0){u=r;return j|0}g=+(i[h+b>>0]|0);f=k[p>>2]|0;e=k[q>>2]|0;d=0;do{o[j+(d<<2)>>2]=g*+(i[h+d>>0]|0)*+o[f+(k[e+(d<<2)>>2]<<2)>>2];d=d+1|0}while((d|0)!=(c|0));u=r;return j|0}function lc(a){a=a|0;return k[a+76>>2]|0}function mc(a,b,c){a=a|0;b=b|0;c=c|0;var d=0.0,e=0,f=0,g=0;e=k[a+56>>2]|0;f=e+b|0;e=e+c|0;g=i[f>>0]|0;i[f>>0]=i[e>>0]|0;i[e>>0]=g;e=k[a+60>>2]|0;g=e+(b<<2)|0;e=e+(c<<2)|0;f=k[g>>2]|0;k[g>>2]=k[e>>2];k[e>>2]=f;a=k[a+76>>2]|0;b=a+(b<<3)|0;c=a+(c<<3)|0;d=+p[b>>3];p[b>>3]=+p[c>>3];p[c>>3]=d;return}function nc(a){a=a|0;jc(a);bf(a);return}function oc(a,b,c){a=a|0;b=b|0;c=c|0;var d=0,e=0,f=0,g=0,h=0,i=0,j=0,l=0,m=0.0;j=u;u=u+16|0;d=j;e=Pb(k[a+48>>2]|0,b,d,c)|0;if((e|0)>=(c|0)){c=k[d>>2]|0;u=j;return c|0}h=a+4|0;i=a+8|0;d=k[d>>2]|0;do{f=k[h>>2]|0;l=k[i>>2]|0;g=a+(l>>1)|0;if(l&1)f=k[(k[g>>2]|0)+f>>2]|0;m=+db[f&7](g,b,e);o[d+(e<<2)>>2]=m;e=e+1|0}while((e|0)!=(c|0));u=j;return d|0}function pc(a){a=a|0;return k[a+52>>2]|0}function qc(a,b,c){a=a|0;b=b|0;c=c|0;var d=0,e=0,f=0,g=0.0;Qb(k[a+48>>2]|0,b,c);f=k[a+12>>2]|0;e=f+(b<<2)|0;f=f+(c<<2)|0;d=k[e>>2]|0;k[e>>2]=k[f>>2];k[f>>2]=d;f=k[a+16>>2]|0;d=f+(b<<3)|0;e=f+(c<<3)|0;if(f|0){g=+p[d>>3];p[d>>3]=+p[e>>3];p[e>>3]=g}f=k[a+52>>2]|0;e=f+(b<<3)|0;f=f+(c<<3)|0;g=+p[e>>3];p[e>>3]=+p[f>>3];p[f>>3]=g;return}function rc(a){a=a|0;hc(a);bf(a);return}function sc(a,b,c){a=a|0;b=b|0;c=c|0;var d=0,e=0,f=0,g=0.0,h=0,j=0,l=0,m=0,n=0,p=0;n=u;u=u+16|0;d=n;e=Pb(k[a+52>>2]|0,b,d,c)|0;if((e|0)>=(c|0)){m=k[d>>2]|0;u=n;return m|0}m=a+48|0;j=a+4|0;l=a+8|0;d=k[d>>2]|0;do{f=k[m>>2]|0;g=+($(i[f+e>>0]|0,i[f+b>>0]|0)|0);f=k[j>>2]|0;p=k[l>>2]|0;h=a+(p>>1)|0;if(p&1)f=k[(k[h>>2]|0)+f>>2]|0;g=g*+db[f&7](h,b,e);o[d+(e<<2)>>2]=g;e=e+1|0}while((e|0)!=(c|0));u=n;return d|0}function tc(a){a=a|0;return k[a+56>>2]|0}function uc(a,b,c){a=a|0;b=b|0;c=c|0;var d=0,e=0,f=0,g=0.0;Qb(k[a+52>>2]|0,b,c);f=k[a+12>>2]|0;e=f+(b<<2)|0;f=f+(c<<2)|0;d=k[e>>2]|0;k[e>>2]=k[f>>2];k[f>>2]=d;f=k[a+16>>2]|0;d=f+(b<<3)|0;e=f+(c<<3)|0;if(f|0){g=+p[d>>3];p[d>>3]=+p[e>>3];p[e>>3]=g}f=k[a+48>>2]|0;d=f+b|0;f=f+c|0;e=i[d>>0]|0;i[d>>0]=i[f>>0]|0;i[f>>0]=e;f=k[a+56>>2]|0;e=f+(b<<3)|0;f=f+(c<<3)|0;g=+p[e>>3];p[e>>3]=+p[f>>3];p[f>>3]=g;return}function vc(a){a=a|0;ec(a);bf(a);return}function wc(a,b,c){a=a|0;b=b|0;c=c|0;var d=0,e=0,f=0.0,g=0,h=0.0,i=0.0,j=0.0,l=0,m=0,n=0,o=0,q=0,r=0,s=0,t=0,v=0.0,w=0,x=0,y=0,z=0,A=0,B=0;B=u;u=u+16|0;w=B;e=k[a>>2]|0;if((e>>>0<2?(s=a+116|0,k[s>>2]|0):0)?(t=a+120|0,k[t>>2]|0):0){z=k[a+96>>2]|0;g=z+-1|0;A=Ve((($(g,z)|0)/2|0)<<3)|0;+bc(a,b,A);r=z<<2;y=Ve(r)|0;x=(z|0)>0;if(x){e=z<<3;d=0;do{q=Ve(e)|0;k[y+(d<<2)>>2]=q;d=d+1|0}while((d|0)!=(z|0));if(x){d=0;q=0;while(1){l=q;q=q+1|0;if((q|0)<(z|0)){m=k[s>>2]|0;n=k[t>>2]|0;o=k[y+(l<<2)>>2]|0;e=q;b=d;while(1){f=+p[A+(b<<3)>>3]*+p[m+(b<<3)>>3]+ +p[n+(b<<3)>>3];if(!(f>=0.0)){h=1.0;f=+Y(+f)}else{f=+Y(+-f);h=f}v=h/(f+1.0);v=v>1.0e-07?v:1.0e-07;v=v<.9999999?v:.9999999;p[o+(e<<3)>>3]=v;p[(k[y+(e<<2)>>2]|0)+(l<<3)>>3]=1.0-v;e=e+1|0;if((e|0)==(z|0))break;else b=b+1|0}d=d+g|0}if((q|0)==(z|0))break;else g=g+-1|0}if((z|0)==2){p[c>>3]=+p[(k[y>>2]|0)+8>>3];p[c+8>>3]=+p[k[y+4>>2]>>3];e=0;d=1;s=46}else s=18}else s=18}else s=18;if((s|0)==18){o=(z|0)>100?z:100;q=Ve(r)|0;n=z<<3;r=Ve(n)|0;f=+(z|0);v=.005/f;a:do if(x){f=1.0/f;m=0;do{p[c+(m<<3)>>3]=f;g=Ve(n)|0;k[q+(m<<2)>>2]=g;l=g+(m<<3)|0;p[l>>3]=0.0;if((m|0)>0?(j=+p[(k[y>>2]|0)+(m<<3)>>3],p[l>>3]=j*j+0.0,p[g>>3]=+p[(k[q>>2]|0)+(m<<3)>>3],(m|0)!=1):0){d=1;do{j=+p[(k[y+(d<<2)>>2]|0)+(m<<3)>>3];p[l>>3]=j*j+ +p[l>>3];p[g+(d<<3)>>3]=+p[(k[q+(d<<2)>>2]|0)+(m<<3)>>3];d=d+1|0}while((d|0)!=(m|0))}b=m;m=m+1|0;if((m|0)<(z|0)){e=k[y+(b<<2)>>2]|0;d=m;do{t=(k[y+(d<<2)>>2]|0)+(b<<3)|0;j=+p[t>>3];p[l>>3]=j*j+ +p[l>>3];p[g+(d<<3)>>3]=-(+p[t>>3]*+p[e+(d<<3)>>3]);d=d+1|0}while((d|0)!=(z|0))}}while((m|0)!=(z|0));if((o|0)>0){l=0;while(1){h=0.0;d=0;do{b=r+(d<<3)|0;p[b>>3]=0.0;g=k[q+(d<<2)>>2]|0;e=0;f=0.0;do{f=f+ +p[g+(e<<3)>>3]*+p[c+(e<<3)>>3];e=e+1|0}while((e|0)!=(z|0));p[b>>3]=f;h=h+f*+p[c+(d<<3)>>3];d=d+1|0}while((d|0)!=(z|0));f=0.0;d=0;do{j=+O(+(+p[r+(d<<3)>>3]-h));f=j>f?j:f;d=d+1|0}while((d|0)!=(z|0));if(f<v)break a;else{f=h;e=0}while(1){i=+p[r+(e<<3)>>3];b=k[q+(e<<2)>>2]|0;d=b+(e<<3)|0;h=(f-i)/+p[d>>3];t=c+(e<<3)|0;p[t>>3]=+p[t>>3]+h;i=h*(i*2.0+h*+p[d>>3]);j=h+1.0;d=0;do{t=r+(d<<3)|0;p[t>>3]=(+p[t>>3]+h*+p[b+(d<<3)>>3])/j;t=c+(d<<3)|0;p[t>>3]=+p[t>>3]/j;d=d+1|0}while((d|0)!=(z|0));e=e+1|0;if((e|0)==(z|0))break;else f=(f+i)/j/j}l=l+1|0;if((l|0)>=(o|0)){s=41;break}}}else s=41}else{e=v>0.0;d=0;while(1){if(e)break a;d=d+1|0;if((d|0)>=(o|0)){s=41;break}}}while(0);if((s|0)==41)Jb(2203,w);if(x){d=0;do{We(k[q+(d<<2)>>2]|0);d=d+1|0}while((d|0)!=(z|0))}We(q);We(r);if((z|0)>1){e=0;d=1;s=46}else e=0}if((s|0)==46)while(1){e=+p[c+(d<<3)>>3]>+p[c+(e<<3)>>3]?d:e;d=d+1|0;if((d|0)==(z|0))break;else s=46}if(x){d=0;do{We(k[y+(d<<2)>>2]|0);d=d+1|0}while((d|0)!=(z|0))}We(A);We(y);v=+(k[(k[a+128>>2]|0)+(e<<2)>>2]|0);u=B;return +v}d=k[a+96>>2]|0;if((e+-2|0)>>>0<3)d=8;else d=(($(d+-1|0,d)|0)/2|0)<<3;A=Ve(d)|0;v=+bc(a,b,A);We(A);u=B;return +v}function xc(a){a=a|0;return k[a+96>>2]|0}function yc(a,b){a=a|0;b=b|0;var c=0,d=0.0;c=k[a+96>>2]|0;if(((k[a>>2]|0)+-2|0)>>>0<3)c=8;else c=(($(c+-1|0,c)|0)/2|0)<<3;c=Ve(c)|0;d=+bc(a,b,c);We(c);return +d}function zc(a){a=a|0;var b=0;if(!a)return;b=k[a>>2]|0;if(!b)return;cc(b);We(k[a>>2]|0);k[a>>2]=0;return}function Ac(a){a=a|0;return k[a>>2]|0}function Bc(a,b){a=a|0;b=b|0;var c=0,d=0;d=k[a+128>>2]|0;if(!d)return;c=a+96|0;if((k[c>>2]|0)>0)a=0;else return;do{k[b+(a<<2)>>2]=k[d+(a<<2)>>2];a=a+1|0}while((a|0)<(k[c>>2]|0));return}function Cc(a,b){a=a|0;b=b|0;var c=0,d=0;d=k[a+124>>2]|0;if(!d)return;c=a+100|0;if((k[c>>2]|0)>0)a=0;else return;do{k[b+(a<<2)>>2]=k[d+(a<<2)>>2];a=a+1|0}while((a|0)<(k[c>>2]|0));return}function Dc(a){a=a|0;return k[a+100>>2]|0}function Ec(a,b){a=a|0;b=b|0;var c=0,d=0,e=0,f=0,g=0,h=0,i=0,j=0,l=0,m=0,n=0,o=0,q=0,r=0,s=0,t=0,v=0,w=0,x=0,y=0,z=0,A=0,B=0.0;A=u;u=u+160|0;s=A+136|0;r=A+128|0;w=A+120|0;v=A+112|0;t=A+96|0;o=A+88|0;n=A+80|0;m=A+72|0;l=A+64|0;j=A+56|0;i=A+48|0;h=A+40|0;g=A+32|0;f=A+24|0;e=A+16|0;d=A+8|0;c=A;z=te(a,2240)|0;if(!z){u=A;return -1}a=Se(6,0)|0;if(!a)y=0;else y=Je(a)|0;Se(6,5502)|0;k[c>>2]=k[372+(k[b>>2]<<2)>>2];Ae(z,2242,c)|0;x=b+4|0;k[d>>2]=k[396+(k[x>>2]<<2)>>2];Ae(z,2255,d)|0;a=k[x>>2]|0;if((a|0)==1){k[e>>2]=k[b+8>>2];Ae(z,2271,e)|0;a=k[x>>2]|0}if((a+-1|0)>>>0<3){p[f>>3]=+p[b+16>>3];Ae(z,2282,f)|0;a=k[x>>2]|0}switch(a|0){case 3:case 1:{p[g>>3]=+p[b+24>>3];Ae(z,2292,g)|0;break}default:{}}g=k[b+96>>2]|0;q=k[b+100>>2]|0;k[h>>2]=g;Ae(z,2302,h)|0;k[i>>2]=q;Ae(z,2315,i)|0;ke(2328,3,1,z)|0;h=g+-1|0;d=$(h,g)|0;e=(d|0)/2|0;d=(d|0)>1;if(d){c=b+112|0;a=0;do{p[j>>3]=+p[(k[c>>2]|0)+(a<<3)>>3];Ae(z,2332,j)|0;a=a+1|0}while((a|0)<(e|0))}de(10,z)|0;c=b+128|0;if(k[c>>2]|0){ke(2336,5,1,z)|0;if((g|0)>0){a=0;do{k[l>>2]=k[(k[c>>2]|0)+(a<<2)>>2];Ae(z,2342,l)|0;a=a+1|0}while((a|0)!=(g|0))}de(10,z)|0}c=b+116|0;if(k[c>>2]|0){ke(2346,5,1,z)|0;if(d){a=0;do{p[m>>3]=+p[(k[c>>2]|0)+(a<<3)>>3];Ae(z,2332,m)|0;a=a+1|0}while((a|0)<(e|0))}de(10,z)|0}c=b+120|0;if(k[c>>2]|0){ke(2352,5,1,z)|0;if(d){a=0;do{p[n>>3]=+p[(k[c>>2]|0)+(a<<3)>>3];Ae(z,2332,n)|0;a=a+1|0}while((a|0)<(e|0))}de(10,z)|0}c=b+132|0;if(k[c>>2]|0){ke(2358,5,1,z)|0;if((g|0)>0){a=0;do{k[o>>2]=k[(k[c>>2]|0)+(a<<2)>>2];Ae(z,2342,o)|0;a=a+1|0}while((a|0)!=(g|0))}de(10,z)|0}ke(2364,3,1,z)|0;e=k[b+108>>2]|0;f=k[b+104>>2]|0;a:do if((q|0)>0){if((g|0)>1)d=0;else{d=0;while(1){c=k[f+(d<<2)>>2]|0;if((k[x>>2]|0)!=4){a=k[c>>2]|0;if((a|0)!=-1)do{B=+p[c+8>>3];k[s>>2]=a;p[s+8>>3]=B;Ae(z,2368,s)|0;c=c+16|0;a=k[c>>2]|0}while((a|0)!=-1)}else{k[r>>2]=~~+p[c+8>>3];Ae(z,2377,r)|0}de(10,z)|0;d=d+1|0;if((d|0)==(q|0))break a}}do{a=0;do{p[w>>3]=+p[(k[e+(a<<2)>>2]|0)+(d<<3)>>3];Ae(z,2383,w)|0;a=a+1|0}while((a|0)!=(h|0));c=k[f+(d<<2)>>2]|0;if((k[x>>2]|0)!=4){a=k[c>>2]|0;if((a|0)!=-1)do{B=+p[c+8>>3];k[t>>2]=a;p[t+8>>3]=B;Ae(z,2368,t)|0;c=c+16|0;a=k[c>>2]|0}while((a|0)!=-1)}else{k[v>>2]=~~+p[c+8>>3];Ae(z,2377,v)|0}de(10,z)|0;d=d+1|0}while((d|0)!=(q|0))}while(0);Se(6,y)|0;We(y);if(!(le(z)|0)){z=((Ee(z)|0)!=0)<<31>>31;u=A;return z|0}else{u=A;return -1}return 0}function Fc(a,b){a=a|0;b=b|0;var c=0,d=0,e=0,f=0,g=0,h=0,i=0,j=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,v=0,w=0,x=0,y=0,z=0,A=0,B=0,C=0,D=0,E=0,F=0,G=0,H=0,I=0,J=0,K=0,L=0,M=0;L=u;u=u+240|0;K=L+152|0;H=L+144|0;G=L+136|0;F=L+128|0;E=L+120|0;D=L+112|0;B=L+104|0;A=L+96|0;z=L+88|0;y=L+80|0;x=L+72|0;w=L+64|0;v=L+56|0;t=L+48|0;s=L+40|0;r=L+32|0;I=L+24|0;C=L+16|0;q=L+8|0;p=L;J=L+156|0;k[b+56>>2]=0;k[b+60>>2]=0;k[b+64>>2]=0;k[p>>2]=J;if((me(a,2474,p)|0)!=1){K=0;u=L;return K|0}o=b+4|0;p=b+8|0;e=b+16|0;f=b+24|0;g=b+96|0;h=b+100|0;i=b+112|0;j=b+128|0;l=b+116|0;m=b+120|0;n=b+132|0;a:while(1){b:do if(fd(J,2479)|0){if(!(fd(J,2488)|0)){k[C>>2]=J;if((me(a,2474,C)|0)!=1){c=0;d=52;break a}if(fd(2390,J)|0)if(fd(2397,J)|0)if(fd(2408,J)|0)if(fd(2412,J)|0)if(!(fd(2420,J)|0))c=4;else{d=56;break a}else c=3;else c=2;else c=1;else c=0;k[o>>2]=c;break}if(!(fd(J,2500)|0)){k[I>>2]=p;if((me(a,2507,I)|0)==1)break;else{c=0;d=52;break a}}if(!(fd(J,2510)|0)){k[r>>2]=e;if((me(a,2516,r)|0)==1)break;else{c=0;d=52;break a}}if(!(fd(J,2520)|0)){k[s>>2]=f;if((me(a,2516,s)|0)==1)break;else{c=0;d=52;break a}}if(!(fd(J,2526)|0)){k[t>>2]=g;if((me(a,2507,t)|0)==1)break;else{c=0;d=52;break a}}if(!(fd(J,2535)|0)){k[v>>2]=h;if((me(a,2507,v)|0)==1)break;else{c=0;d=52;break a}}if(!(fd(J,2328)|0)){M=k[g>>2]|0;M=$(M+-1|0,M)|0;d=(M|0)/2|0;c=Ve(d<<3)|0;k[i>>2]=c;if((M|0)<=1)break;k[x>>2]=c;if((me(a,2516,x)|0)==1)c=1;else{c=0;d=52;break a}while(1){if((c|0)>=(d|0))break b;k[y>>2]=(k[i>>2]|0)+(c<<3);if((me(a,2516,y)|0)==1)c=c+1|0;else{c=0;d=52;break a}}}if(!(fd(J,2336)|0)){d=k[g>>2]|0;c=Ve(d<<2)|0;k[j>>2]=c;if((d|0)<=0)break;k[z>>2]=c;if((me(a,2507,z)|0)==1)c=1;else{c=0;d=52;break a}while(1){if((c|0)>=(d|0))break b;k[A>>2]=(k[j>>2]|0)+(c<<2);if((me(a,2507,A)|0)==1)c=c+1|0;else{c=0;d=52;break a}}}if(!(fd(J,2346)|0)){M=k[g>>2]|0;M=$(M+-1|0,M)|0;d=(M|0)/2|0;c=Ve(d<<3)|0;k[l>>2]=c;if((M|0)<=1)break;k[B>>2]=c;if((me(a,2516,B)|0)==1)c=1;else{c=0;d=52;break a}while(1){if((c|0)>=(d|0))break b;k[D>>2]=(k[l>>2]|0)+(c<<3);if((me(a,2516,D)|0)==1)c=c+1|0;else{c=0;d=52;break a}}}if(!(fd(J,2352)|0)){M=k[g>>2]|0;M=$(M+-1|0,M)|0;d=(M|0)/2|0;c=Ve(d<<3)|0;k[m>>2]=c;if((M|0)<=1)break;k[E>>2]=c;if((me(a,2516,E)|0)==1)c=1;else{c=0;d=52;break a}while(1){if((c|0)>=(d|0))break b;k[F>>2]=(k[m>>2]|0)+(c<<3);if((me(a,2516,F)|0)==1)c=c+1|0;else{c=0;d=52;break a}}}if(fd(J,2358)|0){d=49;break a}d=k[g>>2]|0;c=Ve(d<<2)|0;k[n>>2]=c;if((d|0)>0){k[G>>2]=c;if((me(a,2507,G)|0)==1)c=1;else{c=0;d=52;break a}while(1){if((c|0)>=(d|0))break b;k[H>>2]=(k[n>>2]|0)+(c<<2);if((me(a,2507,H)|0)==1)c=c+1|0;else{c=0;d=52;break a}}}}else{k[q>>2]=J;if((me(a,2474,q)|0)!=1){c=0;d=52;break a}if(fd(2432,J)|0)if(fd(2438,J)|0)if(fd(2445,J)|0)if(fd(2455,J)|0)if(!(fd(2467,J)|0))c=4;else{d=60;break a}else c=3;else c=2;else c=1;else c=0;k[b>>2]=c}while(0);k[w>>2]=J;if((me(a,2474,w)|0)!=1){c=0;d=52;break}}if((d|0)==49)if(!(fd(J,2544)|0)){c:while(1)switch(Le(a)|0){case 10:case -1:{c=1;break c}default:{}}u=L;return c|0}else{M=k[105]|0;k[K>>2]=J;Ae(M,2547,K)|0;M=0;u=L;return M|0}else if((d|0)==52){u=L;return c|0}else if((d|0)==56){ke(2581,25,1,k[105]|0)|0;M=0;u=L;return M|0}else if((d|0)==60){ke(2607,18,1,k[105]|0)|0;M=0;u=L;return M|0}return 0}function Gc(a){a=a|0;var b=0,c=0,d=0,e=0,f=0,g=0,h=0,i=0,j=0,l=0,m=0,n=0,o=0,q=0.0,r=0;o=u;u=u+16|0;n=o;m=te(a,2626)|0;if(!m){n=0;u=o;return n|0}a=Se(6,0)|0;if(!a)l=0;else l=Je(a)|0;Se(6,5502)|0;a=Ve(144)|0;b=a+112|0;k[b>>2]=0;k[b+4>>2]=0;k[b+8>>2]=0;k[b+12>>2]=0;k[b+16>>2]=0;k[b+20>>2]=0;if(!(Fc(m,a)|0)){ke(2629,35,1,k[105]|0)|0;Se(6,l)|0;We(l);We(k[b>>2]|0);We(k[a+128>>2]|0);We(k[a+132>>2]|0);We(a);n=0;u=o;return n|0}c=ie(m)|0;k[1514]=1024;j=Ve(1024)|0;k[1515]=j;if(!(Hc(m)|0))b=0;else{b=0;do{Ue(k[1515]|0,2665)|0;while(1)if(!(Ue(0,2665)|0))break;else b=b+1|0}while((Hc(m)|0)!=0)}i=a+100|0;d=(k[i>>2]|0)+b|0;Ke(m,c,0)|0;h=k[a+96>>2]|0;f=h+-1|0;i=k[i>>2]|0;b=Ve(f<<2)|0;j=a+108|0;k[j>>2]=b;if((h|0)>1?(e=i<<3,h=Ve(e)|0,k[b>>2]=h,(f|0)!=1):0){b=1;do{h=k[j>>2]|0;g=Ve(e)|0;k[h+(b<<2)>>2]=g;b=b+1|0}while((b|0)!=(f|0))}g=Ve(i<<2)|0;h=a+104|0;k[h>>2]=g;a:do if((i|0)>0){g=Ve(d<<4)|0;if((f|0)>1){b=0;e=0}else{b=0;e=0;while(1){Hc(m)|0;k[(k[h>>2]|0)+(e<<2)>>2]=g+(b<<4);q=+Rd(Ue(k[1515]|0,2667)|0,n);p[(k[k[j>>2]>>2]|0)+(e<<3)>>3]=q;c=Ue(0,2665)|0;d=Ue(0,2667)|0;if(d)do{f=Yd(c,n,10)|0;k[g+(b<<4)>>2]=f;q=+Rd(d,n);p[g+(b<<4)+8>>3]=q;b=b+1|0;c=Ue(0,2665)|0;d=Ue(0,2667)|0}while((d|0)!=0);k[g+(b<<4)>>2]=-1;e=e+1|0;if((e|0)==(i|0))break a;else b=b+1|0}}while(1){Hc(m)|0;k[(k[h>>2]|0)+(e<<2)>>2]=g+(b<<4);q=+Rd(Ue(k[1515]|0,2667)|0,n);p[(k[k[j>>2]>>2]|0)+(e<<3)>>3]=q;c=1;do{q=+Rd(Ue(0,2667)|0,n);p[(k[(k[j>>2]|0)+(c<<2)>>2]|0)+(e<<3)>>3]=q;c=c+1|0}while((c|0)!=(f|0));d=Ue(0,2665)|0;c=Ue(0,2667)|0;if(c)do{r=Yd(d,n,10)|0;k[g+(b<<4)>>2]=r;q=+Rd(c,n);p[g+(b<<4)+8>>3]=q;b=b+1|0;d=Ue(0,2665)|0;c=Ue(0,2667)|0}while((c|0)!=0);k[g+(b<<4)>>2]=-1;e=e+1|0;if((e|0)==(i|0))break;else b=b+1|0}}while(0);We(k[1515]|0);Se(6,l)|0;We(l);if((le(m)|0)==0?(Ee(m)|0)==0:0)k[a+136>>2]=1;else a=0;r=a;u=o;return r|0}function Hc(a){a=a|0;var b=0,c=0,d=0;if(!(De(k[1515]|0,k[1514]|0,a)|0)){c=0;return c|0}do{b=k[1515]|0;if(Me(b,10)|0){c=5;break}d=k[1514]<<1;k[1514]=d;d=Ye(b,d)|0;k[1515]=d;b=ae(d)|0}while((De(d+b|0,(k[1514]|0)-b|0,a)|0)!=0);if((c|0)==5)return b|0;d=k[1515]|0;return d|0}function Ic(a){a=a|0;We(k[a+60>>2]|0);We(k[a+64>>2]|0);return}function Jc(a){a=a|0;k[64]=(a|0)==0?6:a;return}function Kc(a){a=a|0;var b=0,c=0;b=u;u=u+16|0;c=b;a=Rc(k[a+60>>2]|0)|0;k[c>>2]=a;a=Nc(Na(6,c|0)|0)|0;u=b;return a|0}function Lc(a,b,c){a=a|0;b=b|0;c=c|0;var d=0,e=0,f=0,g=0,h=0,i=0,j=0,l=0,m=0,n=0,o=0;m=u;u=u+48|0;j=m+16|0;f=m;e=m+32|0;h=a+28|0;d=k[h>>2]|0;k[e>>2]=d;i=a+20|0;d=(k[i>>2]|0)-d|0;k[e+4>>2]=d;k[e+8>>2]=b;k[e+12>>2]=c;d=d+c|0;g=a+60|0;k[f>>2]=k[g>>2];k[f+4>>2]=e;k[f+8>>2]=2;f=Nc(Ta(146,f|0)|0)|0;a:do if((d|0)!=(f|0)){b=2;while(1){if((f|0)<0)break;d=d-f|0;o=k[e+4>>2]|0;n=f>>>0>o>>>0;e=n?e+8|0:e;b=(n<<31>>31)+b|0;o=f-(n?o:0)|0;k[e>>2]=(k[e>>2]|0)+o;n=e+4|0;k[n>>2]=(k[n>>2]|0)-o;k[j>>2]=k[g>>2];k[j+4>>2]=e;k[j+8>>2]=b;f=Nc(Ta(146,j|0)|0)|0;if((d|0)==(f|0)){l=3;break a}}k[a+16>>2]=0;k[h>>2]=0;k[i>>2]=0;k[a>>2]=k[a>>2]|32;if((b|0)==2)c=0;else c=c-(k[e+4>>2]|0)|0}else l=3;while(0);if((l|0)==3){o=k[a+44>>2]|0;k[a+16>>2]=o+(k[a+48>>2]|0);k[h>>2]=o;k[i>>2]=o}u=m;return c|0}function Mc(a,b,c){a=a|0;b=b|0;c=c|0;var d=0,e=0,f=0;e=u;u=u+32|0;f=e;d=e+20|0;k[f>>2]=k[a+60>>2];k[f+4>>2]=0;k[f+8>>2]=b;k[f+12>>2]=d;k[f+16>>2]=c;if((Nc(Qa(140,f|0)|0)|0)<0){k[d>>2]=-1;a=-1}else a=k[d>>2]|0;u=e;return a|0}function Nc(a){a=a|0;var b=0;if(a>>>0>4294963200){b=Oc()|0;k[b>>2]=0-a;a=-1}return a|0}function Oc(){return (Pc()|0)+64|0}function Pc(){return Qc()|0}function Qc(){return 548}function Rc(a){a=a|0;return a|0}function Sc(a,b,c){a=a|0;b=b|0;c=c|0;var d=0,e=0,f=0,g=0,h=0,j=0,l=0;j=u;u=u+32|0;d=j;g=j+16|0;k[g>>2]=b;e=g+4|0;h=a+48|0;l=k[h>>2]|0;k[e>>2]=c-((l|0)!=0&1);f=a+44|0;k[g+8>>2]=k[f>>2];k[g+12>>2]=l;k[d>>2]=k[a+60>>2];k[d+4>>2]=g;k[d+8>>2]=2;d=Nc(Sa(145,d|0)|0)|0;if((d|0)>=1){g=k[e>>2]|0;if(d>>>0>g>>>0){e=k[f>>2]|0;f=a+4|0;k[f>>2]=e;k[a+8>>2]=e+(d-g);if(!(k[h>>2]|0))d=c;else{k[f>>2]=e+1;i[b+(c+-1)>>0]=i[e>>0]|0;d=c}}}else k[a>>2]=k[a>>2]|d&48^16;u=j;return d|0}function Tc(a,b,c){a=a|0;b=b|0;c=c|0;var d=0,e=0;e=u;u=u+32|0;d=e;k[a+36>>2]=6;if((k[a>>2]&64|0)==0?(k[d>>2]=k[a+60>>2],k[d+4>>2]=21523,k[d+8>>2]=e+16,Ja(54,d|0)|0):0)i[a+75>>0]=-1;d=Lc(a,b,c)|0;u=e;return d|0}function Uc(){return 6064}function Vc(a){a=+a;var b=0,c=0.0,d=0.0,e=0,f=0.0,g=0,h=0,i=0.0;p[s>>3]=a;b=k[s+4>>2]|0;e=b&2147483647;b=Mf(k[s>>2]|0,b|0,63)|0;do if(e>>>0>1078159481){e=Wc(a)|0;h=M&2147483647;if(!(h>>>0>2146435072|(h|0)==2146435072&e>>>0>0))if(!b)if(a>709.782712893384)a=a*8988465674311579538646525.0e283;else{c=.5;g=12}else a=-1.0}else{if(e>>>0<=1071001154)if(e>>>0<1016070144)break;else{f=0.0;b=0;g=15;break}b=(b|0)!=0;if(e>>>0>=1072734898){c=b?-.5:.5;g=12;break}if(b){b=-1;c=a+.6931471803691238;d=-1.9082149292705877e-10;g=13;break}else{b=1;c=a+-.6931471803691238;d=1.9082149292705877e-10;g=13;break}}while(0);if((g|0)==12){b=~~(a*1.4426950408889634+c);d=+(b|0);c=a-d*.6931471803691238;d=d*1.9082149292705877e-10;g=13}if((g|0)==13){f=c-d;a=f;f=c-f-d;g=15}a:do if((g|0)==15){d=a*.5;c=a*d;i=c*(c*(c*(c*(4.008217827329362e-06-c*2.0109921818362437e-07)+-7.93650757867488e-05)+1.5873015872548146e-03)+-.03333333333333313)+1.0;d=3.0-d*i;d=c*((i-d)/(6.0-a*d));if(!b){a=a-(a*d-c);break}c=a*(d-f)-f-c;switch(b|0){case -1:{a=(a-c)*.5+-.5;break a}case 1:if(a<-.25){a=(c-(a+.5))*-2.0;break a}else{a=(a-c)*2.0+1.0;break a}default:{g=Lf(b+1023|0,0,52)|0;h=M;k[s>>2]=g;k[s+4>>2]=h;d=+p[s>>3];if(b>>>0>56){a=a-c+1.0;a=((b|0)==1024?a*2.0*8988465674311579538646525.0e283:d*a)+-1.0;break a}else{e=Lf(1023-b|0,0,52)|0;g=M;h=(b|0)<20;k[s>>2]=e;k[s+4>>2]=g;i=+p[s>>3];a=d*((h?1.0-i:1.0)+(a-(h?c:i+c)));break a}}}}while(0);return +a}function Wc(a){a=+a;var b=0;p[s>>3]=a;b=k[s>>2]|0;M=k[s+4>>2]|0;return b|0}function Xc(a,b){a=+a;b=b|0;var c=0,d=0;if((b|0)<=1023){if((b|0)<-1022){a=a*2.2250738585072014e-308;c=b+1022|0;d=(c|0)<-1022;b=b+2044|0;a=d?a*2.2250738585072014e-308:a;b=d?((b|0)>-1022?b:-1022):c}}else{a=a*8988465674311579538646525.0e283;d=b+-1023|0;c=(d|0)>1023;b=b+-2046|0;a=c?a*8988465674311579538646525.0e283:a;b=c?((b|0)<1023?b:1023):d}c=Lf(b+1023|0,0,52)|0;d=M;k[s>>2]=c;k[s+4>>2]=d;return +(a*+p[s>>3])}function Yc(a,b){a=+a;b=b|0;return +(+Zc(a,b))}function Zc(a,b){a=+a;b=b|0;var c=0,d=0,e=0;p[s>>3]=a;c=k[s>>2]|0;d=k[s+4>>2]|0;e=Mf(c|0,d|0,52)|0;switch(e&2047){case 0:{if(a!=0.0){a=+Zc(a*18446744073709551616.0,b);c=(k[b>>2]|0)+-64|0}else c=0;k[b>>2]=c;break}case 2047:break;default:{k[b>>2]=(e&2047)+-1022;k[s>>2]=c;k[s+4>>2]=d&-2146435073|1071644672;a=+p[s>>3]}}return +a}function _c(a,b){a=+a;b=+b;return +(+$c(a,b))}function $c(a,b){a=+a;b=+b;var c=0,d=0,e=0,f=0,g=0,h=0,i=0,j=0,l=0,m=0,n=0,o=0;p[s>>3]=a;g=k[s>>2]|0;i=k[s+4>>2]|0;p[s>>3]=b;l=k[s>>2]|0;m=k[s+4>>2]|0;d=Mf(g|0,i|0,52)|0;d=d&2047;j=Mf(l|0,m|0,52)|0;j=j&2047;n=i&-2147483648;f=Lf(l|0,m|0,1)|0;h=M;a:do if(!((f|0)==0&(h|0)==0)?(e=ad(b)|0,c=M&2147483647,!((d|0)==2047|(c>>>0>2146435072|(c|0)==2146435072&e>>>0>0))):0){c=Lf(g|0,i|0,1)|0;e=M;if(!(e>>>0>h>>>0|(e|0)==(h|0)&c>>>0>f>>>0))return +((c|0)==(f|0)&(e|0)==(h|0)?a*0.0:a);if(!d){c=Lf(g|0,i|0,12)|0;e=M;if((e|0)>-1|(e|0)==-1&c>>>0>4294967295){d=0;do{d=d+-1|0;c=Lf(c|0,e|0,1)|0;e=M}while((e|0)>-1|(e|0)==-1&c>>>0>4294967295)}else d=0;g=Lf(g|0,i|0,1-d|0)|0;f=M}else f=i&1048575|1048576;if(!j){e=Lf(l|0,m|0,12)|0;h=M;if((h|0)>-1|(h|0)==-1&e>>>0>4294967295){c=0;do{c=c+-1|0;e=Lf(e|0,h|0,1)|0;h=M}while((h|0)>-1|(h|0)==-1&e>>>0>4294967295)}else c=0;l=Lf(l|0,m|0,1-c|0)|0;j=c;i=M}else i=m&1048575|1048576;e=If(g|0,f|0,l|0,i|0)|0;c=M;h=(c|0)>-1|(c|0)==-1&e>>>0>4294967295;b:do if((d|0)>(j|0)){while(1){if(h){if((e|0)==0&(c|0)==0)break}else{e=g;c=f}g=Lf(e|0,c|0,1)|0;f=M;d=d+-1|0;e=If(g|0,f|0,l|0,i|0)|0;c=M;h=(c|0)>-1|(c|0)==-1&e>>>0>4294967295;if((d|0)<=(j|0))break b}b=a*0.0;break a}while(0);if(h){if((e|0)==0&(c|0)==0){b=a*0.0;break}}else{c=f;e=g}if(c>>>0<1048576|(c|0)==1048576&e>>>0<0)do{e=Lf(e|0,c|0,1)|0;c=M;d=d+-1|0}while(c>>>0<1048576|(c|0)==1048576&e>>>0<0);if((d|0)>0){m=Jf(e|0,c|0,0,-1048576)|0;c=M;d=Lf(d|0,0,52)|0;c=c|M;d=m|d}else{d=Mf(e|0,c|0,1-d|0)|0;c=M}k[s>>2]=d;k[s+4>>2]=c|n;b=+p[s>>3]}else o=3;while(0);if((o|0)==3){b=a*b;b=b/b}return +b}function ad(a){a=+a;var b=0;p[s>>3]=a;b=k[s>>2]|0;M=k[s+4>>2]|0;return b|0}function bd(a,b){a=+a;b=+b;var c=0,d=0;p[s>>3]=a;d=k[s>>2]|0;c=k[s+4>>2]|0;p[s>>3]=b;c=k[s+4>>2]&-2147483648|c&2147483647;k[s>>2]=d;k[s+4>>2]=c;return +(+p[s>>3])}function cd(a,b){a=+a;b=b|0;return +(+Xc(a,b))}function dd(a){a=+a;var b=0,c=0;p[s>>3]=a;c=k[s+4>>2]|0;b=c&2147483647;k[s>>2]=k[s>>2];k[s+4>>2]=b;a=+p[s>>3];do if(b>>>0>1071748074)if(b>>>0>1077149696){a=1.0-0.0/a;break}else{a=1.0-2.0/(+Vc(a*2.0)+2.0);break}else{if(b>>>0>1070618798){a=+Vc(a*2.0);a=a/(a+2.0);break}if(b>>>0>1048575){a=+Vc(a*-2.0);a=-a/(a+2.0)}}while(0);return +((c|0)<0?-a:a)}function ed(a,b){a=+a;b=+b;return +(+bd(a,b))}function fd(a,b){a=a|0;b=b|0;var c=0,d=0;c=i[a>>0]|0;d=i[b>>0]|0;if(c<<24>>24==0?1:c<<24>>24!=d<<24>>24)a=d;else{do{a=a+1|0;b=b+1|0;c=i[a>>0]|0;d=i[b>>0]|0}while(!(c<<24>>24==0?1:c<<24>>24!=d<<24>>24));a=d}return (c&255)-(a&255)|0}function gd(a,b,c){a=a|0;b=b|0;c=c|0;return hd(a,2147483647,b,c)|0}function hd(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;var e=0,f=0,g=0,h=0,j=0,l=0,m=0;m=u;u=u+128|0;e=m+124|0;l=m;f=l;g=1176;h=f+124|0;do{k[f>>2]=k[g>>2];f=f+4|0;g=g+4|0}while((f|0)<(h|0));if((b+-1|0)>>>0>2147483646)if(!b){a=e;b=1;j=4}else{b=Oc()|0;k[b>>2]=75;b=-1}else j=4;if((j|0)==4){j=-2-a|0;j=b>>>0>j>>>0?j:b;k[l+48>>2]=j;e=l+20|0;k[e>>2]=a;k[l+44>>2]=a;b=a+j|0;a=l+16|0;k[a>>2]=b;k[l+28>>2]=b;b=id(l,c,d)|0;if(j){l=k[e>>2]|0;i[l+(((l|0)==(k[a>>2]|0))<<31>>31)>>0]=0}}u=m;return b|0}function id(a,b,c){a=a|0;b=b|0;c=c|0;var d=0,e=0,f=0,g=0,h=0,j=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0;r=u;u=u+224|0;m=r+120|0;o=r+80|0;p=r;q=r+136|0;d=o;e=d+40|0;do{k[d>>2]=0;d=d+4|0}while((d|0)<(e|0));k[m>>2]=k[c>>2];if((jd(0,b,m,p,o)|0)<0)c=-1;else{if((k[a+76>>2]|0)>-1)n=kd(a)|0;else n=0;c=k[a>>2]|0;l=c&32;if((i[a+74>>0]|0)<1)k[a>>2]=c&-33;d=a+48|0;if(!(k[d>>2]|0)){e=a+44|0;f=k[e>>2]|0;k[e>>2]=q;g=a+28|0;k[g>>2]=q;h=a+20|0;k[h>>2]=q;k[d>>2]=80;j=a+16|0;k[j>>2]=q+80;c=jd(a,b,m,p,o)|0;if(f){Wa[k[a+36>>2]&15](a,0,0)|0;c=(k[h>>2]|0)==0?-1:c;k[e>>2]=f;k[d>>2]=0;k[j>>2]=0;k[g>>2]=0;k[h>>2]=0}}else c=jd(a,b,m,p,o)|0;d=k[a>>2]|0;k[a>>2]=d|l;if(n|0)ld(a);c=(d&32|0)==0?c:-1}u=r;return c|0}function jd(a,b,c,d,e){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;var f=0,g=0,h=0,l=0,m=0,n=0,o=0,q=0,r=0,s=0,t=0,v=0,w=0,x=0,y=0,z=0,A=0,B=0,C=0,D=0,E=0,F=0,G=0;G=u;u=u+64|0;C=G+16|0;D=G;A=G+24|0;E=G+8|0;F=G+20|0;k[C>>2]=b;x=(a|0)!=0;y=A+40|0;z=y;A=A+39|0;B=E+4|0;g=0;f=0;n=0;a:while(1){do if((f|0)>-1)if((g|0)>(2147483647-f|0)){f=Oc()|0;k[f>>2]=75;f=-1;break}else{f=g+f|0;break}while(0);g=i[b>>0]|0;if(!(g<<24>>24)){w=87;break}else h=b;b:while(1){switch(g<<24>>24){case 37:{g=h;w=9;break b}case 0:{g=h;break b}default:{}}v=h+1|0;k[C>>2]=v;g=i[v>>0]|0;h=v}c:do if((w|0)==9)while(1){w=0;if((i[h+1>>0]|0)!=37)break c;g=g+1|0;h=h+2|0;k[C>>2]=h;if((i[h>>0]|0)==37)w=9;else break}while(0);g=g-b|0;if(x)md(a,b,g);if(g|0){b=h;continue}l=h+1|0;g=(i[l>>0]|0)+-48|0;if(g>>>0<10){v=(i[h+2>>0]|0)==36;t=v?g:-1;n=v?1:n;l=v?h+3|0:l}else t=-1;k[C>>2]=l;g=i[l>>0]|0;h=(g<<24>>24)+-32|0;d:do if(h>>>0<32){m=0;o=g;while(1){g=1<<h;if(!(g&75913)){g=o;break d}m=g|m;l=l+1|0;k[C>>2]=l;g=i[l>>0]|0;h=(g<<24>>24)+-32|0;if(h>>>0>=32)break;else o=g}}else m=0;while(0);if(g<<24>>24==42){h=l+1|0;g=(i[h>>0]|0)+-48|0;if(g>>>0<10?(i[l+2>>0]|0)==36:0){k[e+(g<<2)>>2]=10;g=k[d+((i[h>>0]|0)+-48<<3)>>2]|0;n=1;l=l+3|0}else{if(n|0){f=-1;break}if(x){n=(k[c>>2]|0)+(4-1)&~(4-1);g=k[n>>2]|0;k[c>>2]=n+4;n=0;l=h}else{g=0;n=0;l=h}}k[C>>2]=l;v=(g|0)<0;g=v?0-g|0:g;m=v?m|8192:m}else{g=nd(C)|0;if((g|0)<0){f=-1;break}l=k[C>>2]|0}do if((i[l>>0]|0)==46){if((i[l+1>>0]|0)!=42){k[C>>2]=l+1;h=nd(C)|0;l=k[C>>2]|0;break}o=l+2|0;h=(i[o>>0]|0)+-48|0;if(h>>>0<10?(i[l+3>>0]|0)==36:0){k[e+(h<<2)>>2]=10;h=k[d+((i[o>>0]|0)+-48<<3)>>2]|0;l=l+4|0;k[C>>2]=l;break}if(n|0){f=-1;break a}if(x){v=(k[c>>2]|0)+(4-1)&~(4-1);h=k[v>>2]|0;k[c>>2]=v+4}else h=0;k[C>>2]=o;l=o}else h=-1;while(0);s=0;while(1){if(((i[l>>0]|0)+-65|0)>>>0>57){f=-1;break a}v=l+1|0;k[C>>2]=v;o=i[(i[l>>0]|0)+-65+(2670+(s*58|0))>>0]|0;q=o&255;if((q+-1|0)>>>0<8){s=q;l=v}else break}if(!(o<<24>>24)){f=-1;break}r=(t|0)>-1;do if(o<<24>>24==19)if(r){f=-1;break a}else w=49;else{if(r){k[e+(t<<2)>>2]=q;r=d+(t<<3)|0;t=k[r+4>>2]|0;w=D;k[w>>2]=k[r>>2];k[w+4>>2]=t;w=49;break}if(!x){f=0;break a}od(D,q,c)}while(0);if((w|0)==49?(w=0,!x):0){g=0;b=v;continue}l=i[l>>0]|0;l=(s|0)!=0&(l&15|0)==3?l&-33:l;r=m&-65537;t=(m&8192|0)==0?m:r;e:do switch(l|0){case 110:switch((s&255)<<24>>24){case 0:{k[k[D>>2]>>2]=f;g=0;b=v;continue a}case 1:{k[k[D>>2]>>2]=f;g=0;b=v;continue a}case 2:{g=k[D>>2]|0;k[g>>2]=f;k[g+4>>2]=((f|0)<0)<<31>>31;g=0;b=v;continue a}case 3:{j[k[D>>2]>>1]=f;g=0;b=v;continue a}case 4:{i[k[D>>2]>>0]=f;g=0;b=v;continue a}case 6:{k[k[D>>2]>>2]=f;g=0;b=v;continue a}case 7:{g=k[D>>2]|0;k[g>>2]=f;k[g+4>>2]=((f|0)<0)<<31>>31;g=0;b=v;continue a}default:{g=0;b=v;continue a}}case 112:{l=120;h=h>>>0>8?h:8;b=t|8;w=61;break}case 88:case 120:{b=t;w=61;break}case 111:{l=D;b=k[l>>2]|0;l=k[l+4>>2]|0;q=qd(b,l,y)|0;r=z-q|0;m=0;o=3134;h=(t&8|0)==0|(h|0)>(r|0)?h:r+1|0;r=t;w=67;break}case 105:case 100:{l=D;b=k[l>>2]|0;l=k[l+4>>2]|0;if((l|0)<0){b=If(0,0,b|0,l|0)|0;l=M;m=D;k[m>>2]=b;k[m+4>>2]=l;m=1;o=3134;w=66;break e}else{m=(t&2049|0)!=0&1;o=(t&2048|0)==0?((t&1|0)==0?3134:3136):3135;w=66;break e}}case 117:{l=D;m=0;o=3134;b=k[l>>2]|0;l=k[l+4>>2]|0;w=66;break}case 99:{i[A>>0]=k[D>>2];b=A;m=0;o=3134;q=y;l=1;h=r;break}case 109:{l=Oc()|0;l=sd(k[l>>2]|0)|0;w=71;break}case 115:{l=k[D>>2]|0;l=l|0?l:3144;w=71;break}case 67:{k[E>>2]=k[D>>2];k[B>>2]=0;k[D>>2]=E;q=-1;l=E;w=75;break}case 83:{b=k[D>>2]|0;if(!h){ud(a,32,g,0,t);b=0;w=84}else{q=h;l=b;w=75}break}case 65:case 71:case 70:case 69:case 97:case 103:case 102:case 101:{g=wd(a,+p[D>>3],g,h,t,l)|0;b=v;continue a}default:{m=0;o=3134;q=y;l=h;h=t}}while(0);f:do if((w|0)==61){t=D;s=k[t>>2]|0;t=k[t+4>>2]|0;q=pd(s,t,y,l&32)|0;o=(b&8|0)==0|(s|0)==0&(t|0)==0;m=o?0:2;o=o?3134:3134+(l>>4)|0;r=b;b=s;l=t;w=67}else if((w|0)==66){q=rd(b,l,y)|0;r=t;w=67}else if((w|0)==71){w=0;t=td(l,0,h)|0;s=(t|0)==0;b=l;m=0;o=3134;q=s?l+h|0:t;l=s?h:t-l|0;h=r}else if((w|0)==75){w=0;o=l;b=0;h=0;while(1){m=k[o>>2]|0;if(!m)break;h=vd(F,m)|0;if((h|0)<0|h>>>0>(q-b|0)>>>0)break;b=h+b|0;if(q>>>0>b>>>0)o=o+4|0;else break}if((h|0)<0){f=-1;break a}ud(a,32,g,b,t);if(!b){b=0;w=84}else{m=0;while(1){h=k[l>>2]|0;if(!h){w=84;break f}h=vd(F,h)|0;m=h+m|0;if((m|0)>(b|0)){w=84;break f}md(a,F,h);if(m>>>0>=b>>>0){w=84;break}else l=l+4|0}}}while(0);if((w|0)==67){w=0;l=(b|0)!=0|(l|0)!=0;t=(h|0)!=0|l;l=((l^1)&1)+(z-q)|0;b=t?q:y;q=y;l=t?((h|0)>(l|0)?h:l):h;h=(h|0)>-1?r&-65537:r}else if((w|0)==84){w=0;ud(a,32,g,b,t^8192);g=(g|0)>(b|0)?g:b;b=v;continue}s=q-b|0;r=(l|0)<(s|0)?s:l;t=r+m|0;g=(g|0)<(t|0)?t:g;ud(a,32,g,t,h);md(a,o,m);ud(a,48,g,t,h^65536);ud(a,48,r,s,0);md(a,b,s);ud(a,32,g,t,h^8192);b=v}g:do if((w|0)==87)if(!a)if(!n)f=0;else{f=1;while(1){b=k[e+(f<<2)>>2]|0;if(!b)break;od(d+(f<<3)|0,b,c);f=f+1|0;if((f|0)>=10){f=1;break g}}while(1){if(k[e+(f<<2)>>2]|0){f=-1;break g}f=f+1|0;if((f|0)>=10){f=1;break}}}while(0);u=G;return f|0}function kd(a){a=a|0;return 0}function ld(a){a=a|0;return}function md(a,b,c){a=a|0;b=b|0;c=c|0;if(!(k[a>>2]&32))Gd(b,c,a)|0;return}function nd(a){a=a|0;var b=0,c=0,d=0;c=k[a>>2]|0;d=(i[c>>0]|0)+-48|0;if(d>>>0<10){b=0;do{b=d+(b*10|0)|0;c=c+1|0;k[a>>2]=c;d=(i[c>>0]|0)+-48|0}while(d>>>0<10)}else b=0;return b|0}function od(a,b,c){a=a|0;b=b|0;c=c|0;var d=0,e=0,f=0.0;a:do if(b>>>0<=20)do switch(b|0){case 9:{d=(k[c>>2]|0)+(4-1)&~(4-1);b=k[d>>2]|0;k[c>>2]=d+4;k[a>>2]=b;break a}case 10:{d=(k[c>>2]|0)+(4-1)&~(4-1);b=k[d>>2]|0;k[c>>2]=d+4;d=a;k[d>>2]=b;k[d+4>>2]=((b|0)<0)<<31>>31;break a}case 11:{d=(k[c>>2]|0)+(4-1)&~(4-1);b=k[d>>2]|0;k[c>>2]=d+4;d=a;k[d>>2]=b;k[d+4>>2]=0;break a}case 12:{d=(k[c>>2]|0)+(8-1)&~(8-1);b=d;e=k[b>>2]|0;b=k[b+4>>2]|0;k[c>>2]=d+8;d=a;k[d>>2]=e;k[d+4>>2]=b;break a}case 13:{e=(k[c>>2]|0)+(4-1)&~(4-1);d=k[e>>2]|0;k[c>>2]=e+4;d=(d&65535)<<16>>16;e=a;k[e>>2]=d;k[e+4>>2]=((d|0)<0)<<31>>31;break a}case 14:{e=(k[c>>2]|0)+(4-1)&~(4-1);d=k[e>>2]|0;k[c>>2]=e+4;e=a;k[e>>2]=d&65535;k[e+4>>2]=0;break a}case 15:{e=(k[c>>2]|0)+(4-1)&~(4-1);d=k[e>>2]|0;k[c>>2]=e+4;d=(d&255)<<24>>24;e=a;k[e>>2]=d;k[e+4>>2]=((d|0)<0)<<31>>31;break a}case 16:{e=(k[c>>2]|0)+(4-1)&~(4-1);d=k[e>>2]|0;k[c>>2]=e+4;e=a;k[e>>2]=d&255;k[e+4>>2]=0;break a}case 17:{e=(k[c>>2]|0)+(8-1)&~(8-1);f=+p[e>>3];k[c>>2]=e+8;p[a>>3]=f;break a}case 18:{e=(k[c>>2]|0)+(8-1)&~(8-1);f=+p[e>>3];k[c>>2]=e+8;p[a>>3]=f;break a}default:break a}while(0);while(0);return}function pd(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;if(!((a|0)==0&(b|0)==0))do{c=c+-1|0;i[c>>0]=l[3182+(a&15)>>0]|0|d;a=Mf(a|0,b|0,4)|0;b=M}while(!((a|0)==0&(b|0)==0));return c|0}function qd(a,b,c){a=a|0;b=b|0;c=c|0;if(!((a|0)==0&(b|0)==0))do{c=c+-1|0;i[c>>0]=a&7|48;a=Mf(a|0,b|0,3)|0;b=M}while(!((a|0)==0&(b|0)==0));return c|0}function rd(a,b,c){a=a|0;b=b|0;c=c|0;var d=0;if(b>>>0>0|(b|0)==0&a>>>0>4294967295){while(1){d=Uf(a|0,b|0,10,0)|0;c=c+-1|0;i[c>>0]=d&255|48;d=a;a=Qf(a|0,b|0,10,0)|0;if(!(b>>>0>9|(b|0)==9&d>>>0>4294967295))break;else b=M}b=a}else b=a;if(b)while(1){c=c+-1|0;i[c>>0]=(b>>>0)%10|0|48;if(b>>>0<10)break;else b=(b>>>0)/10|0}return c|0}function sd(a){a=a|0;var b=0;b=(Ad()|0)+188|0;return Bd(a,k[b>>2]|0)|0}function td(a,b,c){a=a|0;b=b|0;c=c|0;var d=0,e=0,f=0,g=0;f=b&255;d=(c|0)!=0;a:do if(d&(a&3|0)!=0){e=b&255;while(1){if((i[a>>0]|0)==e<<24>>24){g=6;break a}a=a+1|0;c=c+-1|0;d=(c|0)!=0;if(!(d&(a&3|0)!=0)){g=5;break}}}else g=5;while(0);if((g|0)==5)if(d)g=6;else c=0;b:do if((g|0)==6){e=b&255;if((i[a>>0]|0)!=e<<24>>24){d=$(f,16843009)|0;c:do if(c>>>0>3)while(1){f=k[a>>2]^d;if((f&-2139062144^-2139062144)&f+-16843009|0)break;a=a+4|0;c=c+-4|0;if(c>>>0<=3){g=11;break c}}else g=11;while(0);if((g|0)==11)if(!c){c=0;break}while(1){if((i[a>>0]|0)==e<<24>>24)break b;a=a+1|0;c=c+-1|0;if(!c){c=0;break}}}}while(0);return (c|0?a:0)|0}function ud(a,b,c,d,e){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;var f=0,g=0;g=u;u=u+256|0;f=g;if((c|0)>(d|0)&(e&73728|0)==0){e=c-d|0;Kf(f|0,b|0,(e>>>0<256?e:256)|0)|0;if(e>>>0>255){b=c-d|0;do{md(a,f,256);e=e+-256|0}while(e>>>0>255);e=b&255}md(a,f,e)}u=g;return}function vd(a,b){a=a|0;b=b|0;if(!a)a=0;else a=yd(a,b,0)|0;return a|0}function wd(a,b,c,d,e,f){a=a|0;b=+b;c=c|0;d=d|0;e=e|0;f=f|0;var g=0,h=0,j=0,m=0,n=0,o=0,p=0,q=0.0,r=0,s=0,t=0,v=0,w=0,x=0,y=0,z=0,A=0,B=0,C=0,D=0,E=0,F=0,G=0;G=u;u=u+560|0;j=G+8|0;t=G;F=G+524|0;E=F;m=G+512|0;k[t>>2]=0;D=m+12|0;xd(b)|0;if((M|0)<0){b=-b;B=1;A=3151}else{B=(e&2049|0)!=0&1;A=(e&2048|0)==0?((e&1|0)==0?3152:3157):3154}xd(b)|0;C=M&2146435072;do if(C>>>0<2146435072|(C|0)==2146435072&0<0){q=+Yc(b,t)*2.0;g=q!=0.0;if(g)k[t>>2]=(k[t>>2]|0)+-1;w=f|32;if((w|0)==97){r=f&32;p=(r|0)==0?A:A+9|0;o=B|2;g=12-d|0;do if(!(d>>>0>11|(g|0)==0)){b=8.0;do{g=g+-1|0;b=b*16.0}while((g|0)!=0);if((i[p>>0]|0)==45){b=-(b+(-q-b));break}else{b=q+b-b;break}}else b=q;while(0);h=k[t>>2]|0;g=(h|0)<0?0-h|0:h;g=rd(g,((g|0)<0)<<31>>31,D)|0;if((g|0)==(D|0)){g=m+11|0;i[g>>0]=48}i[g+-1>>0]=(h>>31&2)+43;n=g+-2|0;i[n>>0]=f+15;m=(d|0)<1;j=(e&8|0)==0;g=F;do{C=~~b;h=g+1|0;i[g>>0]=l[3182+C>>0]|r;b=(b-+(C|0))*16.0;if((h-E|0)==1?!(j&(m&b==0.0)):0){i[h>>0]=46;g=g+2|0}else g=h}while(b!=0.0);C=g-E|0;E=D-n|0;D=(d|0)!=0&(C+-2|0)<(d|0)?d+2|0:C;g=E+o+D|0;ud(a,32,c,g,e);md(a,p,o);ud(a,48,c,g,e^65536);md(a,F,C);ud(a,48,D-C|0,0,0);md(a,n,E);ud(a,32,c,g,e^8192);break}h=(d|0)<0?6:d;if(g){g=(k[t>>2]|0)+-28|0;k[t>>2]=g;b=q*268435456.0}else{b=q;g=k[t>>2]|0}C=(g|0)<0?j:j+288|0;j=C;do{y=~~b>>>0;k[j>>2]=y;j=j+4|0;b=(b-+(y>>>0))*1.0e9}while(b!=0.0);if((g|0)>0){m=C;o=j;while(1){n=(g|0)<29?g:29;g=o+-4|0;if(g>>>0>=m>>>0){j=0;do{x=Lf(k[g>>2]|0,0,n|0)|0;x=Jf(x|0,M|0,j|0,0)|0;y=M;v=Uf(x|0,y|0,1e9,0)|0;k[g>>2]=v;j=Qf(x|0,y|0,1e9,0)|0;g=g+-4|0}while(g>>>0>=m>>>0);if(j){m=m+-4|0;k[m>>2]=j}}j=o;while(1){if(j>>>0<=m>>>0)break;g=j+-4|0;if(!(k[g>>2]|0))j=g;else break}g=(k[t>>2]|0)-n|0;k[t>>2]=g;if((g|0)>0)o=j;else break}}else m=C;if((g|0)<0){d=((h+25|0)/9|0)+1|0;s=(w|0)==102;do{r=0-g|0;r=(r|0)<9?r:9;if(m>>>0<j>>>0){n=(1<<r)+-1|0;o=1e9>>>r;p=0;g=m;do{y=k[g>>2]|0;k[g>>2]=(y>>>r)+p;p=$(y&n,o)|0;g=g+4|0}while(g>>>0<j>>>0);g=(k[m>>2]|0)==0?m+4|0:m;if(!p){m=g;g=j}else{k[j>>2]=p;m=g;g=j+4|0}}else{m=(k[m>>2]|0)==0?m+4|0:m;g=j}j=s?C:m;j=(g-j>>2|0)>(d|0)?j+(d<<2)|0:g;g=(k[t>>2]|0)+r|0;k[t>>2]=g}while((g|0)<0);g=m;d=j}else{g=m;d=j}y=C;if(g>>>0<d>>>0){j=(y-g>>2)*9|0;n=k[g>>2]|0;if(n>>>0>=10){m=10;do{m=m*10|0;j=j+1|0}while(n>>>0>=m>>>0)}}else j=0;s=(w|0)==103;v=(h|0)!=0;m=h-((w|0)!=102?j:0)+((v&s)<<31>>31)|0;if((m|0)<(((d-y>>2)*9|0)+-9|0)){m=m+9216|0;r=C+4+(((m|0)/9|0)+-1024<<2)|0;m=((m|0)%9|0)+1|0;if((m|0)<9){n=10;do{n=n*10|0;m=m+1|0}while((m|0)!=9)}else n=10;o=k[r>>2]|0;p=(o>>>0)%(n>>>0)|0;m=(r+4|0)==(d|0);if(!(m&(p|0)==0)){q=(((o>>>0)/(n>>>0)|0)&1|0)==0?9007199254740992.0:9007199254740994.0;x=(n|0)/2|0;b=p>>>0<x>>>0?.5:m&(p|0)==(x|0)?1.0:1.5;if(B){x=(i[A>>0]|0)==45;b=x?-b:b;q=x?-q:q}m=o-p|0;k[r>>2]=m;if(q+b!=q){x=m+n|0;k[r>>2]=x;if(x>>>0>999999999){j=r;while(1){m=j+-4|0;k[j>>2]=0;if(m>>>0<g>>>0){g=g+-4|0;k[g>>2]=0}x=(k[m>>2]|0)+1|0;k[m>>2]=x;if(x>>>0>999999999)j=m;else break}}else m=r;j=(y-g>>2)*9|0;o=k[g>>2]|0;if(o>>>0>=10){n=10;do{n=n*10|0;j=j+1|0}while(o>>>0>=n>>>0)}}else m=r}else m=r;m=m+4|0;m=d>>>0>m>>>0?m:d;x=g}else{m=d;x=g}w=m;while(1){if(w>>>0<=x>>>0){t=0;break}g=w+-4|0;if(!(k[g>>2]|0))w=g;else{t=1;break}}d=0-j|0;do if(s){g=((v^1)&1)+h|0;if((g|0)>(j|0)&(j|0)>-5){n=f+-1|0;h=g+-1-j|0}else{n=f+-2|0;h=g+-1|0}g=e&8;if(!g){if(t?(z=k[w+-4>>2]|0,(z|0)!=0):0)if(!((z>>>0)%10|0)){m=0;g=10;do{g=g*10|0;m=m+1|0}while(!((z>>>0)%(g>>>0)|0|0))}else m=0;else m=9;g=((w-y>>2)*9|0)+-9|0;if((n|32|0)==102){r=g-m|0;r=(r|0)>0?r:0;h=(h|0)<(r|0)?h:r;r=0;break}else{r=g+j-m|0;r=(r|0)>0?r:0;h=(h|0)<(r|0)?h:r;r=0;break}}else r=g}else{n=f;r=e&8}while(0);s=h|r;o=(s|0)!=0&1;p=(n|32|0)==102;if(p){v=0;g=(j|0)>0?j:0}else{g=(j|0)<0?d:j;g=rd(g,((g|0)<0)<<31>>31,D)|0;m=D;if((m-g|0)<2)do{g=g+-1|0;i[g>>0]=48}while((m-g|0)<2);i[g+-1>>0]=(j>>31&2)+43;g=g+-2|0;i[g>>0]=n;v=g;g=m-g|0}g=B+1+h+o+g|0;ud(a,32,c,g,e);md(a,A,B);ud(a,48,c,g,e^65536);if(p){n=x>>>0>C>>>0?C:x;r=F+9|0;o=r;p=F+8|0;m=n;do{j=rd(k[m>>2]|0,0,r)|0;if((m|0)==(n|0)){if((j|0)==(r|0)){i[p>>0]=48;j=p}}else if(j>>>0>F>>>0){Kf(F|0,48,j-E|0)|0;do j=j+-1|0;while(j>>>0>F>>>0)}md(a,j,o-j|0);m=m+4|0}while(m>>>0<=C>>>0);if(s|0)md(a,3198,1);if(m>>>0<w>>>0&(h|0)>0)while(1){j=rd(k[m>>2]|0,0,r)|0;if(j>>>0>F>>>0){Kf(F|0,48,j-E|0)|0;do j=j+-1|0;while(j>>>0>F>>>0)}md(a,j,(h|0)<9?h:9);m=m+4|0;j=h+-9|0;if(!(m>>>0<w>>>0&(h|0)>9)){h=j;break}else h=j}ud(a,48,h+9|0,9,0)}else{s=t?w:x+4|0;if((h|0)>-1){t=F+9|0;r=(r|0)==0;d=t;o=0-E|0;p=F+8|0;n=x;do{j=rd(k[n>>2]|0,0,t)|0;if((j|0)==(t|0)){i[p>>0]=48;j=p}do if((n|0)==(x|0)){m=j+1|0;md(a,j,1);if(r&(h|0)<1){j=m;break}md(a,3198,1);j=m}else{if(j>>>0<=F>>>0)break;Kf(F|0,48,j+o|0)|0;do j=j+-1|0;while(j>>>0>F>>>0)}while(0);E=d-j|0;md(a,j,(h|0)>(E|0)?E:h);h=h-E|0;n=n+4|0}while(n>>>0<s>>>0&(h|0)>-1)}ud(a,48,h+18|0,18,0);md(a,v,D-v|0)}ud(a,32,c,g,e^8192)}else{F=(f&32|0)!=0;g=B+3|0;ud(a,32,c,g,e&-65537);md(a,A,B);md(a,b!=b|0.0!=0.0?(F?5367:3178):F?3170:3174,3);ud(a,32,c,g,e^8192)}while(0);u=G;return ((g|0)<(c|0)?c:g)|0}function xd(a){a=+a;var b=0;p[s>>3]=a;b=k[s>>2]|0;M=k[s+4>>2]|0;return b|0}function yd(a,b,c){a=a|0;b=b|0;c=c|0;do if(a){if(b>>>0<128){i[a>>0]=b;a=1;break}c=(zd()|0)+188|0;if(!(k[k[c>>2]>>2]|0))if((b&-128|0)==57216){i[a>>0]=b;a=1;break}else{a=Oc()|0;k[a>>2]=84;a=-1;break}if(b>>>0<2048){i[a>>0]=b>>>6|192;i[a+1>>0]=b&63|128;a=2;break}if(b>>>0<55296|(b&-8192|0)==57344){i[a>>0]=b>>>12|224;i[a+1>>0]=b>>>6&63|128;i[a+2>>0]=b&63|128;a=3;break}if((b+-65536|0)>>>0<1048576){i[a>>0]=b>>>18|240;i[a+1>>0]=b>>>12&63|128;i[a+2>>0]=b>>>6&63|128;i[a+3>>0]=b&63|128;a=4;break}else{a=Oc()|0;k[a>>2]=84;a=-1;break}}else a=1;while(0);return a|0}function zd(){return Qc()|0}function Ad(){return Qc()|0}function Bd(a,b){a=a|0;b=b|0;var c=0,d=0;d=0;while(1){if((l[3200+d>>0]|0)==(a|0)){a=2;break}c=d+1|0;if((c|0)==87){c=3288;d=87;a=5;break}else d=c}if((a|0)==2)if(!d)c=3288;else{c=3288;a=5}if((a|0)==5)while(1){do{a=c;c=c+1|0}while((i[a>>0]|0)!=0);d=d+-1|0;if(!d)break;else a=5}return Cd(c,k[b+20>>2]|0)|0}function Cd(a,b){a=a|0;b=b|0;return Dd(a,b)|0}function Dd(a,b){a=a|0;b=b|0;if(!b)b=0;else b=Ed(k[b>>2]|0,k[b+4>>2]|0,a)|0;return (b|0?b:a)|0}function Ed(a,b,c){a=a|0;b=b|0;c=c|0;var d=0,e=0,f=0,g=0,h=0,j=0,l=0,m=0,n=0,o=0;o=(k[a>>2]|0)+1794895138|0;f=Fd(k[a+8>>2]|0,o)|0;d=Fd(k[a+12>>2]|0,o)|0;e=Fd(k[a+16>>2]|0,o)|0;a:do if((f>>>0<b>>>2>>>0?(n=b-(f<<2)|0,d>>>0<n>>>0&e>>>0<n>>>0):0)?((e|d)&3|0)==0:0){n=d>>>2;m=e>>>2;l=0;while(1){h=f>>>1;j=l+h|0;g=j<<1;e=g+n|0;d=Fd(k[a+(e<<2)>>2]|0,o)|0;e=Fd(k[a+(e+1<<2)>>2]|0,o)|0;if(!(e>>>0<b>>>0&d>>>0<(b-e|0)>>>0)){d=0;break a}if(i[a+(e+d)>>0]|0){d=0;break a}d=fd(c,a+e|0)|0;if(!d)break;d=(d|0)<0;if((f|0)==1){d=0;break a}else{l=d?l:j;f=d?h:f-h|0}}d=g+m|0;e=Fd(k[a+(d<<2)>>2]|0,o)|0;d=Fd(k[a+(d+1<<2)>>2]|0,o)|0;if(d>>>0<b>>>0&e>>>0<(b-d|0)>>>0)d=(i[a+(d+e)>>0]|0)==0?a+d|0:0;else d=0}else d=0;while(0);return d|0}function Fd(a,b){a=a|0;b=b|0;var c=0;c=Vf(a|0)|0;return ((b|0)==0?a:c)|0}function Gd(a,b,c){a=a|0;b=b|0;c=c|0;var d=0,e=0,f=0,g=0,h=0;d=c+16|0;e=k[d>>2]|0;if(!e)if(!(Hd(c)|0)){e=k[d>>2]|0;f=5}else d=0;else f=5;a:do if((f|0)==5){h=c+20|0;g=k[h>>2]|0;d=g;if((e-g|0)>>>0<b>>>0){d=Wa[k[c+36>>2]&15](c,a,b)|0;break}b:do if((i[c+75>>0]|0)>-1){g=b;while(1){if(!g){f=0;e=a;break b}e=g+-1|0;if((i[a+e>>0]|0)==10)break;else g=e}d=Wa[k[c+36>>2]&15](c,a,g)|0;if(d>>>0<g>>>0)break a;f=g;e=a+g|0;b=b-g|0;d=k[h>>2]|0}else{f=0;e=a}while(0);Nf(d|0,e|0,b|0)|0;k[h>>2]=(k[h>>2]|0)+b;d=f+b|0}while(0);return d|0}function Hd(a){a=a|0;var b=0,c=0;b=a+74|0;c=i[b>>0]|0;i[b>>0]=c+255|c;b=k[a>>2]|0;if(!(b&8)){k[a+8>>2]=0;k[a+4>>2]=0;c=k[a+44>>2]|0;k[a+28>>2]=c;k[a+20>>2]=c;k[a+16>>2]=c+(k[a+48>>2]|0);a=0}else{k[a>>2]=b|32;a=-1}return a|0}function Id(a,b,c){a=a|0;b=b|0;c=c|0;var d=0,e=0;d=a+20|0;e=k[d>>2]|0;a=(k[a+16>>2]|0)-e|0;a=a>>>0>c>>>0?c:a;Nf(e|0,b|0,a|0)|0;k[d>>2]=(k[d>>2]|0)+a;return c|0}function Jd(a,b,c,d,e){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;var f=0,g=0,h=0,i=0;i=u;u=u+128|0;g=i;k[g>>2]=0;h=g+4|0;k[h>>2]=a;k[g+44>>2]=a;f=g+8|0;k[f>>2]=(a|0)<0?-1:a+2147483647|0;k[g+76>>2]=-1;Kd(g,0);c=Ld(g,c,1,d,e)|0;if(b|0)k[b>>2]=a+((k[h>>2]|0)+(k[g+108>>2]|0)-(k[f>>2]|0));u=i;return c|0}function Kd(a,b){a=a|0;b=b|0;var c=0,d=0,e=0;k[a+104>>2]=b;c=k[a+8>>2]|0;d=k[a+4>>2]|0;e=c-d|0;k[a+108>>2]=e;k[a+100>>2]=(b|0)!=0&(e|0)>(b|0)?d+b|0:c;return}function Ld(a,b,c,d,e){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;var f=0,g=0,h=0,j=0,m=0,n=0,o=0,p=0,q=0,r=0;a:do if(b>>>0>36){e=Oc()|0;k[e>>2]=22;e=0;d=0}else{r=a+4|0;q=a+100|0;do{f=k[r>>2]|0;if(f>>>0<(k[q>>2]|0)>>>0){k[r>>2]=f+1;f=l[f>>0]|0}else f=Md(a)|0}while((Nd(f)|0)!=0);b:do switch(f|0){case 43:case 45:{f=((f|0)==45)<<31>>31;g=k[r>>2]|0;if(g>>>0<(k[q>>2]|0)>>>0){k[r>>2]=g+1;p=f;f=l[g>>0]|0;break b}else{p=f;f=Md(a)|0;break b}}default:p=0}while(0);g=(b|0)==0;do if((b|16|0)==16&(f|0)==48){f=k[r>>2]|0;if(f>>>0<(k[q>>2]|0)>>>0){k[r>>2]=f+1;f=l[f>>0]|0}else f=Md(a)|0;if((f|32|0)!=120)if(g){b=8;n=46;break}else{n=32;break}f=k[r>>2]|0;if(f>>>0<(k[q>>2]|0)>>>0){k[r>>2]=f+1;f=l[f>>0]|0}else f=Md(a)|0;if((l[5093+f>>0]|0)>15){d=(k[q>>2]|0)!=0;if(d)k[r>>2]=(k[r>>2]|0)+-1;if(!c){Kd(a,0);e=0;d=0;break a}if(!d){e=0;d=0;break a}k[r>>2]=(k[r>>2]|0)+-1;e=0;d=0;break a}else{b=16;n=46}}else{b=g?10:b;if((l[5093+f>>0]|0)>>>0<b>>>0)n=32;else{if(k[q>>2]|0)k[r>>2]=(k[r>>2]|0)+-1;Kd(a,0);e=Oc()|0;k[e>>2]=22;e=0;d=0;break a}}while(0);c:do if((n|0)==32)if((b|0)==10){b=f+-48|0;if(b>>>0<10){f=0;g=b;do{f=(f*10|0)+g|0;b=k[r>>2]|0;if(b>>>0<(k[q>>2]|0)>>>0){k[r>>2]=b+1;b=l[b>>0]|0}else b=Md(a)|0;g=b+-48|0}while(g>>>0<10&f>>>0<429496729);c=0}else{b=f;f=0;c=0}h=b+-48|0;if(h>>>0<10){g=b;do{b=Sf(f|0,c|0,10,0)|0;j=M;m=((h|0)<0)<<31>>31;o=~m;if(j>>>0>o>>>0|(j|0)==(o|0)&b>>>0>~h>>>0){b=10;n=72;break c}f=Jf(b|0,j|0,h|0,m|0)|0;c=M;b=k[r>>2]|0;if(b>>>0<(k[q>>2]|0)>>>0){k[r>>2]=b+1;g=l[b>>0]|0}else g=Md(a)|0;h=g+-48|0}while(h>>>0<10&(c>>>0<429496729|(c|0)==429496729&f>>>0<2576980378));if(h>>>0>9){g=p;b=c}else{b=10;n=72}}else{g=p;b=c}}else n=46;while(0);d:do if((n|0)==46){if(!(b+-1&b)){n=i[5349+((b*23|0)>>>5&7)>>0]|0;c=i[5093+f>>0]|0;g=c&255;if(g>>>0<b>>>0){f=0;h=g;do{f=h|f<<n;g=k[r>>2]|0;if(g>>>0<(k[q>>2]|0)>>>0){k[r>>2]=g+1;g=l[g>>0]|0}else g=Md(a)|0;c=i[5093+g>>0]|0;h=c&255}while(f>>>0<134217728&h>>>0<b>>>0);h=0}else{g=f;h=0;f=0}j=Mf(-1,-1,n|0)|0;m=M;if((c&255)>>>0>=b>>>0|(h>>>0>m>>>0|(h|0)==(m|0)&f>>>0>j>>>0)){c=h;n=72;break}else g=h;while(1){f=Lf(f|0,g|0,n|0)|0;h=M;f=c&255|f;g=k[r>>2]|0;if(g>>>0<(k[q>>2]|0)>>>0){k[r>>2]=g+1;g=l[g>>0]|0}else g=Md(a)|0;c=i[5093+g>>0]|0;if((c&255)>>>0>=b>>>0|(h>>>0>m>>>0|(h|0)==(m|0)&f>>>0>j>>>0)){c=h;n=72;break d}else g=h}}c=i[5093+f>>0]|0;g=c&255;if(g>>>0<b>>>0){f=0;h=g;do{f=h+($(f,b)|0)|0;g=k[r>>2]|0;if(g>>>0<(k[q>>2]|0)>>>0){k[r>>2]=g+1;g=l[g>>0]|0}else g=Md(a)|0;c=i[5093+g>>0]|0;h=c&255}while(f>>>0<119304647&h>>>0<b>>>0);h=0}else{g=f;f=0;h=0}if((c&255)>>>0<b>>>0){n=Qf(-1,-1,b|0,0)|0;o=M;m=h;while(1){if(m>>>0>o>>>0|(m|0)==(o|0)&f>>>0>n>>>0){c=m;n=72;break d}h=Sf(f|0,m|0,b|0,0)|0;j=M;c=c&255;if(j>>>0>4294967295|(j|0)==-1&h>>>0>~c>>>0){c=m;n=72;break d}f=Jf(c|0,0,h|0,j|0)|0;h=M;g=k[r>>2]|0;if(g>>>0<(k[q>>2]|0)>>>0){k[r>>2]=g+1;g=l[g>>0]|0}else g=Md(a)|0;c=i[5093+g>>0]|0;if((c&255)>>>0>=b>>>0){c=h;n=72;break}else m=h}}else{c=h;n=72}}while(0);if((n|0)==72)if((l[5093+g>>0]|0)>>>0<b>>>0){do{f=k[r>>2]|0;if(f>>>0<(k[q>>2]|0)>>>0){k[r>>2]=f+1;f=l[f>>0]|0}else f=Md(a)|0}while((l[5093+f>>0]|0)>>>0<b>>>0);g=Oc()|0;k[g>>2]=34;g=(d&1|0)==0&0==0?p:0;b=e;f=d}else{g=p;b=c}if(k[q>>2]|0)k[r>>2]=(k[r>>2]|0)+-1;if(!(b>>>0<e>>>0|(b|0)==(e|0)&f>>>0<d>>>0)){if(!((d&1|0)!=0|0!=0|(g|0)!=0)){r=Oc()|0;k[r>>2]=34;d=Jf(d|0,e|0,-1,-1)|0;e=M;break}if(b>>>0>e>>>0|(b|0)==(e|0)&f>>>0>d>>>0){r=Oc()|0;k[r>>2]=34;break}}d=((g|0)<0)<<31>>31;d=If(f^g|0,b^d|0,g|0,d|0)|0;e=M}while(0);M=e;return d|0}function Md(a){a=a|0;var b=0,c=0,d=0,e=0,f=0,g=0,h=0;c=a+104|0;g=k[c>>2]|0;if((g|0)!=0?(k[a+108>>2]|0)>=(g|0):0)h=4;else{b=Od(a)|0;if((b|0)>=0){d=k[c>>2]|0;c=a+8|0;if(d){f=k[c>>2]|0;c=k[a+4>>2]|0;e=a+108|0;d=d-(k[e>>2]|0)|0;g=f;if((f-c|0)<(d|0)){f=g;d=g}else{f=c+(d+-1)|0;d=g}}else{d=k[c>>2]|0;e=a+108|0;f=d;c=k[a+4>>2]|0}k[a+100>>2]=f;if(d|0)k[e>>2]=d+1-c+(k[e>>2]|0);c=c+-1|0;if((l[c>>0]|0|0)!=(b|0))i[c>>0]=b}else h=4}if((h|0)==4){k[a+100>>2]=0;b=-1}return b|0}function Nd(a){a=a|0;return ((a|0)==32|(a+-9|0)>>>0<5)&1|0}function Od(a){a=a|0;var b=0,c=0;c=u;u=u+16|0;b=c;if((Pd(a)|0)==0?(Wa[k[a+32>>2]&15](a,b,1)|0)==1:0)a=l[b>>0]|0;else a=-1;u=c;return a|0}function Pd(a){a=a|0;var b=0,c=0;b=a+74|0;c=i[b>>0]|0;i[b>>0]=c+255|c;b=a+20|0;c=a+28|0;if((k[b>>2]|0)>>>0>(k[c>>2]|0)>>>0)Wa[k[a+36>>2]&15](a,0,0)|0;k[a+16>>2]=0;k[c>>2]=0;k[b>>2]=0;b=k[a>>2]|0;if(!(b&4)){c=(k[a+44>>2]|0)+(k[a+48>>2]|0)|0;k[a+8>>2]=c;k[a+4>>2]=c;b=b<<27>>31}else{k[a>>2]=b|32;b=-1}return b|0}function Qd(a){a=a|0;return +(+Rd(a,0))}function Rd(a,b){a=a|0;b=b|0;return +(+Sd(a,b,1))}function Sd(a,b,c){a=a|0;b=b|0;c=c|0;var d=0.0,e=0,f=0,g=0,h=0;h=u;u=u+128|0;g=h;e=g;f=e+124|0;do{k[e>>2]=0;e=e+4|0}while((e|0)<(f|0));e=g+4|0;k[e>>2]=a;f=g+8|0;k[f>>2]=-1;k[g+44>>2]=a;k[g+76>>2]=-1;Kd(g,0);d=+Td(g,c,1);c=(k[e>>2]|0)-(k[f>>2]|0)+(k[g+108>>2]|0)|0;if(b|0)k[b>>2]=c|0?a+c|0:a;u=h;return +d}function Td(a,b,c){a=a|0;b=b|0;c=c|0;var d=0.0,e=0,f=0,g=0,h=0,j=0,m=0,n=0,o=0;switch(b|0){case 0:{j=-149;m=24;g=4;break}case 1:{j=-1074;m=53;g=4;break}case 2:{j=-1074;m=53;g=4;break}default:d=0.0}a:do if((g|0)==4){o=a+4|0;n=a+100|0;do{b=k[o>>2]|0;if(b>>>0<(k[n>>2]|0)>>>0){k[o>>2]=b+1;b=l[b>>0]|0}else b=Md(a)|0}while((Nd(b)|0)!=0);b:do switch(b|0){case 43:case 45:{f=1-(((b|0)==45&1)<<1)|0;b=k[o>>2]|0;if(b>>>0<(k[n>>2]|0)>>>0){k[o>>2]=b+1;e=l[b>>0]|0;break b}else{e=Md(a)|0;break b}}default:{e=b;f=1}}while(0);b=0;do{if((e|32|0)!=(i[5358+b>>0]|0))break;do if(b>>>0<7){e=k[o>>2]|0;if(e>>>0<(k[n>>2]|0)>>>0){k[o>>2]=e+1;e=l[e>>0]|0;break}else{e=Md(a)|0;break}}while(0);b=b+1|0}while(b>>>0<8);c:do switch(b|0){case 8:break;case 3:{g=23;break}default:{h=(c|0)!=0;if(h&b>>>0>3)if((b|0)==8)break c;else{g=23;break c}d:do if(!b){b=0;do{if((e|32|0)!=(i[5367+b>>0]|0))break d;do if(b>>>0<2){e=k[o>>2]|0;if(e>>>0<(k[n>>2]|0)>>>0){k[o>>2]=e+1;e=l[e>>0]|0;break}else{e=Md(a)|0;break}}while(0);b=b+1|0}while(b>>>0<3)}while(0);switch(b|0){case 3:{b=k[o>>2]|0;if(b>>>0<(k[n>>2]|0)>>>0){k[o>>2]=b+1;b=l[b>>0]|0}else b=Md(a)|0;if((b|0)==40)b=1;else{if(!(k[n>>2]|0)){d=B;break a}k[o>>2]=(k[o>>2]|0)+-1;d=B;break a}while(1){e=k[o>>2]|0;if(e>>>0<(k[n>>2]|0)>>>0){k[o>>2]=e+1;e=l[e>>0]|0}else e=Md(a)|0;if(!((e+-48|0)>>>0<10|(e+-65|0)>>>0<26)?!((e|0)==95|(e+-97|0)>>>0<26):0)break;b=b+1|0}if((e|0)==41){d=B;break a}e=(k[n>>2]|0)==0;if(!e)k[o>>2]=(k[o>>2]|0)+-1;if(!h){o=Oc()|0;k[o>>2]=22;Kd(a,0);d=0.0;break a}if(!b){d=B;break a}while(1){b=b+-1|0;if(!e)k[o>>2]=(k[o>>2]|0)+-1;if(!b){d=B;break a}}}case 0:{if((e|0)==48){b=k[o>>2]|0;if(b>>>0<(k[n>>2]|0)>>>0){k[o>>2]=b+1;b=l[b>>0]|0}else b=Md(a)|0;if((b|32|0)==120){d=+Ud(a,m,j,f,c);break a}if(!(k[n>>2]|0))b=48;else{k[o>>2]=(k[o>>2]|0)+-1;b=48}}else b=e;d=+Vd(a,b,m,j,f,c);break a}default:{if(k[n>>2]|0)k[o>>2]=(k[o>>2]|0)+-1;o=Oc()|0;k[o>>2]=22;Kd(a,0);d=0.0;break a}}}}while(0);if((g|0)==23){e=(k[n>>2]|0)==0;if(!e)k[o>>2]=(k[o>>2]|0)+-1;if((c|0)!=0&b>>>0>3)do{if(!e)k[o>>2]=(k[o>>2]|0)+-1;b=b+-1|0}while(b>>>0>3)}d=+(f|0)*C}while(0);return +d}function Ud(a,b,c,d,e){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;var f=0.0,g=0,h=0,i=0.0,j=0,m=0,n=0,o=0,p=0.0,q=0,r=0,s=0,t=0,u=0,v=0,w=0;w=a+4|0;g=k[w>>2]|0;v=a+100|0;if(g>>>0<(k[v>>2]|0)>>>0){k[w>>2]=g+1;g=l[g>>0]|0;h=0}else{g=Md(a)|0;h=0}a:while(1){switch(g|0){case 46:{n=8;break a}case 48:break;default:{s=0;t=0;p=1.0;f=0.0;u=0;r=h;h=0;q=0;m=0;j=0;break a}}g=k[w>>2]|0;if(g>>>0<(k[v>>2]|0)>>>0){k[w>>2]=g+1;g=l[g>>0]|0;h=1;continue}else{g=Md(a)|0;h=1;continue}}if((n|0)==8){g=k[w>>2]|0;if(g>>>0<(k[v>>2]|0)>>>0){k[w>>2]=g+1;g=l[g>>0]|0}else g=Md(a)|0;if((g|0)==48){j=0;h=0;do{g=k[w>>2]|0;if(g>>>0<(k[v>>2]|0)>>>0){k[w>>2]=g+1;g=l[g>>0]|0}else g=Md(a)|0;j=Jf(j|0,h|0,-1,-1)|0;h=M}while((g|0)==48);s=1;t=0;p=1.0;f=0.0;u=0;r=1;q=0;m=0}else{s=1;t=0;p=1.0;f=0.0;u=0;r=h;h=0;q=0;m=0;j=0}}while(1){n=g+-48|0;o=(g|0)==46;if(n>>>0>=10?!(o|((g|32)+-97|0)>>>0<6):0)break;if(o)if(!s){s=1;n=t;i=p;g=u;j=m;h=q}else{g=46;break}else{g=(g|0)>57?(g|32)+-87|0:n;do if(!((q|0)<0|(q|0)==0&m>>>0<8))if((q|0)<0|(q|0)==0&m>>>0<14){p=p*.0625;n=t;i=p;f=f+p*+(g|0);g=u;break}else{g=(t|0)!=0|(g|0)==0;n=g?t:1;i=p;f=g?f:f+p*.5;g=u;break}else{n=t;i=p;g=g+(u<<4)|0}while(0);m=Jf(m|0,q|0,1,0)|0;r=1;q=M}o=k[w>>2]|0;if(o>>>0<(k[v>>2]|0)>>>0){k[w>>2]=o+1;t=n;p=i;u=g;g=l[o>>0]|0;continue}else{t=n;p=i;u=g;g=Md(a)|0;continue}}do if(!r){g=k[v>>2]|0;h=(g|0)!=0;if(h)k[w>>2]=(k[w>>2]|0)+-1;if(e){if(h)k[w>>2]=(k[w>>2]|0)+-1;if(!((s|0)==0|(g|0)==0))k[w>>2]=(k[w>>2]|0)+-1}else Kd(a,0);f=+(d|0)*0.0}else{n=(s|0)==0;o=n?m:j;n=n?q:h;if((q|0)<0|(q|0)==0&m>>>0<8){h=u;j=q;do{h=h<<4;m=Jf(m|0,j|0,1,0)|0;j=M}while((j|0)<0|(j|0)==0&m>>>0<8);m=h}else m=u;if((g|32|0)==112){h=Wd(a,e)|0;g=M;if((h|0)==0&(g|0)==-2147483648){if(!e){Kd(a,0);f=0.0;break}if(!(k[v>>2]|0)){h=0;g=0}else{k[w>>2]=(k[w>>2]|0)+-1;h=0;g=0}}}else if(!(k[v>>2]|0)){h=0;g=0}else{k[w>>2]=(k[w>>2]|0)+-1;h=0;g=0}j=Lf(o|0,n|0,2)|0;j=Jf(j|0,M|0,-32,-1)|0;j=Jf(j|0,M|0,h|0,g|0)|0;g=M;if(!m){f=+(d|0)*0.0;break}w=0-c|0;e=((w|0)<0)<<31>>31;if((g|0)>(e|0)|(g|0)==(e|0)&j>>>0>w>>>0){b=Oc()|0;k[b>>2]=34;f=+(d|0)*1797693134862315708145274.0e284*1797693134862315708145274.0e284;break}w=c+-106|0;e=((w|0)<0)<<31>>31;if((g|0)<(e|0)|(g|0)==(e|0)&j>>>0<w>>>0){b=Oc()|0;k[b>>2]=34;f=+(d|0)*2.2250738585072014e-308*2.2250738585072014e-308;break}if((m|0)>-1){h=m;do{w=!(f>=.5);h=h<<1|(w^1)&1;f=f+(w?f:f+-1.0);j=Jf(j|0,g|0,-1,-1)|0;g=M}while((h|0)>-1);p=f;m=h}else p=f;w=((b|0)<0)<<31>>31;c=If(32,0,c|0,((c|0)<0)<<31>>31|0)|0;g=Jf(c|0,M|0,j|0,g|0)|0;c=M;if((w|0)>(c|0)|(w|0)==(c|0)&b>>>0>g>>>0)if((g|0)>0)n=59;else{h=0;g=84;n=61}else{g=b;n=59}if((n|0)==59)if((g|0)<53){h=g;g=84-g|0;n=61}else{i=0.0;f=+(d|0)}if((n|0)==61){f=+(d|0);i=+ed(+Xc(1.0,g),f);g=h}d=(m&1|0)==0&(p!=0.0&(g|0)<32);f=f*(d?0.0:p)+(i+f*+(((d&1)+m|0)>>>0))-i;if(!(f!=0.0)){d=Oc()|0;k[d>>2]=34}f=+cd(f,j)}while(0);return +f}function Vd(a,b,c,d,e,f){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;f=f|0;var g=0.0,h=0.0,i=0,j=0,m=0,n=0,o=0,p=0,q=0.0,r=0.0,s=0.0,t=0,v=0,w=0,x=0,y=0,z=0,A=0,B=0,C=0,D=0,E=0,F=0,G=0,H=0,I=0.0;H=u;u=u+512|0;E=H;F=d+c|0;G=0-F|0;B=a+4|0;C=a+100|0;i=0;a:while(1){switch(b|0){case 46:{z=6;break a}case 48:break;default:{v=0;o=i;p=0;n=0;break a}}b=k[B>>2]|0;if(b>>>0<(k[C>>2]|0)>>>0){k[B>>2]=b+1;b=l[b>>0]|0;i=1;continue}else{b=Md(a)|0;i=1;continue}}if((z|0)==6){b=k[B>>2]|0;if(b>>>0<(k[C>>2]|0)>>>0){k[B>>2]=b+1;b=l[b>>0]|0}else b=Md(a)|0;if((b|0)==48){i=0;b=0;while(1){i=Jf(i|0,b|0,-1,-1)|0;n=M;b=k[B>>2]|0;if(b>>>0<(k[C>>2]|0)>>>0){k[B>>2]=b+1;b=l[b>>0]|0}else b=Md(a)|0;if((b|0)==48)b=n;else{v=1;o=1;p=i;break}}}else{v=1;o=i;p=0;n=0}}k[E>>2]=0;m=b+-48|0;j=(b|0)==46;b:do if(j|m>>>0<10){A=E+496|0;w=0;i=0;t=0;x=v;y=o;z=m;o=0;m=0;c:while(1){do if(j)if(!x){x=1;p=o;n=m}else break c;else{o=Jf(o|0,m|0,1,0)|0;m=M;v=(b|0)!=48;if((i|0)>=125){if(!v)break;k[A>>2]=k[A>>2]|1;break}j=E+(i<<2)|0;if(!w)b=z;else b=b+-48+((k[j>>2]|0)*10|0)|0;k[j>>2]=b;w=w+1|0;y=(w|0)==9;w=y?0:w;i=(y&1)+i|0;t=v?o:t;y=1}while(0);b=k[B>>2]|0;if(b>>>0<(k[C>>2]|0)>>>0){k[B>>2]=b+1;b=l[b>>0]|0}else b=Md(a)|0;z=b+-48|0;j=(b|0)==46;if(!(j|z>>>0<10)){v=x;j=y;z=29;break b}}b=w;j=(y|0)!=0;z=37}else{w=0;i=0;t=0;j=o;o=0;m=0;z=29}while(0);do if((z|0)==29){A=(v|0)==0;p=A?o:p;n=A?m:n;j=(j|0)!=0;if(!(j&(b|32|0)==101))if((b|0)>-1){b=w;z=37;break}else{b=w;z=39;break}j=Wd(a,f)|0;b=M;if((j|0)==0&(b|0)==-2147483648){if(!f){Kd(a,0);g=0.0;break}if(!(k[C>>2]|0)){j=0;b=0}else{k[B>>2]=(k[B>>2]|0)+-1;j=0;b=0}}y=Jf(j|0,b|0,p|0,n|0)|0;b=w;n=M;z=41}while(0);if((z|0)==37)if(k[C>>2]|0){k[B>>2]=(k[B>>2]|0)+-1;if(j){y=p;z=41}else z=40}else z=39;if((z|0)==39)if(j){y=p;z=41}else z=40;do if((z|0)==40){G=Oc()|0;k[G>>2]=22;Kd(a,0);g=0.0}else if((z|0)==41){j=k[E>>2]|0;if(!j){g=+(e|0)*0.0;break}if(((m|0)<0|(m|0)==0&o>>>0<10)&((y|0)==(o|0)&(n|0)==(m|0))?(c|0)>30|(j>>>c|0)==0:0){g=+(e|0)*+(j>>>0);break}a=(d|0)/-2|0;C=((a|0)<0)<<31>>31;if((n|0)>(C|0)|(n|0)==(C|0)&y>>>0>a>>>0){G=Oc()|0;k[G>>2]=34;g=+(e|0)*1797693134862315708145274.0e284*1797693134862315708145274.0e284;break}a=d+-106|0;C=((a|0)<0)<<31>>31;if((n|0)<(C|0)|(n|0)==(C|0)&y>>>0<a>>>0){G=Oc()|0;k[G>>2]=34;g=+(e|0)*2.2250738585072014e-308*2.2250738585072014e-308;break}if(b){if((b|0)<9){m=E+(i<<2)|0;j=k[m>>2]|0;do{j=j*10|0;b=b+1|0}while((b|0)!=9);k[m>>2]=j}i=i+1|0}if((t|0)<9?(t|0)<=(y|0)&(y|0)<18:0){b=k[E>>2]|0;if((y|0)==9){g=+(e|0)*+(b>>>0);break}if((y|0)<9){g=+(e|0)*+(b>>>0)/+(k[1300+(8-y<<2)>>2]|0);break}a=c+27+($(y,-3)|0)|0;if((a|0)>30|(b>>>a|0)==0){g=+(e|0)*+(b>>>0)*+(k[1300+(y+-10<<2)>>2]|0);break}}b=(y|0)%9|0;if(!b){b=0;m=0}else{t=(y|0)>-1?b:b+9|0;o=k[1300+(8-t<<2)>>2]|0;if(i){p=1e9/(o|0)|0;m=0;n=0;j=y;b=0;do{B=E+(b<<2)|0;C=k[B>>2]|0;a=((C>>>0)/(o>>>0)|0)+m|0;k[B>>2]=a;m=$(p,(C>>>0)%(o>>>0)|0)|0;a=(b|0)==(n|0)&(a|0)==0;j=a?j+-9|0:j;n=a?n+1&127:n;b=b+1|0}while((b|0)!=(i|0));if(!m)m=n;else{k[E+(i<<2)>>2]=m;m=n;i=i+1|0}}else{m=0;i=0;j=y}b=0;y=9-t+j|0}d:while(1){t=(y|0)<18;v=(y|0)==18;w=E+(m<<2)|0;while(1){if(!t){if(!v){j=y;break d}if((k[w>>2]|0)>>>0>=9007199){j=18;break d}}j=0;x=i;i=i+127|0;while(1){n=i&127;o=E+(n<<2)|0;i=Lf(k[o>>2]|0,0,29)|0;i=Jf(i|0,M|0,j|0,0)|0;j=M;if(j>>>0>0|(j|0)==0&i>>>0>1e9){p=Qf(i|0,j|0,1e9,0)|0;i=Uf(i|0,j|0,1e9,0)|0}else p=0;k[o>>2]=i;a=(n|0)==(m|0);x=(i|0)==0&(((n|0)!=(x+127&127|0)|a)^1)?n:x;if(a)break;else{j=p;i=n+-1|0}}b=b+-29|0;if(p|0)break;else i=x}m=m+127&127;i=x+127&127;j=E+((x+126&127)<<2)|0;if((m|0)==(x|0))k[j>>2]=k[j>>2]|k[E+(i<<2)>>2];else i=x;k[E+(m<<2)>>2]=p;y=y+9|0}e:while(1){w=i+1&127;x=E+((i+127&127)<<2)|0;while(1){p=(j|0)==18;v=(j|0)>27?9:1;y=m;while(1){m=0;while(1){n=m+y&127;if((n|0)==(i|0)){D=2;z=88;break}n=k[E+(n<<2)>>2]|0;o=k[1332+(m<<2)>>2]|0;if(n>>>0<o>>>0){D=2;z=88;break}if(n>>>0>o>>>0)break;m=m+1|0;if((m|0)>=2){D=m;z=88;break}}if((z|0)==88?(z=0,p&(D|0)==2):0){g=0.0;n=0;break e}b=v+b|0;if((y|0)==(i|0))y=i;else break}p=(1<<v)+-1|0;t=1e9>>>v;o=0;m=y;n=y;do{B=E+(n<<2)|0;C=k[B>>2]|0;a=(C>>>v)+o|0;k[B>>2]=a;o=$(C&p,t)|0;a=(n|0)==(m|0)&(a|0)==0;j=a?j+-9|0:j;m=a?m+1&127:m;n=n+1&127}while((n|0)!=(i|0));if(!o)continue;if((w|0)!=(m|0))break;k[x>>2]=k[x>>2]|1}k[E+(i<<2)>>2]=o;i=w}do{m=n+y&127;j=i+1&127;if((m|0)==(i|0)){k[E+(j+-1<<2)>>2]=0;i=j}g=g*1.0e9+ +((k[E+(m<<2)>>2]|0)>>>0);n=n+1|0}while((n|0)!=2);s=+(e|0);h=s*g;n=b+53|0;o=n-d|0;p=(o|0)<(c|0);m=p?((o|0)>0?o:0):c;if((m|0)<53){I=+ed(+Xc(1.0,105-m|0),h);q=+_c(h,+Xc(1.0,53-m|0));r=I;g=q;q=I+(h-q)}else{r=0.0;g=0.0;q=h}j=y+2&127;if((j|0)!=(i|0)){j=k[E+(j<<2)>>2]|0;do if(j>>>0>=5e8){if((j|0)!=5e8){g=s*.75+g;break}if((y+3&127|0)==(i|0)){g=s*.5+g;break}else{g=s*.75+g;break}}else{if((j|0)==0?(y+3&127|0)==(i|0):0)break;g=s*.25+g}while(0);if((53-m|0)>1?!(+_c(g,1.0)!=0.0):0)h=g+1.0;else h=g}else h=g;g=q+h-r;do if((n&2147483647|0)>(-2-F|0)){F=!(+O(+g)>=9007199254740992.0);b=((F^1)&1)+b|0;g=F?g:g*.5;if((b+50|0)<=(G|0)?!(h!=0.0&(p&((m|0)!=(o|0)|F))):0)break;G=Oc()|0;k[G>>2]=34}while(0);g=+cd(g,b)}while(0);u=H;return +g}function Wd(a,b){a=a|0;b=b|0;var c=0,d=0,e=0,f=0,g=0,h=0,i=0;i=a+4|0;c=k[i>>2]|0;h=a+100|0;if(c>>>0<(k[h>>2]|0)>>>0){k[i>>2]=c+1;c=l[c>>0]|0}else c=Md(a)|0;switch(c|0){case 43:case 45:{d=(c|0)==45&1;c=k[i>>2]|0;if(c>>>0<(k[h>>2]|0)>>>0){k[i>>2]=c+1;c=l[c>>0]|0}else c=Md(a)|0;if((b|0)!=0&(c+-48|0)>>>0>9?(k[h>>2]|0)!=0:0)k[i>>2]=(k[i>>2]|0)+-1;break}default:d=0}if((c+-48|0)>>>0>9)if(!(k[h>>2]|0)){d=-2147483648;c=0}else{k[i>>2]=(k[i>>2]|0)+-1;d=-2147483648;c=0}else{e=0;do{e=c+-48+(e*10|0)|0;c=k[i>>2]|0;if(c>>>0<(k[h>>2]|0)>>>0){k[i>>2]=c+1;c=l[c>>0]|0}else c=Md(a)|0}while((c+-48|0)>>>0<10&(e|0)<214748364);b=((e|0)<0)<<31>>31;if((c+-48|0)>>>0<10){do{b=Sf(e|0,b|0,10,0)|0;e=M;c=Jf(c|0,((c|0)<0)<<31>>31|0,-48,-1)|0;e=Jf(c|0,M|0,b|0,e|0)|0;b=M;c=k[i>>2]|0;if(c>>>0<(k[h>>2]|0)>>>0){k[i>>2]=c+1;c=l[c>>0]|0}else c=Md(a)|0}while((c+-48|0)>>>0<10&((b|0)<21474836|(b|0)==21474836&e>>>0<2061584302));f=c;g=e}else{f=c;g=e}c=k[h>>2]|0;if((f+-48|0)>>>0<10)do{e=k[i>>2]|0;if(e>>>0<c>>>0){k[i>>2]=e+1;e=l[e>>0]|0}else{e=Md(a)|0;c=k[h>>2]|0}}while((e+-48|0)>>>0<10);if(c|0)k[i>>2]=(k[i>>2]|0)+-1;i=(d|0)!=0;c=If(0,0,g|0,b|0)|0;d=i?M:b;c=i?c:g}M=d;return c|0}function Xd(a){a=a|0;var b=0,c=0,d=0,e=0,f=0,g=0;while(1){d=i[a>>0]|0;b=d<<24>>24;e=a+1|0;if(!(Nd(b)|0))break;else a=e}switch(b|0){case 45:{a=1;f=5;break}case 43:{a=0;f=5;break}default:{g=0;c=a;a=d}}if((f|0)==5){g=a;c=e;a=i[e>>0]|0}b=(a<<24>>24)+-48|0;if(b>>>0<10){a=0;do{c=c+1|0;a=(a*10|0)-b|0;b=(i[c>>0]|0)+-48|0}while(b>>>0<10)}else a=0;return (g|0?a:0-a|0)|0}function Yd(a,b,c){a=a|0;b=b|0;c=c|0;c=Jd(a,b,c,-2147483648,0)|0;return c|0}function Zd(a,b){a=a|0;b=b|0;var c=0,d=0,e=0,f=0;e=u;u=u+32|0;d=e;k[d>>2]=0;k[d+4>>2]=0;k[d+8>>2]=0;k[d+12>>2]=0;k[d+16>>2]=0;k[d+20>>2]=0;k[d+24>>2]=0;k[d+28>>2]=0;c=i[b>>0]|0;do if(!(c<<24>>24))b=0;else{if(!(i[b+1>>0]|0)){b=a;while(1)if((i[b>>0]|0)==c<<24>>24)b=b+1|0;else break;b=b-a|0;break}do{f=d+(((c&255)>>>5&255)<<2)|0;k[f>>2]=k[f>>2]|1<<(c&31);b=b+1|0;c=i[b>>0]|0}while(c<<24>>24!=0);c=i[a>>0]|0;a:do if(!(c<<24>>24))b=a;else{b=a;do{if(!(k[d+(((c&255)>>>5&255)<<2)>>2]&1<<(c&31)))break a;b=b+1|0;c=i[b>>0]|0}while(c<<24>>24!=0)}while(0);b=b-a|0}while(0);u=e;return b|0}function _d(a,b){a=a|0;b=b|0;var c=0,d=0,e=0,f=0,g=0;f=u;u=u+32|0;d=f;c=i[b>>0]|0;a:do if(c<<24>>24!=0?(i[b+1>>0]|0)!=0:0){k[d>>2]=0;k[d+4>>2]=0;k[d+8>>2]=0;k[d+12>>2]=0;k[d+16>>2]=0;k[d+20>>2]=0;k[d+24>>2]=0;k[d+28>>2]=0;do{g=d+(((c&255)>>>5&255)<<2)|0;k[g>>2]=k[g>>2]|1<<(c&31);b=b+1|0;c=i[b>>0]|0}while(c<<24>>24!=0);c=i[a>>0]|0;if(!(c<<24>>24))b=a;else{b=a;do{if(k[d+(((c&255)>>>5&255)<<2)>>2]&1<<(c&31)|0)break a;b=b+1|0;c=i[b>>0]|0}while(c<<24>>24!=0)}}else e=3;while(0);if((e|0)==3)b=$d(a,c<<24>>24)|0;u=f;return b-a|0}function $d(a,b){a=a|0;b=b|0;var c=0,d=0,e=0;d=b&255;a:do if(!d)a=a+(ae(a)|0)|0;else{if(a&3){c=b&255;do{e=i[a>>0]|0;if(e<<24>>24==0?1:e<<24>>24==c<<24>>24)break a;a=a+1|0}while((a&3|0)!=0)}d=$(d,16843009)|0;c=k[a>>2]|0;b:do if(!((c&-2139062144^-2139062144)&c+-16843009))do{e=c^d;if((e&-2139062144^-2139062144)&e+-16843009|0)break b;a=a+4|0;c=k[a>>2]|0}while(!((c&-2139062144^-2139062144)&c+-16843009|0));while(0);c=b&255;while(1){e=i[a>>0]|0;if(e<<24>>24==0?1:e<<24>>24==c<<24>>24)break;else a=a+1|0}}while(0);return a|0}function ae(a){a=a|0;var b=0,c=0,d=0;d=a;a:do if(!(d&3))c=4;else{b=d;while(1){if(!(i[a>>0]|0)){a=b;break a}a=a+1|0;b=a;if(!(b&3)){c=4;break}}}while(0);if((c|0)==4){while(1){b=k[a>>2]|0;if(!((b&-2139062144^-2139062144)&b+-16843009))a=a+4|0;else break}if((b&255)<<24>>24)do a=a+1|0;while((i[a>>0]|0)!=0)}return a-d|0}function be(a,b,c){a=a|0;b=b|0;c=c|0;var d=0;if((k[a+76>>2]|0)>-1){d=(kd(a)|0)==0;b=ce(a,b,c)|0;if(!d)ld(a)}else b=ce(a,b,c)|0;return b|0}function ce(a,b,c){a=a|0;b=b|0;c=c|0;var d=0,e=0;if((c|0)==1)b=b-(k[a+8>>2]|0)+(k[a+4>>2]|0)|0;d=a+20|0;e=a+28|0;if((k[d>>2]|0)>>>0>(k[e>>2]|0)>>>0?(Wa[k[a+36>>2]&15](a,0,0)|0,(k[d>>2]|0)==0):0)b=-1;else{k[a+16>>2]=0;k[e>>2]=0;k[d>>2]=0;if((Wa[k[a+40>>2]&15](a,b,c)|0)<0)b=-1;else{k[a+8>>2]=0;k[a+4>>2]=0;k[a>>2]=k[a>>2]&-17;b=0}}return b|0}function de(a,b){a=a|0;b=b|0;var c=0,d=0,e=0,f=0,g=0,h=0,j=0;h=a&255;c=a&255;if((k[b+76>>2]|0)>=0?(kd(b)|0)!=0:0){if((c|0)!=(i[b+75>>0]|0)?(f=b+20|0,g=k[f>>2]|0,g>>>0<(k[b+16>>2]|0)>>>0):0){k[f>>2]=g+1;i[g>>0]=h}else c=ee(b,a)|0;ld(b)}else j=3;do if((j|0)==3){if((c|0)!=(i[b+75>>0]|0)?(d=b+20|0,e=k[d>>2]|0,e>>>0<(k[b+16>>2]|0)>>>0):0){k[d>>2]=e+1;i[e>>0]=h;break}c=ee(b,a)|0}while(0);return c|0}function ee(a,b){a=a|0;b=b|0;var c=0,d=0,e=0,f=0,g=0,h=0,j=0;j=u;u=u+16|0;g=j;h=b&255;i[g>>0]=h;d=a+16|0;e=k[d>>2]|0;if(!e)if(!(Hd(a)|0)){e=k[d>>2]|0;f=4}else c=-1;else f=4;do if((f|0)==4){f=a+20|0;d=k[f>>2]|0;if(d>>>0<e>>>0?(c=b&255,(c|0)!=(i[a+75>>0]|0)):0){k[f>>2]=d+1;i[d>>0]=h;break}if((Wa[k[a+36>>2]&15](a,g,1)|0)==1)c=l[g>>0]|0;else c=-1}while(0);u=j;return c|0}function fe(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;var e=0,f=0,g=0,h=0,j=0,l=0,m=0;j=$(c,b)|0;c=(b|0)==0?0:c;if((k[d+76>>2]|0)>-1)h=kd(d)|0;else h=0;e=d+74|0;f=i[e>>0]|0;i[e>>0]=f+255|f;e=d+4|0;f=k[e>>2]|0;m=(k[d+8>>2]|0)-f|0;g=m>>>0<j>>>0?m:j;if((m|0)>0){Nf(a|0,f|0,g|0)|0;k[e>>2]=f+g;e=j-g|0;a=a+g|0}else e=j;a:do if(!e)l=13;else{g=d+32|0;while(1){if(Pd(d)|0)break;f=Wa[k[g>>2]&15](d,a,e)|0;if((f+1|0)>>>0<2)break;e=e-f|0;if(!e){l=13;break a}else a=a+f|0}if(h|0)ld(d);c=((j-e|0)>>>0)/(b>>>0)|0}while(0);if((l|0)==13)if(h)ld(d);return c|0}function ge(a){a=a|0;var b=0;if(!(k[a>>2]&128))b=1;else b=(k[a+20>>2]|0)>>>0>(k[a+28>>2]|0)>>>0?2:1;b=Wa[k[a+40>>2]&15](a,0,b)|0;if((b|0)>=0)b=b-(k[a+8>>2]|0)+(k[a+4>>2]|0)+(k[a+20>>2]|0)-(k[a+28>>2]|0)|0;return b|0}function he(a){a=a|0;var b=0,c=0;if((k[a+76>>2]|0)>-1){c=(kd(a)|0)==0;b=ge(a)|0;if(!c)ld(a)}else b=ge(a)|0;return b|0}function ie(a){a=a|0;return he(a)|0}function je(a,b){a=a|0;b=b|0;var c=0;c=ae(a)|0;return ((ke(a,1,c,b)|0)!=(c|0))<<31>>31|0}function ke(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;var e=0,f=0;e=$(c,b)|0;c=(b|0)==0?0:c;if((k[d+76>>2]|0)>-1){f=(kd(d)|0)==0;a=Gd(a,e,d)|0;if(!f)ld(d)}else a=Gd(a,e,d)|0;if((a|0)!=(e|0))c=(a>>>0)/(b>>>0)|0;return c|0}function le(a){a=a|0;var b=0,c=0;if((k[a+76>>2]|0)>-1){c=(kd(a)|0)==0;b=(k[a>>2]|0)>>>5&1;if(!c)ld(a)}else b=(k[a>>2]|0)>>>5&1;return b|0}function me(a,b,c){a=a|0;b=b|0;c=c|0;var d=0,e=0;d=u;u=u+16|0;e=d;k[e>>2]=c;c=ne(a,b,e)|0;u=d;return c|0}
function ne(a,b,c){a=a|0;b=b|0;c=c|0;var d=0,e=0,f=0,g=0,h=0,j=0.0,m=0,n=0,q=0,r=0,s=0,t=0,v=0,w=0,x=0,y=0,z=0,A=0,B=0,C=0,D=0,E=0,F=0,G=0,H=0,I=0,J=0,K=0,L=0,N=0,O=0,P=0,Q=0;Q=u;u=u+288|0;J=Q+8|0;K=Q+17|0;L=Q;N=Q+16|0;if((k[a+76>>2]|0)>-1)P=kd(a)|0;else P=0;d=i[b>>0]|0;a:do if(d<<24>>24){z=a+4|0;A=a+100|0;B=a+108|0;C=a+8|0;D=K+10|0;E=K+33|0;y=J+4|0;F=K+46|0;G=K+94|0;H=K+1|0;I=K+1|0;g=b;t=0;b=0;f=0;e=0;b:while(1){c:do if(!(Nd(d&255)|0)){d=d<<24>>24==37;d:do if(d){m=g+1|0;h=i[m>>0]|0;e:do switch(h<<24>>24){case 37:break d;case 42:{x=0;g=g+2|0;break}default:{d=(h&255)+-48|0;if(d>>>0<10?(i[g+2>>0]|0)==36:0){x=oe(c,d)|0;g=g+3|0;break e}g=(k[c>>2]|0)+(4-1)&~(4-1);x=k[g>>2]|0;k[c>>2]=g+4;g=m}}while(0);d=i[g>>0]|0;h=d&255;if((h+-48|0)>>>0<10){m=0;do{m=(m*10|0)+-48+h|0;g=g+1|0;d=i[g>>0]|0;h=d&255}while((h+-48|0)>>>0<10)}else m=0;d=d<<24>>24==109;w=(x|0)!=0;f=d?0:f;e=d?0:e;g=d?g+1|0:g;d=w&d;h=g+1|0;switch(i[g>>0]|0){case 104:{v=(i[h>>0]|0)==104;n=v?-2:-1;g=v?g+2|0:h;break}case 108:{v=(i[h>>0]|0)==108;n=v?3:1;g=v?g+2|0:h;break}case 106:{n=3;g=h;break}case 116:case 122:{n=1;g=h;break}case 76:{n=2;g=h;break}case 110:case 112:case 67:case 83:case 91:case 99:case 115:case 88:case 71:case 70:case 69:case 65:case 103:case 102:case 101:case 97:case 120:case 117:case 111:case 105:case 100:{n=0;break}default:{O=137;break b}}r=l[g>>0]|0;s=(r&47|0)==3;r=s?r|32:r;s=s?1:n;q=r&255;switch(q<<24>>24){case 99:{m=(m|0)>1?m:1;break}case 91:break;case 110:{pe(x,s,t,((t|0)<0)<<31>>31);h=t;break c}default:{Kd(a,0);do{h=k[z>>2]|0;if(h>>>0<(k[A>>2]|0)>>>0){k[z>>2]=h+1;h=l[h>>0]|0}else h=Md(a)|0}while((Nd(h)|0)!=0);if(!(k[A>>2]|0))h=k[z>>2]|0;else{h=(k[z>>2]|0)+-1|0;k[z>>2]=h}t=(k[B>>2]|0)+t+h-(k[C>>2]|0)|0}}Kd(a,m);h=k[z>>2]|0;n=k[A>>2]|0;if(h>>>0<n>>>0)k[z>>2]=h+1;else{if((Md(a)|0)<0){O=137;break b}n=k[A>>2]|0}if(n|0)k[z>>2]=(k[z>>2]|0)+-1;f:do switch(q<<24>>24){case 91:case 99:case 115:{v=(r|0)==99;g:do if((r|16|0)==115){Kf(H|0,-1,256)|0;i[K>>0]=0;if((r|0)==115){i[E>>0]=0;i[D>>0]=0;i[D+1>>0]=0;i[D+2>>0]=0;i[D+3>>0]=0;i[D+4>>0]=0}}else{h=g+1|0;r=(i[h>>0]|0)==94;q=r&1;g=r?g+2|0:h;Kf(I|0,r&1|0,256)|0;i[K>>0]=0;switch(i[g>>0]|0){case 45:{h=F;O=64;break}case 93:{h=G;O=64;break}default:r=(q^1)&255}if((O|0)==64){O=0;r=(q^1)&255;i[h>>0]=r;g=g+1|0}while(1){h=i[g>>0]|0;h:do switch(h<<24>>24){case 0:{O=137;break b}case 93:break g;case 45:{q=g+1|0;h=i[q>>0]|0;switch(h<<24>>24){case 93:case 0:{h=45;break h}default:{}}g=i[g+-1>>0]|0;if((g&255)<(h&255)){g=g&255;do{g=g+1|0;i[K+g>>0]=r;h=i[q>>0]|0}while((g|0)<(h&255|0));g=q}else g=q;break}default:{}}while(0);i[K+((h&255)+1)>>0]=r;g=g+1|0}}while(0);h=v?m+1|0:31;r=(s|0)==1;i:do if(r){if(d){e=Ve(h<<2)|0;if(!e){f=0;e=0;d=1;O=137;break b}}else e=x;k[J>>2]=0;k[y>>2]=0;q=h;f=0;j:while(1){n=(e|0)==0;do{k:while(1){h=k[z>>2]|0;if(h>>>0<(k[A>>2]|0)>>>0){k[z>>2]=h+1;h=l[h>>0]|0}else h=Md(a)|0;if(!(i[K+(h+1)>>0]|0))break j;i[N>>0]=h;switch(qe(L,N,1,J)|0){case -1:{f=0;O=137;break b}case -2:break;default:break k}}if(!n){k[e+(f<<2)>>2]=k[L>>2];f=f+1|0}}while(!(d&(f|0)==(q|0)));f=q<<1|1;h=Ye(e,f<<2)|0;if(!h){f=0;d=1;O=137;break b}else{s=q;q=f;e=h;f=s}}if(!(re(J)|0)){f=0;O=137;break b}else{h=f;f=0;q=e}}else{if(d){f=Ve(h)|0;if(!f){f=0;e=0;d=1;O=137;break b}else{n=h;e=0}while(1){do{h=k[z>>2]|0;if(h>>>0<(k[A>>2]|0)>>>0){k[z>>2]=h+1;h=l[h>>0]|0}else h=Md(a)|0;if(!(i[K+(h+1)>>0]|0)){h=e;q=0;e=0;break i}i[f+e>>0]=h;e=e+1|0}while((e|0)!=(n|0));e=n<<1|1;h=Ye(f,e)|0;if(!h){e=0;d=1;O=137;break b}else{s=n;n=e;f=h;e=s}}}if(!x){f=n;while(1){e=k[z>>2]|0;if(e>>>0<f>>>0){k[z>>2]=e+1;e=l[e>>0]|0}else e=Md(a)|0;if(!(i[K+(e+1)>>0]|0)){h=0;f=0;q=0;e=0;break i}f=k[A>>2]|0}}else{h=0;f=n;while(1){e=k[z>>2]|0;if(e>>>0<f>>>0){k[z>>2]=e+1;e=l[e>>0]|0}else e=Md(a)|0;if(!(i[K+(e+1)>>0]|0)){f=x;q=0;e=0;break i}i[x+h>>0]=e;h=h+1|0;f=k[A>>2]|0}}}while(0);if(!(k[A>>2]|0))n=k[z>>2]|0;else{n=(k[z>>2]|0)+-1|0;k[z>>2]=n}n=n-(k[C>>2]|0)+(k[B>>2]|0)|0;if(!n){O=139;break b}if(!((n|0)==(m|0)|v^1)){O=139;break b}do if(d)if(r){k[x>>2]=q;break}else{k[x>>2]=f;break}while(0);if(!v){if(q|0)k[q+(h<<2)>>2]=0;if(!f){f=0;break f}i[f+h>>0]=0}break}case 120:case 88:case 112:{h=16;O=125;break}case 111:{h=8;O=125;break}case 117:case 100:{h=10;O=125;break}case 105:{h=0;O=125;break}case 71:case 103:case 70:case 102:case 69:case 101:case 65:case 97:{j=+Td(a,s,0);if((k[B>>2]|0)==((k[C>>2]|0)-(k[z>>2]|0)|0)){O=139;break b}if(x)switch(s|0){case 0:{o[x>>2]=j;break f}case 1:{p[x>>3]=j;break f}case 2:{p[x>>3]=j;break f}default:break f}break}default:{}}while(0);do if((O|0)==125){O=0;h=Ld(a,h,0,-1,-1)|0;if((k[B>>2]|0)==((k[C>>2]|0)-(k[z>>2]|0)|0)){O=139;break b}if(w&(r|0)==112){k[x>>2]=h;break}else{pe(x,s,h,M);break}}while(0);b=(w&1)+b|0;h=(k[B>>2]|0)+t+(k[z>>2]|0)-(k[C>>2]|0)|0;break c}while(0);g=g+(d&1)|0;Kd(a,0);d=k[z>>2]|0;if(d>>>0<(k[A>>2]|0)>>>0){k[z>>2]=d+1;d=l[d>>0]|0}else d=Md(a)|0;if((d|0)!=(l[g>>0]|0)){O=22;break b}h=t+1|0}else{while(1){d=g+1|0;if(!(Nd(l[d>>0]|0)|0))break;else g=d}Kd(a,0);do{d=k[z>>2]|0;if(d>>>0<(k[A>>2]|0)>>>0){k[z>>2]=d+1;d=l[d>>0]|0}else d=Md(a)|0}while((Nd(d)|0)!=0);if(!(k[A>>2]|0))d=k[z>>2]|0;else{d=(k[z>>2]|0)+-1|0;k[z>>2]=d}h=(k[B>>2]|0)+t+d-(k[C>>2]|0)|0}while(0);g=g+1|0;d=i[g>>0]|0;if(!(d<<24>>24))break a;else t=h}if((O|0)==22){if(k[A>>2]|0)k[z>>2]=(k[z>>2]|0)+-1;if((b|0)!=0|(d|0)>-1)break;else{d=0;O=138}}else if((O|0)==137){d=d&1;if(!b)O=138}else if((O|0)==139)d=d&1;if((O|0)==138)b=-1;if(d){We(f);We(e)}}else b=0;while(0);if(P|0)ld(a);u=Q;return b|0}function oe(a,b){a=a|0;b=b|0;var c=0,d=0,e=0;d=u;u=u+16|0;c=d;k[c>>2]=k[a>>2];while(1){e=(k[c>>2]|0)+(4-1)&~(4-1);a=k[e>>2]|0;k[c>>2]=e+4;if(b>>>0>1)b=b+-1|0;else break}u=d;return a|0}function pe(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;a:do if(a|0)switch(b|0){case -2:{i[a>>0]=c;break a}case -1:{j[a>>1]=c;break a}case 0:{k[a>>2]=c;break a}case 1:{k[a>>2]=c;break a}case 3:{b=a;k[b>>2]=c;k[b+4>>2]=d;break a}default:break a}while(0);return}function qe(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;var e=0,f=0,g=0,h=0,j=0,l=0;j=u;u=u+16|0;e=j;g=(d|0)==0?6128:d;d=k[g>>2]|0;a:do if(!b)if(!d)d=0;else h=17;else{f=(a|0)==0?e:a;if(!c)d=-2;else{if(!d){d=i[b>>0]|0;if(d<<24>>24>-1){k[f>>2]=d&255;d=d<<24>>24!=0&1;break}e=(se()|0)+188|0;d=i[b>>0]|0;if(!(k[k[e>>2]>>2]|0)){k[f>>2]=d<<24>>24&57343;d=1;break}d=(d&255)+-194|0;if(d>>>0>50){h=17;break}d=k[972+(d<<2)>>2]|0;e=c+-1|0;if(e){b=b+1|0;h=11}}else{e=c;h=11}b:do if((h|0)==11){a=i[b>>0]|0;l=(a&255)>>>3;if((l+-16|l+(d>>26))>>>0>7){h=17;break a}while(1){b=b+1|0;d=(a&255)+-128|d<<6;e=e+-1|0;if((d|0)>=0)break;if(!e)break b;a=i[b>>0]|0;if((a&-64)<<24>>24!=-128){h=17;break a}}k[g>>2]=0;k[f>>2]=d;d=c-e|0;break a}while(0);k[g>>2]=d;d=-2}}while(0);if((h|0)==17){k[g>>2]=0;d=Oc()|0;k[d>>2]=84;d=-1}u=j;return d|0}function re(a){a=a|0;if(!a)a=1;else a=(k[a>>2]|0)==0;return a&1|0}function se(){return Qc()|0}function te(a,b){a=a|0;b=b|0;var c=0,d=0,e=0,f=0,g=0;g=u;u=u+48|0;f=g+32|0;e=g+16|0;c=g;if(td(5371,i[b>>0]|0,4)|0){d=ue(b)|0;k[c>>2]=a;k[c+4>>2]=d|32768;k[c+8>>2]=438;c=Nc(Oa(5,c|0)|0)|0;if((c|0)>=0){if(d&524288|0){k[e>>2]=c;k[e+4>>2]=2;k[e+8>>2]=1;sa(221,e|0)|0}a=ve(c,b)|0;if(!a){k[f>>2]=c;Na(6,f|0)|0;a=0}}else a=0}else{a=Oc()|0;k[a>>2]=22;a=0}u=g;return a|0}function ue(a){a=a|0;var b=0,c=0,d=0;c=(we(a,43)|0)==0;b=i[a>>0]|0;c=c?b<<24>>24!=114&1:2;d=(we(a,120)|0)==0;c=d?c:c|128;a=(we(a,101)|0)==0;a=a?c:c|524288;a=b<<24>>24==114?a:a|64;a=b<<24>>24==119?a|512:a;return (b<<24>>24==97?a|1024:a)|0}function ve(a,b){a=a|0;b=b|0;var c=0,d=0,e=0,f=0,g=0,h=0,j=0,l=0,m=0,n=0;n=u;u=u+64|0;m=n+40|0;j=n+24|0;h=n+16|0;e=n;l=n+56|0;d=i[b>>0]|0;if(td(5371,d<<24>>24,4)|0){c=Ve(1156)|0;if(!c)c=0;else{f=c;g=f+124|0;do{k[f>>2]=0;f=f+4|0}while((f|0)<(g|0));if(!(we(b,43)|0))k[c>>2]=d<<24>>24==114?8:4;if(we(b,101)|0){k[e>>2]=a;k[e+4>>2]=2;k[e+8>>2]=1;sa(221,e|0)|0;d=i[b>>0]|0}if(d<<24>>24==97){k[h>>2]=a;k[h+4>>2]=3;d=sa(221,h|0)|0;if(!(d&1024)){k[j>>2]=a;k[j+4>>2]=4;k[j+8>>2]=d|1024;sa(221,j|0)|0}b=k[c>>2]|128;k[c>>2]=b}else b=k[c>>2]|0;k[c+60>>2]=a;k[c+44>>2]=c+132;k[c+48>>2]=1024;d=c+75|0;i[d>>0]=-1;if((b&8|0)==0?(k[m>>2]=a,k[m+4>>2]=21523,k[m+8>>2]=l,(Ja(54,m|0)|0)==0):0)i[d>>0]=10;k[c+32>>2]=11;k[c+36>>2]=6;k[c+40>>2]=7;k[c+12>>2]=4;if(!(k[1517]|0))k[c+76>>2]=-1;xe(c)|0}}else{c=Oc()|0;k[c>>2]=22;c=0}u=n;return c|0}function we(a,b){a=a|0;b=b|0;a=$d(a,b)|0;return ((i[a>>0]|0)==(b&255)<<24>>24?a:0)|0}function xe(a){a=a|0;var b=0,c=0;b=ye()|0;k[a+56>>2]=k[b>>2];c=k[b>>2]|0;if(c|0)k[c+52>>2]=a;k[b>>2]=a;ze();return a|0}function ye(){Ma(6132);return 6140}function ze(){Ka(6132);return}function Ae(a,b,c){a=a|0;b=b|0;c=c|0;var d=0,e=0;d=u;u=u+16|0;e=d;k[e>>2]=c;c=id(a,b,e)|0;u=d;return c|0}function Be(a){a=a|0;var b=0;if(k[a+68>>2]|0){b=k[a+116>>2]|0;a=a+112|0;if(b|0)k[b+112>>2]=k[a>>2];a=k[a>>2]|0;if(!a)a=(Ce()|0)+232|0;else a=a+116|0;k[a>>2]=b}return}function Ce(){return Qc()|0}function De(a,b,c){a=a|0;b=b|0;c=c|0;var d=0,e=0,f=0,g=0,h=0,j=0,m=0,n=0,o=0,p=0;if((k[c+76>>2]|0)>-1)j=kd(c)|0;else j=0;e=b+-1|0;d=(e|0)!=0;if((b|0)<2){m=c+74|0;h=i[m>>0]|0;i[m>>0]=h+255|h;if(j|0)ld(c);if(d)a=0;else i[a>>0]=0}else{a:do if(d){g=c+4|0;h=c+8|0;b=a;while(1){d=k[g>>2]|0;o=d;p=(k[h>>2]|0)-o|0;n=td(d,10,p)|0;f=(n|0)==0;n=f?p:1-o+n|0;n=n>>>0<e>>>0?n:e;Nf(b|0,d|0,n|0)|0;d=(k[g>>2]|0)+n|0;k[g>>2]=d;b=b+n|0;e=e-n|0;if(!(f&(e|0)!=0)){m=17;break a}if(d>>>0>=(k[h>>2]|0)>>>0){d=Od(c)|0;if((d|0)<0)break}else{k[g>>2]=d+1;d=l[d>>0]|0}e=e+-1|0;f=b+1|0;i[b>>0]=d;if(!((e|0)!=0&(d&255|0)!=10)){b=f;m=17;break a}else b=f}if((b|0)!=(a|0)?(k[c>>2]&16|0)!=0:0)m=17;else a=0}else{b=a;m=17}while(0);if((m|0)==17)if(!a)a=0;else i[b>>0]=0;if(j)ld(c)}return a|0}function Ee(a){a=a|0;var b=0,c=0,d=0,e=0,f=0;if((k[a+76>>2]|0)>-1)e=kd(a)|0;else e=0;Be(a);f=(k[a>>2]&1|0)!=0;if(!f){d=ye()|0;c=k[a+52>>2]|0;b=a+56|0;if(c|0)k[c+56>>2]=k[b>>2];b=k[b>>2]|0;if(b|0)k[b+52>>2]=c;if((k[d>>2]|0)==(a|0))k[d>>2]=b;ze()}b=Fe(a)|0;b=_a[k[a+12>>2]&7](a)|0|b;c=k[a+92>>2]|0;if(c|0)We(c);if(f){if(e|0)ld(a)}else We(a);return b|0}function Fe(a){a=a|0;var b=0,c=0;do if(a){if((k[a+76>>2]|0)<=-1){b=Ge(a)|0;break}c=(kd(a)|0)==0;b=Ge(a)|0;if(!c)ld(a)}else{if(!(k[230]|0))b=0;else b=Fe(k[230]|0)|0;a=ye()|0;a=k[a>>2]|0;if(a)do{if((k[a+76>>2]|0)>-1)c=kd(a)|0;else c=0;if((k[a+20>>2]|0)>>>0>(k[a+28>>2]|0)>>>0)b=Ge(a)|0|b;if(c|0)ld(a);a=k[a+56>>2]|0}while((a|0)!=0);ze()}while(0);return b|0}function Ge(a){a=a|0;var b=0,c=0,d=0,e=0,f=0,g=0;b=a+20|0;g=a+28|0;if((k[b>>2]|0)>>>0>(k[g>>2]|0)>>>0?(Wa[k[a+36>>2]&15](a,0,0)|0,(k[b>>2]|0)==0):0)a=-1;else{c=a+4|0;d=k[c>>2]|0;e=a+8|0;f=k[e>>2]|0;if(d>>>0<f>>>0)Wa[k[a+40>>2]&15](a,d-f|0,1)|0;k[a+16>>2]=0;k[g>>2]=0;k[b>>2]=0;k[e>>2]=0;k[c>>2]=0;a=0}return a|0}function He(a,b){a=a|0;b=b|0;Ie(a,b)|0;return a|0}function Ie(a,b){a=a|0;b=b|0;var c=0,d=0;c=b;a:do if(!((c^a)&3)){if(c&3)do{c=i[b>>0]|0;i[a>>0]=c;if(!(c<<24>>24))break a;b=b+1|0;a=a+1|0}while((b&3|0)!=0);c=k[b>>2]|0;if(!((c&-2139062144^-2139062144)&c+-16843009)){d=a;while(1){b=b+4|0;a=d+4|0;k[d>>2]=c;c=k[b>>2]|0;if((c&-2139062144^-2139062144)&c+-16843009|0)break;else d=a}}d=8}else d=8;while(0);if((d|0)==8){d=i[b>>0]|0;i[a>>0]=d;if(d<<24>>24)do{b=b+1|0;a=a+1|0;d=i[b>>0]|0;i[a>>0]=d}while(d<<24>>24!=0)}return a|0}function Je(a){a=a|0;var b=0,c=0;c=(ae(a)|0)+1|0;b=Ve(c)|0;if(!b)b=0;else Nf(b|0,a|0,c|0)|0;return b|0}function Ke(a,b,c){a=a|0;b=b|0;c=c|0;return be(a,b,c)|0}function Le(a){a=a|0;var b=0,c=0,d=0;if((k[a+76>>2]|0)>=0?(kd(a)|0)!=0:0){b=a+4|0;c=k[b>>2]|0;if(c>>>0<(k[a+8>>2]|0)>>>0){k[b>>2]=c+1;b=l[c>>0]|0}else b=Od(a)|0;ld(a)}else d=3;do if((d|0)==3){b=a+4|0;c=k[b>>2]|0;if(c>>>0<(k[a+8>>2]|0)>>>0){k[b>>2]=c+1;b=l[c>>0]|0;break}else{b=Od(a)|0;break}}while(0);return b|0}function Me(a,b){a=a|0;b=b|0;return Ne(a,b,(ae(a)|0)+1|0)|0}function Ne(a,b,c){a=a|0;b=b|0;c=c|0;var d=0;d=b&255;do{if(!c){b=0;break}c=c+-1|0;b=a+c|0}while((i[b>>0]|0)!=d<<24>>24);return b|0}function Oe(){var a=0,b=0,c=0;b=6048;b=Sf(k[b>>2]|0,k[b+4>>2]|0,1284865837,1481765933)|0;b=Jf(b|0,M|0,1,0)|0;a=M;c=6048;k[c>>2]=b;k[c+4>>2]=a;a=Mf(b|0,a|0,33)|0;return a|0}function Pe(a,b){a=a|0;b=b|0;var c=0,d=0;c=u;u=u+16|0;d=c;Qe();k[d>>2]=a;k[d+4>>2]=b;b=Nc(Fa(91,d|0)|0)|0;u=c;return b|0}function Qe(){return}function Re(a,b){a=a|0;b=b|0;var c=0,d=0,e=0,f=0,g=0,h=0,j=0,l=0,m=0,n=0,o=0;o=u;u=u+272|0;m=o+8|0;n=o;do if(!(i[b>>0]|0)){b=Ha(5375)|0;if(b|0?i[b>>0]|0:0)break;b=Ha(5382+(a*12|0)|0)|0;if(b|0?i[b>>0]|0:0)break;b=Ha(5454)|0;if(b|0?i[b>>0]|0:0)break;b=5459}while(0);c=0;a:do{switch(i[b+c>>0]|0){case 47:case 0:break a;default:{}}c=c+1|0}while(c>>>0<15);d=i[b>>0]|0;if(d<<24>>24!=46?(i[b+c>>0]|0)==0:0)if(d<<24>>24==67)l=15;else{j=b;l=16}else{b=5459;l=15}if((l|0)==15)if(!(i[b+1>>0]|0))l=18;else{j=b;l=16}b:do if((l|0)==16)if((fd(j,5459)|0)!=0?(fd(j,5467)|0)!=0:0){b=k[1536]|0;if(b|0)do{if(!(fd(j,b+8|0)|0))break b;b=k[b+24>>2]|0}while((b|0)!=0);Ma(6148);b=k[1536]|0;c:do if(b|0){while(1){if(!(fd(j,b+8|0)|0))break;b=k[b+24>>2]|0;if(!b)break c}Ka(6148);break b}while(0);d:do if(((k[1518]|0)==0?(e=Ha(5473)|0,(e|0)!=0):0)?(i[e>>0]|0)!=0:0){g=254-c|0;h=c+1|0;d=e;while(1){f=$d(d,58)|0;b=i[f>>0]|0;e=((b<<24>>24!=0)<<31>>31)+(f-d)|0;if(e>>>0<g>>>0){Nf(m|0,d|0,e|0)|0;d=m+e|0;i[d>>0]=47;Nf(d+1|0,j|0,c|0)|0;i[m+(h+e)>>0]=0;e=Ia(m|0,n|0)|0;if(e|0)break;b=i[f>>0]|0}d=f+(b<<24>>24!=0&1)|0;if(!(i[d>>0]|0)){l=41;break d}}b=Ve(28)|0;d=k[n>>2]|0;if(!b){Pe(e,d)|0;l=41;break}else{k[b>>2]=e;k[b+4>>2]=d;n=b+8|0;Nf(n|0,j|0,c|0)|0;i[n+c>>0]=0;k[b+24>>2]=k[1536];k[1536]=b;break}}else l=41;while(0);if((l|0)==41){b=Ve(28)|0;if(b){k[b>>2]=k[231];k[b+4>>2]=k[232];n=b+8|0;Nf(n|0,j|0,c|0)|0;i[n+c>>0]=0;k[b+24>>2]=k[1536];k[1536]=b}}Ka(6148);b=(a|0)==0&(b|0)==0?924:b}else{b=j;l=18}while(0);do if((l|0)==18){if((a|0)==0?(i[b+1>>0]|0)==46:0){b=924;break}b=0}while(0);u=o;return b|0}function Se(a,b){a=a|0;b=b|0;var c=0,d=0,e=0,f=0;f=u;u=u+16|0;e=f;do if(a>>>0>6)b=0;else{Ma(6156);if((a|0)!=6){b=Te(a,b)|0;Ka(6156);break}if(!b){b=7716;a=0}else{a=e;c=5486;d=a+16|0;do{i[a>>0]=i[c>>0]|0;a=a+1|0;c=c+1|0}while((a|0)<(d|0));d=0;do{a=$d(b,59)|0;c=a-b|0;if((c|0)<16){Nf(e|0,b|0,c|0)|0;i[e+c>>0]=0;b=(i[a>>0]|0)==0?b:a+1|0}Te(d,e)|0;d=d+1|0}while((d|0)!=6);b=7716;a=0}do{d=k[6104+(a<<2)>>2]|0;d=d|0?d+8|0:5502;e=ae(d)|0;Nf(b|0,d|0,e|0)|0;i[b+e>>0]=59;b=b+(e+1)|0;a=a+1|0}while((a|0)!=6);i[b+-1>>0]=0;Ka(6156);b=7716}while(0);u=f;return b|0}function Te(a,b){a=a|0;b=b|0;if(!b)a=k[6104+(a<<2)>>2]|0;else{b=Re(a,b)|0;k[6104+(a<<2)>>2]=b;a=b}return (a|0?a+8|0:5502)|0}function Ue(a,b){a=a|0;b=b|0;var c=0;if(!a){a=k[1541]|0;if(!a)a=0;else c=3}else c=3;do if((c|0)==3){a=a+(Zd(a,b)|0)|0;if(!(i[a>>0]|0)){k[1541]=0;a=0;break}b=a+(_d(a,b)|0)|0;k[1541]=b;if(!(i[b>>0]|0)){k[1541]=0;break}else{k[1541]=b+1;i[b>>0]=0;break}}while(0);return a|0}function Ve(a){a=a|0;var b=0,c=0,d=0,e=0,f=0,g=0,h=0,i=0,j=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,v=0,w=0,x=0,y=0,z=0,A=0,B=0,C=0,D=0,E=0,F=0,G=0,H=0,I=0,J=0,K=0;K=u;u=u+16|0;n=K;do if(a>>>0<245){o=a>>>0<11?16:a+11&-8;a=o>>>3;s=k[1542]|0;c=s>>>a;if(c&3|0){a=(c&1^1)+a|0;c=6208+(a<<1<<2)|0;d=c+8|0;e=k[d>>2]|0;f=e+8|0;g=k[f>>2]|0;do if((c|0)!=(g|0)){if(g>>>0<(k[1546]|0)>>>0)ua();b=g+12|0;if((k[b>>2]|0)==(e|0)){k[b>>2]=c;k[d>>2]=g;break}else ua()}else k[1542]=s&~(1<<a);while(0);J=a<<3;k[e+4>>2]=J|3;J=e+J+4|0;k[J>>2]=k[J>>2]|1;J=f;u=K;return J|0}r=k[1544]|0;if(o>>>0>r>>>0){if(c|0){h=2<<a;a=c<<a&(h|0-h);a=(a&0-a)+-1|0;h=a>>>12&16;a=a>>>h;d=a>>>5&8;a=a>>>d;f=a>>>2&4;a=a>>>f;c=a>>>1&2;a=a>>>c;b=a>>>1&1;b=(d|h|f|c|b)+(a>>>b)|0;a=6208+(b<<1<<2)|0;c=a+8|0;f=k[c>>2]|0;h=f+8|0;d=k[h>>2]|0;do if((a|0)!=(d|0)){if(d>>>0<(k[1546]|0)>>>0)ua();e=d+12|0;if((k[e>>2]|0)==(f|0)){k[e>>2]=a;k[c>>2]=d;i=s;break}else ua()}else{i=s&~(1<<b);k[1542]=i}while(0);g=(b<<3)-o|0;k[f+4>>2]=o|3;d=f+o|0;k[d+4>>2]=g|1;k[d+g>>2]=g;if(r|0){e=k[1547]|0;b=r>>>3;c=6208+(b<<1<<2)|0;b=1<<b;if(i&b){b=c+8|0;a=k[b>>2]|0;if(a>>>0<(k[1546]|0)>>>0)ua();else{j=a;l=b}}else{k[1542]=i|b;j=c;l=c+8|0}k[l>>2]=e;k[j+12>>2]=e;k[e+8>>2]=j;k[e+12>>2]=c}k[1544]=g;k[1547]=d;J=h;u=K;return J|0}j=k[1543]|0;if(j){a=(j&0-j)+-1|0;I=a>>>12&16;a=a>>>I;H=a>>>5&8;a=a>>>H;J=a>>>2&4;a=a>>>J;c=a>>>1&2;a=a>>>c;b=a>>>1&1;b=k[6472+((H|I|J|c|b)+(a>>>b)<<2)>>2]|0;a=(k[b+4>>2]&-8)-o|0;c=k[b+16+(((k[b+16>>2]|0)==0&1)<<2)>>2]|0;if(!c){i=b;g=a}else{do{I=(k[c+4>>2]&-8)-o|0;J=I>>>0<a>>>0;a=J?I:a;b=J?c:b;c=k[c+16+(((k[c+16>>2]|0)==0&1)<<2)>>2]|0}while((c|0)!=0);i=b;g=a}e=k[1546]|0;if(i>>>0<e>>>0)ua();h=i+o|0;if(i>>>0>=h>>>0)ua();f=k[i+24>>2]|0;c=k[i+12>>2]|0;do if((c|0)==(i|0)){a=i+20|0;b=k[a>>2]|0;if(!b){a=i+16|0;b=k[a>>2]|0;if(!b){m=0;break}}while(1){c=b+20|0;d=k[c>>2]|0;if(d|0){b=d;a=c;continue}c=b+16|0;d=k[c>>2]|0;if(!d)break;else{b=d;a=c}}if(a>>>0<e>>>0)ua();else{k[a>>2]=0;m=b;break}}else{d=k[i+8>>2]|0;if(d>>>0<e>>>0)ua();b=d+12|0;if((k[b>>2]|0)!=(i|0))ua();a=c+8|0;if((k[a>>2]|0)==(i|0)){k[b>>2]=c;k[a>>2]=d;m=c;break}else ua()}while(0);a:do if(f|0){b=k[i+28>>2]|0;a=6472+(b<<2)|0;do if((i|0)==(k[a>>2]|0)){k[a>>2]=m;if(!m){k[1543]=j&~(1<<b);break a}}else if(f>>>0>=(k[1546]|0)>>>0){k[f+16+(((k[f+16>>2]|0)!=(i|0)&1)<<2)>>2]=m;if(!m)break a;else break}else ua();while(0);a=k[1546]|0;if(m>>>0<a>>>0)ua();k[m+24>>2]=f;b=k[i+16>>2]|0;do if(b|0)if(b>>>0<a>>>0)ua();else{k[m+16>>2]=b;k[b+24>>2]=m;break}while(0);b=k[i+20>>2]|0;if(b|0)if(b>>>0<(k[1546]|0)>>>0)ua();else{k[m+20>>2]=b;k[b+24>>2]=m;break}}while(0);if(g>>>0<16){J=g+o|0;k[i+4>>2]=J|3;J=i+J+4|0;k[J>>2]=k[J>>2]|1}else{k[i+4>>2]=o|3;k[h+4>>2]=g|1;k[h+g>>2]=g;if(r|0){d=k[1547]|0;b=r>>>3;c=6208+(b<<1<<2)|0;b=1<<b;if(s&b){b=c+8|0;a=k[b>>2]|0;if(a>>>0<(k[1546]|0)>>>0)ua();else{p=a;q=b}}else{k[1542]=s|b;p=c;q=c+8|0}k[q>>2]=d;k[p+12>>2]=d;k[d+8>>2]=p;k[d+12>>2]=c}k[1544]=g;k[1547]=h}J=i+8|0;u=K;return J|0}}}else if(a>>>0<=4294967231){a=a+11|0;o=a&-8;j=k[1543]|0;if(j){d=0-o|0;a=a>>>8;if(a)if(o>>>0>16777215)h=31;else{q=(a+1048320|0)>>>16&8;C=a<<q;p=(C+520192|0)>>>16&4;C=C<<p;h=(C+245760|0)>>>16&2;h=14-(p|q|h)+(C<<h>>>15)|0;h=o>>>(h+7|0)&1|h<<1}else h=0;c=k[6472+(h<<2)>>2]|0;b:do if(!c){c=0;a=0;C=81}else{a=0;g=o<<((h|0)==31?0:25-(h>>>1)|0);f=0;while(1){e=(k[c+4>>2]&-8)-o|0;if(e>>>0<d>>>0)if(!e){a=c;d=0;e=c;C=85;break b}else{a=c;d=e}e=k[c+20>>2]|0;c=k[c+16+(g>>>31<<2)>>2]|0;f=(e|0)==0|(e|0)==(c|0)?f:e;e=(c|0)==0;if(e){c=f;C=81;break}else g=g<<((e^1)&1)}}while(0);if((C|0)==81){if((c|0)==0&(a|0)==0){a=2<<h;a=j&(a|0-a);if(!a)break;q=(a&0-a)+-1|0;l=q>>>12&16;q=q>>>l;i=q>>>5&8;q=q>>>i;m=q>>>2&4;q=q>>>m;p=q>>>1&2;q=q>>>p;c=q>>>1&1;a=0;c=k[6472+((i|l|m|p|c)+(q>>>c)<<2)>>2]|0}if(!c){i=a;h=d}else{e=c;C=85}}if((C|0)==85)while(1){C=0;c=(k[e+4>>2]&-8)-o|0;q=c>>>0<d>>>0;c=q?c:d;a=q?e:a;e=k[e+16+(((k[e+16>>2]|0)==0&1)<<2)>>2]|0;if(!e){i=a;h=c;break}else{d=c;C=85}}if((i|0)!=0?h>>>0<((k[1544]|0)-o|0)>>>0:0){e=k[1546]|0;if(i>>>0<e>>>0)ua();g=i+o|0;if(i>>>0>=g>>>0)ua();f=k[i+24>>2]|0;c=k[i+12>>2]|0;do if((c|0)==(i|0)){a=i+20|0;b=k[a>>2]|0;if(!b){a=i+16|0;b=k[a>>2]|0;if(!b){r=0;break}}while(1){c=b+20|0;d=k[c>>2]|0;if(d|0){b=d;a=c;continue}c=b+16|0;d=k[c>>2]|0;if(!d)break;else{b=d;a=c}}if(a>>>0<e>>>0)ua();else{k[a>>2]=0;r=b;break}}else{d=k[i+8>>2]|0;if(d>>>0<e>>>0)ua();b=d+12|0;if((k[b>>2]|0)!=(i|0))ua();a=c+8|0;if((k[a>>2]|0)==(i|0)){k[b>>2]=c;k[a>>2]=d;r=c;break}else ua()}while(0);c:do if(f){b=k[i+28>>2]|0;a=6472+(b<<2)|0;do if((i|0)==(k[a>>2]|0)){k[a>>2]=r;if(!r){s=j&~(1<<b);k[1543]=s;break c}}else if(f>>>0>=(k[1546]|0)>>>0){k[f+16+(((k[f+16>>2]|0)!=(i|0)&1)<<2)>>2]=r;if(!r){s=j;break c}else break}else ua();while(0);a=k[1546]|0;if(r>>>0<a>>>0)ua();k[r+24>>2]=f;b=k[i+16>>2]|0;do if(b|0)if(b>>>0<a>>>0)ua();else{k[r+16>>2]=b;k[b+24>>2]=r;break}while(0);b=k[i+20>>2]|0;if(b)if(b>>>0<(k[1546]|0)>>>0)ua();else{k[r+20>>2]=b;k[b+24>>2]=r;s=j;break}else s=j}else s=j;while(0);do if(h>>>0>=16){k[i+4>>2]=o|3;k[g+4>>2]=h|1;k[g+h>>2]=h;b=h>>>3;if(h>>>0<256){c=6208+(b<<1<<2)|0;a=k[1542]|0;b=1<<b;if(a&b){b=c+8|0;a=k[b>>2]|0;if(a>>>0<(k[1546]|0)>>>0)ua();else{x=a;y=b}}else{k[1542]=a|b;x=c;y=c+8|0}k[y>>2]=g;k[x+12>>2]=g;k[g+8>>2]=x;k[g+12>>2]=c;break}b=h>>>8;if(b)if(h>>>0>16777215)b=31;else{I=(b+1048320|0)>>>16&8;J=b<<I;H=(J+520192|0)>>>16&4;J=J<<H;b=(J+245760|0)>>>16&2;b=14-(H|I|b)+(J<<b>>>15)|0;b=h>>>(b+7|0)&1|b<<1}else b=0;c=6472+(b<<2)|0;k[g+28>>2]=b;a=g+16|0;k[a+4>>2]=0;k[a>>2]=0;a=1<<b;if(!(s&a)){k[1543]=s|a;k[c>>2]=g;k[g+24>>2]=c;k[g+12>>2]=g;k[g+8>>2]=g;break}a=h<<((b|0)==31?0:25-(b>>>1)|0);d=k[c>>2]|0;while(1){if((k[d+4>>2]&-8|0)==(h|0)){C=139;break}c=d+16+(a>>>31<<2)|0;b=k[c>>2]|0;if(!b){C=136;break}else{a=a<<1;d=b}}if((C|0)==136)if(c>>>0<(k[1546]|0)>>>0)ua();else{k[c>>2]=g;k[g+24>>2]=d;k[g+12>>2]=g;k[g+8>>2]=g;break}else if((C|0)==139){b=d+8|0;a=k[b>>2]|0;J=k[1546]|0;if(a>>>0>=J>>>0&d>>>0>=J>>>0){k[a+12>>2]=g;k[b>>2]=g;k[g+8>>2]=a;k[g+12>>2]=d;k[g+24>>2]=0;break}else ua()}}else{J=h+o|0;k[i+4>>2]=J|3;J=i+J+4|0;k[J>>2]=k[J>>2]|1}while(0);J=i+8|0;u=K;return J|0}}}else o=-1;while(0);c=k[1544]|0;if(c>>>0>=o>>>0){b=c-o|0;a=k[1547]|0;if(b>>>0>15){J=a+o|0;k[1547]=J;k[1544]=b;k[J+4>>2]=b|1;k[J+b>>2]=b;k[a+4>>2]=o|3}else{k[1544]=0;k[1547]=0;k[a+4>>2]=c|3;J=a+c+4|0;k[J>>2]=k[J>>2]|1}J=a+8|0;u=K;return J|0}g=k[1545]|0;if(g>>>0>o>>>0){H=g-o|0;k[1545]=H;J=k[1548]|0;I=J+o|0;k[1548]=I;k[I+4>>2]=H|1;k[J+4>>2]=o|3;J=J+8|0;u=K;return J|0}if(!(k[1660]|0)){k[1662]=4096;k[1661]=4096;k[1663]=-1;k[1664]=-1;k[1665]=0;k[1653]=0;a=n&-16^1431655768;k[n>>2]=a;k[1660]=a;a=4096}else a=k[1662]|0;h=o+48|0;i=o+47|0;f=a+i|0;e=0-a|0;j=f&e;if(j>>>0<=o>>>0){J=0;u=K;return J|0}a=k[1652]|0;if(a|0?(x=k[1650]|0,y=x+j|0,y>>>0<=x>>>0|y>>>0>a>>>0):0){J=0;u=K;return J|0}d:do if(!(k[1653]&4)){c=k[1548]|0;e:do if(c){d=6616;while(1){a=k[d>>2]|0;if(a>>>0<=c>>>0?(w=d+4|0,(a+(k[w>>2]|0)|0)>>>0>c>>>0):0)break;a=k[d+8>>2]|0;if(!a){C=163;break e}else d=a}b=f-g&e;if(b>>>0<2147483647){a=Tf(b|0)|0;if((a|0)==((k[d>>2]|0)+(k[w>>2]|0)|0)){if((a|0)!=(-1|0)){g=b;f=a;C=180;break d}}else{d=a;C=171}}else b=0}else C=163;while(0);do if((C|0)==163){c=Tf(0)|0;if((c|0)!=(-1|0)?(b=c,t=k[1661]|0,v=t+-1|0,b=((v&b|0)==0?0:(v+b&0-t)-b|0)+j|0,t=k[1650]|0,v=b+t|0,b>>>0>o>>>0&b>>>0<2147483647):0){y=k[1652]|0;if(y|0?v>>>0<=t>>>0|v>>>0>y>>>0:0){b=0;break}a=Tf(b|0)|0;if((a|0)==(c|0)){g=b;f=c;C=180;break d}else{d=a;C=171}}else b=0}while(0);do if((C|0)==171){c=0-b|0;if(!(h>>>0>b>>>0&(b>>>0<2147483647&(d|0)!=(-1|0))))if((d|0)==(-1|0)){b=0;break}else{g=b;f=d;C=180;break d}a=k[1662]|0;a=i-b+a&0-a;if(a>>>0>=2147483647){g=b;f=d;C=180;break d}if((Tf(a|0)|0)==(-1|0)){Tf(c|0)|0;b=0;break}else{g=a+b|0;f=d;C=180;break d}}while(0);k[1653]=k[1653]|4;C=178}else{b=0;C=178}while(0);if(((C|0)==178?j>>>0<2147483647:0)?(B=Tf(j|0)|0,y=Tf(0)|0,z=y-B|0,A=z>>>0>(o+40|0)>>>0,!((B|0)==(-1|0)|A^1|B>>>0<y>>>0&((B|0)!=(-1|0)&(y|0)!=(-1|0))^1)):0){g=A?z:b;f=B;C=180}if((C|0)==180){b=(k[1650]|0)+g|0;k[1650]=b;if(b>>>0>(k[1651]|0)>>>0)k[1651]=b;j=k[1548]|0;do if(j){b=6616;while(1){a=k[b>>2]|0;c=b+4|0;d=k[c>>2]|0;if((f|0)==(a+d|0)){C=190;break}e=k[b+8>>2]|0;if(!e)break;else b=e}if(((C|0)==190?(k[b+12>>2]&8|0)==0:0)?j>>>0<f>>>0&j>>>0>=a>>>0:0){k[c>>2]=d+g;J=j+8|0;J=(J&7|0)==0?0:0-J&7;I=j+J|0;J=(k[1545]|0)+(g-J)|0;k[1548]=I;k[1545]=J;k[I+4>>2]=J|1;k[I+J+4>>2]=40;k[1549]=k[1664];break}b=k[1546]|0;if(f>>>0<b>>>0){k[1546]=f;h=f}else h=b;c=f+g|0;b=6616;while(1){if((k[b>>2]|0)==(c|0)){C=198;break}a=k[b+8>>2]|0;if(!a)break;else b=a}if((C|0)==198?(k[b+12>>2]&8|0)==0:0){k[b>>2]=f;m=b+4|0;k[m>>2]=(k[m>>2]|0)+g;m=f+8|0;m=f+((m&7|0)==0?0:0-m&7)|0;b=c+8|0;b=c+((b&7|0)==0?0:0-b&7)|0;l=m+o|0;i=b-m-o|0;k[m+4>>2]=o|3;do if((b|0)!=(j|0)){if((b|0)==(k[1547]|0)){J=(k[1544]|0)+i|0;k[1544]=J;k[1547]=l;k[l+4>>2]=J|1;k[l+J>>2]=J;break}a=k[b+4>>2]|0;if((a&3|0)==1){g=a&-8;e=a>>>3;f:do if(a>>>0>=256){f=k[b+24>>2]|0;d=k[b+12>>2]|0;do if((d|0)==(b|0)){d=b+16|0;c=d+4|0;a=k[c>>2]|0;if(!a){a=k[d>>2]|0;if(!a){H=0;break}else c=d}while(1){d=a+20|0;e=k[d>>2]|0;if(e|0){a=e;c=d;continue}d=a+16|0;e=k[d>>2]|0;if(!e)break;else{a=e;c=d}}if(c>>>0<h>>>0)ua();else{k[c>>2]=0;H=a;break}}else{e=k[b+8>>2]|0;if(e>>>0<h>>>0)ua();a=e+12|0;if((k[a>>2]|0)!=(b|0))ua();c=d+8|0;if((k[c>>2]|0)==(b|0)){k[a>>2]=d;k[c>>2]=e;H=d;break}else ua()}while(0);if(!f)break;a=k[b+28>>2]|0;c=6472+(a<<2)|0;do if((b|0)!=(k[c>>2]|0))if(f>>>0>=(k[1546]|0)>>>0){k[f+16+(((k[f+16>>2]|0)!=(b|0)&1)<<2)>>2]=H;if(!H)break f;else break}else ua();else{k[c>>2]=H;if(H|0)break;k[1543]=k[1543]&~(1<<a);break f}while(0);d=k[1546]|0;if(H>>>0<d>>>0)ua();k[H+24>>2]=f;a=b+16|0;c=k[a>>2]|0;do if(c|0)if(c>>>0<d>>>0)ua();else{k[H+16>>2]=c;k[c+24>>2]=H;break}while(0);a=k[a+4>>2]|0;if(!a)break;if(a>>>0<(k[1546]|0)>>>0)ua();else{k[H+20>>2]=a;k[a+24>>2]=H;break}}else{c=k[b+8>>2]|0;d=k[b+12>>2]|0;a=6208+(e<<1<<2)|0;do if((c|0)!=(a|0)){if(c>>>0<h>>>0)ua();if((k[c+12>>2]|0)==(b|0))break;ua()}while(0);if((d|0)==(c|0)){k[1542]=k[1542]&~(1<<e);break}do if((d|0)==(a|0))E=d+8|0;else{if(d>>>0<h>>>0)ua();a=d+8|0;if((k[a>>2]|0)==(b|0)){E=a;break}ua()}while(0);k[c+12>>2]=d;k[E>>2]=c}while(0);b=b+g|0;e=g+i|0}else e=i;b=b+4|0;k[b>>2]=k[b>>2]&-2;k[l+4>>2]=e|1;k[l+e>>2]=e;b=e>>>3;if(e>>>0<256){c=6208+(b<<1<<2)|0;a=k[1542]|0;b=1<<b;do if(!(a&b)){k[1542]=a|b;I=c;J=c+8|0}else{b=c+8|0;a=k[b>>2]|0;if(a>>>0>=(k[1546]|0)>>>0){I=a;J=b;break}ua()}while(0);k[J>>2]=l;k[I+12>>2]=l;k[l+8>>2]=I;k[l+12>>2]=c;break}b=e>>>8;do if(!b)b=0;else{if(e>>>0>16777215){b=31;break}I=(b+1048320|0)>>>16&8;J=b<<I;H=(J+520192|0)>>>16&4;J=J<<H;b=(J+245760|0)>>>16&2;b=14-(H|I|b)+(J<<b>>>15)|0;b=e>>>(b+7|0)&1|b<<1}while(0);d=6472+(b<<2)|0;k[l+28>>2]=b;a=l+16|0;k[a+4>>2]=0;k[a>>2]=0;a=k[1543]|0;c=1<<b;if(!(a&c)){k[1543]=a|c;k[d>>2]=l;k[l+24>>2]=d;k[l+12>>2]=l;k[l+8>>2]=l;break}a=e<<((b|0)==31?0:25-(b>>>1)|0);d=k[d>>2]|0;while(1){if((k[d+4>>2]&-8|0)==(e|0)){C=265;break}c=d+16+(a>>>31<<2)|0;b=k[c>>2]|0;if(!b){C=262;break}else{a=a<<1;d=b}}if((C|0)==262)if(c>>>0<(k[1546]|0)>>>0)ua();else{k[c>>2]=l;k[l+24>>2]=d;k[l+12>>2]=l;k[l+8>>2]=l;break}else if((C|0)==265){b=d+8|0;a=k[b>>2]|0;J=k[1546]|0;if(a>>>0>=J>>>0&d>>>0>=J>>>0){k[a+12>>2]=l;k[b>>2]=l;k[l+8>>2]=a;k[l+12>>2]=d;k[l+24>>2]=0;break}else ua()}}else{J=(k[1545]|0)+i|0;k[1545]=J;k[1548]=l;k[l+4>>2]=J|1}while(0);J=m+8|0;u=K;return J|0}b=6616;while(1){a=k[b>>2]|0;if(a>>>0<=j>>>0?(D=a+(k[b+4>>2]|0)|0,D>>>0>j>>>0):0)break;b=k[b+8>>2]|0}e=D+-47|0;a=e+8|0;a=e+((a&7|0)==0?0:0-a&7)|0;e=j+16|0;a=a>>>0<e>>>0?j:a;b=a+8|0;c=f+8|0;c=(c&7|0)==0?0:0-c&7;J=f+c|0;c=g+-40-c|0;k[1548]=J;k[1545]=c;k[J+4>>2]=c|1;k[J+c+4>>2]=40;k[1549]=k[1664];c=a+4|0;k[c>>2]=27;k[b>>2]=k[1654];k[b+4>>2]=k[1655];k[b+8>>2]=k[1656];k[b+12>>2]=k[1657];k[1654]=f;k[1655]=g;k[1657]=0;k[1656]=b;b=a+24|0;do{J=b;b=b+4|0;k[b>>2]=7}while((J+8|0)>>>0<D>>>0);if((a|0)!=(j|0)){f=a-j|0;k[c>>2]=k[c>>2]&-2;k[j+4>>2]=f|1;k[a>>2]=f;b=f>>>3;if(f>>>0<256){c=6208+(b<<1<<2)|0;a=k[1542]|0;b=1<<b;if(a&b){b=c+8|0;a=k[b>>2]|0;if(a>>>0<(k[1546]|0)>>>0)ua();else{F=a;G=b}}else{k[1542]=a|b;F=c;G=c+8|0}k[G>>2]=j;k[F+12>>2]=j;k[j+8>>2]=F;k[j+12>>2]=c;break}b=f>>>8;if(b)if(f>>>0>16777215)c=31;else{I=(b+1048320|0)>>>16&8;J=b<<I;H=(J+520192|0)>>>16&4;J=J<<H;c=(J+245760|0)>>>16&2;c=14-(H|I|c)+(J<<c>>>15)|0;c=f>>>(c+7|0)&1|c<<1}else c=0;d=6472+(c<<2)|0;k[j+28>>2]=c;k[j+20>>2]=0;k[e>>2]=0;b=k[1543]|0;a=1<<c;if(!(b&a)){k[1543]=b|a;k[d>>2]=j;k[j+24>>2]=d;k[j+12>>2]=j;k[j+8>>2]=j;break}a=f<<((c|0)==31?0:25-(c>>>1)|0);d=k[d>>2]|0;while(1){if((k[d+4>>2]&-8|0)==(f|0)){C=292;break}c=d+16+(a>>>31<<2)|0;b=k[c>>2]|0;if(!b){C=289;break}else{a=a<<1;d=b}}if((C|0)==289)if(c>>>0<(k[1546]|0)>>>0)ua();else{k[c>>2]=j;k[j+24>>2]=d;k[j+12>>2]=j;k[j+8>>2]=j;break}else if((C|0)==292){b=d+8|0;a=k[b>>2]|0;J=k[1546]|0;if(a>>>0>=J>>>0&d>>>0>=J>>>0){k[a+12>>2]=j;k[b>>2]=j;k[j+8>>2]=a;k[j+12>>2]=d;k[j+24>>2]=0;break}else ua()}}}else{J=k[1546]|0;if((J|0)==0|f>>>0<J>>>0)k[1546]=f;k[1654]=f;k[1655]=g;k[1657]=0;k[1551]=k[1660];k[1550]=-1;b=0;do{J=6208+(b<<1<<2)|0;k[J+12>>2]=J;k[J+8>>2]=J;b=b+1|0}while((b|0)!=32);J=f+8|0;J=(J&7|0)==0?0:0-J&7;I=f+J|0;J=g+-40-J|0;k[1548]=I;k[1545]=J;k[I+4>>2]=J|1;k[I+J+4>>2]=40;k[1549]=k[1664]}while(0);b=k[1545]|0;if(b>>>0>o>>>0){H=b-o|0;k[1545]=H;J=k[1548]|0;I=J+o|0;k[1548]=I;k[I+4>>2]=H|1;k[J+4>>2]=o|3;J=J+8|0;u=K;return J|0}}J=Oc()|0;k[J>>2]=12;J=0;u=K;return J|0}function We(a){a=a|0;var b=0,c=0,d=0,e=0,f=0,g=0,h=0,i=0,j=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0;if(!a)return;c=a+-8|0;g=k[1546]|0;if(c>>>0<g>>>0)ua();a=k[a+-4>>2]|0;b=a&3;if((b|0)==1)ua();d=a&-8;o=c+d|0;a:do if(!(a&1)){a=k[c>>2]|0;if(!b)return;j=c+(0-a)|0;i=a+d|0;if(j>>>0<g>>>0)ua();if((j|0)==(k[1547]|0)){a=o+4|0;b=k[a>>2]|0;if((b&3|0)!=3){r=j;e=i;m=j;break}k[1544]=i;k[a>>2]=b&-2;k[j+4>>2]=i|1;k[j+i>>2]=i;return}d=a>>>3;if(a>>>0<256){b=k[j+8>>2]|0;c=k[j+12>>2]|0;a=6208+(d<<1<<2)|0;if((b|0)!=(a|0)){if(b>>>0<g>>>0)ua();if((k[b+12>>2]|0)!=(j|0))ua()}if((c|0)==(b|0)){k[1542]=k[1542]&~(1<<d);r=j;e=i;m=j;break}if((c|0)!=(a|0)){if(c>>>0<g>>>0)ua();a=c+8|0;if((k[a>>2]|0)==(j|0))f=a;else ua()}else f=c+8|0;k[b+12>>2]=c;k[f>>2]=b;r=j;e=i;m=j;break}f=k[j+24>>2]|0;c=k[j+12>>2]|0;do if((c|0)==(j|0)){c=j+16|0;b=c+4|0;a=k[b>>2]|0;if(!a){a=k[c>>2]|0;if(!a){h=0;break}else b=c}while(1){c=a+20|0;d=k[c>>2]|0;if(d|0){a=d;b=c;continue}c=a+16|0;d=k[c>>2]|0;if(!d)break;else{a=d;b=c}}if(b>>>0<g>>>0)ua();else{k[b>>2]=0;h=a;break}}else{d=k[j+8>>2]|0;if(d>>>0<g>>>0)ua();a=d+12|0;if((k[a>>2]|0)!=(j|0))ua();b=c+8|0;if((k[b>>2]|0)==(j|0)){k[a>>2]=c;k[b>>2]=d;h=c;break}else ua()}while(0);if(f){a=k[j+28>>2]|0;b=6472+(a<<2)|0;do if((j|0)==(k[b>>2]|0)){k[b>>2]=h;if(!h){k[1543]=k[1543]&~(1<<a);r=j;e=i;m=j;break a}}else if(f>>>0>=(k[1546]|0)>>>0){k[f+16+(((k[f+16>>2]|0)!=(j|0)&1)<<2)>>2]=h;if(!h){r=j;e=i;m=j;break a}else break}else ua();while(0);c=k[1546]|0;if(h>>>0<c>>>0)ua();k[h+24>>2]=f;a=j+16|0;b=k[a>>2]|0;do if(b|0)if(b>>>0<c>>>0)ua();else{k[h+16>>2]=b;k[b+24>>2]=h;break}while(0);a=k[a+4>>2]|0;if(a)if(a>>>0<(k[1546]|0)>>>0)ua();else{k[h+20>>2]=a;k[a+24>>2]=h;r=j;e=i;m=j;break}else{r=j;e=i;m=j}}else{r=j;e=i;m=j}}else{r=c;e=d;m=c}while(0);if(m>>>0>=o>>>0)ua();a=o+4|0;b=k[a>>2]|0;if(!(b&1))ua();if(!(b&2)){a=k[1547]|0;if((o|0)==(k[1548]|0)){q=(k[1545]|0)+e|0;k[1545]=q;k[1548]=r;k[r+4>>2]=q|1;if((r|0)!=(a|0))return;k[1547]=0;k[1544]=0;return}if((o|0)==(a|0)){q=(k[1544]|0)+e|0;k[1544]=q;k[1547]=m;k[r+4>>2]=q|1;k[m+q>>2]=q;return}e=(b&-8)+e|0;d=b>>>3;b:do if(b>>>0>=256){f=k[o+24>>2]|0;a=k[o+12>>2]|0;do if((a|0)==(o|0)){c=o+16|0;b=c+4|0;a=k[b>>2]|0;if(!a){a=k[c>>2]|0;if(!a){n=0;break}else b=c}while(1){c=a+20|0;d=k[c>>2]|0;if(d|0){a=d;b=c;continue}c=a+16|0;d=k[c>>2]|0;if(!d)break;else{a=d;b=c}}if(b>>>0<(k[1546]|0)>>>0)ua();else{k[b>>2]=0;n=a;break}}else{b=k[o+8>>2]|0;if(b>>>0<(k[1546]|0)>>>0)ua();c=b+12|0;if((k[c>>2]|0)!=(o|0))ua();d=a+8|0;if((k[d>>2]|0)==(o|0)){k[c>>2]=a;k[d>>2]=b;n=a;break}else ua()}while(0);if(f|0){a=k[o+28>>2]|0;b=6472+(a<<2)|0;do if((o|0)==(k[b>>2]|0)){k[b>>2]=n;if(!n){k[1543]=k[1543]&~(1<<a);break b}}else if(f>>>0>=(k[1546]|0)>>>0){k[f+16+(((k[f+16>>2]|0)!=(o|0)&1)<<2)>>2]=n;if(!n)break b;else break}else ua();while(0);c=k[1546]|0;if(n>>>0<c>>>0)ua();k[n+24>>2]=f;a=o+16|0;b=k[a>>2]|0;do if(b|0)if(b>>>0<c>>>0)ua();else{k[n+16>>2]=b;k[b+24>>2]=n;break}while(0);a=k[a+4>>2]|0;if(a|0)if(a>>>0<(k[1546]|0)>>>0)ua();else{k[n+20>>2]=a;k[a+24>>2]=n;break}}}else{b=k[o+8>>2]|0;c=k[o+12>>2]|0;a=6208+(d<<1<<2)|0;if((b|0)!=(a|0)){if(b>>>0<(k[1546]|0)>>>0)ua();if((k[b+12>>2]|0)!=(o|0))ua()}if((c|0)==(b|0)){k[1542]=k[1542]&~(1<<d);break}if((c|0)!=(a|0)){if(c>>>0<(k[1546]|0)>>>0)ua();a=c+8|0;if((k[a>>2]|0)==(o|0))l=a;else ua()}else l=c+8|0;k[b+12>>2]=c;k[l>>2]=b}while(0);k[r+4>>2]=e|1;k[m+e>>2]=e;if((r|0)==(k[1547]|0)){k[1544]=e;return}}else{k[a>>2]=b&-2;k[r+4>>2]=e|1;k[m+e>>2]=e}a=e>>>3;if(e>>>0<256){c=6208+(a<<1<<2)|0;b=k[1542]|0;a=1<<a;if(b&a){a=c+8|0;b=k[a>>2]|0;if(b>>>0<(k[1546]|0)>>>0)ua();else{p=b;q=a}}else{k[1542]=b|a;p=c;q=c+8|0}k[q>>2]=r;k[p+12>>2]=r;k[r+8>>2]=p;k[r+12>>2]=c;return}a=e>>>8;if(a)if(e>>>0>16777215)a=31;else{p=(a+1048320|0)>>>16&8;q=a<<p;o=(q+520192|0)>>>16&4;q=q<<o;a=(q+245760|0)>>>16&2;a=14-(o|p|a)+(q<<a>>>15)|0;a=e>>>(a+7|0)&1|a<<1}else a=0;d=6472+(a<<2)|0;k[r+28>>2]=a;k[r+20>>2]=0;k[r+16>>2]=0;b=k[1543]|0;c=1<<a;do if(b&c){b=e<<((a|0)==31?0:25-(a>>>1)|0);d=k[d>>2]|0;while(1){if((k[d+4>>2]&-8|0)==(e|0)){a=124;break}c=d+16+(b>>>31<<2)|0;a=k[c>>2]|0;if(!a){a=121;break}else{b=b<<1;d=a}}if((a|0)==121)if(c>>>0<(k[1546]|0)>>>0)ua();else{k[c>>2]=r;k[r+24>>2]=d;k[r+12>>2]=r;k[r+8>>2]=r;break}else if((a|0)==124){a=d+8|0;b=k[a>>2]|0;q=k[1546]|0;if(b>>>0>=q>>>0&d>>>0>=q>>>0){k[b+12>>2]=r;k[a>>2]=r;k[r+8>>2]=b;k[r+12>>2]=d;k[r+24>>2]=0;break}else ua()}}else{k[1543]=b|c;k[d>>2]=r;k[r+24>>2]=d;k[r+12>>2]=r;k[r+8>>2]=r}while(0);r=(k[1550]|0)+-1|0;k[1550]=r;if(!r)a=6624;else return;while(1){a=k[a>>2]|0;if(!a)break;else a=a+8|0}k[1550]=-1;return}function Xe(a,b){a=a|0;b=b|0;var c=0;if(a){c=$(b,a)|0;if((b|a)>>>0>65535)c=((c>>>0)/(a>>>0)|0|0)==(b|0)?c:-1}else c=0;a=Ve(c)|0;if(!a)return a|0;if(!(k[a+-4>>2]&3))return a|0;Kf(a|0,0,c|0)|0;return a|0}function Ye(a,b){a=a|0;b=b|0;var c=0,d=0;if(!a){b=Ve(b)|0;return b|0}if(b>>>0>4294967231){b=Oc()|0;k[b>>2]=12;b=0;return b|0}c=Ze(a+-8|0,b>>>0<11?16:b+11&-8)|0;if(c|0){b=c+8|0;return b|0}c=Ve(b)|0;if(!c){b=0;return b|0}d=k[a+-4>>2]|0;d=(d&-8)-((d&3|0)==0?8:4)|0;Nf(c|0,a|0,(d>>>0<b>>>0?d:b)|0)|0;We(a);b=c;return b|0}function Ze(a,b){a=a|0;b=b|0;var c=0,d=0,e=0,f=0,g=0,h=0,i=0,j=0,l=0,m=0,n=0,o=0;o=a+4|0;n=k[o>>2]|0;c=n&-8;j=a+c|0;h=k[1546]|0;d=n&3;if(!((d|0)!=1&a>>>0>=h>>>0&a>>>0<j>>>0))ua();e=k[j+4>>2]|0;if(!(e&1))ua();if(!d){if(b>>>0<256){a=0;return a|0}if(c>>>0>=(b+4|0)>>>0?(c-b|0)>>>0<=k[1662]<<1>>>0:0)return a|0;a=0;return a|0}if(c>>>0>=b>>>0){c=c-b|0;if(c>>>0<=15)return a|0;m=a+b|0;k[o>>2]=n&1|b|2;k[m+4>>2]=c|3;o=m+c+4|0;k[o>>2]=k[o>>2]|1;_e(m,c);return a|0}if((j|0)==(k[1548]|0)){m=(k[1545]|0)+c|0;c=m-b|0;d=a+b|0;if(m>>>0<=b>>>0){a=0;return a|0}k[o>>2]=n&1|b|2;k[d+4>>2]=c|1;k[1548]=d;k[1545]=c;return a|0}if((j|0)==(k[1547]|0)){e=(k[1544]|0)+c|0;if(e>>>0<b>>>0){a=0;return a|0}c=e-b|0;d=n&1;if(c>>>0>15){n=a+b|0;m=n+c|0;k[o>>2]=d|b|2;k[n+4>>2]=c|1;k[m>>2]=c;d=m+4|0;k[d>>2]=k[d>>2]&-2;d=n}else{k[o>>2]=d|e|2;d=a+e+4|0;k[d>>2]=k[d>>2]|1;d=0;c=0}k[1544]=c;k[1547]=d;return a|0}if(e&2|0){a=0;return a|0}l=(e&-8)+c|0;if(l>>>0<b>>>0){a=0;return a|0}m=l-b|0;f=e>>>3;a:do if(e>>>0>=256){g=k[j+24>>2]|0;e=k[j+12>>2]|0;do if((e|0)==(j|0)){e=j+16|0;d=e+4|0;c=k[d>>2]|0;if(!c){c=k[e>>2]|0;if(!c){i=0;break}else d=e}while(1){e=c+20|0;f=k[e>>2]|0;if(f|0){c=f;d=e;continue}e=c+16|0;f=k[e>>2]|0;if(!f)break;else{c=f;d=e}}if(d>>>0<h>>>0)ua();else{k[d>>2]=0;i=c;break}}else{f=k[j+8>>2]|0;if(f>>>0<h>>>0)ua();c=f+12|0;if((k[c>>2]|0)!=(j|0))ua();d=e+8|0;if((k[d>>2]|0)==(j|0)){k[c>>2]=e;k[d>>2]=f;i=e;break}else ua()}while(0);if(g|0){c=k[j+28>>2]|0;d=6472+(c<<2)|0;do if((j|0)==(k[d>>2]|0)){k[d>>2]=i;if(!i){k[1543]=k[1543]&~(1<<c);break a}}else if(g>>>0>=(k[1546]|0)>>>0){k[g+16+(((k[g+16>>2]|0)!=(j|0)&1)<<2)>>2]=i;if(!i)break a;else break}else ua();while(0);e=k[1546]|0;if(i>>>0<e>>>0)ua();k[i+24>>2]=g;c=j+16|0;d=k[c>>2]|0;do if(d|0)if(d>>>0<e>>>0)ua();else{k[i+16>>2]=d;k[d+24>>2]=i;break}while(0);c=k[c+4>>2]|0;if(c|0)if(c>>>0<(k[1546]|0)>>>0)ua();else{k[i+20>>2]=c;k[c+24>>2]=i;break}}}else{d=k[j+8>>2]|0;e=k[j+12>>2]|0;c=6208+(f<<1<<2)|0;if((d|0)!=(c|0)){if(d>>>0<h>>>0)ua();if((k[d+12>>2]|0)!=(j|0))ua()}if((e|0)==(d|0)){k[1542]=k[1542]&~(1<<f);break}if((e|0)!=(c|0)){if(e>>>0<h>>>0)ua();c=e+8|0;if((k[c>>2]|0)==(j|0))g=c;else ua()}else g=e+8|0;k[d+12>>2]=e;k[g>>2]=d}while(0);c=n&1;if(m>>>0<16){k[o>>2]=l|c|2;o=a+l+4|0;k[o>>2]=k[o>>2]|1;return a|0}else{n=a+b|0;k[o>>2]=c|b|2;k[n+4>>2]=m|3;o=n+m+4|0;k[o>>2]=k[o>>2]|1;_e(n,m);return a|0}return 0}function _e(a,b){a=a|0;b=b|0;var c=0,d=0,e=0,f=0,g=0,h=0,i=0,j=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0;o=a+b|0;c=k[a+4>>2]|0;a:do if(!(c&1)){f=k[a>>2]|0;if(!(c&3))return;l=a+(0-f)|0;j=f+b|0;h=k[1546]|0;if(l>>>0<h>>>0)ua();if((l|0)==(k[1547]|0)){a=o+4|0;c=k[a>>2]|0;if((c&3|0)!=3){r=l;e=j;break}k[1544]=j;k[a>>2]=c&-2;k[l+4>>2]=j|1;k[l+j>>2]=j;return}d=f>>>3;if(f>>>0<256){c=k[l+8>>2]|0;b=k[l+12>>2]|0;a=6208+(d<<1<<2)|0;if((c|0)!=(a|0)){if(c>>>0<h>>>0)ua();if((k[c+12>>2]|0)!=(l|0))ua()}if((b|0)==(c|0)){k[1542]=k[1542]&~(1<<d);r=l;e=j;break}if((b|0)!=(a|0)){if(b>>>0<h>>>0)ua();a=b+8|0;if((k[a>>2]|0)==(l|0))g=a;else ua()}else g=b+8|0;k[c+12>>2]=b;k[g>>2]=c;r=l;e=j;break}f=k[l+24>>2]|0;b=k[l+12>>2]|0;do if((b|0)==(l|0)){b=l+16|0;c=b+4|0;a=k[c>>2]|0;if(!a){a=k[b>>2]|0;if(!a){i=0;break}else c=b}while(1){b=a+20|0;d=k[b>>2]|0;if(d|0){a=d;c=b;continue}b=a+16|0;d=k[b>>2]|0;if(!d)break;else{a=d;c=b}}if(c>>>0<h>>>0)ua();else{k[c>>2]=0;i=a;break}}else{d=k[l+8>>2]|0;if(d>>>0<h>>>0)ua();a=d+12|0;if((k[a>>2]|0)!=(l|0))ua();c=b+8|0;if((k[c>>2]|0)==(l|0)){k[a>>2]=b;k[c>>2]=d;i=b;break}else ua()}while(0);if(f){a=k[l+28>>2]|0;c=6472+(a<<2)|0;do if((l|0)==(k[c>>2]|0)){k[c>>2]=i;if(!i){k[1543]=k[1543]&~(1<<a);r=l;e=j;break a}}else if(f>>>0>=(k[1546]|0)>>>0){k[f+16+(((k[f+16>>2]|0)!=(l|0)&1)<<2)>>2]=i;if(!i){r=l;e=j;break a}else break}else ua();while(0);b=k[1546]|0;if(i>>>0<b>>>0)ua();k[i+24>>2]=f;a=l+16|0;c=k[a>>2]|0;do if(c|0)if(c>>>0<b>>>0)ua();else{k[i+16>>2]=c;k[c+24>>2]=i;break}while(0);a=k[a+4>>2]|0;if(a)if(a>>>0<(k[1546]|0)>>>0)ua();else{k[i+20>>2]=a;k[a+24>>2]=i;r=l;e=j;break}else{r=l;e=j}}else{r=l;e=j}}else{r=a;e=b}while(0);g=k[1546]|0;if(o>>>0<g>>>0)ua();a=o+4|0;c=k[a>>2]|0;if(!(c&2)){a=k[1547]|0;if((o|0)==(k[1548]|0)){q=(k[1545]|0)+e|0;k[1545]=q;k[1548]=r;k[r+4>>2]=q|1;if((r|0)!=(a|0))return;k[1547]=0;k[1544]=0;return}if((o|0)==(a|0)){q=(k[1544]|0)+e|0;k[1544]=q;k[1547]=r;k[r+4>>2]=q|1;k[r+q>>2]=q;return}e=(c&-8)+e|0;d=c>>>3;b:do if(c>>>0>=256){f=k[o+24>>2]|0;b=k[o+12>>2]|0;do if((b|0)==(o|0)){b=o+16|0;c=b+4|0;a=k[c>>2]|0;if(!a){a=k[b>>2]|0;if(!a){n=0;break}else c=b}while(1){b=a+20|0;d=k[b>>2]|0;if(d|0){a=d;c=b;continue}b=a+16|0;d=k[b>>2]|0;if(!d)break;else{a=d;c=b}}if(c>>>0<g>>>0)ua();else{k[c>>2]=0;n=a;break}}else{d=k[o+8>>2]|0;if(d>>>0<g>>>0)ua();a=d+12|0;if((k[a>>2]|0)!=(o|0))ua();c=b+8|0;if((k[c>>2]|0)==(o|0)){k[a>>2]=b;k[c>>2]=d;n=b;break}else ua()}while(0);if(f|0){a=k[o+28>>2]|0;c=6472+(a<<2)|0;do if((o|0)==(k[c>>2]|0)){k[c>>2]=n;if(!n){k[1543]=k[1543]&~(1<<a);break b}}else if(f>>>0>=(k[1546]|0)>>>0){k[f+16+(((k[f+16>>2]|0)!=(o|0)&1)<<2)>>2]=n;if(!n)break b;else break}else ua();while(0);b=k[1546]|0;if(n>>>0<b>>>0)ua();k[n+24>>2]=f;a=o+16|0;c=k[a>>2]|0;do if(c|0)if(c>>>0<b>>>0)ua();else{k[n+16>>2]=c;k[c+24>>2]=n;break}while(0);a=k[a+4>>2]|0;if(a|0)if(a>>>0<(k[1546]|0)>>>0)ua();else{k[n+20>>2]=a;k[a+24>>2]=n;break}}}else{c=k[o+8>>2]|0;b=k[o+12>>2]|0;a=6208+(d<<1<<2)|0;if((c|0)!=(a|0)){if(c>>>0<g>>>0)ua();if((k[c+12>>2]|0)!=(o|0))ua()}if((b|0)==(c|0)){k[1542]=k[1542]&~(1<<d);break}if((b|0)!=(a|0)){if(b>>>0<g>>>0)ua();a=b+8|0;if((k[a>>2]|0)==(o|0))m=a;else ua()}else m=b+8|0;k[c+12>>2]=b;k[m>>2]=c}while(0);k[r+4>>2]=e|1;k[r+e>>2]=e;if((r|0)==(k[1547]|0)){k[1544]=e;return}}else{k[a>>2]=c&-2;k[r+4>>2]=e|1;k[r+e>>2]=e}a=e>>>3;if(e>>>0<256){b=6208+(a<<1<<2)|0;c=k[1542]|0;a=1<<a;if(c&a){a=b+8|0;c=k[a>>2]|0;if(c>>>0<(k[1546]|0)>>>0)ua();else{p=c;q=a}}else{k[1542]=c|a;p=b;q=b+8|0}k[q>>2]=r;k[p+12>>2]=r;k[r+8>>2]=p;k[r+12>>2]=b;return}a=e>>>8;if(a)if(e>>>0>16777215)a=31;else{p=(a+1048320|0)>>>16&8;q=a<<p;o=(q+520192|0)>>>16&4;q=q<<o;a=(q+245760|0)>>>16&2;a=14-(o|p|a)+(q<<a>>>15)|0;a=e>>>(a+7|0)&1|a<<1}else a=0;d=6472+(a<<2)|0;k[r+28>>2]=a;k[r+20>>2]=0;k[r+16>>2]=0;c=k[1543]|0;b=1<<a;if(!(c&b)){k[1543]=c|b;k[d>>2]=r;k[r+24>>2]=d;k[r+12>>2]=r;k[r+8>>2]=r;return}c=e<<((a|0)==31?0:25-(a>>>1)|0);d=k[d>>2]|0;while(1){if((k[d+4>>2]&-8|0)==(e|0)){a=121;break}b=d+16+(c>>>31<<2)|0;a=k[b>>2]|0;if(!a){a=118;break}else{c=c<<1;d=a}}if((a|0)==118){if(b>>>0<(k[1546]|0)>>>0)ua();k[b>>2]=r;k[r+24>>2]=d;k[r+12>>2]=r;k[r+8>>2]=r;return}else if((a|0)==121){a=d+8|0;c=k[a>>2]|0;q=k[1546]|0;if(!(c>>>0>=q>>>0&d>>>0>=q>>>0))ua();k[c+12>>2]=r;k[a>>2]=r;k[r+8>>2]=c;k[r+12>>2]=d;k[r+24>>2]=0;return}}function $e(a){a=a|0;var b=0;b=(a|0)==0?1:a;while(1){a=Ve(b)|0;if(a|0)break;a=Ef()|0;if(!a){a=0;break}ab[a&3]()}return a|0}function af(a){a=a|0;return $e(a)|0}function bf(a){a=a|0;We(a);return}function cf(a){a=a|0;bf(a);return}function df(){var a=0,b=0,c=0,d=0,e=0,f=0,g=0,h=0;e=u;u=u+48|0;g=e+32|0;c=e+24|0;h=e+16|0;f=e;e=e+36|0;a=ef()|0;if(a|0?(d=k[a>>2]|0,d|0):0){a=d+48|0;b=k[a>>2]|0;a=k[a+4>>2]|0;if(!((b&-256|0)==1126902528&(a|0)==1129074247)){k[c>>2]=k[336];ff(5590,c)}if((b|0)==1126902529&(a|0)==1129074247)a=k[d+44>>2]|0;else a=d+80|0;k[e>>2]=a;d=k[d>>2]|0;a=k[d+4>>2]|0;d=Wa[k[(k[26]|0)+16>>2]&15](104,d,e)|0;b=k[336]|0;if(d){h=k[e>>2]|0;h=_a[k[(k[h>>2]|0)+8>>2]&7](h)|0;k[f>>2]=b;k[f+4>>2]=a;k[f+8>>2]=h;ff(5504,f)}else{k[h>>2]=b;k[h+4>>2]=a;ff(5549,h)}}ff(5628,g)}function ef(){var a=0,b=0;a=u;u=u+16|0;if(!(Ga(6664,3)|0)){b=Ea(k[1667]|0)|0;u=a;return b|0}else ff(5779,a);return 0}function ff(a,b){a=a|0;b=b|0;var c=0;c=u;u=u+16|0;k[c>>2]=b;b=k[105]|0;id(b,a,c)|0;de(10,b)|0;ua()}function gf(a){a=a|0;return}function hf(a){a=a|0;gf(a);bf(a);return}function jf(a){a=a|0;return}function kf(a){a=a|0;return}function lf(a,b,c){a=a|0;b=b|0;c=c|0;var d=0,e=0,f=0,g=0;g=u;u=u+64|0;e=g;if(!(pf(a,b,0)|0))if((b|0)!=0?(f=tf(b,128,112,0)|0,(f|0)!=0):0){b=e+4|0;d=b+52|0;do{k[b>>2]=0;b=b+4|0}while((b|0)<(d|0));k[e>>2]=f;k[e+8>>2]=a;k[e+12>>2]=-1;k[e+48>>2]=1;bb[k[(k[f>>2]|0)+28>>2]&3](f,e,k[c>>2]|0,1);if((k[e+24>>2]|0)==1){k[c>>2]=k[e+16>>2];b=1}else b=0}else b=0;else b=1;u=g;return b|0}function mf(a,b,c,d,e,f){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;f=f|0;if(pf(a,k[b+8>>2]|0,f)|0)sf(0,b,c,d,e);return}function nf(a,b,c,d,e){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;var f=0;do if(!(pf(a,k[b+8>>2]|0,e)|0)){if(pf(a,k[b>>2]|0,e)|0){a=b+32|0;if((k[b+16>>2]|0)!=(c|0)?(f=b+20|0,(k[f>>2]|0)!=(c|0)):0){k[a>>2]=d;k[f>>2]=c;d=b+40|0;k[d>>2]=(k[d>>2]|0)+1;if((k[b+36>>2]|0)==1?(k[b+24>>2]|0)==2:0)i[b+54>>0]=1;k[b+44>>2]=4;break}if((d|0)==1)k[a>>2]=1}}else rf(0,b,c,d);while(0);return}function of(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;if(pf(a,k[b+8>>2]|0,0)|0)qf(0,b,c,d);return}function pf(a,b,c){a=a|0;b=b|0;c=c|0;return (a|0)==(b|0)|0}function qf(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;var e=0,f=0,g=0;a=b+16|0;e=k[a>>2]|0;f=b+36|0;g=b+24|0;do if(e){if((e|0)!=(c|0)){k[f>>2]=(k[f>>2]|0)+1;k[g>>2]=2;i[b+54>>0]=1;break}if((k[g>>2]|0)==2)k[g>>2]=d}else{k[a>>2]=c;k[g>>2]=d;k[f>>2]=1}while(0);return}function rf(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;var e=0;if((k[b+4>>2]|0)==(c|0)?(e=b+28|0,(k[e>>2]|0)!=1):0)k[e>>2]=d;return}function sf(a,b,c,d,e){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;var f=0,g=0,h=0,j=0;i[b+53>>0]=1;do if((k[b+4>>2]|0)==(d|0)){i[b+52>>0]=1;d=b+16|0;f=k[d>>2]|0;h=b+54|0;j=b+48|0;g=b+24|0;a=b+36|0;if(!f){k[d>>2]=c;k[g>>2]=e;k[a>>2]=1;if(!((k[j>>2]|0)==1&(e|0)==1))break;i[h>>0]=1;break}if((f|0)!=(c|0)){k[a>>2]=(k[a>>2]|0)+1;i[h>>0]=1;break}a=k[g>>2]|0;if((a|0)==2){k[g>>2]=e;a=e}if((k[j>>2]|0)==1&(a|0)==1)i[h>>0]=1}while(0);return}function tf(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;var e=0,f=0,g=0,h=0,l=0,m=0,n=0,o=0,p=0;p=u;u=u+64|0;n=p;m=k[a>>2]|0;o=a+(k[m+-8>>2]|0)|0;m=k[m+-4>>2]|0;k[n>>2]=c;k[n+4>>2]=a;k[n+8>>2]=b;k[n+12>>2]=d;a=n+16|0;b=n+20|0;d=n+24|0;e=n+28|0;f=n+32|0;g=n+40|0;h=a;l=h+36|0;do{k[h>>2]=0;h=h+4|0}while((h|0)<(l|0));j[a+36>>1]=0;i[a+38>>0]=0;a:do if(pf(m,c,0)|0){k[n+48>>2]=1;Xa[k[(k[m>>2]|0)+20>>2]&3](m,n,o,o,1,0);a=(k[d>>2]|0)==1?o:0}else{cb[k[(k[m>>2]|0)+24>>2]&3](m,n,o,1,0);switch(k[n+36>>2]|0){case 0:{a=(k[g>>2]|0)==1&(k[e>>2]|0)==1&(k[f>>2]|0)==1?k[b>>2]|0:0;break a}case 1:break;default:{a=0;break a}}if((k[d>>2]|0)!=1?!((k[g>>2]|0)==0&(k[e>>2]|0)==1&(k[f>>2]|0)==1):0){a=0;break}a=k[a>>2]|0}while(0);u=p;return a|0}function uf(a){a=a|0;gf(a);bf(a);return}function vf(a,b,c,d,e,f){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;f=f|0;if(pf(a,k[b+8>>2]|0,f)|0)sf(0,b,c,d,e);else{a=k[a+8>>2]|0;Xa[k[(k[a>>2]|0)+20>>2]&3](a,b,c,d,e,f)}return}function wf(a,b,c,d,e){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;var f=0,g=0,h=0,j=0;do if(!(pf(a,k[b+8>>2]|0,e)|0)){f=a+8|0;if(!(pf(a,k[b>>2]|0,e)|0)){h=k[f>>2]|0;cb[k[(k[h>>2]|0)+24>>2]&3](h,b,c,d,e);break}a=b+32|0;if((k[b+16>>2]|0)!=(c|0)?(g=b+20|0,(k[g>>2]|0)!=(c|0)):0){k[a>>2]=d;d=b+44|0;if((k[d>>2]|0)==4)break;a=b+52|0;i[a>>0]=0;j=b+53|0;i[j>>0]=0;f=k[f>>2]|0;Xa[k[(k[f>>2]|0)+20>>2]&3](f,b,c,c,1,e);if(i[j>>0]|0)if(!(i[a>>0]|0)){a=3;h=11}else a=3;else{a=4;h=11}if((h|0)==11){k[g>>2]=c;j=b+40|0;k[j>>2]=(k[j>>2]|0)+1;if((k[b+36>>2]|0)==1?(k[b+24>>2]|0)==2:0)i[b+54>>0]=1}k[d>>2]=a;break}if((d|0)==1)k[a>>2]=1}else rf(0,b,c,d);while(0);return}function xf(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;if(pf(a,k[b+8>>2]|0,0)|0)qf(0,b,c,d);else{a=k[a+8>>2]|0;bb[k[(k[a>>2]|0)+28>>2]&3](a,b,c,d)}return}function yf(a){a=a|0;return}function zf(){var a=0;a=u;u=u+16|0;if(!(ta(6668,21)|0)){u=a;return}else ff(5828,a)}function Af(a){a=a|0;var b=0;b=u;u=u+16|0;We(a);if(!(La(k[1667]|0,0)|0)){u=b;return}else ff(5878,b)}function Bf(){var a=0,b=0;a=ef()|0;if((a|0?(b=k[a>>2]|0,b|0):0)?(a=b+48|0,(k[a>>2]&-256|0)==1126902528?(k[a+4>>2]|0)==1129074247:0):0)Cf(k[b+12>>2]|0);Cf(Df()|0)}function Cf(a){a=a|0;var b=0;b=u;u=u+16|0;ab[a&3]();ff(5931,b)}function Df(){var a=0;a=k[335]|0;k[335]=a+0;return a|0}function Ef(){var a=0;a=k[1668]|0;k[1668]=a+0;return a|0}function Ff(a,b,c){a=a|0;b=b|0;c=c|0;var d=0,e=0;e=u;u=u+16|0;d=e;k[d>>2]=k[c>>2];a=Wa[k[(k[a>>2]|0)+16>>2]&15](a,b,d)|0;if(a)k[c>>2]=k[d>>2];u=e;return a&1|0}function Gf(a){a=a|0;if(!a)a=0;else a=(tf(a,128,184,0)|0)!=0;return a&1|0}function Hf(){}function If(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;d=b-d-(c>>>0>a>>>0|0)>>>0;return (M=d,a-c>>>0|0)|0}function Jf(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;c=a+c>>>0;return (M=b+d+(c>>>0<a>>>0|0)>>>0,c|0)|0}function Kf(a,b,c){a=a|0;b=b|0;c=c|0;var d=0,e=0,f=0,g=0;f=a+c|0;b=b&255;if((c|0)>=67){while(a&3){i[a>>0]=b;a=a+1|0}d=f&-4|0;e=d-64|0;g=b|b<<8|b<<16|b<<24;while((a|0)<=(e|0)){k[a>>2]=g;k[a+4>>2]=g;k[a+8>>2]=g;k[a+12>>2]=g;k[a+16>>2]=g;k[a+20>>2]=g;k[a+24>>2]=g;k[a+28>>2]=g;k[a+32>>2]=g;k[a+36>>2]=g;k[a+40>>2]=g;k[a+44>>2]=g;k[a+48>>2]=g;k[a+52>>2]=g;k[a+56>>2]=g;k[a+60>>2]=g;a=a+64|0}while((a|0)<(d|0)){k[a>>2]=g;a=a+4|0}}while((a|0)<(f|0)){i[a>>0]=b;a=a+1|0}return f-c|0}function Lf(a,b,c){a=a|0;b=b|0;c=c|0;if((c|0)<32){M=b<<c|(a&(1<<c)-1<<32-c)>>>32-c;return a<<c}M=a<<c-32;return 0}function Mf(a,b,c){a=a|0;b=b|0;c=c|0;if((c|0)<32){M=b>>>c;return a>>>c|(b&(1<<c)-1)<<32-c}M=0;return b>>>c-32|0}function Nf(a,b,c){a=a|0;b=b|0;c=c|0;var d=0,e=0,f=0;if((c|0)>=8192)return Aa(a|0,b|0,c|0)|0;f=a|0;e=a+c|0;if((a&3)==(b&3)){while(a&3){if(!c)return f|0;i[a>>0]=i[b>>0]|0;a=a+1|0;b=b+1|0;c=c-1|0}c=e&-4|0;d=c-64|0;while((a|0)<=(d|0)){k[a>>2]=k[b>>2];k[a+4>>2]=k[b+4>>2];k[a+8>>2]=k[b+8>>2];k[a+12>>2]=k[b+12>>2];k[a+16>>2]=k[b+16>>2];k[a+20>>2]=k[b+20>>2];k[a+24>>2]=k[b+24>>2];k[a+28>>2]=k[b+28>>2];k[a+32>>2]=k[b+32>>2];k[a+36>>2]=k[b+36>>2];k[a+40>>2]=k[b+40>>2];k[a+44>>2]=k[b+44>>2];k[a+48>>2]=k[b+48>>2];k[a+52>>2]=k[b+52>>2];k[a+56>>2]=k[b+56>>2];k[a+60>>2]=k[b+60>>2];a=a+64|0;b=b+64|0}while((a|0)<(c|0)){k[a>>2]=k[b>>2];a=a+4|0;b=b+4|0}}else{c=e-4|0;while((a|0)<(c|0)){i[a>>0]=i[b>>0]|0;i[a+1>>0]=i[b+1>>0]|0;i[a+2>>0]=i[b+2>>0]|0;i[a+3>>0]=i[b+3>>0]|0;a=a+4|0;b=b+4|0}}while((a|0)<(e|0)){i[a>>0]=i[b>>0]|0;a=a+1|0;b=b+1|0}return f|0}function Of(a){a=a|0;var b=0;b=i[w+(a&255)>>0]|0;if((b|0)<8)return b|0;b=i[w+(a>>8&255)>>0]|0;if((b|0)<8)return b+8|0;b=i[w+(a>>16&255)>>0]|0;if((b|0)<8)return b+16|0;return (i[w+(a>>>24)>>0]|0)+24|0}function Pf(a,b,c,d,e){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;var f=0,g=0,h=0,i=0,j=0,l=0,m=0,n=0,o=0,p=0;l=a;i=b;j=i;g=c;n=d;h=n;if(!j){f=(e|0)!=0;if(!h){if(f){k[e>>2]=(l>>>0)%(g>>>0);k[e+4>>2]=0}n=0;e=(l>>>0)/(g>>>0)>>>0;return (M=n,e)|0}else{if(!f){n=0;e=0;return (M=n,e)|0}k[e>>2]=a|0;k[e+4>>2]=b&0;n=0;e=0;return (M=n,e)|0}}f=(h|0)==0;do if(g){if(!f){f=(ca(h|0)|0)-(ca(j|0)|0)|0;if(f>>>0<=31){m=f+1|0;h=31-f|0;b=f-31>>31;g=m;a=l>>>(m>>>0)&b|j<<h;b=j>>>(m>>>0)&b;f=0;h=l<<h;break}if(!e){n=0;e=0;return (M=n,e)|0}k[e>>2]=a|0;k[e+4>>2]=i|b&0;n=0;e=0;return (M=n,e)|0}f=g-1|0;if(f&g|0){h=(ca(g|0)|0)+33-(ca(j|0)|0)|0;p=64-h|0;m=32-h|0;i=m>>31;o=h-32|0;b=o>>31;g=h;a=m-1>>31&j>>>(o>>>0)|(j<<m|l>>>(h>>>0))&b;b=b&j>>>(h>>>0);f=l<<p&i;h=(j<<p|l>>>(o>>>0))&i|l<<m&h-33>>31;break}if(e|0){k[e>>2]=f&l;k[e+4>>2]=0}if((g|0)==1){o=i|b&0;p=a|0|0;return (M=o,p)|0}else{p=Of(g|0)|0;o=j>>>(p>>>0)|0;p=j<<32-p|l>>>(p>>>0)|0;return (M=o,p)|0}}else{if(f){if(e|0){k[e>>2]=(j>>>0)%(g>>>0);k[e+4>>2]=0}o=0;p=(j>>>0)/(g>>>0)>>>0;return (M=o,p)|0}if(!l){if(e|0){k[e>>2]=0;k[e+4>>2]=(j>>>0)%(h>>>0)}o=0;p=(j>>>0)/(h>>>0)>>>0;return (M=o,p)|0}f=h-1|0;if(!(f&h)){if(e|0){k[e>>2]=a|0;k[e+4>>2]=f&j|b&0}o=0;p=j>>>((Of(h|0)|0)>>>0);return (M=o,p)|0}f=(ca(h|0)|0)-(ca(j|0)|0)|0;if(f>>>0<=30){b=f+1|0;h=31-f|0;g=b;a=j<<h|l>>>(b>>>0);b=j>>>(b>>>0);f=0;h=l<<h;break}if(!e){o=0;p=0;return (M=o,p)|0}k[e>>2]=a|0;k[e+4>>2]=i|b&0;o=0;p=0;return (M=o,p)|0}while(0);if(!g){j=h;i=0;h=0}else{m=c|0|0;l=n|d&0;j=Jf(m|0,l|0,-1,-1)|0;c=M;i=h;h=0;do{d=i;i=f>>>31|i<<1;f=h|f<<1;d=a<<1|d>>>31|0;n=a>>>31|b<<1|0;If(j|0,c|0,d|0,n|0)|0;p=M;o=p>>31|((p|0)<0?-1:0)<<1;h=o&1;a=If(d|0,n|0,o&m|0,(((p|0)<0?-1:0)>>31|((p|0)<0?-1:0)<<1)&l|0)|0;b=M;g=g-1|0}while((g|0)!=0);j=i;i=0}g=0;if(e|0){k[e>>2]=a;k[e+4>>2]=b}o=(f|0)>>>31|(j|g)<<1|(g<<1|f>>>31)&0|i;p=(f<<1|0>>>31)&-2|h;return (M=o,p)|0}function Qf(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;return Pf(a,b,c,d,0)|0}function Rf(a,b){a=a|0;b=b|0;var c=0,d=0,e=0,f=0;f=a&65535;e=b&65535;c=$(e,f)|0;d=a>>>16;a=(c>>>16)+($(e,d)|0)|0;e=b>>>16;b=$(e,f)|0;return (M=(a>>>16)+($(e,d)|0)+(((a&65535)+b|0)>>>16)|0,a+b<<16|c&65535|0)|0}function Sf(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;var e=0,f=0;e=a;f=c;c=Rf(e,f)|0;a=M;return (M=($(b,f)|0)+($(d,e)|0)+a|a&0,c|0|0)|0}function Tf(a){a=a|0;var b=0,c=0;c=a+15&-16|0;b=k[r>>2]|0;a=b+c|0;if((c|0)>0&(a|0)<(b|0)|(a|0)<0){ha()|0;ya(12);return -1}k[r>>2]=a;if((a|0)>(ga()|0)?(fa()|0)==0:0){ya(12);k[r>>2]=b;return -1}return b|0}function Uf(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;var e=0,f=0;f=u;u=u+16|0;e=f|0;Pf(a,b,c,d,e)|0;u=f;return (M=k[e+4>>2]|0,k[e>>2]|0)|0}function Vf(a){a=a|0;return (a&255)<<24|(a>>8&255)<<16|(a>>16&255)<<8|a>>>24|0}function Wf(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;return Wa[a&15](b|0,c|0,d|0)|0}function Xf(a,b,c,d,e,f,g){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;f=f|0;g=g|0;Xa[a&3](b|0,c|0,d|0,e|0,f|0,g|0)}function Yf(a,b){a=a|0;b=b|0;return +Ya[a&3](b|0)}function Zf(a,b){a=a|0;b=b|0;Za[a&31](b|0)}function _f(a,b){a=a|0;b=b|0;return _a[a&7](b|0)|0}function $f(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;$a[a&7](b|0,c|0,d|0)}function ag(a){a=a|0;ab[a&3]()}function bg(a,b,c,d,e){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;bb[a&3](b|0,c|0,d|0,e|0)}function cg(a,b,c,d,e,f){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;f=f|0;cb[a&3](b|0,c|0,d|0,e|0,f|0)}function dg(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;return +db[a&7](b|0,c|0,d|0)}function eg(a,b,c){a=a|0;b=b|0;c=c|0;da(0);return 0}function fg(a,b,c,d,e,f){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;f=f|0;da(1)}function gg(a){a=a|0;da(2);return 0.0}function hg(a){a=a|0;da(3)}function ig(a){a=a|0;da(4);return 0}function jg(a,b,c){a=a|0;b=b|0;c=c|0;da(5)}function kg(){da(6)}function lg(){Pa()}function mg(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;da(7)}function ng(a,b,c,d,e){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;da(8)}function og(a,b,c){a=a|0;b=b|0;c=c|0;da(9);return 0.0}

// EMSCRIPTEN_END_FUNCS
var Wa=[eg,Fb,Mb,kc,oc,sc,Lc,Mc,Tc,Id,lf,Sc,eg,eg,eg,eg];var Xa=[fg,mf,vf,fg];var Ya=[gg,Gb,Nb,gg];var Za=[hg,Bb,Cb,Db,Eb,Hb,Kb,Lb,Ob,jc,nc,hc,rc,ec,vc,gf,hf,jf,kf,uf,lb,Af,hg,hg,hg,hg,hg,hg,hg,hg,hg,hg];var _a=[ig,lc,pc,tc,Kc,ig,ig,ig];var $a=[jg,Ab,mc,qc,uc,jg,jg,jg];var ab=[kg,lg,df,zf];var bb=[mg,of,xf,mg];var cb=[ng,nf,wf,ng];var db=[og,Wb,Vb,Ub,Tb,Sb,og,og];return{_parse_command_line:nb,_svm_get_labels:Bc,_libsvm_train_problem:tb,_libsvm_train:yb,_svm_get_nr_sv:Dc,_deserialize_model:qb,_llvm_cttz_i32:Of,_bitshift64Lshr:Mf,_get_svr_epsilon:zb,_libsvm_cross_validation:ub,___udivmoddi4:Pf,_svm_get_svm_type:Ac,_libsvm_predict_one_probability:xb,_fflush:Fe,___cxa_is_pointer_type:Gf,_libsvm_predict_one:wb,_memset:Kf,_add_instance:ob,_sbrk:Tf,_memcpy:Nf,_llvm_bswap_i32:Vf,___muldi3:Sf,_bitshift64Shl:Lf,___uremdi3:Uf,_svm_get_sv_indices:Cc,_i64Subtract:If,_serialize_model:pb,_svm_get_nr_class:xc,_i64Add:Jf,_emscripten_get_global_libc:Uc,_svm_free_model:sb,___udivdi3:Qf,_free_problem:vb,___errno_location:Oc,___muldsi3:Rf,___cxa_can_catch:Ff,_free:We,_create_svm_nodes:rb,_malloc:Ve,runPostSets:Hf,_emscripten_replace_memory:Va,stackAlloc:eb,stackSave:fb,stackRestore:gb,establishStackSpace:hb,setTempRet0:jb,getTempRet0:kb,setThrew:ib,stackAlloc:eb,stackSave:fb,stackRestore:gb,establishStackSpace:hb,setThrew:ib,setTempRet0:jb,getTempRet0:kb,dynCall_iiii:Wf,dynCall_viiiiii:Xf,dynCall_di:Yf,dynCall_vi:Zf,dynCall_ii:_f,dynCall_viii:$f,dynCall_v:ag,dynCall_viiii:bg,dynCall_viiiii:cg,dynCall_diii:dg}})


// EMSCRIPTEN_END_ASM
(Module.asmGlobalArg,Module.asmLibraryArg,buffer);var _parse_command_line=Module["_parse_command_line"]=asm["_parse_command_line"];var _svm_get_labels=Module["_svm_get_labels"]=asm["_svm_get_labels"];var _libsvm_train_problem=Module["_libsvm_train_problem"]=asm["_libsvm_train_problem"];var _libsvm_train=Module["_libsvm_train"]=asm["_libsvm_train"];var _svm_get_nr_sv=Module["_svm_get_nr_sv"]=asm["_svm_get_nr_sv"];var _deserialize_model=Module["_deserialize_model"]=asm["_deserialize_model"];var getTempRet0=Module["getTempRet0"]=asm["getTempRet0"];var _memset=Module["_memset"]=asm["_memset"];var _bitshift64Lshr=Module["_bitshift64Lshr"]=asm["_bitshift64Lshr"];var setThrew=Module["setThrew"]=asm["setThrew"];var _get_svr_epsilon=Module["_get_svr_epsilon"]=asm["_get_svr_epsilon"];var _libsvm_cross_validation=Module["_libsvm_cross_validation"]=asm["_libsvm_cross_validation"];var _svm_get_svm_type=Module["_svm_get_svm_type"]=asm["_svm_get_svm_type"];var _libsvm_predict_one_probability=Module["_libsvm_predict_one_probability"]=asm["_libsvm_predict_one_probability"];var _fflush=Module["_fflush"]=asm["_fflush"];var ___cxa_is_pointer_type=Module["___cxa_is_pointer_type"]=asm["___cxa_is_pointer_type"];var _libsvm_predict_one=Module["_libsvm_predict_one"]=asm["_libsvm_predict_one"];var stackRestore=Module["stackRestore"]=asm["stackRestore"];var _llvm_cttz_i32=Module["_llvm_cttz_i32"]=asm["_llvm_cttz_i32"];var _add_instance=Module["_add_instance"]=asm["_add_instance"];var _sbrk=Module["_sbrk"]=asm["_sbrk"];var _memcpy=Module["_memcpy"]=asm["_memcpy"];var stackSave=Module["stackSave"]=asm["stackSave"];var ___errno_location=Module["___errno_location"]=asm["___errno_location"];var ___muldi3=Module["___muldi3"]=asm["___muldi3"];var _bitshift64Shl=Module["_bitshift64Shl"]=asm["_bitshift64Shl"];var ___uremdi3=Module["___uremdi3"]=asm["___uremdi3"];var stackAlloc=Module["stackAlloc"]=asm["stackAlloc"];var _svm_get_sv_indices=Module["_svm_get_sv_indices"]=asm["_svm_get_sv_indices"];var _i64Subtract=Module["_i64Subtract"]=asm["_i64Subtract"];var ___udivmoddi4=Module["___udivmoddi4"]=asm["___udivmoddi4"];var setTempRet0=Module["setTempRet0"]=asm["setTempRet0"];var _svm_get_nr_class=Module["_svm_get_nr_class"]=asm["_svm_get_nr_class"];var _i64Add=Module["_i64Add"]=asm["_i64Add"];var _emscripten_get_global_libc=Module["_emscripten_get_global_libc"]=asm["_emscripten_get_global_libc"];var _svm_free_model=Module["_svm_free_model"]=asm["_svm_free_model"];var ___udivdi3=Module["___udivdi3"]=asm["___udivdi3"];var _free_problem=Module["_free_problem"]=asm["_free_problem"];var _llvm_bswap_i32=Module["_llvm_bswap_i32"]=asm["_llvm_bswap_i32"];var ___muldsi3=Module["___muldsi3"]=asm["___muldsi3"];var ___cxa_can_catch=Module["___cxa_can_catch"]=asm["___cxa_can_catch"];var _free=Module["_free"]=asm["_free"];var runPostSets=Module["runPostSets"]=asm["runPostSets"];var establishStackSpace=Module["establishStackSpace"]=asm["establishStackSpace"];var _create_svm_nodes=Module["_create_svm_nodes"]=asm["_create_svm_nodes"];var _serialize_model=Module["_serialize_model"]=asm["_serialize_model"];var _malloc=Module["_malloc"]=asm["_malloc"];var _emscripten_replace_memory=Module["_emscripten_replace_memory"]=asm["_emscripten_replace_memory"];var dynCall_iiii=Module["dynCall_iiii"]=asm["dynCall_iiii"];var dynCall_viiiiii=Module["dynCall_viiiiii"]=asm["dynCall_viiiiii"];var dynCall_di=Module["dynCall_di"]=asm["dynCall_di"];var dynCall_vi=Module["dynCall_vi"]=asm["dynCall_vi"];var dynCall_ii=Module["dynCall_ii"]=asm["dynCall_ii"];var dynCall_viii=Module["dynCall_viii"]=asm["dynCall_viii"];var dynCall_v=Module["dynCall_v"]=asm["dynCall_v"];var dynCall_viiii=Module["dynCall_viiii"]=asm["dynCall_viiii"];var dynCall_viiiii=Module["dynCall_viiiii"]=asm["dynCall_viiiii"];var dynCall_diii=Module["dynCall_diii"]=asm["dynCall_diii"];Runtime.stackAlloc=Module["stackAlloc"];Runtime.stackSave=Module["stackSave"];Runtime.stackRestore=Module["stackRestore"];Runtime.establishStackSpace=Module["establishStackSpace"];Runtime.setTempRet0=Module["setTempRet0"];Runtime.getTempRet0=Module["getTempRet0"];Module["asm"]=asm;function ExitStatus(status){this.name="ExitStatus";this.message="Program terminated with exit("+status+")";this.status=status}ExitStatus.prototype=new Error;ExitStatus.prototype.constructor=ExitStatus;var initialStackTop;var preloadStartTime=null;var calledMain=false;dependenciesFulfilled=function runCaller(){if(!Module["calledRun"])run();if(!Module["calledRun"])dependenciesFulfilled=runCaller};Module["callMain"]=Module.callMain=function callMain(args){args=args||[];ensureInitRuntime();var argc=args.length+1;function pad(){for(var i=0;i<4-1;i++){argv.push(0)}}var argv=[allocate(intArrayFromString(Module["thisProgram"]),"i8",ALLOC_NORMAL)];pad();for(var i=0;i<argc-1;i=i+1){argv.push(allocate(intArrayFromString(args[i]),"i8",ALLOC_NORMAL));pad()}argv.push(0);argv=allocate(argv,"i32",ALLOC_NORMAL);try{var ret=Module["_main"](argc,argv,0);exit(ret,true)}catch(e){if(e instanceof ExitStatus){return}else if(e=="SimulateInfiniteLoop"){Module["noExitRuntime"]=true;return}else{var toLog=e;if(e&&typeof e==="object"&&e.stack){toLog=[e,e.stack]}Module.printErr("exception thrown: "+toLog);Module["quit"](1,e)}}finally{calledMain=true}};function run(args){args=args||Module["arguments"];if(preloadStartTime===null)preloadStartTime=Date.now();if(runDependencies>0){return}preRun();if(runDependencies>0)return;if(Module["calledRun"])return;function doRun(){if(Module["calledRun"])return;Module["calledRun"]=true;if(ABORT)return;ensureInitRuntime();preMain();if(Module["onRuntimeInitialized"])Module["onRuntimeInitialized"]();if(Module["_main"]&&shouldRunNow)Module["callMain"](args);postRun()}if(Module["setStatus"]){Module["setStatus"]("Running...");setTimeout((function(){setTimeout((function(){Module["setStatus"]("")}),1);doRun()}),1)}else{doRun()}}Module["run"]=Module.run=run;function exit(status,implicit){if(implicit&&Module["noExitRuntime"]){return}if(Module["noExitRuntime"]){}else{ABORT=true;EXITSTATUS=status;STACKTOP=initialStackTop;exitRuntime();if(Module["onExit"])Module["onExit"](status)}if(ENVIRONMENT_IS_NODE){process["exit"](status)}Module["quit"](status,new ExitStatus(status))}Module["exit"]=Module.exit=exit;var abortDecorators=[];function abort(what){if(what!==undefined){Module.print(what);Module.printErr(what);what=JSON.stringify(what)}else{what=""}ABORT=true;EXITSTATUS=1;var extra="\nIf this abort() is unexpected, build with -s ASSERTIONS=1 which can give more information.";var output="abort("+what+") at "+stackTrace()+extra;if(abortDecorators){abortDecorators.forEach((function(decorator){output=decorator(output,what)}))}throw output}Module["abort"]=Module.abort=abort;if(Module["preInit"]){if(typeof Module["preInit"]=="function")Module["preInit"]=[Module["preInit"]];while(Module["preInit"].length>0){Module["preInit"].pop()()}}var shouldRunNow=true;if(Module["noInitialRun"]){shouldRunNow=false}run()





},{"crypto":undefined,"fs":undefined,"path":undefined}],3:[function(require,module,exports){
'use strict';

module.exports = function (libsvm) {
    const util = require('./util');

    /* eslint-disable camelcase */
    const predict_one = libsvm.cwrap('libsvm_predict_one', 'number', ['number', 'array', 'number']);
    const predict_one_probability = libsvm.cwrap('libsvm_predict_one_probability', 'number', ['number', 'array', 'number', 'number']);
    const add_instance = libsvm.cwrap('add_instance', null, ['number', 'array', 'number', 'number', 'number']);
    const create_svm_nodes = libsvm.cwrap('create_svm_nodes', 'number', ['number', 'number']);
    const train_problem = libsvm.cwrap('libsvm_train_problem', 'number', ['number', 'string']);
    const svm_get_nr_sv = libsvm.cwrap('svm_get_nr_sv', 'number', ['number']);
    const svm_get_nr_class = libsvm.cwrap('svm_get_nr_class', 'number', ['number']);
    const svm_get_sv_indices = libsvm.cwrap('svm_get_sv_indices', null, ['number', 'number']);
    const svm_get_labels = libsvm.cwrap('svm_get_labels', null, ['number', 'number']);
    const svm_free_model = libsvm.cwrap('svm_free_model', null, ['number']);
    const svm_cross_validation = libsvm.cwrap('libsvm_cross_validation', null, ['number', 'string', 'number', 'number']);
    const free_problem = libsvm.cwrap('free_problem', null, ['number']);
    const serialize_model = libsvm.cwrap('serialize_model', 'number', ['number']);
    const deserialize_model = libsvm.cwrap('deserialize_model', 'number', ['string']);

    /* eslint-enable camelcase */

    class SVM {
        /**
         * @constructor
         * @param {object} options
         * @param {number} [options.type=SVM_TYPES.C_SVC] - Type of SVM to perform,
         * @param {number} [options.kernel=KERNEL_TYPES.RBF] - Kernel function,
         * @param {number} [options.degree=3] - Degree of polynomial, for polynomial kernel
         * @param {number} [options.gamma] -  Gamma parameter of the RBF, Polynomial and Sigmoid kernels. Default value is 1/num_features
         * @param {number} [options.coef0=0] - coef0 parameter for Polynomial and Sigmoid kernels
         * @param {number} [options.cost=1] - Cost parameter, for C SVC, Epsilon SVR and NU SVR
         * @param {number} [options.nu=0.5] - For NU SVC and NU SVR
         * @param {number} [options.epsilon=0.1] - For epsilon SVR
         * @param {number} [options.cacheSize=100] - Cache size in MB
         * @param {number} [options.tolerance=0.001] - Tolerance
         * @param {boolean} [options.shrinking=true] - Use shrinking euristics (faster),
         * @param {boolean} [options.probabilityEstimates=false] - weather to train SVC/SVR model for probability estimates,
         * @param {object} [options.weight] - Set weight for each possible class
         * @param {boolean} [options.quiet=true] - Print info during training if false
         */
        constructor(options) {
            this.options = Object.assign({}, options);
            this.model = null;
        }

        /**
         * Trains the SVM model.
         * @param {Array<Array<number>>} samples - The training samples. First level of array are the samples, second
         * level are the individual features
         * @param {Array<number>} labels - The training labels. It should have the same size as the samples. If you are
         * training a classification model, the labels should be distinct integers for each class. If you are training
         * a regression model, each label should be the value of the predicted variable.
         * @throws if SVM instance was instantiated from SVM.load.
         */
        train(samples, labels) {
            if (this._deserialized) throw new Error('Train cannot be called on instance created with SVM.load');
            this.free();
            this.problem = createProblem(samples, labels);
            const command = this.getCommand();
            this.model = train_problem(this.problem, command);
        }

        /**
         * Performs k-fold cross-validation (KF-CV). KF-CV separates the data-set into kFold random equally sized partitions,
         * and uses each as a validation set, with all other partitions used in the training set. Observations left over
         * from if kFold does not divide the number of observations are left out of the cross-validation process. If
         * kFold is one, this is equivalent to a leave-on-out cross-validation
         * @param {Array<Array<number>>} samples - The training samples.
         * @param {Array<number>} labels - The training labels.
         * @param {number} kFold - Number of datasets into which to split the training set.
         * @throws if SVM instance was instantiated from SVM.load.
         * @return {Array<number>} The array of predicted labels produced by the cross validation. Has a size equal to
         * the number of samples provided as input.
         */
        crossValidation(samples, labels, kFold) {
            if (this._deserialized) throw new Error('crossValidation cannot be called on instance created with SVM.load');
            const problem = createProblem(samples, labels);
            const target = libsvm._malloc(labels.length * 8);
            svm_cross_validation(problem, this.getCommand(), kFold, target);
            const data = libsvm.HEAPF64.subarray(target / 8, target / 8 + labels.length);
            const arr = Array.from(data);
            libsvm._free(target);
            free_problem(problem);
            return arr;
        }

        /**
         * Free the memory allocated for the model. Since this memory is stored in the memory model of emscripten, it is
         * allocated within an ArrayBuffer and WILL NOT BE GARBARGE COLLECTED, you have to explicitly free it. So
         * not calling this will result in memory leaks. As of today in the browser, there is no way to hook the
         * garbage collection of the SVM object to free it automatically.
         * Free the memory that was created by the compiled libsvm library to.
         * store the model. This model is reused every time the predict method is called.
         */
        free() {
            if (this.problem) {
                free_problem(this.problem);
                this.problem = null;
            }
            if (this.model !== null) {
                svm_free_model(this.model);
                this.model = null;
            }
        }

        getCommand() {
            return util.getCommand(this.options);
        }

        /**
         * Predict the label of one sample.
         * @param {Array<number>} sample - The sample to predict.
         * @return {number} - The predicted label.
         */
        predictOne(sample) {
            if (this.model === null) {
                throw new Error('Cannot predict, you must train first');
            }
            return predict_one(this.model, new Uint8Array(new Float64Array(sample).buffer), sample.length);
        }

        /**
         * Predict the label of many samples.
         * @param {Array<Array<number>>} samples - The samples to predict.
         * @return {Array<number>} - The predicted labels.
         */
        predict(samples) {
            let arr = [];
            for (let i = 0; i < samples.length; i++) {
                arr.push(this.predictOne(samples[i]));
            }
            return arr;
        }

        /**
         * Predict the label with probability estimate of many samples.
         * @param {Array<Array<number>>} samples - The samples to predict.
         * @return {Array<object>} - An array of objects containing the prediction label and the probability estimates for each label
         */
        predictProbability(samples) {
            let arr = [];
            for (let i = 0; i < samples.length; i++) {
                arr.push(this.predictOneProbability(samples[i]));
            }
            return arr;
        }

        /** Predict the label with probability estimate.
         * @param {Array<number>} sample
         * @return {object} - An object containing the prediction label and the probability estimates for each label
         */

        predictOneProbability(sample) {
            const labels = this.getLabels();
            const nbLabels = labels.length;
            const estimates = libsvm._malloc(nbLabels * 8);
            const prediction = predict_one_probability(this.model, new Uint8Array(new Float64Array(sample).buffer), sample.length, estimates);
            const estimatesArr = Array.from(libsvm.HEAPF64.subarray(estimates / 8, estimates / 8 + nbLabels));
            const result = {
                prediction,
                estimates: labels.map((label, idx) => ({
                    label,
                    probability: estimatesArr[idx]
                }))
            };
            libsvm._free(estimates);
            return result;
        }


        /**
         * Get the array of labels from the model. Useful when creating an SVM instance with SVM.load
         * @return {Array<number>} - The list of labels.
         */
        getLabels() {
            const nbLabels = svm_get_nr_class(this.model);
            return getIntArrayFromModel(svm_get_labels, this.model, nbLabels);
        }

        // TODO: add link to train
        /**
         * Get the indices of the support vectors from the training set passed to the train method.
         * @return {Array<number>} - The list of indices from the training samples.
         */
        getSVIndices() {
            const nSV = svm_get_nr_sv(this.model);
            return getIntArrayFromModel(svm_get_sv_indices, this.model, nSV)
                .map(i => i - 1);
        }

        /**
         * Uses libsvm's serialization method of the model.
         * @return {string} The serialization string.
         */
        serializeModel() {
            if (!this.model) throw new Error('Cannot serialize model. No model was trained');
            const result = serialize_model(this.model);
            const str = libsvm.Pointer_stringify(result);
            libsvm._free(result);
            return str;
        }

        /**
         * Create a SVM instance from the serialized model.
         * @param {string} serializedModel - The serialized model.
         * @return {SVM} - SVM instance that contains the model.
         */
        static load(serializedModel) {
            const svm = new SVM();
            svm.model = deserialize_model(serializedModel);
            svm._deserialized = true;
            return svm;
        }
    }

    /**
     * SVM classification and regression types
     * @memberof SVM
     * @type {{C_SVC: string, NU_SVC: string, ONE_CLASS: string, EPSILON_SVR: string, NU_SVR: string}}
     * @property C_SVC - The C support vector classifier type
     * @property NU_SVC - The nu support vector classifier type
     * @property ONE_CLASS - The one-class support vector classifier type
     * @property EPSILON_SVR - The epsilon support vector regression type
     * @property NU_SVR - The nu support vector regression type
     */
    SVM.SVM_TYPES = {
        C_SVC: '0', // C support vector classification
        NU_SVC: '1', // NU support vector classification
        ONE_CLASS: '2', // ONE CLASS classification
        EPSILON_SVR: '3', // Epsilon support vector regression
        NU_SVR: '4' // Nu support vector regression
    };


    /**
     * SVM kernel types
     * @memberof SVM
     * @type {{LINEAR: string, POLYNOMIAL: string, RBF: string, SIGMOID: string}}
     * @property LINEAR - Linear kernel
     * @property POLYNOMIAL - Polynomial kernel
     * @property RBF - Radial basis function (gaussian) kernel
     * @property SIGMOID - Sigmoid kernel
     */
    SVM.KERNEL_TYPES = {
        LINEAR: '0',
        POLYNOMIAL: '1',
        RBF: '2', // Radial basis function
        SIGMOID: '3',
        PRECOMPUTED: '4'
    };

    function getIntArrayFromModel(fn, model, size) {
        const offset = libsvm._malloc(size * 4);
        fn(model, offset);
        const data = libsvm.HEAP32.subarray(offset / 4, offset / 4 + size);
        const arr = Array.from(data);
        libsvm._free(offset);
        return arr;
    }

    function createProblem(samples, labels) {
        const nbSamples = samples.length;
        const nbFeatures = samples[0].length;
        const problem = create_svm_nodes(nbSamples, nbFeatures);
        for (let i = 0; i < nbSamples; i++) {
            add_instance(problem, new Uint8Array(new Float64Array(samples[i]).buffer), nbFeatures, labels[i], i);
        }
        return problem;
    }

    return SVM;
};


},{"./util":4}],4:[function(require,module,exports){

const mapOptionToCommand = {
    quiet: 'q',
    type: 's',
    kernel: 't',
    degree: 'd',
    gamma: 'g',
    coef0: 'r',
    cost: 'c',
    nu: 'n',
    epsilon: 'p',
    cacheSize: 'm',
    tolerance: 'e',
    shrinking: 'h',
    probabilityEstimates: 'b',
    weight: 'w'
};

module.exports = {
    getCommand: function getCommand(options) {
        var str = '';
        var keys = Object.keys(options);
        for (var i = 0; i < keys.length; i++) {
            var key = keys[i];
            if (options[key] == null) continue;
            if (mapOptionToCommand[key] == null) throw new Error('Bad option');
            if (str) str += ' ';
            switch (key) {
                case 'probabilityEstimates':
                case 'shrinking':
                    str += `-${mapOptionToCommand[key]} ${options[key] ? 1 : 0}`;
                    break;
                case 'quiet': {
                    if (options[key]) {
                        str += `-${mapOptionToCommand[key]} 1`;
                    }
                    break;
                }
                case 'weight': {
                    const weightKeys = Object.keys(options.weight);
                    for (let j = 0; j < weightKeys.length; j++) {
                        if (j !== 0) str += ' ';
                        str += `-w${weightKeys[j]} ${options.weight[weightKeys[j]]}`;
                    }
                    break;
                }
                default: {
                    str += `-${mapOptionToCommand[key]} ${options[key]}`;
                    break;
                }
            }
        }

        return str;
    }
};

},{}],5:[function(require,module,exports){
(function(){function a(d){for(var e=0,f=d.length-1,g=void 0,h=void 0,i=void 0,j=c(e,f);!0;){if(f<=e)return d[j];if(f==e+1)return d[e]>d[f]&&b(d,e,f),d[j];for(g=c(e,f),d[g]>d[f]&&b(d,g,f),d[e]>d[f]&&b(d,e,f),d[g]>d[e]&&b(d,g,e),b(d,g,e+1),h=e+1,i=f;!0;){do h++;while(d[e]>d[h]);do i--;while(d[i]>d[e]);if(i<h)break;b(d,h,i)}b(d,e,i),i<=j&&(e=h),i>=j&&(f=i-1)}}var b=function b(d,e,f){var _ref;return _ref=[d[f],d[e]],d[e]=_ref[0],d[f]=_ref[1],_ref},c=function c(d,e){return~~((d+e)/2)};'undefined'!=typeof module&&module.exports?module.exports=a:window.median=a})();

},{}],6:[function(require,module,exports){
'use strict';

/**
 * Computes the maximum of the given values
 * @param {Array<number>} input
 * @return {number}
 */
function max(input) {
    if (!Array.isArray(input)) {
        throw new Error('input must be an array');
    }

    if (input.length === 0) {
        throw new Error('input must not be empty');
    }

    var max = input[0];
    for (var i = 1; i < input.length; i++) {
        if (input[i] > max) max = input[i];
    }
    return max;
}

module.exports = max;

},{}],7:[function(require,module,exports){
'use strict';

/**
 * Computes the mean of the given values
 * @param {Array<number>} input
 * @return {number}
 */
function mean(input) {
    if (!Array.isArray(input)) {
        throw new Error('input must be an array');
    }

    if (input.length === 0) {
        throw new Error('input must not be empty');
    }

    var sum = 0;
    for (var i = 0; i < input.length; i++) {
        sum += input[i];
    }
    return sum / input.length;
}

module.exports = mean;

},{}],8:[function(require,module,exports){
'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var quickSelectMedian = _interopDefault(require('median-quickselect'));

/**
 * Computes the median of the given values
 * @param {Array<number>} input
 * @return {number}
 */
function median(input) {
    if (!Array.isArray(input)) {
        throw new Error('input must be an array');
    }

    if (input.length === 0) {
        throw new Error('input must not be empty');
    }

    return quickSelectMedian(input.slice());
}

module.exports = median;

},{"median-quickselect":5}],9:[function(require,module,exports){
'use strict';

/**
 * Computes the minimum of the given values
 * @param {Array<number>} input
 * @return {number}
 */
function min(input) {
    if (!Array.isArray(input)) {
        throw new Error('input must be an array');
    }

    if (input.length === 0) {
        throw new Error('input must not be empty');
    }

    var min = input[0];
    for (var i = 1; i < input.length; i++) {
        if (input[i] < min) min = input[i];
    }
    return min;
}

module.exports = min;

},{}],10:[function(require,module,exports){
'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var max = _interopDefault(require('ml-array-max'));
var min = _interopDefault(require('ml-array-min'));

function rescale(input, options = {}) {
    if (!Array.isArray(input)) {
        throw new TypeError('input must be an array');
    } else if (input.length === 0) {
        throw new TypeError('input must not be empty');
    }

    let output;
    if (options.output !== undefined) {
        if (!Array.isArray(options.output)) {
            throw new TypeError('output option must be an array if specified');
        }
        output = options.output;
    } else {
        output = new Array(input.length);
    }

    const currentMin = min(input);
    const currentMax = max(input);

    if (currentMin === currentMax) {
        throw new RangeError('minimum and maximum input values are equal. Cannot rescale a constant array');
    }

    const {
        min: minValue = options.autoMinMax ? currentMin : 0,
        max: maxValue = options.autoMinMax ? currentMax : 1
    } = options;

    if (minValue >= maxValue) {
        throw new RangeError('min option must be smaller than max option');
    }

    const factor = (maxValue - minValue) / (currentMax - currentMin);
    for (var i = 0; i < input.length; i++) {
        output[i] = (input[i] - currentMin) * factor + minValue;
    }

    return output;
}

module.exports = rescale;

},{"ml-array-max":6,"ml-array-min":9}],11:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var Matrix = _interopDefault(require('ml-matrix'));
var mean = _interopDefault(require('ml-array-mean'));

/**
 * @private
 * return an array of probabilities of each class
 * @param {Array} array - contains the classes
 * @param {number} numberOfClasses
 * @return {Matrix} - rowVector of probabilities.
 */
function toDiscreteDistribution(array, numberOfClasses) {
    var counts = new Array(numberOfClasses).fill(0);
    for (var i = 0; i < array.length; ++i) {
        counts[array[i]] += 1 / array.length;
    }

    return Matrix.rowVector(counts);
}

/**
 * @private
 * Retrieves the impurity of array of predictions
 * @param {Array} array - predictions.
 * @return {number} Gini impurity
 */
function giniImpurity(array) {
    if (array.length === 0) {
        return 0;
    }

    var probabilities = toDiscreteDistribution(array, getNumberOfClasses(array))[0];

    var sum = 0.0;
    for (var i = 0; i < probabilities.length; ++i) {
        sum += probabilities[i] * probabilities[i];
    }

    return 1 - sum;
}

/**
 * @private
 * Return the number of classes given the array of predictions.
 * @param {Array} array - predictions.
 * @return {number} Number of classes.
 */
function getNumberOfClasses(array) {
    return array.filter(function (val, i, arr) {
        return arr.indexOf(val) === i;
    }).length;
}

/**
 * @private
 * Calculates the Gini Gain of an array of predictions and those predictions splitted by a feature.
 * @para {Array} array - Predictions
 * @param {object} splitted - Object with elements "greater" and "lesser" that contains an array of predictions splitted.
 * @return {number} - Gini Gain.
 */

function giniGain(array, splitted) {
    var splitsImpurity = 0.0;
    var splits = ['greater', 'lesser'];

    for (var i = 0; i < splits.length; ++i) {
        var currentSplit = splitted[splits[i]];
        splitsImpurity += giniImpurity(currentSplit) * currentSplit.length / array.length;
    }

    return giniImpurity(array) - splitsImpurity;
}

/**
 * @private
 * Calculates the squared error of a predictions values.
 * @param {Array} array - predictions values
 * @return {number} squared error.
 */
function squaredError(array) {
    var l = array.length;

    var m = mean(array);
    var squaredError = 0.0;

    for (var i = 0; i < l; ++i) {
        var currentElement = array[i];
        squaredError += (currentElement - m) * (currentElement - m);
    }

    return squaredError;
}

/**
 * @private
 * Calculates the sum of squared error of the two arrays that contains the splitted values.
 * @param {Array} array - this argument is no necessary but is used to fit with the main interface.
 * @param {object} splitted - Object with elements "greater" and "lesser" that contains an array of predictions splitted.
 * @return {number} - sum of squared errors.
 */
function regressionError(array, splitted) {
    var error = 0.0;
    var splits = ['greater', 'lesser'];

    for (var i = 0; i < splits.length; ++i) {
        var currentSplit = splitted[splits[i]];
        error += squaredError(currentSplit);
    }
    return error;
}

/**
 * @private
 * Split the training set and values from a given column of the training set if is less than a value
 * @param {Matrix} X - Training set.
 * @param {Array} y - Training values.
 * @param {number} column - Column to split.
 * @param {number} value - value to split the Training set and values.
 * @return {object} - Object that contains the splitted values.
 */
function matrixSplitter(X, y, column, value) {
    var lesserX = [];
    var greaterX = [];
    var lesserY = [];
    var greaterY = [];

    for (var i = 0; i < X.rows; ++i) {
        if (X[i][column] < value) {
            lesserX.push(X[i]);
            lesserY.push(y[i]);
        } else {
            greaterX.push(X[i]);
            greaterY.push(y[i]);
        }
    }

    return {
        greaterX: greaterX,
        greaterY: greaterY,
        lesserX: lesserX,
        lesserY: lesserY
    };
}

/**
 * @private
 * Calculates the mean between two values
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
function mean$1(a, b) {
    return (a + b) / 2;
}

/**
 * @private
 * Returns a list of tuples that contains the i-th element of each array.
 * @param {Array} a
 * @param {Array} b
 * @return {Array} list of tuples.
 */
function zip(a, b) {
    if (a.length !== b.length) {
        throw new TypeError('Error on zip: the size of a: ' + a.length + ' is different from b: ' + b.length);
    }

    var ret = new Array(a.length);
    for (var i = 0; i < a.length; ++i) {
        ret[i] = [a[i], b[i]];
    }

    return ret;
}

const gainFunctions = {
    gini: giniGain,
    regression: regressionError
};

const splitFunctions = {
    mean: mean$1
};

class TreeNode {

    /**
     * @private
     * Constructor for a tree node given the options received on the main classes (DecisionTreeClassifier, DecisionTreeRegression)
     * @param {object|TreeNode} options for loading
     * @constructor
     */
    constructor(options) {
        // options parameters
        this.kind = options.kind;
        this.gainFunction = options.gainFunction;
        this.splitFunction = options.splitFunction;
        this.minNumSamples = options.minNumSamples;
        this.maxDepth = options.maxDepth;
    }

    /**
     * @private
     * Function that retrieve the best feature to make the split.
     * @param {Matrix} XTranspose - Training set transposed
     * @param {Array} y - labels or values (depending of the decision tree)
     * @return {object} - return tree values, the best gain, column and the split value.
     */
    bestSplit(XTranspose, y) {

        // Depending in the node tree class, we set the variables to check information gain (to classify)
        // or error (for regression)

        var bestGain = this.kind === 'classifier' ? -Infinity : Infinity;
        var check = this.kind === 'classifier' ? (a, b) => a > b : (a, b) => a < b;


        var maxColumn;
        var maxValue;

        for (var i = 0; i < XTranspose.rows; ++i) {
            var currentFeature = XTranspose[i];
            var splitValues = this.featureSplit(currentFeature, y);
            for (var j = 0; j < splitValues.length; ++j) {
                var currentSplitVal = splitValues[j];
                var splitted = this.split(currentFeature, y, currentSplitVal);

                var gain = gainFunctions[this.gainFunction](y, splitted);
                if (check(gain, bestGain)) {
                    maxColumn = i;
                    maxValue = currentSplitVal;
                    bestGain = gain;
                }
            }
        }

        return {
            maxGain: bestGain,
            maxColumn: maxColumn,
            maxValue: maxValue
        };
    }

    /**
     * @private
     * Makes the split of the training labels or values from the training set feature given a split value.
     * @param {Array} x - Training set feature
     * @param {Array} y - Training set value or label
     * @param {number} splitValue
     * @return {object}
     */

    split(x, y, splitValue) {
        var lesser = [];
        var greater = [];

        for (var i = 0; i < x.length; ++i) {
            if (x[i] < splitValue) {
                lesser.push(y[i]);
            } else {
                greater.push(y[i]);
            }
        }

        return {
            greater: greater,
            lesser: lesser
        };
    }

    /**
     * @private
     * Calculates the possible points to split over the tree given a training set feature and corresponding labels or values.
     * @param {Array} x - Training set feature
     * @param {Array} y - Training set value or label
     * @return {Array} possible split values.
     */
    featureSplit(x, y) {
        var splitValues = [];
        var arr = zip(x, y);
        arr.sort(function (a, b) {
            return a[0] - b[0];
        });

        for (var i = 1; i < arr.length; ++i) {
            if (arr[i - 1][1] !== arr[i][1]) {
                splitValues.push(splitFunctions[this.splitFunction](arr[i - 1][0], arr[i][0]));
            }
        }

        return splitValues;
    }

    /**
     * @private
     * Calculate the predictions of a leaf tree node given the training labels or values
     * @param {Array} y
     */
    calculatePrediction(y) {
        if (this.kind === 'classifier') {
            this.distribution = toDiscreteDistribution(y, getNumberOfClasses(y));
            if (this.distribution.columns === 0) {
                throw new TypeError('Error on calculate the prediction');
            }
        } else {
            this.distribution = mean(y);
        }
    }

    /**
     * @private
     * Train a node given the training set and labels, because it trains recursively, it also receive
     * the current depth of the node, parent gain to avoid infinite recursion and boolean value to check if
     * the training set is transposed.
     * @param {Matrix} X - Training set (could be transposed or not given transposed).
     * @param {Array} y - Training labels or values.
     * @param {number} currentDepth - Current depth of the node.
     * @param {number} parentGain - parent node gain or error.
     */
    train(X, y, currentDepth, parentGain) {
        if (X.rows <= this.minNumSamples) {
            this.calculatePrediction(y);
            return;
        }
        if (parentGain === undefined) parentGain = 0.0;

        var XTranspose = X.transpose();
        var split = this.bestSplit(XTranspose, y);

        this.splitValue = split.maxValue;
        this.splitColumn = split.maxColumn;
        this.gain = split.maxGain;

        var splittedMatrix = matrixSplitter(X, y, this.splitColumn, this.splitValue);

        if (currentDepth < this.maxDepth &&
            (this.gain > 0.01 && this.gain !== parentGain) &&
            (splittedMatrix.lesserX.length > 0 && splittedMatrix.greaterX.length > 0)) {
            this.left = new TreeNode(this);
            this.right = new TreeNode(this);

            var lesserX = new Matrix(splittedMatrix.lesserX);
            var greaterX = new Matrix(splittedMatrix.greaterX);

            this.left.train(lesserX, splittedMatrix.lesserY, currentDepth + 1, this.gain);
            this.right.train(greaterX, splittedMatrix.greaterY, currentDepth + 1, this.gain);
        } else {
            this.calculatePrediction(y);
        }
    }

    /**
     * @private
     * Calculates the prediction of a given element.
     * @param {Array} row
     * @return {number|Array} prediction
     *          * if a node is a classifier returns an array of probabilities of each class.
     *          * if a node is for regression returns a number with the prediction.
     */
    classify(row) {
        if (this.right && this.left) {
            if (row[this.splitColumn] < this.splitValue) {
                return this.left.classify(row);
            } else {
                return this.right.classify(row);
            }
        }

        return this.distribution;
    }

    /**
     * @private
     * Set the parameter of the current node and their children.
     * @param {object} node - parameters of the current node and the children.
     */
    setNodeParameters(node) {
        if (node.distribution !== undefined) {
            this.distribution = node.distribution.constructor === Array ? new Matrix(node.distribution) :
                                                                          node.distribution;
        } else {
            this.distribution = undefined;
            this.splitValue = node.splitValue;
            this.splitColumn = node.splitColumn;
            this.gain = node.gain;

            this.left = new TreeNode(this);
            this.right = new TreeNode(this);

            if (node.left !== {}) {
                this.left.setNodeParameters(node.left);
            }
            if (node.right !== {}) {
                this.right.setNodeParameters(node.right);
            }
        }
    }
}

const defaultOptions = {
    gainFunction: 'gini',
    splitFunction: 'mean',
    minNumSamples: 3,
    maxDepth: Infinity
};

class DecisionTreeClassifier {

    /**
     * Create new Decision Tree Classifier with CART implementation with the given options
     * @param {object} options
     * @param {string} [options.gainFunction="gini"] - gain function to get the best split, "gini" the only one supported.
     * @param {string} [options.splitFunction="mean"] - given two integers from a split feature, get the value to split, "mean" the only one supported.
     * @param {number} [options.minNumSamples=3] - minimum number of samples to create a leaf node to decide a class.
     * @param {number} [options.maxDepth=Infinity] - Max depth of the tree.
     * @param {object} model - for load purposes.
     * @constructor
     */
    constructor(options, model) {
        if (options === true) {
            this.options = model.options;
            this.root = new TreeNode(model.options);
            this.root.setNodeParameters(model.root);
        } else {
            this.options = Object.assign({}, defaultOptions, options);
            this.options.kind = 'classifier';
        }
    }

    /**
     * Train the decision tree with the given training set and labels.
     * @param {Matrix|MatrixTransposeView|Array} trainingSet
     * @param {Array} trainingLabels
     */
    train(trainingSet, trainingLabels) {
        this.root = new TreeNode(this.options);
        trainingSet = Matrix.checkMatrix(trainingSet);
        this.root.train(trainingSet, trainingLabels, 0, null);
    }

    /**
     * Predicts the output given the matrix to predict.
     * @param {Matrix|MatrixTransposeView|Array} toPredict
     * @return {Array} predictions
     */
    predict(toPredict) {
        toPredict = Matrix.checkMatrix(toPredict);
        var predictions = new Array(toPredict.rows);

        for (var i = 0; i < toPredict.rows; ++i) {
            predictions[i] = this.root.classify(toPredict.getRow(i)).maxRowIndex(0)[1];
        }

        return predictions;
    }

    /**
     * Export the current model to JSON.
     * @return {object} - Current model.
     */
    toJSON() {
        return {
            options: this.options,
            root: this.root,
            name: 'DTClassifier'
        };
    }

    /**
     * Load a Decision tree classifier with the given model.
     * @param {object} model
     * @return {DecisionTreeClassifier}
     */
    static load(model) {
        if (model.name !== 'DTClassifier') {
            throw new RangeError('Invalid model: ' + model.name);
        }

        return new DecisionTreeClassifier(true, model);
    }
}

const defaultOptions$1 = {
    gainFunction: 'regression',
    splitFunction: 'mean',
    minNumSamples: 3,
    maxDepth: Infinity
};

class DecisionTreeRegression {

    /**
     * Create new Decision Tree Regression with CART implementation with the given options.
     * @param {object} options
     * @param {string} [options.gainFunction="regression"] - gain function to get the best split, "regression" the only one supported.
     * @param {string} [options.splitFunction="mean"] - given two integers from a split feature, get the value to split, "mean" the only one supported.
     * @param {number} [options.minNumSamples=3] - minimum number of samples to create a leaf node to decide a class.
     * @param {number} [options.maxDepth=Infinity] - Max depth of the tree.
     * @param {object} model - for load purposes.
     */
    constructor(options, model) {
        if (options === true) {
            this.options = model.options;
            this.root = new TreeNode(model.options);
            this.root.setNodeParameters(model.root);
        } else {
            this.options = Object.assign({}, defaultOptions$1, options);
            this.options.kind = 'regression';
        }
    }

    /**
     * Train the decision tree with the given training set and values.
     * @param {Matrix|MatrixTransposeView|Array} trainingSet
     * @param {Array} trainingValues
     */
    train(trainingSet, trainingValues) {
        this.root = new TreeNode(this.options);

        if (trainingSet[0].length === undefined) trainingSet = Matrix.columnVector(trainingSet);
        trainingSet = Matrix.checkMatrix(trainingSet);
        this.root.train(trainingSet, trainingValues, 0);
    }

    /**
     * Predicts the values given the matrix to predict.
     * @param {Matrix|MatrixTransposeView|Array} toPredict
     * @return {Array} predictions
     */
    predict(toPredict) {
        if (toPredict[0] !== undefined && toPredict[0].length === undefined) toPredict = Matrix.columnVector(toPredict);
        toPredict = Matrix.checkMatrix(toPredict);

        var predictions = new Array(toPredict.rows);
        for (var i = 0; i < toPredict.rows; ++i) {
            predictions[i] = this.root.classify(toPredict.getRow(i));
        }

        return predictions;
    }

    /**
     * Export the current model to JSON.
     * @return {object} - Current model.
     */
    toJSON() {
        return {
            options: this.options,
            root: this.root,
            name: 'DTRegression'
        };
    }

    /**
     * Load a Decision tree regression with the given model.
     * @param {object} model
     * @return {DecisionTreeRegression}
     */
    static load(model) {
        if (model.name !== 'DTRegression') {
            throw new RangeError('Invalid model:' + model.name);
        }

        return new DecisionTreeRegression(true, model);
    }
}

exports.DecisionTreeClassifier = DecisionTreeClassifier;
exports.DecisionTreeRegression = DecisionTreeRegression;

},{"ml-array-mean":7,"ml-matrix":17}],12:[function(require,module,exports){
'use strict';
const defaultOptions = {
    mode: 'index'
};

module.exports = function *(M, N, options) {
    options = Object.assign({}, defaultOptions, options);
    var a = new Array(N);
    var c = new Array(M);
    var b = new Array(N);
    var p = new Array(N + 2);
    var x, y, z;

    // init a and b
    for (var i = 0; i < N; i++) {
        a[i] = i;
        if (i < N - M) b[i] = 0;
        else b[i] = 1;
    }

    // init c
    for (i = 0; i < M; i++) {
        c[i] = N - M + i;
    }

    // init p
    for (i = 0; i < p.length; i++) {
        if (i === 0) p[i] = N + 1;
        else if (i <= N - M) p[i] = 0;
        else if (i <= N) p[i] = i - N + M;
        else p[i] = -2;
    }

    function twiddle() {
        var i, j, k;
        j = 1;
        while (p[j] <= 0)
            j++;
        if (p[j - 1] === 0) {
            for (i = j - 1; i !== 1; i--)
                p[i] = -1;
            p[j] = 0;
            x = z = 0;
            p[1] = 1;
            y = j - 1;
        } else {
            if (j > 1)
                p[j - 1] = 0;
            do
                j++;
            while (p[j] > 0);
            k = j - 1;
            i = j;
            while (p[i] === 0)
                p[i++] = -1;
            if (p[i] === -1) {
                p[i] = p[k];
                z = p[k] - 1;
                x = i - 1;
                y = k - 1;
                p[k] = -1;
            } else {
                if (i === p[0]) {
                    return 0;
                } else {
                    p[j] = p[i];
                    z = p[i] - 1;
                    p[i] = 0;
                    x = j - 1;
                    y = i - 1;
                }
            }
        }
        return 1;
    }

    if (options.mode === 'index') {
        yield c.slice();
        while (twiddle()) {
            c[z] = a[x];
            yield c.slice();
        }
    } else if (options.mode === 'mask') {
        yield b.slice();
        while (twiddle()) {
            b[x] = 1;
            b[y] = 0;
            yield b.slice();
        }
    } else {
        throw new Error('Invalid mode');
    }
};

},{}],13:[function(require,module,exports){
'use strict';

/**
 *  Constructs a confusion matrix
 * @class ConfusionMatrix
 * @example
 * const CM = new ConfusionMatrix([[13, 2], [10, 5]], ['cat', 'dog'])
 * @param {Array<Array<number>>} matrix - The confusion matrix, a 2D Array. Rows represent the actual label and columns
 *     the predicted label.
 * @param {Array<any>} labels - Labels of the confusion matrix, a 1D Array
 */
class ConfusionMatrix {
    constructor(matrix, labels) {
        if (matrix.length !== matrix[0].length) {
            throw new Error('Confusion matrix must be square');
        }
        if (labels.length !== matrix.length) {
            throw new Error('Confusion matrix and labels should have the same length');
        }
        this.labels = labels;
        this.matrix = matrix;
    }


    /**
     * Construct confusion matrix from the predicted and actual labels (classes). Be sure to provide the arguments in
     * the correct order!
     * @param {Array<any>} actual  - The predicted labels of the classification
     * @param {Array<any>} predicted     - The actual labels of the classification. Has to be of same length as
     *     predicted.
     * @param {object} [options] - Additional options
     * @param {Array<any>} [options.labels] - The list of labels that should be used. If not provided the distinct set
     *     of labels present in predicted and actual is used. Labels are compared using the strict equality operator
     *     '==='
     * @return {ConfusionMatrix} - Confusion matrix
     */
    static fromLabels(actual, predicted, options = {}) {
        if (predicted.length !== actual.length) {
            throw new Error('predicted and actual must have the same length');
        }
        let distinctLabels;
        if (options.labels) {
            distinctLabels = new Set(options.labels);
        } else {
            distinctLabels = new Set([...actual, ...predicted]);
        }
        distinctLabels = Array.from(distinctLabels);
        if (options.sort) {
            distinctLabels.sort(options.sort);
        }

        // Create confusion matrix and fill with 0's
        const matrix = Array.from({length: distinctLabels.length});
        for (let i = 0; i < matrix.length; i++) {
            matrix[i] = new Array(matrix.length);
            matrix[i].fill(0);
        }

        for (let i = 0; i < predicted.length; i++) {
            const actualIdx = distinctLabels.indexOf(actual[i]);
            const predictedIdx = distinctLabels.indexOf(predicted[i]);
            if (actualIdx >= 0 && predictedIdx >= 0) {
                matrix[actualIdx][predictedIdx]++;
            }
        }

        return new ConfusionMatrix(matrix, distinctLabels);
    }

    /**
     * Get the confusion matrix
     * @return {Array<Array<number> >}
     */
    getMatrix() {
        return this.matrix;
    }

    getLabels() {
        return this.labels;
    }

    /**
     * Get the total number of samples
     * @return {number}
     */
    getTotalCount() {
        let predicted = 0;
        for (var i = 0; i < this.matrix.length; i++) {
            for (var j = 0; j < this.matrix.length; j++) {
                predicted += this.matrix[i][j];
            }
        }
        return predicted;
    }

    /**
     * Get the total number of true predictions
     * @return {number}
     */
    getTrueCount() {
        var count = 0;
        for (var i = 0; i < this.matrix.length; i++) {
            count += this.matrix[i][i];
        }
        return count;
    }

    /**
     * Get the total number of false predictions.
     * @return {number}
     */
    getFalseCount() {
        return this.getTotalCount() - this.getTrueCount();
    }

    /**
     * Get the number of true positive predictions.
     * @param {any} label - The label that should be considered "positive"
     * @return {number}
     */
    getTruePositiveCount(label) {
        const index = this.getIndex(label);
        return this.matrix[index][index];
    }

    /**
     * Get the number of true negative predictions
     * @param {any} label - The label that should be considered "positive"
     * @return {number}
     */
    getTrueNegativeCount(label) {
        const index = this.getIndex(label);
        var count = 0;
        for (var i = 0; i < this.matrix.length; i++) {
            for (var j = 0; j < this.matrix.length; j++) {
                if (i !== index && j !== index) {
                    count += this.matrix[i][j];
                }
            }
        }
        return count;
    }

    /**
     * Get the number of false positive predictions.
     * @param {any} label - The label that should be considered "positive"
     * @return {number}
     */
    getFalsePositiveCount(label) {
        const index = this.getIndex(label);
        var count = 0;
        for (var i = 0; i < this.matrix.length; i++) {
            if (i !== index) {
                count += this.matrix[i][index];
            }
        }
        return count;
    }

    /**
     * Get the number of false negative predictions.
     * @param {any} label - The label that should be considered "positive"
     * @return {number}
     */
    getFalseNegativeCount(label) {
        const index = this.getIndex(label);
        var count = 0;
        for (var i = 0; i < this.matrix.length; i++) {
            if (i !== index) {
                count += this.matrix[index][i];
            }
        }
        return count;
    }

    /**
     * Get the number of real positive samples.
     * @param {any} label - The label that should be considered "positive"
     * @return {number}
     */
    getPositiveCount(label) {
        return this.getTruePositiveCount(label) + this.getFalseNegativeCount(label);
    }

    /**
     * Get the number of real negative samples.
     * @param {any} label - The label that should be considered "positive"
     * @return {number}
     */
    getNegativeCount(label) {
        return this.getTrueNegativeCount(label) + this.getFalsePositiveCount(label);
    }

    /**
     * Get the index in the confusion matrix that corresponds to the given label
     * @param {any} label - The label to search for
     * @throws if the label is not found
     * @return {number}
     */
    getIndex(label) {
        const index = this.labels.indexOf(label);
        if (index === -1) throw new Error('The label does not exist');
        return index;
    }

    /**
     * Get the true positive rate a.k.a. sensitivity. Computes the ratio between the number of true positive predictions and the total number of positive samples.
     * {@link https://en.wikipedia.org/wiki/Sensitivity_and_specificity}
     * @param {any} label - The label that should be considered "positive"
     * @return {number} - The true positive rate [0-1]
     */
    getTruePositiveRate(label) {
        return this.getTruePositiveCount(label) / this.getPositiveCount(label);
    }

    /**
     * Get the true negative rate a.k.a. specificity. Computes the ration between the number of true negative predictions and the total number of negative samples.
     * {@link https://en.wikipedia.org/wiki/Sensitivity_and_specificity}
     * @param {any} label - The label that should be considered "positive"
     * @return {number}
     */
    getTrueNegativeRate(label) {
        return this.getTrueNegativeCount(label) / this.getNegativeCount(label);
    }

    /**
     * Get the positive predictive value a.k.a. precision. Computes TP / (TP + FP)
     * {@link https://en.wikipedia.org/wiki/Positive_and_negative_predictive_values}
     * @param {any} label - The label that should be considered "positive"
     * @return {number}
     */
    getPositivePredictiveValue(label) {
        const TP = this.getTruePositiveCount(label);
        return TP / (TP + this.getFalsePositiveCount(label));
    }

    /**
     * Negative predictive value
     * {@link https://en.wikipedia.org/wiki/Positive_and_negative_predictive_values}
     * @param {any} label - The label that should be considered "positive"
     * @return {number}
     */
    getNegativePredictiveValue(label) {
        const TN = this.getTrueNegativeCount(label);
        return TN / (TN + this.getFalseNegativeCount(label));
    }

    /**
     * False negative rate a.k.a. miss rate.
     * {@link https://en.wikipedia.org/wiki/Type_I_and_type_II_errors#False_positive_and_false_negative_rates}
     * @param {any} label - The label that should be considered "positive"
     * @return {number}
     */
    getFalseNegativeRate(label) {
        return 1 - this.getTruePositiveRate(label);
    }

    /**
     * False positive rate a.k.a. fall-out rate.
     * {@link https://en.wikipedia.org/wiki/Type_I_and_type_II_errors#False_positive_and_false_negative_rates}
     * @param {any} label - The label that should be considered "positive"
     * @return {number}
     */
    getFalsePositiveRate(label) {
        return 1 - this.getTrueNegativeRate(label);
    }

    /**
     * False discovery rate (FDR)
     * {@link https://en.wikipedia.org/wiki/False_discovery_rate}
     * @param {any} label - The label that should be considered "positive"
     * @return {number}
     */
    getFalseDiscoveryRate(label) {
        const FP = this.getFalsePositiveCount(label);
        return FP / (FP + this.getTruePositiveCount(label));
    }

    /**
     * False omission rate (FOR)
     * @param {any} label - The label that should be considered "positive"
     * @return {number}
     */
    getFalseOmissionRate(label) {
        const FN = this.getFalseNegativeCount(label);
        return FN / (FN + this.getTruePositiveCount(label));
    }

    /**
     * F1 score
     * {@link https://en.wikipedia.org/wiki/F1_score}
     * @param {any} label - The label that should be considered "positive"
     * @return {number}
     */
    getF1Score(label) {
        const TP = this.getTruePositiveCount(label);
        return 2 * TP / (2 * TP + this.getFalsePositiveCount(label) + this.getFalseNegativeCount(label));
    }

    /**
     * Matthews correlation coefficient (MCC)
     * {@link https://en.wikipedia.org/wiki/Matthews_correlation_coefficient}
     * @param {any} label - The label that should be considered "positive"
     * @return {number}
     */
    getMatthewsCorrelationCoefficient(label) {
        const TP = this.getTruePositiveCount(label);
        const TN = this.getTrueNegativeCount(label);
        const FP = this.getFalsePositiveCount(label);
        const FN = this.getFalseNegativeCount(label);
        return (TP * TN - FP * FN) / Math.sqrt((TP + FP) * (TP + FN) * (TN + FP) * (TN + FN));
    }

    /**
     * Informedness
     * {@link https://en.wikipedia.org/wiki/Youden%27s_J_statistic}
     * @param {any} label - The label that should be considered "positive"
     * @return {number}
     */
    getInformedness(label) {
        return this.getTruePositiveRate(label) + this.getTrueNegativeRate(label) - 1;
    }

    /**
     * Markedness
     * @param {any} label - The label that should be considered "positive"
     * @return {number}
     */
    getMarkedness(label) {
        return this.getPositivePredictiveValue(label) + this.getNegativePredictiveValue(label) - 1;
    }

    /**
     * Get the confusion table.
     * @param {any} label - The label that should be considered "positive"
     * @return {Array<Array<number> >} - The 2x2 confusion table. [[TP, FN], [FP, TN]]
     */
    getConfusionTable(label) {
        return [
            [
                this.getTruePositiveCount(label),
                this.getFalseNegativeCount(label)
            ],
            [
                this.getFalsePositiveCount(label),
                this.getTrueNegativeCount(label)
            ]
        ];
    }

    /**
     * Get total accuracy.
     * @return {number} - The ratio between the number of true predictions and total number of classifications ([0-1])
     */
    getAccuracy() {
        let correct = 0;
        let incorrect = 0;
        for (var i = 0; i < this.matrix.length; i++) {
            for (var j = 0; j < this.matrix.length; j++) {
                if (i === j) correct += this.matrix[i][j];
                else incorrect += this.matrix[i][j];
            }
        }
        return correct / (correct + incorrect);
    }


    /**
     * Returns the element in the confusion matrix that corresponds to the given actual and predicted labels.
     * @param {any} actual - The true label
     * @param {any} predicted - The predicted label
     * @return {number} - The element in the confusion matrix
     */
    getCount(actual, predicted) {
        const actualIndex = this.getIndex(actual);
        const predictedIndex = this.getIndex(predicted);
        return this.matrix[actualIndex][predictedIndex];
    }

    /**
     * Compute the general prediction accuracy
     * @deprecated Use getAccuracy
     * @return {number} - The prediction accuracy ([0-1]
     */
    get accuracy() {
        return this.getAccuracy();
    }

    /**
     * Compute the number of predicted observations
     * @deprecated Use getTotalCount
     * @return {number}
     */
    get total() {
        return this.getTotalCount();
    }
}

module.exports = ConfusionMatrix;

},{}],14:[function(require,module,exports){
'use strict';

const ConfusionMatrix = require('ml-confusion-matrix');

const CV = {};
const combinations = require('ml-combinations');

/**
 * Performs a leave-one-out cross-validation (LOO-CV) of the given samples. In LOO-CV, 1 observation is used as the
 * validation set while the rest is used as the training set. This is repeated once for each observation. LOO-CV is a
 * special case of LPO-CV. @see leavePout
 * @param {function} Classifier - The classifier's constructor to use for the cross validation. Expect ml-classifier
 *     api.
 * @param {Array} features - The features for all samples of the data-set
 * @param {Array} labels - The classification class of all samples of the data-set
 * @param {object} classifierOptions - The classifier options with which the classifier should be instantiated.
 * @return {ConfusionMatrix} - The cross-validation confusion matrix
 */
CV.leaveOneOut = function (Classifier, features, labels, classifierOptions) {
    if (typeof labels === 'function') {
        var callback = labels;
        labels = features;
        features = Classifier;
        return CV.leavePOut(features, labels, 1, callback);
    }
    return CV.leavePOut(Classifier, features, labels, classifierOptions, 1);
};


/**
 * Performs a leave-p-out cross-validation (LPO-CV) of the given samples. In LPO-CV, p observations are used as the
 * validation set while the rest is used as the training set. This is repeated as many times as there are possible
 * ways to combine p observations from the set (unordered without replacement). Be aware that for relatively small
 * data-set size this can require a very large number of training and testing to do!
 * @param {function} Classifier - The classifier's constructor to use for the cross validation. Expect ml-classifier
 *     api.
 * @param {Array} features - The features for all samples of the data-set
 * @param {Array} labels - The classification class of all samples of the data-set
 * @param {object} classifierOptions - The classifier options with which the classifier should be instantiated.
 * @param {number} p - The size of the validation sub-samples' set
 * @return {ConfusionMatrix} - The cross-validation confusion matrix
 */
CV.leavePOut = function (Classifier, features, labels, classifierOptions, p) {
    if (typeof classifierOptions === 'function') {
        var callback = classifierOptions;
        p = labels;
        labels = features;
        features = Classifier;
    }
    check(features, labels);
    const distinct = getDistinct(labels);
    const confusionMatrix = initMatrix(distinct.length, distinct.length);

    var N = features.length;
    var gen = combinations(p, N);
    var allIdx = new Array(N);
    for (let i = 0; i < N; i++) {
        allIdx[i] = i;
    }
    for (const testIdx of gen) {
        var trainIdx = allIdx.slice();

        for (let i = testIdx.length - 1; i >= 0; i--) {
            trainIdx.splice(testIdx[i], 1);
        }

        if (callback) {
            validateWithCallback(features, labels, testIdx, trainIdx, confusionMatrix, distinct, callback);
        } else {
            validate(Classifier, features, labels, classifierOptions, testIdx, trainIdx, confusionMatrix, distinct);
        }

    }

    return new ConfusionMatrix(confusionMatrix, distinct);
};

/**
 * Performs k-fold cross-validation (KF-CV). KF-CV separates the data-set into k random equally sized partitions, and
 * uses each as a validation set, with all other partitions used in the training set. Observations left over from if k
 * does not divide the number of observations are left out of the cross-validation process.
 * @param {function} Classifier - The classifier's to use for the cross validation. Expect ml-classifier api.
 * @param {Array} features - The features for all samples of the data-set
 * @param {Array} labels - The classification class of all samples of the data-set
 * @param {object} classifierOptions - The classifier options with which the classifier should be instantiated.
 * @param {number} k - The number of partitions to create
 * @return {ConfusionMatrix} - The cross-validation confusion matrix
 */
CV.kFold = function (Classifier, features, labels, classifierOptions, k) {
    if (typeof classifierOptions === 'function') {
        var callback = classifierOptions;
        k = labels;
        labels = features;
        features = Classifier;
    }
    check(features, labels);
    const distinct = getDistinct(labels);
    const confusionMatrix = initMatrix(distinct.length, distinct.length);
    var N = features.length;
    var allIdx = new Array(N);
    for (var i = 0; i < N; i++) {
        allIdx[i] = i;
    }

    var l = Math.floor(N / k);
    // create random k-folds
    var current = [];
    var folds = [];
    while (allIdx.length) {
        var randi = Math.floor(Math.random() * allIdx.length);
        current.push(allIdx[randi]);
        allIdx.splice(randi, 1);
        if (current.length === l) {
            folds.push(current);
            current = [];
        }
    }
    if (current.length) folds.push(current);
    folds = folds.slice(0, k);


    for (i = 0; i < folds.length; i++) {
        var testIdx = folds[i];
        var trainIdx = [];
        for (var j = 0; j < folds.length; j++) {
            if (j !== i) trainIdx = trainIdx.concat(folds[j]);
        }

        if (callback) {
            validateWithCallback(features, labels, testIdx, trainIdx, confusionMatrix, distinct, callback);
        } else {
            validate(Classifier, features, labels, classifierOptions, testIdx, trainIdx, confusionMatrix, distinct);
        }
    }

    return new ConfusionMatrix(confusionMatrix, distinct);
};

function check(features, labels) {
    if (features.length !== labels.length) {
        throw new Error('features and labels should have the same length');
    }
}

function initMatrix(rows, columns) {
    return new Array(rows).fill(0).map(() => new Array(columns).fill(0));
}

function getDistinct(arr) {
    var s = new Set();
    for (let i = 0; i < arr.length; i++) {
        s.add(arr[i]);
    }
    return Array.from(s);
}

function validate(Classifier, features, labels, classifierOptions, testIdx, trainIdx, confusionMatrix, distinct) {
    const {testFeatures, trainFeatures, testLabels, trainLabels} = getTrainTest(features, labels, testIdx, trainIdx);

    var classifier;
    if (Classifier.prototype.train) {
        classifier = new Classifier(classifierOptions);
        classifier.train(trainFeatures, trainLabels);
    } else {
        classifier = new Classifier(trainFeatures, trainLabels, classifierOptions);
    }

    var predictedLabels = classifier.predict(testFeatures);
    updateConfusionMatrix(confusionMatrix, testLabels, predictedLabels, distinct);
}

function validateWithCallback(features, labels, testIdx, trainIdx, confusionMatrix, distinct, callback) {
    const {testFeatures, trainFeatures, testLabels, trainLabels} = getTrainTest(features, labels, testIdx, trainIdx);
    const predictedLabels = callback(trainFeatures, trainLabels, testFeatures);
    updateConfusionMatrix(confusionMatrix, testLabels, predictedLabels, distinct);
}

function updateConfusionMatrix(confusionMatrix, testLabels, predictedLabels, distinct) {

    for (var i = 0; i < predictedLabels.length; i++) {
        const actualIdx = distinct.indexOf(testLabels[i]);
        const predictedIdx = distinct.indexOf(predictedLabels[i]);
        if (actualIdx < 0 || predictedIdx < 0) {
            // eslint-disable-next-line no-console
            console.warn(`ignore unknown predicted label ${predictedLabels[i]}`);
        }
        confusionMatrix[actualIdx][predictedIdx]++;
    }
}


function getTrainTest(features, labels, testIdx, trainIdx) {
    return {
        testFeatures: testIdx.map(function (index) {
            return features[index];
        }),
        trainFeatures: trainIdx.map(function (index) {
            return features[index];
        }),
        testLabels: testIdx.map(function (index) {
            return labels[index];
        }),
        trainLabels: trainIdx.map(function (index) {
            return labels[index];
        })
    };
}

module.exports = CV;

},{"ml-combinations":12,"ml-confusion-matrix":13}],15:[function(require,module,exports){
module.exports=[
  [5.1,3.5,1.4,0.2,"setosa"],
  [4.9,3,1.4,0.2,"setosa"],
  [4.7,3.2,1.3,0.2,"setosa"],
  [4.6,3.1,1.5,0.2,"setosa"],
  [5,3.6,1.4,0.2,"setosa"],
  [5.4,3.9,1.7,0.4,"setosa"],
  [4.6,3.4,1.4,0.3,"setosa"],
  [5,3.4,1.5,0.2,"setosa"],
  [4.4,2.9,1.4,0.2,"setosa"],
  [4.9,3.1,1.5,0.1,"setosa"],
  [5.4,3.7,1.5,0.2,"setosa"],
  [4.8,3.4,1.6,0.2,"setosa"],
  [4.8,3,1.4,0.1,"setosa"],
  [4.3,3,1.1,0.1,"setosa"],
  [5.8,4,1.2,0.2,"setosa"],
  [5.7,4.4,1.5,0.4,"setosa"],
  [5.4,3.9,1.3,0.4,"setosa"],
  [5.1,3.5,1.4,0.3,"setosa"],
  [5.7,3.8,1.7,0.3,"setosa"],
  [5.1,3.8,1.5,0.3,"setosa"],
  [5.4,3.4,1.7,0.2,"setosa"],
  [5.1,3.7,1.5,0.4,"setosa"],
  [4.6,3.6,1,0.2,"setosa"],
  [5.1,3.3,1.7,0.5,"setosa"],
  [4.8,3.4,1.9,0.2,"setosa"],
  [5,3,1.6,0.2,"setosa"],
  [5,3.4,1.6,0.4,"setosa"],
  [5.2,3.5,1.5,0.2,"setosa"],
  [5.2,3.4,1.4,0.2,"setosa"],
  [4.7,3.2,1.6,0.2,"setosa"],
  [4.8,3.1,1.6,0.2,"setosa"],
  [5.4,3.4,1.5,0.4,"setosa"],
  [5.2,4.1,1.5,0.1,"setosa"],
  [5.5,4.2,1.4,0.2,"setosa"],
  [4.9,3.1,1.5,0.2,"setosa"],
  [5,3.2,1.2,0.2,"setosa"],
  [5.5,3.5,1.3,0.2,"setosa"],
  [4.9,3.6,1.4,0.1,"setosa"],
  [4.4,3,1.3,0.2,"setosa"],
  [5.1,3.4,1.5,0.2,"setosa"],
  [5,3.5,1.3,0.3,"setosa"],
  [4.5,2.3,1.3,0.3,"setosa"],
  [4.4,3.2,1.3,0.2,"setosa"],
  [5,3.5,1.6,0.6,"setosa"],
  [5.1,3.8,1.9,0.4,"setosa"],
  [4.8,3,1.4,0.3,"setosa"],
  [5.1,3.8,1.6,0.2,"setosa"],
  [4.6,3.2,1.4,0.2,"setosa"],
  [5.3,3.7,1.5,0.2,"setosa"],
  [5,3.3,1.4,0.2,"setosa"],
  [7,3.2,4.7,1.4,"versicolor"],
  [6.4,3.2,4.5,1.5,"versicolor"],
  [6.9,3.1,4.9,1.5,"versicolor"],
  [5.5,2.3,4,1.3,"versicolor"],
  [6.5,2.8,4.6,1.5,"versicolor"],
  [5.7,2.8,4.5,1.3,"versicolor"],
  [6.3,3.3,4.7,1.6,"versicolor"],
  [4.9,2.4,3.3,1,"versicolor"],
  [6.6,2.9,4.6,1.3,"versicolor"],
  [5.2,2.7,3.9,1.4,"versicolor"],
  [5,2,3.5,1,"versicolor"],
  [5.9,3,4.2,1.5,"versicolor"],
  [6,2.2,4,1,"versicolor"],
  [6.1,2.9,4.7,1.4,"versicolor"],
  [5.6,2.9,3.6,1.3,"versicolor"],
  [6.7,3.1,4.4,1.4,"versicolor"],
  [5.6,3,4.5,1.5,"versicolor"],
  [5.8,2.7,4.1,1,"versicolor"],
  [6.2,2.2,4.5,1.5,"versicolor"],
  [5.6,2.5,3.9,1.1,"versicolor"],
  [5.9,3.2,4.8,1.8,"versicolor"],
  [6.1,2.8,4,1.3,"versicolor"],
  [6.3,2.5,4.9,1.5,"versicolor"],
  [6.1,2.8,4.7,1.2,"versicolor"],
  [6.4,2.9,4.3,1.3,"versicolor"],
  [6.6,3,4.4,1.4,"versicolor"],
  [6.8,2.8,4.8,1.4,"versicolor"],
  [6.7,3,5,1.7,"versicolor"],
  [6,2.9,4.5,1.5,"versicolor"],
  [5.7,2.6,3.5,1,"versicolor"],
  [5.5,2.4,3.8,1.1,"versicolor"],
  [5.5,2.4,3.7,1,"versicolor"],
  [5.8,2.7,3.9,1.2,"versicolor"],
  [6,2.7,5.1,1.6,"versicolor"],
  [5.4,3,4.5,1.5,"versicolor"],
  [6,3.4,4.5,1.6,"versicolor"],
  [6.7,3.1,4.7,1.5,"versicolor"],
  [6.3,2.3,4.4,1.3,"versicolor"],
  [5.6,3,4.1,1.3,"versicolor"],
  [5.5,2.5,4,1.3,"versicolor"],
  [5.5,2.6,4.4,1.2,"versicolor"],
  [6.1,3,4.6,1.4,"versicolor"],
  [5.8,2.6,4,1.2,"versicolor"],
  [5,2.3,3.3,1,"versicolor"],
  [5.6,2.7,4.2,1.3,"versicolor"],
  [5.7,3,4.2,1.2,"versicolor"],
  [5.7,2.9,4.2,1.3,"versicolor"],
  [6.2,2.9,4.3,1.3,"versicolor"],
  [5.1,2.5,3,1.1,"versicolor"],
  [5.7,2.8,4.1,1.3,"versicolor"],
  [6.3,3.3,6,2.5,"virginica"],
  [5.8,2.7,5.1,1.9,"virginica"],
  [7.1,3,5.9,2.1,"virginica"],
  [6.3,2.9,5.6,1.8,"virginica"],
  [6.5,3,5.8,2.2,"virginica"],
  [7.6,3,6.6,2.1,"virginica"],
  [4.9,2.5,4.5,1.7,"virginica"],
  [7.3,2.9,6.3,1.8,"virginica"],
  [6.7,2.5,5.8,1.8,"virginica"],
  [7.2,3.6,6.1,2.5,"virginica"],
  [6.5,3.2,5.1,2,"virginica"],
  [6.4,2.7,5.3,1.9,"virginica"],
  [6.8,3,5.5,2.1,"virginica"],
  [5.7,2.5,5,2,"virginica"],
  [5.8,2.8,5.1,2.4,"virginica"],
  [6.4,3.2,5.3,2.3,"virginica"],
  [6.5,3,5.5,1.8,"virginica"],
  [7.7,3.8,6.7,2.2,"virginica"],
  [7.7,2.6,6.9,2.3,"virginica"],
  [6,2.2,5,1.5,"virginica"],
  [6.9,3.2,5.7,2.3,"virginica"],
  [5.6,2.8,4.9,2,"virginica"],
  [7.7,2.8,6.7,2,"virginica"],
  [6.3,2.7,4.9,1.8,"virginica"],
  [6.7,3.3,5.7,2.1,"virginica"],
  [7.2,3.2,6,1.8,"virginica"],
  [6.2,2.8,4.8,1.8,"virginica"],
  [6.1,3,4.9,1.8,"virginica"],
  [6.4,2.8,5.6,2.1,"virginica"],
  [7.2,3,5.8,1.6,"virginica"],
  [7.4,2.8,6.1,1.9,"virginica"],
  [7.9,3.8,6.4,2,"virginica"],
  [6.4,2.8,5.6,2.2,"virginica"],
  [6.3,2.8,5.1,1.5,"virginica"],
  [6.1,2.6,5.6,1.4,"virginica"],
  [7.7,3,6.1,2.3,"virginica"],
  [6.3,3.4,5.6,2.4,"virginica"],
  [6.4,3.1,5.5,1.8,"virginica"],
  [6,3,4.8,1.8,"virginica"],
  [6.9,3.1,5.4,2.1,"virginica"],
  [6.7,3.1,5.6,2.4,"virginica"],
  [6.9,3.1,5.1,2.3,"virginica"],
  [5.8,2.7,5.1,1.9,"virginica"],
  [6.8,3.2,5.9,2.3,"virginica"],
  [6.7,3.3,5.7,2.5,"virginica"],
  [6.7,3,5.2,2.3,"virginica"],
  [6.3,2.5,5,1.9,"virginica"],
  [6.5,3,5.2,2,"virginica"],
  [6.2,3.4,5.4,2.3,"virginica"],
  [5.9,3,5.1,1.8,"virginica"]
]

},{}],16:[function(require,module,exports){
'use strict';

const dataset = require('./iris.json');

exports.getDataset = function () {
    return dataset.slice();
};

exports.getNumbers = function () {
    return dataset.map(d => d.slice(0, 4));
};

exports.getClasses = function () {
    return dataset.map(d => d[4]);
};

exports.getDistinctClasses = function () {
    return ['setosa', 'versicolor', 'virginica'];
};

},{"./iris.json":15}],17:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var rescale = _interopDefault(require('ml-array-rescale'));

if (!Symbol.species) {
    Symbol.species = Symbol.for('@@species');
}

/**
 * @class LuDecomposition
 * @link https://github.com/lutzroeder/Mapack/blob/master/Source/LuDecomposition.cs
 * @param {Matrix} matrix
 */
class LuDecomposition$$1 {
    constructor(matrix) {
        matrix = WrapperMatrix2D.checkMatrix(matrix);

        var lu = matrix.clone();
        var rows = lu.rows;
        var columns = lu.columns;
        var pivotVector = new Array(rows);
        var pivotSign = 1;
        var i, j, k, p, s, t, v;
        var LUcolj, kmax;

        for (i = 0; i < rows; i++) {
            pivotVector[i] = i;
        }

        LUcolj = new Array(rows);

        for (j = 0; j < columns; j++) {

            for (i = 0; i < rows; i++) {
                LUcolj[i] = lu.get(i, j);
            }

            for (i = 0; i < rows; i++) {
                kmax = Math.min(i, j);
                s = 0;
                for (k = 0; k < kmax; k++) {
                    s += lu.get(i, k) * LUcolj[k];
                }
                LUcolj[i] -= s;
                lu.set(i, j, LUcolj[i]);
            }

            p = j;
            for (i = j + 1; i < rows; i++) {
                if (Math.abs(LUcolj[i]) > Math.abs(LUcolj[p])) {
                    p = i;
                }
            }

            if (p !== j) {
                for (k = 0; k < columns; k++) {
                    t = lu.get(p, k);
                    lu.set(p, k, lu.get(j, k));
                    lu.set(j, k, t);
                }

                v = pivotVector[p];
                pivotVector[p] = pivotVector[j];
                pivotVector[j] = v;

                pivotSign = -pivotSign;
            }

            if (j < rows && lu.get(j, j) !== 0) {
                for (i = j + 1; i < rows; i++) {
                    lu.set(i, j, lu.get(i, j) / lu.get(j, j));
                }
            }
        }

        this.LU = lu;
        this.pivotVector = pivotVector;
        this.pivotSign = pivotSign;
    }

    /**
     *
     * @return {boolean}
     */
    isSingular() {
        var data = this.LU;
        var col = data.columns;
        for (var j = 0; j < col; j++) {
            if (data[j][j] === 0) {
                return true;
            }
        }
        return false;
    }

    /**
     *
     * @param {Matrix} value
     * @return {Matrix}
     */
    solve(value) {
        value = Matrix.checkMatrix(value);

        var lu = this.LU;
        var rows = lu.rows;

        if (rows !== value.rows) {
            throw new Error('Invalid matrix dimensions');
        }
        if (this.isSingular()) {
            throw new Error('LU matrix is singular');
        }

        var count = value.columns;
        var X = value.subMatrixRow(this.pivotVector, 0, count - 1);
        var columns = lu.columns;
        var i, j, k;

        for (k = 0; k < columns; k++) {
            for (i = k + 1; i < columns; i++) {
                for (j = 0; j < count; j++) {
                    X[i][j] -= X[k][j] * lu[i][k];
                }
            }
        }
        for (k = columns - 1; k >= 0; k--) {
            for (j = 0; j < count; j++) {
                X[k][j] /= lu[k][k];
            }
            for (i = 0; i < k; i++) {
                for (j = 0; j < count; j++) {
                    X[i][j] -= X[k][j] * lu[i][k];
                }
            }
        }
        return X;
    }

    /**
     *
     * @return {number}
     */
    get determinant() {
        var data = this.LU;
        if (!data.isSquare()) {
            throw new Error('Matrix must be square');
        }
        var determinant = this.pivotSign;
        var col = data.columns;
        for (var j = 0; j < col; j++) {
            determinant *= data[j][j];
        }
        return determinant;
    }

    /**
     *
     * @return {Matrix}
     */
    get lowerTriangularMatrix() {
        var data = this.LU;
        var rows = data.rows;
        var columns = data.columns;
        var X = new Matrix(rows, columns);
        for (var i = 0; i < rows; i++) {
            for (var j = 0; j < columns; j++) {
                if (i > j) {
                    X[i][j] = data[i][j];
                } else if (i === j) {
                    X[i][j] = 1;
                } else {
                    X[i][j] = 0;
                }
            }
        }
        return X;
    }

    /**
     *
     * @return {Matrix}
     */
    get upperTriangularMatrix() {
        var data = this.LU;
        var rows = data.rows;
        var columns = data.columns;
        var X = new Matrix(rows, columns);
        for (var i = 0; i < rows; i++) {
            for (var j = 0; j < columns; j++) {
                if (i <= j) {
                    X[i][j] = data[i][j];
                } else {
                    X[i][j] = 0;
                }
            }
        }
        return X;
    }

    /**
     *
     * @return {Array<number>}
     */
    get pivotPermutationVector() {
        return this.pivotVector.slice();
    }
}

function hypotenuse(a, b) {
    var r = 0;
    if (Math.abs(a) > Math.abs(b)) {
        r = b / a;
        return Math.abs(a) * Math.sqrt(1 + r * r);
    }
    if (b !== 0) {
        r = a / b;
        return Math.abs(b) * Math.sqrt(1 + r * r);
    }
    return 0;
}

function getFilled2DArray(rows, columns, value) {
    var array = new Array(rows);
    for (var i = 0; i < rows; i++) {
        array[i] = new Array(columns);
        for (var j = 0; j < columns; j++) {
            array[i][j] = value;
        }
    }
    return array;
}

/**
 * @class SingularValueDecomposition
 * @link https://github.com/lutzroeder/Mapack/blob/master/Source/SingularValueDecomposition.cs
 * @param {Matrix} value
 * @param {object} [options]
 * @param {boolean} [options.computeLeftSingularVectors=true]
 * @param {boolean} [options.computeRightSingularVectors=true]
 * @param {boolean} [options.autoTranspose=false]
 */
class SingularValueDecomposition$$1 {
    constructor(value, options = {}) {
        value = WrapperMatrix2D.checkMatrix(value);

        var m = value.rows;
        var n = value.columns;
        var nu = Math.min(m, n);

        const {
            computeLeftSingularVectors = true,
            computeRightSingularVectors = true,
            autoTranspose = false
        } = options;

        var wantu = Boolean(computeLeftSingularVectors);
        var wantv = Boolean(computeRightSingularVectors);

        var swapped = false;
        var a;
        if (m < n) {
            if (!autoTranspose) {
                a = value.clone();
                // eslint-disable-next-line no-console
                console.warn('Computing SVD on a matrix with more columns than rows. Consider enabling autoTranspose');
            } else {
                a = value.transpose();
                m = a.rows;
                n = a.columns;
                swapped = true;
                var aux = wantu;
                wantu = wantv;
                wantv = aux;
            }
        } else {
            a = value.clone();
        }

        var s = new Array(Math.min(m + 1, n));
        var U = getFilled2DArray(m, nu, 0);
        var V = getFilled2DArray(n, n, 0);
        var e = new Array(n);
        var work = new Array(m);

        var nct = Math.min(m - 1, n);
        var nrt = Math.max(0, Math.min(n - 2, m));

        var i, j, k, p, t, ks, f, cs, sn, max, kase,
            scale, sp, spm1, epm1, sk, ek, b, c, shift, g;

        for (k = 0, max = Math.max(nct, nrt); k < max; k++) {
            if (k < nct) {
                s[k] = 0;
                for (i = k; i < m; i++) {
                    s[k] = hypotenuse(s[k], a[i][k]);
                }
                if (s[k] !== 0) {
                    if (a[k][k] < 0) {
                        s[k] = -s[k];
                    }
                    for (i = k; i < m; i++) {
                        a[i][k] /= s[k];
                    }
                    a[k][k] += 1;
                }
                s[k] = -s[k];
            }

            for (j = k + 1; j < n; j++) {
                if ((k < nct) && (s[k] !== 0)) {
                    t = 0;
                    for (i = k; i < m; i++) {
                        t += a[i][k] * a[i][j];
                    }
                    t = -t / a[k][k];
                    for (i = k; i < m; i++) {
                        a[i][j] += t * a[i][k];
                    }
                }
                e[j] = a[k][j];
            }

            if (wantu && (k < nct)) {
                for (i = k; i < m; i++) {
                    U[i][k] = a[i][k];
                }
            }

            if (k < nrt) {
                e[k] = 0;
                for (i = k + 1; i < n; i++) {
                    e[k] = hypotenuse(e[k], e[i]);
                }
                if (e[k] !== 0) {
                    if (e[k + 1] < 0) {
                        e[k] = 0 - e[k];
                    }
                    for (i = k + 1; i < n; i++) {
                        e[i] /= e[k];
                    }
                    e[k + 1] += 1;
                }
                e[k] = -e[k];
                if ((k + 1 < m) && (e[k] !== 0)) {
                    for (i = k + 1; i < m; i++) {
                        work[i] = 0;
                    }
                    for (j = k + 1; j < n; j++) {
                        for (i = k + 1; i < m; i++) {
                            work[i] += e[j] * a[i][j];
                        }
                    }
                    for (j = k + 1; j < n; j++) {
                        t = -e[j] / e[k + 1];
                        for (i = k + 1; i < m; i++) {
                            a[i][j] += t * work[i];
                        }
                    }
                }
                if (wantv) {
                    for (i = k + 1; i < n; i++) {
                        V[i][k] = e[i];
                    }
                }
            }
        }

        p = Math.min(n, m + 1);
        if (nct < n) {
            s[nct] = a[nct][nct];
        }
        if (m < p) {
            s[p - 1] = 0;
        }
        if (nrt + 1 < p) {
            e[nrt] = a[nrt][p - 1];
        }
        e[p - 1] = 0;

        if (wantu) {
            for (j = nct; j < nu; j++) {
                for (i = 0; i < m; i++) {
                    U[i][j] = 0;
                }
                U[j][j] = 1;
            }
            for (k = nct - 1; k >= 0; k--) {
                if (s[k] !== 0) {
                    for (j = k + 1; j < nu; j++) {
                        t = 0;
                        for (i = k; i < m; i++) {
                            t += U[i][k] * U[i][j];
                        }
                        t = -t / U[k][k];
                        for (i = k; i < m; i++) {
                            U[i][j] += t * U[i][k];
                        }
                    }
                    for (i = k; i < m; i++) {
                        U[i][k] = -U[i][k];
                    }
                    U[k][k] = 1 + U[k][k];
                    for (i = 0; i < k - 1; i++) {
                        U[i][k] = 0;
                    }
                } else {
                    for (i = 0; i < m; i++) {
                        U[i][k] = 0;
                    }
                    U[k][k] = 1;
                }
            }
        }

        if (wantv) {
            for (k = n - 1; k >= 0; k--) {
                if ((k < nrt) && (e[k] !== 0)) {
                    for (j = k + 1; j < n; j++) {
                        t = 0;
                        for (i = k + 1; i < n; i++) {
                            t += V[i][k] * V[i][j];
                        }
                        t = -t / V[k + 1][k];
                        for (i = k + 1; i < n; i++) {
                            V[i][j] += t * V[i][k];
                        }
                    }
                }
                for (i = 0; i < n; i++) {
                    V[i][k] = 0;
                }
                V[k][k] = 1;
            }
        }

        var pp = p - 1;
        var iter = 0;
        var eps = Number.EPSILON;
        while (p > 0) {
            for (k = p - 2; k >= -1; k--) {
                if (k === -1) {
                    break;
                }
                if (Math.abs(e[k]) <= eps * (Math.abs(s[k]) + Math.abs(s[k + 1]))) {
                    e[k] = 0;
                    break;
                }
            }
            if (k === p - 2) {
                kase = 4;
            } else {
                for (ks = p - 1; ks >= k; ks--) {
                    if (ks === k) {
                        break;
                    }
                    t = (ks !== p ? Math.abs(e[ks]) : 0) + (ks !== k + 1 ? Math.abs(e[ks - 1]) : 0);
                    if (Math.abs(s[ks]) <= eps * t) {
                        s[ks] = 0;
                        break;
                    }
                }
                if (ks === k) {
                    kase = 3;
                } else if (ks === p - 1) {
                    kase = 1;
                } else {
                    kase = 2;
                    k = ks;
                }
            }

            k++;

            switch (kase) {
                case 1: {
                    f = e[p - 2];
                    e[p - 2] = 0;
                    for (j = p - 2; j >= k; j--) {
                        t = hypotenuse(s[j], f);
                        cs = s[j] / t;
                        sn = f / t;
                        s[j] = t;
                        if (j !== k) {
                            f = -sn * e[j - 1];
                            e[j - 1] = cs * e[j - 1];
                        }
                        if (wantv) {
                            for (i = 0; i < n; i++) {
                                t = cs * V[i][j] + sn * V[i][p - 1];
                                V[i][p - 1] = -sn * V[i][j] + cs * V[i][p - 1];
                                V[i][j] = t;
                            }
                        }
                    }
                    break;
                }
                case 2 : {
                    f = e[k - 1];
                    e[k - 1] = 0;
                    for (j = k; j < p; j++) {
                        t = hypotenuse(s[j], f);
                        cs = s[j] / t;
                        sn = f / t;
                        s[j] = t;
                        f = -sn * e[j];
                        e[j] = cs * e[j];
                        if (wantu) {
                            for (i = 0; i < m; i++) {
                                t = cs * U[i][j] + sn * U[i][k - 1];
                                U[i][k - 1] = -sn * U[i][j] + cs * U[i][k - 1];
                                U[i][j] = t;
                            }
                        }
                    }
                    break;
                }
                case 3 : {
                    scale = Math.max(Math.abs(s[p - 1]), Math.abs(s[p - 2]), Math.abs(e[p - 2]), Math.abs(s[k]), Math.abs(e[k]));
                    sp = s[p - 1] / scale;
                    spm1 = s[p - 2] / scale;
                    epm1 = e[p - 2] / scale;
                    sk = s[k] / scale;
                    ek = e[k] / scale;
                    b = ((spm1 + sp) * (spm1 - sp) + epm1 * epm1) / 2;
                    c = (sp * epm1) * (sp * epm1);
                    shift = 0;
                    if ((b !== 0) || (c !== 0)) {
                        shift = Math.sqrt(b * b + c);
                        if (b < 0) {
                            shift = -shift;
                        }
                        shift = c / (b + shift);
                    }
                    f = (sk + sp) * (sk - sp) + shift;
                    g = sk * ek;
                    for (j = k; j < p - 1; j++) {
                        t = hypotenuse(f, g);
                        cs = f / t;
                        sn = g / t;
                        if (j !== k) {
                            e[j - 1] = t;
                        }
                        f = cs * s[j] + sn * e[j];
                        e[j] = cs * e[j] - sn * s[j];
                        g = sn * s[j + 1];
                        s[j + 1] = cs * s[j + 1];
                        if (wantv) {
                            for (i = 0; i < n; i++) {
                                t = cs * V[i][j] + sn * V[i][j + 1];
                                V[i][j + 1] = -sn * V[i][j] + cs * V[i][j + 1];
                                V[i][j] = t;
                            }
                        }
                        t = hypotenuse(f, g);
                        cs = f / t;
                        sn = g / t;
                        s[j] = t;
                        f = cs * e[j] + sn * s[j + 1];
                        s[j + 1] = -sn * e[j] + cs * s[j + 1];
                        g = sn * e[j + 1];
                        e[j + 1] = cs * e[j + 1];
                        if (wantu && (j < m - 1)) {
                            for (i = 0; i < m; i++) {
                                t = cs * U[i][j] + sn * U[i][j + 1];
                                U[i][j + 1] = -sn * U[i][j] + cs * U[i][j + 1];
                                U[i][j] = t;
                            }
                        }
                    }
                    e[p - 2] = f;
                    iter = iter + 1;
                    break;
                }
                case 4: {
                    if (s[k] <= 0) {
                        s[k] = (s[k] < 0 ? -s[k] : 0);
                        if (wantv) {
                            for (i = 0; i <= pp; i++) {
                                V[i][k] = -V[i][k];
                            }
                        }
                    }
                    while (k < pp) {
                        if (s[k] >= s[k + 1]) {
                            break;
                        }
                        t = s[k];
                        s[k] = s[k + 1];
                        s[k + 1] = t;
                        if (wantv && (k < n - 1)) {
                            for (i = 0; i < n; i++) {
                                t = V[i][k + 1];
                                V[i][k + 1] = V[i][k];
                                V[i][k] = t;
                            }
                        }
                        if (wantu && (k < m - 1)) {
                            for (i = 0; i < m; i++) {
                                t = U[i][k + 1];
                                U[i][k + 1] = U[i][k];
                                U[i][k] = t;
                            }
                        }
                        k++;
                    }
                    iter = 0;
                    p--;
                    break;
                }
                // no default
            }
        }

        if (swapped) {
            var tmp = V;
            V = U;
            U = tmp;
        }

        this.m = m;
        this.n = n;
        this.s = s;
        this.U = U;
        this.V = V;
    }

    /**
     * Solve a problem of least square (Ax=b) by using the SVD. Useful when A is singular. When A is not singular, it would be better to use qr.solve(value).
     * Example : We search to approximate x, with A matrix shape m*n, x vector size n, b vector size m (m > n). We will use :
     * var svd = SingularValueDecomposition(A);
     * var x = svd.solve(b);
     * @param {Matrix} value - Matrix 1D which is the vector b (in the equation Ax = b)
     * @return {Matrix} - The vector x
     */
    solve(value) {

        var Y = value;
        var e = this.threshold;
        var scols = this.s.length;
        var Ls = Matrix.zeros(scols, scols);
        var i;

        for (i = 0; i < scols; i++) {
            if (Math.abs(this.s[i]) <= e) {
                Ls[i][i] = 0;
            } else {
                Ls[i][i] = 1 / this.s[i];
            }
        }

        var U = this.U;
        var V = this.rightSingularVectors;

        var VL = V.mmul(Ls);
        var vrows = V.rows;
        var urows = U.length;
        var VLU = Matrix.zeros(vrows, urows);
        var j, k, sum;

        for (i = 0; i < vrows; i++) {
            for (j = 0; j < urows; j++) {
                sum = 0;
                for (k = 0; k < scols; k++) {
                    sum += VL[i][k] * U[j][k];
                }
                VLU[i][j] = sum;
            }
        }

        return VLU.mmul(Y);
    }

    /**
     *
     * @param {Array<number>} value
     * @return {Matrix}
     */
    solveForDiagonal(value) {
        return this.solve(Matrix.diag(value));
    }

    /**
     * Get the inverse of the matrix. We compute the inverse of a matrix using SVD when this matrix is singular or ill-conditioned. Example :
     * var svd = SingularValueDecomposition(A);
     * var inverseA = svd.inverse();
     * @return {Matrix} - The approximation of the inverse of the matrix
     */
    inverse() {
        var V = this.V;
        var e = this.threshold;
        var vrows = V.length;
        var vcols = V[0].length;
        var X = new Matrix(vrows, this.s.length);
        var i, j;

        for (i = 0; i < vrows; i++) {
            for (j = 0; j < vcols; j++) {
                if (Math.abs(this.s[j]) > e) {
                    X[i][j] = V[i][j] / this.s[j];
                } else {
                    X[i][j] = 0;
                }
            }
        }

        var U = this.U;

        var urows = U.length;
        var ucols = U[0].length;
        var Y = new Matrix(vrows, urows);
        var k, sum;

        for (i = 0; i < vrows; i++) {
            for (j = 0; j < urows; j++) {
                sum = 0;
                for (k = 0; k < ucols; k++) {
                    sum += X[i][k] * U[j][k];
                }
                Y[i][j] = sum;
            }
        }

        return Y;
    }

    /**
     *
     * @return {number}
     */
    get condition() {
        return this.s[0] / this.s[Math.min(this.m, this.n) - 1];
    }

    /**
     *
     * @return {number}
     */
    get norm2() {
        return this.s[0];
    }

    /**
     *
     * @return {number}
     */
    get rank() {
        var tol = Math.max(this.m, this.n) * this.s[0] * Number.EPSILON;
        var r = 0;
        var s = this.s;
        for (var i = 0, ii = s.length; i < ii; i++) {
            if (s[i] > tol) {
                r++;
            }
        }
        return r;
    }

    /**
     *
     * @return {Array<number>}
     */
    get diagonal() {
        return this.s;
    }

    /**
     *
     * @return {number}
     */
    get threshold() {
        return (Number.EPSILON / 2) * Math.max(this.m, this.n) * this.s[0];
    }

    /**
     *
     * @return {Matrix}
     */
    get leftSingularVectors() {
        if (!Matrix.isMatrix(this.U)) {
            this.U = new Matrix(this.U);
        }
        return this.U;
    }

    /**
     *
     * @return {Matrix}
     */
    get rightSingularVectors() {
        if (!Matrix.isMatrix(this.V)) {
            this.V = new Matrix(this.V);
        }
        return this.V;
    }

    /**
     *
     * @return {Matrix}
     */
    get diagonalMatrix() {
        return Matrix.diag(this.s);
    }
}

/**
 * @private
 * Check that a row index is not out of bounds
 * @param {Matrix} matrix
 * @param {number} index
 * @param {boolean} [outer]
 */
function checkRowIndex(matrix, index, outer) {
    var max = outer ? matrix.rows : matrix.rows - 1;
    if (index < 0 || index > max) {
        throw new RangeError('Row index out of range');
    }
}

/**
 * @private
 * Check that a column index is not out of bounds
 * @param {Matrix} matrix
 * @param {number} index
 * @param {boolean} [outer]
 */
function checkColumnIndex(matrix, index, outer) {
    var max = outer ? matrix.columns : matrix.columns - 1;
    if (index < 0 || index > max) {
        throw new RangeError('Column index out of range');
    }
}

/**
 * @private
 * Check that the provided vector is an array with the right length
 * @param {Matrix} matrix
 * @param {Array|Matrix} vector
 * @return {Array}
 * @throws {RangeError}
 */
function checkRowVector(matrix, vector) {
    if (vector.to1DArray) {
        vector = vector.to1DArray();
    }
    if (vector.length !== matrix.columns) {
        throw new RangeError('vector size must be the same as the number of columns');
    }
    return vector;
}

/**
 * @private
 * Check that the provided vector is an array with the right length
 * @param {Matrix} matrix
 * @param {Array|Matrix} vector
 * @return {Array}
 * @throws {RangeError}
 */
function checkColumnVector(matrix, vector) {
    if (vector.to1DArray) {
        vector = vector.to1DArray();
    }
    if (vector.length !== matrix.rows) {
        throw new RangeError('vector size must be the same as the number of rows');
    }
    return vector;
}

function checkIndices(matrix, rowIndices, columnIndices) {
    return {
        row: checkRowIndices(matrix, rowIndices),
        column: checkColumnIndices(matrix, columnIndices)
    };
}

function checkRowIndices(matrix, rowIndices) {
    if (typeof rowIndices !== 'object') {
        throw new TypeError('unexpected type for row indices');
    }

    var rowOut = rowIndices.some(r => {
        return r < 0 || r >= matrix.rows;

    });

    if (rowOut) {
        throw new RangeError('row indices are out of range');
    }

    if (!Array.isArray(rowIndices)) rowIndices = Array.from(rowIndices);

    return rowIndices;
}

function checkColumnIndices(matrix, columnIndices) {
    if (typeof columnIndices !== 'object') {
        throw new TypeError('unexpected type for column indices');
    }

    var columnOut = columnIndices.some(c => {
        return c < 0 || c >= matrix.columns;
    });

    if (columnOut) {
        throw new RangeError('column indices are out of range');
    }
    if (!Array.isArray(columnIndices)) columnIndices = Array.from(columnIndices);

    return columnIndices;
}

function checkRange(matrix, startRow, endRow, startColumn, endColumn) {
    if (arguments.length !== 5) throw new TypeError('Invalid argument type');
    var notAllNumbers = Array.from(arguments).slice(1).some(function (arg) {
        return typeof arg !== 'number';
    });
    if (notAllNumbers) throw new TypeError('Invalid argument type');
    if (startRow > endRow || startColumn > endColumn || startRow < 0 || startRow >= matrix.rows || endRow < 0 || endRow >= matrix.rows || startColumn < 0 || startColumn >= matrix.columns || endColumn < 0 || endColumn >= matrix.columns) {
        throw new RangeError('Submatrix indices are out of range');
    }
}



function sumByRow(matrix) {
    var sum = Matrix.zeros(matrix.rows, 1);
    for (var i = 0; i < matrix.rows; ++i) {
        for (var j = 0; j < matrix.columns; ++j) {
            sum.set(i, 0, sum.get(i, 0) + matrix.get(i, j));
        }
    }
    return sum;
}

function sumByColumn(matrix) {
    var sum = Matrix.zeros(1, matrix.columns);
    for (var i = 0; i < matrix.rows; ++i) {
        for (var j = 0; j < matrix.columns; ++j) {
            sum.set(0, j, sum.get(0, j) + matrix.get(i, j));
        }
    }
    return sum;
}

function sumAll(matrix) {
    var v = 0;
    for (var i = 0; i < matrix.rows; i++) {
        for (var j = 0; j < matrix.columns; j++) {
            v += matrix.get(i, j);
        }
    }
    return v;
}

class BaseView extends AbstractMatrix() {
    constructor(matrix, rows, columns) {
        super();
        this.matrix = matrix;
        this.rows = rows;
        this.columns = columns;
    }

    static get [Symbol.species]() {
        return Matrix;
    }
}

class MatrixTransposeView extends BaseView {
    constructor(matrix) {
        super(matrix, matrix.columns, matrix.rows);
    }

    set(rowIndex, columnIndex, value) {
        this.matrix.set(columnIndex, rowIndex, value);
        return this;
    }

    get(rowIndex, columnIndex) {
        return this.matrix.get(columnIndex, rowIndex);
    }
}

class MatrixRowView extends BaseView {
    constructor(matrix, row) {
        super(matrix, 1, matrix.columns);
        this.row = row;
    }

    set(rowIndex, columnIndex, value) {
        this.matrix.set(this.row, columnIndex, value);
        return this;
    }

    get(rowIndex, columnIndex) {
        return this.matrix.get(this.row, columnIndex);
    }
}

class MatrixSubView extends BaseView {
    constructor(matrix, startRow, endRow, startColumn, endColumn) {
        checkRange(matrix, startRow, endRow, startColumn, endColumn);
        super(matrix, endRow - startRow + 1, endColumn - startColumn + 1);
        this.startRow = startRow;
        this.startColumn = startColumn;
    }

    set(rowIndex, columnIndex, value) {
        this.matrix.set(this.startRow + rowIndex, this.startColumn + columnIndex, value);
        return this;
    }

    get(rowIndex, columnIndex) {
        return this.matrix.get(this.startRow + rowIndex, this.startColumn + columnIndex);
    }
}

class MatrixSelectionView extends BaseView {
    constructor(matrix, rowIndices, columnIndices) {
        var indices = checkIndices(matrix, rowIndices, columnIndices);
        super(matrix, indices.row.length, indices.column.length);
        this.rowIndices = indices.row;
        this.columnIndices = indices.column;
    }

    set(rowIndex, columnIndex, value) {
        this.matrix.set(this.rowIndices[rowIndex], this.columnIndices[columnIndex], value);
        return this;
    }

    get(rowIndex, columnIndex) {
        return this.matrix.get(this.rowIndices[rowIndex], this.columnIndices[columnIndex]);
    }
}

class MatrixRowSelectionView extends BaseView {
    constructor(matrix, rowIndices) {
        rowIndices = checkRowIndices(matrix, rowIndices);
        super(matrix, rowIndices.length, matrix.columns);
        this.rowIndices = rowIndices;
    }

    set(rowIndex, columnIndex, value) {
        this.matrix.set(this.rowIndices[rowIndex], columnIndex, value);
        return this;
    }

    get(rowIndex, columnIndex) {
        return this.matrix.get(this.rowIndices[rowIndex], columnIndex);
    }
}

class MatrixColumnSelectionView extends BaseView {
    constructor(matrix, columnIndices) {
        columnIndices = checkColumnIndices(matrix, columnIndices);
        super(matrix, matrix.rows, columnIndices.length);
        this.columnIndices = columnIndices;
    }

    set(rowIndex, columnIndex, value) {
        this.matrix.set(rowIndex, this.columnIndices[columnIndex], value);
        return this;
    }

    get(rowIndex, columnIndex) {
        return this.matrix.get(rowIndex, this.columnIndices[columnIndex]);
    }
}

class MatrixColumnView extends BaseView {
    constructor(matrix, column) {
        super(matrix, matrix.rows, 1);
        this.column = column;
    }

    set(rowIndex, columnIndex, value) {
        this.matrix.set(rowIndex, this.column, value);
        return this;
    }

    get(rowIndex) {
        return this.matrix.get(rowIndex, this.column);
    }
}

class MatrixFlipRowView extends BaseView {
    constructor(matrix) {
        super(matrix, matrix.rows, matrix.columns);
    }

    set(rowIndex, columnIndex, value) {
        this.matrix.set(this.rows - rowIndex - 1, columnIndex, value);
        return this;
    }

    get(rowIndex, columnIndex) {
        return this.matrix.get(this.rows - rowIndex - 1, columnIndex);
    }
}

class MatrixFlipColumnView extends BaseView {
    constructor(matrix) {
        super(matrix, matrix.rows, matrix.columns);
    }

    set(rowIndex, columnIndex, value) {
        this.matrix.set(rowIndex, this.columns - columnIndex - 1, value);
        return this;
    }

    get(rowIndex, columnIndex) {
        return this.matrix.get(rowIndex, this.columns - columnIndex - 1);
    }
}

function AbstractMatrix(superCtor) {
    if (superCtor === undefined) superCtor = Object;

    /**
     * Real matrix
     * @class Matrix
     * @param {number|Array|Matrix} nRows - Number of rows of the new matrix,
     * 2D array containing the data or Matrix instance to clone
     * @param {number} [nColumns] - Number of columns of the new matrix
     */
    class Matrix extends superCtor {
        static get [Symbol.species]() {
            return this;
        }

        /**
         * Constructs a Matrix with the chosen dimensions from a 1D array
         * @param {number} newRows - Number of rows
         * @param {number} newColumns - Number of columns
         * @param {Array} newData - A 1D array containing data for the matrix
         * @return {Matrix} - The new matrix
         */
        static from1DArray(newRows, newColumns, newData) {
            var length = newRows * newColumns;
            if (length !== newData.length) {
                throw new RangeError('Data length does not match given dimensions');
            }
            var newMatrix = new this(newRows, newColumns);
            for (var row = 0; row < newRows; row++) {
                for (var column = 0; column < newColumns; column++) {
                    newMatrix.set(row, column, newData[row * newColumns + column]);
                }
            }
            return newMatrix;
        }

        /**
         * Creates a row vector, a matrix with only one row.
         * @param {Array} newData - A 1D array containing data for the vector
         * @return {Matrix} - The new matrix
         */
        static rowVector(newData) {
            var vector = new this(1, newData.length);
            for (var i = 0; i < newData.length; i++) {
                vector.set(0, i, newData[i]);
            }
            return vector;
        }

        /**
         * Creates a column vector, a matrix with only one column.
         * @param {Array} newData - A 1D array containing data for the vector
         * @return {Matrix} - The new matrix
         */
        static columnVector(newData) {
            var vector = new this(newData.length, 1);
            for (var i = 0; i < newData.length; i++) {
                vector.set(i, 0, newData[i]);
            }
            return vector;
        }

        /**
         * Creates an empty matrix with the given dimensions. Values will be undefined. Same as using new Matrix(rows, columns).
         * @param {number} rows - Number of rows
         * @param {number} columns - Number of columns
         * @return {Matrix} - The new matrix
         */
        static empty(rows, columns) {
            return new this(rows, columns);
        }

        /**
         * Creates a matrix with the given dimensions. Values will be set to zero.
         * @param {number} rows - Number of rows
         * @param {number} columns - Number of columns
         * @return {Matrix} - The new matrix
         */
        static zeros(rows, columns) {
            return this.empty(rows, columns).fill(0);
        }

        /**
         * Creates a matrix with the given dimensions. Values will be set to one.
         * @param {number} rows - Number of rows
         * @param {number} columns - Number of columns
         * @return {Matrix} - The new matrix
         */
        static ones(rows, columns) {
            return this.empty(rows, columns).fill(1);
        }

        /**
         * Creates a matrix with the given dimensions. Values will be randomly set.
         * @param {number} rows - Number of rows
         * @param {number} columns - Number of columns
         * @param {function} [rng=Math.random] - Random number generator
         * @return {Matrix} The new matrix
         */
        static rand(rows, columns, rng) {
            if (rng === undefined) rng = Math.random;
            var matrix = this.empty(rows, columns);
            for (var i = 0; i < rows; i++) {
                for (var j = 0; j < columns; j++) {
                    matrix.set(i, j, rng());
                }
            }
            return matrix;
        }

        /**
         * Creates a matrix with the given dimensions. Values will be random integers.
         * @param {number} rows - Number of rows
         * @param {number} columns - Number of columns
         * @param {number} [maxValue=1000] - Maximum value
         * @param {function} [rng=Math.random] - Random number generator
         * @return {Matrix} The new matrix
         */
        static randInt(rows, columns, maxValue, rng) {
            if (maxValue === undefined) maxValue = 1000;
            if (rng === undefined) rng = Math.random;
            var matrix = this.empty(rows, columns);
            for (var i = 0; i < rows; i++) {
                for (var j = 0; j < columns; j++) {
                    var value = Math.floor(rng() * maxValue);
                    matrix.set(i, j, value);
                }
            }
            return matrix;
        }

        /**
         * Creates an identity matrix with the given dimension. Values of the diagonal will be 1 and others will be 0.
         * @param {number} rows - Number of rows
         * @param {number} [columns=rows] - Number of columns
         * @param {number} [value=1] - Value to fill the diagonal with
         * @return {Matrix} - The new identity matrix
         */
        static eye(rows, columns, value) {
            if (columns === undefined) columns = rows;
            if (value === undefined) value = 1;
            var min = Math.min(rows, columns);
            var matrix = this.zeros(rows, columns);
            for (var i = 0; i < min; i++) {
                matrix.set(i, i, value);
            }
            return matrix;
        }

        /**
         * Creates a diagonal matrix based on the given array.
         * @param {Array} data - Array containing the data for the diagonal
         * @param {number} [rows] - Number of rows (Default: data.length)
         * @param {number} [columns] - Number of columns (Default: rows)
         * @return {Matrix} - The new diagonal matrix
         */
        static diag(data, rows, columns) {
            var l = data.length;
            if (rows === undefined) rows = l;
            if (columns === undefined) columns = rows;
            var min = Math.min(l, rows, columns);
            var matrix = this.zeros(rows, columns);
            for (var i = 0; i < min; i++) {
                matrix.set(i, i, data[i]);
            }
            return matrix;
        }

        /**
         * Returns a matrix whose elements are the minimum between matrix1 and matrix2
         * @param {Matrix} matrix1
         * @param {Matrix} matrix2
         * @return {Matrix}
         */
        static min(matrix1, matrix2) {
            matrix1 = this.checkMatrix(matrix1);
            matrix2 = this.checkMatrix(matrix2);
            var rows = matrix1.rows;
            var columns = matrix1.columns;
            var result = new this(rows, columns);
            for (var i = 0; i < rows; i++) {
                for (var j = 0; j < columns; j++) {
                    result.set(i, j, Math.min(matrix1.get(i, j), matrix2.get(i, j)));
                }
            }
            return result;
        }

        /**
         * Returns a matrix whose elements are the maximum between matrix1 and matrix2
         * @param {Matrix} matrix1
         * @param {Matrix} matrix2
         * @return {Matrix}
         */
        static max(matrix1, matrix2) {
            matrix1 = this.checkMatrix(matrix1);
            matrix2 = this.checkMatrix(matrix2);
            var rows = matrix1.rows;
            var columns = matrix1.columns;
            var result = new this(rows, columns);
            for (var i = 0; i < rows; i++) {
                for (var j = 0; j < columns; j++) {
                    result.set(i, j, Math.max(matrix1.get(i, j), matrix2.get(i, j)));
                }
            }
            return result;
        }

        /**
         * Check that the provided value is a Matrix and tries to instantiate one if not
         * @param {*} value - The value to check
         * @return {Matrix}
         */
        static checkMatrix(value) {
            return Matrix.isMatrix(value) ? value : new this(value);
        }

        /**
         * Returns true if the argument is a Matrix, false otherwise
         * @param {*} value - The value to check
         * @return {boolean}
         */
        static isMatrix(value) {
            return (value != null) && (value.klass === 'Matrix');
        }

        /**
         * @prop {number} size - The number of elements in the matrix.
         */
        get size() {
            return this.rows * this.columns;
        }

        /**
         * Applies a callback for each element of the matrix. The function is called in the matrix (this) context.
         * @param {function} callback - Function that will be called with two parameters : i (row) and j (column)
         * @return {Matrix} this
         */
        apply(callback) {
            if (typeof callback !== 'function') {
                throw new TypeError('callback must be a function');
            }
            var ii = this.rows;
            var jj = this.columns;
            for (var i = 0; i < ii; i++) {
                for (var j = 0; j < jj; j++) {
                    callback.call(this, i, j);
                }
            }
            return this;
        }

        /**
         * Returns a new 1D array filled row by row with the matrix values
         * @return {Array}
         */
        to1DArray() {
            var array = new Array(this.size);
            for (var i = 0; i < this.rows; i++) {
                for (var j = 0; j < this.columns; j++) {
                    array[i * this.columns + j] = this.get(i, j);
                }
            }
            return array;
        }

        /**
         * Returns a 2D array containing a copy of the data
         * @return {Array}
         */
        to2DArray() {
            var copy = new Array(this.rows);
            for (var i = 0; i < this.rows; i++) {
                copy[i] = new Array(this.columns);
                for (var j = 0; j < this.columns; j++) {
                    copy[i][j] = this.get(i, j);
                }
            }
            return copy;
        }

        /**
         * @return {boolean} true if the matrix has one row
         */
        isRowVector() {
            return this.rows === 1;
        }

        /**
         * @return {boolean} true if the matrix has one column
         */
        isColumnVector() {
            return this.columns === 1;
        }

        /**
         * @return {boolean} true if the matrix has one row or one column
         */
        isVector() {
            return (this.rows === 1) || (this.columns === 1);
        }

        /**
         * @return {boolean} true if the matrix has the same number of rows and columns
         */
        isSquare() {
            return this.rows === this.columns;
        }

        /**
         * @return {boolean} true if the matrix is square and has the same values on both sides of the diagonal
         */
        isSymmetric() {
            if (this.isSquare()) {
                for (var i = 0; i < this.rows; i++) {
                    for (var j = 0; j <= i; j++) {
                        if (this.get(i, j) !== this.get(j, i)) {
                            return false;
                        }
                    }
                }
                return true;
            }
            return false;
        }

        /**
         * Sets a given element of the matrix. mat.set(3,4,1) is equivalent to mat[3][4]=1
         * @abstract
         * @param {number} rowIndex - Index of the row
         * @param {number} columnIndex - Index of the column
         * @param {number} value - The new value for the element
         * @return {Matrix} this
         */
        set(rowIndex, columnIndex, value) { // eslint-disable-line no-unused-vars
            throw new Error('set method is unimplemented');
        }

        /**
         * Returns the given element of the matrix. mat.get(3,4) is equivalent to matrix[3][4]
         * @abstract
         * @param {number} rowIndex - Index of the row
         * @param {number} columnIndex - Index of the column
         * @return {number}
         */
        get(rowIndex, columnIndex) { // eslint-disable-line no-unused-vars
            throw new Error('get method is unimplemented');
        }

        /**
         * Creates a new matrix that is a repetition of the current matrix. New matrix has rowRep times the number of
         * rows of the matrix, and colRep times the number of columns of the matrix
         * @param {number} rowRep - Number of times the rows should be repeated
         * @param {number} colRep - Number of times the columns should be re
         * @return {Matrix}
         * @example
         * var matrix = new Matrix([[1,2]]);
         * matrix.repeat(2); // [[1,2],[1,2]]
         */
        repeat(rowRep, colRep) {
            rowRep = rowRep || 1;
            colRep = colRep || 1;
            var matrix = new this.constructor[Symbol.species](this.rows * rowRep, this.columns * colRep);
            for (var i = 0; i < rowRep; i++) {
                for (var j = 0; j < colRep; j++) {
                    matrix.setSubMatrix(this, this.rows * i, this.columns * j);
                }
            }
            return matrix;
        }

        /**
         * Fills the matrix with a given value. All elements will be set to this value.
         * @param {number} value - New value
         * @return {Matrix} this
         */
        fill(value) {
            for (var i = 0; i < this.rows; i++) {
                for (var j = 0; j < this.columns; j++) {
                    this.set(i, j, value);
                }
            }
            return this;
        }

        /**
         * Negates the matrix. All elements will be multiplied by (-1)
         * @return {Matrix} this
         */
        neg() {
            return this.mulS(-1);
        }

        /**
         * Returns a new array from the given row index
         * @param {number} index - Row index
         * @return {Array}
         */
        getRow(index) {
            checkRowIndex(this, index);
            var row = new Array(this.columns);
            for (var i = 0; i < this.columns; i++) {
                row[i] = this.get(index, i);
            }
            return row;
        }

        /**
         * Returns a new row vector from the given row index
         * @param {number} index - Row index
         * @return {Matrix}
         */
        getRowVector(index) {
            return this.constructor.rowVector(this.getRow(index));
        }

        /**
         * Sets a row at the given index
         * @param {number} index - Row index
         * @param {Array|Matrix} array - Array or vector
         * @return {Matrix} this
         */
        setRow(index, array) {
            checkRowIndex(this, index);
            array = checkRowVector(this, array);
            for (var i = 0; i < this.columns; i++) {
                this.set(index, i, array[i]);
            }
            return this;
        }

        /**
         * Swaps two rows
         * @param {number} row1 - First row index
         * @param {number} row2 - Second row index
         * @return {Matrix} this
         */
        swapRows(row1, row2) {
            checkRowIndex(this, row1);
            checkRowIndex(this, row2);
            for (var i = 0; i < this.columns; i++) {
                var temp = this.get(row1, i);
                this.set(row1, i, this.get(row2, i));
                this.set(row2, i, temp);
            }
            return this;
        }

        /**
         * Returns a new array from the given column index
         * @param {number} index - Column index
         * @return {Array}
         */
        getColumn(index) {
            checkColumnIndex(this, index);
            var column = new Array(this.rows);
            for (var i = 0; i < this.rows; i++) {
                column[i] = this.get(i, index);
            }
            return column;
        }

        /**
         * Returns a new column vector from the given column index
         * @param {number} index - Column index
         * @return {Matrix}
         */
        getColumnVector(index) {
            return this.constructor.columnVector(this.getColumn(index));
        }

        /**
         * Sets a column at the given index
         * @param {number} index - Column index
         * @param {Array|Matrix} array - Array or vector
         * @return {Matrix} this
         */
        setColumn(index, array) {
            checkColumnIndex(this, index);
            array = checkColumnVector(this, array);
            for (var i = 0; i < this.rows; i++) {
                this.set(i, index, array[i]);
            }
            return this;
        }

        /**
         * Swaps two columns
         * @param {number} column1 - First column index
         * @param {number} column2 - Second column index
         * @return {Matrix} this
         */
        swapColumns(column1, column2) {
            checkColumnIndex(this, column1);
            checkColumnIndex(this, column2);
            for (var i = 0; i < this.rows; i++) {
                var temp = this.get(i, column1);
                this.set(i, column1, this.get(i, column2));
                this.set(i, column2, temp);
            }
            return this;
        }

        /**
         * Adds the values of a vector to each row
         * @param {Array|Matrix} vector - Array or vector
         * @return {Matrix} this
         */
        addRowVector(vector) {
            vector = checkRowVector(this, vector);
            for (var i = 0; i < this.rows; i++) {
                for (var j = 0; j < this.columns; j++) {
                    this.set(i, j, this.get(i, j) + vector[j]);
                }
            }
            return this;
        }

        /**
         * Subtracts the values of a vector from each row
         * @param {Array|Matrix} vector - Array or vector
         * @return {Matrix} this
         */
        subRowVector(vector) {
            vector = checkRowVector(this, vector);
            for (var i = 0; i < this.rows; i++) {
                for (var j = 0; j < this.columns; j++) {
                    this.set(i, j, this.get(i, j) - vector[j]);
                }
            }
            return this;
        }

        /**
         * Multiplies the values of a vector with each row
         * @param {Array|Matrix} vector - Array or vector
         * @return {Matrix} this
         */
        mulRowVector(vector) {
            vector = checkRowVector(this, vector);
            for (var i = 0; i < this.rows; i++) {
                for (var j = 0; j < this.columns; j++) {
                    this.set(i, j, this.get(i, j) * vector[j]);
                }
            }
            return this;
        }

        /**
         * Divides the values of each row by those of a vector
         * @param {Array|Matrix} vector - Array or vector
         * @return {Matrix} this
         */
        divRowVector(vector) {
            vector = checkRowVector(this, vector);
            for (var i = 0; i < this.rows; i++) {
                for (var j = 0; j < this.columns; j++) {
                    this.set(i, j, this.get(i, j) / vector[j]);
                }
            }
            return this;
        }

        /**
         * Adds the values of a vector to each column
         * @param {Array|Matrix} vector - Array or vector
         * @return {Matrix} this
         */
        addColumnVector(vector) {
            vector = checkColumnVector(this, vector);
            for (var i = 0; i < this.rows; i++) {
                for (var j = 0; j < this.columns; j++) {
                    this.set(i, j, this.get(i, j) + vector[i]);
                }
            }
            return this;
        }

        /**
         * Subtracts the values of a vector from each column
         * @param {Array|Matrix} vector - Array or vector
         * @return {Matrix} this
         */
        subColumnVector(vector) {
            vector = checkColumnVector(this, vector);
            for (var i = 0; i < this.rows; i++) {
                for (var j = 0; j < this.columns; j++) {
                    this.set(i, j, this.get(i, j) - vector[i]);
                }
            }
            return this;
        }

        /**
         * Multiplies the values of a vector with each column
         * @param {Array|Matrix} vector - Array or vector
         * @return {Matrix} this
         */
        mulColumnVector(vector) {
            vector = checkColumnVector(this, vector);
            for (var i = 0; i < this.rows; i++) {
                for (var j = 0; j < this.columns; j++) {
                    this.set(i, j, this.get(i, j) * vector[i]);
                }
            }
            return this;
        }

        /**
         * Divides the values of each column by those of a vector
         * @param {Array|Matrix} vector - Array or vector
         * @return {Matrix} this
         */
        divColumnVector(vector) {
            vector = checkColumnVector(this, vector);
            for (var i = 0; i < this.rows; i++) {
                for (var j = 0; j < this.columns; j++) {
                    this.set(i, j, this.get(i, j) / vector[i]);
                }
            }
            return this;
        }

        /**
         * Multiplies the values of a row with a scalar
         * @param {number} index - Row index
         * @param {number} value
         * @return {Matrix} this
         */
        mulRow(index, value) {
            checkRowIndex(this, index);
            for (var i = 0; i < this.columns; i++) {
                this.set(index, i, this.get(index, i) * value);
            }
            return this;
        }

        /**
         * Multiplies the values of a column with a scalar
         * @param {number} index - Column index
         * @param {number} value
         * @return {Matrix} this
         */
        mulColumn(index, value) {
            checkColumnIndex(this, index);
            for (var i = 0; i < this.rows; i++) {
                this.set(i, index, this.get(i, index) * value);
            }
            return this;
        }

        /**
         * Returns the maximum value of the matrix
         * @return {number}
         */
        max() {
            var v = this.get(0, 0);
            for (var i = 0; i < this.rows; i++) {
                for (var j = 0; j < this.columns; j++) {
                    if (this.get(i, j) > v) {
                        v = this.get(i, j);
                    }
                }
            }
            return v;
        }

        /**
         * Returns the index of the maximum value
         * @return {Array}
         */
        maxIndex() {
            var v = this.get(0, 0);
            var idx = [0, 0];
            for (var i = 0; i < this.rows; i++) {
                for (var j = 0; j < this.columns; j++) {
                    if (this.get(i, j) > v) {
                        v = this.get(i, j);
                        idx[0] = i;
                        idx[1] = j;
                    }
                }
            }
            return idx;
        }

        /**
         * Returns the minimum value of the matrix
         * @return {number}
         */
        min() {
            var v = this.get(0, 0);
            for (var i = 0; i < this.rows; i++) {
                for (var j = 0; j < this.columns; j++) {
                    if (this.get(i, j) < v) {
                        v = this.get(i, j);
                    }
                }
            }
            return v;
        }

        /**
         * Returns the index of the minimum value
         * @return {Array}
         */
        minIndex() {
            var v = this.get(0, 0);
            var idx = [0, 0];
            for (var i = 0; i < this.rows; i++) {
                for (var j = 0; j < this.columns; j++) {
                    if (this.get(i, j) < v) {
                        v = this.get(i, j);
                        idx[0] = i;
                        idx[1] = j;
                    }
                }
            }
            return idx;
        }

        /**
         * Returns the maximum value of one row
         * @param {number} row - Row index
         * @return {number}
         */
        maxRow(row) {
            checkRowIndex(this, row);
            var v = this.get(row, 0);
            for (var i = 1; i < this.columns; i++) {
                if (this.get(row, i) > v) {
                    v = this.get(row, i);
                }
            }
            return v;
        }

        /**
         * Returns the index of the maximum value of one row
         * @param {number} row - Row index
         * @return {Array}
         */
        maxRowIndex(row) {
            checkRowIndex(this, row);
            var v = this.get(row, 0);
            var idx = [row, 0];
            for (var i = 1; i < this.columns; i++) {
                if (this.get(row, i) > v) {
                    v = this.get(row, i);
                    idx[1] = i;
                }
            }
            return idx;
        }

        /**
         * Returns the minimum value of one row
         * @param {number} row - Row index
         * @return {number}
         */
        minRow(row) {
            checkRowIndex(this, row);
            var v = this.get(row, 0);
            for (var i = 1; i < this.columns; i++) {
                if (this.get(row, i) < v) {
                    v = this.get(row, i);
                }
            }
            return v;
        }

        /**
         * Returns the index of the maximum value of one row
         * @param {number} row - Row index
         * @return {Array}
         */
        minRowIndex(row) {
            checkRowIndex(this, row);
            var v = this.get(row, 0);
            var idx = [row, 0];
            for (var i = 1; i < this.columns; i++) {
                if (this.get(row, i) < v) {
                    v = this.get(row, i);
                    idx[1] = i;
                }
            }
            return idx;
        }

        /**
         * Returns the maximum value of one column
         * @param {number} column - Column index
         * @return {number}
         */
        maxColumn(column) {
            checkColumnIndex(this, column);
            var v = this.get(0, column);
            for (var i = 1; i < this.rows; i++) {
                if (this.get(i, column) > v) {
                    v = this.get(i, column);
                }
            }
            return v;
        }

        /**
         * Returns the index of the maximum value of one column
         * @param {number} column - Column index
         * @return {Array}
         */
        maxColumnIndex(column) {
            checkColumnIndex(this, column);
            var v = this.get(0, column);
            var idx = [0, column];
            for (var i = 1; i < this.rows; i++) {
                if (this.get(i, column) > v) {
                    v = this.get(i, column);
                    idx[0] = i;
                }
            }
            return idx;
        }

        /**
         * Returns the minimum value of one column
         * @param {number} column - Column index
         * @return {number}
         */
        minColumn(column) {
            checkColumnIndex(this, column);
            var v = this.get(0, column);
            for (var i = 1; i < this.rows; i++) {
                if (this.get(i, column) < v) {
                    v = this.get(i, column);
                }
            }
            return v;
        }

        /**
         * Returns the index of the minimum value of one column
         * @param {number} column - Column index
         * @return {Array}
         */
        minColumnIndex(column) {
            checkColumnIndex(this, column);
            var v = this.get(0, column);
            var idx = [0, column];
            for (var i = 1; i < this.rows; i++) {
                if (this.get(i, column) < v) {
                    v = this.get(i, column);
                    idx[0] = i;
                }
            }
            return idx;
        }

        /**
         * Returns an array containing the diagonal values of the matrix
         * @return {Array}
         */
        diag() {
            var min = Math.min(this.rows, this.columns);
            var diag = new Array(min);
            for (var i = 0; i < min; i++) {
                diag[i] = this.get(i, i);
            }
            return diag;
        }

        /**
         * Returns the sum by the argument given, if no argument given,
         * it returns the sum of all elements of the matrix.
         * @param {string} by - sum by 'row' or 'column'.
         * @return {Matrix|number}
         */
        sum(by) {
            switch (by) {
                case 'row':
                    return sumByRow(this);
                case 'column':
                    return sumByColumn(this);
                default:
                    return sumAll(this);
            }
        }

        /**
         * Returns the mean of all elements of the matrix
         * @return {number}
         */
        mean() {
            return this.sum() / this.size;
        }

        /**
         * Returns the product of all elements of the matrix
         * @return {number}
         */
        prod() {
            var prod = 1;
            for (var i = 0; i < this.rows; i++) {
                for (var j = 0; j < this.columns; j++) {
                    prod *= this.get(i, j);
                }
            }
            return prod;
        }

        /**
         * Returns the norm of a matrix.
         * @param {string} type - "frobenius" (default) or "max" return resp. the Frobenius norm and the max norm.
         * @return {number}
         */
        norm(type = 'frobenius') {
            var result = 0;
            if (type === 'max') {
                return this.max();
            } else if (type === 'frobenius') {
                for (var i = 0; i < this.rows; i++) {
                    for (var j = 0; j < this.columns; j++) {
                        result = result + this.get(i, j) * this.get(i, j);
                    }
                }
                return Math.sqrt(result);
            } else {
                throw new RangeError(`unknown norm type: ${type}`);
            }
        }

        /**
         * Computes the cumulative sum of the matrix elements (in place, row by row)
         * @return {Matrix} this
         */
        cumulativeSum() {
            var sum = 0;
            for (var i = 0; i < this.rows; i++) {
                for (var j = 0; j < this.columns; j++) {
                    sum += this.get(i, j);
                    this.set(i, j, sum);
                }
            }
            return this;
        }

        /**
         * Computes the dot (scalar) product between the matrix and another
         * @param {Matrix} vector2 vector
         * @return {number}
         */
        dot(vector2) {
            if (Matrix.isMatrix(vector2)) vector2 = vector2.to1DArray();
            var vector1 = this.to1DArray();
            if (vector1.length !== vector2.length) {
                throw new RangeError('vectors do not have the same size');
            }
            var dot = 0;
            for (var i = 0; i < vector1.length; i++) {
                dot += vector1[i] * vector2[i];
            }
            return dot;
        }

        /**
         * Returns the matrix product between this and other
         * @param {Matrix} other
         * @return {Matrix}
         */
        mmul(other) {
            other = this.constructor.checkMatrix(other);
            if (this.columns !== other.rows) {
                // eslint-disable-next-line no-console
                console.warn('Number of columns of left matrix are not equal to number of rows of right matrix.');
            }

            var m = this.rows;
            var n = this.columns;
            var p = other.columns;

            var result = new this.constructor[Symbol.species](m, p);

            var Bcolj = new Array(n);
            for (var j = 0; j < p; j++) {
                for (var k = 0; k < n; k++) {
                    Bcolj[k] = other.get(k, j);
                }

                for (var i = 0; i < m; i++) {
                    var s = 0;
                    for (k = 0; k < n; k++) {
                        s += this.get(i, k) * Bcolj[k];
                    }

                    result.set(i, j, s);
                }
            }
            return result;
        }

        strassen2x2(other) {
            var result = new this.constructor[Symbol.species](2, 2);
            const a11 = this.get(0, 0);
            const b11 = other.get(0, 0);
            const a12 = this.get(0, 1);
            const b12 = other.get(0, 1);
            const a21 = this.get(1, 0);
            const b21 = other.get(1, 0);
            const a22 = this.get(1, 1);
            const b22 = other.get(1, 1);

            // Compute intermediate values.
            const m1 = (a11 + a22) * (b11 + b22);
            const m2 = (a21 + a22) * b11;
            const m3 = a11 * (b12 - b22);
            const m4 = a22 * (b21 - b11);
            const m5 = (a11 + a12) * b22;
            const m6 = (a21 - a11) * (b11 + b12);
            const m7 = (a12 - a22) * (b21 + b22);

            // Combine intermediate values into the output.
            const c00 = m1 + m4 - m5 + m7;
            const c01 = m3 + m5;
            const c10 = m2 + m4;
            const c11 = m1 - m2 + m3 + m6;

            result.set(0, 0, c00);
            result.set(0, 1, c01);
            result.set(1, 0, c10);
            result.set(1, 1, c11);
            return result;
        }

        strassen3x3(other) {
            var result = new this.constructor[Symbol.species](3, 3);

            const a00 = this.get(0, 0);
            const a01 = this.get(0, 1);
            const a02 = this.get(0, 2);
            const a10 = this.get(1, 0);
            const a11 = this.get(1, 1);
            const a12 = this.get(1, 2);
            const a20 = this.get(2, 0);
            const a21 = this.get(2, 1);
            const a22 = this.get(2, 2);

            const b00 = other.get(0, 0);
            const b01 = other.get(0, 1);
            const b02 = other.get(0, 2);
            const b10 = other.get(1, 0);
            const b11 = other.get(1, 1);
            const b12 = other.get(1, 2);
            const b20 = other.get(2, 0);
            const b21 = other.get(2, 1);
            const b22 = other.get(2, 2);

            const m1 = (a00 + a01 + a02 - a10 - a11 - a21 - a22) * b11;
            const m2 = (a00 - a10) * (-b01 + b11);
            const m3 = a11 * (-b00 + b01 + b10 - b11 - b12 - b20 + b22);
            const m4 = (-a00 + a10 + a11) * (b00 - b01 + b11);
            const m5 = (a10 + a11) * (-b00 + b01);
            const m6 = a00 * b00;
            const m7 = (-a00 + a20 + a21) * (b00 - b02 + b12);
            const m8 = (-a00 + a20) * (b02 - b12);
            const m9 = (a20 + a21) * (-b00 + b02);
            const m10 = (a00 + a01 + a02 - a11 - a12 - a20 - a21) * b12;
            const m11 = a21 * (-b00 + b02 + b10 - b11 - b12 - b20 + b21);
            const m12 = (-a02 + a21 + a22) * (b11 + b20 - b21);
            const m13 = (a02 - a22) * (b11 - b21);
            const m14 = a02 * b20;
            const m15 = (a21 + a22) * (-b20 + b21);
            const m16 = (-a02 + a11 + a12) * (b12 + b20 - b22);
            const m17 = (a02 - a12) * (b12 - b22);
            const m18 = (a11 + a12) * (-b20 + b22);
            const m19 = a01 * b10;
            const m20 = a12 * b21;
            const m21 = a10 * b02;
            const m22 = a20 * b01;
            const m23 = a22 * b22;

            const c00 = m6 + m14 + m19;
            const c01 = m1 + m4 + m5 + m6 + m12 + m14 + m15;
            const c02 = m6 + m7 + m9 + m10 + m14 + m16 + m18;
            const c10 = m2 + m3 + m4 + m6 + m14 + m16 + m17;
            const c11 = m2 + m4 + m5 + m6 + m20;
            const c12 = m14 + m16 + m17 + m18 + m21;
            const c20 = m6 + m7 + m8 + m11 + m12 + m13 + m14;
            const c21 = m12 + m13 + m14 + m15 + m22;
            const c22 = m6 + m7 + m8 + m9 + m23;

            result.set(0, 0, c00);
            result.set(0, 1, c01);
            result.set(0, 2, c02);
            result.set(1, 0, c10);
            result.set(1, 1, c11);
            result.set(1, 2, c12);
            result.set(2, 0, c20);
            result.set(2, 1, c21);
            result.set(2, 2, c22);
            return result;
        }

        /**
         * Returns the matrix product between x and y. More efficient than mmul(other) only when we multiply squared matrix and when the size of the matrix is > 1000.
         * @param {Matrix} y
         * @return {Matrix}
         */
        mmulStrassen(y) {
            var x = this.clone();
            var r1 = x.rows;
            var c1 = x.columns;
            var r2 = y.rows;
            var c2 = y.columns;
            if (c1 !== r2) {
                // eslint-disable-next-line no-console
                console.warn(`Multiplying ${r1} x ${c1} and ${r2} x ${c2} matrix: dimensions do not match.`);
            }

            // Put a matrix into the top left of a matrix of zeros.
            // `rows` and `cols` are the dimensions of the output matrix.
            function embed(mat, rows, cols) {
                var r = mat.rows;
                var c = mat.columns;
                if ((r === rows) && (c === cols)) {
                    return mat;
                } else {
                    var resultat = Matrix.zeros(rows, cols);
                    resultat = resultat.setSubMatrix(mat, 0, 0);
                    return resultat;
                }
            }


            // Make sure both matrices are the same size.
            // This is exclusively for simplicity:
            // this algorithm can be implemented with matrices of different sizes.

            var r = Math.max(r1, r2);
            var c = Math.max(c1, c2);
            x = embed(x, r, c);
            y = embed(y, r, c);

            // Our recursive multiplication function.
            function blockMult(a, b, rows, cols) {
                // For small matrices, resort to naive multiplication.
                if (rows <= 512 || cols <= 512) {
                    return a.mmul(b); // a is equivalent to this
                }

                // Apply dynamic padding.
                if ((rows % 2 === 1) && (cols % 2 === 1)) {
                    a = embed(a, rows + 1, cols + 1);
                    b = embed(b, rows + 1, cols + 1);
                } else if (rows % 2 === 1) {
                    a = embed(a, rows + 1, cols);
                    b = embed(b, rows + 1, cols);
                } else if (cols % 2 === 1) {
                    a = embed(a, rows, cols + 1);
                    b = embed(b, rows, cols + 1);
                }

                var halfRows = parseInt(a.rows / 2);
                var halfCols = parseInt(a.columns / 2);
                // Subdivide input matrices.
                var a11 = a.subMatrix(0, halfRows - 1, 0, halfCols - 1);
                var b11 = b.subMatrix(0, halfRows - 1, 0, halfCols - 1);

                var a12 = a.subMatrix(0, halfRows - 1, halfCols, a.columns - 1);
                var b12 = b.subMatrix(0, halfRows - 1, halfCols, b.columns - 1);

                var a21 = a.subMatrix(halfRows, a.rows - 1, 0, halfCols - 1);
                var b21 = b.subMatrix(halfRows, b.rows - 1, 0, halfCols - 1);

                var a22 = a.subMatrix(halfRows, a.rows - 1, halfCols, a.columns - 1);
                var b22 = b.subMatrix(halfRows, b.rows - 1, halfCols, b.columns - 1);

                // Compute intermediate values.
                var m1 = blockMult(Matrix.add(a11, a22), Matrix.add(b11, b22), halfRows, halfCols);
                var m2 = blockMult(Matrix.add(a21, a22), b11, halfRows, halfCols);
                var m3 = blockMult(a11, Matrix.sub(b12, b22), halfRows, halfCols);
                var m4 = blockMult(a22, Matrix.sub(b21, b11), halfRows, halfCols);
                var m5 = blockMult(Matrix.add(a11, a12), b22, halfRows, halfCols);
                var m6 = blockMult(Matrix.sub(a21, a11), Matrix.add(b11, b12), halfRows, halfCols);
                var m7 = blockMult(Matrix.sub(a12, a22), Matrix.add(b21, b22), halfRows, halfCols);

                // Combine intermediate values into the output.
                var c11 = Matrix.add(m1, m4);
                c11.sub(m5);
                c11.add(m7);
                var c12 = Matrix.add(m3, m5);
                var c21 = Matrix.add(m2, m4);
                var c22 = Matrix.sub(m1, m2);
                c22.add(m3);
                c22.add(m6);

                //Crop output to the desired size (undo dynamic padding).
                var resultat = Matrix.zeros(2 * c11.rows, 2 * c11.columns);
                resultat = resultat.setSubMatrix(c11, 0, 0);
                resultat = resultat.setSubMatrix(c12, c11.rows, 0);
                resultat = resultat.setSubMatrix(c21, 0, c11.columns);
                resultat = resultat.setSubMatrix(c22, c11.rows, c11.columns);
                return resultat.subMatrix(0, rows - 1, 0, cols - 1);
            }
            return blockMult(x, y, r, c);
        }

        /**
         * Returns a row-by-row scaled matrix
         * @param {number} [min=0] - Minimum scaled value
         * @param {number} [max=1] - Maximum scaled value
         * @return {Matrix} - The scaled matrix
         */
        scaleRows(min, max) {
            min = min === undefined ? 0 : min;
            max = max === undefined ? 1 : max;
            if (min >= max) {
                throw new RangeError('min should be strictly smaller than max');
            }
            var newMatrix = this.constructor.empty(this.rows, this.columns);
            for (var i = 0; i < this.rows; i++) {
                var scaled = rescale(this.getRow(i), {min, max});
                newMatrix.setRow(i, scaled);
            }
            return newMatrix;
        }

        /**
         * Returns a new column-by-column scaled matrix
         * @param {number} [min=0] - Minimum scaled value
         * @param {number} [max=1] - Maximum scaled value
         * @return {Matrix} - The new scaled matrix
         * @example
         * var matrix = new Matrix([[1,2],[-1,0]]);
         * var scaledMatrix = matrix.scaleColumns(); // [[1,1],[0,0]]
         */
        scaleColumns(min, max) {
            min = min === undefined ? 0 : min;
            max = max === undefined ? 1 : max;
            if (min >= max) {
                throw new RangeError('min should be strictly smaller than max');
            }
            var newMatrix = this.constructor.empty(this.rows, this.columns);
            for (var i = 0; i < this.columns; i++) {
                var scaled = rescale(this.getColumn(i), {
                    min: min,
                    max: max
                });
                newMatrix.setColumn(i, scaled);
            }
            return newMatrix;
        }


        /**
         * Returns the Kronecker product (also known as tensor product) between this and other
         * See https://en.wikipedia.org/wiki/Kronecker_product
         * @param {Matrix} other
         * @return {Matrix}
         */
        kroneckerProduct(other) {
            other = this.constructor.checkMatrix(other);

            var m = this.rows;
            var n = this.columns;
            var p = other.rows;
            var q = other.columns;

            var result = new this.constructor[Symbol.species](m * p, n * q);
            for (var i = 0; i < m; i++) {
                for (var j = 0; j < n; j++) {
                    for (var k = 0; k < p; k++) {
                        for (var l = 0; l < q; l++) {
                            result[p * i + k][q * j + l] = this.get(i, j) * other.get(k, l);
                        }
                    }
                }
            }
            return result;
        }

        /**
         * Transposes the matrix and returns a new one containing the result
         * @return {Matrix}
         */
        transpose() {
            var result = new this.constructor[Symbol.species](this.columns, this.rows);
            for (var i = 0; i < this.rows; i++) {
                for (var j = 0; j < this.columns; j++) {
                    result.set(j, i, this.get(i, j));
                }
            }
            return result;
        }

        /**
         * Sorts the rows (in place)
         * @param {function} compareFunction - usual Array.prototype.sort comparison function
         * @return {Matrix} this
         */
        sortRows(compareFunction) {
            if (compareFunction === undefined) compareFunction = compareNumbers;
            for (var i = 0; i < this.rows; i++) {
                this.setRow(i, this.getRow(i).sort(compareFunction));
            }
            return this;
        }

        /**
         * Sorts the columns (in place)
         * @param {function} compareFunction - usual Array.prototype.sort comparison function
         * @return {Matrix} this
         */
        sortColumns(compareFunction) {
            if (compareFunction === undefined) compareFunction = compareNumbers;
            for (var i = 0; i < this.columns; i++) {
                this.setColumn(i, this.getColumn(i).sort(compareFunction));
            }
            return this;
        }

        /**
         * Returns a subset of the matrix
         * @param {number} startRow - First row index
         * @param {number} endRow - Last row index
         * @param {number} startColumn - First column index
         * @param {number} endColumn - Last column index
         * @return {Matrix}
         */
        subMatrix(startRow, endRow, startColumn, endColumn) {
            checkRange(this, startRow, endRow, startColumn, endColumn);
            var newMatrix = new this.constructor[Symbol.species](endRow - startRow + 1, endColumn - startColumn + 1);
            for (var i = startRow; i <= endRow; i++) {
                for (var j = startColumn; j <= endColumn; j++) {
                    newMatrix[i - startRow][j - startColumn] = this.get(i, j);
                }
            }
            return newMatrix;
        }

        /**
         * Returns a subset of the matrix based on an array of row indices
         * @param {Array} indices - Array containing the row indices
         * @param {number} [startColumn = 0] - First column index
         * @param {number} [endColumn = this.columns-1] - Last column index
         * @return {Matrix}
         */
        subMatrixRow(indices, startColumn, endColumn) {
            if (startColumn === undefined) startColumn = 0;
            if (endColumn === undefined) endColumn = this.columns - 1;
            if ((startColumn > endColumn) || (startColumn < 0) || (startColumn >= this.columns) || (endColumn < 0) || (endColumn >= this.columns)) {
                throw new RangeError('Argument out of range');
            }

            var newMatrix = new this.constructor[Symbol.species](indices.length, endColumn - startColumn + 1);
            for (var i = 0; i < indices.length; i++) {
                for (var j = startColumn; j <= endColumn; j++) {
                    if (indices[i] < 0 || indices[i] >= this.rows) {
                        throw new RangeError('Row index out of range: ' + indices[i]);
                    }
                    newMatrix.set(i, j - startColumn, this.get(indices[i], j));
                }
            }
            return newMatrix;
        }

        /**
         * Returns a subset of the matrix based on an array of column indices
         * @param {Array} indices - Array containing the column indices
         * @param {number} [startRow = 0] - First row index
         * @param {number} [endRow = this.rows-1] - Last row index
         * @return {Matrix}
         */
        subMatrixColumn(indices, startRow, endRow) {
            if (startRow === undefined) startRow = 0;
            if (endRow === undefined) endRow = this.rows - 1;
            if ((startRow > endRow) || (startRow < 0) || (startRow >= this.rows) || (endRow < 0) || (endRow >= this.rows)) {
                throw new RangeError('Argument out of range');
            }

            var newMatrix = new this.constructor[Symbol.species](endRow - startRow + 1, indices.length);
            for (var i = 0; i < indices.length; i++) {
                for (var j = startRow; j <= endRow; j++) {
                    if (indices[i] < 0 || indices[i] >= this.columns) {
                        throw new RangeError('Column index out of range: ' + indices[i]);
                    }
                    newMatrix.set(j - startRow, i, this.get(j, indices[i]));
                }
            }
            return newMatrix;
        }

        /**
         * Set a part of the matrix to the given sub-matrix
         * @param {Matrix|Array< Array >} matrix - The source matrix from which to extract values.
         * @param {number} startRow - The index of the first row to set
         * @param {number} startColumn - The index of the first column to set
         * @return {Matrix}
         */
        setSubMatrix(matrix, startRow, startColumn) {
            matrix = this.constructor.checkMatrix(matrix);
            var endRow = startRow + matrix.rows - 1;
            var endColumn = startColumn + matrix.columns - 1;
            checkRange(this, startRow, endRow, startColumn, endColumn);
            for (var i = 0; i < matrix.rows; i++) {
                for (var j = 0; j < matrix.columns; j++) {
                    this[startRow + i][startColumn + j] = matrix.get(i, j);
                }
            }
            return this;
        }

        /**
         * Return a new matrix based on a selection of rows and columns
         * @param {Array<number>} rowIndices - The row indices to select. Order matters and an index can be more than once.
         * @param {Array<number>} columnIndices - The column indices to select. Order matters and an index can be use more than once.
         * @return {Matrix} The new matrix
         */
        selection(rowIndices, columnIndices) {
            var indices = checkIndices(this, rowIndices, columnIndices);
            var newMatrix = new this.constructor[Symbol.species](rowIndices.length, columnIndices.length);
            for (var i = 0; i < indices.row.length; i++) {
                var rowIndex = indices.row[i];
                for (var j = 0; j < indices.column.length; j++) {
                    var columnIndex = indices.column[j];
                    newMatrix[i][j] = this.get(rowIndex, columnIndex);
                }
            }
            return newMatrix;
        }

        /**
         * Returns the trace of the matrix (sum of the diagonal elements)
         * @return {number}
         */
        trace() {
            var min = Math.min(this.rows, this.columns);
            var trace = 0;
            for (var i = 0; i < min; i++) {
                trace += this.get(i, i);
            }
            return trace;
        }

        /*
         Matrix views
         */

        /**
         * Returns a view of the transposition of the matrix
         * @return {MatrixTransposeView}
         */
        transposeView() {
            return new MatrixTransposeView(this);
        }

        /**
         * Returns a view of the row vector with the given index
         * @param {number} row - row index of the vector
         * @return {MatrixRowView}
         */
        rowView(row) {
            checkRowIndex(this, row);
            return new MatrixRowView(this, row);
        }

        /**
         * Returns a view of the column vector with the given index
         * @param {number} column - column index of the vector
         * @return {MatrixColumnView}
         */
        columnView(column) {
            checkColumnIndex(this, column);
            return new MatrixColumnView(this, column);
        }

        /**
         * Returns a view of the matrix flipped in the row axis
         * @return {MatrixFlipRowView}
         */
        flipRowView() {
            return new MatrixFlipRowView(this);
        }

        /**
         * Returns a view of the matrix flipped in the column axis
         * @return {MatrixFlipColumnView}
         */
        flipColumnView() {
            return new MatrixFlipColumnView(this);
        }

        /**
         * Returns a view of a submatrix giving the index boundaries
         * @param {number} startRow - first row index of the submatrix
         * @param {number} endRow - last row index of the submatrix
         * @param {number} startColumn - first column index of the submatrix
         * @param {number} endColumn - last column index of the submatrix
         * @return {MatrixSubView}
         */
        subMatrixView(startRow, endRow, startColumn, endColumn) {
            return new MatrixSubView(this, startRow, endRow, startColumn, endColumn);
        }

        /**
         * Returns a view of the cross of the row indices and the column indices
         * @example
         * // resulting vector is [[2], [2]]
         * var matrix = new Matrix([[1,2,3], [4,5,6]]).selectionView([0, 0], [1])
         * @param {Array<number>} rowIndices
         * @param {Array<number>} columnIndices
         * @return {MatrixSelectionView}
         */
        selectionView(rowIndices, columnIndices) {
            return new MatrixSelectionView(this, rowIndices, columnIndices);
        }

        /**
         * Returns a view of the row indices
         * @example
         * // resulting vector is [[1,2,3], [1,2,3]]
         * var matrix = new Matrix([[1,2,3], [4,5,6]]).rowSelectionView([0, 0])
         * @param {Array<number>} rowIndices
         * @return {MatrixRowSelectionView}
         */
        rowSelectionView(rowIndices) {
            return new MatrixRowSelectionView(this, rowIndices);
        }

        /**
         * Returns a view of the column indices
         * @example
         * // resulting vector is [[2, 2], [5, 5]]
         * var matrix = new Matrix([[1,2,3], [4,5,6]]).columnSelectionView([1, 1])
         * @param {Array<number>} columnIndices
         * @return {MatrixColumnSelectionView}
         */
        columnSelectionView(columnIndices) {
            return new MatrixColumnSelectionView(this, columnIndices);
        }


        /**
        * Calculates and returns the determinant of a matrix as a Number
        * @example
        *   new Matrix([[1,2,3], [4,5,6]]).det()
        * @return {number}
        */
        det() {
            if (this.isSquare()) {
                var a, b, c, d;
                if (this.columns === 2) {
                    // 2 x 2 matrix
                    a = this.get(0, 0);
                    b = this.get(0, 1);
                    c = this.get(1, 0);
                    d = this.get(1, 1);

                    return a * d - (b * c);
                } else if (this.columns === 3) {
                    // 3 x 3 matrix
                    var subMatrix0, subMatrix1, subMatrix2;
                    subMatrix0 = this.selectionView([1, 2], [1, 2]);
                    subMatrix1 = this.selectionView([1, 2], [0, 2]);
                    subMatrix2 = this.selectionView([1, 2], [0, 1]);
                    a = this.get(0, 0);
                    b = this.get(0, 1);
                    c = this.get(0, 2);

                    return a * subMatrix0.det() - b * subMatrix1.det() + c * subMatrix2.det();
                } else {
                    // general purpose determinant using the LU decomposition
                    return new LuDecomposition$$1(this).determinant;
                }

            } else {
                throw Error('Determinant can only be calculated for a square matrix.');
            }
        }

        /**
         * Returns inverse of a matrix if it exists or the pseudoinverse
         * @param {number} threshold - threshold for taking inverse of singular values (default = 1e-15)
         * @return {Matrix} the (pseudo)inverted matrix.
         */
        pseudoInverse(threshold) {
            if (threshold === undefined) threshold = Number.EPSILON;
            var svdSolution = new SingularValueDecomposition$$1(this, {autoTranspose: true});

            var U = svdSolution.leftSingularVectors;
            var V = svdSolution.rightSingularVectors;
            var s = svdSolution.diagonal;

            for (var i = 0; i < s.length; i++) {
                if (Math.abs(s[i]) > threshold) {
                    s[i] = 1.0 / s[i];
                } else {
                    s[i] = 0.0;
                }
            }

            // convert list to diagonal
            s = this.constructor[Symbol.species].diag(s);
            return V.mmul(s.mmul(U.transposeView()));
        }

        /**
         * Creates an exact and independent copy of the matrix
         * @return {Matrix}
         */
        clone() {
            var newMatrix = new this.constructor[Symbol.species](this.rows, this.columns);
            for (var row = 0; row < this.rows; row++) {
                for (var column = 0; column < this.columns; column++) {
                    newMatrix.set(row, column, this.get(row, column));
                }
            }
            return newMatrix;
        }
    }

    Matrix.prototype.klass = 'Matrix';

    function compareNumbers(a, b) {
        return a - b;
    }

    /*
     Synonyms
     */

    Matrix.random = Matrix.rand;
    Matrix.diagonal = Matrix.diag;
    Matrix.prototype.diagonal = Matrix.prototype.diag;
    Matrix.identity = Matrix.eye;
    Matrix.prototype.negate = Matrix.prototype.neg;
    Matrix.prototype.tensorProduct = Matrix.prototype.kroneckerProduct;
    Matrix.prototype.determinant = Matrix.prototype.det;

    /*
     Add dynamically instance and static methods for mathematical operations
     */

    var inplaceOperator = `
(function %name%(value) {
    if (typeof value === 'number') return this.%name%S(value);
    return this.%name%M(value);
})
`;

    var inplaceOperatorScalar = `
(function %name%S(value) {
    for (var i = 0; i < this.rows; i++) {
        for (var j = 0; j < this.columns; j++) {
            this.set(i, j, this.get(i, j) %op% value);
        }
    }
    return this;
})
`;

    var inplaceOperatorMatrix = `
(function %name%M(matrix) {
    matrix = this.constructor.checkMatrix(matrix);
    if (this.rows !== matrix.rows ||
        this.columns !== matrix.columns) {
        throw new RangeError('Matrices dimensions must be equal');
    }
    for (var i = 0; i < this.rows; i++) {
        for (var j = 0; j < this.columns; j++) {
            this.set(i, j, this.get(i, j) %op% matrix.get(i, j));
        }
    }
    return this;
})
`;

    var staticOperator = `
(function %name%(matrix, value) {
    var newMatrix = new this[Symbol.species](matrix);
    return newMatrix.%name%(value);
})
`;

    var inplaceMethod = `
(function %name%() {
    for (var i = 0; i < this.rows; i++) {
        for (var j = 0; j < this.columns; j++) {
            this.set(i, j, %method%(this.get(i, j)));
        }
    }
    return this;
})
`;

    var staticMethod = `
(function %name%(matrix) {
    var newMatrix = new this[Symbol.species](matrix);
    return newMatrix.%name%();
})
`;

    var inplaceMethodWithArgs = `
(function %name%(%args%) {
    for (var i = 0; i < this.rows; i++) {
        for (var j = 0; j < this.columns; j++) {
            this.set(i, j, %method%(this.get(i, j), %args%));
        }
    }
    return this;
})
`;

    var staticMethodWithArgs = `
(function %name%(matrix, %args%) {
    var newMatrix = new this[Symbol.species](matrix);
    return newMatrix.%name%(%args%);
})
`;


    var inplaceMethodWithOneArgScalar = `
(function %name%S(value) {
    for (var i = 0; i < this.rows; i++) {
        for (var j = 0; j < this.columns; j++) {
            this.set(i, j, %method%(this.get(i, j), value));
        }
    }
    return this;
})
`;
    var inplaceMethodWithOneArgMatrix = `
(function %name%M(matrix) {
    matrix = this.constructor.checkMatrix(matrix);
    if (this.rows !== matrix.rows ||
        this.columns !== matrix.columns) {
        throw new RangeError('Matrices dimensions must be equal');
    }
    for (var i = 0; i < this.rows; i++) {
        for (var j = 0; j < this.columns; j++) {
            this.set(i, j, %method%(this.get(i, j), matrix.get(i, j)));
        }
    }
    return this;
})
`;

    var inplaceMethodWithOneArg = `
(function %name%(value) {
    if (typeof value === 'number') return this.%name%S(value);
    return this.%name%M(value);
})
`;

    var staticMethodWithOneArg = staticMethodWithArgs;

    var operators = [
        // Arithmetic operators
        ['+', 'add'],
        ['-', 'sub', 'subtract'],
        ['*', 'mul', 'multiply'],
        ['/', 'div', 'divide'],
        ['%', 'mod', 'modulus'],
        // Bitwise operators
        ['&', 'and'],
        ['|', 'or'],
        ['^', 'xor'],
        ['<<', 'leftShift'],
        ['>>', 'signPropagatingRightShift'],
        ['>>>', 'rightShift', 'zeroFillRightShift']
    ];

    var i;
    var eval2 = eval;
    for (var operator of operators) {
        var inplaceOp = eval2(fillTemplateFunction(inplaceOperator, {name: operator[1], op: operator[0]}));
        var inplaceOpS = eval2(fillTemplateFunction(inplaceOperatorScalar, {name: operator[1] + 'S', op: operator[0]}));
        var inplaceOpM = eval2(fillTemplateFunction(inplaceOperatorMatrix, {name: operator[1] + 'M', op: operator[0]}));
        var staticOp = eval2(fillTemplateFunction(staticOperator, {name: operator[1]}));
        for (i = 1; i < operator.length; i++) {
            Matrix.prototype[operator[i]] = inplaceOp;
            Matrix.prototype[operator[i] + 'S'] = inplaceOpS;
            Matrix.prototype[operator[i] + 'M'] = inplaceOpM;
            Matrix[operator[i]] = staticOp;
        }
    }

    var methods = [
        ['~', 'not']
    ];

    [
        'abs', 'acos', 'acosh', 'asin', 'asinh', 'atan', 'atanh', 'cbrt', 'ceil',
        'clz32', 'cos', 'cosh', 'exp', 'expm1', 'floor', 'fround', 'log', 'log1p',
        'log10', 'log2', 'round', 'sign', 'sin', 'sinh', 'sqrt', 'tan', 'tanh', 'trunc'
    ].forEach(function (mathMethod) {
        methods.push(['Math.' + mathMethod, mathMethod]);
    });

    for (var method of methods) {
        var inplaceMeth = eval2(fillTemplateFunction(inplaceMethod, {name: method[1], method: method[0]}));
        var staticMeth = eval2(fillTemplateFunction(staticMethod, {name: method[1]}));
        for (i = 1; i < method.length; i++) {
            Matrix.prototype[method[i]] = inplaceMeth;
            Matrix[method[i]] = staticMeth;
        }
    }

    var methodsWithArgs = [
        ['Math.pow', 1, 'pow']
    ];

    for (var methodWithArg of methodsWithArgs) {
        var args = 'arg0';
        for (i = 1; i < methodWithArg[1]; i++) {
            args += `, arg${i}`;
        }
        if (methodWithArg[1] !== 1) {
            var inplaceMethWithArgs = eval2(fillTemplateFunction(inplaceMethodWithArgs, {
                name: methodWithArg[2],
                method: methodWithArg[0],
                args: args
            }));
            var staticMethWithArgs = eval2(fillTemplateFunction(staticMethodWithArgs, {name: methodWithArg[2], args: args}));
            for (i = 2; i < methodWithArg.length; i++) {
                Matrix.prototype[methodWithArg[i]] = inplaceMethWithArgs;
                Matrix[methodWithArg[i]] = staticMethWithArgs;
            }
        } else {
            var tmplVar = {
                name: methodWithArg[2],
                args: args,
                method: methodWithArg[0]
            };
            var inplaceMethod2 = eval2(fillTemplateFunction(inplaceMethodWithOneArg, tmplVar));
            var inplaceMethodS = eval2(fillTemplateFunction(inplaceMethodWithOneArgScalar, tmplVar));
            var inplaceMethodM = eval2(fillTemplateFunction(inplaceMethodWithOneArgMatrix, tmplVar));
            var staticMethod2 = eval2(fillTemplateFunction(staticMethodWithOneArg, tmplVar));
            for (i = 2; i < methodWithArg.length; i++) {
                Matrix.prototype[methodWithArg[i]] = inplaceMethod2;
                Matrix.prototype[methodWithArg[i] + 'M'] = inplaceMethodM;
                Matrix.prototype[methodWithArg[i] + 'S'] = inplaceMethodS;
                Matrix[methodWithArg[i]] = staticMethod2;
            }
        }
    }

    function fillTemplateFunction(template, values) {
        for (var value in values) {
            template = template.replace(new RegExp('%' + value + '%', 'g'), values[value]);
        }
        return template;
    }

    return Matrix;
}

class Matrix extends AbstractMatrix(Array) {
    constructor(nRows, nColumns) {
        var i;
        if (arguments.length === 1 && typeof nRows === 'number') {
            return new Array(nRows);
        }
        if (Matrix.isMatrix(nRows)) {
            return nRows.clone();
        } else if (Number.isInteger(nRows) && nRows > 0) { // Create an empty matrix
            super(nRows);
            if (Number.isInteger(nColumns) && nColumns > 0) {
                for (i = 0; i < nRows; i++) {
                    this[i] = new Array(nColumns);
                }
            } else {
                throw new TypeError('nColumns must be a positive integer');
            }
        } else if (Array.isArray(nRows)) { // Copy the values from the 2D array
            const matrix = nRows;
            nRows = matrix.length;
            nColumns = matrix[0].length;
            if (typeof nColumns !== 'number' || nColumns === 0) {
                throw new TypeError('Data must be a 2D array with at least one element');
            }
            super(nRows);
            for (i = 0; i < nRows; i++) {
                if (matrix[i].length !== nColumns) {
                    throw new RangeError('Inconsistent array dimensions');
                }
                this[i] = [].concat(matrix[i]);
            }
        } else {
            throw new TypeError('First argument must be a positive number or an array');
        }
        this.rows = nRows;
        this.columns = nColumns;
        return this;
    }

    set(rowIndex, columnIndex, value) {
        this[rowIndex][columnIndex] = value;
        return this;
    }

    get(rowIndex, columnIndex) {
        return this[rowIndex][columnIndex];
    }

    /**
     * Removes a row from the given index
     * @param {number} index - Row index
     * @return {Matrix} this
     */
    removeRow(index) {
        checkRowIndex(this, index);
        if (this.rows === 1) {
            throw new RangeError('A matrix cannot have less than one row');
        }
        this.splice(index, 1);
        this.rows -= 1;
        return this;
    }

    /**
     * Adds a row at the given index
     * @param {number} [index = this.rows] - Row index
     * @param {Array|Matrix} array - Array or vector
     * @return {Matrix} this
     */
    addRow(index, array) {
        if (array === undefined) {
            array = index;
            index = this.rows;
        }
        checkRowIndex(this, index, true);
        array = checkRowVector(this, array, true);
        this.splice(index, 0, array);
        this.rows += 1;
        return this;
    }

    /**
     * Removes a column from the given index
     * @param {number} index - Column index
     * @return {Matrix} this
     */
    removeColumn(index) {
        checkColumnIndex(this, index);
        if (this.columns === 1) {
            throw new RangeError('A matrix cannot have less than one column');
        }
        for (var i = 0; i < this.rows; i++) {
            this[i].splice(index, 1);
        }
        this.columns -= 1;
        return this;
    }

    /**
     * Adds a column at the given index
     * @param {number} [index = this.columns] - Column index
     * @param {Array|Matrix} array - Array or vector
     * @return {Matrix} this
     */
    addColumn(index, array) {
        if (typeof array === 'undefined') {
            array = index;
            index = this.columns;
        }
        checkColumnIndex(this, index, true);
        array = checkColumnVector(this, array);
        for (var i = 0; i < this.rows; i++) {
            this[i].splice(index, 0, array[i]);
        }
        this.columns += 1;
        return this;
    }
}

class WrapperMatrix1D extends AbstractMatrix() {
    /**
     * @class WrapperMatrix1D
     * @param {Array<number>} data
     * @param {object} [options]
     * @param {object} [options.rows = 1]
     */
    constructor(data, options = {}) {
        const {
            rows = 1
        } = options;

        if (data.length % rows !== 0) {
            throw new Error('the data length is not divisible by the number of rows');
        }
        super();
        this.rows = rows;
        this.columns = data.length / rows;
        this.data = data;
    }

    set(rowIndex, columnIndex, value) {
        var index = this._calculateIndex(rowIndex, columnIndex);
        this.data[index] = value;
        return this;
    }

    get(rowIndex, columnIndex) {
        var index = this._calculateIndex(rowIndex, columnIndex);
        return this.data[index];
    }

    _calculateIndex(row, column) {
        return (row * this.columns) + column;
    }

    static get [Symbol.species]() {
        return Matrix;
    }
}

class WrapperMatrix2D extends AbstractMatrix() {
    /**
     * @class WrapperMatrix2D
     * @param {Array<Array<number>>} data
     */
    constructor(data) {
        super();
        this.data = data;
        this.rows = data.length;
        this.columns = data[0].length;
    }

    set(rowIndex, columnIndex, value) {
        this.data[rowIndex][columnIndex] = value;
        return this;
    }

    get(rowIndex, columnIndex) {
        return this.data[rowIndex][columnIndex];
    }

    static get [Symbol.species]() {
        return Matrix;
    }
}

/**
 * @param {Array<Array<number>>|Array<number>} array
 * @param {object} [options]
 * @param {object} [options.rows = 1]
 * @return {WrapperMatrix1D|WrapperMatrix2D}
 */
function wrap(array, options) {
    if (Array.isArray(array)) {
        if (array[0] && Array.isArray(array[0])) {
            return new WrapperMatrix2D(array);
        } else {
            return new WrapperMatrix1D(array, options);
        }
    } else {
        throw new Error('the argument is not an array');
    }
}

/**
 * @class QrDecomposition
 * @link https://github.com/lutzroeder/Mapack/blob/master/Source/QrDecomposition.cs
 * @param {Matrix} value
 */
class QrDecomposition$$1 {
    constructor(value) {
        value = WrapperMatrix2D.checkMatrix(value);

        var qr = value.clone();
        var m = value.rows;
        var n = value.columns;
        var rdiag = new Array(n);
        var i, j, k, s;

        for (k = 0; k < n; k++) {
            var nrm = 0;
            for (i = k; i < m; i++) {
                nrm = hypotenuse(nrm, qr.get(i, k));
            }
            if (nrm !== 0) {
                if (qr.get(k, k) < 0) {
                    nrm = -nrm;
                }
                for (i = k; i < m; i++) {
                    qr.set(i, k, qr.get(i, k) / nrm);
                }
                qr.set(k, k, qr.get(k, k) + 1);
                for (j = k + 1; j < n; j++) {
                    s = 0;
                    for (i = k; i < m; i++) {
                        s += qr.get(i, k) * qr.get(i, j);
                    }
                    s = -s / qr.get(k, k);
                    for (i = k; i < m; i++) {
                        qr.set(i, j, qr.get(i, j) + s * qr.get(i, k));
                    }
                }
            }
            rdiag[k] = -nrm;
        }

        this.QR = qr;
        this.Rdiag = rdiag;
    }

    /**
     * Solve a problem of least square (Ax=b) by using the QR decomposition. Useful when A is rectangular, but not working when A is singular.
     * Example : We search to approximate x, with A matrix shape m*n, x vector size n, b vector size m (m > n). We will use :
     * var qr = QrDecomposition(A);
     * var x = qr.solve(b);
     * @param {Matrix} value - Matrix 1D which is the vector b (in the equation Ax = b)
     * @return {Matrix} - The vector x
     */
    solve(value) {
        value = Matrix.checkMatrix(value);

        var qr = this.QR;
        var m = qr.rows;

        if (value.rows !== m) {
            throw new Error('Matrix row dimensions must agree');
        }
        if (!this.isFullRank()) {
            throw new Error('Matrix is rank deficient');
        }

        var count = value.columns;
        var X = value.clone();
        var n = qr.columns;
        var i, j, k, s;

        for (k = 0; k < n; k++) {
            for (j = 0; j < count; j++) {
                s = 0;
                for (i = k; i < m; i++) {
                    s += qr[i][k] * X[i][j];
                }
                s = -s / qr[k][k];
                for (i = k; i < m; i++) {
                    X[i][j] += s * qr[i][k];
                }
            }
        }
        for (k = n - 1; k >= 0; k--) {
            for (j = 0; j < count; j++) {
                X[k][j] /= this.Rdiag[k];
            }
            for (i = 0; i < k; i++) {
                for (j = 0; j < count; j++) {
                    X[i][j] -= X[k][j] * qr[i][k];
                }
            }
        }

        return X.subMatrix(0, n - 1, 0, count - 1);
    }

    /**
     *
     * @return {boolean}
     */
    isFullRank() {
        var columns = this.QR.columns;
        for (var i = 0; i < columns; i++) {
            if (this.Rdiag[i] === 0) {
                return false;
            }
        }
        return true;
    }

    /**
     *
     * @return {Matrix}
     */
    get upperTriangularMatrix() {
        var qr = this.QR;
        var n = qr.columns;
        var X = new Matrix(n, n);
        var i, j;
        for (i = 0; i < n; i++) {
            for (j = 0; j < n; j++) {
                if (i < j) {
                    X[i][j] = qr[i][j];
                } else if (i === j) {
                    X[i][j] = this.Rdiag[i];
                } else {
                    X[i][j] = 0;
                }
            }
        }
        return X;
    }

    /**
     *
     * @return {Matrix}
     */
    get orthogonalMatrix() {
        var qr = this.QR;
        var rows = qr.rows;
        var columns = qr.columns;
        var X = new Matrix(rows, columns);
        var i, j, k, s;

        for (k = columns - 1; k >= 0; k--) {
            for (i = 0; i < rows; i++) {
                X[i][k] = 0;
            }
            X[k][k] = 1;
            for (j = k; j < columns; j++) {
                if (qr[k][k] !== 0) {
                    s = 0;
                    for (i = k; i < rows; i++) {
                        s += qr[i][k] * X[i][j];
                    }

                    s = -s / qr[k][k];

                    for (i = k; i < rows; i++) {
                        X[i][j] += s * qr[i][k];
                    }
                }
            }
        }
        return X;
    }
}

/**
 * Computes the inverse of a Matrix
 * @param {Matrix} matrix
 * @param {boolean} [useSVD=false]
 * @return {Matrix}
 */
function inverse$$1(matrix, useSVD = false) {
    matrix = WrapperMatrix2D.checkMatrix(matrix);
    if (useSVD) {
        return new SingularValueDecomposition$$1(matrix).inverse();
    } else {
        return solve$$1(matrix, Matrix.eye(matrix.rows));
    }
}

/**
 *
 * @param {Matrix} leftHandSide
 * @param {Matrix} rightHandSide
 * @param {boolean} [useSVD = false]
 * @return {Matrix}
 */
function solve$$1(leftHandSide, rightHandSide, useSVD = false) {
    leftHandSide = WrapperMatrix2D.checkMatrix(leftHandSide);
    rightHandSide = WrapperMatrix2D.checkMatrix(rightHandSide);
    if (useSVD) {
        return new SingularValueDecomposition$$1(leftHandSide).solve(rightHandSide);
    } else {
        return leftHandSide.isSquare() ? new LuDecomposition$$1(leftHandSide).solve(rightHandSide) : new QrDecomposition$$1(leftHandSide).solve(rightHandSide);
    }
}

/**
 * @class EigenvalueDecomposition
 * @link https://github.com/lutzroeder/Mapack/blob/master/Source/EigenvalueDecomposition.cs
 * @param {Matrix} matrix
 * @param {object} [options]
 * @param {boolean} [options.assumeSymmetric=false]
 */
class EigenvalueDecomposition$$1 {
    constructor(matrix, options = {}) {
        const {
            assumeSymmetric = false
        } = options;

        matrix = WrapperMatrix2D.checkMatrix(matrix);
        if (!matrix.isSquare()) {
            throw new Error('Matrix is not a square matrix');
        }

        var n = matrix.columns;
        var V = getFilled2DArray(n, n, 0);
        var d = new Array(n);
        var e = new Array(n);
        var value = matrix;
        var i, j;

        var isSymmetric = false;
        if (assumeSymmetric) {
            isSymmetric = true;
        } else {
            isSymmetric = matrix.isSymmetric();
        }

        if (isSymmetric) {
            for (i = 0; i < n; i++) {
                for (j = 0; j < n; j++) {
                    V[i][j] = value.get(i, j);
                }
            }
            tred2(n, e, d, V);
            tql2(n, e, d, V);
        } else {
            var H = getFilled2DArray(n, n, 0);
            var ort = new Array(n);
            for (j = 0; j < n; j++) {
                for (i = 0; i < n; i++) {
                    H[i][j] = value.get(i, j);
                }
            }
            orthes(n, H, ort, V);
            hqr2(n, e, d, V, H);
        }

        this.n = n;
        this.e = e;
        this.d = d;
        this.V = V;
    }

    /**
     *
     * @return {Array<number>}
     */
    get realEigenvalues() {
        return this.d;
    }

    /**
     *
     * @return {Array<number>}
     */
    get imaginaryEigenvalues() {
        return this.e;
    }

    /**
     *
     * @return {Matrix}
     */
    get eigenvectorMatrix() {
        if (!Matrix.isMatrix(this.V)) {
            this.V = new Matrix(this.V);
        }
        return this.V;
    }

    /**
     *
     * @return {Matrix}
     */
    get diagonalMatrix() {
        var n = this.n;
        var e = this.e;
        var d = this.d;
        var X = new Matrix(n, n);
        var i, j;
        for (i = 0; i < n; i++) {
            for (j = 0; j < n; j++) {
                X[i][j] = 0;
            }
            X[i][i] = d[i];
            if (e[i] > 0) {
                X[i][i + 1] = e[i];
            } else if (e[i] < 0) {
                X[i][i - 1] = e[i];
            }
        }
        return X;
    }
}

function tred2(n, e, d, V) {
    var f, g, h, i, j, k,
        hh, scale;

    for (j = 0; j < n; j++) {
        d[j] = V[n - 1][j];
    }

    for (i = n - 1; i > 0; i--) {
        scale = 0;
        h = 0;
        for (k = 0; k < i; k++) {
            scale = scale + Math.abs(d[k]);
        }

        if (scale === 0) {
            e[i] = d[i - 1];
            for (j = 0; j < i; j++) {
                d[j] = V[i - 1][j];
                V[i][j] = 0;
                V[j][i] = 0;
            }
        } else {
            for (k = 0; k < i; k++) {
                d[k] /= scale;
                h += d[k] * d[k];
            }

            f = d[i - 1];
            g = Math.sqrt(h);
            if (f > 0) {
                g = -g;
            }

            e[i] = scale * g;
            h = h - f * g;
            d[i - 1] = f - g;
            for (j = 0; j < i; j++) {
                e[j] = 0;
            }

            for (j = 0; j < i; j++) {
                f = d[j];
                V[j][i] = f;
                g = e[j] + V[j][j] * f;
                for (k = j + 1; k <= i - 1; k++) {
                    g += V[k][j] * d[k];
                    e[k] += V[k][j] * f;
                }
                e[j] = g;
            }

            f = 0;
            for (j = 0; j < i; j++) {
                e[j] /= h;
                f += e[j] * d[j];
            }

            hh = f / (h + h);
            for (j = 0; j < i; j++) {
                e[j] -= hh * d[j];
            }

            for (j = 0; j < i; j++) {
                f = d[j];
                g = e[j];
                for (k = j; k <= i - 1; k++) {
                    V[k][j] -= (f * e[k] + g * d[k]);
                }
                d[j] = V[i - 1][j];
                V[i][j] = 0;
            }
        }
        d[i] = h;
    }

    for (i = 0; i < n - 1; i++) {
        V[n - 1][i] = V[i][i];
        V[i][i] = 1;
        h = d[i + 1];
        if (h !== 0) {
            for (k = 0; k <= i; k++) {
                d[k] = V[k][i + 1] / h;
            }

            for (j = 0; j <= i; j++) {
                g = 0;
                for (k = 0; k <= i; k++) {
                    g += V[k][i + 1] * V[k][j];
                }
                for (k = 0; k <= i; k++) {
                    V[k][j] -= g * d[k];
                }
            }
        }

        for (k = 0; k <= i; k++) {
            V[k][i + 1] = 0;
        }
    }

    for (j = 0; j < n; j++) {
        d[j] = V[n - 1][j];
        V[n - 1][j] = 0;
    }

    V[n - 1][n - 1] = 1;
    e[0] = 0;
}

function tql2(n, e, d, V) {

    var g, h, i, j, k, l, m, p, r,
        dl1, c, c2, c3, el1, s, s2,
        iter;

    for (i = 1; i < n; i++) {
        e[i - 1] = e[i];
    }

    e[n - 1] = 0;

    var f = 0;
    var tst1 = 0;
    var eps = Number.EPSILON;

    for (l = 0; l < n; l++) {
        tst1 = Math.max(tst1, Math.abs(d[l]) + Math.abs(e[l]));
        m = l;
        while (m < n) {
            if (Math.abs(e[m]) <= eps * tst1) {
                break;
            }
            m++;
        }

        if (m > l) {
            iter = 0;
            do {
                iter = iter + 1;

                g = d[l];
                p = (d[l + 1] - g) / (2 * e[l]);
                r = hypotenuse(p, 1);
                if (p < 0) {
                    r = -r;
                }

                d[l] = e[l] / (p + r);
                d[l + 1] = e[l] * (p + r);
                dl1 = d[l + 1];
                h = g - d[l];
                for (i = l + 2; i < n; i++) {
                    d[i] -= h;
                }

                f = f + h;

                p = d[m];
                c = 1;
                c2 = c;
                c3 = c;
                el1 = e[l + 1];
                s = 0;
                s2 = 0;
                for (i = m - 1; i >= l; i--) {
                    c3 = c2;
                    c2 = c;
                    s2 = s;
                    g = c * e[i];
                    h = c * p;
                    r = hypotenuse(p, e[i]);
                    e[i + 1] = s * r;
                    s = e[i] / r;
                    c = p / r;
                    p = c * d[i] - s * g;
                    d[i + 1] = h + s * (c * g + s * d[i]);

                    for (k = 0; k < n; k++) {
                        h = V[k][i + 1];
                        V[k][i + 1] = s * V[k][i] + c * h;
                        V[k][i] = c * V[k][i] - s * h;
                    }
                }

                p = -s * s2 * c3 * el1 * e[l] / dl1;
                e[l] = s * p;
                d[l] = c * p;

            }
            while (Math.abs(e[l]) > eps * tst1);
        }
        d[l] = d[l] + f;
        e[l] = 0;
    }

    for (i = 0; i < n - 1; i++) {
        k = i;
        p = d[i];
        for (j = i + 1; j < n; j++) {
            if (d[j] < p) {
                k = j;
                p = d[j];
            }
        }

        if (k !== i) {
            d[k] = d[i];
            d[i] = p;
            for (j = 0; j < n; j++) {
                p = V[j][i];
                V[j][i] = V[j][k];
                V[j][k] = p;
            }
        }
    }
}

function orthes(n, H, ort, V) {

    var low = 0;
    var high = n - 1;
    var f, g, h, i, j, m;
    var scale;

    for (m = low + 1; m <= high - 1; m++) {
        scale = 0;
        for (i = m; i <= high; i++) {
            scale = scale + Math.abs(H[i][m - 1]);
        }

        if (scale !== 0) {
            h = 0;
            for (i = high; i >= m; i--) {
                ort[i] = H[i][m - 1] / scale;
                h += ort[i] * ort[i];
            }

            g = Math.sqrt(h);
            if (ort[m] > 0) {
                g = -g;
            }

            h = h - ort[m] * g;
            ort[m] = ort[m] - g;

            for (j = m; j < n; j++) {
                f = 0;
                for (i = high; i >= m; i--) {
                    f += ort[i] * H[i][j];
                }

                f = f / h;
                for (i = m; i <= high; i++) {
                    H[i][j] -= f * ort[i];
                }
            }

            for (i = 0; i <= high; i++) {
                f = 0;
                for (j = high; j >= m; j--) {
                    f += ort[j] * H[i][j];
                }

                f = f / h;
                for (j = m; j <= high; j++) {
                    H[i][j] -= f * ort[j];
                }
            }

            ort[m] = scale * ort[m];
            H[m][m - 1] = scale * g;
        }
    }

    for (i = 0; i < n; i++) {
        for (j = 0; j < n; j++) {
            V[i][j] = (i === j ? 1 : 0);
        }
    }

    for (m = high - 1; m >= low + 1; m--) {
        if (H[m][m - 1] !== 0) {
            for (i = m + 1; i <= high; i++) {
                ort[i] = H[i][m - 1];
            }

            for (j = m; j <= high; j++) {
                g = 0;
                for (i = m; i <= high; i++) {
                    g += ort[i] * V[i][j];
                }

                g = (g / ort[m]) / H[m][m - 1];
                for (i = m; i <= high; i++) {
                    V[i][j] += g * ort[i];
                }
            }
        }
    }
}

function hqr2(nn, e, d, V, H) {
    var n = nn - 1;
    var low = 0;
    var high = nn - 1;
    var eps = Number.EPSILON;
    var exshift = 0;
    var norm = 0;
    var p = 0;
    var q = 0;
    var r = 0;
    var s = 0;
    var z = 0;
    var iter = 0;
    var i, j, k, l, m, t, w, x, y;
    var ra, sa, vr, vi;
    var notlast, cdivres;

    for (i = 0; i < nn; i++) {
        if (i < low || i > high) {
            d[i] = H[i][i];
            e[i] = 0;
        }

        for (j = Math.max(i - 1, 0); j < nn; j++) {
            norm = norm + Math.abs(H[i][j]);
        }
    }

    while (n >= low) {
        l = n;
        while (l > low) {
            s = Math.abs(H[l - 1][l - 1]) + Math.abs(H[l][l]);
            if (s === 0) {
                s = norm;
            }
            if (Math.abs(H[l][l - 1]) < eps * s) {
                break;
            }
            l--;
        }

        if (l === n) {
            H[n][n] = H[n][n] + exshift;
            d[n] = H[n][n];
            e[n] = 0;
            n--;
            iter = 0;
        } else if (l === n - 1) {
            w = H[n][n - 1] * H[n - 1][n];
            p = (H[n - 1][n - 1] - H[n][n]) / 2;
            q = p * p + w;
            z = Math.sqrt(Math.abs(q));
            H[n][n] = H[n][n] + exshift;
            H[n - 1][n - 1] = H[n - 1][n - 1] + exshift;
            x = H[n][n];

            if (q >= 0) {
                z = (p >= 0) ? (p + z) : (p - z);
                d[n - 1] = x + z;
                d[n] = d[n - 1];
                if (z !== 0) {
                    d[n] = x - w / z;
                }
                e[n - 1] = 0;
                e[n] = 0;
                x = H[n][n - 1];
                s = Math.abs(x) + Math.abs(z);
                p = x / s;
                q = z / s;
                r = Math.sqrt(p * p + q * q);
                p = p / r;
                q = q / r;

                for (j = n - 1; j < nn; j++) {
                    z = H[n - 1][j];
                    H[n - 1][j] = q * z + p * H[n][j];
                    H[n][j] = q * H[n][j] - p * z;
                }

                for (i = 0; i <= n; i++) {
                    z = H[i][n - 1];
                    H[i][n - 1] = q * z + p * H[i][n];
                    H[i][n] = q * H[i][n] - p * z;
                }

                for (i = low; i <= high; i++) {
                    z = V[i][n - 1];
                    V[i][n - 1] = q * z + p * V[i][n];
                    V[i][n] = q * V[i][n] - p * z;
                }
            } else {
                d[n - 1] = x + p;
                d[n] = x + p;
                e[n - 1] = z;
                e[n] = -z;
            }

            n = n - 2;
            iter = 0;
        } else {
            x = H[n][n];
            y = 0;
            w = 0;
            if (l < n) {
                y = H[n - 1][n - 1];
                w = H[n][n - 1] * H[n - 1][n];
            }

            if (iter === 10) {
                exshift += x;
                for (i = low; i <= n; i++) {
                    H[i][i] -= x;
                }
                s = Math.abs(H[n][n - 1]) + Math.abs(H[n - 1][n - 2]);
                x = y = 0.75 * s;
                w = -0.4375 * s * s;
            }

            if (iter === 30) {
                s = (y - x) / 2;
                s = s * s + w;
                if (s > 0) {
                    s = Math.sqrt(s);
                    if (y < x) {
                        s = -s;
                    }
                    s = x - w / ((y - x) / 2 + s);
                    for (i = low; i <= n; i++) {
                        H[i][i] -= s;
                    }
                    exshift += s;
                    x = y = w = 0.964;
                }
            }

            iter = iter + 1;

            m = n - 2;
            while (m >= l) {
                z = H[m][m];
                r = x - z;
                s = y - z;
                p = (r * s - w) / H[m + 1][m] + H[m][m + 1];
                q = H[m + 1][m + 1] - z - r - s;
                r = H[m + 2][m + 1];
                s = Math.abs(p) + Math.abs(q) + Math.abs(r);
                p = p / s;
                q = q / s;
                r = r / s;
                if (m === l) {
                    break;
                }
                if (Math.abs(H[m][m - 1]) * (Math.abs(q) + Math.abs(r)) < eps * (Math.abs(p) * (Math.abs(H[m - 1][m - 1]) + Math.abs(z) + Math.abs(H[m + 1][m + 1])))) {
                    break;
                }
                m--;
            }

            for (i = m + 2; i <= n; i++) {
                H[i][i - 2] = 0;
                if (i > m + 2) {
                    H[i][i - 3] = 0;
                }
            }

            for (k = m; k <= n - 1; k++) {
                notlast = (k !== n - 1);
                if (k !== m) {
                    p = H[k][k - 1];
                    q = H[k + 1][k - 1];
                    r = (notlast ? H[k + 2][k - 1] : 0);
                    x = Math.abs(p) + Math.abs(q) + Math.abs(r);
                    if (x !== 0) {
                        p = p / x;
                        q = q / x;
                        r = r / x;
                    }
                }

                if (x === 0) {
                    break;
                }

                s = Math.sqrt(p * p + q * q + r * r);
                if (p < 0) {
                    s = -s;
                }

                if (s !== 0) {
                    if (k !== m) {
                        H[k][k - 1] = -s * x;
                    } else if (l !== m) {
                        H[k][k - 1] = -H[k][k - 1];
                    }

                    p = p + s;
                    x = p / s;
                    y = q / s;
                    z = r / s;
                    q = q / p;
                    r = r / p;

                    for (j = k; j < nn; j++) {
                        p = H[k][j] + q * H[k + 1][j];
                        if (notlast) {
                            p = p + r * H[k + 2][j];
                            H[k + 2][j] = H[k + 2][j] - p * z;
                        }

                        H[k][j] = H[k][j] - p * x;
                        H[k + 1][j] = H[k + 1][j] - p * y;
                    }

                    for (i = 0; i <= Math.min(n, k + 3); i++) {
                        p = x * H[i][k] + y * H[i][k + 1];
                        if (notlast) {
                            p = p + z * H[i][k + 2];
                            H[i][k + 2] = H[i][k + 2] - p * r;
                        }

                        H[i][k] = H[i][k] - p;
                        H[i][k + 1] = H[i][k + 1] - p * q;
                    }

                    for (i = low; i <= high; i++) {
                        p = x * V[i][k] + y * V[i][k + 1];
                        if (notlast) {
                            p = p + z * V[i][k + 2];
                            V[i][k + 2] = V[i][k + 2] - p * r;
                        }

                        V[i][k] = V[i][k] - p;
                        V[i][k + 1] = V[i][k + 1] - p * q;
                    }
                }
            }
        }
    }

    if (norm === 0) {
        return;
    }

    for (n = nn - 1; n >= 0; n--) {
        p = d[n];
        q = e[n];

        if (q === 0) {
            l = n;
            H[n][n] = 1;
            for (i = n - 1; i >= 0; i--) {
                w = H[i][i] - p;
                r = 0;
                for (j = l; j <= n; j++) {
                    r = r + H[i][j] * H[j][n];
                }

                if (e[i] < 0) {
                    z = w;
                    s = r;
                } else {
                    l = i;
                    if (e[i] === 0) {
                        H[i][n] = (w !== 0) ? (-r / w) : (-r / (eps * norm));
                    } else {
                        x = H[i][i + 1];
                        y = H[i + 1][i];
                        q = (d[i] - p) * (d[i] - p) + e[i] * e[i];
                        t = (x * s - z * r) / q;
                        H[i][n] = t;
                        H[i + 1][n] = (Math.abs(x) > Math.abs(z)) ? ((-r - w * t) / x) : ((-s - y * t) / z);
                    }

                    t = Math.abs(H[i][n]);
                    if ((eps * t) * t > 1) {
                        for (j = i; j <= n; j++) {
                            H[j][n] = H[j][n] / t;
                        }
                    }
                }
            }
        } else if (q < 0) {
            l = n - 1;

            if (Math.abs(H[n][n - 1]) > Math.abs(H[n - 1][n])) {
                H[n - 1][n - 1] = q / H[n][n - 1];
                H[n - 1][n] = -(H[n][n] - p) / H[n][n - 1];
            } else {
                cdivres = cdiv(0, -H[n - 1][n], H[n - 1][n - 1] - p, q);
                H[n - 1][n - 1] = cdivres[0];
                H[n - 1][n] = cdivres[1];
            }

            H[n][n - 1] = 0;
            H[n][n] = 1;
            for (i = n - 2; i >= 0; i--) {
                ra = 0;
                sa = 0;
                for (j = l; j <= n; j++) {
                    ra = ra + H[i][j] * H[j][n - 1];
                    sa = sa + H[i][j] * H[j][n];
                }

                w = H[i][i] - p;

                if (e[i] < 0) {
                    z = w;
                    r = ra;
                    s = sa;
                } else {
                    l = i;
                    if (e[i] === 0) {
                        cdivres = cdiv(-ra, -sa, w, q);
                        H[i][n - 1] = cdivres[0];
                        H[i][n] = cdivres[1];
                    } else {
                        x = H[i][i + 1];
                        y = H[i + 1][i];
                        vr = (d[i] - p) * (d[i] - p) + e[i] * e[i] - q * q;
                        vi = (d[i] - p) * 2 * q;
                        if (vr === 0 && vi === 0) {
                            vr = eps * norm * (Math.abs(w) + Math.abs(q) + Math.abs(x) + Math.abs(y) + Math.abs(z));
                        }
                        cdivres = cdiv(x * r - z * ra + q * sa, x * s - z * sa - q * ra, vr, vi);
                        H[i][n - 1] = cdivres[0];
                        H[i][n] = cdivres[1];
                        if (Math.abs(x) > (Math.abs(z) + Math.abs(q))) {
                            H[i + 1][n - 1] = (-ra - w * H[i][n - 1] + q * H[i][n]) / x;
                            H[i + 1][n] = (-sa - w * H[i][n] - q * H[i][n - 1]) / x;
                        } else {
                            cdivres = cdiv(-r - y * H[i][n - 1], -s - y * H[i][n], z, q);
                            H[i + 1][n - 1] = cdivres[0];
                            H[i + 1][n] = cdivres[1];
                        }
                    }

                    t = Math.max(Math.abs(H[i][n - 1]), Math.abs(H[i][n]));
                    if ((eps * t) * t > 1) {
                        for (j = i; j <= n; j++) {
                            H[j][n - 1] = H[j][n - 1] / t;
                            H[j][n] = H[j][n] / t;
                        }
                    }
                }
            }
        }
    }

    for (i = 0; i < nn; i++) {
        if (i < low || i > high) {
            for (j = i; j < nn; j++) {
                V[i][j] = H[i][j];
            }
        }
    }

    for (j = nn - 1; j >= low; j--) {
        for (i = low; i <= high; i++) {
            z = 0;
            for (k = low; k <= Math.min(j, high); k++) {
                z = z + V[i][k] * H[k][j];
            }
            V[i][j] = z;
        }
    }
}

function cdiv(xr, xi, yr, yi) {
    var r, d;
    if (Math.abs(yr) > Math.abs(yi)) {
        r = yi / yr;
        d = yr + r * yi;
        return [(xr + r * xi) / d, (xi - r * xr) / d];
    } else {
        r = yr / yi;
        d = yi + r * yr;
        return [(r * xr + xi) / d, (r * xi - xr) / d];
    }
}

/**
 * @class CholeskyDecomposition
 * @link https://github.com/lutzroeder/Mapack/blob/master/Source/CholeskyDecomposition.cs
 * @param {Matrix} value
 */
class CholeskyDecomposition$$1 {
    constructor(value) {
        value = WrapperMatrix2D.checkMatrix(value);
        if (!value.isSymmetric()) {
            throw new Error('Matrix is not symmetric');
        }

        var a = value;
        var dimension = a.rows;
        var l = new Matrix(dimension, dimension);
        var positiveDefinite = true;
        var i, j, k;

        for (j = 0; j < dimension; j++) {
            var Lrowj = l[j];
            var d = 0;
            for (k = 0; k < j; k++) {
                var Lrowk = l[k];
                var s = 0;
                for (i = 0; i < k; i++) {
                    s += Lrowk[i] * Lrowj[i];
                }
                Lrowj[k] = s = (a.get(j, k) - s) / l[k][k];
                d = d + s * s;
            }

            d = a.get(j, j) - d;

            positiveDefinite &= (d > 0);
            l[j][j] = Math.sqrt(Math.max(d, 0));
            for (k = j + 1; k < dimension; k++) {
                l[j][k] = 0;
            }
        }

        if (!positiveDefinite) {
            throw new Error('Matrix is not positive definite');
        }

        this.L = l;
    }

    /**
     *
     * @param {Matrix} value
     * @return {Matrix}
     */
    solve(value) {
        value = WrapperMatrix2D.checkMatrix(value);

        var l = this.L;
        var dimension = l.rows;

        if (value.rows !== dimension) {
            throw new Error('Matrix dimensions do not match');
        }

        var count = value.columns;
        var B = value.clone();
        var i, j, k;

        for (k = 0; k < dimension; k++) {
            for (j = 0; j < count; j++) {
                for (i = 0; i < k; i++) {
                    B[k][j] -= B[i][j] * l[k][i];
                }
                B[k][j] /= l[k][k];
            }
        }

        for (k = dimension - 1; k >= 0; k--) {
            for (j = 0; j < count; j++) {
                for (i = k + 1; i < dimension; i++) {
                    B[k][j] -= B[i][j] * l[i][k];
                }
                B[k][j] /= l[k][k];
            }
        }

        return B;
    }

    /**
     *
     * @return {Matrix}
     */
    get lowerTriangularMatrix() {
        return this.L;
    }
}

exports['default'] = Matrix;
exports.Matrix = Matrix;
exports.abstractMatrix = AbstractMatrix;
exports.wrap = wrap;
exports.WrapperMatrix2D = WrapperMatrix2D;
exports.WrapperMatrix1D = WrapperMatrix1D;
exports.solve = solve$$1;
exports.inverse = inverse$$1;
exports.SingularValueDecomposition = SingularValueDecomposition$$1;
exports.SVD = SingularValueDecomposition$$1;
exports.EigenvalueDecomposition = EigenvalueDecomposition$$1;
exports.EVD = EigenvalueDecomposition$$1;
exports.CholeskyDecomposition = CholeskyDecomposition$$1;
exports.CHO = CholeskyDecomposition$$1;
exports.LuDecomposition = LuDecomposition$$1;
exports.LU = LuDecomposition$$1;
exports.QrDecomposition = QrDecomposition$$1;
exports.QR = QrDecomposition$$1;

},{"ml-array-rescale":10}],18:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var mlCart = require('ml-cart');
var Random = _interopDefault(require('random-js'));
var Matrix = require('ml-matrix');
var Matrix__default = _interopDefault(Matrix);
var arrayMean = _interopDefault(require('ml-array-mean'));
var arrayMedian = _interopDefault(require('ml-array-median'));

function checkFloat(n) {
    return n > 0.0 && n <= 1.0;
}

/**
 * Select n with replacement elements on the training set and values, where n is the size of the training set.
 * @ignore
 * @param {Matrix} trainingSet
 * @param {Array} trainingValue
 * @param {number} seed - seed for the random selection, must be a 32-bit integer.
 * @return {object} with new X and y.
 */
function examplesBaggingWithReplacement(trainingSet, trainingValue, seed) {
    var engine = Random.engines.mt19937();
    var distribution = Random.integer(0, trainingSet.rows - 1);
    if (seed === undefined) {
        engine = engine.autoSeed();
    } else if (Number.isInteger(seed)) {
        engine = engine.seed(seed);
    } else {
        throw new RangeError('Expected seed must be undefined or integer not ' + seed);
    }

    var Xr = new Array(trainingSet.rows);
    var yr = new Array(trainingSet.rows);

    for (var i = 0; i < trainingSet.rows; ++i) {
        var index = distribution(engine);
        Xr[i] = trainingSet[index];
        yr[i] = trainingValue[index];
    }

    return {
        X: new Matrix__default(Xr),
        y: yr
    };
}

/**
 * selects n features from the training set with or without replacement, returns the new training set and the indexes used.
 * @ignore
 * @param {Matrix} trainingSet
 * @param {number} n - features.
 * @param {boolean} replacement
 * @param {number} seed - seed for the random selection, must be a 32-bit integer.
 * @return {object}
 */
function featureBagging(trainingSet, n, replacement, seed) {
    if (trainingSet.columns < n) {
        throw new RangeError('N should be less or equal to the number of columns of X');
    }

    var distribution = Random.integer(0, trainingSet.columns - 1);
    var engine = Random.engines.mt19937();
    if (seed === undefined) {
        engine = engine.autoSeed();
    } else if (Number.isInteger(seed)) {
        engine = engine.seed(seed);
    } else {
        throw new RangeError('Expected seed must be undefined or integer not ' + seed);
    }

    var toRet = new Matrix__default(trainingSet.rows, n);

    if (replacement) {
        var usedIndex = new Array(n);
        for (var i = 0; i < n; ++i) {
            var index = distribution(engine);
            usedIndex[i] = index;
            toRet.setColumn(i, trainingSet.getColumn(index));
        }
    } else {
        usedIndex = new Set();
        index = distribution(engine);
        for (i = 0; i < n; ++i) {
            while (usedIndex.has(index)) {
                index = distribution(engine);
            }
            toRet.setColumn(i, trainingSet.getColumn(index));
            usedIndex.add(index);
        }
        usedIndex = Array.from(usedIndex);
    }

    return {
        X: toRet,
        usedIndex: usedIndex
    };
}

/**
 * @class RandomForestBase
 */
class RandomForestBase {

    /**
     * Create a new base random forest for a classifier or regression model.
     * @constructor
     * @param {object} options
     * @param {number|String} [options.maxFeatures] - the number of features used on each estimator.
     *        * if is an integer it selects maxFeatures elements over the sample features.
     *        * if is a float between (0, 1), it takes the percentage of features.
     * @param {boolean} [options.replacement] - use replacement over the sample features.
     * @param {number} [options.seed] - seed for feature and samples selection, must be a 32-bit integer.
     * @param {number} [options.nEstimators] - number of estimator to use.
     * @param {object} [options.treeOptions] - options for the tree classifier, see [ml-cart]{@link https://mljs.github.io/decision-tree-cart/}
     * @param {boolean} [options.isClassifier] - boolean to check if is a classifier or regression model (used by subclasses).
     * @param {boolean} [options.useSampleBagging] - use bagging over training samples.
     * @param {object} model - for load purposes.
     */
    constructor(options, model) {
        if (options === true) {
            this.replacement = model.replacement;
            this.maxFeatures = model.maxFeatures;
            this.nEstimators = model.nEstimators;
            this.treeOptions = model.treeOptions;
            this.isClassifier = model.isClassifier;
            this.seed = model.seed;
            this.n = model.n;
            this.indexes = model.indexes;
            this.useSampleBagging = model.useSampleBagging;

            var Estimator = this.isClassifier ? mlCart.DecisionTreeClassifier : mlCart.DecisionTreeRegression;
            this.estimators = model.estimators.map(est => Estimator.load(est));
        } else {
            this.replacement = options.replacement;
            this.maxFeatures = options.maxFeatures;
            this.nEstimators = options.nEstimators;
            this.treeOptions = options.treeOptions;
            this.isClassifier = options.isClassifier;
            this.seed = options.seed;
            this.useSampleBagging = options.useSampleBagging;
        }
    }

    /**
     * Train the decision tree with the given training set and labels.
     * @param {Matrix|Array} trainingSet
     * @param {Array} trainingValues
     */
    train(trainingSet, trainingValues) {
        trainingSet = Matrix.Matrix.checkMatrix(trainingSet);

        this.maxFeatures = this.maxFeatures || trainingSet.columns;

        if (checkFloat(this.maxFeatures)) {
            this.n = Math.floor(trainingSet.columns * this.maxFeatures);
        } else if (Number.isInteger(this.maxFeatures)) {
            if (this.maxFeatures > trainingSet.columns) {
                throw new RangeError('The maxFeatures parameter should be less than ' + trainingSet.columns);
            } else {
                this.n = this.maxFeatures;
            }
        } else {
            throw new RangeError('Cannot process the maxFeatures parameter ' + this.maxFeatures);
        }


        if (this.isClassifier) {
            var Estimator = mlCart.DecisionTreeClassifier;
        } else {
            Estimator = mlCart.DecisionTreeRegression;
        }

        this.estimators = new Array(this.nEstimators);
        this.indexes = new Array(this.nEstimators);

        for (var i = 0; i < this.nEstimators; ++i) {
            var res = this.useSampleBagging ? examplesBaggingWithReplacement(trainingSet, trainingValues, this.seed) : {X: trainingSet, y: trainingValues};
            var X = res.X;
            var y = res.y;

            res = featureBagging(X, this.n, this.replacement, this.seed);
            X = res.X;

            this.indexes[i] = res.usedIndex;
            this.estimators[i] = new Estimator(this.treeOptions);
            this.estimators[i].train(X, y);
        }
    }

    /**
     * Method that returns the way the algorithm generates the predictions, for example, in classification
     * you can return the mode of all predictions retrieved by the trees, or in case of regression you can
     * use the mean or the median.
     * @abstract
     * @param {Array} values - predictions of the estimators.
     * @return {number} prediction.
     */
    // eslint-disable-next-line no-unused-vars
    selection(values) {
        throw new Error('Abstract method \'selection\' not implemented!');
    }

    /**
     * Predicts the output given the matrix to predict.
     * @param {Matrix|Array} toPredict
     * @return {Array} predictions
     */
    predict(toPredict) {
        var predictionValues = new Array(this.nEstimators);
        toPredict = Matrix.Matrix.checkMatrix(toPredict);
        for (var i = 0; i < this.nEstimators; ++i) {
            var X = toPredict.columnSelectionView(this.indexes[i]); // get features for estimator
            predictionValues[i] = this.estimators[i].predict(X);
        }

        predictionValues = new Matrix.WrapperMatrix2D(predictionValues).transposeView();
        var predictions = new Array(predictionValues.rows);
        for (i = 0; i < predictionValues.rows; ++i) {
            predictions[i] = this.selection(predictionValues.getRow(i));
        }

        return predictions;
    }

    /**
     * Export the current model to JSON.
     * @return {object} - Current model.
     */
    toJSON() {
        return {
            indexes: this.indexes,
            n: this.n,
            replacement: this.replacement,
            maxFeatures: this.maxFeatures,
            nEstimators: this.nEstimators,
            treeOptions: this.treeOptions,
            isClassifier: this.isClassifier,
            seed: this.seed,
            estimators: this.estimators,
            useSampleBagging: this.useSampleBagging
        };
    }
}

const defaultOptions = {
    maxFeatures: 1.0,
    replacement: true,
    nEstimators: 10,
    seed: 42,
    useSampleBagging: false
};

/**
 * @class RandomForestClassifier
 * @augments RandomForestBase
 */
class RandomForestClassifier extends RandomForestBase {

    /**
     * Create a new base random forest for a classifier or regression model.
     * @constructor
     * @param {object} options
     * @param {number} [options.maxFeatures=1.0] - the number of features used on each estimator.
     *        * if is an integer it selects maxFeatures elements over the sample features.
     *        * if is a float between (0, 1), it takes the percentage of features.
     * @param {boolean} [options.replacement=true] - use replacement over the sample features.
     * @param {number} [options.seed=42] - seed for feature and samples selection, must be a 32-bit integer.
     * @param {number} [options.nEstimators=10] - number of estimator to use.
     * @param {object} [options.treeOptions={}] - options for the tree classifier, see [ml-cart]{@link https://mljs.github.io/decision-tree-cart/}
     * @param {boolean} [options.useSampleBagging=false] - use bagging over training samples.
     * @param {object} model - for load purposes.
     */
    constructor(options, model) {
        if (options === true) {
            super(true, model.baseModel);
        } else {
            options = Object.assign({}, defaultOptions, options);
            options.isClassifier = true;
            super(options);
        }
    }

    /**
     * retrieve the prediction given the selection method.
     * @param {Array} values - predictions of the estimators.
     * @return {number} prediction
     */
    selection(values) {
        return mode(values);
    }

    /**
     * Export the current model to JSON.
     * @return {object} - Current model.
     */
    toJSON() {
        var baseModel = super.toJSON();
        return {
            baseModel: baseModel,
            name: 'RFClassifier'
        };
    }

    /**
     * Load a Decision tree classifier with the given model.
     * @param {object} model
     * @return {RandomForestClassifier}
     */
    static load(model) {
        if (model.name !== 'RFClassifier') {
            throw new RangeError('Invalid model: ' + model.name);
        }

        return new RandomForestClassifier(true, model);
    }
}

/**
 * Return the most repeated element on the array.
 * @param {Array} arr
 * @return {number} mode
 */
function mode(arr) {
    return arr.sort((a, b) =>
        arr.filter(v => v === a).length
        - arr.filter(v => v === b).length
    ).pop();
}

const selectionMethods = {
    mean: arrayMean,
    median: arrayMedian
};

const defaultOptions$1 = {
    maxFeatures: 1.0,
    replacement: false,
    nEstimators: 10,
    treeOptions: {},
    selectionMethod: 'mean',
    seed: 42,
    useSampleBagging: false
};

/**
 * @class RandomForestRegression
 * @augments RandomForestBase
 */
class RandomForestRegression extends RandomForestBase {

    /**
     * Create a new base random forest for a classifier or regression model.
     * @constructor
     * @param {object} options
     * @param {number} [options.maxFeatures=1.0] - the number of features used on each estimator.
     *        * if is an integer it selects maxFeatures elements over the sample features.
     *        * if is a float between (0, 1), it takes the percentage of features.
     * @param {boolean} [options.replacement=true] - use replacement over the sample features.
     * @param {number} [options.seed=42] - seed for feature and samples selection, must be a 32-bit integer.
     * @param {number} [options.nEstimators=10] - number of estimator to use.
     * @param {object} [options.treeOptions={}] - options for the tree classifier, see [ml-cart]{@link https://mljs.github.io/decision-tree-cart/}
     * @param {string} [options.selectionMethod="mean"] - the way to calculate the prediction from estimators, "mean" and "median" are supported.
     * @param {boolean} [options.useSampleBagging=false] - use bagging over training samples.
     * @param {object} model - for load purposes.
     */
    constructor(options, model) {
        if (options === true) {
            super(true, model.baseModel);
            this.selectionMethod = model.selectionMethod;
        } else {
            options = Object.assign({}, defaultOptions$1, options);

            if (!(options.selectionMethod === 'mean' || options.selectionMethod === 'median')) {
                throw new RangeError('Unsupported selection method ' + options.selectionMethod);
            }

            options.isClassifier = false;

            super(options);
            this.selectionMethod = options.selectionMethod;
        }
    }

    /**
     * retrieve the prediction given the selection method.
     * @param {Array} values - predictions of the estimators.
     * @return {number} prediction
     */
    selection(values) {
        return selectionMethods[this.selectionMethod](values);
    }

    /**
     * Export the current model to JSON.
     * @return {object} - Current model.
     */
    toJSON() {
        var baseModel = super.toJSON();
        return {
            baseModel: baseModel,
            selectionMethod: this.selectionMethod,
            name: 'RFRegression'
        };
    }

    /**
     * Load a Decision tree classifier with the given model.
     * @param {object} model
     * @return {RandomForestRegression}
     */
    static load(model) {
        if (model.name !== 'RFRegression') {
            throw new RangeError('Invalid model: ' + model.name);
        }

        return new RandomForestRegression(true, model);
    }
}

exports.RandomForestClassifier = RandomForestClassifier;
exports.RandomForestRegression = RandomForestRegression;

},{"ml-array-mean":7,"ml-array-median":8,"ml-cart":11,"ml-matrix":17,"random-js":19}],19:[function(require,module,exports){
/*jshint eqnull:true*/
(function (root) {
  "use strict";

  var GLOBAL_KEY = "Random";

  var imul = (typeof Math.imul !== "function" || Math.imul(0xffffffff, 5) !== -5 ?
    function (a, b) {
      var ah = (a >>> 16) & 0xffff;
      var al = a & 0xffff;
      var bh = (b >>> 16) & 0xffff;
      var bl = b & 0xffff;
      // the shift by 0 fixes the sign on the high part
      // the final |0 converts the unsigned value into a signed value
      return (al * bl) + (((ah * bl + al * bh) << 16) >>> 0) | 0;
    } :
    Math.imul);

  var stringRepeat = (typeof String.prototype.repeat === "function" && "x".repeat(3) === "xxx" ?
    function (x, y) {
      return x.repeat(y);
    } : function (pattern, count) {
      var result = "";
      while (count > 0) {
        if (count & 1) {
          result += pattern;
        }
        count >>= 1;
        pattern += pattern;
      }
      return result;
    });

  function Random(engine) {
    if (!(this instanceof Random)) {
      return new Random(engine);
    }

    if (engine == null) {
      engine = Random.engines.nativeMath;
    } else if (typeof engine !== "function") {
      throw new TypeError("Expected engine to be a function, got " + typeof engine);
    }
    this.engine = engine;
  }
  var proto = Random.prototype;

  Random.engines = {
    nativeMath: function () {
      return (Math.random() * 0x100000000) | 0;
    },
    mt19937: (function (Int32Array) {
      // http://en.wikipedia.org/wiki/Mersenne_twister
      function refreshData(data) {
        var k = 0;
        var tmp = 0;
        for (;
          (k | 0) < 227; k = (k + 1) | 0) {
          tmp = (data[k] & 0x80000000) | (data[(k + 1) | 0] & 0x7fffffff);
          data[k] = data[(k + 397) | 0] ^ (tmp >>> 1) ^ ((tmp & 0x1) ? 0x9908b0df : 0);
        }

        for (;
          (k | 0) < 623; k = (k + 1) | 0) {
          tmp = (data[k] & 0x80000000) | (data[(k + 1) | 0] & 0x7fffffff);
          data[k] = data[(k - 227) | 0] ^ (tmp >>> 1) ^ ((tmp & 0x1) ? 0x9908b0df : 0);
        }

        tmp = (data[623] & 0x80000000) | (data[0] & 0x7fffffff);
        data[623] = data[396] ^ (tmp >>> 1) ^ ((tmp & 0x1) ? 0x9908b0df : 0);
      }

      function temper(value) {
        value ^= value >>> 11;
        value ^= (value << 7) & 0x9d2c5680;
        value ^= (value << 15) & 0xefc60000;
        return value ^ (value >>> 18);
      }

      function seedWithArray(data, source) {
        var i = 1;
        var j = 0;
        var sourceLength = source.length;
        var k = Math.max(sourceLength, 624) | 0;
        var previous = data[0] | 0;
        for (;
          (k | 0) > 0; --k) {
          data[i] = previous = ((data[i] ^ imul((previous ^ (previous >>> 30)), 0x0019660d)) + (source[j] | 0) + (j | 0)) | 0;
          i = (i + 1) | 0;
          ++j;
          if ((i | 0) > 623) {
            data[0] = data[623];
            i = 1;
          }
          if (j >= sourceLength) {
            j = 0;
          }
        }
        for (k = 623;
          (k | 0) > 0; --k) {
          data[i] = previous = ((data[i] ^ imul((previous ^ (previous >>> 30)), 0x5d588b65)) - i) | 0;
          i = (i + 1) | 0;
          if ((i | 0) > 623) {
            data[0] = data[623];
            i = 1;
          }
        }
        data[0] = 0x80000000;
      }

      function mt19937() {
        var data = new Int32Array(624);
        var index = 0;
        var uses = 0;

        function next() {
          if ((index | 0) >= 624) {
            refreshData(data);
            index = 0;
          }

          var value = data[index];
          index = (index + 1) | 0;
          uses += 1;
          return temper(value) | 0;
        }
        next.getUseCount = function() {
          return uses;
        };
        next.discard = function (count) {
          uses += count;
          if ((index | 0) >= 624) {
            refreshData(data);
            index = 0;
          }
          while ((count - index) > 624) {
            count -= 624 - index;
            refreshData(data);
            index = 0;
          }
          index = (index + count) | 0;
          return next;
        };
        next.seed = function (initial) {
          var previous = 0;
          data[0] = previous = initial | 0;

          for (var i = 1; i < 624; i = (i + 1) | 0) {
            data[i] = previous = (imul((previous ^ (previous >>> 30)), 0x6c078965) + i) | 0;
          }
          index = 624;
          uses = 0;
          return next;
        };
        next.seedWithArray = function (source) {
          next.seed(0x012bd6aa);
          seedWithArray(data, source);
          return next;
        };
        next.autoSeed = function () {
          return next.seedWithArray(Random.generateEntropyArray());
        };
        return next;
      }

      return mt19937;
    }(typeof Int32Array === "function" ? Int32Array : Array)),
    browserCrypto: (typeof crypto !== "undefined" && typeof crypto.getRandomValues === "function" && typeof Int32Array === "function") ? (function () {
      var data = null;
      var index = 128;

      return function () {
        if (index >= 128) {
          if (data === null) {
            data = new Int32Array(128);
          }
          crypto.getRandomValues(data);
          index = 0;
        }

        return data[index++] | 0;
      };
    }()) : null
  };

  Random.generateEntropyArray = function () {
    var array = [];
    var engine = Random.engines.nativeMath;
    for (var i = 0; i < 16; ++i) {
      array[i] = engine() | 0;
    }
    array.push(new Date().getTime() | 0);
    return array;
  };

  function returnValue(value) {
    return function () {
      return value;
    };
  }

  // [-0x80000000, 0x7fffffff]
  Random.int32 = function (engine) {
    return engine() | 0;
  };
  proto.int32 = function () {
    return Random.int32(this.engine);
  };

  // [0, 0xffffffff]
  Random.uint32 = function (engine) {
    return engine() >>> 0;
  };
  proto.uint32 = function () {
    return Random.uint32(this.engine);
  };

  // [0, 0x1fffffffffffff]
  Random.uint53 = function (engine) {
    var high = engine() & 0x1fffff;
    var low = engine() >>> 0;
    return (high * 0x100000000) + low;
  };
  proto.uint53 = function () {
    return Random.uint53(this.engine);
  };

  // [0, 0x20000000000000]
  Random.uint53Full = function (engine) {
    while (true) {
      var high = engine() | 0;
      if (high & 0x200000) {
        if ((high & 0x3fffff) === 0x200000 && (engine() | 0) === 0) {
          return 0x20000000000000;
        }
      } else {
        var low = engine() >>> 0;
        return ((high & 0x1fffff) * 0x100000000) + low;
      }
    }
  };
  proto.uint53Full = function () {
    return Random.uint53Full(this.engine);
  };

  // [-0x20000000000000, 0x1fffffffffffff]
  Random.int53 = function (engine) {
    var high = engine() | 0;
    var low = engine() >>> 0;
    return ((high & 0x1fffff) * 0x100000000) + low + (high & 0x200000 ? -0x20000000000000 : 0);
  };
  proto.int53 = function () {
    return Random.int53(this.engine);
  };

  // [-0x20000000000000, 0x20000000000000]
  Random.int53Full = function (engine) {
    while (true) {
      var high = engine() | 0;
      if (high & 0x400000) {
        if ((high & 0x7fffff) === 0x400000 && (engine() | 0) === 0) {
          return 0x20000000000000;
        }
      } else {
        var low = engine() >>> 0;
        return ((high & 0x1fffff) * 0x100000000) + low + (high & 0x200000 ? -0x20000000000000 : 0);
      }
    }
  };
  proto.int53Full = function () {
    return Random.int53Full(this.engine);
  };

  function add(generate, addend) {
    if (addend === 0) {
      return generate;
    } else {
      return function (engine) {
        return generate(engine) + addend;
      };
    }
  }

  Random.integer = (function () {
    function isPowerOfTwoMinusOne(value) {
      return ((value + 1) & value) === 0;
    }

    function bitmask(masking) {
      return function (engine) {
        return engine() & masking;
      };
    }

    function downscaleToLoopCheckedRange(range) {
      var extendedRange = range + 1;
      var maximum = extendedRange * Math.floor(0x100000000 / extendedRange);
      return function (engine) {
        var value = 0;
        do {
          value = engine() >>> 0;
        } while (value >= maximum);
        return value % extendedRange;
      };
    }

    function downscaleToRange(range) {
      if (isPowerOfTwoMinusOne(range)) {
        return bitmask(range);
      } else {
        return downscaleToLoopCheckedRange(range);
      }
    }

    function isEvenlyDivisibleByMaxInt32(value) {
      return (value | 0) === 0;
    }

    function upscaleWithHighMasking(masking) {
      return function (engine) {
        var high = engine() & masking;
        var low = engine() >>> 0;
        return (high * 0x100000000) + low;
      };
    }

    function upscaleToLoopCheckedRange(extendedRange) {
      var maximum = extendedRange * Math.floor(0x20000000000000 / extendedRange);
      return function (engine) {
        var ret = 0;
        do {
          var high = engine() & 0x1fffff;
          var low = engine() >>> 0;
          ret = (high * 0x100000000) + low;
        } while (ret >= maximum);
        return ret % extendedRange;
      };
    }

    function upscaleWithinU53(range) {
      var extendedRange = range + 1;
      if (isEvenlyDivisibleByMaxInt32(extendedRange)) {
        var highRange = ((extendedRange / 0x100000000) | 0) - 1;
        if (isPowerOfTwoMinusOne(highRange)) {
          return upscaleWithHighMasking(highRange);
        }
      }
      return upscaleToLoopCheckedRange(extendedRange);
    }

    function upscaleWithinI53AndLoopCheck(min, max) {
      return function (engine) {
        var ret = 0;
        do {
          var high = engine() | 0;
          var low = engine() >>> 0;
          ret = ((high & 0x1fffff) * 0x100000000) + low + (high & 0x200000 ? -0x20000000000000 : 0);
        } while (ret < min || ret > max);
        return ret;
      };
    }

    return function (min, max) {
      min = Math.floor(min);
      max = Math.floor(max);
      if (min < -0x20000000000000 || !isFinite(min)) {
        throw new RangeError("Expected min to be at least " + (-0x20000000000000));
      } else if (max > 0x20000000000000 || !isFinite(max)) {
        throw new RangeError("Expected max to be at most " + 0x20000000000000);
      }

      var range = max - min;
      if (range <= 0 || !isFinite(range)) {
        return returnValue(min);
      } else if (range === 0xffffffff) {
        if (min === 0) {
          return Random.uint32;
        } else {
          return add(Random.int32, min + 0x80000000);
        }
      } else if (range < 0xffffffff) {
        return add(downscaleToRange(range), min);
      } else if (range === 0x1fffffffffffff) {
        return add(Random.uint53, min);
      } else if (range < 0x1fffffffffffff) {
        return add(upscaleWithinU53(range), min);
      } else if (max - 1 - min === 0x1fffffffffffff) {
        return add(Random.uint53Full, min);
      } else if (min === -0x20000000000000 && max === 0x20000000000000) {
        return Random.int53Full;
      } else if (min === -0x20000000000000 && max === 0x1fffffffffffff) {
        return Random.int53;
      } else if (min === -0x1fffffffffffff && max === 0x20000000000000) {
        return add(Random.int53, 1);
      } else if (max === 0x20000000000000) {
        return add(upscaleWithinI53AndLoopCheck(min - 1, max - 1), 1);
      } else {
        return upscaleWithinI53AndLoopCheck(min, max);
      }
    };
  }());
  proto.integer = function (min, max) {
    return Random.integer(min, max)(this.engine);
  };

  // [0, 1] (floating point)
  Random.realZeroToOneInclusive = function (engine) {
    return Random.uint53Full(engine) / 0x20000000000000;
  };
  proto.realZeroToOneInclusive = function () {
    return Random.realZeroToOneInclusive(this.engine);
  };

  // [0, 1) (floating point)
  Random.realZeroToOneExclusive = function (engine) {
    return Random.uint53(engine) / 0x20000000000000;
  };
  proto.realZeroToOneExclusive = function () {
    return Random.realZeroToOneExclusive(this.engine);
  };

  Random.real = (function () {
    function multiply(generate, multiplier) {
      if (multiplier === 1) {
        return generate;
      } else if (multiplier === 0) {
        return function () {
          return 0;
        };
      } else {
        return function (engine) {
          return generate(engine) * multiplier;
        };
      }
    }

    return function (left, right, inclusive) {
      if (!isFinite(left)) {
        throw new RangeError("Expected left to be a finite number");
      } else if (!isFinite(right)) {
        throw new RangeError("Expected right to be a finite number");
      }
      return add(
        multiply(
          inclusive ? Random.realZeroToOneInclusive : Random.realZeroToOneExclusive,
          right - left),
        left);
    };
  }());
  proto.real = function (min, max, inclusive) {
    return Random.real(min, max, inclusive)(this.engine);
  };

  Random.bool = (function () {
    function isLeastBitTrue(engine) {
      return (engine() & 1) === 1;
    }

    function lessThan(generate, value) {
      return function (engine) {
        return generate(engine) < value;
      };
    }

    function probability(percentage) {
      if (percentage <= 0) {
        return returnValue(false);
      } else if (percentage >= 1) {
        return returnValue(true);
      } else {
        var scaled = percentage * 0x100000000;
        if (scaled % 1 === 0) {
          return lessThan(Random.int32, (scaled - 0x80000000) | 0);
        } else {
          return lessThan(Random.uint53, Math.round(percentage * 0x20000000000000));
        }
      }
    }

    return function (numerator, denominator) {
      if (denominator == null) {
        if (numerator == null) {
          return isLeastBitTrue;
        }
        return probability(numerator);
      } else {
        if (numerator <= 0) {
          return returnValue(false);
        } else if (numerator >= denominator) {
          return returnValue(true);
        }
        return lessThan(Random.integer(0, denominator - 1), numerator);
      }
    };
  }());
  proto.bool = function (numerator, denominator) {
    return Random.bool(numerator, denominator)(this.engine);
  };

  function toInteger(value) {
    var number = +value;
    if (number < 0) {
      return Math.ceil(number);
    } else {
      return Math.floor(number);
    }
  }

  function convertSliceArgument(value, length) {
    if (value < 0) {
      return Math.max(value + length, 0);
    } else {
      return Math.min(value, length);
    }
  }
  Random.pick = function (engine, array, begin, end) {
    var length = array.length;
    var start = begin == null ? 0 : convertSliceArgument(toInteger(begin), length);
    var finish = end === void 0 ? length : convertSliceArgument(toInteger(end), length);
    if (start >= finish) {
      return void 0;
    }
    var distribution = Random.integer(start, finish - 1);
    return array[distribution(engine)];
  };
  proto.pick = function (array, begin, end) {
    return Random.pick(this.engine, array, begin, end);
  };

  function returnUndefined() {
    return void 0;
  }
  var slice = Array.prototype.slice;
  Random.picker = function (array, begin, end) {
    var clone = slice.call(array, begin, end);
    if (!clone.length) {
      return returnUndefined;
    }
    var distribution = Random.integer(0, clone.length - 1);
    return function (engine) {
      return clone[distribution(engine)];
    };
  };

  Random.shuffle = function (engine, array, downTo) {
    var length = array.length;
    if (length) {
      if (downTo == null) {
        downTo = 0;
      }
      for (var i = (length - 1) >>> 0; i > downTo; --i) {
        var distribution = Random.integer(0, i);
        var j = distribution(engine);
        if (i !== j) {
          var tmp = array[i];
          array[i] = array[j];
          array[j] = tmp;
        }
      }
    }
    return array;
  };
  proto.shuffle = function (array) {
    return Random.shuffle(this.engine, array);
  };

  Random.sample = function (engine, population, sampleSize) {
    if (sampleSize < 0 || sampleSize > population.length || !isFinite(sampleSize)) {
      throw new RangeError("Expected sampleSize to be within 0 and the length of the population");
    }

    if (sampleSize === 0) {
      return [];
    }

    var clone = slice.call(population);
    var length = clone.length;
    if (length === sampleSize) {
      return Random.shuffle(engine, clone, 0);
    }
    var tailLength = length - sampleSize;
    return Random.shuffle(engine, clone, tailLength - 1).slice(tailLength);
  };
  proto.sample = function (population, sampleSize) {
    return Random.sample(this.engine, population, sampleSize);
  };

  Random.die = function (sideCount) {
    return Random.integer(1, sideCount);
  };
  proto.die = function (sideCount) {
    return Random.die(sideCount)(this.engine);
  };

  Random.dice = function (sideCount, dieCount) {
    var distribution = Random.die(sideCount);
    return function (engine) {
      var result = [];
      result.length = dieCount;
      for (var i = 0; i < dieCount; ++i) {
        result[i] = distribution(engine);
      }
      return result;
    };
  };
  proto.dice = function (sideCount, dieCount) {
    return Random.dice(sideCount, dieCount)(this.engine);
  };

  // http://en.wikipedia.org/wiki/Universally_unique_identifier
  Random.uuid4 = (function () {
    function zeroPad(string, zeroCount) {
      return stringRepeat("0", zeroCount - string.length) + string;
    }

    return function (engine) {
      var a = engine() >>> 0;
      var b = engine() | 0;
      var c = engine() | 0;
      var d = engine() >>> 0;

      return (
        zeroPad(a.toString(16), 8) +
        "-" +
        zeroPad((b & 0xffff).toString(16), 4) +
        "-" +
        zeroPad((((b >> 4) & 0x0fff) | 0x4000).toString(16), 4) +
        "-" +
        zeroPad(((c & 0x3fff) | 0x8000).toString(16), 4) +
        "-" +
        zeroPad(((c >> 4) & 0xffff).toString(16), 4) +
        zeroPad(d.toString(16), 8));
    };
  }());
  proto.uuid4 = function () {
    return Random.uuid4(this.engine);
  };

  Random.string = (function () {
    // has 2**x chars, for faster uniform distribution
    var DEFAULT_STRING_POOL = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_-";

    return function (pool) {
      if (pool == null) {
        pool = DEFAULT_STRING_POOL;
      }

      var length = pool.length;
      if (!length) {
        throw new Error("Expected pool not to be an empty string");
      }

      var distribution = Random.integer(0, length - 1);
      return function (engine, length) {
        var result = "";
        for (var i = 0; i < length; ++i) {
          var j = distribution(engine);
          result += pool.charAt(j);
        }
        return result;
      };
    };
  }());
  proto.string = function (length, pool) {
    return Random.string(pool)(this.engine, length);
  };

  Random.hex = (function () {
    var LOWER_HEX_POOL = "0123456789abcdef";
    var lowerHex = Random.string(LOWER_HEX_POOL);
    var upperHex = Random.string(LOWER_HEX_POOL.toUpperCase());

    return function (upper) {
      if (upper) {
        return upperHex;
      } else {
        return lowerHex;
      }
    };
  }());
  proto.hex = function (length, upper) {
    return Random.hex(upper)(this.engine, length);
  };

  Random.date = function (start, end) {
    if (!(start instanceof Date)) {
      throw new TypeError("Expected start to be a Date, got " + typeof start);
    } else if (!(end instanceof Date)) {
      throw new TypeError("Expected end to be a Date, got " + typeof end);
    }
    var distribution = Random.integer(start.getTime(), end.getTime());
    return function (engine) {
      return new Date(distribution(engine));
    };
  };
  proto.date = function (start, end) {
    return Random.date(start, end)(this.engine);
  };

  if (typeof define === "function" && define.amd) {
    define(function () {
      return Random;
    });
  } else if (typeof module !== "undefined" && typeof require === "function") {
    module.exports = Random;
  } else {
    (function () {
      var oldGlobal = root[GLOBAL_KEY];
      Random.noConflict = function () {
        root[GLOBAL_KEY] = oldGlobal;
        return this;
      };
    }());
    root[GLOBAL_KEY] = Random;
  }
}(this));
},{}],20:[function(require,module,exports){
'use strict';

var _asm = require('libsvm-js/asm');

var _asm2 = _interopRequireDefault(_asm);

var _mlDatasetIris = require('ml-dataset-iris');

var _mlDatasetIris2 = _interopRequireDefault(_mlDatasetIris);

var _mlRandomForest = require('ml-random-forest');

var _mlCrossValidation = require('ml-cross-validation');

var _mlCrossValidation2 = _interopRequireDefault(_mlCrossValidation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var data = _mlDatasetIris2.default.getNumbers();
var labels = _mlDatasetIris2.default.getClasses().map(function (elem) {
    return _mlDatasetIris2.default.getDistinctClasses().indexOf(elem);
});

var loss = function loss(expected, actual) {
    var incorrect = 0,
        len = expected.length;
    for (var i in expected) {
        if (expected[i] !== actual[i]) {
            incorrect++;
        }
    }
    return incorrect / len;
};

/**
 * SVM Test.
 */

console.log("Support Vector Machine");
console.log("======================");

var svm = new _asm2.default({
    kernel: _asm2.default.KERNEL_TYPES.RBF,
    type: _asm2.default.SVM_TYPES.C_SVC,
    gamma: 0.25,
    cost: 1,
    quiet: true
});

svm.train(data, labels);

var svmPredictions = svm.predict(data);
var svmCvPredictions = svm.crossValidation(data, labels, 5);

console.log("Loss for predictions: " + Math.round(loss(labels, svmPredictions) * 100) + "%");
console.log("Loss for crossvalidated predictions: " + Math.round(loss(labels, svmCvPredictions) * 100) + "%");

/**
 Random Forest
 */

console.log("======================");
console.log("Random Forest");
console.log("======================");

var rfOptions = {
    maxFeatures: 3,
    replacement: true,
    nEstimators: 100,
    useSampleBagging: true
};

var rf = new _mlRandomForest.RandomForestClassifier(rfOptions);
rf.train(data, labels);
var rfPredictions = rf.predict(data);

var confusionMatrix = _mlCrossValidation2.default.kFold(_mlRandomForest.RandomForestClassifier, data, labels, rfOptions, 10);
var accuracy = confusionMatrix.getAccuracy();

console.log("Predictions:");
console.log(rfPredictions.join(","));
console.log("\nLoss for predictions: " + Math.round(loss(labels, rfPredictions) * 100) + "%");
console.log("Loss for crossvalidated predictions: " + Math.round((1 - accuracy) * 100) + "%\n");
console.log(confusionMatrix);

},{"libsvm-js/asm":1,"ml-cross-validation":14,"ml-dataset-iris":16,"ml-random-forest":18}]},{},[20]);
