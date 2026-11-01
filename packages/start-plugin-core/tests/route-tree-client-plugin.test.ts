import { describe, expect, test } from 'vitest'
import { tanStackStartRouter } from '../src/vite/start-router-plugin/plugin'
import type { Plugin } from 'vite'

describe('tanstack-start:route-tree-client-plugin', () => {
  test.each([
    '/app+test/src/routeTree.gen.ts',
    '/app (1)/[x]/routeTree.gen.ts',
  ])(
    'load filter matches the generated route tree path %s',
    (routeTreePath) => {
      const plugins = tanStackStartRouter(
        {} as any,
        () =>
          ({
            startConfig: { router: { generatedRouteTree: routeTreePath } },
          }) as any,
        {} as any,
      ).flat() as Array<Plugin>
      const plugin = plugins.find(
        (p) => p.name === 'tanstack-start:route-tree-client-plugin',
      )!
      ;(plugin.config as () => void).call({})

      const load = plugin.load as { filter: { id: { include: RegExp } } }
      expect(load.filter.id.include.test(routeTreePath)).toBe(true)
    },
  )
})
