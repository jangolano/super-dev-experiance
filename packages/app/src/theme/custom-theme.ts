import {
    createBaseThemeOptions,
    createUnifiedTheme,
    genPageTheme,
    palettes,
    shapes,
} from '@backstage/theme';

export const customTheme = createUnifiedTheme({
    ...createBaseThemeOptions({
        palette: {
            ...palettes.light,
            primary: {
                main: '#0B2A36',
            },
            secondary: {
                main: '#2DB0BF',
            },
            error: {
                main: '#8c4351',
            },
            warning: {
                main: '#8f5e15',
            },
            info: {
                main: '#34548a',
            },
            success: {
                main: '#485e30',
            },
            background: {
                default: '#ffffff',
                paper: '#ffffff',
            },
            banner: {
                info: '#34548a',
                error: '#8c4351',
                text: '#343b58',
                link: '#565a6e',
            },
            errorBackground: '#8c4351',
            warningBackground: '#8f5e15',
            infoBackground: '#343b58',
            navigation: {
                background: '#000000',
                indicator: '#515459',
                color: '#ffffff',
                selectedColor: '#EFFF49',
            },
        },
    }),
    defaultPageTheme: 'home',
    fontFamily: 'Comic Sans MS',
    /* below drives the header colors */
    pageTheme: {
        home: genPageTheme({colors: ['#0B2A36', '#2DB0BF'], shape: shapes.wave}),
        documentation: genPageTheme({
            colors: ['#0B2A36', '#2DB0BF'],
            shape: shapes.wave2,
        }),
        tool: genPageTheme({colors: ['#0B2A36', '#2DB0BF'], shape: shapes.round}),
        service: genPageTheme({
            colors: ['#0B2A36', '#2DB0BF'],
            shape: shapes.wave,
        }),
        website: genPageTheme({
            colors: ['#0B2A36', '#2DB0BF'],
            shape: shapes.wave,
        }),
        library: genPageTheme({
            colors: ['#0B2A36', '#2DB0BF'],
            shape: shapes.wave,
        }),
        other: genPageTheme({colors: ['#0B2A36', '#2DB0BF'], shape: shapes.wave}),
        app: genPageTheme({colors: ['#0B2A36', '#2DB0BF'], shape: shapes.wave}),
        apis: genPageTheme({colors: ['#0B2A36', '#2DB0BF'], shape: shapes.wave}),
    },
});