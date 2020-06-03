/* eslint-disable eqeqeq */
/**
 * 时间日期格式化
 * @param format
 * @returns {*}
 */
const dateFormat = function(dateObj, format) {
  const date = {
    "M+": dateObj.getMonth() + 1,
    "d+": dateObj.getDate(),
    "h+": dateObj.getHours(),
    "m+": dateObj.getMinutes(),
    "s+": dateObj.getSeconds(),
    "q+": Math.floor((dateObj.getMonth() + 3) / 3),
    "S+": dateObj.getMilliseconds()
  };
  if (/(y+)/i.test(format)) {
    format = format.replace(RegExp.$1, (dateObj.getFullYear() + "").substr(4 - RegExp.$1.length));
  }
  for (const k in date) {
    if (new RegExp("(" + k + ")").test(format)) {
      format = format.replace(RegExp.$1, RegExp.$1.length === 1
        ? date[k] : ("00" + date[k]).substr(("" + date[k]).length));
    }
  }
  return format;
};

var OSS = require("ali-oss");

function getUUID() {
  return "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx".replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0;
    var v = c == "x" ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

export default {

  /**
   * 创建随机字符串
   * @param num
   * @returns {string}
   */
  randomString(num) {
    const chars = [ "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z" ];
    let res = "";
    for (let i = 0; i < num; i++) {
      var id = Math.ceil(Math.random() * 35);
      res += chars[id];
    }
    return res;
  },

  /**
   * 创建oss客户端对象
   * @returns {*}
   */
  createOssClient() {
    return new Promise((resolve, reject) => {
      const client = new OSS({
        region: "你自己的",
        accessKeyId: "你自己的",
        accessKeySecret: "你自己的",
        bucket: "你自己的"
      });
      resolve(client);
    });
  },
  /**
   * 文件上传
   * @param option 参考csdn: https://blog.csdn.net/qq_27626333/article/details/81463139
   */
  //    这里的我司的默认路径是test/ 有需要自行修改
  ossUploadFile(option, folder = "test/", successFn) {
    const file = option.file;
    const self = this;
    return new Promise((resolve, reject) => {
      const date = dateFormat(new Date(), "yyyyMMdd"); // 当前时间
      // eslint-disable-next-line no-unused-vars
      const dateTime = dateFormat(new Date(), "yyyyMMddhhmmss"); // 当前时间
      // eslint-disable-next-line no-unused-vars
      const randomStr = self.randomString(4); //  4位随机字符串
      const extensionName = file.name.substr(file.name.indexOf(".")); // 文件扩展名
      const fileName = folder + date + "/" + getUUID() + extensionName; // 文件名字（相对于根目录的路径 + 文件名）
      // 执行上传
      self.createOssClient().then(client => {
        // 异步上传,返回数据
        resolve({
          fileName: file.name,
          fileUrl: fileName
        });
        // 上传处理
        // 分片上传文件
        client.multipartUpload(fileName, file, {
          progress: function(p) {
            const e = {};
            e.percent = Math.floor(p * 100);
            option.onProgress(e);
          }
        }).then((val) => {
          console.info(val);
          if (val.res.statusCode === 200) {
            option.onSuccess(val);
            return val;
          } else {
            option.onError("上传失败");
          }
        }, err => {
          option.onError("上传失败");
          reject(err);
        });
      });
    });
  }
};
