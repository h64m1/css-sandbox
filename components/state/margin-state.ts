import { atom, selector, useRecoilValue, useSetRecoilState } from 'recoil';

type MarginState = {
  all: number;
  horizontal: number;
  vertical: number;
  top: number;
  bottom: number;
  left: number;
  right: number;
};

const marginState = atom<MarginState>({
  key: 'marginState',
  default: {
    all: 0,
    horizontal: 0,
    vertical: 0,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
});

export const useMarginState = () => {
  return useRecoilValue(marginState);
};

const marginAllSelector = selector<number>({
  key: 'marginAllSelector',
  get: ({ get }) => get(marginState).all,
});

const marginVerticalSelector = selector<number>({
  key: 'marginVerticalSelector',
  get: ({ get }) => get(marginState).vertical,
});

const marginHorizontalSelector = selector<number>({
  key: 'marginHorizontalSelector',
  get: ({ get }) => get(marginState).horizontal,
});

const marginTopSelector = selector<number>({
  key: 'marginTopSelector',
  get: ({ get }) => get(marginState).top,
});

const marginBottomSelector = selector<number>({
  key: 'marginBottomSelector',
  get: ({ get }) => get(marginState).bottom,
});

const marginLeftSelector = selector<number>({
  key: 'marginLeftSelector',
  get: ({ get }) => get(marginState).left,
});

const marginRightSelector = selector<number>({
  key: 'marginRightSelector',
  get: ({ get }) => get(marginState).right,
});

type MarginSelectors = {
  useAll: () => number;
  useVertical: () => number;
  useHorizontal: () => number;
  useTop: () => number;
  useBottom: () => number;
  useLeft: () => number;
  useRight: () => number;
};

export const marginSelectors: MarginSelectors = {
  useAll: () => useRecoilValue(marginAllSelector),
  useVertical: () => useRecoilValue(marginVerticalSelector),
  useHorizontal: () => useRecoilValue(marginHorizontalSelector),
  useTop: () => useRecoilValue(marginTopSelector),
  useBottom: () => useRecoilValue(marginBottomSelector),
  useLeft: () => useRecoilValue(marginLeftSelector),
  useRight: () => useRecoilValue(marginRightSelector),
};

export const useSetMarginAll = () => {
  const setState = useSetRecoilState(marginState);

  const changeMargin = (value: number) => {
    setState((prev) => ({
      ...prev,
      all: value,
      top: value,
      bottom: value,
      left: value,
      right: value,
    }));
  };

  return { changeMargin };
};

export const useSetMarginVertical = () => {
  const setState = useSetRecoilState(marginState);

  const changeMargin = (value: number) => {
    setState((prev) => ({
      ...prev,
      vertical: value,
      top: value,
      bottom: value,
    }));
  };

  return { changeMargin };
};

export const useSetMarginHorizontal = () => {
  const setState = useSetRecoilState(marginState);

  const changeMargin = (value: number) => {
    setState((prev) => ({
      ...prev,
      horizontal: value,
      left: value,
      right: value,
    }));
  };

  return { changeMargin };
};

export const useSetMarginTop = () => {
  const setState = useSetRecoilState(marginState);

  const changeMargin = (value: number) => {
    setState((prev) => ({ ...prev, top: value }));
  };

  return { changeMargin };
};

export const useSetMarginBottom = () => {
  const setState = useSetRecoilState(marginState);

  const changeMargin = (value: number) => {
    setState((prev) => ({ ...prev, bottom: value }));
  };

  return { changeMargin };
};

export const useSetMarginLeft = () => {
  const setState = useSetRecoilState(marginState);

  const changeMargin = (value: number) => {
    setState((prev) => ({ ...prev, left: value }));
  };

  return { changeMargin };
};

export const useSetMarginRight = () => {
  const setState = useSetRecoilState(marginState);

  const changeMargin = (value: number) => {
    setState((prev) => ({ ...prev, right: value }));
  };

  return { changeMargin };
};
