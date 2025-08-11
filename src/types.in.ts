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

export type BusinessBotRights = {
  can_reply: true; // Optional. True, if the bot can send and edit messages in the private chats that had incoming messages in the last 24 hours
  can_read_messages: true; // Optional. True, if the bot can mark incoming private messages as read
  can_delete_sent_messages: true; // Optional. True, if the bot can delete messages sent by the bot
  can_delete_all_messages: true; // Optional. True, if the bot can delete all private messages in managed chats
  can_edit_name: true; // Optional. True, if the bot can edit the first and last name of the business account
  can_edit_bio: true; // Optional. True, if the bot can edit the bio of the business account
  can_edit_profile_photo: true; // Optional. True, if the bot can edit the profile photo of the business account
  can_edit_username: true; // Optional. True, if the bot can edit the username of the business account
  can_change_gift_settings: true; // Optional. True, if the bot can change the privacy settings pertaining to gifts for the business account
  can_view_gifts_and_stars: true; // Optional. True, if the bot can view gifts and the amount of Telegram Stars owned by the business account
  can_convert_gifts_to_stars: true; // Optional. True, if the bot can convert regular gifts owned by the business account to Telegram Stars
  can_transfer_and_upgrade_gifts: true; // Optional. True, if the bot can transfer and upgrade gifts owned by the business account
  can_transfer_stars: true; // Optional. True, if the bot can transfer Telegram Stars received by the business account to its own account, or use them to upgrade and transfer gifts
  can_manage_stories: true; // Optional. True, if the bot can post, edit and delete stories on behalf of the business account
};

export type BusinessConnection = {
  id: string;
  user: User;
  user_chat_id: number;
  date: number;
  rights?: BusinessBotRights;
  is_enabled: boolean;
};

export type BusinessMessagesDeleted = {
  business_connection_id: string; // Unique identifier of the business connection
  chat: Chat; // Information about a chat in the business account. The bot may not have access to the chat or the corresponding user.
  message_ids: number[]; // The list of identifiers of deleted messages in the chat of the business account
};

export type ReactionTypeEmoji = {
  type: 'emoji';
  emoji: string;
};

export type ReactionTypeCustomEmoji = {
  type: 'custom_emoji';
  custom_emoji_id: string;
};

export type ReactionTypePaid = {
  type: 'paid';
};

export type ReactionType = ReactionTypeEmoji | ReactionTypeCustomEmoji | ReactionTypePaid;

export type MessageReactionUpdated = {
  chat: Chat; // The chat containing the message the user reacted to
  message_id: number; // Unique identifier of the message inside the chat
  user?: User; // Optional. The user that changed the reaction, if the user isn't anonymous
  actor_chat?: Chat; // Optional. The chat on behalf of which the reaction was changed, if the user is anonymous
  date: number; // Date of the change in Unix time
  old_reaction: ReactionType[]; // Previous list of reaction types that were set by the user
  new_reaction: ReactionType[]; // New list of reaction types that have been set by the user
};

export type ReactionCount = {
  type: ReactionType; // Type of the reaction
  total_count: number; // Number of times the reaction was added
};

export type MessageReactionCountUpdated = {
  chat: Chat; // The chat containing the message
  message_id: number; // Unique message identifier inside the chat
  date: number; // Date of the change in Unix time
  reactions: ReactionCount[]; // List of reactions that are present on the message
};

export type InlineQuery = {
  from: User; // Sender
  query: string; // Text of the query (up to 256 characters)
  offset: string; // Offset of the results to be returned, can be controlled by the bot
  chat_type?: string; // Optional. Type of the chat from which the inline query was sent. Can be either “sender” for a private chat with the inline query sender, “private”, “group”, “supergroup”, or “channel”. The chat type should be always known for requests sent from official clients and most third-party clients, unless the request was sent from a secret chat
  location?: Location; // Optional. Sender location, only for bots that request user location
};

