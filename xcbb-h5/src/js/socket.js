


function strToArray() {  //消息转字符串转数组方法
    var Method = {
        StringToUint32Array: function(str) {
            var arr = [];
            var arrbuf = new ArrayBuffer(4);
            var arrbufDaview = new Uint32Array(arrbuf, 0);
            arrbufDaview[0] = str;
            var zhhss = new Uint8Array(arrbuf);
            for(var i = 0; i < zhhss.length; i++) {
                arr.push(zhhss[i]);
            }
            return arr;
        },
        StringToUint16Array: function(str) {
            var arr = [];
            var arrbuf = new ArrayBuffer(2);
            var arrbufDaview = new Uint16Array(arrbuf, 0);
            arrbufDaview[0] = str;
            var zhhss = new Uint8Array(arrbuf);
            for(var i = 0; i < zhhss.length; i++) {
                arr.push(zhhss[i]);
            }
            return arr;
        },
        StringToUint8Array: function(str) {
            var arr = [];
            var arrbuf = new ArrayBuffer(1);
            var arrbufDaview = new Uint8Array(arrbuf, 0);
            arrbufDaview[0] = str;
            var zhhss = new Uint8Array(arrbuf);
            for(var i = 0; i < zhhss.length; i++) {
                arr.push(zhhss[i]);
            }
            return arr;
        },
        str2array: function(str) {
            var ch, st, re = [];
            re = re.concat(strToArray().StringToUint16Array(str.length));
            for(var i = 0; i < str.length; i++) {
                ch = str.charCodeAt(i);
                st = [];
                do {
                    st.push(ch & 0XFF);
                    ch = ch >> 8;
                }
                while (ch);
                re = re.concat(st.reverse());
            }
            return re;
        },
        str4array: function(str) {
            var ch, st, re = [];
            re = re.concat(strToArray().StringToUint32Array(str.length));
            for(var i = 0; i < str.length; i++) {
                ch = str.charCodeAt(i);
                st = [];
                do {
                    st.push(ch & 0XFF);
                    ch = ch >> 8;
                }
                while (ch);
                re = re.concat(st.reverse());
            }
            return re;
        },
        strarry: function(str) {
            var bytes = new Array();
            var re = [];
            var len, c;
            len = str.length;
            for(var i = 0; i < len; i++) {
                c = str.charCodeAt(i);
                if(c >= 0x010000 && c <= 0x10FFFF) {
                    bytes.push(((c >> 18) & 0x07) | 0xF0);
                    bytes.push(((c >> 12) & 0x3F) | 0x80);
                    bytes.push(((c >> 6) & 0x3F) | 0x80);
                    bytes.push((c & 0x3F) | 0x80);
                } else if(c >= 0x000800 && c <= 0x00FFFF) {
                    bytes.push(((c >> 12) & 0x0F) | 0xE0);
                    bytes.push(((c >> 6) & 0x3F) | 0x80);
                    bytes.push((c & 0x3F) | 0x80);
                } else if(c >= 0x000080 && c <= 0x0007FF) {
                    bytes.push(((c >> 6) & 0x1F) | 0xC0);
                    bytes.push((c & 0x3F) | 0x80);
                } else {
                    bytes.push(c & 0xFF);
                }
            }
            re = re.concat(strToArray().StringToUint32Array(bytes.length));
            re = re.concat(bytes);
            return re;
        },
        byteToString: function(arr) {
            if(typeof arr === 'string') {
                return arr;
            }
            var str = '',
                _arr = arr;
            for(var i = 0; i < _arr.length; i++) {
                var one = _arr[i].toString(2),
                    v = one.match(/^1+?(?=0)/);
                if(v && one.length == 8) {
                    var bytesLength = v[0].length;
                    var store = _arr[i].toString(2).slice(7 - bytesLength);
                    for(var st = 1; st < bytesLength; st++) {
                        store += _arr[st + i].toString(2).slice(2);
                    }
                    str += String.fromCharCode(parseInt(store, 2));
                    i += bytesLength - 1;
                } else {
                    str += String.fromCharCode(_arr[i]);
                }
            }
            return str;
        },
        

    }
    return Method;
}
function transform_u8(data, offset) {   //
        var zhuts = new Uint8Array(data, offset)
        var bodybuffer = new ArrayBuffer(zhuts.length);
        var o = new Uint8Array(bodybuffer);
        for(var i = 0; i < zhuts.length; ++i) {
          o[i] = zhuts[i]
        }
        return bodybuffer;
      }

function headPacking(length, uri, sid, resCode, tag) {
		var arr = [];
		var lengths = strToArray().StringToUint32Array(length);
		var uris = strToArray().StringToUint32Array(uri);
		var sids = strToArray().StringToUint16Array(sid);
		var resCodes = strToArray().StringToUint16Array(resCode);
        var tags = strToArray().StringToUint8Array(tag);
        
        arr = arr.concat(lengths,uris,sids,resCodes,tags);
		return arr;
    }   

   function untieHead(data, cb) {
		var res = {
			'length':typeConvert(data).u32(0, 4, 0, false),
			'uri':typeConvert(data).u32(4, 8, 0, false),
			'sid':typeConvert(data).u16(8, 4, 0, false),
			'rescode':typeConvert(data).u16(8, 4, 2, false),
			'tag':typeConvert(data).u8(9, 1, 0, false)
        };
		if(res.rescode != 200) {
			// console.log('untieHead rescode err:', res.rescode);
			cb(false);
		} else {
			cb(res);
		}
	}



	function typeConvert(data) {
        if(!data) {
            return;
        }
        var Method = {
            int32: function(offset, length, nums, cb) {
                var dv = new DataView(data, offset, length)
                var msgid = dv.getInt32(nums, true)
                typeof cb == "function" && cb(msgid);
                return msgid;
            },
            u32: function(offset, length, nums, cb) {
                var dv = new DataView(data, offset, length)
                var msgid = dv.getUint32(nums, true)
                typeof cb == "function" && cb(msgid);
                return msgid;
            },
            u16: function(offset, length, nums, cb) {
                var dv = new DataView(data, offset, length)
                var msgid = dv.getUint16(nums, true)
                typeof cb == "function" && cb(msgid);
                return msgid;
            },
            u8: function(offset, length, nums, cb) {
                var dv = new DataView(data, offset, length)
                var msgid = dv.getUint8(nums, true)
                typeof cb == "function" && cb(msgid);
                return msgid;
            },
            Uint8ArrayToString: function(fileData, cb) {
                /*var dataString = "";
                for (var i = 0; i < fileData.length; i++) {
                    dataString += String.fromCharCode(fileData[i]);
                }
                typeof cb == "function" && cb(dataString);
                return dataString*/

                if(typeof fileData === 'string') {
                    return fileData;
                }
                var str = '',
                    _arr = fileData;
                for(var i = 0; i < _arr.length; i++) {
                    var one = _arr[i].toString(2),
                        v = one.match(/^1+?(?=0)/);
                    if(v && one.length == 8) {
                        var bytesLength = v[0].length;
                        var store = _arr[i].toString(2).slice(7 - bytesLength);
                        for(var st = 1; st < bytesLength; st++) {
                            store += _arr[st + i].toString(2).slice(2);
                        }
                        str += String.fromCharCode(parseInt(store, 2));
                        i += bytesLength - 1;
                    } else {
                        str += String.fromCharCode(_arr[i]);
                    }
                }
                typeof cb == "function" && cb(str);
                return str;

            }
        }
        return Method;
    }    

export {
    strToArray,
    transform_u8,
    headPacking,
    untieHead,
    typeConvert
}