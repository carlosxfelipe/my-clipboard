package com.myclipboard.clipboardx

import android.content.ClipData
import android.content.ClipboardManager
import android.content.Context
import com.facebook.react.bridge.*

class ClipboardXModule(private val reactContext: ReactApplicationContext)
  : ReactContextBaseJavaModule(reactContext) {

  override fun getName() = "ClipboardX"

  @ReactMethod
  fun setString(text: String, promise: Promise) {
    val cm = reactContext.getSystemService(Context.CLIPBOARD_SERVICE) as ClipboardManager
    cm.setPrimaryClip(ClipData.newPlainText("text", text))
    promise.resolve(null)
  }

  @ReactMethod
  fun getString(promise: Promise) {
    val cm = reactContext.getSystemService(Context.CLIPBOARD_SERVICE) as ClipboardManager
    val clip = cm.primaryClip
    val item = clip?.getItemAt(0)?.coerceToText(reactContext)?.toString() ?: ""
    promise.resolve(item)
  }
}
