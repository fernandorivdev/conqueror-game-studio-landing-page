export default function getScrollAnimation() {
	return ({
    offscreen: {
      y: 150,
      opacity: 0,
    },
    onscreen: ({duration = 3} = {}) =>  ({
      y: 0,
      opacity: 1,
      transition: {
      type: "spring",
      duration,
      }
    })
  })
}