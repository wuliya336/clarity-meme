# 变更日志

## [1.6.3](https://github.com/wuliya336/clarity-meme/compare/v1.6.2...v1.6.3) (2025-01-03)

### 🐛 修复

* **components:** 修复使用外置渲染karin-puppeteer无法正常输出 ([b6b910d](https://github.com/wuliya336/clarity-meme/commit/b6b910df24c6bfbb7bbe14438daa2138b43136ff))
* **models/Code:** 修复在Miao-Yunzai下无法正常执行检查插件更新 ([53344f0](https://github.com/wuliya336/clarity-meme/commit/53344f0b06724e497d0fd688ebb40eb69eb488e5))

### ♻️ 重构

* **models:** 添加新的角色选择功能并优化描述文案 ([1b9dd6e](https://github.com/wuliya336/clarity-meme/commit/1b9dd6ec4b336fc6bd8fb5779b92f6f943113cc3))

### 🔄 持续集成

* 排除 GitHub Actions 机器人触发自动发布 ([49d3bc1](https://github.com/wuliya336/clarity-meme/commit/49d3bc1214bbe8a8d6062d5b42c5712dcbfbe510))

## [1.6.2](https://github.com/wuliya336/clarity-meme/compare/v1.6.1...v1.6.2) (2025-01-02)

### ♻️ 重构

* **config:** 更新 stats.yaml 配置键名 ([ee7f86f](https://github.com/wuliya336/clarity-meme/commit/ee7f86f33f0ee28d4206d0eab1a2186b81bb1849))
* **models:** 重构模型层代码 ([3a93f2f](https://github.com/wuliya336/clarity-meme/commit/3a93f2f32c33a3b25f8fac0078a9e308d5b09526))

### 🔄 持续集成

* 优化版本发布流程 ([5bcad35](https://github.com/wuliya336/clarity-meme/commit/5bcad353ee0bcc0efb68c1bfa1975bb238272493))

## [1.6.1](https://github.com/wuliya336/clarity-meme/compare/v1.6.0...v1.6.1) (2025-01-01)
### 🐛 修复

* 修复设置界面不正常显示统计设置 ([e5060778b53525bf0a797c765c0fda767ee7db6c](https://github.com/wuliya336/clarity-meme/commit/e5060778b53525bf0a797c765c0fda767ee7db6c))

## [1.6.0](https://github.com/wuliya336/clarity-meme/compare/v1.5.1...v1.6.0) (2025-01-01)

### ✨ 新功能

* 添加发布脚本并优化更新功能 ([2a022e5](https://github.com/wuliya336/clarity-meme/commit/2a022e5d329cf2bd4a75908496d6338d3384531d))

### 🐛 修复

* 修正获取变更内容的 awk 命令以正确提取 CHANGELOG ([e9e68bf](https://github.com/wuliya336/clarity-meme/commit/e9e68bfb293fe73f8cd908bb616d9b393aacc3ea))

### 🔄 持续集成

* 更新 CHANGELOG.md 格式并调整版本检查逻辑 ([9e853c3](https://github.com/wuliya336/clarity-meme/commit/9e853c383ffd33f8ab3d1acb6d237b7b099933d7))

## 1.5.0 
- 此版本已完成大部分功能 

## 1.4.0 ~ 1.4.6
- `新增` 功能`每日凌晨自动更新表情包数据`
- `优化` 更新推送逻辑
- `新增` 功能`表情调用统计`
- `优化` 头像获取逻辑以适配其他适配器
- 从此版本开始，更新表情包数据无需再重启`BOT`了
- `新增`并`完善` 表情包数据更新逻辑
- 修复 `引用消息` 在 `引用自身` 时获取错误
- 优化部分代码结构
- 修改传入艾特用户昵称触发方式

## 1.3.0
- 细节优化

## 1.2.0
- 修复并完善功能 `表情保护`
- 优化部分代码结构

## 1.1.1 ~ 1.2.0
- `新增` 表情 `企鹅摇头` 
- `修复` 部分已知 `bug`
- `完善` 模块 `获取昵称`
- `修复` 功能 `设置` 部分渲染
- `新增` 支持 `默认文本` 自动传入 `艾特用户`
- `修复` 模块 `引用消息图片获取`
- `新增` 插件表情包地址支持 `海外地区` 
- `优化` 默认表情包请求地址选择
- `新增` 设置 `表情保护` 
- `新增设置 `用户保护`
- `新增`设置 `默认表情`
- `完善` 使用 `请求` 不走 `代理`
- `新增` 设置 `禁用表情列表` 开关
- `新增` 设置 `名单限制` 开关
- `新增` 设置 `名单限制模式`
- `新增` 设置 `用户白名单`
- `新增` 设置 `用户黑名单`
- `优化` 插件 `表情包请求地址获取`
- `完善` 自定义地址的表情包数据
- `优化` 表情包数据获取
- `完善` 锅巴面板配置
- `新增` 设置 `表情黑名单`
- `优化` 部分 `引用消息` 场景
- `优化` 请求地址获取方法
- `新增` 支持获取引用消息

## 1.0.0 ~ 1.1.0
- 初版发布 
- 暂时只写了 `文本` 和 `图片` 类型表情兼容
- 新增搜索功能表情包 
- 优化设置模块
- 新增适配 `锅巴面板` 
- 优化部分模块
- 优化路径处理
- 新增自定义表情包功能 
- 优化统一加载逻辑
- 优化部分模块
- 新增预览图片功能 
- 优化列表渲染逻辑 
- 新增随机表情功能 
- 新增 args 参数支持 
- 新增默认文本方案 
- 优化不同类型表情包的规则
- 修复图片类型表情包匹配
