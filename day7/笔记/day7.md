# day7

## 使用mui的`tab-top-webview-main`完成分类滑动栏

### 兼容问题
1. 和 App.vue 中的 `router-link` 身上的类名 `mui-tab-item` 存在兼容性问题，导致tab栏失效，可以把`mui-tab-item`改名为`mui-tab-item1`，并复制相关的类样式，来解决这个问题；
```
    .mui-bar-tab .mui-tab-item1.mui-active {
      color: #007aff;
    }

    .mui-bar-tab .mui-tab-item1 {
      display: table-cell;
      overflow: hidden;
      width: 1%;
      height: 50px;
      text-align: center;
      vertical-align: middle;
      white-space: nowrap;
      text-overflow: ellipsis;
      color: #929292;
    }

    .mui-bar-tab .mui-tab-item1 .mui-icon {
      top: 3px;
      width: 24px;
      height: 24px;
      padding-top: 0;
      padding-bottom: 0;
    }

    .mui-bar-tab .mui-tab-item1 .mui-icon~.mui-tab-label {
      font-size: 11px;
      display: block;
      overflow: hidden;
      text-overflow: ellipsis;
    }
```
2. `tab-top-webview-main`组件第一次显示到页面中的时候，无法被滑动的解决方案：
 + 先导入 mui 的JS文件:
 ```
 import mui from '../../../lib/mui/js/mui.min.js'
 ```
 + 在 组件的 `mounted` 事件钩子中，注册 mui 的滚动事件：
 ```
 	mounted() {
    	// 需要在组件的 mounted 事件钩子中，注册 mui 的 scroll 滚动事件
        mui('.mui-scroll-wrapper').scroll({
          deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
        });
  	}
 ```
3. 滑动的时候报警告：`Unable to preventDefault inside passive event listener due to target being treated as passive. See https://www.chromestatus.com/features/5093566007214080`
```
解决方法，可以加上* { touch-action: none; } 这句样式去掉。
```
原因：（是chrome为了提高页面的滑动流畅度而新折腾出来的一个东西） http://www.cnblogs.com/pearl07/p/6589114.html
https://developer.mozilla.org/zh-CN/docs/Web/CSS/touch-action


## 移除严格模式
[babel-plugin-transform-remove-strict-mode](https://github.com/genify/babel-plugin-transform-remove-strict-mode)

## [vue-preview](https://github.com/LS1231/vue-preview)
一个Vue集成PhotoSwipe图片预览插件