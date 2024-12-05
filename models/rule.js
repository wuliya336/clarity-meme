import Meme from "./meme.js"
import Utils from "./utils.js"
import { Config } from "../components/index.js"
import { logger, segment } from "../components/Base/index.js"
import FormData from "form-data"

const Rule = {
  /**
     * 表情处理逻辑
     */
  async meme (e, memeKey, memeInfo, userText) {
    const { params_type } = memeInfo || {}

    const {
      min_texts,
      max_texts,
      min_images,
      max_images,
      default_texts,
      args_type
    } = params_type
    const formData = new FormData()
    let images = []
    let finalText = null
    let argsString = null

    try {
      /**
         * 针对仅图片类型表情作特殊处理
         */
      if (min_texts === 0 && max_texts === 0 && userText) {
        const isValidInput = /^@\d+$/.test(userText.trim())
        if (!isValidInput) {
        //   await e.reply('参数错误，请输入正确的参数格式')
          return false
        }
      }

      /**
         * 处理 args 参数类型表情
         */
      if (args_type !== null) {
        const argsMatch = userText.match(/#(.+)/)
        if (argsMatch) {
          const message = argsMatch[1].trim()
          if (message) {
            argsString = JSON.stringify({ message })
            formData.append("args", argsString)
          }
          userText = userText.replace(/#.+/, "").trim()
        }
      } else {
      }

      /**
         * 处理图片类型表情
         */
      if (!(min_images === 0 && max_images === 0)) {
        images = await Utils.getImage(e, userText)

        if (images.length < min_images) {
          const triggerAvatar = await Utils.getAvatar(e.user_id)
          if (triggerAvatar) images.unshift(triggerAvatar)
        }

        if (images.length < min_images) {
          return e.reply(`该表情至少需要 ${min_images} 张图片`, true)
        }

        images = images.slice(0, max_images)
        images.forEach((buffer, index) => {
          formData.append("images", buffer, `image${index}.jpg`)
        })
      }

      /**
         * 处理文本类型表情包
         */
      if (!(min_texts === 0 && max_texts === 0)) {
        if (userText) {
          finalText = userText
        } else if (default_texts && default_texts.length > 0) {
          const randomIndex = Math.floor(Math.random() * default_texts.length)
          finalText = default_texts[randomIndex]
        } else {
          finalText = e.sender.nickname || "未知"
        }

        if (!finalText || finalText.trim().length === 0) {
          return e.reply(`该表情至少需要 ${min_texts} 个文字描述`, true)
        }

        formData.append("texts", finalText)
      }

      /**
         * 检查是否包含所需的字段
         */
      if (min_images > 0 && images.length === 0) {
        return e.reply(`该表情至少需要 ${min_images} 张图片`, true)
      }

      if (min_texts > 0 && (!finalText || finalText.trim().length === 0)) {
        return e.reply(`该表情至少需要 ${min_texts} 个文字描述`, true)
      }

      /**
         * 发生成表情包
         */
      const endpoint = `memes/${memeKey}/`
      const result = await Meme.request(
        endpoint,
        formData,
        "POST",
        "arraybuffer"
      )

      if (Buffer.isBuffer(result)) {
        const base64Image = await Utils.bufferToBase64(result)
        await e.reply(
          segment.image(`base64://${base64Image}`),
          Config.meme.reply
        )
      } else {
        await e.reply(segment.image(result), Config.meme.reply)
      }

      return true
    } catch (error) {
      logger.error(`[星点表情] 表情生成失败: ${error.message}`)
      await e.reply(`生成表情包失败: ${error.message}`)
      return true
    }
  }
}

export default Rule
