"use client"
import React from 'react'
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
const Page = (params) => {
  console.log(params.params.id)
  const RoomId = params.params.id


  const meeting = async (pass) => {
    const appId = 1495914872;
    const serverSecret = "95917f37ee204956d86036363a9a1bc6"
    const kitToekn = ZegoUIKitPrebuilt.generateKitTokenForTest(appId,serverSecret, RoomId, Date.now(), "jhon doe",);

    const zc = ZegoUIKitPrebuilt.create(kitToekn);
console.log(zc)
    zc.joinRoom({
      container: pass,
      scenario: {
        mode: ZegoUIKitPrebuilt.GroupCall
      },
      showScreenSharingButton: true
    });

  }
  return (
    <div ref={meeting}>
      hello
    </div>
  )
}

export default Page
