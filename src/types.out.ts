import type { MessageEntity, LinkPreviewOptions, InlineKeyboardMarkup, WebAppInfo } from './types.in';

export type TGBotResponse<T = any> = {
  ok: boolean;
  description?: string;
  result?: T;
  error_code?: number;
  parameters?: {
    migrate_to_chat_id?: number;
    retry_after?: number;
  };
};

export type KeyboardButtonRequestUsers = {
  request_id: number;
  user_is_bot?: boolean;
  user_is_premium?: boolean;
  max_quantity?: number;
  request_name?: boolean;
  request_username?: boolean;
  request_photo?: boolean;
};

export type ChatAdministratorRights = {
  is_anonymous: boolean;
  can_manage_chat: boolean;
  can_delete_messages: boolean;
  can_manage_video_chats: boolean;
  can_restrict_members: boolean;
  can_promote_members: boolean;
  can_change_info: boolean;
  can_invite_users: boolean;
  can_post_stories: boolean;
  can_edit_stories: boolean;
  can_delete_stories: boolean;
  can_post_messages?: boolean;
  can_edit_messages?: boolean;
  can_pin_messages?: boolean;
  can_manage_topics?: boolean;
};

export type KeyboardButtonRequestChat = {
  request_id: number;
  chat_is_channel: boolean;
  chat_is_forum?: boolean;
  chat_has_username?: boolean;
  chat_is_created?: boolean;
  user_administrator_rights?: ChatAdministratorRights;
  bot_administrator_rights?: ChatAdministratorRights;
  bot_is_member?: boolean;
  request_title?: boolean;
  request_username?: boolean;
  request_photo?: boolean;
};

export type KeyboardButtonPollType = {
  type?: string;
};

export type KeyboardButton = {
  text: string;
  request_users?: KeyboardButtonRequestUsers;
  request_chat?: KeyboardButtonRequestChat;
  request_contact?: boolean;
  request_location?: boolean;
  request_poll?: KeyboardButtonPollType;
  web_app?: WebAppInfo;
};

export type ReplyKeyboardMarkup = {
  keyboard: Array<Array<KeyboardButton>>;
  is_persistent?: boolean;
  resize_keyboard?: boolean;
  one_time_keyboard?: boolean;
  input_field_placeholder?: string;
  selective?: boolean;
};

export type ReplyParameters = {
  message_id: number;
  chat_id?: number;
  allow_sending_without_reply?: boolean;
  quote?: string;
  quote_parse_mode?: string;
  quote_entities?: Array<MessageEntity>;
  quote_position?: number;
};

export type ReplyKeyboardRemove = {
  remove_keyboard: true;
  selective?: boolean;
};

export type ForceReply = {
  force_reply: true;
  input_field_placeholder?: string;
  selective?: boolean;
};

export type BotCommand = {
  command: string;
  description: string;
};

export type BotCommandScopeDefault = {
  type: 'default';
};
export type BotCommandScopeAllPrivateChats = {
  type: 'all_private_chats';
};
export type BotCommandScopeAllGroupChats = {
  type: 'all_group_chats';
};
export type BotCommandScopeAllChatAdministrators = {
  type: 'all_chat_administrators';
};
export type BotCommandScopeChat = {
  type: 'chat';
  chat_id: number | string;
};
export type BotCommandScopeChatAdministrators = {
  type: 'chat_administrators';
  chat_id: number | string;
};
export type BotCommandScopeChatMember = {
  type: 'chat_member';
  chat_id: number | string;
  user_id: number;
};

export type BotCommandScope = BotCommandScopeDefault |
  BotCommandScopeAllPrivateChats |
  BotCommandScopeAllGroupChats |
  BotCommandScopeAllChatAdministrators |
  BotCommandScopeChat |
  BotCommandScopeChatAdministrators |
  BotCommandScopeChatMember;

export type MenuButtonCommands = {
  type: 'commands';
};
export type MenuButtonWebApp = {
  type: 'web_app';
  text: string;
  web_app: WebAppInfo;
};
export type MenuButtonDefault = {
  type: 'default';
};

export type MenuButton = MenuButtonCommands | MenuButtonWebApp | MenuButtonDefault;

export type ReplyMarkup = InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply;

// Info: https://core.telegram.org/bots/api#formatting-options
export type ParseMode = 'MarkdownV2' | 'HTML' | 'Markdown';

export type SendMessageData = {
  business_connection_id?: string;
  chat_id: number;
  message_thread_id?: number;
  text: string;
  parse_mode?: ParseMode;
  entities?: Array<MessageEntity>;
  link_preview_options?: LinkPreviewOptions;
  disable_notification?: boolean;
  protect_content?: boolean;
  allow_paid_broadcast?: boolean;
  message_effect_id?: string;
  reply_parameters?: ReplyParameters;
  reply_markup?: ReplyMarkup;
};

export type EditMessageTextData = {
  business_connection_id?: string;
  chat_id?: number | string;
  message_id?: number;
  inline_message_id?: string;
  text: string;
  parse_mode?: ParseMode;
  entities?: Array<MessageEntity>;
  link_preview_options?: LinkPreviewOptions;
  reply_markup?: ReplyMarkup;
};

export type EditMessageReplyMarkupData = {
  business_connection_id?: string;
  chat_id?: number | string;
  message_id?: number;
  inline_message_id?: string;
  reply_markup?: ReplyMarkup;
};

export type SetMyCommandsData = {
  commands: BotCommand[];
  scope?: BotCommandScope;
  language_code?: string;
};

export type DeleteMyCommandsData = {
  scope?: BotCommandScope;
  language_code?: string;
};

export type GetMyCommandsData = {
  scope?: BotCommandScope;
  language_code?: string;
};

export type SetChatMenuButtonData = {
  chat_id?: number;
  menu_button?: MenuButton;
};

export type GetChatMenuButtonData = {
  chat_id?: number;
};
