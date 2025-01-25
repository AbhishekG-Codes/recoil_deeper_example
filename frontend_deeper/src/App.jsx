import React, { useMemo } from 'react'
import {notificationAtom,messageAtom, totalAtomSelector} from './store/atoms/NotAtom'
// import { totalAtomSelector, allAtom } from './store/atoms/NotAtom'
import { useRecoilValue,RecoilRoot } from 'recoil'
export default function App() {
  return (
    <>
    <RecoilRoot>
      <Not />
    </RecoilRoot>
    </>
  )
}

function Not(){
  const notificationCount = useRecoilValue(notificationAtom)
  const messageCount = useRecoilValue(messageAtom)
  const totalCount = useRecoilValue(totalAtomSelector)


  // const totalCount = useMemo(()=>{
  //   return notificationCount + messageCount;
  // },[notificationCount,messageCount])    // Instead of selector you can this useMemo
  return(<>
    <button>Notification ({notificationCount >= 100?"99+":notificationCount})</button>
    <button>Messages ({messageCount >= 100 ?"99+":messageCount})</button>
    <button>My profile ({totalCount})</button>
  </>)

  // const allAtomItems = useRecoilValue(allAtom);
  // return(<>
  //   <button>Notification ({allAtomItems.notification >= 100?"99+":allAtomItems.notification})</button>
  //   <button>Messages ({allAtomItems.message >= 100 ?"99+":allAtomItems.message})</button>
  //   <button>My profile ({totalCount})</button>
  // </>)
}