export type ChosenInlineResult = {
  result_id: string; // The unique identifier for the result that was chosen
  from: User; // The user that chose the result
  location: Location; // Optional. Sender location, only for bots that require user location
  inline_message_id: string; // Optional. Identifier of the sent inline message. Available only if there is an inline keyboard attached to the message. Will be also received in callback queries and can be used to edit the message.
  query: string; // The query that was used to obtain the result
};

export type ShippingQuery = {
  id: string; // Unique query identifier
  from: User; // User who sent the query
  invoice_payload: string; // Bot-specified invoice payload
  shipping_address: ShippingAddress; // User specified shipping address
};

export type PreCheckoutQuery = {
  id: string; // Unique query identifier
  from: User; // User who sent the query
  currency: string; // Three-letter ISO 4217 currency code, or “XTR” for payments in Telegram Stars
  total_amount: number; // Total price in the smallest units of the currency (integer, not float/double). For example, for a price of US$ 1.45 pass amount = 145. See the exp parameter in currencies.json, it shows the number of digits past the decimal point for each currency (2 for the majority of currencies).
  invoice_payload: string; // Bot-specified invoice payload
  shipping_option_id?: string; // Optional. Identifier of the shipping option chosen by the user
  order_info?: OrderInfo; // Optional. Order information provided by the user
};

export type PaidMediaPurchased = {
  from: User; // User who purchased the media
  paid_media_payload: string; // Bot-specified paid media payload
};

export type PollOption = {
  text: string; // Option text, 1-100 characters
  text_entities: MessageEntity[]; // Optional. Special entities that appear in the option text. Currently, only custom emoji entities are allowed in poll option texts
  voter_count: number; // Number of users that voted for this option
};

export type Poll = {
  id: string; // Unique poll identifier
  question: string; // Poll question, 1-300 characters
  question_entities?: MessageEntity[]; // Optional. Special entities that appear in the question. Currently, only custom emoji entities are allowed in poll questions
  options: PollOption[]; // List of poll options
  total_voter_count: number; // Total number of users that voted in the poll
  is_closed: boolean; // True, if the poll is closed
  is_anonymous: boolean; // True, if the poll is anonymous
  type: 'regular' | 'quiz'; // Poll type, currently can be “regular” or “quiz”
  allows_multiple_answers: boolean; // True, if the poll allows multiple answers
  correct_option_id?: number; // Optional. 0-based identifier of the correct answer option. Available only for polls in the quiz mode, which are closed, or was sent (not forwarded) by the bot or to the private chat with the bot.
  explanation?: string; // Optional. Text that is shown when a user chooses an incorrect answer or taps on the lamp icon in a quiz-style poll, 0-200 characters
  explanation_entities?: MessageEntity[]; // Optional. Special entities like usernames, URLs, bot commands, etc. that appear in the explanation
  open_period?: number; // Optional. Amount of time in seconds the poll will be active after creation
  close_date?: number; // Optional. Point in time (Unix timestamp) when the poll will be automatically closed
};

export type PollAnswer = {
  poll_id: string; // Unique poll identifier
  voter_chat?: Chat; // Optional. The chat that changed the answer to the poll, if the voter is anonymous
  user?: User; // Optional. The user that changed the answer to the poll, if the voter isn't anonymous
  option_ids: number[]; // 0-based identifiers of chosen answer options. May be empty if the vote was retracted.
};

export type ChatMemberUpdated = {
  poll_id: string; // Unique poll identifier
  voter_chat?: Chat; // Optional. The chat that changed the answer to the poll, if the voter is anonymous
  user?: User; // Optional. The user that changed the answer to the poll, if the voter isn't anonymous
  option_ids: number[]; // 0-based identifiers of chosen answer options. May be empty if the vote was retracted.
};

