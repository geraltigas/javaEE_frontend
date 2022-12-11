export const BASE_URL = 'http://localhost:8080'
export const TIMEOUT = 2000
export const PRINT = console.log
export const COLOR_LIST = ['#E8F3D6','#FCF9BE','#FFDCA9','#FAAB78','#FFE1E1','#90A17D','#829460','#EEEEEE']

export const LINE_STYLE = (item) => {
  return {
      width: 5,
      color: (() => {
          switch (item.type) {
              case "include":
                  return "#EA047E";
              case "associated":
                  return "#FF6D28";
              case "common":
                  return "#FCE700";
              case "preKnowledge":
                  return "#00F5FF";
              default:
                  return "#000000";
          }
      })()
  }
}

export const NODE_STYLE = (item,name) => {
    return {
        color: item.name === name ? "#ffaa00" : "#0090ff",
    }
}
