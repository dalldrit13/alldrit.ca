import { useEffect } from "react"

function useRocket() {
  useEffect(() => {
    if (
      "IntersectionObserver" in window &&
      "IntersectionObserverEntry" in window &&
      "intersectionRatio" in window.IntersectionObserverEntry.prototype &&
      document.querySelector("#fardown")
    ) {
      const onIntersection = (entries) => {
        if (entries.some(e => (e.isIntersecting))) {
          document.body.classList.add("scrolled");
        } else {
          document.body.classList.remove("scrolled");
        }
      }
      console.log("Observer Registered")
      let observer = new IntersectionObserver(onIntersection)
      observer.observe(document.querySelector('#fardown'));
    }
  }, [])
}
export default useRocket