export type ChatInviteLink = {
  invite_link: string; // The invite link. If the link was created by another chat administrator, then the second part of the link will be replaced with “…”.
  creator: User; // Creator of the link
  creates_join_request: boolean; // True, if users joining the chat via the link need to be approved by chat administrators
  is_primary: boolean; // True, if the link is primary
  is_revoked: boolean; // True, if the link is revoked
  name?: string; // Optional. Invite link name
  expire_date?: number; // Optional. Point in time (Unix timestamp) when the link will expire or has been expired
  member_limit?: number; // Optional. The maximum number of users that can be members of the chat simultaneously after joining the chat via this invite link; 1-99999
  pending_join_request_count?: number; // Optional. Number of pending join requests created using this link
  subscription_period?: number; // Optional. The number of seconds the subscription will be active for before the next payment
  subscription_price?: number; // Optional. The amount of Telegram Stars a user must pay initially and after each subsequent subscription period to be a member of the chat using the link
};

export type ChatJoinRequest = {
  chat: Chat; // Chat to which the request was sent
  from: User; // User that sent the join request
  user_chat_id: number; // Identifier of a private chat with the user who sent the join request. This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a 64-bit integer or double-precision float type are safe for storing this identifier. The bot can use this identifier for 5 minutes to send messages until the join request is processed, assuming no other administrator contacted the user.
  date: number; // Date the request was sent in Unix time
  bio?: string; // Optional. Bio of the user.
  invite_link?: ChatInviteLink; // Optional. Chat invite link that was used by the user to send the join request
};

export type ChatBoostSourcePremium = {
  source: 'premium'; // Source of the boost, always “premium”
  user: User; // User that boosted the chat
};

export type ChatBoostSourceGiftCode = {
  source: 'gift_code'; // Source of the boost, always “gift_code”
  user: User; // User for which the gift code was created
};

export type ChatBoostSourceGiveaway = {
  source: 'giveaway'; // Source of the boost, always “giveaway”
  giveaway_message_id: number; // Identifier of a message in the chat with the giveaway; the message could have been deleted already. May be 0 if the message isn't sent yet.
  user?: User; // Optional. User that won the prize in the giveaway if any; for Telegram Premium giveaways only
  prize_star_count?: number; // Optional. The number of Telegram Stars to be split between giveaway winners; for Telegram Star giveaways only
  is_unclaimed?: true; // Optional. True, if the giveaway was completed, but there was no user to win the prize
};

export type ChatBoostSource = ChatBoostSourcePremium | ChatBoostSourceGiftCode | ChatBoostSourceGiveaway;

export type ChatBoost = {
  boost_id: string; // Unique identifier of the boost
  add_date: number; // Point in time (Unix timestamp) when the chat was boosted
  expiration_date: number; // Point in time (Unix timestamp) when the boost will automatically expire, unless the booster's Telegram Premium subscription is prolonged
  source: ChatBoostSource; // Source of the added boost
};

export type ChatBoostUpdated = {
  chat: Chat; // Chat which was boosted
  boost: ChatBoost; // Information about the chat boost
};

export type ChatBoostRemoved = {
  chat: Chat; // Chat which was boosted
  boost_id: string; // Unique identifier of the boost
  remove_date: number; // Point in time (Unix timestamp) when the boost was removed
  source: ChatBoostSource; // Source of the removed boost
};

export type ChecklistTask = {
  text: string; // Text of the task
  text_entities: MessageEntity[]; // Optional. Special entities that appear in the task text
  completed_by_user: User; // Optional. User that completed the task; omitted if the task wasn't completed
  completion_date: number; // Optional. Point in time (Unix timestamp) when the task was completed; 0 if the task wasn't completed
};

export type Checklist = {
  title: string; // Title of the checklist
  title_entities?: MessageEntity[]; // Optional. Special entities that appear in the checklist title
  tasks: ChecklistTask[]; // List of tasks in the checklist
  others_can_add_tasks?: true; // Optional. True, if users other than the creator of the list can add tasks to the list
  others_can_mark_tasks_as_done?: true; // Optional. True, if users other than the creator of the list can mark tasks as done or not done
};

