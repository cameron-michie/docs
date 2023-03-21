export const DEFAULT_LANGUAGE = 'default';
export const DEFAULT_PREFERRED_LANGUAGE = 'javascript';
export const DEFAULT_PREFERRED_INTERFACE = 'rt';
export const SDK_INTERFACES = ['rt', 'rest'];
const TEXT_LANGUAGE = 'text';
const HYPERTEXT_LANGUAGE = 'html';
const YETANOTHERMARKUP_LANGUAGE = 'yaml';
const JSON_LANGUAGE = 'json';
const SH_LANGUAGE = 'sh';
export const BASH_LANGUAGE = 'bash';
const ZSH_LANGUAGE = 'zsh';
const CURL_LANGUAGE = 'curl';
const SHELL_LANGUAGES = [SH_LANGUAGE, BASH_LANGUAGE, ZSH_LANGUAGE, CURL_LANGUAGE];
export const IGNORED_LANGUAGES = [
  DEFAULT_LANGUAGE,
  TEXT_LANGUAGE,
  HYPERTEXT_LANGUAGE,
  YETANOTHERMARKUP_LANGUAGE,
  JSON_LANGUAGE,
  ...SHELL_LANGUAGES,
];
export const IGNORED_LANGUAGES_FOR_DISPLAY = [
  TEXT_LANGUAGE,
  HYPERTEXT_LANGUAGE,
  YETANOTHERMARKUP_LANGUAGE,
  JSON_LANGUAGE,
  ...SHELL_LANGUAGES,
];
