import Foundation
import UIKit

@objc(ClipboardX)
class ClipboardX: NSObject {
  @objc(setString:resolver:rejecter:)
  func setString(_ text: NSString,
                 resolver resolve: RCTPromiseResolveBlock,
                 rejecter reject: RCTPromiseRejectBlock) {
    UIPasteboard.general.string = text as String
    resolve(nil)
  }

  @objc(getString:rejecter:)
  func getString(_ resolve: RCTPromiseResolveBlock,
                 rejecter reject: RCTPromiseRejectBlock) {
    resolve(UIPasteboard.general.string ?? "")
  }

  @objc static func requiresMainQueueSetup() -> Bool { true }
}
