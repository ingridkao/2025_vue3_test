import { ref } from 'vue'
import { defineStore } from 'pinia'
// 不用做到local storage，不過有做的話可以加10分

export const useFavoriteStore = defineStore('favoriteStore', () => {
  const list = ref([])

  // 任務8. 加入我的最愛
  const addFav = (target) => {
    const targetID = target && target.id? target.id : null
    if (!targetID) return

    const isExist = list.value.find(item => item.id === targetID)
    if(isExist) return
    list.value.push(target)
  }

  // 移除我的最愛
  const removeFav = (target) => {
    const targetID = target && target.id? target.id : null
    if (!targetID) return

    const idx = list.value.findIndex(fav => fav.id == targetID)    
    if (idx >= 0){
      list.value.splice(idx, 1)
    }
  }

  return { list, addFav, removeFav }
})
