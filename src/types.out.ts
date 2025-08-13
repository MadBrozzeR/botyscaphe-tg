import type { True, Integer, Float } from './types.common';
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
  remove_keyboard: True;
  selective?: boolean;
};

export type ForceReply = {
  force_reply: True;
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

/**
* Represents a photo to be sent.
*/
export type InputMediaPhoto = {
  media: string; // File to send. Pass a file_id to send a file that exists on the Telegram servers (recommended), pass an HTTP URL for Telegram to get a file from the Internet, or pass “attach://<file_attach_name>” to upload a new one using multipart/form-data under <file_attach_name> name. More information on Sending Files »
  caption?: string; // Optional. Caption of the photo to be sent, 0-1024 characters after entities parsing
  parse_mode?: string; // Optional. Mode for parsing entities in the photo caption. See formatting options for more details.
  caption_entities?: MessageEntity[]; // Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode
  show_caption_above_media?: boolean; // Optional. Pass True, if the caption must be shown above the message media
  has_spoiler?: boolean; // Optional. Pass True if the photo needs to be covered with a spoiler animation
};

/**
* Represents a video to be sent.
*/
export type InputMediaVideo = {
  media: string; // File to send. Pass a file_id to send a file that exists on the Telegram servers (recommended), pass an HTTP URL for Telegram to get a file from the Internet, or pass “attach://<file_attach_name>” to upload a new one using multipart/form-data under <file_attach_name> name. More information on Sending Files »
  thumbnail?: string; // Optional. Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass “attach://<file_attach_name>” if the thumbnail was uploaded using multipart/form-data under <file_attach_name>. More information on Sending Files »
  cover?: string; // Optional. Cover for the video in the message. Pass a file_id to send a file that exists on the Telegram servers (recommended), pass an HTTP URL for Telegram to get a file from the Internet, or pass “attach://<file_attach_name>” to upload a new one using multipart/form-data under <file_attach_name> name. More information on Sending Files »
  start_timestamp?: Integer; // Optional. Start timestamp for the video in the message
  caption?: string; // Optional. Caption of the video to be sent, 0-1024 characters after entities parsing
  parse_mode?: string; // Optional. Mode for parsing entities in the video caption. See formatting options for more details.
  caption_entities?: MessageEntity[]; // Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode
  show_caption_above_media?: boolean; // Optional. Pass True, if the caption must be shown above the message media
  width?: Integer; // Optional. Video width
  height?: Integer; // Optional. Video height
  duration?: Integer; // Optional. Video duration in seconds
  supports_streaming?: boolean; // Optional. Pass True if the uploaded video is suitable for streaming
  has_spoiler?: boolean; // Optional. Pass True if the video needs to be covered with a spoiler animation
};

/**
* Represents an animation file (GIF or H.264/MPEG-4 AVC video without sound) to be sent.
*/
export type InputMediaAnimation = {
  media: string; // File to send. Pass a file_id to send a file that exists on the Telegram servers (recommended), pass an HTTP URL for Telegram to get a file from the Internet, or pass “attach://<file_attach_name>” to upload a new one using multipart/form-data under <file_attach_name> name. More information on Sending Files »
  thumbnail?: string; // Optional. Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass “attach://<file_attach_name>” if the thumbnail was uploaded using multipart/form-data under <file_attach_name>. More information on Sending Files »
  caption?: string; // Optional. Caption of the animation to be sent, 0-1024 characters after entities parsing
  parse_mode?: string; // Optional. Mode for parsing entities in the animation caption. See formatting options for more details.
  caption_entities?: MessageEntity[]; // Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode
  show_caption_above_media?: boolean; // Optional. Pass True, if the caption must be shown above the message media
  width?: Integer; // Optional. Animation width
  height?: Integer; // Optional. Animation height
  duration?: Integer; // Optional. Animation duration in seconds
  has_spoiler?: boolean; // Optional. Pass True if the animation needs to be covered with a spoiler animation
};

/**
* Represents an audio file to be treated as music to be sent.
*/
export type InputMediaAudio = {
  media: string; // File to send. Pass a file_id to send a file that exists on the Telegram servers (recommended), pass an HTTP URL for Telegram to get a file from the Internet, or pass “attach://<file_attach_name>” to upload a new one using multipart/form-data under <file_attach_name> name. More information on Sending Files »
  thumbnail?: string; // Optional. Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass “attach://<file_attach_name>” if the thumbnail was uploaded using multipart/form-data under <file_attach_name>. More information on Sending Files »
  caption?: string; // Optional. Caption of the audio to be sent, 0-1024 characters after entities parsing
  parse_mode?: string; // Optional. Mode for parsing entities in the audio caption. See formatting options for more details.
  caption_entities?: MessageEntity[]; // Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode
  duration?: Integer; // Optional. Duration of the audio in seconds
  performer?: string; // Optional. Performer of the audio
  title?: string; // Optional. Title of the audio
};

/**
* Represents a general file to be sent.
*/
export type InputMediaDocument = {
  media: string; // File to send. Pass a file_id to send a file that exists on the Telegram servers (recommended), pass an HTTP URL for Telegram to get a file from the Internet, or pass “attach://<file_attach_name>” to upload a new one using multipart/form-data under <file_attach_name> name. More information on Sending Files »
  thumbnail?: string; // Optional. Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass “attach://<file_attach_name>” if the thumbnail was uploaded using multipart/form-data under <file_attach_name>. More information on Sending Files »
  caption?: string; // Optional. Caption of the document to be sent, 0-1024 characters after entities parsing
  parse_mode?: string; // Optional. Mode for parsing entities in the document caption. See formatting options for more details.
  caption_entities?: MessageEntity[]; // Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode
  disable_content_type_detection?: boolean; // Optional. Disables automatic server-side content type detection for files uploaded using multipart/form-data. Always True, if the document is sent as part of an album.
};

export type InputMedia = InputMediaAudio | InputMediaPhoto | InputMediaVideo | InputMediaDocument | InputMediaAnimation;

/**
* The paid media to send is a photo.
*/
export type InputPaidMediaPhoto = {
  media: string; // File to send. Pass a file_id to send a file that exists on the Telegram servers (recommended), pass an HTTP URL for Telegram to get a file from the Internet, or pass “attach://<file_attach_name>” to upload a new one using multipart/form-data under <file_attach_name> name. More information on Sending Files »
};

/**
* The paid media to send is a video.
*/
export type InputPaidMediaVideo = {
  media: string; // File to send. Pass a file_id to send a file that exists on the Telegram servers (recommended), pass an HTTP URL for Telegram to get a file from the Internet, or pass “attach://<file_attach_name>” to upload a new one using multipart/form-data under <file_attach_name> name. More information on Sending Files »
  thumbnail?: string; // Optional. Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass “attach://<file_attach_name>” if the thumbnail was uploaded using multipart/form-data under <file_attach_name>. More information on Sending Files »
  cover?: string; // Optional. Cover for the video in the message. Pass a file_id to send a file that exists on the Telegram servers (recommended), pass an HTTP URL for Telegram to get a file from the Internet, or pass “attach://<file_attach_name>” to upload a new one using multipart/form-data under <file_attach_name> name. More information on Sending Files »
  start_timestamp?: Integer; // Optional. Start timestamp for the video in the message
  width?: Integer; // Optional. Video width
  height?: Integer; // Optional. Video height
  duration?: Integer; // Optional. Video duration in seconds
  supports_streaming?: boolean; // Optional. Pass True if the uploaded video is suitable for streaming
};

export type InputPaidMedia = InputPaidMediaPhoto | InputPaidMediaVideo;

/**
* This object contains information about one answer option in a poll to be sent.
*/
export type InputPollOption = {
  text_parse_mode?: string; // Optional. Mode for parsing entities in the text. See formatting options for more details. Currently, only custom emoji entities are allowed
  text_entities?: MessageEntity[]; // Optional. A JSON-serialized list of special entities that appear in the poll option text. It can be specified instead of text_parse_mode
};

/**
* Describes a task to add to a checklist.
*/
export type InputChecklistTask = {
  text: string; // Text of the task; 1-100 characters after entities parsing
  parse_mode?: string; // Optional. Mode for parsing entities in the text. See formatting options for more details.
  text_entities?: MessageEntity[]; // Optional. List of special entities that appear in the text, which can be specified instead of parse_mode. Currently, only bold, italic, underline, strikethrough, spoiler, and custom_emoji entities are allowed.
};

/**
* Describes a checklist to create.
*/
export type InputChecklist = {
  parse_mode?: string; // Optional. Mode for parsing entities in the title. See formatting options for more details.
  title_entities?: MessageEntity[]; // Optional. List of special entities that appear in the title, which can be specified instead of parse_mode. Currently, only bold, italic, underline, strikethrough, spoiler, and custom_emoji entities are allowed.
  tasks: InputChecklistTask[]; // List of 1-30 tasks in the checklist
  others_can_add_tasks?: boolean; // Optional. Pass True if other users can add tasks to the checklist
  others_can_mark_tasks_as_done?: boolean; // Optional. Pass True if other users can mark tasks as done or not done in the checklist
};

/**
* This object describes the type of a reaction. Currently, it can be one of
*/
export type ReactionType = ReactionTypeEmoji | ReactionTypeCustomEmoji | ReactionTypePaid;

/**
* The reaction is based on an emoji.
*/
export type ReactionTypeEmoji = {
  type: string; // Type of the reaction, always “emoji”
  emoji: string; // Reaction emoji. Currently, it can be one of &quot;&quot;, &quot;&quot;, &quot;&quot;, &quot;&quot;, &quot;&quot;, &quot;&quot;, &quot;&quot;, &quot;&quot;, &quot;&quot;, &quot;&quot;, &quot;&quot;, &quot;&quot;, &quot;&quot;, &quot;&quot;, &quot;&quot;, &quot;&quot;, &quot;&quot;, &quot;&quot;, &quot;&quot;, &quot;&quot;, &quot;&quot;, &quot;&quot;, &quot;&quot;, &quot;&quot;, &quot;&quot;, &quot;&quot;, &quot;&quot;, &quot;&quot;, &quot;&quot;, &quot;&quot;, &quot;&quot;, &quot;&quot;, &quot;&quot;, &quot;&quot;, &quot;&quot;, &quot;&quot;, &quot;&quot;, &quot;&quot;, &quot;&quot;, &quot;&quot;, &quot;&quot;, &quot;&quot;, &quot;&quot;, &quot;&quot;, &quot;&quot;, &quot;&quot;, &quot;&quot;, &quot;&quot;, &quot;&quot;, &quot;&quot;, &quot;&quot;, &quot;&quot;, &quot;&quot;, &quot;&quot;, &quot;&quot;, &quot;&quot;, &quot;&quot;, &quot;&quot;, &quot;&quot;, &quot;&quot;, &quot;&quot;, &quot;&quot;, &quot;&quot;, &quot;&quot;, &quot;&quot;, &quot;&quot;, &quot;&quot;, &quot;&quot;, &quot;&quot;, &quot;&quot;, &quot;&quot;, &quot;&quot;, &quot;&quot;
};

/**
* The reaction is based on a custom emoji.
*/
export type ReactionTypeCustomEmoji = {
  type: string; // Type of the reaction, always “custom_emoji”
  custom_emoji_id: string; // Custom emoji identifier
};

/**
* The reaction is paid.
*/
export type ReactionTypePaid = {
  type: string; // Type of the reaction, always “paid”
};

/**
* Describes actions that a non-administrator user is allowed to take in a chat.
*/
export type ChatPermissions = {
  can_send_messages?: boolean; // Optional. True, if the user is allowed to send text messages, contacts, giveaways, giveaway winners, invoices, locations and venues
  can_send_audios?: boolean; // Optional. True, if the user is allowed to send audios
  can_send_documents?: boolean; // Optional. True, if the user is allowed to send documents
  can_send_photos?: boolean; // Optional. True, if the user is allowed to send photos
  can_send_videos?: boolean; // Optional. True, if the user is allowed to send videos
  can_send_video_notes?: boolean; // Optional. True, if the user is allowed to send video notes
  can_send_voice_notes?: boolean; // Optional. True, if the user is allowed to send voice notes
  can_send_polls?: boolean; // Optional. True, if the user is allowed to send polls and checklists
  can_send_other_messages?: boolean; // Optional. True, if the user is allowed to send animations, games, stickers and use inline bots
  can_add_web_page_previews?: boolean; // Optional. True, if the user is allowed to add web page previews to their messages
  can_change_info?: boolean; // Optional. True, if the user is allowed to change the chat title, photo and other settings. Ignored in public supergroups
  can_invite_users?: boolean; // Optional. True, if the user is allowed to invite new users to the chat
  can_pin_messages?: boolean; // Optional. True, if the user is allowed to pin messages. Ignored in public supergroups
  can_manage_topics?: boolean; // Optional. True, if the user is allowed to create forum topics. If omitted defaults to the value of can_pin_messages
};

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

/**
* Use this method to send general files. On success, the sent Message is returned. Bots can currently send files of any
* type of up to 50 MB in size, this limit may be changed in the future.
*/
export type SendDocumentData = {
  chat_id: number | string; // Unique identifier for the target chat or username of the target channel (in the format @channelusername)
  message_thread_id?: number; // Unique identifier for the target message thread (topic) of the forum; for forum supergroups only
  document: InputFile | string; // File to send. Pass a file_id as String to send a file that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get a file from the Internet, or upload a new one using multipart/form-data. More information on Sending Files »
  thumbnail?: InputFile | string; // Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass “attach://<file_attach_name>” if the thumbnail was uploaded using multipart/form-data under <file_attach_name>. More information on Sending Files »
  caption?: string; // Document caption (may also be used when resending documents by file_id), 0-1024 characters after entities parsing
  parse_mode?: string; // Mode for parsing entities in the document caption. See formatting options for more details.
  caption_entities?: MessageEntity[]; // A JSON-serialized list of special entities that appear in the caption, which can be specified instead of parse_mode
  disable_content_type_detection?: boolean; // Disables automatic server-side content type detection for files uploaded using multipart/form-data
  disable_notification?: boolean; // Sends the message silently. Users will receive a notification with no sound.
  protect_content?: boolean; // Protects the contents of the sent message from forwarding and saving
  allow_paid_broadcast?: boolean; // Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance
  message_effect_id?: string; // Unique identifier of the message effect to be added to the message; for private chats only
  reply_parameters?: ReplyParameters; // Description of the message to reply to
  reply_markup?: ReplyMarkup; // Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user
};

/**
* Use this method to send video files, Telegram clients support MPEG4 videos (other formats may be sent as Document). On
* success, the sent Message is returned. Bots can currently send video files of up to 50 MB in size, this limit may be
* changed in the future.
*/
export type SendVideoData = {
  chat_id: number | string; // Unique identifier for the target chat or username of the target channel (in the format @channelusername)
  message_thread_id?: number; // Unique identifier for the target message thread (topic) of the forum; for forum supergroups only
  video: InputFile | string; // Video to send. Pass a file_id as String to send a video that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get a video from the Internet, or upload a new video using multipart/form-data. More information on Sending Files »
  duration?: number; // Duration of sent video in seconds
  width?: number; // Video width
  height?: number; // Video height
  thumbnail?: InputFile | string; // Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass “attach://<file_attach_name>” if the thumbnail was uploaded using multipart/form-data under <file_attach_name>. More information on Sending Files »
  cover?: InputFile | string; // Cover for the video in the message. Pass a file_id to send a file that exists on the Telegram servers (recommended), pass an HTTP URL for Telegram to get a file from the Internet, or pass “attach://<file_attach_name>” to upload a new one using multipart/form-data under <file_attach_name> name. More information on Sending Files »
  start_timestamp?: number; // Start timestamp for the video in the message
  caption?: string; // Video caption (may also be used when resending videos by file_id), 0-1024 characters after entities parsing
  parse_mode?: string; // Mode for parsing entities in the video caption. See formatting options for more details.
  caption_entities?: MessageEntity[]; // A JSON-serialized list of special entities that appear in the caption, which can be specified instead of parse_mode
  show_caption_above_media?: boolean; // Pass True, if the caption must be shown above the message media
  has_spoiler?: boolean; // Pass True if the video needs to be covered with a spoiler animation
  supports_streaming?: boolean; // Pass True if the uploaded video is suitable for streaming
  disable_notification?: boolean; // Sends the message silently. Users will receive a notification with no sound.
  protect_content?: boolean; // Protects the contents of the sent message from forwarding and saving
  allow_paid_broadcast?: boolean; // Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance
  message_effect_id?: string; // Unique identifier of the message effect to be added to the message; for private chats only
  reply_parameters?: ReplyParameters; // Description of the message to reply to
  reply_markup?: ReplyMarkup; // Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user
};

/**
* Use this method to send animation files (GIF or H.264/MPEG-4 AVC video without sound). On success, the sent Message is
* returned. Bots can currently send animation files of up to 50 MB in size, this limit may be changed in the future.
*/
export type SendAnimationData = {
  chat_id: Integer | string; // Unique identifier for the target chat or username of the target channel (in the format @channelusername)
  message_thread_id?: Integer; // Unique identifier for the target message thread (topic) of the forum; for forum supergroups only
  animation: InputFile | string; // Animation to send. Pass a file_id as String to send an animation that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get an animation from the Internet, or upload a new animation using multipart/form-data. More information on Sending Files »
  duration?: Integer; // Duration of sent animation in seconds
  width?: Integer; // Animation width
  height?: Integer; // Animation height
  thumbnail?: InputFile | string; // Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass “attach://<file_attach_name>” if the thumbnail was uploaded using multipart/form-data under <file_attach_name>. More information on Sending Files »
  caption?: string; // Animation caption (may also be used when resending animation by file_id), 0-1024 characters after entities parsing
  parse_mode?: string; // Mode for parsing entities in the animation caption. See formatting options for more details.
  caption_entities?: MessageEntity[]; // A JSON-serialized list of special entities that appear in the caption, which can be specified instead of parse_mode
  show_caption_above_media?: boolean; // Pass True, if the caption must be shown above the message media
  has_spoiler?: boolean; // Pass True if the animation needs to be covered with a spoiler animation
  disable_notification?: boolean; // Sends the message silently. Users will receive a notification with no sound.
  protect_content?: boolean; // Protects the contents of the sent message from forwarding and saving
  allow_paid_broadcast?: boolean; // Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance
  message_effect_id?: string; // Unique identifier of the message effect to be added to the message; for private chats only
  reply_parameters?: ReplyParameters; // Description of the message to reply to
  reply_markup?: ReplyMarkup; // Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user
};

/**
* Use this method to send audio files, if you want Telegram clients to display the file as a playable voice message. For
* this to work, your audio must be in an .OGG file encoded with OPUS, or in .MP3 format, or in .M4A format (other
* formats may be sent as Audio or Document). On success, the sent Message is returned. Bots can currently send voice
* messages of up to 50 MB in size, this limit may be changed in the future.
*/
export type SendVoiceData = {
  chat_id: Integer | string; // Unique identifier for the target chat or username of the target channel (in the format @channelusername)
  message_thread_id?: Integer; // Unique identifier for the target message thread (topic) of the forum; for forum supergroups only
  voice: InputFile | string; // Audio file to send. Pass a file_id as String to send a file that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get a file from the Internet, or upload a new one using multipart/form-data. More information on Sending Files »
  caption?: string; // Voice message caption, 0-1024 characters after entities parsing
  parse_mode?: string; // Mode for parsing entities in the voice message caption. See formatting options for more details.
  caption_entities?: MessageEntity[]; // A JSON-serialized list of special entities that appear in the caption, which can be specified instead of parse_mode
  duration?: Integer; // Duration of the voice message in seconds
  disable_notification?: boolean; // Sends the message silently. Users will receive a notification with no sound.
  protect_content?: boolean; // Protects the contents of the sent message from forwarding and saving
  allow_paid_broadcast?: boolean; // Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance
  message_effect_id?: string; // Unique identifier of the message effect to be added to the message; for private chats only
  reply_parameters?: ReplyParameters; // Description of the message to reply to
  reply_markup?: ReplyMarkup; // Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user
};

/**
* As of v.4.0, Telegram clients support rounded square MPEG4 videos of up to 1 minute long. Use this method to send
* video messages. On success, the sent Message is returned.
*/
export type SendVideoNoteData = {
  chat_id: Integer | string; // Unique identifier for the target chat or username of the target channel (in the format @channelusername)
  message_thread_id?: Integer; // Unique identifier for the target message thread (topic) of the forum; for forum supergroups only
  video_note: InputFile | string; // Video note to send. Pass a file_id as String to send a video note that exists on the Telegram servers (recommended) or upload a new video using multipart/form-data. More information on Sending Files ». Sending video notes by a URL is currently unsupported
  duration?: Integer; // Duration of sent video in seconds
  length?: Integer; // Video width and height, i.e. diameter of the video message
  thumbnail?: InputFile | string; // Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass “attach://<file_attach_name>” if the thumbnail was uploaded using multipart/form-data under <file_attach_name>. More information on Sending Files »
  disable_notification?: boolean; // Sends the message silently. Users will receive a notification with no sound.
  protect_content?: boolean; // Protects the contents of the sent message from forwarding and saving
  allow_paid_broadcast?: boolean; // Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance
  message_effect_id?: string; // Unique identifier of the message effect to be added to the message; for private chats only
  reply_parameters?: ReplyParameters; // Description of the message to reply to
  reply_markup?: ReplyMarkup; // Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user
};

/**
* Use this method to send paid media. On success, the sent Message is returned.
*/
export type SendPaidMediaData = {
  chat_id: Integer | string; // Unique identifier for the target chat or username of the target channel (in the format @channelusername). If the chat is a channel, all Telegram Star proceeds from this media will be credited to the chat's balance. Otherwise, they will be credited to the bot's balance.
  star_count: Integer; // The number of Telegram Stars that must be paid to buy access to the media; 1-10000
  media: InputPaidMedia[]; // A JSON-serialized array describing the media to be sent; up to 10 items
  payload?: string; // Bot-defined paid media payload, 0-128 bytes. This will not be displayed to the user, use it for your internal processes.
  caption?: string; // Media caption, 0-1024 characters after entities parsing
  parse_mode?: string; // Mode for parsing entities in the media caption. See formatting options for more details.
  caption_entities?: MessageEntity[]; // A JSON-serialized list of special entities that appear in the caption, which can be specified instead of parse_mode
  show_caption_above_media?: boolean; // Pass True, if the caption must be shown above the message media
  disable_notification?: boolean; // Sends the message silently. Users will receive a notification with no sound.
  protect_content?: boolean; // Protects the contents of the sent message from forwarding and saving
  allow_paid_broadcast?: boolean; // Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance
  reply_parameters?: ReplyParameters; // Description of the message to reply to
  reply_markup?: ReplyMarkup; // Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user
};

/**
* Use this method to send a group of photos, videos, documents or audios as an album. Documents and audio files can be
* only grouped in an album with messages of the same type. On success, an array of Message objects that were sent is
* returned.
*/
export type SendMediaGroupData = {
  chat_id: Integer | string; // Unique identifier for the target chat or username of the target channel (in the format @channelusername)
  message_thread_id?: Integer; // Unique identifier for the target message thread (topic) of the forum; for forum supergroups only
  media: Array<InputMediaAudio | InputMediaDocument | InputMediaPhoto | InputMediaVideo>; // A JSON-serialized array describing messages to be sent, must include 2-10 items
  disable_notification?: boolean; // Sends messages silently. Users will receive a notification with no sound.
  protect_content?: boolean; // Protects the contents of the sent messages from forwarding and saving
  allow_paid_broadcast?: boolean; // Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance
  message_effect_id?: string; // Unique identifier of the message effect to be added to the message; for private chats only
  reply_parameters?: ReplyParameters; // Description of the message to reply to
};

/**
* Use this method to send point on the map. On success, the sent Message is returned.
*/
export type SendLocationData = {
  chat_id: Integer | string; // Unique identifier for the target chat or username of the target channel (in the format @channelusername)
  message_thread_id?: Integer; // Unique identifier for the target message thread (topic) of the forum; for forum supergroups only
  latitude: Float; // Latitude of the location
  longitude: Float; // Longitude of the location
  horizontal_accuracy?: Float; // The radius of uncertainty for the location, measured in meters; 0-1500
  live_period?: Integer; // Period in seconds during which the location will be updated (see Live Locations, should be between 60 and 86400, or 0x7FFFFFFF for live locations that can be edited indefinitely.
  heading?: Integer; // For live locations, a direction in which the user is moving, in degrees. Must be between 1 and 360 if specified.
  proximity_alert_radius?: Integer; // For live locations, a maximum distance for proximity alerts about approaching another chat member, in meters. Must be between 1 and 100000 if specified.
  disable_notification?: boolean; // Sends the message silently. Users will receive a notification with no sound.
  protect_content?: boolean; // Protects the contents of the sent message from forwarding and saving
  allow_paid_broadcast?: boolean; // Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance
  message_effect_id?: string; // Unique identifier of the message effect to be added to the message; for private chats only
  reply_parameters?: ReplyParameters; // Description of the message to reply to
  reply_markup?: ReplyMarkup; // Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user
};

/**
* Use this method to send information about a venue. On success, the sent Message is returned.
*/
export type SendVenueData = {
  chat_id: Integer | string; // Unique identifier for the target chat or username of the target channel (in the format @channelusername)
  message_thread_id?: Integer; // Unique identifier for the target message thread (topic) of the forum; for forum supergroups only
  latitude: Float; // Latitude of the venue
  longitude: Float; // Longitude of the venue
  title: string; // Name of the venue
  address: string; // Address of the venue
  foursquare_id?: string; // Foursquare identifier of the venue
  foursquare_type?: string; // Foursquare type of the venue, if known. (For example, “arts_entertainment/default”, “arts_entertainment/aquarium” or “food/icecream”.)
  google_place_id?: string; // Google Places identifier of the venue
  google_place_type?: string; // Google Places type of the venue. (See supported types.)
  disable_notification?: boolean; // Sends the message silently. Users will receive a notification with no sound.
  protect_content?: boolean; // Protects the contents of the sent message from forwarding and saving
  allow_paid_broadcast?: boolean; // Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance
  message_effect_id?: string; // Unique identifier of the message effect to be added to the message; for private chats only
  reply_parameters?: ReplyParameters; // Description of the message to reply to
  reply_markup?: ReplyMarkup; // Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user
};

/**
* Use this method to send phone contacts. On success, the sent Message is returned.
*/
export type SendContactData = {
  chat_id: Integer | string; // Unique identifier for the target chat or username of the target channel (in the format @channelusername)
  message_thread_id?: Integer; // Unique identifier for the target message thread (topic) of the forum; for forum supergroups only
  phone_number: string; // Contact's phone number
  first_name: string; // Contact's first name
  last_name?: string; // Contact's last name
  vcard?: string; // Additional data about the contact in the form of a vCard, 0-2048 bytes
  disable_notification?: boolean; // Sends the message silently. Users will receive a notification with no sound.
  protect_content?: boolean; // Protects the contents of the sent message from forwarding and saving
  allow_paid_broadcast?: boolean; // Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance
  message_effect_id?: string; // Unique identifier of the message effect to be added to the message; for private chats only
  reply_parameters?: ReplyParameters; // Description of the message to reply to
  reply_markup?: ReplyMarkup; // Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user
};

/**
* Use this method to send a native poll. On success, the sent Message is returned.
*/
export type SendPollData = {
  chat_id: Integer | string; // Unique identifier for the target chat or username of the target channel (in the format @channelusername)
  message_thread_id?: Integer; // Unique identifier for the target message thread (topic) of the forum; for forum supergroups only
  question: string; // Poll question, 1-300 characters
  question_parse_mode?: string; // Mode for parsing entities in the question. See formatting options for more details. Currently, only custom emoji entities are allowed
  question_entities?: MessageEntity[]; // A JSON-serialized list of special entities that appear in the poll question. It can be specified instead of question_parse_mode
  options: InputPollOption[]; // A JSON-serialized list of 2-12 answer options
  is_anonymous?: boolean; // True, if the poll needs to be anonymous, defaults to True
  type?: string; // Poll type, “quiz” or “regular”, defaults to “regular”
  allows_multiple_answers?: boolean; // True, if the poll allows multiple answers, ignored for polls in quiz mode, defaults to False
  correct_option_id?: Integer; // 0-based identifier of the correct answer option, required for polls in quiz mode
  explanation?: string; // Text that is shown when a user chooses an incorrect answer or taps on the lamp icon in a quiz-style poll, 0-200 characters with at most 2 line feeds after entities parsing
  explanation_parse_mode?: string; // Mode for parsing entities in the explanation. See formatting options for more details.
  explanation_entities?: MessageEntity[]; // A JSON-serialized list of special entities that appear in the poll explanation. It can be specified instead of explanation_parse_mode
  open_period?: Integer; // Amount of time in seconds the poll will be active after creation, 5-600. Can't be used together with close_date.
  close_date?: Integer; // Point in time (Unix timestamp) when the poll will be automatically closed. Must be at least 5 and no more than 600 seconds in the future. Can't be used together with open_period.
  is_closed?: boolean; // Pass True if the poll needs to be immediately closed. This can be useful for poll preview.
  disable_notification?: boolean; // Sends the message silently. Users will receive a notification with no sound.
  protect_content?: boolean; // Protects the contents of the sent message from forwarding and saving
  allow_paid_broadcast?: boolean; // Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance
  message_effect_id?: string; // Unique identifier of the message effect to be added to the message; for private chats only
  reply_parameters?: ReplyParameters; // Description of the message to reply to
  reply_markup?: ReplyMarkup; // Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user
};

/**
* Use this method to send a checklist on behalf of a connected business account. On success, the sent Message is
* returned.
*/
export type SendChecklistData = {
  chat_id: Integer; // Unique identifier for the target chat
  checklist: InputChecklist; // A JSON-serialized object for the checklist to send
  disable_notification?: boolean; // Sends the message silently. Users will receive a notification with no sound.
  protect_content?: boolean; // Protects the contents of the sent message from forwarding and saving
  message_effect_id?: string; // Unique identifier of the message effect to be added to the message
  reply_parameters?: ReplyParameters; // A JSON-serialized object for description of the message to reply to
  reply_markup?: InlineKeyboardMarkup; // A JSON-serialized object for an inline keyboard
};

/**
* Use this method to send an animated emoji that will display a random value. On success, the sent Message is returned.
*/
export type SendDiceData = {
  chat_id: Integer | string; // Unique identifier for the target chat or username of the target channel (in the format @channelusername)
  message_thread_id?: Integer; // Unique identifier for the target message thread (topic) of the forum; for forum supergroups only
  emoji?: string; // Emoji on which the dice throw animation is based. Currently, must be one of “🎲”, “🎯”, “🏀”, “⚽”, “🎳”, or “🎰”. Dice can have values 1-6 for “🎲”, “🎯” and “🎳”, values 1-5 for “🏀” and “⚽”, and values 1-64 for “🎰”. Defaults to “🎲”
  disable_notification?: boolean; // Sends the message silently. Users will receive a notification with no sound.
  protect_content?: boolean; // Protects the contents of the sent message from forwarding
  allow_paid_broadcast?: boolean; // Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance
  message_effect_id?: string; // Unique identifier of the message effect to be added to the message; for private chats only
  reply_parameters?: ReplyParameters; // Description of the message to reply to
  reply_markup?: ReplyMarkup; // Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user
};

/**
* Use this method when you need to tell the user that something is happening on the bot's side. The status is set for 5
* seconds or less (when a message arrives from your bot, Telegram clients clear its typing status). Returns True on
* success.
* Example: The ImageBot needs some time to process a request and upload the image. Instead of sending a text message
* along the lines of “Retrieving image, please wait…”, the bot may use sendChatAction with action = upload_photo. The
* user will see a “sending photo” status for the bot.
* We only recommend using this method when a response from the bot will take a noticeable amount of time to arrive.
*/
export type SendChatActionData = {
  chat_id: Integer | string; // Unique identifier for the target chat or username of the target channel (in the format @channelusername)
  message_thread_id?: Integer; // Unique identifier for the target message thread; for supergroups only
  action: string; // Type of action to broadcast. Choose one, depending on what the user is about to receive: typing for text messages, upload_photo for photos, record_video or upload_video for videos, record_voice or upload_voice for voice notes, upload_document for general files, choose_sticker for stickers, find_location for location data, record_video_note or upload_video_note for video notes.
};

/**
* Use this method to change the chosen reactions on a message. Service messages of some types can't be reacted to.
* Automatically forwarded messages from a channel to its discussion group have the same available reactions as messages
* in the channel. Bots can't use paid reactions. Returns True on success.
*/
export type SetMessageReactionData = {
  message_id: Integer; // Identifier of the target message. If the message belongs to a media group, the reaction is set to the first non-deleted message in the group instead.
  reaction?: ReactionType[]; // A JSON-serialized list of reaction types to set on the message. Currently, as non-premium users, bots can set up to one reaction per message. A custom emoji reaction can be used if it is either already present on the message or explicitly allowed by chat administrators. Paid reactions can't be used by bots.
  is_big?: boolean; // Pass True to set the reaction with a big animation
};

/**
* Use this method to get a list of profile pictures for a user. Returns a UserProfilePhotos object.
*/
export type GetUserProfilePhotosData = {
  offset?: Integer; // Sequential number of the first photo to be returned. By default, all photos are returned.
  limit?: Integer; // Limits the number of photos to be retrieved. Values between 1-100 are accepted. Defaults to 100.
};

/**
* Changes the emoji status for a given user that previously allowed the bot to manage their emoji status via the Mini
* App method requestEmojiStatusAccess. Returns True on success.
*/
export type SetUserEmojiStatusData = {
  emoji_status_custom_emoji_id?: string; // Custom emoji identifier of the emoji status to set. Pass an empty string to remove the status.
  emoji_status_expiration_date?: Integer; // Expiration date of the emoji status, if any
};

/**
* Use this method to get basic information about a file and prepare it for downloading. For the moment, bots can
* download files of up to 20MB in size. On success, a File object is returned. The file can then be downloaded via the
* link https://api.telegram.org/file/bot<token>/<file_path>, where <file_path> is taken from the response. It is
* guaranteed that the link will be valid for at least 1 hour. When the link expires, a new one can be requested by
* calling getFile again.
*/
export type GetFileData = {
};

/**
* Use this method to ban a user in a group, a supergroup or a channel. In the case of supergroups and channels, the user
* will not be able to return to the chat on their own using invite links, etc., unless unbanned first. The bot must be
* an administrator in the chat for this to work and must have the appropriate administrator rights. Returns True on
* success.
*/
export type BanChatMemberData = {
  user_id: Integer; // Unique identifier of the target user
  until_date?: Integer; // Date when the user will be unbanned; Unix time. If user is banned for more than 366 days or less than 30 seconds from the current time they are considered to be banned forever. Applied for supergroups and channels only.
  revoke_messages?: boolean; // Pass True to delete all messages from the chat for the user that is being removed. If False, the user will be able to see messages in the group that were sent before the user was removed. Always True for supergroups and channels.
};

/**
* Use this method to unban a previously banned user in a supergroup or channel. The user will not return to the group or
* channel automatically, but will be able to join via link, etc. The bot must be an administrator for this to work. By
* default, this method guarantees that after the call the user is not a member of the chat, but will be able to join it.
* So if the user is a member of the chat they will also be removed from the chat. If you don't want this, use the
* parameter only_if_banned. Returns True on success.
*/
export type UnbanChatMemberData = {
  user_id: Integer; // Unique identifier of the target user
  only_if_banned?: boolean; // Do nothing if the user is not banned
};

/**
* Use this method to restrict a user in a supergroup. The bot must be an administrator in the supergroup for this to
* work and must have the appropriate administrator rights. Pass True for all permissions to lift restrictions from a
* user. Returns True on success.
*/
export type RestrictChatMemberData = {
  user_id: Integer; // Unique identifier of the target user
  permissions: ChatPermissions; // A JSON-serialized object for new user permissions
  use_independent_chat_permissions?: boolean; // Pass True if chat permissions are set independently. Otherwise, the can_send_other_messages and can_add_web_page_previews permissions will imply the can_send_messages, can_send_audios, can_send_documents, can_send_photos, can_send_videos, can_send_video_notes, and can_send_voice_notes permissions; the can_send_polls permission will imply the can_send_messages permission.
  until_date?: Integer; // Date when restrictions will be lifted for the user; Unix time. If user is restricted for more than 366 days or less than 30 seconds from the current time, they are considered to be restricted forever
};

/**
* Use this method to promote or demote a user in a supergroup or a channel. The bot must be an administrator in the chat
* for this to work and must have the appropriate administrator rights. Pass False for all boolean parameters to demote a
* user. Returns True on success.
*/
export type PromoteChatMemberData = {
  user_id: Integer; // Unique identifier of the target user
  is_anonymous?: boolean; // Pass True if the administrator's presence in the chat is hidden
  can_manage_chat?: boolean; // Pass True if the administrator can access the chat event log, get boost list, see hidden supergroup and channel members, report spam messages, ignore slow mode, and send messages to the chat without paying Telegram Stars. Implied by any other administrator privilege.
  can_delete_messages?: boolean; // Pass True if the administrator can delete messages of other users
  can_manage_video_chats?: boolean; // Pass True if the administrator can manage video chats
  can_restrict_members?: boolean; // Pass True if the administrator can restrict, ban or unban chat members, or access supergroup statistics
  can_promote_members?: boolean; // Pass True if the administrator can add new administrators with a subset of their own privileges or demote administrators that they have promoted, directly or indirectly (promoted by administrators that were appointed by him)
  can_change_info?: boolean; // Pass True if the administrator can change chat title, photo and other settings
  can_invite_users?: boolean; // Pass True if the administrator can invite new users to the chat
  can_post_stories?: boolean; // Pass True if the administrator can post stories to the chat
  can_edit_stories?: boolean; // Pass True if the administrator can edit stories posted by other users, post stories to the chat page, pin chat stories, and access the chat's story archive
  can_delete_stories?: boolean; // Pass True if the administrator can delete stories posted by other users
  can_post_messages?: boolean; // Pass True if the administrator can post messages in the channel, approve suggested posts, or access channel statistics; for channels only
  can_edit_messages?: boolean; // Pass True if the administrator can edit messages of other users and can pin messages; for channels only
  can_pin_messages?: boolean; // Pass True if the administrator can pin messages; for supergroups only
  can_manage_topics?: boolean; // Pass True if the user is allowed to create, rename, close, and reopen forum topics; for supergroups only
};

/**
* Use this method to set a custom title for an administrator in a supergroup promoted by the bot. Returns True on
* success.
*/
export type SetChatAdministratorCustomTitleData = {
  user_id: Integer; // Unique identifier of the target user
  custom_title: string; // New custom title for the administrator; 0-16 characters, emoji are not allowed
};

/**
* Use this method to ban a channel chat in a supergroup or a channel. Until the chat is unbanned, the owner of the
* banned chat won't be able to send messages on behalf of any of their channels. The bot must be an administrator in the
* supergroup or channel for this to work and must have the appropriate administrator rights. Returns True on success.
*/
export type BanChatSenderChatData = {
  sender_chat_id: Integer; // Unique identifier of the target sender chat
};

/**
* Use this method to unban a previously banned channel chat in a supergroup or channel. The bot must
* be an administrator for this to work and must have the appropriate administrator rights. Returns
* True on success.
*/
export type UnbanChatSenderChatData = {
  chat_id: Integer | string; // Unique identifier for the target chat or username of the target channel (in the format @channelusername)
  sender_chat_id: Integer; // Unique identifier of the target sender chat
};

/**
* Use this method to set default chat permissions for all members. The bot must be an administrator
* in the group or a supergroup for this to work and must have the can_restrict_members administrator
* rights. Returns True on success.
*/
export type SetChatPermissionsData = {
  chat_id: Integer | string; // Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername)
  permissions: ChatPermissions; // A JSON-serialized object for new default chat permissions
  use_independent_chat_permissions?: boolean; // Pass True if chat permissions are set independently. Otherwise, the can_send_other_messages and can_add_web_page_previews permissions will imply the can_send_messages, can_send_audios, can_send_documents, can_send_photos, can_send_videos, can_send_video_notes, and can_send_voice_notes permissions; the can_send_polls permission will imply the can_send_messages permission.
};

/**
* Use this method to generate a new primary invite link for a chat; any previously generated primary
* link is revoked. The bot must be an administrator in the chat for this to work and must have the
* appropriate administrator rights. Returns the new invite link as String on success.
*/
export type ExportChatInviteLinkData = {
  chat_id: Integer | string; // Unique identifier for the target chat or username of the target channel (in the format @channelusername)
};

/**
* Use this method to create an additional invite link for a chat. The bot must be an administrator
* in the chat for this to work and must have the appropriate administrator rights. The link can be
* revoked using the method revokeChatInviteLink. Returns the new invite link as ChatInviteLink
* object.
*/
export type CreateChatInviteLinkData = {
  chat_id: Integer | string; // Unique identifier for the target chat or username of the target channel (in the format @channelusername)
  name?: string; // Invite link name; 0-32 characters
  expire_date?: Integer; // Point in time (Unix timestamp) when the link will expire
  member_limit?: Integer; // The maximum number of users that can be members of the chat simultaneously after joining the chat via this invite link; 1-99999
  creates_join_request?: boolean; // True, if users joining the chat via the link need to be approved by chat administrators. If True, member_limit can&#39;t be specified
};

/**
* Use this method to edit a non-primary invite link created by the bot. The bot must be an
* administrator in the chat for this to work and must have the appropriate administrator rights.
* Returns the edited invite link as a ChatInviteLink object.
*/
export type EditChatInviteLinkData = {
  chat_id: Integer | string; // Unique identifier for the target chat or username of the target channel (in the format @channelusername)
  invite_link: string; // The invite link to edit
  name?: string; // Invite link name; 0-32 characters
  expire_date?: Integer; // Point in time (Unix timestamp) when the link will expire
  member_limit?: Integer; // The maximum number of users that can be members of the chat simultaneously after joining the chat via this invite link; 1-99999
  creates_join_request?: boolean; // True, if users joining the chat via the link need to be approved by chat administrators. If True, member_limit can&#39;t be specified
};

/**
* Use this method to create a subscription invite link for a channel chat. The bot must have the
* can_invite_users administrator rights. The link can be edited using the method
* editChatSubscriptionInviteLink or revoked using the method revokeChatInviteLink. Returns the new
* invite link as a ChatInviteLink object.
*/
export type CreateChatSubscriptionInviteLinkData = {
  chat_id: Integer | string; // Unique identifier for the target channel chat or username of the target channel (in the format @channelusername)
  name?: string; // Invite link name; 0-32 characters
  subscription_period: Integer; // The number of seconds the subscription will be active for before the next payment. Currently, it must always be 2592000 (30 days).
  subscription_price: Integer; // The amount of Telegram Stars a user must pay initially and after each subsequent subscription period to be a member of the chat; 1-10000
};

/**
* Use this method to edit a subscription invite link created by the bot. The bot must have the
* can_invite_users administrator rights. Returns the edited invite link as a ChatInviteLink object.
*/
export type EditChatSubscriptionInviteLinkData = {
  chat_id: Integer | string; // Unique identifier for the target chat or username of the target channel (in the format @channelusername)
  invite_link: string; // The invite link to edit
  name?: string; // Invite link name; 0-32 characters
};

/**
* Use this method to revoke an invite link created by the bot. If the primary link is revoked, a new
* link is automatically generated. The bot must be an administrator in the chat for this to work and
* must have the appropriate administrator rights. Returns the revoked invite link as ChatInviteLink
* object.
*/
export type RevokeChatInviteLinkData = {
  chat_id: Integer | string; // Unique identifier of the target chat or username of the target channel (in the format @channelusername)
  invite_link: string; // The invite link to revoke
};

/**
* Use this method to approve a chat join request. The bot must be an administrator in the chat for
* this to work and must have the can_invite_users administrator right. Returns True on success.
*/
export type ApproveChatJoinRequestData = {
  chat_id: Integer | string; // Unique identifier for the target chat or username of the target channel (in the format @channelusername)
  user_id: Integer; // Unique identifier of the target user
};

/**
* Use this method to decline a chat join request. The bot must be an administrator in the chat for
* this to work and must have the can_invite_users administrator right. Returns True on success.
*/
export type DeclineChatJoinRequestData = {
  chat_id: Integer | string; // Unique identifier for the target chat or username of the target channel (in the format @channelusername)
  user_id: Integer; // Unique identifier of the target user
};

/**
* Use this method to set a new profile photo for the chat. Photos can&#39;t be changed for private
* chats. The bot must be an administrator in the chat for this to work and must have the appropriate
* administrator rights. Returns True on success.
*/
export type SetChatPhotoData = {
  chat_id: Integer | string; // Unique identifier for the target chat or username of the target channel (in the format @channelusername)
  photo: InputFile; // New chat photo, uploaded using multipart/form-data
};

/**
* Use this method to delete a chat photo. Photos can&#39;t be changed for private chats. The bot
* must be an administrator in the chat for this to work and must have the appropriate administrator
* rights. Returns True on success.
*/
export type DeleteChatPhotoData = {
  chat_id: Integer | string; // Unique identifier for the target chat or username of the target channel (in the format @channelusername)
};

/**
* Use this method to change the title of a chat. Titles can&#39;t be changed for private chats. The
* bot must be an administrator in the chat for this to work and must have the appropriate
* administrator rights. Returns True on success.
*/
export type SetChatTitleData = {
  chat_id: Integer | string; // Unique identifier for the target chat or username of the target channel (in the format @channelusername)
  title: string; // New chat title, 1-128 characters
};

/**
* Use this method to change the description of a group, a supergroup or a channel. The bot must be
* an administrator in the chat for this to work and must have the appropriate administrator rights.
* Returns True on success.
*/
export type SetChatDescriptionData = {
  chat_id: Integer | string; // Unique identifier for the target chat or username of the target channel (in the format @channelusername)
  description?: string; // New chat description, 0-255 characters
};

/**
* Use this method to add a message to the list of pinned messages in a chat. If the chat is not a
* private chat, the bot must be an administrator in the chat for this to work and must have the
* &#39;can_pin_messages&#39; administrator right in a supergroup or &#39;can_edit_messages&#39;
* administrator right in a channel. Returns True on success.
*/
export type PinChatMessageData = {
  business_connection_id?: string; // Unique identifier of the business connection on behalf of which the message will be pinned
  chat_id: Integer | string; // Unique identifier for the target chat or username of the target channel (in the format @channelusername)
  message_id: Integer; // Identifier of a message to pin
  disable_notification?: boolean; // Pass True if it is not necessary to send a notification to all chat members about the new pinned message. Notifications are always disabled in channels and private chats.
};

/**
* Use this method to remove a message from the list of pinned messages in a chat. If the chat is not
* a private chat, the bot must be an administrator in the chat for this to work and must have the
* &#39;can_pin_messages&#39; administrator right in a supergroup or &#39;can_edit_messages&#39;
* administrator right in a channel. Returns True on success.
*/
export type UnpinChatMessageData = {
  business_connection_id?: string; // Unique identifier of the business connection on behalf of which the message will be unpinned
  chat_id: Integer | string; // Unique identifier for the target chat or username of the target channel (in the format @channelusername)
  message_id?: Integer; // Identifier of the message to unpin. Required if business_connection_id is specified. If not specified, the most recent pinned message (by sending date) will be unpinned.
};

/**
* Use this method to clear the list of pinned messages in a chat. If the chat is not a private chat,
* the bot must be an administrator in the chat for this to work and must have the
* &#39;can_pin_messages&#39; administrator right in a supergroup or &#39;can_edit_messages&#39;
* administrator right in a channel. Returns True on success.
*/
export type UnpinAllChatMessagesData = {
  chat_id: Integer | string; // Unique identifier for the target chat or username of the target channel (in the format @channelusername)
};

/**
* Use this method for your bot to leave a group, supergroup or channel. Returns True on success.
*/
export type LeaveChatData = {
  chat_id: Integer | string; // Unique identifier for the target chat or username of the target supergroup or channel (in the format @channelusername)
};

/**
* Use this method to get up-to-date information about the chat. Returns a ChatFullInfo object on
* success.
*/
export type GetChatData = {
  chat_id: Integer | string; // Unique identifier for the target chat or username of the target supergroup or channel (in the format @channelusername)
};

/**
* Use this method to get a list of administrators in a chat, which aren&#39;t bots. Returns an Array
* of ChatMember objects.
*/
export type GetChatAdministratorsData = {
  chat_id: Integer | string; // Unique identifier for the target chat or username of the target supergroup or channel (in the format @channelusername)
};

/**
* Use this method to get the number of members in a chat. Returns Int on success.
*/
export type GetChatMemberCountData = {
  chat_id: Integer | string; // Unique identifier for the target chat or username of the target supergroup or channel (in the format @channelusername)
};

/**
* Use this method to get information about a member of a chat. The method is only guaranteed to work
* for other users if the bot is an administrator in the chat. Returns a ChatMember object on
* success.
*/
export type GetChatMemberData = {
  chat_id: Integer | string; // Unique identifier for the target chat or username of the target supergroup or channel (in the format @channelusername)
  user_id: Integer; // Unique identifier of the target user
};

/**
* Use this method to set a new group sticker set for a supergroup. The bot must be an administrator
* in the chat for this to work and must have the appropriate administrator rights. Use the field
* can_set_sticker_set optionally returned in getChat requests to check if the bot can use this
* method. Returns True on success.
*/
export type SetChatStickerSetData = {
  chat_id: Integer | string; // Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername)
  sticker_set_name: string; // Name of the sticker set to be set as the group sticker set
};

/**
* Use this method to delete a group sticker set from a supergroup. The bot must be an administrator
* in the chat for this to work and must have the appropriate administrator rights. Use the field
* can_set_sticker_set optionally returned in getChat requests to check if the bot can use this
* method. Returns True on success.
*/
export type DeleteChatStickerSetData = {
  chat_id: Integer | string; // Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername)
};

/**
* Use this method to get custom emoji stickers, which can be used as a forum topic icon by any user.
* Requires no parameters. Returns an Array of Sticker objects.
*/
export type GetForumTopicIconStickersData = {
};

/**
* Use this method to create a topic in a forum supergroup chat. The bot must be an administrator in
* the chat for this to work and must have the can_manage_topics administrator rights. Returns
* information about the created topic as a ForumTopic object.
*/
export type CreateForumTopicData = {
  chat_id: Integer | string; // Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername)
  name: string; // Topic name, 1-128 characters
  icon_color?: Integer; // Color of the topic icon in RGB format. Currently, must be one of 7322096 (0x6FB9F0), 16766590 (0xFFD67E), 13338331 (0xCB86DB), 9367192 (0x8EEE98), 16749490 (0xFF93B2), or 16478047 (0xFB6F5F)
  icon_custom_emoji_id?: string; // Unique identifier of the custom emoji shown as the topic icon. Use getForumTopicIconStickers to get all allowed custom emoji identifiers.
};

/**
* Use this method to edit name and icon of a topic in a forum supergroup chat. The bot must be an
* administrator in the chat for this to work and must have the can_manage_topics administrator
* rights, unless it is the creator of the topic. Returns True on success.
*/
export type EditForumTopicData = {
  chat_id: Integer | string; // Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername)
  message_thread_id: Integer; // Unique identifier for the target message thread of the forum topic
  name?: string; // New topic name, 0-128 characters. If not specified or empty, the current name of the topic will be kept
  icon_custom_emoji_id?: string; // New unique identifier of the custom emoji shown as the topic icon. Use getForumTopicIconStickers to get all allowed custom emoji identifiers. Pass an empty string to remove the icon. If not specified, the current icon will be kept
};

/**
* Use this method to close an open topic in a forum supergroup chat. The bot must be an
* administrator in the chat for this to work and must have the can_manage_topics administrator
* rights, unless it is the creator of the topic. Returns True on success.
*/
export type CloseForumTopicData = {
  chat_id: Integer | string; // Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername)
  message_thread_id: Integer; // Unique identifier for the target message thread of the forum topic
};

/**
* Use this method to reopen a closed topic in a forum supergroup chat. The bot must be an
* administrator in the chat for this to work and must have the can_manage_topics administrator
* rights, unless it is the creator of the topic. Returns True on success.
*/
export type ReopenForumTopicData = {
  chat_id: Integer | string; // Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername)
  message_thread_id: Integer; // Unique identifier for the target message thread of the forum topic
};

/**
* Use this method to delete a forum topic along with all its messages in a forum supergroup chat.
* The bot must be an administrator in the chat for this to work and must have the
* can_delete_messages administrator rights. Returns True on success.
*/
export type DeleteForumTopicData = {
  chat_id: Integer | string; // Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername)
  message_thread_id: Integer; // Unique identifier for the target message thread of the forum topic
};
