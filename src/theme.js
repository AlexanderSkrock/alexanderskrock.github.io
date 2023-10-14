import { grommet } from 'grommet';
import { deepMerge } from 'grommet/utils';
import { hpe } from 'grommet-theme-hpe';

const theme = deepMerge(grommet, hpe);

export default theme;