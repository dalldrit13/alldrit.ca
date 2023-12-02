/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */
exports.shouldUpdateScroll = ({ routerProps: { location } }) => {
  if (location.hash) {
    return true
  }
  window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  return false
}
