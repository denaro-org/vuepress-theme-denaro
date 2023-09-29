/**
 * Options for @vuepress-denaro/vuepress-plugin-flowchart
 */
export interface FlowchartOptions {
  /**
   * setting open marker
   *
   * @default '@flowstart'
   */
  openMarker?: string
  /**
   * setting close marker
   *
   * @default '@flowend'
   */
  closeMarker?: string
}
