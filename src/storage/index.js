// storage封装
const STORAGE_KEY = 'mall'
export default {
  //存储值,module_name:模块名称如user  {"user":{"name":"jack","age":30}}
  setItem(key,value,module_name){
    if(module_name) {
      let val = this.getItem(module_name);  //{"userName":"jack"}
      val[key] = value;  //{"userName":"jack","abc",{"a":1}}
      this.setItem(module_name,val);
    }else {
      let val = this.getStorage();
      val[key] = value;
      window.sessionStorage.setItem(STORAGE_KEY,JSON.stringify(val));

    }
  },
  getItem(key,module_name){
    if(module_name) {
      let val = this.getItem(module_name);
      if(val) return val[key];
    }
    return this.getStorage()[key];
  },
  //获取整个数据
  getStorage(){
    return JSON.parse(window.sessionStorage.getItem(STORAGE_KEY) || '{}')
  },
  clear(key,module_name){
    let val = this.getStorage();
    if(module_name) {
      if(!val[module_name]) return;
      delete val[module_name][key];
    }else {
      delete val[key];
    }
    window.sessionStorage.setItem(STORAGE_KEY,JSON.stringify(val));
  }
}

//setItem('a',1);
//setItem('user',{a:1});
//setItem('abc',{a:1},'user');
// clear('a')
// clear('a','user')