export type ExternalReplyInfo = {
  origin: MessageOrigin; // Origin of the message replied to by the given message
  chat?: Chat; // Optional. Chat the original message belongs to. Available only if the chat is a supergroup or a channel.
  message_id?: number; // Optional. Unique message identifier inside the original chat. Available only if the original chat is a supergroup or a channel.
  link_preview_options?: LinkPreviewOptions; // Optional. Options used for link preview generation for the original message, if it is a text message
  animation?: Animation; // Optional. Message is an animation, information about the animation
  audio?: Audio; // Optional. Message is an audio file, information about the file
  document?: Document; // Optional. Message is a general file, information about the file
  paid_media?: PaidMediaInfo; // Optional. Message contains paid media; information about the paid media
  photo?: PhotoSize[]; // Optional. Message is a photo, available sizes of the photo
  sticker?: Sticker; // Optional. Message is a sticker, information about the sticker
  story?: Story; // Optional. Message is a forwarded story
  video?: Video; // Optional. Message is a video, information about the video
  video_note?: VideoNote; // Optional. Message is a video note, information about the video message
  voice?: Voice; // Optional. Message is a voice message, information about the file
  has_media_spoiler?: true; // Optional. True, if the message media is covered by a spoiler animation
  checklist?: Checklist; // Optional. Message is a checklist
  contact?: Contact; // Optional. Message is a shared contact, information about the contact
  dice?: Dice; // Optional. Message is a dice with random value
  game?: Game; // Optional. Message is a game, information about the game. More about games »
  giveaway?: Giveaway; // Optional. Message is a scheduled giveaway, information about the giveaway
  giveaway_winners?: GiveawayWinners; // Optional. A giveaway with public winners was completed
  invoice?: Invoice; // Optional. Message is an invoice for a payment, information about the invoice. More about payments »
  location?: Location; // Optional. Message is a shared location, information about the location
  poll?: Poll; // Optional. Message is a native poll, information about the poll
  venue?: Venue; // Optional. Message is a venue, information about the venue
};

export type EncryptedCredentials = {
  data: string; // Base64-encoded encrypted JSON-serialized data with unique user's payload, data hashes and secrets required for EncryptedPassportElement decryption and authentication
  hash: string; // Base64-encoded data hash for data authentication
  secret: string; // Base64-encoded secret, encrypted with the bot's public RSA key, required for data decryption
};

export type PassportFile = {
  file_id: string; // Identifier for this file, which can be used to download or reuse the file
  file_unique_id: string; // Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file.
  file_size: number; // File size in bytes
  file_date: number; // Unix time when the file was uploaded
};

export type EncryptedPassportElement = {
  type: string; // Element type. One of “personal_details”, “passport”, “driver_license”, “identity_card”, “internal_passport”, “address”, “utility_bill”, “bank_statement”, “rental_agreement”, “passport_registration”, “temporary_registration”, “phone_number”, “email”.
  data?: string; // Optional. Base64-encoded encrypted Telegram Passport element data provided by the user; available only for “personal_details”, “passport”, “driver_license”, “identity_card”, “internal_passport” and “address” types. Can be decrypted and verified using the accompanying EncryptedCredentials.
  phone_number?: string; // Optional. User's verified phone number; available only for “phone_number” type
  email?: string; // Optional. User's verified email address; available only for “email” type
  files?: PassportFile[]; // Optional. Array of encrypted files with documents provided by the user; available only for “utility_bill”, “bank_statement”, “rental_agreement”, “passport_registration” and “temporary_registration” types. Files can be decrypted and verified using the accompanying EncryptedCredentials.
  front_side?: PassportFile; // Optional. Encrypted file with the front side of the document, provided by the user; available only for “passport”, “driver_license”, “identity_card” and “internal_passport”. The file can be decrypted and verified using the accompanying EncryptedCredentials.
  reverse_side?: PassportFile; // Optional. Encrypted file with the reverse side of the document, provided by the user; available only for “driver_license” and “identity_card”. The file can be decrypted and verified using the accompanying EncryptedCredentials.
  selfie?: PassportFile; // Optional. Encrypted file with the selfie of the user holding a document, provided by the user; available if requested for “passport”, “driver_license”, “identity_card” and “internal_passport”. The file can be decrypted and verified using the accompanying EncryptedCredentials.
  translation?: PassportFile[]; // Optional. Array of encrypted files with translated versions of documents provided by the user; available if requested for “passport”, “driver_license”, “identity_card”, “internal_passport”, “utility_bill”, “bank_statement”, “rental_agreement”, “passport_registration” and “temporary_registration” types. Files can be decrypted and verified using the accompanying EncryptedCredentials.
  hash: string; // Base64-encoded element hash for using in PassportElementErrorUnspecified
};

