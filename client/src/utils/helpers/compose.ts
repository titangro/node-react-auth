export const compose = (hocs: any[]) => (Component: React.FC) => {
  let resultCompoent = Component;

  for (let i = hocs.length - 1; i > 0; i--) {
    resultCompoent = hocs[i](Component);
  }

  return resultCompoent;
};
