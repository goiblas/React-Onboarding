const style = document.createElement('style')
style.innerHTML = '.disable-scroll { overflow: hidden }'
document.getElementsByTagName('head')[0].appendChild(style)

export const disableScroll = () => document.body.classList.add("disable-scroll")
export const enableScroll = () => document.body.classList.add("disable-scroll")