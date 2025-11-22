export default defineAppConfig({
  ui: {
    colors: {
      neutral: 'neutral',
    },
    breadcrumb: {

      slots: {
        root: 'relative min-w-0 rounded-b bg-neutral-100 h-9 px-6 flex items-center',
        list: 'gap-3 flex h-full items-center',
        link: 'group relative flex items-center gap-1.5 text-xs min-w-0 focus-visible:outline-primary font-mono',
      },
      variants: {
        active: {
          true: {
            link: 'text-neutral-700 font-normal transition',
          },
          false: {
            link: 'text-neutral-700 underline font-normal',
          },
        },
      },
    },
  },
})
