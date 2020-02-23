export default {
  clickAboutButton: ({ $data, $store }: Vue) => ({
    search: $data.input,
    storeAboutExample: $store.state.storeAboutExample
  })
};
