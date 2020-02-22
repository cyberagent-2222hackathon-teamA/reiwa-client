import React from 'react';
import loadable, { LoadableComponent } from '@loadable/component';
import { Loading } from '../../components/templates/Loading';

type OneOfPageName = typeof PAGE_NAMES[number];
const PAGE_NAMES = ['Top', 'User', 'Login', 'Setting', 'MyPage'] as const;

const create = (name: OneOfPageName) =>
  loadable(() => import(/* webpackChunkName: "[request]" */ `../../containers/${name}`), {
    fallback: <Loading />,
  });

export const pages = PAGE_NAMES.reduce<Record<string, LoadableComponent<unknown>>>((acc, name) => {
  acc[name] = create(name);
  return acc;
}, {}) as Record<OneOfPageName, LoadableComponent<unknown>>;
