import Foundation
import React
import UIKit

@objc(ClipboardX)
class ClipboardX: NSObject {

  @objc(setString:resolver:rejecter:)
  func setString(
    _ text: String,
    resolver resolve: RCTPromiseResolveBlock,
    rejecter reject: RCTPromiseRejectBlock
  ) {
    UIPasteboard.general.string = text
    resolve(nil)
  }

  @objc(getString:rejecter:)
  func getString(
    _ resolve: RCTPromiseResolveBlock,
    rejecter reject: RCTPromiseRejectBlock
  ) {
    resolve(UIPasteboard.general.string ?? "")
  }

  @objc static func requiresMainQueueSetup() -> Bool { true }
}
