import { Constants } from "./utils/contants.models";

export interface AppSetting {
    availableLanguages: Array<{ code: string, name: string }>;
    defaultThemeMode: string;
    demoMode: boolean;
}

export const myAppSetting: AppSetting = {
    availableLanguages: [{
        code: 'en',
        name: 'English'
    }, {
        code: 'ar',
        name: 'عربى'
    }, {
        code: 'fr',
        name: 'Français'
    }, {
        code: 'es',
        name: 'Española'
    }, {
        code: 'id',
        name: 'Bahasa Indonesia'
    }, {
        code: 'pt',
        name: 'Português'
    }, {
        code: 'tr',
        name: 'Türk'
    }, {
        code: 'it',
        name: 'Italiana'
    }, {
        code: 'sw',
        name: 'Kiswahili'
    }, {
        code: 'de',
        name: 'Deutsch'
    }, {
        code: 'ro',
        name: 'Română'
    }],
    defaultThemeMode: Constants.THEME_MODE_LIGHT,
    demoMode: false
};

