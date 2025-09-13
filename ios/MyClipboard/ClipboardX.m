#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(ClipboardX, NSObject)
RCT_EXTERN_METHOD(setString:(NSString *)text
                  resolver:(RCTPromiseResolveBlock)resolve
                  rejecter:(RCTPromiseRejectBlock)reject)
RCT_EXTERN_METHOD(getString:(RCTPromiseResolveBlock)resolve
                  rejecter:(RCTPromiseRejectBlock)reject)
+ (BOOL)requiresMainQueueSetup;
@end
