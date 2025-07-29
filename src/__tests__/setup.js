// setup.js

// Catch and ignore any unhandled promise rejections in tests
process.on('unhandledRejection', () => {});

import { afterEach } from 'vitest'
import { cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/vitest'
import 'whatwg-fetch';
import {Blob} from 'node:buffer';

afterEach(() => {
    cleanup();
})
