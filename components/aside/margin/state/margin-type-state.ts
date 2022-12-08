import {
  getMarginType,
  MarginType,
} from 'components/aside/margin/state/marginType';
import { atom, useRecoilValue, useSetRecoilState } from 'recoil';

type MarginTypeState = {
  marginType: MarginType;
};

const marginTypeState = atom<MarginTypeState>({
  key: 'marginTypeState',
  default: { marginType: MarginType.all },
});

export const useMarginTypeState = () => {
  return useRecoilValue(marginTypeState);
};

export const useMarginTypeMutators = () => {
  const setState = useSetRecoilState(marginTypeState);

  const changeMarginType = (value?: string) => {
    const type = getMarginType(value);

    setState({ marginType: type });
  };

  return { changeMarginType };
};
