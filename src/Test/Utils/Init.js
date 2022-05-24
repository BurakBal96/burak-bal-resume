import { LocalStorageMock } from './LocalStorageMock';

Object.defineProperty(window, 'localStorage', { value: LocalStorageMock });