/* TODO */
type BusinessConnection = {};
type BusinessMessagesDeleted = {};
type MessageReactionUpdated = {};
type MessageReactionCountUpdated = {};
type InlineQuery = {};
type ChosenInlineResult = {};
type ShippingQuery = {};
type PreCheckoutQuery = {};
type PaidMediaPurchased = {};
type Poll = {};
type PollAnswer = {};
type ChatMemberUpdated = {};
type ChatJoinRequest = {};
type ChatBoostUpdated = {};
type ChatBoostRemoved = {};

type ExternalReplyInfo = {};
type PassportData = {};
type ProximityAlertTriggered = {};
type ChatBoostAdded = {};
type ChatBackground = {};
type ForumTopicCreated = {};
type ForumTopicEdited = {};
type ForumTopicClosed = {};
type ForumTopicReopened = {};
type GeneralForumTopicHidden = {};
type GeneralForumTopicUnhidden = {};
type GiveawayCreated = {};
type Giveaway = {};
type GiveawayWinners = {};
type GiveawayCompleted = {};
type VideoChatScheduled = {};
type VideoChatStarted = {};
type VideoChatEnded = {};
type VideoChatParticipantsInvited = {};
type WebAppData = {};
/* /TODO */

type User = {
  id: number;
  is_bot: boolean;
  first_name: string;
  last_name?: string;
  username?: string;
  language_code?: string;
  is_premium?: true;
  added_to_attachment_menu?: true;
  can_join_groups?: boolean;
  can_read_all_group_messages?: boolean;
  supports_inline_queries?: boolean;
  can_connect_to_business?: boolean;
  has_main_web_app?: boolean;
};

type Chat = {
  id: number;
  type: string;
  title?: string;
  username?: string;
  first_name?: string;
  last_name?: string;
  is_forum?: true;
};

type MessageOriginUser = {
  type: string;
  date: number;
  sender_user: User;
};

type MessageOriginHiddenUser = {
  type: string;
  date: number;
  sender_user_name: string;
};

type MessageOriginChat = {
  type: string;
  date: number;
  sender_chat: Chat;
  author_signature?: string;
};

type MessageOriginChannel = {
  type: string;
  date: number;
  chat: Chat;
  message_id: number;
  author_signature?: string;
};

type MessageOrigin = MessageOriginUser | MessageOriginHiddenUser | MessageOriginChat | MessageOriginChannel;

type MessageEntityType =  'mention' | 'hashtag' | 'cashtag' | 'bot_command' | 'url' | 'email'
  | 'phone_number' | 'bold' | 'italic' | 'underline' | 'strikethrough' | 'spoiler' | 'blockquote'
  | 'expandable_blockquote' | 'code' | 'pre' | 'text_link' | 'text_mention' | 'custom_emoji';

export type MessageEntity = {
  type: MessageEntityType;
  offset: number;
  length: number;
  url?: string;
  user?: User;
  language?: string;
  custom_emoji_id?: string;
};

type TextQuote = {
  text: string;
  entities?: Array<MessageEntity>;
  position: number;
  is_manual?: true;
};

type Story = {
  id: number;
  chat: Chat;
};

export type LinkPreviewOptions = {
  is_disabled?: boolean;
  url?: string;
  prefer_small_media?: boolean;
  prefer_large_media?: boolean;
  show_above_text?: boolean;
};

type PhotoSize = {
  file_id: string;
  file_unique_id: string;
  width: number;
  height: number;
  file_size?: number;
};

type Animation = {
  file_id: string;
  file_unique_id: string;
  width: number;
  height: number;
  duration: number;
  thumbnail?: PhotoSize;
  file_name?: string;
  mime_type?: string;
  file_size?: number;
};

type Audio = {
  file_id: string;
  file_unique_id: string;
  duration: number;
  performer?: string;
  title?: string;
  file_name?: string;
  mime_type?: string;
  file_size?: number;
  thumbnail?: PhotoSize;
};

type Video = {
  file_id: string;
  file_unique_id: string;
  width: number;
  height: number;
  duration: number;
  thumbnail?: PhotoSize;
  cover?: Array<PhotoSize>;
  start_timestamp?: number;
  file_name?: string;
  mime_type?: string;
  file_size?: number;
};

type Document = {
  file_id: string;
  file_unique_id: string;
  thumbnail?: PhotoSize;
  file_name?: string;
  mime_type?: string;
  file_size?: number;
};

type PaidMediaPreview = {
  type: string;
  width?: number;
  height?: number;
  duration?: number;
};

type PaidMediaPhoto = {
  type: string;
  photo: Array<PhotoSize>;
};

