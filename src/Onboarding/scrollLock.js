const style = document.createElement('style')
style.innerHTML = '._onboarding-disable-scroll { overflow: hidden }'
document.getElementsByTagName('head')[0].appendChild(style)

export const disableScroll = () => document.body.classList.add("_onboarding-disable-scroll")
export const enableScroll = () => document.body.classList.remove("_onboarding-disable-scroll")