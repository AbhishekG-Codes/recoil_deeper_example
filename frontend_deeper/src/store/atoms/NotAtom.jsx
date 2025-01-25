import {atom,selector} from "recoil";
import axios from "axios"

export const notificationAtom = atom({
    key:"notificationAtom",
    default: 101
})

export const messageAtom = atom({
    key:"messageAtom",
    default: 45
})

export const totalAtomSelector = selector({
    key:"totalAtomSelector",
    get:({get})=>{
        const notificationCount = get(notificationAtom);
        const messageCount = get(messageAtom);
        return notificationCount + messageCount;    
    }
})

// export const totalAtomSelector = selector({
//     key:"totalAtomSelector",
//     get:({get})=>{
//         const allData = get(allAtom);
//         return allData.notification + allData.message;    
//     }
// })

// export const allAtom = atom({
//     key:"allAtom",
//     default: selector({
//         key:"getSelector",
//         get: async ()=>{
//             const response = await axios.get("http://localhost:3000/")
//             return response.data
//         }  
//     })
// }) this as an issue of sideeffect you have to use useeffct in component for async data fetch