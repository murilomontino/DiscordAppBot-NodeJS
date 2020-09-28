"use strict";

var _bot = _interopRequireDefault(require("./botDiscord/bot"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Comunication = mainWindow => {
  const configuration = require('../database/config.json');

  const DiscordAppBot = new _bot.default(mainWindow.webContents, configuration);

  const { ...comunicationGetSet
  } = require('./comunication/comunicationGetterSetter')(DiscordAppBot);

  const { ...comunicationLoginLogout
  } = require('./comunication/comunicationLoginLogout')(DiscordAppBot, configuration);

  const { ...comunicationGuild
  } = require('./comunication/comunicationGuild')(DiscordAppBot);

  return { ...comunicationLoginLogout,
    ...comunicationGetSet,
    ...comunicationGuild
  };
};

module.exports = Comunication;