export type PassportData = {
  data: EncryptedPassportElement[]; // Array with information about documents and other Telegram Passport elements that was shared with the bot
  credentials: EncryptedCredentials; // Encrypted credentials required to decrypt the data
};

export type ProximityAlertTriggered = {
  traveler: User; // User that triggered the alert
  watcher: User; // User that set the alert
  distance: number; // The distance between the users
};

export type ChatBoostAdded = {
  boost_count: number; // Number of boosts added by the user
};

export type BackgroundFillSolid = {
  type: 'solid'; // Type of the background fill, always “solid”
  color: number; // The color of the background fill in the RGB24 format
};

export type BackgroundFillGradient = {
  type: 'gradient'; // Type of the background fill, always “gradient”
  top_color: number; // Top color of the gradient in the RGB24 format
  bottom_color: number; // Bottom color of the gradient in the RGB24 format
  rotation_angle: number; // Clockwise rotation angle of the background fill in degrees; 0-359
};

export type BackgroundFillFreeformGradient = {
  type: 'freeform_gradient'; // Type of the background fill, always “freeform_gradient”
  colors: number[]; // A list of the 3 or 4 base colors that are used to generate the freeform gradient in the RGB24 format
};

export type BackgroundFill = BackgroundFillSolid | BackgroundFillGradient | BackgroundFillFreeformGradient;

export type BackgroundTypeFill = {
  type: 'fill'; // Type of the background, always “fill”
  fill: BackgroundFill; // The background fill
  dark_theme_dimming: number; // Dimming of the background in dark themes, as a percentage; 0-100
};

export type BackgroundTypeWallpaper = {
  type: 'wallpaper'; // Type of the background, always “wallpaper”
  document: Document; // Document with the wallpaper
  dark_theme_dimming: number; // Dimming of the background in dark themes, as a percentage; 0-100
  is_blurred?: true; // Optional. True, if the wallpaper is downscaled to fit in a 450x450 square and then box-blurred with radius 12
  is_moving?: true; // Optional. True, if the background moves slightly when the device is tilted
};

export type BackgroundTypePattern = {
  type: 'pattern'; // Type of the background, always “pattern”
  document: Document; // Document with the pattern
  fill: BackgroundFill; // The background fill that is combined with the pattern
  intensity: number; // Intensity of the pattern when it is shown above the filled background; 0-100
  is_inverted?: true; // Optional. True, if the background fill must be applied only to the pattern itself. All other pixels are black in this case. For dark themes only
  is_moving?: true; // Optional. True, if the background moves slightly when the device is tilted
};

export type BackgroundType = BackgroundTypeFill | BackgroundTypeWallpaper| BackgroundTypePattern;

export type ChatBackground = {
  type: BackgroundType; // Type of the background
};

export type ForumTopicCreated = {
  name: string; // Name of the topic
  icon_color: number; // Color of the topic icon in RGB format
  icon_custom_emoji_id?: string; // Optional. Unique identifier of the custom emoji shown as the topic icon
};

