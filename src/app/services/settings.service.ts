import { Injectable } from '@angular/core';

import { Settings } from '../models/Settings';

@Injectable()
export class SettingsService {
  setting: Settings = {
    allowRegistration : true,
    disableBalanceOnAdd: true,
    disableBalanceOnEdit: true
  };
  constructor() {
    if (localStorage.getItem('settings') != null) {
      this.setting = JSON.parse(localStorage.getItem('settings'));
    }
   }

  getSettings(): Settings {
    return this.setting;
  }

  changeSettings(settings: Settings) {
    localStorage.setItem('setting', JSON.stringify(settings));
  }

}
