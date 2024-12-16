import Settings from '../settings';

let customSettings;

beforeEach(() => {
    customSettings = new Settings();
});

test('should return default settings initially', () => {
    const expected = new Map([
        ['theme', 'dark'],
        ['music', 'trance'],
        ['difficulty', 'easy'],
    ]);
    expect(customSettings.settings).toEqual(expected);
});

test('should override settings with user settings', () => {
    customSettings.setSetting('theme', 'light');
    const expected = new Map([
        ['theme', 'light'],
        ['music', 'trance'],
        ['difficulty', 'easy'],
    ]);
    expect(customSettings.settings).toEqual(expected);
});

test('should store multiple user settings', () => {
    customSettings.setSetting('theme', 'gray');
    customSettings.setSetting('music', 'pop');
    const expected = new Map([
        ['theme', 'gray'],
        ['music', 'pop'],
        ['difficulty', 'easy'],
    ]);
    expect(customSettings.settings).toEqual(expected);
});