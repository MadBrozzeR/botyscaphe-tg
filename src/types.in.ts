/* TODO */
export type BusinessConnection = {};
export type BusinessMessagesDeleted = {};
export type MessageReactionUpdated = {};
export type MessageReactionCountUpdated = {};
export type InlineQuery = {};
export type ChosenInlineResult = {};
export type ShippingQuery = {};
export type PreCheckoutQuery = {};
export type PaidMediaPurchased = {};
export type Poll = {};
export type PollAnswer = {};
export type ChatMemberUpdated = {};
export type ChatJoinRequest = {};
export type ChatBoostUpdated = {};
export type ChatBoostRemoved = {};

export type ExternalReplyInfo = {};
export type PassportData = {};
export type ProximityAlertTriggered = {};
export type ChatBoostAdded = {};
export type ChatBackground = {};
export type ForumTopicCreated = {};
export type ForumTopicEdited = {};
export type ForumTopicClosed = {};
export type ForumTopicReopened = {};
export type GeneralForumTopicHidden = {};
export type GeneralForumTopicUnhidden = {};
export type GiveawayCreated = {};
export type Giveaway = {};
export type GiveawayWinners = {};
export type GiveawayCompleted = {};
export type VideoChatScheduled = {};
export type VideoChatStarted = {};
export type VideoChatEnded = {};
export type VideoChatParticipantsInvited = {};
export type WebAppData = {};
export type CallbackGame = any;
/* /TODO */

