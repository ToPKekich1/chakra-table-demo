import compose from 'compose-function';

import { withChakra } from './with-chakra';
import { withHelmet } from './with-helmet';
import { withRouter } from './with-router';

/**
 * @provider Инициализирующая логика приложения
 * @remark Содержит:
 * - логику инициализации Chakra-UI (withChakra)
 * - логику инициализации react-helmet-async (withHelmet)
 * - логику инициализации роутера (withRouter)
 */
export const withProviders = compose(withHelmet, withChakra, withRouter);
