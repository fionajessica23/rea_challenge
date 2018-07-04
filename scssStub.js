const fakeStyles = new Proxy({}, {
  get: (target, name) => {
    if (!(name in target)) {
      return `mockClassName-${name}`;
    }
  },
});

export default fakeStyles;