export type ForumTopicEdited = {
  name?: string; // Optional. New name of the topic, if it was edited
  icon_custom_emoji_id?: string; // Optional. New identifier of the custom emoji shown as the topic icon, if it was edited; an empty string if the icon was removed
};

export type ForumTopicClosed = {};
export type ForumTopicReopened = {};
export type GeneralForumTopicHidden = {};
export type GeneralForumTopicUnhidden = {};

export type GiveawayCreated = {
  prize_star_count?: number; // Optional. The number of Telegram Stars to be split between giveaway winners; for Telegram Star giveaways only
};

export type Giveaway = {
  chats: Chat[]; // The list of chats which the user must join to participate in the giveaway
  winners_selection_date: number; // Point in time (Unix timestamp) when winners of the giveaway will be selected
  winner_count: number; // The number of users which are supposed to be selected as winners of the giveaway
  only_new_members?: true; // Optional. True, if only users who join the chats after the giveaway started should be eligible to win
  has_public_winners?: true; // Optional. True, if the list of giveaway winners will be visible to everyone
  prize_description?: string; // Optional. Description of additional giveaway prize
  country_codes?: string[]; // Optional. A list of two-letter ISO 3166-1 alpha-2 country codes indicating the countries from which eligible users for the giveaway must come. If empty, then all users can participate in the giveaway. Users with a phone number that was bought on Fragment can always participate in giveaways.
  prize_star_count?: number; // Optional. The number of Telegram Stars to be split between giveaway winners; for Telegram Star giveaways only
  premium_subscription_month_count?: number; // Optional. The number of months the Telegram Premium subscription won from the giveaway will be active for; for Telegram Premium giveaways only
};

export type GiveawayWinners = {
  chat: Chat; // The chat that created the giveaway
  giveaway_message_id: number; // Identifier of the message with the giveaway in the chat
  winners_selection_date: number; // Point in time (Unix timestamp) when winners of the giveaway were selected
  winner_count: number; // Total number of winners in the giveaway
  winners: User[]; // List of up to 100 winners of the giveaway
  additional_chat_count?: number; // Optional. The number of other chats the user had to join in order to be eligible for the giveaway
  prize_star_count?: number; // Optional. The number of Telegram Stars that were split between giveaway winners; for Telegram Star giveaways only
  premium_subscription_month_count?: number; // Optional. The number of months the Telegram Premium subscription won from the giveaway will be active for; for Telegram Premium giveaways only
  unclaimed_prize_count?: number; // Optional. Number of undistributed prizes
  only_new_members?: true; // Optional. True, if only users who had joined the chats after the giveaway started were eligible to win
  was_refunded?: true; // Optional. True, if the giveaway was canceled because the payment for it was refunded
  prize_description?: string; // Optional. Description of additional giveaway prize
};

export type GiveawayCompleted = {
  winner_count: number; // Number of winners in the giveaway
  unclaimed_prize_count?: number; // Optional. Number of undistributed prizes
  giveaway_message?: Message; // Optional. Message with the giveaway that was completed, if it wasn't deleted
  is_star_giveaway?: true; // Optional. True, if the giveaway is a Telegram Star giveaway. Otherwise, currently, the giveaway is a Telegram Premium giveaway.
};

export type VideoChatScheduled = {
  start_date: number; // Point in time (Unix timestamp) when the video chat is supposed to be started by a chat administrator
};

export type VideoChatStarted = {};

export type VideoChatEnded = {
  duration: number; // Video chat duration in seconds
};

export type VideoChatParticipantsInvited = {
  users: User[]; // New members that were invited to the video chat
};

export type WebAppData = {
  data: string; // The data. Be aware that a bad client can send arbitrary data in this field.
  button_text: string; // Text of the web_app keyboard button from which the Web App was opened. Be aware that a bad client can send arbitrary data in this field.
};

export type CallbackGame = any;

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
