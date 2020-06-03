<template>
    <div>
        <quill-editor
            v-model="context"
            :ref="id"
            :options="editorOption"
            @input="$emit('input', $event)"
        >
        </quill-editor>

        <div class="upload" style='display:none'>
            <el-upload
                class="avatar-uploader"
                action
                ref="upload"
                name="img"
                :show-file-list="false"
                :auto-upload="true"
                :on-error="handleImageErrorQuill"
                :on-exceed="beyondFileQuill"
                :on-success="handleImageSuccessQuill"
                :http-request="fnUploadRequestQuill"
                :before-upload="beforeAvatarUploadQuill"
                :limit="limit"
                multiple
            >
                <i class="el-icon-plus avatar-uploader-icon"  :id="id+'Img'"></i>
            </el-upload>
        </div>
    </div>
</template>

<script>
import { quillEditor, Quill } from "vue-quill-editor";
import { container, ImageExtend } from "quill-image-extend-module";
import ImageResize from "quill-image-resize-module";
import oss from "@/utils/ossConfig.js";
const ossURL = "http://你自己的.com/";
Quill.register("modules/ImageResize", ImageResize);
Quill.register("modules/ImageExtend", ImageExtend);
export default {
  mounted() {
    this.context = this.value;
  },
  props: {
    value: {
      type: String
    },
    id: {
      type: String,
      default: "myQuillEditor" // 没有传值 默认就是myQuillEditor 有就是传过来的值
    }
  },
  data() {
    return {
      limit: 3,
      context: "",
      // 富文本框参数设置
      editorOption: {
        modules: {
          ImageExtend: {  // 如果不作设置，即{}  则依然开启复制粘贴功能且以base64插入
            name: "",  // 图片参数名
            size: 5,  // 可选参数 图片大小，单位为M，1M = 1024kb
            action: "",  // 服务器地址, 如果action为空，则采用base64插入图片
            // response 为一个函数用来获取服务器返回的具体图片地址
            // 例如服务器返回{code: 200; data:{ url: 'baidu.com'}} 则 return res.data.url
            response: (res) => { // 图片上传成功或错误 回调方法 成功后将图片地址return出去
              return res.filePath;
            },
            headers: (xhr) => { // 可选参数 设置请求头部
              //    xhr.setRequestHeader('Content-Type','multipart/form-data')
            },
            sizeError: () => {},  // 图片超过大小的回调
            start: () => {},  // 可选参数 自定义开始上传触发事件
            end: () => {},  // 可选参数 自定义上传结束触发的事件，无论成功或者失败
            error: () => {},  // 可选参数 上传失败触发的事件
            success: () => {
            },  // 可选参数  上传成功触发的事件
            change: (xhr, formData) => {
              // xhr.setRequestHeader('myHeader','myValue')
              // formData.append('token', 'myToken')
            } // 可选参数 每次选择图片触发，也可用来设置头部，但比headers多了一个参数，可设置formData
          },
          toolbar: {  // 如果不上传图片到服务器，此处不必配置
            container: container,  // container为工具栏，此次引入了全部工具栏，也可自行配置
            handlers: {
              image: function(value) {  // 劫持原来的图片点击按钮事件 自定义图片上传
                // 触发input框选择图片文件
                if (value) {
                  document.querySelector("#" + this.id + "Img").click();
                } else {
                  this.quill.format("image", false);
                }
              }.bind(this)
              // 或者你可以使用箭头函数
              // 'image':  (value) => {  // 劫持原来的图片点击按钮事件 自定义图片上传
              //    // 触发input框选择图片文件
              //    if (value) {
              //        document.querySelector('#' + this.id + 'Img').click();
              //    } else {
              ///        this.quill.format('image', false);
              //    }
              // }
            }
          },
          ImageResize: { // 调整上传过后图片大小配置。
            displayStyles: {
              backgroundColor: "black",
              border: "none",
              color: "white"
            },
            modules: [ "Resize", "DisplaySize", "Toolbar" ]
          }
        }
      }
    };
  },
  methods: {
    // * 上传失败的回调
    handleImageErrorQuill() {
      this.$message({ message: "上传失败", type: "error" });
    },
    // * 文件超出个数限制时的钩子
    beyondFileQuill(files, fileList) {
      this.$message({ message: "只能上传" + this.limit, type: "error" });
    },
    // * 上传成功
    handleImageSuccessQuill(response, file, fileList) {
      if (response) {
        this.imageUrl = ossURL + response.name;
        // 向富文本插入图片链接
        const quill = this.$refs[this.id].quill;
        const length = quill.getSelection().index;
        // 插入图片  res.info为服务器返回的图片地址
        //                 获取光标 设置属性    图片链接
        quill.insertEmbed(length, `image`, `${ossURL + response.name}`);
        quill.setSelection(length + 1); // 调整光标到最后
      }
    },
    // * 自定义上传覆盖默认上传
    async fnUploadRequestQuill(option) {
      oss.ossUploadFile(option, "image/");
    },
    // * 上传前对图片进行验证
    beforeAvatarUploadQuill(file) {
      const isJPG = file.type === "image/jpeg" || file.type === "image/png" || file.type === "image/gif";
      const isLtM = file.size / 1024 / 1024 < 20;
      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG，PNG，GIF 格式!");
      }
      if (!isLtM) {
        this.$message.error("上传头像图片大小不能超过 20MB!");
      }
      return isJPG && isLtM;
    }
  },
  watch: {
    // 页面
    value(newVAlue) {
      this.context = newVAlue;
    },
    context(newValue) {
      console.log(newValue);
    }
  },
  filters: {},
  computed: {},
  components: {
    quillEditor
  }
};
</script>
<style >
/* 我也不知道他为啥超出了界限 视频链接 */
.quill-editor .ql-editing{
  left: 0 !important;
}
</style>
