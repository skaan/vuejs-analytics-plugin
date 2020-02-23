// for each event function you can access $data, $props, $route, $store
export default {
  changeInput: ({ $data }: Vue) => ({
    search: $data.input
  }),
  clickButton: ({ $data, $store }: Vue) => ({
    search: $data.input,
    storeExample: $store.state.storeExample
  })
};
