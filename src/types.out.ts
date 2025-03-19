import type { MessageEntity, LinkPreviewOptions, InlineKeyboardMarkup, WebAppInfo } from './types.in';

type KeyboardButtonRequestUsers = {
  request_id: number;
  user_is_bot?: boolean;
  user_is_premium?: boolean;
  max_quantity?: number;
  request_name?: boolean;
  request_username?: boolean;
  request_photo?: boolean;
};

type ChatAdministratorRights = {
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

type KeyboardButtonRequestChat = {
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

type KeyboardButtonPollType = {
  type?: string;
};

type KeyboardButton = {
  text: string;
  request_users?: KeyboardButtonRequestUsers;
  request_chat?: KeyboardButtonRequestChat;
  request_contact?: boolean;
  request_location?: boolean;
  request_poll?: KeyboardButtonPollType;
  web_app?: WebAppInfo;
};

type ReplyKeyboardMarkup = {
  keyboard: Array<KeyboardButton>;
  is_persistent?: boolean;
  resize_keyboard?: boolean;
  one_time_keyboard?: boolean;
  input_field_placeholder?: string;
  selective?: boolean;
};

type ReplyParameters = {
  message_id: number;
  chat_id?: number;
  allow_sending_without_reply?: boolean;
  quote?: string;
  quote_parse_mode?: string;
  quote_entities?: Array<MessageEntity>;
  quote_position?: number;
};

type ReplyKeyboardRemove = {
  remove_keyboard: true;
  selective?: boolean;
};

type ForceReply = {
  force_reply: true;
  input_field_placeholder?: string;
  selective?: boolean;
};

type ReplyMarkup = InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply;

// Info: https://core.telegram.org/bots/api#formatting-options
type ParseMode = 'MarkdownV2' | 'HTML' | 'Markdown';

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
