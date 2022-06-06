import Mergeable from 'deconstruct-merge'

export const mergeable = (plugin, mergeOptions, defaultOptions): any => {
  if (typeof plugin !== 'function') {
    const rawPlugin = plugin
    plugin = () => rawPlugin
  }

  const config = new Mergeable(mergeOptions).merge(defaultOptions)

  return (options, context) => {
    config.merge(options)
    return plugin(config.value(), context)
  }
}
