// eslint-disable-next-line import/no-extraneous-dependencies
import {setupServer} from 'msw/node';

// eslint-disable-next-line import/no-extraneous-dependencies
export * from 'msw';

export const server = setupServer();
