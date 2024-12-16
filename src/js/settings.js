export default class Settings {
    constructor() {
        this.defaultSettings = new Map([
            ['theme', 'dark'],
            ['music', 'trance'],
            ['difficulty', 'easy'],
        ]);

        this.availableSettings = new Map([
            ['theme', ['dark', 'light', 'gray']],
            ['music', ['trance', 'pop', 'rock', 'chillout', 'off']],
            ['difficulty', ['easy', 'normal', 'hard', 'nightmare']],
        ]);
        
        this.userSettings = new Map();
    }
    
    setSetting(key, value) {
        this.userSettings.set(key, value);
    }
    
    get settings() {
        const combinedSettings = new Map(this.defaultSettings);
        this.userSettings.forEach((value, key) => {
            combinedSettings.set(key, value);
        });
        return combinedSettings;
    }
}