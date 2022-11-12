import { useRouter } from 'next/router';
import { useCallback } from 'react';
import { PagePath, PagePathType } from 'components/nav/type';
import { pagesPath } from 'lib/$path';

export const usePageUrl = () => {
  const router = useRouter();

  const pushRoute = useCallback(
    (pagePath?: PagePathType) => {
      const url = getPagePath(pagePath);

      router.push(url);
    },
    [router],
  );

  return {
    pushRoute,
  };
};

const getPagePath = (pagePath: PagePathType | undefined) => {
  switch (pagePath) {
    case PagePath.margin:
      return pagesPath.styles.margin_padding.$url();

    default:
      return pagesPath.$url();
  }
};