export type User = {
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

export type Chat = {
  id: number;
  type: string;
  title?: string;
  username?: string;
  first_name?: string;
  last_name?: string;
  is_forum?: true;
};

export type MessageOriginUser = {
  type: string;
  date: number;
  sender_user: User;
};

export type MessageOriginHiddenUser = {
  type: string;
  date: number;
  sender_user_name: string;
};

export type MessageOriginChat = {
  type: string;
  date: number;
  sender_chat: Chat;
  author_signature?: string;
};

export type MessageOriginChannel = {
  type: string;
  date: number;
  chat: Chat;
  message_id: number;
  author_signature?: string;
};

export type MessageOrigin = MessageOriginUser | MessageOriginHiddenUser | MessageOriginChat | MessageOriginChannel;

export type MessageEntityType =  'mention' | 'hashtag' | 'cashtag' | 'bot_command' | 'url' | 'email'
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

export type TextQuote = {
  text: string;
  entities?: Array<MessageEntity>;
  position: number;
  is_manual?: true;
};

export type Story = {
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

export type PhotoSize = {
  file_id: string;
  file_unique_id: string;
  width: number;
  height: number;
  file_size?: number;
};

export type Animation = {
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

export type Audio = {
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

export type Video = {
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

export type Document = {
  file_id: string;
  file_unique_id: string;
  thumbnail?: PhotoSize;
  file_name?: string;
  mime_type?: string;
  file_size?: number;
};

export type PaidMediaPreview = {
  type: string;
  width?: number;
  height?: number;
  duration?: number;
};

export type PaidMediaPhoto = {
  type: string;
  photo: Array<PhotoSize>;
};

export type PaidMediaVideo = {
  type: string;
  video: Video;
};

export type PaidMedia = PaidMediaPreview | PaidMediaPhoto | PaidMediaVideo;

export type PaidMediaInfo = {
  star_count: number;
  paid_media: Array<PaidMedia>;
};

export type File = {
  file_id: string;
  file_unique_id: string;
  file_size?: number;
  file_path?: string;
};

export type MaskPosition = {
  point: string;
  x_shift: number;
  y_shift: number;
  scale: number;
};

export type Sticker = {
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

export type VideoNote = {
  file_id: string;
  file_unique_id: string;
  length: number;
  duration: number;
  thumbnail?: PhotoSize;
  file_size?: number;
};

export type Voice = {
  file_id: string;
  file_unique_id: string;
  duration: number;
  mime_type?: string;
  file_size?: number;
};

export type Contact = {
  phone_number: string;
  first_name: string;
  last_name?: string;
  user_id?: number;
  vcard?: string;
};

export type Dice = {
  emoji: string;
  value: number;
};

export type Game = {
  title: string;
  description: string;
  photo: Array<PhotoSize>;
  text?: string;
  text_entities?: Array<MessageEntity>;
  animation?: Animation;
};

export type Location = {
  latitude: number;
  longitude: number;
  horizontal_accuracy?: number;
  live_period?: number;
  heading?: number;
  proximity_alert_radius?: number;
};

export type Venue = {
  location: Location;
  title: string;
  address: string;
  foursquare_id?: string;
  foursquare_type?: string;
  google_place_id?: string;
  google_place_type?: string;
};

export type MessageAutoDeleteTimerChanged = {
  message_auto_delete_time: number;
};

export type InaccessibleMessage = {
  chat: Chat;
  message_id: number;
  date: number;
};

export type MaybeInaccessibleMessage = Message | InaccessibleMessage;

export type Invoice = {
  title: string;
  description: string;
  start_parameter: string;
  currency: string;
  total_amount: number;
};

export type ShippingAddress = {
  country_code: string;
  state: string;
  city: string;
  street_line1: string;
  street_line2: string;
  post_code: string;
};

export type OrderInfo = {
  name?: string;
  phone_number?: string;
  email?: string;
  shipping_address?: ShippingAddress;
};

export type SuccessfulPayment = {
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

export type RefundedPayment = {
  currency: string;
  total_amount: number;
  invoice_payload: string;
  telegram_payment_charge_id: string;
  provider_payment_charge_id?: string;
};

export type SharedUsers = {
  user_id: number;
  first_name?: string;
  last_name?: string;
  username?: string;
  photo?: Array<PhotoSize>;
};

export type UsersShared = {
  request_id: number;
  users: Array<SharedUsers>;
};

export type ChatShared = {
  request_id: number;
  chat_id: number;
  title?: string;
  username?: string;
  photo?: Array<PhotoSize>;
};

export type WriteAccessAllowed = {
  from_request?: boolean;
  web_app_name?: string;
  from_attachment_menu?: boolean;
};

export type WebAppInfo = {
  url: string;
};

export type LoginUrl = {
  url: string;
  forward_text?: string;
  bot_username?: string;
  request_write_access?: boolean;
};

export type SwitchInlineQueryChosenChat = {
  query?: string;
  allow_user_chats?: boolean;
  allow_bot_chats?: boolean;
  allow_group_chats?: boolean;
  allow_channel_chats?: boolean;
};

export type CopyTextButton = {
  text: string;
};

export type InlineKeyboardButton = {
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

export type Message = {
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

export type CallbackQuery = {
  id: string;
  from: User;
  message?: MaybeInaccessibleMessage;
  inline_message_id?: string;
  chat_instance: string;
  data?: string;
  game_short_name?: string;
};

export type MessageUpdate = {
  update_id: number;
  message: Message;
};
export type EditedMessageUpdate = {
  update_id: number;
  edited_message: Message;
};
export type ChannelPostUpdate = {
  update_id: number;
  channel_post: Message;
};
export type EditedChannelPostUpdate = {
  update_id: number;
  edited_channel_post: Message;
};
export type BusinessConnectionUpdate = {
  update_id: number;
  business_connection: BusinessConnection;
};
export type BusinessMessageUpdate = {
  update_id: number;
  business_message: Message;
};
export type EditedBusinessMessageUpdate = {
  update_id: number;
  edited_business_message: Message;
};
export type DeletedBusinessMessageUpdate = {
  update_id: number;
  deleted_business_messages: BusinessMessagesDeleted;
};
export type MessageReactionUpdate = {
  update_id: number;
  message_reaction: MessageReactionUpdated;
};
export type MessageReactionCountUpdate = {
  update_id: number;
  message_reaction_count: MessageReactionCountUpdated;
};
export type InlineQueryUpdate = {
  update_id: number;
  inline_query: InlineQuery;
};
export type ChosenInlineResultUpdate = {
  update_id: number;
  chosen_inline_result: ChosenInlineResult;
};
export type CallbackQueryUpdate = {
  update_id: number;
  callback_query: CallbackQuery;
};
export type ShippingQueryUpdate = {
  update_id: number;
  shipping_query: ShippingQuery;
};
export type PreCheckoutQueryUpdate = {
  update_id: number;
  pre_checkout_query: PreCheckoutQuery;
};
export type PurchasedPaidMediaUpdate = {
  update_id: number;
  purchased_paid_media: PaidMediaPurchased;
};
export type PollUpdate = {
  update_id: number;
  poll: Poll;
};
export type PollAnswerUpdate = {
  update_id: number;
  poll_answer: PollAnswer;
};
export type MyChatMemberUpdate = {
  update_id: number;
  my_chat_member: ChatMemberUpdated;
};
export type ChatMemberUpdate = {
  update_id: number;
  chat_member: ChatMemberUpdated;
};
export type ChatJoinRequestUpdate = {
  update_id: number;
  chat_join_request: ChatJoinRequest;
};
export type ChatBoostUpdate = {
  update_id: number;
  chat_boost: ChatBoostUpdated;
};
export type RemovedChatBoostUpdate = {
  update_id: number;
  removed_chat_boost: ChatBoostRemoved;
};

export type Update = MessageUpdate |
  EditedMessageUpdate |
  ChannelPostUpdate |
  EditedChannelPostUpdate |
  BusinessConnectionUpdate |
  BusinessMessageUpdate |
  EditedBusinessMessageUpdate |
  DeletedBusinessMessageUpdate |
  MessageReactionUpdate |
  MessageReactionCountUpdate |
  InlineQueryUpdate |
  ChosenInlineResultUpdate |
  CallbackQueryUpdate |
  ShippingQueryUpdate |
  PreCheckoutQueryUpdate |
  PurchasedPaidMediaUpdate |
  PollUpdate |
  PollAnswerUpdate |
  MyChatMemberUpdate |
  ChatMemberUpdate |
  ChatJoinRequestUpdate |
  ChatBoostUpdate |
  RemovedChatBoostUpdate;