type PaidMediaVideo = {
  type: string;
  video: Video;
};

type PaidMedia = PaidMediaPreview | PaidMediaPhoto | PaidMediaVideo;

type PaidMediaInfo = {
  star_count: number;
  paid_media: Array<PaidMedia>;
};

type File = {
  file_id: string;
  file_unique_id: string;
  file_size?: number;
  file_path?: string;
};

type MaskPosition = {
  point: string;
  x_shift: number;
  y_shift: number;
  scale: number;
};

type Sticker = {
  file_id: string;
  file_unique_id: string;
  type: string;
  width: number;
  height: number;
  is_animated: boolean;
  is_video: boolean;
  thumbnail?: PhotoSize;
  emoji?: string;
  set_name?: string;
  premium_animation?: File;
  mask_position?: MaskPosition;
  custom_emoji_id?: string;
  needs_repainting?: true;
  file_size?: number;
};

type VideoNote = {
  file_id: string;
  file_unique_id: string;
  length: number;
  duration: number;
  thumbnail?: PhotoSize;
  file_size?: number;
};

type Voice = {
  file_id: string;
  file_unique_id: string;
  duration: number;
  mime_type?: string;
  file_size?: number;
};

type Contact = {
  phone_number: string;
  first_name: string;
  last_name?: string;
  user_id?: number;
  vcard?: string;
};

type Dice = {
  emoji: string;
  value: number;
};

type Game = {
  title: string;
  description: string;
  photo: Array<PhotoSize>;
  text?: string;
  text_entities?: Array<MessageEntity>;
  animation?: Animation;
};

type Location = {
  latitude: number;
  longitude: number;
  horizontal_accuracy?: number;
  live_period?: number;
  heading?: number;
  proximity_alert_radius?: number;
};

type Venue = {
  location: Location;
  title: string;
  address: string;
  foursquare_id?: string;
  foursquare_type?: string;
  google_place_id?: string;
  google_place_type?: string;
};

type MessageAutoDeleteTimerChanged = {
  message_auto_delete_time: number;
};

type InaccessibleMessage = {
  chat: Chat;
  message_id: number;
  date: number;
};

type MaybeInaccessibleMessage = Message | InaccessibleMessage;

type Invoice = {
  title: string;
  description: string;
  start_parameter: string;
  currency: string;
  total_amount: number;
};

type ShippingAddress = {
  country_code: string;
  state: string;
  city: string;
  street_line1: string;
  street_line2: string;
  post_code: string;
};

type OrderInfo = {
  name?: string;
  phone_number?: string;
  email?: string;
  shipping_address?: ShippingAddress;
};

type SuccessfulPayment = {
  currency: string;
  total_amount: number;
  invoice_payload: string;
  subscription_expiration_date?: number;
  is_recurring?: true;
  is_first_recurring?: true;
  shipping_option_id?: string;
  order_info?: OrderInfo;
  telegram_payment_charge_id: string;
  provider_payment_charge_id: string;
};

type RefundedPayment = {
  currency: string;
  total_amount: number;
  invoice_payload: string;
  telegram_payment_charge_id: string;
  provider_payment_charge_id?: string;
};

type SharedUsers = {
  user_id: number;
  first_name?: string;
  last_name?: string;
  username?: string;
  photo?: Array<PhotoSize>;
};

type UsersShared = {
  request_id: number;
  users: Array<SharedUsers>;
};

type ChatShared = {
  request_id: number;
  chat_id: number;
  title?: string;
  username?: string;
  photo?: Array<PhotoSize>;
};

type WriteAccessAllowed = {
  from_request?: boolean;
  web_app_name?: string;
  from_attachment_menu?: boolean;
};

export type WebAppInfo = {
  url: string;
};

type LoginUrl = {
  url: string;
  forward_text?: string;
  bot_username?: string;
  request_write_access?: boolean;
};

type SwitchInlineQueryChosenChat = {
  query?: string;
  allow_user_chats?: boolean;
  allow_bot_chats?: boolean;
  allow_group_chats?: boolean;
  allow_channel_chats?: boolean;
};

type CopyTextButton = {
  text: string;
};

type CallbackGame = any;

type InlineKeyboardButton = {
  text: string;
  url?: string;
  callback_data?: string;
  web_app?: WebAppInfo;
  login_url?: LoginUrl;
  switch_inline_query?: string;
  switch_inline_query_current_chat?: string;
  switch_inline_query_chosen_chat?: SwitchInlineQueryChosenChat;
  copy_text?: CopyTextButton;
  callback_game?: CallbackGame;
  pay?: boolean;
};

export type InlineKeyboardMarkup = {
  inline_keyboard: Array<Array<InlineKeyboardButton>>;
};

