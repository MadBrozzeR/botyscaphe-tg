import type { MessageEntity, LinkPreviewOptions, InlineKeyboardMarkup, WebAppInfo } from './types.in';

export type MessageId = {
  message_id: number; // Unique message identifier. In specific instances (e.g., message containing a video sent to a big chat), the server might automatically schedule a message instead of sending it immediately. In such cases, this field will be 0 and the relevant message will be unusable until it is actually sent
};

export type InputFile = any;

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

export type ForwardMessageData = {
  chat_id: number | string; // Unique identifier for the target chat or username of the target channel (in the format @channelusername)
  message_thread_id?: number; // Optional	Unique identifier for the target message thread (topic) of the forum; for forum supergroups only
  from_chat_id: number | string; // Unique identifier for the chat where the original message was sent (or channel username in the format @channelusername)
  video_start_timestamp?: number; // Optional	New start timestamp for the forwarded video in the message
  disable_notification?: boolean; // Optional	Sends the message silently. Users will receive a notification with no sound.
  protect_content?: boolean; // Optional	Protects the contents of the forwarded message from forwarding and saving
  message_id: number; // Message identifier in the chat specified in from_chat_id
};

export type ForwardMessagesData = {
  chat_id: number | string; // Unique identifier for the target chat or username of the target channel (in the format @channelusername)
  message_thread_id?: number; // Optional	Unique identifier for the target message thread (topic) of the forum; for forum supergroups only
  from_chat_id: number | string; // Unique identifier for the chat where the original messages were sent (or channel username in the format @channelusername)
  message_ids: number[]; // A JSON-serialized list of 1-100 identifiers of messages in the chat from_chat_id to forward. The identifiers must be specified in a strictly increasing order.
  disable_notification?: boolean; // Optional	Sends the messages silently. Users will receive a notification with no sound.
  protect_content?: boolean; // Optional	Protects the contents of the forwarded messages from forwarding and saving
};

export type CopyMessageData = {
  chat_id: number | string; // Unique identifier for the target chat or username of the target channel (in the format @channelusername)
  message_thread_id?: number; // Optional	Unique identifier for the target message thread (topic) of the forum; for forum supergroups only
  from_chat_id: number | string; // Unique identifier for the chat where the original message was sent (or channel username in the format @channelusername)
  message_id: number; // Message identifier in the chat specified in from_chat_id
  video_start_timestamp?: number; // Optional	New start timestamp for the copied video in the message
  caption?: string; // Optional	New caption for media, 0-1024 characters after entities parsing. If not specified, the original caption is kept
  parse_mode?: string; // Optional	Mode for parsing entities in the new caption. See formatting options for more details.
  caption_entities?: MessageEntity[]; // Optional	A JSON-serialized list of special entities that appear in the new caption, which can be specified instead of parse_mode
  show_caption_above_media?: boolean; // Optional	Pass true, if the caption must be shown above the message media. Ignored if a new caption isn't specified.
  disable_notification?: boolean; // Optional	Sends the message silently. Users will receive a notification with no sound.
  protect_content?: boolean; // Optional	Protects the contents of the sent message from forwarding and saving
  allow_paid_broadcast?: boolean; // Optional	Pass true to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance
  reply_parameters?: ReplyParameters; // Optional	Description of the message to reply to
  reply_markup?: ReplyMarkup; // Optional	Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user
};

export type CopyMessagesData = {
  chat_id: number | string; // Unique identifier for the target chat or username of the target channel (in the format @channelusername)
  message_thread_id?: number; // Optional	Unique identifier for the target message thread (topic) of the forum; for forum supergroups only
  from_chat_id: number | string; // Unique identifier for the chat where the original messages were sent (or channel username in the format @channelusername)
  message_ids: number[]; // A JSON-serialized list of 1-100 identifiers of messages in the chat from_chat_id to copy. The identifiers must be specified in a strictly increasing order.
  disable_notification?: boolean; // Optional	Sends the messages silently. Users will receive a notification with no sound.
  protect_content?: boolean; // Optional	Protects the contents of the sent messages from forwarding and saving
  remove_caption?: boolean; // Optional	Pass true to copy the messages without their captions
};

export type SendPhotoData = {
  business_connection_id?: string; // Optional	Unique identifier of the business connection on behalf of which the message will be sent
  chat_id: number | string; // Unique identifier for the target chat or username of the target channel (in the format @channelusername)
  message_thread_id?: number; // Optional	Unique identifier for the target message thread (topic) of the forum; for forum supergroups only
  photo: InputFile | string; // Photo to send. Pass a file_id as String to send a photo that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get a photo from the Internet, or upload a new photo using multipart/form-data. The photo must be at most 10 MB in size. The photo's width and height must not exceed 10000 in total. Width and height ratio must be at most 20. More information on Sending Files »
  caption?: string; // Optional	Photo caption (may also be used when resending photos by file_id), 0-1024 characters after entities parsing
  parse_mode?: string; // Optional	Mode for parsing entities in the photo caption. See formatting options for more details.
  caption_entities?: MessageEntity[]; // Optional	A JSON-serialized list of special entities that appear in the caption, which can be specified instead of parse_mode
  show_caption_above_media?: boolean; // Optional	Pass true, if the caption must be shown above the message media
  has_spoiler?: boolean; // Optional	Pass true if the photo needs to be covered with a spoiler animation
  disable_notification?: boolean; // Optional	Sends the message silently. Users will receive a notification with no sound.
  protect_content?: boolean; // Optional	Protects the contents of the sent message from forwarding and saving
  allow_paid_broadcast?: boolean; // Optional	Pass true to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance
  message_effect_id?: string; // Optional	Unique identifier of the message effect to be added to the message; for private chats only
  reply_parameters?: ReplyParameters; // Optional	Description of the message to reply to
  reply_markup?: ReplyMarkup; // Optional	Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user
};

export type SendAudioData = {
  business_connection_id?: string; // Optional	Unique identifier of the business connection on behalf of which the message will be sent
  chat_id: number | string; // Unique identifier for the target chat or username of the target channel (in the format @channelusername)
  message_thread_id?: number; // Optional	Unique identifier for the target message thread (topic) of the forum; for forum supergroups only
  audio: InputFile | string; // Audio file to send. Pass a file_id as String to send an audio file that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get an audio file from the Internet, or upload a new one using multipart/form-data. More information on Sending Files »
  caption?: string; // Optional	Audio caption, 0-1024 characters after entities parsing
  parse_mode?: string; // Optional	Mode for parsing entities in the audio caption. See formatting options for more details.
  caption_entities?: MessageEntity[]; // Optional	A JSON-serialized list of special entities that appear in the caption, which can be specified instead of parse_mode
  duration?: number; // Optional	Duration of the audio in seconds
  performer?: string; // Optional	Performer
  title?: string; // Optional	Track name
  thumbnail?: InputFile | string; // Optional	Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass “attach://<file_attach_name>” if the thumbnail was uploaded using multipart/form-data under <file_attach_name>. More information on Sending Files »
  disable_notification?: boolean; // Optional	Sends the message silently. Users will receive a notification with no sound.
  protect_content?: boolean; // Optional	Protects the contents of the sent message from forwarding and saving
  allow_paid_broadcast?: boolean; // Optional	Pass true to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance
  message_effect_id?: string; // Optional	Unique identifier of the message effect to be added to the message; for private chats only
  reply_parameters?: ReplyParameters; // Optional	Description of the message to reply to
  reply_markup?: ReplyMarkup; // Optional	Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user
};
