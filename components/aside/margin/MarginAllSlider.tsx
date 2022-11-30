import { MarginSlider } from 'components/aside/margin/MarginSlider';
import {
  marginSelectors,
  useSetMarginAll,
} from 'components/state/margin-state';

export const MarginAllSlider = () => {
  const { useAll } = marginSelectors;
  const { changeMargin } = useSetMarginAll();

  return (
    <MarginSlider title={'all'} margin={useAll()} onChange={changeMargin} />
  );
};