type Message = {
  message_id: number;
  message_thread_id?: number;
  from?: User;
  sender_chat?: Chat;
  sender_boost_count?: number;
  sender_business_bot?: User;
  date: number;
  business_connection_id?: string;
  chat: Chat;
  forward_origin?: MessageOrigin;
  is_topic_message?: true;
  is_automatic_forward?: true;
  reply_to_message?: Message;
  external_reply?: ExternalReplyInfo;
  quote?: TextQuote;
  reply_to_story?: Story;
  via_bot?: User;
  edit_date?: number;
  has_protected_content?: true;
  is_from_offline?: true;
  media_group_id?: string;
  author_signature?: string;
  text?: string;
  entities?: Array<MessageEntity>;
  link_preview_options?: LinkPreviewOptions;
  effect_id?: string;
  animation?: Animation;
  audio?: Audio;
  document?: Document;
  paid_media?: PaidMediaInfo;
  photo?: Array<PhotoSize>;
  sticker?: Sticker;
  story?: Story;
  video?: Video;
  video_note?: VideoNote;
  voice?: Voice;
  caption?: string;
  caption_entities?: Array<MessageEntity>;
  show_caption_above_media?: true;
  has_media_spoiler?: true;
  contact?: Contact;
  dice?: Dice;
  game?: Game;
  poll?: Poll;
  venue?: Venue;
  location?: Location;
  new_chat_members?: Array<User>;
  left_chat_member?: User;
  new_chat_title?: string;
  new_chat_photo?: Array<PhotoSize>;
  delete_chat_photo?: true;
  group_chat_created?: true;
  supergroup_chat_created?: true;
  channel_chat_created?: true;
  message_auto_delete_timer_changed?: MessageAutoDeleteTimerChanged;
  migrate_to_chat_id?: number;
  migrate_from_chat_id?: number;
  pinned_message?: MaybeInaccessibleMessage;
  invoice?: Invoice;
  successful_payment?: SuccessfulPayment;
  refunded_payment?: RefundedPayment;
  users_shared?: UsersShared;
  chat_shared?: ChatShared;
  connected_website?: string;
  write_access_allowed?: WriteAccessAllowed;
  passport_data?: PassportData;
  proximity_alert_triggered?: ProximityAlertTriggered;
  boost_added?: ChatBoostAdded;
  chat_background_set?: ChatBackground;
  forum_topic_created?: ForumTopicCreated;
  forum_topic_edited?: ForumTopicEdited;
  forum_topic_closed?: ForumTopicClosed;
  forum_topic_reopened?: ForumTopicReopened;
  general_forum_topic_hidden?: GeneralForumTopicHidden;
  general_forum_topic_unhidden?: GeneralForumTopicUnhidden;
  giveaway_created?: GiveawayCreated;
  giveaway?: Giveaway;
  giveaway_winners?: GiveawayWinners;
  giveaway_completed?: GiveawayCompleted;
  video_chat_scheduled?: VideoChatScheduled;
  video_chat_started?: VideoChatStarted;
  video_chat_ended?: VideoChatEnded;
  video_chat_participants_invited?: VideoChatParticipantsInvited;
  web_app_data?: WebAppData;
  reply_markup?: InlineKeyboardMarkup;
};

type CallbackQuery = {
  id: string;
  from: User;
  message?: MaybeInaccessibleMessage;
  inline_message_id?: string;
  chat_instance: string;
  data?: string;
  game_short_name?: string;
};

type UpdateTypes = {
  message: Message;
  edited_message: Message;
  channel_post: Message;
  edited_channel_post: Message;
  business_connection: BusinessConnection;
  business_message: Message;
  edited_business_message: Message;
  deleted_business_messages: BusinessMessagesDeleted;
  message_reaction: MessageReactionUpdated;
  message_reaction_count: MessageReactionCountUpdated;
  inline_query: InlineQuery;
  chosen_inline_result: ChosenInlineResult;
  callback_query: CallbackQuery;
  shipping_query: ShippingQuery;
  pre_checkout_query: PreCheckoutQuery;
  purchased_paid_media: PaidMediaPurchased;
  poll: Poll;
  poll_answer: PollAnswer;
  my_chat_member: ChatMemberUpdated;
  chat_member: ChatMemberUpdated;
  chat_join_request: ChatJoinRequest;
  chat_boost: ChatBoostUpdated;
  removed_chat_boost: ChatBoostRemoved;
}

export type Update = { update_id: number } & {
  [K in keyof UpdateTypes]: {
    [K2 in K]: UpdateTypes[K2];
  };
}[keyof UpdateTypes];
